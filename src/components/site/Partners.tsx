import mbg from "@/assets/mbg.jpg";

export const Partners = () => {
  return (
    <section className="relative overflow-hidden py-24 border-y border-border/40">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={mbg}
          alt=""
          className="h-full w-full object-cover opacity-15"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />

      <div className="relative z-10 container-pro">

        {/* LABEL */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/70">
              International Collaboration Network
            </span>
          </div>
        </div>

        {/* TITLE */}
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            Football connections
            <br />
            without borders.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-foreground/75">
            FC Metropol HP operates within a global football ecosystem built on
            shared vision, development structures and long-term collaboration.
            Each partnership strengthens the pathway from grassroots talent to
            professional opportunities across multiple regions of the game.
          </p>

        </div>

        {/* SHORT IMPACT WORDING BLOCKS */}
        <div className="mt-14 grid gap-6 md:grid-cols-3 text-center">

          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="font-display text-xl mb-2">Scouting Links</h3>
            <p className="text-sm text-foreground/70">
              Shared talent identification systems across regions.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="font-display text-xl mb-2">Development Pathways</h3>
            <p className="text-sm text-foreground/70">
              Structured progression from youth football to elite levels.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="font-display text-xl mb-2">Global Access</h3>
            <p className="text-sm text-foreground/70">
              Direct exposure to clubs, academies and professional networks.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
