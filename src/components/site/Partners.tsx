const partners = [
  "Metropol HP", "Kenya FA", "Elite Scout", "Pro Pathway", "Global Trials",
  "Football Africa", "Beyond Sport", "Sport Vision", "United Goals", "Pitch Co.",
];

export const Partners = () => (
  <section id="partners" className="py-20 border-y border-border/50 bg-card/20">
    <div className="container-pro mb-10">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Partners</div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl">Trusted by clubs, federations & academies.</h2>
        </div>
      </div>
    </div>

    <div className="marquee-wrap relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="marquee flex gap-8 md:gap-16 w-max">
        {[...partners, ...partners].map((p, i) => (
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
