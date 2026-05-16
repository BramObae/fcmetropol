import s1 from "/sucess1.jpeg";
import s2 from "/sucess2.jpeg";
import s3 from "/sucess3.jpeg";
import s4 from "/sucess4.jpeg";
import s5 from "/sucess5.jpeg";
import s6 from "/sucess6.jpeg";
import s7 from "/sucess7.jpeg";
import s8 from "/sucess8.jpeg";

/* ================= FLAGS ================= */
const countries = [
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "Zambia", flag: "🇿🇲" },
  { name: "Zimbabwe", flag: "🇿🇼" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Tunisia", flag: "🇹🇳" },

  /* NEW EUROPE / GLOBAL PATHWAYS */
  { name: "Slovakia", flag: "🇸🇰" },
  { name: "Slovenia", flag: "🇸🇮" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Latvia", flag: "🇱🇻" },
  { name: "Lithuania", flag: "🇱🇹" },
  { name: "Estonia", flag: "🇪🇪" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Portugal", flag: "🇵🇹" },
  { name: "England", flag: "🇬🇧" },
  { name: "Czech Republic", flag: "🇨🇿" },
  { name: "Georgia", flag: "🇬🇪" },
  { name: "Romania", flag: "🇷🇴" },
  { name: "Turkey", flag: "🇹🇷" },

  /* EDUCATION PATHWAYS */
  { name: "USA Colleges", flag: "🇺🇸" },
];

const flagLoop = [...countries, ...countries];

/* ================= STORIES ================= */
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
  <section id="stories" className="relative section-pad overflow-hidden">

    {/* ================= FLAGS CAROUSEL ================= */}
    <div className="relative overflow-hidden mb-10 border-b border-border/40">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max gap-5 py-4 marquee">
        {flagLoop.map((c, i) => (
          <div
            key={i}
            className="glass rounded-full px-5 py-2 flex items-center gap-3 whitespace-nowrap border border-white/10"
          >
            <span className="text-xl">{c.flag}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/75">
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* ================= HEADER ================= */}
    <div className="container-pro mb-14">
      <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
        Success Stories
      </div>

      <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.9]">
        Journeys shaped through{" "}
        <span className="text-gradient-gold">
          structure and opportunity.
        </span>
      </h2>

      <p className="mt-6 text-foreground/75 text-base md:text-lg max-w-3xl leading-relaxed">
        These journeys represent structured development pathways — connecting
        training, exposure, education opportunities, and international football
        progression systems designed for long-term success.
      </p>
    </div>

    {/* ================= STORIES GRID ================= */}
    <div className="container-pro grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {stories.map((s, i) => (
        <article
          key={i}
          className="overflow-hidden rounded-3xl bg-card border border-border/60 hover-lift"
        >
          {/* IMAGE (NO CROPPING) */}
          <div className="aspect-[4/5] bg-background">
            <img
              src={s.image}
              alt={`story ${i + 1}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="p-5 md:p-6">
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              “{s.quote}”
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
