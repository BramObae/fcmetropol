import fisa from "@/assets/fisa.jpg";
import ismff from "@/assets/ismff.jpg";
import mbg from "@/assets/mbg.jpg";
import mbg2 from "@/assets/mbg-2.jpg";

const partners = [
  {
    name: "FISA Pro Club",
    logo: fisa,
  },
  {
    name: "ISMFF Football Festival",
    logo: ismff,
  },
  {
    name: "Metropol Baltic Group",
    logo: mbg,
  },
  {
    name: "FC Metropol Estonia",
    logo: mbg2,
  },
];

const countries = [
  { code: "ee", name: "Estonia" },
  { code: "gb", name: "United Kingdom" },
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

const partnerLoop = [...partners, ...partners];
const countryLoop = [...countries, ...countries, ...countries];

export const Partners = () => {
  return (
    <section className="relative overflow-hidden py-24 border-y border-border/40">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={mbg}
          alt=""
          className="h-full w-full object-cover opacity-15"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background/90" />

      <div className="relative z-10 container-pro">

        {/* TOP LABEL */}
        <div className="mb-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />

            <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/70">
              International Football Network
            </span>
          </div>
        </div>

        {/* TITLE */}
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            Global clubs,
            <br />
            academies & pathways.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-foreground/75">
            FC Metropol HP Kenya operates within an international football
            ecosystem connected to FC Metropol Estonia and the Metropol Baltic Group —
            creating scouting, development and placement pathways across Europe,
            Africa, the Americas and emerging football regions worldwide.
          </p>

        </div>

        {/* PARTNERS */}
        <div className="mt-16 relative overflow-hidden">

          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="marquee flex w-max gap-6">

            {partnerLoop.map((partner, i) => (
              <div
                key={i}
                className="
                  glass-card
                  min-w-[230px]
                  md:min-w-[260px]
                  rounded-3xl
                  border
                  border-white/10
                  p-6
                  text-center
                  transition-all
                  hover:-translate-y-1
                  hover:border-accent/40
                "
              >

                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 p-3">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="text-[10px] uppercase tracking-[0.35em] text-accent mb-2">
                  Strategic Partner
                </div>

                <h3 className="font-display text-lg leading-tight">
                  {partner.name}
                </h3>

              </div>
            ))}

          </div>

        </div>

        {/* COUNTRIES */}
        <div className="mt-16 text-center">

          <div className="text-[10px] uppercase tracking-[0.35em] text-accent mb-6">
            Active Partner Regions
          </div>

          <div className="relative overflow-hidden">

            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-background to-transparent" />

            <div className="marquee flex w-max gap-4">

              {countryLoop.map((country, i) => (
                <div
                  key={i}
                  className="
                    glass
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    px-5
                    py-3
                    whitespace-nowrap
                  "
                >

                  <img
                    src={`https://flagcdn.com/w40/${country.code}.png`}
                    alt={country.name}
                    className="h-4 w-6 rounded-sm object-cover"
                  />

                  <span className="text-xs uppercase tracking-wider text-foreground/75">
                    {country.name}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
