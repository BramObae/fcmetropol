import fisa from "@/assets/partner-fisa.png";
import ismff from "@/assets/partner-ismff.png";

const partners = [
  { name: "FISA Pro Club", logo: fisa },
  { name: "ISMFF — Inter-School Mega Football Festival", logo: ismff },
];

// Duplicate for seamless infinite scroll
const loop = [...partners, ...partners, ...partners, ...partners];

export const Partners = () => (
  <section id="partners" className="py-20 border-y border-border/50 bg-card/20">
    <div className="container-pro mb-10">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Partners</div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
          Trusted by clubs, federations & academies.
        </h2>
        <p className="mt-3 text-foreground/70">
          We collaborate with grassroots tournaments, professional clubs and federations across
          five continents to build pathways for our players.
        </p>
      </div>
    </div>

    <div className="marquee-wrap relative overflow-hidden">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="marquee flex gap-6 w-max">
        {loop.map((p, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl px-6 py-5 flex items-center gap-4 min-w-[260px] md:min-w-[320px] hover:border-accent/60 transition"
          >
            <div className="h-16 w-16 md:h-20 md:w-20 shrink-0 grid place-items-center rounded-xl bg-background/40 p-2">
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-1">
                Featured Partner
              </div>
              <div className="font-display text-base md:text-lg leading-tight">{p.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
