import { SEO } from "@/components/SEO";

/* COUNTRIES */
const countries = [
  { code: "ke", name: "Kenya", flag: "🇰🇪" },
  { code: "tz", name: "Tanzania", flag: "🇹🇿" },
  { code: "rw", name: "Rwanda", flag: "🇷🇼" },
  { code: "za", name: "South Africa", flag: "🇿🇦" },
  { code: "zm", name: "Zambia", flag: "🇿🇲" },
  { code: "zw", name: "Zimbabwe", flag: "🇿🇼" },
  { code: "eg", name: "Egypt", flag: "🇪🇬" },
  { code: "tn", name: "Tunisia", flag: "🇹🇳" },
  { code: "ma", name: "Morocco", flag: "🇲🇦" },
  { code: "ee", name: "Estonia", flag: "🇪🇪" },
  { code: "gb", name: "United Kingdom", flag: "🇬🇧" },
  { code: "us", name: "United States", flag: "🇺🇸" },
  { code: "br", name: "Brazil", flag: "🇧🇷" },
];

const loopFlags = [...countries, ...countries];

/* PARTNERS (PUBLIC IMAGES) */
const partners = [
  { name: "FISA Pro Club", logo: "/fisa.png" },
  { name: "ISMFF Festival", logo: "/ismff.png" },
  { name: "Metropol Baltic Group", logo: "/mbg.png" },
  { name: "FC Metropol Estonia", logo: "/mbg-2.png" },
  { name: "Safer Nairobi Initiative", logo: "/safernairobi initiative.png" },
  { name: "Tennessee Tempo FC", logo: "/Tennessee Tempo FC.png" },
];

const PartnersPage = () => (
  <>
    <SEO
      title="Partners — FC Metropol HP Kenya"
      description="Global football partners supporting talent development and player pathways."
    />

    {/* FLAGS CAROUSEL */}
    <section className="pt-36 border-b border-border/40 overflow-hidden">
      <div className="flex w-max marquee py-4">
        {loopFlags.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 whitespace-nowrap"
          >
            <span className="text-xl">{c.flag}</span>
            <span className="text-xs uppercase tracking-[0.25em] text-foreground/70">
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </section>

    {/* PARTNER LOGO CAROUSEL */}
    <section className="py-10 overflow-hidden">
      <div className="flex w-max marquee gap-8">
        {[...partners, ...partners].map((p, i) => (
          <div
            key={i}
            className="min-w-[200px] flex flex-col items-center justify-center"
          >
            <div className="h-20 flex items-center justify-center">
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-16 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* MESSAGE SECTION */}
    <section className="container-pro pb-20 text-center">
      
      <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
        Built on global <span className="text-gradient-gold">football connections</span>
      </h1>

      <p className="mt-5 text-foreground/70 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
        We are actively partnered with clubs, academies, initiatives, and development programs
        across multiple countries.  
        <br /><br />
        This growing network is designed to create real opportunities for players —
        connecting talent from Africa to Europe, the Americas, and emerging football regions worldwide.
      </p>

      <p className="mt-6 text-foreground/60 text-sm">
        Our mission is simple: open doors where football alone is not enough.
      </p>

    </section>
  </>
);

export default PartnersPage;
