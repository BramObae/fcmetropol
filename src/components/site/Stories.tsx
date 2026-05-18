import s1 from "/sucess1.jpeg";
import s2 from "/sucess2.jpeg";
import s3 from "/sucess3.jpeg";
import s4 from "/sucess4.jpeg";
import s5 from "/sucess5.jpeg";
import s6 from "/sucess6.jpeg";
import s7 from "/sucess7.jpeg";
import s8 from "/sucess8.jpeg";

/* MWANAHALIMA IMAGES (2 IMAGES) */
import mwanahalima1 from "/Mwanahalima.jpeg";
import mwanahalima2 from "/Mwanahalima1.jpeg";

const stories = [
  {
    image: s1,
    title: "Egypt Project — Parsitau Naikada & Negmat Sinai",
    quote:
      "Ongoing structured development project focused on talent identification and regional football exposure in Egypt.",
  },
  {
    image: s2,
    title: "Eze Jerry",
    quote:
      "A development journey shaped through discipline, structured training, and competitive performance environments.",
  },
  {
    image: s3,
    quote:
      "We focus on building complete athletes prepared for modern football demands through structured preparation.",
  },
  {
    image: s4,
    quote:
      "Every stage is designed to transform raw potential into measurable progress through professional systems.",
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
      "From foundational development to elite exposure, every step is aligned with long-term football progression.",
  },
  {
    image: s8,
    quote:
      "The system ensures readiness, visibility, and opportunity through structured development pathways.",
  },
];

export const Stories = () => (
  <section id="stories" className="section-pad">
    <div className="container-pro">

      {/* HEADER */}
      <div className="mb-14 max-w-3xl">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
          Success Stories
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.9]">
          Journeys shaped through{" "}
          <span className="text-gradient-gold">
            structure and opportunity.
          </span>
        </h2>

        <p className="mt-6 text-foreground/75 text-base md:text-lg leading-relaxed">
          Structured football pathways connecting talent development, exposure,
          and professional readiness across international environments.
        </p>
      </div>

      {/* FEATURED MWANAHALIMA (PROFESSIONAL LAYOUT) */}
      <div className="mb-14">
        <div className="glass-card rounded-3xl overflow-hidden border border-white/10 grid lg:grid-cols-2">

          {/* IMAGES SIDE */}
          <div className="grid grid-cols-2 gap-1 bg-black/10">
            <img
              src={mwanahalima1}
              alt="Mwanahalima Jereko"
              className="w-full h-[420px] object-contain bg-black/5"
            />
            <img
              src={mwanahalima2}
              alt="Mwanahalima Jereko"
              className="w-full h-[420px] object-contain bg-black/5"
            />
          </div>

          {/* TEXT SIDE */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Featured Success Story
            </div>

            <h3 className="text-3xl font-semibold">
              Mwanahalima Jereko
            </h3>

            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-accent">
              HB Køge · Danish Women Premier League
            </p>

            <p className="mt-5 text-foreground/75 leading-relaxed">
              Harambee Starlets Assistant Captain with international experience in elite
              European football environments. A leader shaping the next generation of
              African women football talent through exposure and structured development.
            </p>
          </div>

        </div>
      </div>

      {/* GRID STORIES */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {stories.map((s, i) => (
          <article
            key={i}
            className="overflow-hidden rounded-3xl bg-card border border-border/60 hover-lift"
          >

            {/* IMAGE */}
            <div className="aspect-[4/5] bg-background">
              <img
                src={s.image}
                alt={s.title || `story-${i}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* TEXT */}
            <div className="p-5 md:p-6">
              {s.title && (
                <h3 className="text-sm font-semibold mb-2 text-accent">
                  {s.title}
                </h3>
              )}

              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                “{s.quote}”
              </p>
            </div>

          </article>
        ))}

      </div>

    </div>
  </section>
);
