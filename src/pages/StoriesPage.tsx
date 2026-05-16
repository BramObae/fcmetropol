import { SEO } from "@/components/SEO";
import { Stories } from "@/components/site/Stories";
import { SocialFeed } from "@/components/site/SocialFeed";

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
  { name: "Poland", flag: "🇵🇱" },
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Czech Republic", flag: "🇨🇿" },
  { name: "Slovakia", flag: "🇸🇰" },
  { name: "Slovenia", flag: "🇸🇮" },
  { name: "Latvia", flag: "🇱🇻" },
  { name: "Lithuania", flag: "🇱🇹" },
  { name: "Georgia", flag: "🇬🇪" },
  { name: "Romania", flag: "🇷🇴" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "USA Colleges", flag: "🎓" },
];

const flagLoop = [...countries, ...countries];

const StoriesPage = () => {
  return (
    <>
      <SEO
        title="Success Stories — FC Metropol HP Kenya"
        description="Real players, real placements. Meet footballers whose careers we've helped launch."
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-16">

        {/* BACKGROUND IMAGE (FIXED VISIBILITY) */}
        <div className="absolute inset-0">
          <img
            src="/success1.jpeg"
            alt="success background"
            className="w-full h-full object-cover scale-105"
          />

          {/* LIGHT OVERLAY (so image is visible but readable) */}
          <div className="absolute inset-0 bg-background/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        </div>

        {/* FLAGS MARQUEE */}
        <div className="relative z-10 overflow-hidden border-y border-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex gap-5 w-max marquee py-3">
            {flagLoop.map((c, i) => (
              <div
                key={i}
                className="glass rounded-full px-5 py-3 flex items-center gap-3 whitespace-nowrap border border-white/10"
              >
                <span className="text-xl">{c.flag}</span>
                <span className="uppercase tracking-[0.2em] text-xs text-foreground/80">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* HERO TEXT */}
        <div className="relative z-10 container-pro pt-10">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Success Stories
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] max-w-4xl">
            Lives we've{" "}
            <span className="text-gradient-gold">transformed.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-foreground/80 text-base md:text-lg">
            Journeys built through structure, discipline, and opportunity —
            shaping footballers for the next level of the game.
          </p>
        </div>
      </section>

      {/* STORIES */}
      <Stories />

      {/* SOCIAL */}
      <section className="section-pad bg-card/20 border-y border-border/50">
        <div className="container-pro">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Social
            </div>
            <h2 className="font-display text-4xl md:text-6xl">
              Latest from our channels.
            </h2>
          </div>

          <SocialFeed />
        </div>
      </section>
    </>
  );
};

export default StoriesPage;
