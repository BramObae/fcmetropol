import fisa from "@/assets/fisa.jpg";
import ismff from "@/assets/ismff.jpg";
import mbg from "@/assets/mbg.jpg";
import mbg2 from "@/assets/mbg-2.jpg";

import bg from "@/assets/partners-bg.jpg";

const partners = [
  { name: "FISA Pro Club", logo: fisa },
  { name: "ISMFF — Inter-School Mega Football Festival", logo: ismff },
  { name: "Metropol Baltic Group", logo: mbg },
  { name: "Metropol Global Division", logo: mbg2 },
];

// 🌍 FULL GLOBAL FOOTBALL NETWORK
const countries = [
  // Europe
  { code: "gb", name: "United Kingdom" },
  { code: "ee", name: "Estonia" },

  // North America
  { code: "us", name: "United States" },

  // South America
  { code: "br", name: "Brazil" },

  // Africa
  { code: "ke", name: "Kenya" },
  { code: "tz", name: "Tanzania" },
  { code: "rw", name: "Rwanda" },
  { code: "za", name: "South Africa" },
  { code: "zm", name: "Zambia" },
  { code: "zw", name: "Zimbabwe" },
  { code: "eg", name: "Egypt" },
  { code: "tn", name: "Tunisia" },
  { code: "ma", name: "Morocco" },

  // Asia / Middle East (placeholder expansion ready)
];

const loopPartners = [...partners, ...partners, ...partners];
const loopCountries = [...countries, ...countries, ...countries];

export const Partners = () => (
  <section className="relative py-24 border-y border-border/40 overflow-hidden">

    {/* BACKGROUND IMAGE */}
    <img
      src={bg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-35"
    />

    {/* SOFT CINEMATIC OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/85" />

    <div className="relative z-10 container-pro">

      {/* HEADER */}
      <div className="max-w-3xl mb-14">

        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
          Global Scouting & Development Network
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-tight">
          A worldwide ecosystem of clubs,<br />
          academies & performance partners.
        </h2>

        <p className="mt-4 text-foreground/75 text-sm sm:text-base leading-relaxed">
          FC Metropol HP operates as part of an international football ecosystem,
          connecting elite development pathways across{" "}
          <span className="text-foreground font-medium">Europe, Africa, North America, and South America</span>.
          Our network includes sister clubs, federations, academies, and talent development partners.
        </p>

      </div>

      {/* PARTNERS MARQUEE */}
      <div className="relative overflow-hidden mb-16">

        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max marquee group hover:[animation-play-state:paused] gap-6">

          {loopPartners.map((p, i) => (
            <div
              key={i}
              className="glass-card rounded-3xl px-6 py-5 flex items-center gap-5 min-w-[300px] md:min-w-[360px] border border-white/10"
            >
              <div className="h-16 w-16 md:h-20 md:w-20 grid place-items-center rounded-2xl bg-white/5 p-2">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-1">
                  Strategic Partner
                </div>
                <div className="font-display text-base md:text-lg leading-tight">
                  {p.name}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* COUNTRIES TITLE */}
      <div className="mb-4">
        <div className="text-xs uppercase tracking-[0.3em] text-accent">
          Active & Emerging Football Markets
        </div>
      </div>

      {/* COUNTRIES MARQUEE */}
      <div className="relative overflow-hidden">

        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max marquee group hover:[animation-play-state:paused] gap-6">

          {loopCountries.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-2 glass px-5 py-3 rounded-full whitespace-nowrap border border-white/10"
            >
              <img
                src={`https://flagcdn.com/w40/${c.code}.png`}
                className="h-4 w-6 rounded-sm object-cover"
                alt={c.name}
              />
              <span className="text-xs uppercase tracking-wider text-foreground/70">
                {c.name}
              </span>
            </div>
          ))}

        </div>
      </div>

    </div>
  </section>
);
