import { useEffect, useMemo, useRef, useState } from "react";
import { X, Loader2, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useDriveImages, DriveImage } from "@/hooks/useDriveImages";

const FOLDERS = [
  { id: "1-1K8h65wDK7hwXPSDCnjJN6HVOJTTzjM", label: "Training & Trials" },
  { id: "1DtKEq9xbPFIQ4mbnMvJXNun39aLhZy2D", label: "Match Day" },
];

const MAX_TOTAL = 100;
const PAGE_SIZE = 12;

type Item = DriveImage & { folder: string; label: string };

export const DriveGallery = ({ compact = false }: { compact?: boolean }) => {
  const [active, setActive] = useState<string>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [visible, setVisible] = useState<number>(PAGE_SIZE);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const a = useDriveImages(FOLDERS[0].id);
  const b = useDriveImages(FOLDERS[1].id);

  const all = useMemo<Item[]>(() => {
    const merged: Item[] = [
      ...a.images.map((i) => ({ ...i, folder: FOLDERS[0].id, label: FOLDERS[0].label })),
      ...b.images.map((i) => ({ ...i, folder: FOLDERS[1].id, label: FOLDERS[1].label })),
    ];
    // newest first
    merged.sort((x, y) => {
      const tx = x.createdTime ? Date.parse(x.createdTime) : 0;
      const ty = y.createdTime ? Date.parse(y.createdTime) : 0;
      return ty - tx;
    });
    return merged.slice(0, MAX_TOTAL);
  }, [a.images, b.images]);

  const filtered = active === "all" ? all : all.filter((i) => i.folder === active);

  // reset paging when filter changes
  useEffect(() => setVisible(PAGE_SIZE), [active]);

  const display = compact ? filtered.slice(0, 8) : filtered.slice(0, visible);
  const loading = a.loading || b.loading;
  const hasMore = !compact && visible < filtered.length;

  const close = () => setOpenIdx(null);
  const next = () =>
    setOpenIdx((i) => (i === null ? i : (i + 1) % display.length));
  const prev = () =>
    setOpenIdx((i) => (i === null ? i : (i - 1 + display.length) % display.length));

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIdx, display.length]);

  const current = openIdx !== null ? display[openIdx] : null;

  const counts = {
    all: all.length,
    [FOLDERS[0].id]: all.filter((i) => i.folder === FOLDERS[0].id).length,
    [FOLDERS[1].id]: all.filter((i) => i.folder === FOLDERS[1].id).length,
  } as Record<string, number>;

  return (
    <div>
      {!compact && (
        <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
          {[{ id: "all", label: "All" }, ...FOLDERS].map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              aria-pressed={active === c.id}
              className={`min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                active === c.id
                  ? "bg-accent text-accent-foreground shadow-[var(--shadow-gold)]"
                  : "border border-border text-foreground/70 hover:border-accent/50 active:scale-95"
              }`}
            >
              {c.label}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                active === c.id ? "bg-accent-foreground/15" : "bg-card/60 text-muted-foreground"
              }`}>{counts[c.id] ?? 0}</span>
            </button>
          ))}
        </div>
      )}

      {loading && display.length === 0 ? (
        <div className="grid place-items-center py-20 text-muted-foreground">
          <Loader2 className="animate-spin text-accent mb-3" />
          Loading gallery…
        </div>
      ) : display.length === 0 ? (
        <div className="text-muted-foreground py-20 text-center">No images yet.</div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 [grid-auto-rows:160px] sm:[grid-auto-rows:200px] md:[grid-auto-rows:240px]">
            {display.map((it, i) => (
              <button
                key={it.id}
                onClick={() => setOpenIdx(i)}
                className={`group relative overflow-hidden rounded-2xl active:scale-[0.98] transition ${
                  i % 7 === 0 ? "row-span-2" : ""
                }`}
              >
                <img
                  src={it.url}
                  alt={it.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-accent">{it.label}</div>
                </div>
              </button>
            ))}
          </div>

          {hasMore && (
            <div className="flex flex-col items-center gap-2 mt-8">
              <button
                onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, filtered.length))}
                className="min-h-[44px] inline-flex items-center gap-2 px-6 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 active:scale-95 transition shadow-[var(--shadow-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Plus size={16} /> Show more
              </button>
              <div className="text-xs text-muted-foreground">
                Showing {display.length} of {filtered.length}
              </div>
            </div>
          )}
        </>
      )}

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md grid place-items-center p-3 sm:p-6 animate-fade-up touch-none"
          onClick={close}
          onTouchStart={(e) => {
            const t = e.touches[0];
            touchStart.current = { x: t.clientX, y: t.clientY };
          }}
          onTouchEnd={(e) => {
            if (!touchStart.current) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - touchStart.current.x;
            const dy = t.clientY - touchStart.current.y;
            touchStart.current = null;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
              dx < 0 ? next() : prev();
            } else if (dy > 80) {
              close();
            }
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 h-12 w-12 rounded-full glass grid place-items-center z-10"
            aria-label="Close"
          >
            <X />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass grid place-items-center z-10"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass grid place-items-center z-10"
            aria-label="Next"
          >
            <ChevronRight />
          </button>
          <img
            src={current.url}
            alt={current.name}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-xl select-none"
            draggable={false}
          />
          <div className="absolute bottom-4 left-0 right-0 text-center text-xs uppercase tracking-[0.25em] text-accent">
            {openIdx! + 1} / {display.length} · {current.label}
          </div>
        </div>
      )}
    </div>
  );
};
