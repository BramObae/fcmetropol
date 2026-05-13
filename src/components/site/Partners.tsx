import fisa from "@/assets/fisa.jpg";
import ismff from "@/assets/ismff.jpg";
import mbg from "@/assets/mbg.jpg";
import mbg2 from "@/assets/mbg-2.jpg";

const partners = [
  { name: "FISA Pro Club", logo: fisa },
  { name: "ISMFF — Inter-School Mega Football Festival", logo: ismff },
  { name: "Metropol Baltic Group", logo: mbg },
  { name: "Metropol Global Division", logo: mbg2 },
];

// 🌍 Global network footprint
const countries = [
  { code: "gb", name: "United Kingdom" },
  { code: "ee", name: "Estonia" },
  { code: "us", name: "United States" },
  { code: "br", name: "Brazil" },

  { code: "ke", name: "Kenya" },
  { code: "tz", name: "Tanzania" },
  { code: "rw", name: "Rwanda" },
  { code: "za", name: "South Africa" },
  { code: "zm", name: "Zambia" },
  { code: "zw", name: "Zimbabwe" },
  { code: "eg", name: "Egypt" },
  { code: "tn", name: "Tunisia" },
  { code: "ma", name: "Morocco" },
];

const loopPartners = [...partners, ...partners, ...partners];
const loopCountries = [...countries, ...countries, ...countries];

export const Partners = () => {
  return (
    <section className="relative py-28 border-y border-border/40 overflow-hidden">

      {/* SAFE BACKGROUND (NO MISSING FILE ISSUE) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/85" />

      {/* optional soft texture using existing images */}
      <div className="absolute inset-0 opacity-10">
        <img src={mbg} className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 container-pro">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">

          <div className="text-xs uppercase tracking-[0.35em] text-accent mb-4">
            Global Football Ecosystem
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Clubs, academies & partners<br />
            across a worldwide network.
          </h2>

          <p className="mt-5 text-foreground/75 text-sm sm:text-base leading-relaxed">
            FC Metropol HP operates within a global football structure,
            connected to FC Metropol Estonia — a club competing in{" "}
            <span className="text-accent font-semibold">Estonia Division 2</span> —
            and the Metropol Baltic Group.

            <br /><br />

            The network spans Europe, Africa, North America, South America,
            and emerging football regions worldwide.
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
                className="glass-card rounded-3xl px-6 py-5 flex items-center gap-5 min-w-[320px] md:min-w-[380px] border border-white/10 hover:border-accent/30 transition"
              >
                <div className="h-16 w-16 md:h-20 md:w-20 grid place-items-center rounded-2xl bg-white/5 p-2">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.35em] text-accent mb-1">
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
        <div className="mb-5">
          <div className="text-xs uppercase tracking-[0.35em] text-accent">
            Active Football Markets
          </div>
        </div>

        {/* COUNTRIES MARQUEE */}
        <div className="relative overflow-hidden">

          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex w-max marquee group hover:[animation-play-state:paused] gap-5">

            {loopCountries.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2 glass px-5 py-3 rounded-full border border-white/10 whitespace-nowrap"
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
};
