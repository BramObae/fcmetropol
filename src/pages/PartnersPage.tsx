import { SEO } from "@/components/SEO";
import { Partners } from "@/components/site/Partners";

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

/* PARTNERS (PUBLIC FOLDER) */
const partners = [
  { name: "FISA Pro Club", logo: "/fisa.jpg" },
  { name: "ISMFF Football Festival", logo: "/ismff.jpg" },
  { name: "Metropol Baltic Group", logo: "/mbg.jpg" },
  { name: "FC Metropol Estonia", logo: "/mbg-2.jpg" },
  { name: "Safer Nairobi Initiative", logo: "/safernairobi initiative.jpeg" },
  { name: "Tennessee Tempo FC", logo: "/Tennessee Tempo FC.jpeg" },
];

const PartnersPage = () => (
  <>
    <SEO
      title="Partners — FC Metropol HP Kenya"
      description="Clubs, federations and academies across five continents partnering with FC Metropol HP Kenya."
    />

    {/* FLAGS SECTION (CAROUSEL) */}
    <section className="pt-36 md:pt-44 border-b border-border/40">

      <div className="overflow-hidden bg-card/20">

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

      </div>

      {/* HEADER TEXT */}
      <div className="container-pro mt-10">

        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
          Partners
        </div>

        <h1 className="font-display text-5xl md:text-7xl leading-[0.9]">
          Built with the{" "}
          <span className="text-gradient-gold">best in the game.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-foreground/75 text-lg">
          We collaborate with clubs, academies, federations and grassroots tournaments
          across multiple continents to build real football pathways for players.
        </p>

      </div>
    </section>

    {/* PARTNERS CAROUSEL (NEW CLEAN VERSION) */}
    <section className="py-16">

      <div className="container-pro">

        <div className="overflow-hidden">

          <div className="flex w-max marquee gap-6">

            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="min-w-[220px] glass-card rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center"
              >

                {/* SAFE IMAGE (NO CROPPING EVER) */}
                <div className="h-24 w-full flex items-center justify-center">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <p className="mt-3 text-sm text-center text-foreground/80">
                  {p.name}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>

    {/* ORIGINAL PARTNERS COMPONENT (UNCHANGED) */}
    <div className="reveal">
      <Partners />
    </div>

  </>
);

export default PartnersPage;
