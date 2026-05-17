import { SEO } from "@/components/SEO";
import { Partners } from "@/components/site/Partners";

import fisa from "@/assets/fisa.jpg";
import ismff from "@/assets/ismff.jpg";
import mbg from "@/assets/mbg.jpg";
import mbg2 from "@/assets/mbg-2.jpg";

/* FLAGS */
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

/* PARTNERS */
const partnerLogos = [
  { name: "FISA Pro Club", logo: fisa },
  { name: "ISMFF Football Festival", logo: ismff },
  { name: "Metropol Baltic Group", logo: mbg },
  { name: "FC Metropol Estonia", logo: mbg2 },
];

const PartnersPage = () => (
  <>
    <SEO
      title="Partners — FC Metropol HP Kenya"
      description="Global football partnerships creating elite player pathways."
    />

    {/* FLAGS */}
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

    {/* HERO (BRIGHTER BACKGROUND FIX) */}
    <section className="relative pt-24 md:pt-32 pb-24 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/back6.jpeg"
          alt="Global partnerships"
          className="w-full h-full object-cover"
        />

        {/* MUCH LIGHTER OVERLAY (FIXED) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-black/30" />
      </div>

      <div className="container-pro relative z-10">

        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
          Global Network
        </div>

        <h1 className="font-display text-5xl md:text-7xl leading-[0.9] text-white">
          Built through{" "}
          <span className="text-gradient-gold">global partnerships.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-white/85 text-lg leading-relaxed">
          FC Metropol HP connects players with clubs, academies, and football institutions
          across Africa, Europe, and beyond — creating real pathways into professional football.
        </p>

      </div>
    </section>

    {/* PARTNER LOGO CAROUSEL (NEW UNIQUE SECTION) */}
    <section className="py-16 overflow-hidden">

      <div className="container-pro mb-8">
        <h2 className="font-display text-3xl md:text-5xl">
          Trusted <span className="text-gradient-gold">Partners</span>
        </h2>
      </div>

      <div className="flex w-max gap-10 marquee group hover:[animation-play-state:paused]">

        {[...partnerLogos, ...partnerLogos].map((p, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center glass rounded-2xl p-6 min-w-[180px] border border-white/10 hover:scale-105 transition"
          >
            <img
              src={p.logo}
              alt={p.name}
              className="h-20 w-20 object-contain mb-3"
            />
            <span className="text-xs uppercase tracking-[0.2em] text-center text-foreground/75">
              {p.name}
            </span>
          </div>
        ))}

      </div>
    </section>

    {/* ORIGINAL PARTNERS SECTION */}
    <div className="reveal">
      <Partners />
    </div>
  </>
);

export default PartnersPage;
