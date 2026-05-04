import { useMemo, useState } from "react";
import { X, Loader2 } from "lucide-react";
import { useDriveImages } from "@/hooks/useDriveImages";

const FOLDERS = [
  { id: "1-1K8h65wDK7hwXPSDCnjJN6HVOJTTzjM", label: "Training & Trials" },
  { id: "1DtKEq9xbPFIQ4mbnMvJXNun39aLhZy2D", label: "Match Day" },
];

type LightboxItem = { url: string; name: string };

export const DriveGallery = ({ compact = false }: { compact?: boolean }) => {
  const [active, setActive] = useState<string>("all");
  const [open, setOpen] = useState<LightboxItem | null>(null);

  const a = useDriveImages(FOLDERS[0].id);
  const b = useDriveImages(FOLDERS[1].id);

  const all = useMemo(
    () => [
      ...a.images.map((i) => ({ ...i, folder: FOLDERS[0].id, label: FOLDERS[0].label })),
      ...b.images.map((i) => ({ ...i, folder: FOLDERS[1].id, label: FOLDERS[1].label })),
    ],
    [a.images, b.images]
  );

  const filtered = active === "all" ? all : all.filter((i) => i.folder === active);
  const display = compact ? filtered.slice(0, 8) : filtered;
  const loading = a.loading || b.loading;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {[{ id: "all", label: "All" }, ...FOLDERS].map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              active === c.id
                ? "bg-accent text-accent-foreground"
                : "border border-border text-foreground/70 hover:border-accent/50"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {loading && display.length === 0 ? (
        <div className="grid place-items-center py-20 text-muted-foreground">
          <Loader2 className="animate-spin text-accent mb-3" />
          Loading gallery from Drive…
        </div>
      ) : display.length === 0 ? (
        <div className="text-muted-foreground py-20 text-center">No images yet.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 [grid-auto-rows:180px] md:[grid-auto-rows:240px]">
          {display.map((it, i) => (
            <button
              key={it.id}
              onClick={() => setOpen({ url: it.url, name: it.name })}
              className={`group relative overflow-hidden rounded-2xl ${
                i % 7 === 0 ? "row-span-2" : ""
              }`}
            >
              <img
                src={it.url}
                alt={it.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent">{it.label}</div>
              </div>
            </button>
          ))}
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md grid place-items-center p-6 animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full glass grid place-items-center"
            aria-label="Close"
          >
            <X />
          </button>
          <img src={open.url} alt={open.name} className="max-h-[85vh] max-w-full rounded-xl" />
        </div>
      )}
    </div>
  );
};
