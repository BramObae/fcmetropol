import { SEO } from "@/components/SEO";
import { Join } from "@/components/site/Join";
import { CheckCircle } from "lucide-react";

/* FLAGS DATA */
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

const categories = [
  "Scouting / Trials",
  "Development Program",
  "Academy Placement",
  "International Exposure",
  "Goalkeeper Training",
  "Coaching Program",
];

const JoinPage = () => (
  <>
    <SEO
      title="Join the Program — FC Metropol HP Kenya"
      description="Apply to FC Metropol HP Kenya. Select your category and submit your application."
    />

    {/* HERO */}
    <section className="pt-28 md:pt-36 pb-6">
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

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-4xl">
          Apply. Get <span className="text-gradient-gold">Scouted.</span> Go Pro.
        </h1>

        <p className="mt-6 text-foreground/70 max-w-2xl">
          Select your application category carefully. This helps us route your profile
          to the right technical department.
        </p>

      </div>
    </section>

    {/* APPLICATION CATEGORIES (NEW PROFESSIONAL SECTION) */}
    <section className="pb-10">
      <div className="container-pro">

        <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10">

          <h2 className="font-display text-2xl md:text-4xl mb-6">
            Application <span className="text-gradient-gold">Categories</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <CheckCircle size={18} className="text-accent" />
                <span className="text-sm md:text-base">{cat}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>

    {/* YOUR ORIGINAL FORM */}
    <Join />

    {/* GOOGLE FORM */}
    <section className="py-20">
      <div className="container-pro">

        <div className="glass-card p-6 md:p-10 rounded-3xl border border-white/10">

          <h2 className="font-display text-3xl md:text-5xl">
            Official <span className="text-gradient-gold">Application Form</span>
          </h2>

          <p className="mt-4 text-foreground/70 max-w-2xl">
            For faster processing, use the official Google Form below. Ensure you select
            your correct category.
          </p>

          <div className="mt-8 w-full">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd7F83zaiFZSLIVqBoFq4Kqz6u34VVfljEZSIn4jLQBjrtwTA/viewform?embedded=true"
              width="100%"
              height="1100"
              className="rounded-2xl border border-white/10"
            />
          </div>

        </div>

      </div>
    </section>

  </>
);

export default JoinPage;
