import { SEO } from "@/components/SEO";
import { Partners } from "@/components/site/Partners";

/* BACKGROUND IMAGE (PUBLIC FOLDER) */
const bgImage = "/back6.jpeg";

/* PARTNER IMAGES (PUBLIC FOLDER) */
const partners = [
  {
    name: "FISA Pro Club",
    logo: "/fisa.jpg",
  },
  {
    name: "ISMFF Football Festival",
    logo: "/ismff.jpg",
  },
  {
    name: "Metropol Baltic Group",
    logo: "/mbg.jpg",
  },
  {
    name: "FC Metropol Estonia",
    logo: "/mbg-2.jpg",
  },
  {
    name: "Safer Nairobi Initiative",
    logo: "/safernairobi initiative.jpeg",
  },
  {
    name: "Tennessee Tempo FC",
    logo: "/Tennessee Tempo FC.jpeg",
  },
];

/* COUNTRIES (FULL LIST YOU PROVIDED EARLIER) */
const countries = [
  { code: "ke", name: "Kenya" },
  { code: "tz", name: "Tanzania" },
  { code: "rw", name: "Rwanda" },
  { code: "za", name: "South Africa" },
  { code: "zm", name: "Zambia" },
  { code: "zw", name: "Zimbabwe" },
  { code: "eg", name: "Egypt" },
  { code: "tn", name: "Tunisia" },
  { code: "ma", name: "Morocco" },
  { code: "ee", name: "Estonia" },
  { code: "gb", name: "United Kingdom" },
  { code: "us", name: "United States" },
  { code: "br", name: "Brazil" },
];

const loopFlags = [...countries, ...countries];

const PartnersPage = () => (
  <>
    <SEO
      title="Partners — FC Metropol HP Kenya"
      description="Clubs, federations, academies and initiatives across five continents partnering with FC Metropol HP Kenya."
    />

    {/* BACKGROUND HERO (BRIGHTENED - NO DARK OVERLAY) */}
    <section className="relative pt-36 md:pt-44 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Partners background"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* LIGHT OVERLAY ONLY (BRIGHT - NOT DARK) */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />

      <div className="relative z-10 container-pro">

        {/* FLAGS FIRST (ABOVE EVERYTHING) */}
        <div className="mb-10 overflow-hidden rounded-full border border-black/10 bg-white/60 backdrop-blur-md">
          <div className="flex w-max animate-marquee py-3">
            {loopFlags.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 whitespace-nowrap"
              >
                <img
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  alt={c.name}
                  className="w-6 h-4 object-cover rounded-sm"
                />
                <span className="text-xs uppercase tracking-[0.25em] text-black/70">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* HEADER */}
        <div className="max-w-3xl">

          <div className="text-xs uppercase tracking-[0.35em] text-accent mb-3">
            Global Partnerships Network
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[0.9] text-black">
            Built through
            <span className="text-gradient-gold"> trust, football & vision.</span>
          </h1>

          <p className="mt-6 text-black/80 text-lg leading-relaxed">
            FC Metropol HP operates across multiple continents, connecting clubs,
            academies, tournaments and development initiatives into one global
            football ecosystem focused on opportunity creation for players.
          </p>
        </div>

      </div>
    </section>

    {/* PARTNERS SECTION */}
    <section className="py-20">
      <div className="container-pro">

        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-5xl">
            Our trusted <span className="text-gradient-gold">partners</span>
          </h2>

          <p className="text-foreground/70 mt-3 max-w-2xl">
            Organizations working with us to identify talent, build pathways,
            and support football development across Africa and beyond.
          </p>
        </div>

        {/* PARTNER CAROUSEL */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">

          {partners.map((p, i) => (
            <div
              key={i}
              className="min-w-[220px] md:min-w-[260px] glass-card rounded-2xl p-6 flex flex-col items-center justify-center border border-white/10"
            >
              <div className="h-28 w-full flex items-center justify-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-24 w-auto object-contain"
                />
              </div>

              <p className="mt-4 text-sm text-center text-foreground/80">
                {p.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>

  </>
);

export default PartnersPage;
