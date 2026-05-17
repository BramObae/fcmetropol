import { SEO } from "@/components/SEO";
import { Partners } from "@/components/site/Partners";

/* BACKGROUND (PUBLIC) */
const bgImage = "/back6.jpeg";

/* COUNTRIES (FULL LIST YOU PROVIDED) */
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

/* PARTNERS */
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
      description="Global football partnerships building structured pathways for talent across continents."
    />

    {/* ===================== */}
    {/* HERO SECTION */}
    {/* ===================== */}
    <section className="relative pt-36 md:pt-44 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={bgImage}
        alt="Partners background"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />

      {/* LIGHT OVERLAY (KEEP IMAGE VISIBLE) */}
      <div className="absolute inset-0 bg-white/25" />

      <div className="relative z-10 container-pro">

        {/* ===================== */}
        {/* FLAGS CAROUSEL */}
        {/* ===================== */}
        <div className="mb-10 overflow-hidden rounded-full border border-black/10 bg-white/60 backdrop-blur-md">
          <div className="flex w-max animate-marquee py-3">

            {loopFlags.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 whitespace-nowrap"
              >
                <span className="text-xl">{c.flag}</span>

                <span className="text-xs uppercase tracking-[0.25em] text-black/70">
                  {c.name}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* ===================== */}
        {/* HERO TEXT */}
        {/* ===================== */}
        <div className="max-w-3xl">

          <div className="text-xs uppercase tracking-[0.35em] text-accent mb-3">
            Global Football Network
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[0.9] text-black">
            Partnerships built on
            <span className="text-gradient-gold"> trust, development & opportunity.</span>
          </h1>

          <p className="mt-6 text-black/80 text-lg leading-relaxed">
            FC Metropol HP collaborates with clubs, academies, festivals and
            development organizations across continents to create structured
            football pathways for talented players.
          </p>

        </div>
      </div>
    </section>

    {/* ===================== */}
    {/* PARTNERS SECTION */}
    {/* ===================== */}
    <section className="py-20">
      <div className="container-pro">

        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-5xl">
            Our <span className="text-gradient-gold">partners</span>
          </h2>

          <p className="text-foreground/70 mt-3 max-w-2xl">
            Working together with trusted organizations that share our mission
            of developing football talent and creating global opportunities.
          </p>
        </div>

        {/* PARTNER CAROUSEL */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">

          {partners.map((p, i) => (
            <div
              key={i}
              className="min-w-[240px] glass-card rounded-2xl p-6 flex flex-col items-center border border-white/10"
            >

              {/* LOGO (NO CROPPING) */}
              <div className="h-28 flex items-center justify-center w-full">
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

    {/* KEEP ORIGINAL COMPONENT BELOW */}
    <div className="reveal">
      <Partners />
    </div>

  </>
);

export default PartnersPage;
