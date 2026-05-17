import { SEO } from "@/components/SEO";
import { Partners } from "@/components/site/Partners";

/* FLAGS LIST (FULL - YOUR ORIGINAL + COMPLETE SET) */
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

const flagLoop = [...countries, ...countries];

const PartnersPage = () => (
  <>
    <SEO
      title="Partners — FC Metropol HP Kenya"
      description="Clubs, federations and academies across five continents partnering with FC Metropol HP Kenya."
    />

    {/* FLAGS FIRST (BEFORE ANY TEXT) */}
    <section className="pt-28 overflow-hidden border-b border-border/50 bg-card/10">
      <div className="relative overflow-hidden">

        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max gap-6 py-4 marquee">
          {flagLoop.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-2 glass rounded-full border border-white/10 whitespace-nowrap"
            >
              <span className="text-xl">{c.flag}</span>
              <span className="text-xs uppercase tracking-[0.25em] text-foreground/75">
                {c.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* HERO SECTION */}
    <section className="relative pt-24 md:pt-32 pb-24 overflow-hidden">

      {/* BACKGROUND IMAGE (PUBLIC FOLDER) */}
      <div className="absolute inset-0">
        <img
          src="/back6.jpeg"
          alt="Global football partnerships"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container-pro relative z-10">

        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
          Global Network
        </div>

        <h1 className="font-display text-5xl md:text-7xl leading-[0.9] text-white">
          Built through{" "}
          <span className="text-gradient-gold">global partnerships.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-white/75 text-lg leading-relaxed">
          FC Metropol HP connects players to clubs, academies, and football institutions
          across Africa, Europe, the Americas, and beyond — creating structured pathways
          for talent identification and professional opportunities.
        </p>

      </div>
    </section>

    {/* PARTNERS COMPONENT (UNCHANGED) */}
    <div className="reveal">
      <Partners />
    </div>
  </>
);

export default PartnersPage;
