import fisa from "@/assets/partner-fisa.png";
import ismff from "@/assets/partner-ismff.png";

const featured = [
  { name: "FISA Pro Club", logo: fisa },
  { name: "ISMFF — Inter-School Mega Football Festival", logo: ismff },
];

const network = [
  "Metropol HP", "Kenya FA", "Elite Scout", "Pro Pathway", "Global Trials",
  "Football Africa", "Beyond Sport", "United Goals", "Pitch Co.",
];

export const Partners = () => (
  <section id="partners" className="py-20 border-y border-border/50 bg-card/20">
    <div className="container-pro mb-12">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Partners</div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl">Trusted by clubs, federations & academies.</h2>
          <p className="mt-3 text-foreground/70 max-w-xl">
            We collaborate with grassroots tournaments, professional clubs and federations across
            five continents to build pathways for our players.
          </p>
        </div>
      </div>
    </div>

    {/* Featured partner cards */}
    <div className="container-pro mb-12">
      <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {featured.map((p) => (
          <div
            key={p.name}
            className="glass-card rounded-2xl p-6 md:p-8 flex items-center gap-5 hover:border-accent/60 transition group"
          >
            <div className="h-20 w-20 md:h-24 md:w-24 shrink-0 grid place-items-center rounded-xl bg-background/40">
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                loading="lazy"
                className="max-h-full max-w-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-1">Featured Partner</div>
              <div className="font-display text-lg md:text-xl leading-tight">{p.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Network marquee */}
    <div className="marquee-wrap relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="marquee flex gap-8 md:gap-16 w-max">
        {[...network, ...network].map((p, i) => (
          <div
            key={i}
            className="shrink-0 px-6 md:px-10 py-4 md:py-6 rounded-2xl border border-border/60 bg-card/40 grid place-items-center min-w-[160px] md:min-w-[220px] hover:border-accent/60 transition group"
          >
            <span className="font-display text-lg md:text-2xl tracking-wide text-foreground/50 group-hover:text-accent transition-colors">
              {p.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
