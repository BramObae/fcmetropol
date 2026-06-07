import { SEO } from "@/components/SEO";
import { CheckCircle, Users, Globe, Trophy, Target } from "lucide-react";

/* COUNTRIES */
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

const loop = [...countries, ...countries];

/* CATEGORIES */
const categories = [
  {
    title: "Scouting & Trials",
    desc: "Player identification and performance assessment.",
    icon: Target,
  },
  {
    title: "Development Program",
    desc: "Structured training and player growth pathway.",
    icon: Trophy,
  },
  {
    title: "International Exposure",
    desc: "Opportunities through global scouting network.",
    icon: Globe,
  },
  {
    title: "Academy Placement",
    desc: "Placement into suitable football environments.",
    icon: Users,
  },
  {
    title: "Goalkeeper Program",
    desc: "Specialized goalkeeper training pathway.",
    icon: CheckCircle,
  },
  {
    title: "Coaching Pathway",
    desc: "Development for coaches and technical staff.",
    icon: Users,
  },
];

const JoinPage = () => {
  return (
    <>
      <SEO
        title="Join FC Metropol HP Kenya"
        description="Apply for scouting, development and international football opportunities."
      />

      {/* HERO */}
      <section className="pt-28 md:pt-36 pb-10">
        <div className="container-pro">

          {/* FLAGS */}
          <div className="relative overflow-hidden mb-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex gap-5 w-max marquee">
              {loop.map((c, i) => (
                <div
                  key={i}
                  className="glass rounded-full px-5 py-3 flex items-center gap-3 whitespace-nowrap border border-white/10"
                >
                  <span className="text-xl">{c.flag}</span>
                  <span className="uppercase tracking-[0.2em] text-xs text-foreground/75">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.9] max-w-5xl">
            Your Football
            <br />
            <span className="text-gradient-gold">
              Pathway Starts Here.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-foreground/70 leading-relaxed">
            Apply for scouting, development, exposure and international football opportunities
            through FC Metropol HP Kenya.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="glass-card p-5 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-accent">15+</h3>
              <p className="text-sm text-foreground/70">Countries</p>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-accent">Global</h3>
              <p className="text-sm text-foreground/70">Network</p>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-accent">Elite</h3>
              <p className="text-sm text-foreground/70">Development</p>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-accent">Real</h3>
              <p className="text-sm text-foreground/70">Opportunities</p>
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="pb-12">
        <div className="container-pro">

          <h2 className="font-display text-3xl md:text-5xl mb-8">
            Application <span className="text-gradient-gold">Categories</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {categories.map((c, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-2xl border border-white/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <c.icon className="text-accent" size={18} />
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                </div>
                <p className="text-sm text-foreground/70">{c.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 bg-card/20">
        <div className="container-pro">

          <h2 className="font-display text-3xl md:text-5xl mb-10">
            How It <span className="text-gradient-gold">Works</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div>
              <h3 className="text-xl font-semibold">Apply</h3>
              <p className="text-sm text-foreground/70 mt-2">Submit your application form.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Review</h3>
              <p className="text-sm text-foreground/70 mt-2">Technical team evaluates profile.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Assessment</h3>
              <p className="text-sm text-foreground/70 mt-2">Trials or scouting invitation.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Opportunity</h3>
              <p className="text-sm text-foreground/70 mt-2">Placement or development pathway.</p>
            </div>

          </div>

        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-14">
        <div className="container-pro">

          <h2 className="font-display text-3xl md:text-5xl mb-8">
            Why Join <span className="text-gradient-gold">FC Metropol HP</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-foreground/70">

            <div>✔ Professional player development system</div>
            <div>✔ International scouting network</div>
            <div>✔ Exposure to clubs and academies</div>
            <div>✔ Experienced technical experts</div>
            <div>✔ Structured football pathway</div>
            <div>✔ Real career opportunities</div>

          </div>

        </div>
      </section>

      {/* NOTICE */}
      <section className="pb-10">
        <div className="container-pro">

          <div className="glass rounded-2xl p-6 border border-accent/20">
            <p className="text-sm md:text-base text-foreground/80">
              ✓ Applications are reviewed by our technical department<br />
              ✓ Shortlisted players are contacted directly<br />
              ✓ Ensure correct category selection for faster processing
            </p>
          </div>

        </div>
      </section>

      {/* GOOGLE FORM */}
      <section className="pb-24">
        <div className="container-pro">

          <h2 className="font-display text-4xl md:text-6xl mb-6">
            Official <span className="text-gradient-gold">Application Form</span>
          </h2>

          <p className="text-foreground/70 max-w-2xl mb-8">
            Complete the official application form below to begin your football journey.
          </p>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd7F83zaiFZSLIVqBoFq4Kqz6u34VVfljEZSIn4jLQBjrtwTA/viewform?embedded=true"
            width="100%"
            height="1100"
            className="rounded-2xl border border-white/10"
          />

        </div>
      </section>

    </>
  );
};

export default JoinPage;
