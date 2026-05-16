import s1 from "/sucess1.jpeg";
import s2 from "/sucess2.jpeg";
import s3 from "/sucess3.jpeg";
import s4 from "/sucess4.jpeg";
import s5 from "/sucess5.jpeg";
import s6 from "/sucess6.jpeg";
import s7 from "/sucess7.jpeg";
import s8 from "/sucess8.jpeg";

const stories = [
  {
    image: s1,
    quote:
      "Through structured development and consistent exposure, we have seen players transition from local environments into competitive international pathways built on discipline and performance.",
  },
  {
    image: s2,
    quote:
      "Every step of the journey is intentional — from training environments to visibility — ensuring players are prepared for opportunities beyond their home surroundings.",
  },
  {
    image: s3,
    quote:
      "We focus on building complete athletes, combining technical growth, mindset development, and professional readiness for global football standards.",
  },
  {
    image: s4,
    quote:
      "The pathway is designed to bridge the gap between raw talent and professional opportunity through structured scouting and development systems.",
  },
  {
    image: s5,
    quote:
      "Consistency, discipline, and exposure remain the foundation of every progression we support within our football ecosystem.",
  },
  {
    image: s6,
    quote:
      "We believe in creating environments where talent is not just identified, but fully developed and positioned for the right opportunities.",
  },
  {
    image: s7,
    quote:
      "From early-stage development to advanced competitive exposure, every phase is aligned to long-term football success.",
  },
  {
    image: s8,
    quote:
      "Our system is built to ensure that potential is transformed into performance through structured guidance and global visibility.",
  },
];

export const Stories = () => (
  <section id="stories" className="section-pad">
    <div className="container-pro">
      {/* HEADER */}
      <div className="mb-12 md:mb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
          Success Stories
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.9] max-w-4xl">
          Journeys shaped through{" "}
          <span className="text-gradient-gold">structure and opportunity.</span>
        </h2>

        <p className="mt-6 text-foreground/75 max-w-2xl text-base md:text-lg leading-relaxed">
          These moments represent collective progress — players developing
          through structured training, exposure, and international pathways
          designed to elevate potential into professional readiness.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
        {stories.map((s, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-3xl bg-card border border-border/60 hover-lift"
          >
            {/* IMAGE */}
            <div className="aspect-[4/5] bg-background relative overflow-hidden">
              <img
                src={s.image}
                alt={`success story ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-contain bg-background transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            </div>

            {/* TEXT */}
            <div className="absolute bottom-0 inset-x-0 p-5 md:p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Development Journey
              </div>

              <p className="text-sm md:text-base text-foreground/80 italic leading-relaxed">
                “{s.quote}”
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
