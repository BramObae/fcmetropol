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
  { name: "FISA Pro Club", logo: "/fisa.jpg" },
  { name: "ISMFF Festival", logo: "/ismff.jpg" },
  { name: "Metropol Baltic Group", logo: "/mbg.jpg" },
  { name: "FC Metropol Estonia", logo: "/mbg-2.jpg" },
  { name: "Safer Nairobi Initiative", logo: "/safernairobi initiative.jpeg" },
  { name: "Tennessee Tempo FC", logo: "/Tennessee Tempo FC.jpeg" },
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

    {/* PARTNER LOGO CAROUSEL (DIRECTLY BELOW FLAGS) */}
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

    {/* SIMPLE WORDING (MINIMAL & CLEAN) */}
    <section className="container-pro pb-20 text-center">

      <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
        Built on global <span className="text-gradient-gold">football trust</span>
      </h1>

      <p className="mt-5 text-foreground/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        We work with clubs, academies, and initiatives that believe in one thing —
        giving talent a real pathway into professional football.
      </p>

    </section>
  </>
);

export default PartnersPage;
