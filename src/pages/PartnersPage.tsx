import { SEO } from "@/components/SEO";

/* COUNTRIES */
const countries = [
  { code: "ke", name: "Kenya", flag: "🇰🇪" },
  { code: "tz", name: "Tanzania", flag: "🇹🇿" },
  { code: "ug", name: "Uganda", flag: "🇺🇬" },
  { code: "rw", name: "Rwanda", flag: "🇷🇼" },
  { code: "bi", name: "Burundi", flag: "🇧🇮" },
  { code: "ss", name: "South Sudan", flag: "🇸🇸" },
  { code: "et", name: "Ethiopia", flag: "🇪🇹" },
  { code: "so", name: "Somalia", flag: "🇸🇴" },

  { code: "za", name: "South Africa", flag: "🇿🇦" },
  { code: "zm", name: "Zambia", flag: "🇿🇲" },
  { code: "zw", name: "Zimbabwe", flag: "🇿🇼" },
  { code: "ng", name: "Nigeria", flag: "🇳🇬" },
  { code: "gh", name: "Ghana", flag: "🇬🇭" },
  { code: "sn", name: "Senegal", flag: "🇸🇳" },

  { code: "eg", name: "Egypt", flag: "🇪🇬" },
  { code: "tn", name: "Tunisia", flag: "🇹🇳" },
  { code: "ma", name: "Morocco", flag: "🇲🇦" },
  { code: "dz", name: "Algeria", flag: "🇩🇿" },

  { code: "ee", name: "Estonia", flag: "🇪🇪" },
  { code: "dk", name: "Denmark", flag: "🇩🇰" },
  { code: "de", name: "Germany", flag: "🇩🇪" },
  { code: "fr", name: "France", flag: "🇫🇷" },
  { code: "es", name: "Spain", flag: "🇪🇸" },
  { code: "it", name: "Italy", flag: "🇮🇹" },
  { code: "pt", name: "Portugal", flag: "🇵🇹" },
  { code: "gb", name: "United Kingdom", flag: "🇬🇧" },

  { code: "br", name: "Brazil", flag: "🇧🇷" },
  { code: "ar", name: "Argentina", flag: "🇦🇷" },
  { code: "us", name: "United States", flag: "🇺🇸" },
  { code: "ca", name: "Canada", flag: "🇨🇦" },

  { code: "qa", name: "Qatar", flag: "🇶🇦" },
  { code: "ae", name: "United Arab Emirates", flag: "🇦🇪" },
];

const loopFlags = [...countries, ...countries];

/* PARTNERS */
const partners = [
  { name: "FISA Pro Club", logo: "/fisa.png" },
  { name: "ISMFF Festival", logo: "/ismff.png" },
  { name: "Metropol Baltic Group", logo: "/mbg.png" },
  { name: "FC Metropol Estonia", logo: "/mbg-2.png" },
  { name: "Safer Nairobi Initiative", logo: "/safernairobi_initiative.png" },
  { name: "Tennessee Tempo FC", logo: "/Tennessee Tempo FC.png" },
];

const partnerLoop = [...partners, ...partners];

const PartnersPage = () => (
  <>
    <SEO
      title="Partners — FC Metropol HP Kenya"
      description="Global football partners supporting talent development and player pathways."
    />

    {/* COUNTRIES SECTION */}
    <section className="pt-36 border-b border-border/40 overflow-hidden">
      <div className="text-center mb-4">
        <div className="text-xs uppercase tracking-[0.35em] text-accent">
          Global Network
        </div>
      </div>

      <div className="flex w-max marquee py-5">
        {loopFlags.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 whitespace-nowrap"
          >
            <span className="text-2xl">{c.flag}</span>
            <span className="text-xs uppercase tracking-[0.25em] text-foreground/70">
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </section>

    {/* PARTNERS SECTION */}
    <section className="py-14 overflow-hidden">
      <div className="text-center mb-8">
        <div className="text-xs uppercase tracking-[0.35em] text-accent">
          Strategic Partners
        </div>
      </div>

      <div className="flex w-max marquee gap-6 items-center">

        {partnerLoop.map((p, i) => (
          <div
            key={i}
            className="
              glass-card
              min-w-[180px]
              sm:min-w-[200px]
              md:min-w-[220px]
              lg:min-w-[240px]
              rounded-3xl
              border
              border-white/10
              p-5
              flex
              flex-col
              items-center
              justify-center
              transition-all
              duration-300
              hover:border-accent/30
            "
          >
            <div className="h-20 sm:h-24 md:h-24 lg:h-28 flex items-center justify-center w-full">
              <img
                src={p.logo}
                alt={p.name}
                className="
                  max-h-16
                  sm:max-h-20
                  md:max-h-20
                  lg:max-h-24
                  max-w-full
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-105
                "
                loading="lazy"
              />
            </div>

            <p className="mt-3 text-xs md:text-sm text-center text-foreground/75">
              {p.name}
            </p>
          </div>
        ))}

      </div>
    </section>

    {/* DESCRIPTION */}
    <section className="container-pro pb-24 text-center">
      <div className="max-w-4xl mx-auto">

        <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
          Built on global{" "}
          <span className="text-gradient-gold">football connections</span>
        </h1>

        <p className="mt-6 text-foreground/75 text-base md:text-lg leading-relaxed">
          FC Metropol HP Kenya collaborates with clubs, academies, football initiatives,
          and development programs across Africa, Europe, the Americas, and the Gulf region.
        </p>

        <p className="mt-5 text-foreground/70 text-sm md:text-base leading-relaxed">
          Our network is designed to create real pathways for players — from grassroots
          football to professional environments worldwide.
        </p>

        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-accent">
          Opportunity • Exposure • Development • Progress
        </p>

      </div>
    </section>
  </>
);

export default PartnersPage;
