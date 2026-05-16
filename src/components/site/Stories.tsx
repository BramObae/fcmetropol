const stories = [
  {
    image: "/sucess1.jpeg",
    quote:
      "I moved from unnoticed local football into a structured pathway that finally gave my talent direction and visibility.",
  },
  {
    image: "/sucess2.jpeg",
    quote:
      "For the first time, my performance was seen beyond my environment — I became part of a wider scouting system.",
  },
  {
    image: "/sucess3.jpeg",
    quote:
      "I stopped playing without direction. Every session now had purpose, structure, and measurable progression.",
  },
  {
    image: "/sucess4.jpeg",
    quote:
      "My journey shifted from uncertainty to a defined pathway with real opportunities and professional standards.",
  },
  {
    image: "/sucess5.jpeg",
    quote:
      "I began to understand what elite football demands — discipline, consistency, and a mindset built for growth.",
  },
  {
    image: "/sucess6.jpeg",
    quote:
      "My game evolved beyond local competition into a performance level that matches international expectations.",
  },
  {
    image: "/sucess7.jpeg",
    quote:
      "With structure and guidance, raw ability was refined into consistent, high-level performance.",
  },
  {
    image: "/sucess8.jpeg",
    quote:
      "What once felt like potential became a real pathway — built on exposure, development, and opportunity.",
  },
];

export const Stories = () => (
  <section id="stories" className="section-pad">
    <div className="container-pro">

      {/* HEADER */}
      <div className="flex items-end justify-between gap-6 mb-12 md:mb-16 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Success Stories
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.9] max-w-4xl">
            A collective journey shaped by{" "}
            <span className="text-gradient-gold">structure and opportunity.</span>
          </h2>

          <p className="mt-5 text-foreground/75 max-w-2xl leading-relaxed">
            These experiences reflect a shared transformation — from raw talent to structured
            development systems that open real pathways into higher levels of football.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {stories.map((s, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-3xl bg-card border border-border/60 hover-lift"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src={s.image}
                alt="success story"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-5 md:p-7">
                <p className="text-foreground/85 italic leading-relaxed text-sm md:text-base">
                  "{s.quote}"
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
