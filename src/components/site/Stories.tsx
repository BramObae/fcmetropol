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
      "A structured pathway built on discipline, consistency, and guided development has allowed talent to grow into competitive readiness.",
  },
  {
    image: s2,
    quote:
      "Progress is driven by clear systems that connect training, exposure, and opportunity into one continuous development journey.",
  },
  {
    image: s3,
    quote:
      "We focus on building complete athletes prepared for modern football demands through structured preparation and performance support.",
  },
  {
    image: s4,
    quote:
      "Every stage is designed to transform raw potential into measurable progress through professional football environments.",
  },
  {
    image: s5,
    quote:
      "Consistency and structured development remain at the core of every advancement within the pathway.",
  },
  {
    image: s6,
    quote:
      "Talent grows best in environments where guidance, exposure, and opportunity are intentionally aligned.",
  },
  {
    image: s7,
    quote:
      "From foundational development to advanced exposure, every step is aligned with long-term football progression.",
  },
  {
    image: s8,
    quote:
      "The system is designed to ensure readiness, visibility, and opportunity are achieved through structured development.",
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
          These moments represent collective development progress — built
          through structured training, exposure systems, and pathways designed
          to prepare players for competitive football environments.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {stories.map((s, i) => (
          <article
            key={i}
            className="group overflow-hidden rounded-3xl bg-card border border-border/60 hover-lift"
          >
            {/* IMAGE (CLEAN — NO TEXT OVERLAY) */}
            <div className="aspect-[4/5] bg-background">
              <img
                src={s.image}
                alt={`success story ${i + 1}`}
                className="w-full h-full object-contain bg-background transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* TEXT BELOW IMAGE */}
            <div className="p-5 md:p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Development Journey
              </div>

              <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
                “{s.quote}”
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
