import { SEO } from "@/components/SEO";
import { Join } from "@/components/site/Join";

/* FLAGS DATA */
const countries = [
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Zambia", flag: "🇿🇲" },
  { name: "Zimbabwe", flag: "🇿🇼" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Tunisia", flag: "🇹🇳" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Estonia", flag: "🇪🇪" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "United States", flag: "🇺🇸" },
];

const loop = [...countries, ...countries];

const JoinPage = () => (
  <>
    <SEO
      title="Join the Program — FC Metropol HP Kenya"
      description="Apply to FC Metropol HP Kenya. Submit your details and a short showcase. Open to players age 15–25."
    />

    {/* HERO SECTION */}
    <section className="pt-28 md:pt-36 pb-4">
      <div className="container-pro">

        {/* FLAGS MARQUEE */}
        <div className="relative overflow-hidden mb-10">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          {/* moving flags */}
          <div className="flex gap-5 w-max marquee">
            {loop.map((c, i) => (
              <div
                key={i}
                className="glass rounded-full px-5 py-3 flex items-center gap-3 whitespace-nowrap border border-white/10"
              >
                <span className="text-xl">{c.flag}</span>
                <span className="uppercase tracking-[0.2em] text-xs text-foreground/75">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* TEXT */}
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
          Join
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] max-w-4xl">
          Your trial <span className="text-gradient-gold">starts here.</span>
        </h1>
      </div>
    </section>

    {/* FORM / JOIN COMPONENT */}
    <Join />
  </>
);

export default JoinPage;
