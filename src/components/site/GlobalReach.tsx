import { useState } from "react";

const regions = [
  { id: "africa", name: "Africa", count: "12 nations", paths: ["Egyptian Premier League trials", "South African PSL placement", "Moroccan Botola academies"] },
  { id: "europe", name: "Europe", count: "14 nations", paths: ["Portuguese Liga 3 contracts", "Belgian Pro League trials", "Spanish Segunda academies"] },
  { id: "america", name: "America", count: "5 nations", paths: ["MLS Next Pro pathways", "Brazilian Série B trials", "USL Championship placements"] },
  { id: "asia", name: "Asia", count: "6 nations", paths: ["J-League academy spots", "K-League trials", "Thai League placements"] },
  { id: "middle-east", name: "Middle East", count: "5 nations", paths: ["Saudi Pro League trials", "UAE academy placements", "Qatari Stars League"] },
];

export const GlobalReach = () => {
  const [active, setActive] = useState(regions[0].id);
  const current = regions.find((r) => r.id === active)!;
  return (
    <section id="global" className="section-pad relative overflow-hidden">
      <div className="container-pro">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Global Reach</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.9]">
            One program. <span className="text-gradient-gold">Five continents.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Region selector */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {regions.map((r) => (
              <button
                key={r.id}
                onClick={() => setActive(r.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border text-sm transition-all duration-300 ${
                  active === r.id
                    ? "bg-accent text-accent-foreground border-accent shadow-[var(--shadow-gold)]"
                    : "border-border bg-card/40 text-foreground/80 hover:border-accent/50"
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div className="glass-card rounded-3xl p-6 md:p-10">
            <div className="flex items-baseline justify-between mb-6 gap-3 flex-wrap">
              <h3 className="font-display text-3xl md:text-4xl">{current.name}</h3>
              <span className="text-accent text-sm uppercase tracking-widest">{current.count}</span>
            </div>
            <ul className="space-y-4">
              {current.paths.map((path) => (
                <li key={path} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {path}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative orb */}
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
    </section>
  );
};
