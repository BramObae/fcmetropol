import { SEO } from "@/components/SEO";
import { Partners } from "@/components/site/Partners";

/* BACKGROUND IMAGE (PUBLIC) */
const bgImage = "/back6.jpeg";

/* COUNTRIES (FULL LIST) */
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

/* PARTNERS (PUBLIC FOLDER IMAGES) */
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

    {/* HERO SECTION (UNCHANGED STRUCTURE) */}
    <section className="pt-36 md:pt-44 reveal relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={bgImage}
        alt="Partners background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* LIGHTEN ONLY (NOT DARKEN) */}
      <div className="absolute inset-0 bg-white/30" />

      <div className="container-pro relative z-10">

        {/* FLAGS (CAROUSEL - ORIGINAL POSITION MAINTAINED) */}
        <div className="overflow-hidden mb-6 border border-border/40 rounded-full bg-white/60 backdrop-blur-md">

          <div className="flex w-max marquee py-3">

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

        {/* TEXT (IMPROVED BUT SAME STRUCTURE) */}
        <div className="max-w-2xl">

          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
            Global Partnerships
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[0.9]">
            Built with the{" "}
            <span className="text-gradient-gold">best in the game.</span>
          </h1>

          <p className="mt-5 text-foreground/75 text-lg">
            We collaborate with grassroots tournaments, professional clubs and federations across
            five continents to build structured pathways for football talent.
          </p>

        </div>

      </div>
    </section>

    {/* PARTNERS (UNCHANGED STRUCTURE, ONLY FIX IMAGE HANDLING) */}
    <div className="reveal">

      <div className="container-pro py-16">

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">

          {partners.map((p, i) => (
            <div
              key={i}
              className="min-w-[220px] glass-card rounded-2xl p-6 border border-white/10 flex flex-col items-center"
            >

              {/* FIX: NO CROPPING */}
              <div className="h-24 flex items-center justify-center w-full">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <p className="mt-3 text-sm text-center text-foreground/80">
                {p.name}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* ORIGINAL COMPONENT (UNCHANGED) */}
      <Partners />

    </div>

  </>
);

export default PartnersPage;
