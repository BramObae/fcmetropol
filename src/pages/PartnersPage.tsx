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
  { name: "Safer Nairobi Initiative", logo: "/safernairobi initiative.png" },
  { name: "Tennessee Tempo FC", logo: "/Tennessee Tempo FC.png" },
];

const partnerLoop = [...partners, ...partners];

const PartnersPage = () => (
  <>
    <SEO
      title="Partners — FC Metropol HP Kenya"
      description="Global football partners supporting talent development and player pathways."
    />

    {/* COUNTRY NETWORK */}
    <section className="pt-36 border-b border-border/40 overflow-hidden">
      <div className="text-center mb-6">
        <div className="text-xs uppercase tracking-[0.35em] text-accent">
          International Network
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

    {/* PARTNER LOGOS */}
    <section className="py-14 overflow-hidden">
      <div className="text-center mb-8">
        <div className="text-xs uppercase tracking-[0.35em] text-accent">
          Strategic Partners
        </div>
      </div>

      <div className="flex w-max marquee gap-10 items-center">

        {partnerLoop.map((p, i) => (
          <div
            key={i}
            className="
              glass-card
              min-w-[220px]
              sm:min-w-[260px]
              md:min-w-[300px]
              lg:min-w-[340px]
              rounded-3xl
              border
              border-white/10
              p-6
              flex
              flex-col
              items-center
              justify-center
              hover:border-accent/30
              transition-all
              duration-300
            "
          >

            <div
              className="
                h-28
                sm:h-32
                md:h-36
                lg:h-40
                w-full
                flex
                items-center
                justify-center
              "
            >
              <img
                src={p.logo}
                alt={p.name}
                className="
                  max-h-24
                  sm:max-h-28
                  md:max-h-32
                  lg:max-h-36
                  max-w-full
                  object-contain
                  transition-all
                  duration-300
                  hover:scale-105
                "
                loading="lazy"
              />
            </div>

            <p className="mt-4 text-xs md:text-sm font-medium text-center text-foreground/75">
              {p.name}
            </p>

          </div>
        ))}

      </div>
    </section>

    {/* CONTENT */}
    <section className="container-pro pb-24 text-center">

      <div className="max-w-4xl mx-auto">

        <div className="text-xs uppercase tracking-[0.35em] text-accent mb-4">
          Global Football Ecosystem
        </div>

        <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
          Building pathways through
          <span className="text-gradient-gold"> international partnerships</span>
        </h1>

        <p className="mt-6 text-foreground/75 text-base md:text-lg leading-relaxed">
          FC Metropol HP Kenya collaborates with football clubs, academies,
          scouting organizations, development initiatives and industry leaders
          across Africa, Europe, North America, South America and the Gulf region.
        </p>

        <p className="mt-5 text-foreground/70 text-base md:text-lg leading-relaxed">
          Through this growing network, talented players gain access to
          international exposure, elite development opportunities, educational
          pathways, professional club connections and global football environments.
        </p>

        <p className="mt-8 text-sm uppercase tracking-[0.25em] text-accent">
          Connecting talent • Creating opportunity • Expanding horizons
        </p>

      </div>

    </section>
  </>
);

export default PartnersPage;
