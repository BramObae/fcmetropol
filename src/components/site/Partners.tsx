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

const partnerLoop = [...partners, ...partners, ...partners];
const countryLoop = [...countries, ...countries, ...countries];

export const Partners = () => {
  return (
    <section className="relative overflow-hidden border-y border-border/40 py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />

      {/* SOFT IMAGE LAYER */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={mbg}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 container-pro">

        {/* TOP PARTNERS SECTION */}
        <div className="mb-16 text-center">

          <div className="text-xs uppercase tracking-[0.35em] text-accent mb-4">
            International Football Network
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Connected across global football markets.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-foreground/75">
            FC Metropol HP is connected to a growing international ecosystem of clubs,
            academies, tournaments and development partners across Europe, Africa,
            North America and South America through FC Metropol Estonia and the
            Metropol Baltic Group network.
          </p>
        </div>

        {/* PARTNER LOGOS FIRST */}
        <div className="relative overflow-hidden mb-14">

          {/* fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="flex w-max marquee gap-6 group-hover:[animation-play-state:paused]">

            {partnerLoop.map((partner, i) => (
              <div
                key={i}
                className="
                  glass-card
                  flex
                  min-w-[220px]
                  md:min-w-[260px]
                  flex-col
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-white/10
                  px-6
                  py-6
                  text-center
                  transition
                  hover:border-accent/40
                "
              >

                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 p-3">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="text-[10px] uppercase tracking-[0.35em] text-accent mb-2">
                  Strategic Partner
                </div>

                <div className="font-display text-base leading-tight">
                  {partner.name}
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* COUNTRIES */}
        <div className="mb-5 text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-accent">
            Active Football Markets & Partner Regions
          </div>
        </div>

        <div className="relative overflow-hidden">

          {/* fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="flex w-max marquee gap-5 group-hover:[animation-play-state:paused]">

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

                <span className="text-xs uppercase tracking-wider text-foreground/70">
                  {country.name}
                </span>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};
