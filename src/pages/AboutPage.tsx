import { SEO } from "@/components/SEO";
import { Stats } from "@/components/site/Stats";
import { Charity } from "@/components/site/Charity";
import { Partners } from "@/components/site/Partners";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import rene from "/rene.jpeg";

import {
  ArrowRight,
  Target,
  Award,
  Globe2,
  Flag,
  Compass,
  Heart,
  Users,
  Trophy,
  GraduationCap,
  Plane,
  Search,
  Calendar,
  Star,
  BookOpen,
  Map,
  ShieldCheck,
} from "lucide-react";

/* -------- DATA -------- */

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

const flagLoop = [...countries, ...countries, ...countries];

const stories = [
  {
    name: "Story coming soon",
    role: "Nairobi · Striker",
    quote: "Photo & full story to be added.",
  },
  {
    name: "Story coming soon",
    role: "Mombasa · Midfielder",
    quote: "Photo & full story to be added.",
  },
  {
    name: "Story coming soon",
    role: "Kisumu · Defender",
    quote: "Photo & full story to be added.",
  },
];

const team = [
  { name: "Member name", role: "Founder & CEO" },
  { name: "Member name", role: "Director of Football" },
  { name: "Member name", role: "Head of Operations" },
  { name: "Member name", role: "Head of Scouting" },
];

const techTeam = [
  { name: "Coach name", role: "Head Coach" },
  { name: "Coach name", role: "Assistant Coach" },
  { name: "Coach name", role: "Goalkeeping Coach" },
  { name: "Coach name", role: "Strength & Conditioning" },
  { name: "Coach name", role: "Performance Analyst" },
  { name: "Coach name", role: "Sports Physio" },
];

const AboutPage = () => (
  <>
    <SEO
      title="About FC Metropol HP Kenya — Pathways across Africa & Beyond"
      description="Centre of excellence developing, identifying and placing African footballers worldwide."
    />

    {/* HERO */}
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-purple/15 blur-3xl -z-10" />

      <div className="container-pro">
        <div className="max-w-3xl reveal">

          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Centre of Excellence
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.9]">
            More than a club. <br />
            <span className="text-gradient-gold">A pathway.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
            We identify, develop and place African footballers through elite
            training, international exposure and direct pathways into clubs,
            academies and colleges worldwide.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/join">
                Join the Program <ArrowRight size={18} />
              </Link>
            </Button>

            <Button asChild variant="outlineLight" size="lg">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* PRESIDENT SECTION */}
    <section className="relative py-20 md:py-28 overflow-hidden border-y border-border/40 bg-card/20">

      <div className="absolute top-0 right-0 h-72 w-72 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 h-72 w-72 bg-accent/10 blur-3xl rounded-full" />

      <div className="container-pro relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative reveal reveal-left">

            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/10 to-purple/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 glass-card">

              <img
                src={rene}
                alt="Rene Merilo"
                className="w-full h-[620px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">

                <div className="text-[10px] uppercase tracking-[0.35em] text-accent mb-2">
                  FC Metropol Estonia
                </div>

                <h3 className="font-display text-4xl leading-none">
                  Rene Merilo
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-foreground/70">
                  President · FC Metropol Estonia
                </p>

              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="reveal reveal-right">

            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              International Leadership
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95]">
              Connected to <span className="text-gradient-gold">European football.</span>
            </h2>

            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              FC Metropol HP Kenya operates within an expanding international
              football ecosystem through its relationship with FC Metropol
              Estonia — a Division 2 football club in Estonia.
            </p>

            <p className="mt-5 text-foreground/70 leading-relaxed">
              Through the wider Metropol Baltic Group network, the organization
              connects with clubs, academies, scouts and football institutions
              across Europe, Africa, North America, South America, Asia and the
              Middle East.
            </p>

            {/* FEATURE CARDS */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              <div className="glass-card rounded-2xl p-5 border border-white/10">
                <div className="text-3xl mb-3">🇪🇪</div>

                <div className="font-semibold text-lg">
                  Estonia Division 2
                </div>

                <p className="mt-2 text-sm text-foreground/70">
                  Professional European football structure and development.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-white/10">
                <div className="text-3xl mb-3">🌍</div>

                <div className="font-semibold text-lg">
                  Global Football Network
                </div>

                <p className="mt-2 text-sm text-foreground/70">
                  Partnerships spanning multiple continents and football markets.
                </p>
              </div>

            </div>

            {/* FLAGS */}
            <div className="mt-10">

              <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
                International connections
              </div>

              <div className="flex flex-wrap gap-3">

                {[
                  "🇪🇪 Estonia",
                  "🇬🇧 United Kingdom",
                  "🇺🇸 United States",
                  "🇧🇷 Brazil",
                  "🇰🇪 Kenya",
                  "🇿🇦 South Africa",
                  "🇪🇬 Egypt",
                  "🇹🇿 Tanzania",
                ].map((c) => (
                  <div
                    key={c}
                    className="glass px-4 py-2 rounded-full text-xs uppercase tracking-wider text-foreground/75 border border-white/10"
                  >
                    {c}
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* STATS */}
    <div className="reveal">
      <Stats />
    </div>

    {/* PARTNERS */}
    <div className="reveal">
      <Partners />
    </div>

  </>
);

export default AboutPage;
