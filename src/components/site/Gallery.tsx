import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import h1 from "@/assets/hero-1.jpg";
import h3 from "@/assets/hero-3.jpg";

type Item = { src: string; cat: string; title: string };

const items: Item[] = [
  { src: g1, cat: "Training", title: "Speed & cone drills" },
  { src: g2, cat: "Matches", title: "Match day finish" },
  { src: h1, cat: "Trials", title: "Sunset trial" },
  { src: g4, cat: "Events", title: "Tactical session" },
  { src: g3, cat: "Matches", title: "Victory roar" },
  { src: h3, cat: "Trials", title: "Focus & grit" },
];

const cats = ["All", "Training", "Matches", "Trials", "Events"];

export const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<Item | null>(null);
  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <section id="gallery" className="section-pad relative">
      <div className="container-pro">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Gallery</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              Inside the <span className="text-gradient-gold">program.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === c
                    ? "bg-accent text-accent-foreground"
                    : "border border-border text-foreground/70 hover:border-accent/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 [grid-auto-rows:200px] md:[grid-auto-rows:280px]">
          {filtered.map((it, i) => (
            <button
              key={it.title + i}
              onClick={() => setOpen(it)}
              className={`group relative overflow-hidden rounded-2xl ${
                i % 5 === 0 ? "row-span-2" : ""
              }`}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent mb-1">{it.cat}</div>
                <div className="font-medium">{it.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

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
          <img src={open.src} alt={open.title} className="max-h-[85vh] max-w-full rounded-xl" />
        </div>
      )}
    </section>
  );
};
