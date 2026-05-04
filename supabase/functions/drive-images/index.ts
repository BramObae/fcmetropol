// Lists images from a Google Drive folder via the Lovable connector gateway.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_drive/drive/v3";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    const folderId = url.searchParams.get("folderId");
    const size = url.searchParams.get("size") ?? "s1600";
    if (!folderId) {
      return new Response(JSON.stringify({ error: "folderId required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GOOGLE_DRIVE_API_KEY = Deno.env.get("GOOGLE_DRIVE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");
    if (!GOOGLE_DRIVE_API_KEY) throw new Error("GOOGLE_DRIVE_API_KEY missing");

    const params = new URLSearchParams({
      q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
      fields: "files(id,name,mimeType,thumbnailLink,createdTime)",
      pageSize: "200",
      orderBy: "createdTime desc",
    });

    const r = await fetch(`${GATEWAY_URL}/files?${params}`, {
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_DRIVE_API_KEY,
      },
    });
    const data = await r.json();
    if (!r.ok) throw new Error(`Drive ${r.status}: ${JSON.stringify(data)}`);

    const files = (data.files ?? []).map((f: any) => ({
      id: f.id,
      name: f.name,
      // upscale the thumbnail by replacing the trailing =sNNN size token
      url: f.thumbnailLink ? f.thumbnailLink.replace(/=s\d+(-c)?$/, `=${size}`) : null,
      thumb: f.thumbnailLink,
    })).filter((f: any) => f.url);

    return new Response(JSON.stringify({ files }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
