import { useEffect, useRef } from "react";

const POSTS = [
  {
    type: "twitter" as const,
    url: "https://x.com/FCMHPACADEMYKE/status/2040076562570133551",
  },
  {
    type: "instagram" as const,
    url: "https://www.instagram.com/p/DWrFCFLDaCN/",
  },
  {
    type: "facebook" as const,
    url: "https://www.facebook.com/share/p/18CfFHVknY/",
  },
];

const loadScript = (src: string, id: string) =>
  new Promise<void>((resolve) => {
    if (document.getElementById(id)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.id = id;
    s.async = true;
    s.onload = () => resolve();
    document.body.appendChild(s);
  });

export const SocialFeed = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      await Promise.all([
        loadScript("https://platform.twitter.com/widgets.js", "twitter-wjs"),
        loadScript("https://www.instagram.com/embed.js", "instagram-wjs"),
      ]);
      // @ts-expect-error global injected by twitter
      window.twttr?.widgets?.load(ref.current);
      // @ts-expect-error global injected by instagram
      window.instgrm?.Embeds?.process();
    })();
  }, []);

  return (
    <div ref={ref} className="grid lg:grid-cols-3 gap-6 [&_.twitter-tweet]:!mx-auto">
      {/* Twitter / X */}
      <div className="rounded-3xl glass-card p-4 overflow-hidden">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3 px-2">From X</div>
        <blockquote className="twitter-tweet" data-theme="dark">
          <a href={POSTS[0].url}>Loading post…</a>
        </blockquote>
      </div>

      {/* Instagram */}
      <div className="rounded-3xl glass-card p-4 overflow-hidden">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3 px-2">From Instagram</div>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={POSTS[1].url}
          data-instgrm-version="14"
          style={{ background: "transparent", margin: 0, maxWidth: "100%" }}
        >
          <a href={POSTS[1].url}>Loading post…</a>
        </blockquote>
      </div>

      {/* Facebook (link card — FB embed iframe requires app id; use rich link instead) */}
      <div className="rounded-3xl glass-card p-6 flex flex-col">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">From Facebook</div>
        <p className="text-foreground/75 mb-6 flex-1">
          See the latest community update from FC Metropol HP Kenya on Facebook —
          training highlights, scout visits and player call-ups.
        </p>
        <a
          href={POSTS[2].url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:brightness-110 transition"
        >
          Open Facebook post →
        </a>
      </div>
    </div>
  );
};
