import fisa from "@/assets/partner-fisa.png";
import ismff from "@/assets/partner-ismff.png";

const partners = [
  { name: "FISA Pro Club", logo: fisa },
  { name: "ISMFF — Inter-School Mega Football Festival", logo: ismff },
];

export const Partners = () => (
  <section id="partners" className="py-20 border-y border-border/50 bg-card/20">
    <div className="container-pro mb-12">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Partners</div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl">
          Trusted by clubs, federations & academies.
        </h2>
        <p className="mt-3 text-foreground/70">
          We collaborate with grassroots tournaments, professional clubs and federations across
          five continents to build pathways for our players.
        </p>
      </div>
    </div>

    {/* Partner logo grid */}
    <div className="container-pro">
      <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {partners.map((p) => (
          <div
            key={p.name}
            className="glass-card rounded-2xl p-6 md:p-8 flex items-center gap-5 hover:border-accent/60 transition group"
          >
            <div className="h-24 w-24 md:h-28 md:w-28 shrink-0 grid place-items-center rounded-xl bg-background/40 p-3">
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                loading="lazy"
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-1">
                Featured Partner
              </div>
              <div className="font-display text-lg md:text-xl leading-tight">{p.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
