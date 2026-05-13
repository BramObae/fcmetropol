import { SEO } from "@/components/SEO";
import { Stats } from "@/components/site/Stats";
import { Charity } from "@/components/site/Charity";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Trophy,
  Globe2,
  ShieldCheck,
  GraduationCap,
  Heart,
  Target,
  Users,
  Star,
  Plane,
  Search,
  Calendar,
  BookOpen,
  Flag,
  Compass,
  MapPinned,
  Award,
} from "lucide-react";

import rene from "/public/rene.jpeg";

/* -------------------------------- */
/* DATA */
/* -------------------------------- */

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

const programs = [
  {
    icon: Calendar,
    title: "16 Week Elite Season",
    desc: "A complete development structure with tactical training, conditioning, analysis and high-performance preparation.",
  },
  {
    icon: Plane,
    title: "International Exposure",
    desc: "Tours and pathways connecting players to Europe, the Gulf, the Americas and emerging football markets.",
  },
  {
    icon: Search,
    title: "Scouting Network",
    desc: "Talent identification programs across Africa connecting overlooked players to professional opportunities.",
  },
  {
    icon: Trophy,
    title: "Tournament Pathways",
    desc: "Competitive tournaments and showcases giving players visibility in front of scouts and clubs.",
  },
];

const values = [
  {
    icon: Target,
    title: "Discipline",
    desc: "Professional standards in training, education, lifestyle and performance.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "Transparent player development with honest guidance and long-term focus.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    desc: "Creating elite football environments inspired by international standards.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Using football to uplift communities and open doors for future generations.",
  },
];

const technicalTeam = [
  {
    name: "Rene Merilo",
    role: "President · FC Metropol Estonia",
    image: rene,
  },
  {
    name: "Technical Director",
    role: "International Football Operations",
  },
  {
    name: "Head Coach",
    role: "Elite Player Development",
  },
  {
    name: "Performance Analyst",
    role: "Match & Tactical Analysis",
  },
  {
    name: "Sports Physio",
    role: "Recovery & Conditioning",
  },
  {
    name: "Scouting Director",
    role: "African Talent Identification",
  },
];

/* -------------------------------- */
/* PAGE */
/* -------------------------------- */

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About FC Metropol HP Kenya"
        description="Elite football development platform creating global pathways for African footballers."
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.16),transparent_35%)]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')]" />

        <div className="container-pro relative z-10">
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.3em] text-foreground/75">
                FC Metropol HP Kenya
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl md:text-[7rem] leading-[0.9]">
              Building Africa's
              <br />
              <span className="text-gradient-gold">
                global football pathway.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg md:text-2xl text-foreground/75 leading-relaxed font-light">
              FC Metropol HP is a high-performance football development
              platform identifying, developing and placing ambitious African
              footballers into clubs, academies and scholarship opportunities
              across the world.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/join">
                  Join The Program <ArrowRight className="ml-1" />
                </Link>
              </Button>

              <Button asChild variant="outlineLight" size="lg">
                <Link to="/programs">
                  Explore Programs
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      <Stats />

      {/* GLOBAL NETWORK */}
      <section className="py-20 border-y border-border/50 bg-card/20 overflow-hidden">
        <div className="container-pro">

          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Global Football Network
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              Connected across
              <span className="text-gradient-gold"> continents.</span>
            </h2>

            <p className="mt-5 text-foreground/75 text-lg leading-relaxed">
              FC Metropol HP Kenya is a sister club to FC Metropol Estonia,
              which competes in Estonia Division 2 and operates within the
              Metropol Baltic Group football ecosystem.
              <br /><br />
              Through this international structure, our players gain exposure
              to clubs, academies and development opportunities across Europe,
              Africa, North America, South America and emerging football
              markets worldwide.
            </p>
          </div>

        </div>

        {/* FLAGS */}
        <div className="relative overflow-hidden mt-10">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex gap-5 w-max marquee">
            {flagLoop.map((c, i) => (
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
      </section>

      {/* PRESIDENT */}
      <section className="py-24">
        <div className="container-pro">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 glass">
                <img
                  src={rene}
                  alt="Rene Merilo"
                  className="w-full h-[650px] object-cover object-top"
                />
              </div>
            </div>

            <div>

              <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                Leadership
              </div>

              <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
                Rene Merilo
              </h2>

              <div className="mt-3 text-lg uppercase tracking-[0.25em] text-foreground/60">
                President · FC Metropol Estonia
              </div>

              <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
                Rene Merilo leads the international vision behind FC Metropol's
                football development ecosystem — creating direct bridges between
                African talent and global football opportunities.
              </p>

              <p className="mt-5 text-foreground/70 leading-relaxed">
                Under this international structure, FC Metropol HP Kenya
                operates as part of a wider network focused on elite player
                development, scouting, performance analysis, international
                exposure and professional placement pathways.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">

                <div className="glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe2 className="text-accent" size={20} />
                    <div className="font-semibold">
                      International Pathways
                    </div>
                  </div>

                  <p className="text-sm text-foreground/70">
                    Europe, Americas, Gulf region and emerging football markets.
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="text-accent" size={20} />
                    <div className="font-semibold">
                      Professional Structure
                    </div>
                  </div>

                  <p className="text-sm text-foreground/70">
                    Elite systems inspired by professional football environments.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-card/20 border-y border-border/50">
        <div className="container-pro">

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="relative overflow-hidden rounded-[2rem] p-10 border border-white/10"
                 style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.22), rgba(15,23,42,0.95))" }}>

              <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl" />

              <div className="relative">

                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur grid place-items-center mb-6">
                  <Flag className="text-accent" size={26} />
                </div>

                <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                  Mission
                </div>

                <h3 className="font-display text-4xl leading-[0.95] mb-5">
                  Develop.
                  <br />
                  Package.
                  <br />
                  Place.
                </h3>

                <p className="text-lg text-white/80 leading-relaxed">
                  To transform talented African footballers into global
                  professionals through elite coaching, performance development,
                  personal branding and direct international exposure.
                </p>

              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] p-10 border border-white/10"
                 style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.14), rgba(15,23,42,0.95))" }}>

              <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-yellow-400/20 blur-3xl" />

              <div className="relative">

                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur grid place-items-center mb-6">
                  <Compass className="text-accent" size={26} />
                </div>

                <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                  Vision
                </div>

                <h3 className="font-display text-4xl leading-[0.95] mb-5">
                  A global pathway
                  <br />
                  for every gifted
                  <br />
                  African player.
                </h3>

                <p className="text-lg text-white/80 leading-relaxed">
                  We envision an Africa where talent is no longer limited by
                  geography, exposure or opportunity — but connected directly to
                  the world stage.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24">
        <div className="container-pro">

          <div className="max-w-3xl mb-14">

            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Development Programs
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              Elite football
              <span className="text-gradient-gold"> development.</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {programs.map((p, i) => (
              <div
                key={i}
                className="glass-card rounded-[2rem] p-8 border border-white/10 hover:border-accent/40 transition"
              >

                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/20 grid place-items-center mb-6">
                  <p.icon className="text-accent" size={24} />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {p.title}
                </h3>

                <p className="text-foreground/75 leading-relaxed">
                  {p.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* TECHNICAL TEAM */}
      <section className="py-24 bg-card/20 border-y border-border/50">
        <div className="container-pro">

          <div className="max-w-3xl mb-14">

            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Technical Structure
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              Football minds
              <span className="text-gradient-gold"> behind the vision.</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {technicalTeam.map((m, i) => (
              <div
                key={i}
                className="glass-card rounded-[2rem] overflow-hidden border border-white/10"
              >

                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-80 object-cover object-top"
                  />
                ) : (
                  <div className="h-80 bg-gradient-to-br from-primary/20 via-background to-accent/10 grid place-items-center">
                    <ShieldCheck className="text-accent" size={44} />
                  </div>
                )}

                <div className="p-6">

                  <h3 className="text-2xl font-semibold">
                    {m.name}
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-accent">
                    {m.role}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="container-pro">

          <div className="max-w-3xl mb-14">

            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Core Values
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              What drives
              <span className="text-gradient-gold"> FC Metropol HP.</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {values.map((v, i) => (
              <div
                key={i}
                className="glass-card rounded-[2rem] p-7 border border-white/10"
              >

                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/40 to-accent/20 grid place-items-center mb-5">
                  <v.icon className="text-accent" size={22} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {v.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed">
                  {v.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      <Charity />

      {/* CTA */}
      <section className="py-24">
        <div className="container-pro">

          <div
            className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.95), rgba(15,23,42,0.98))",
            }}
          >

            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto">

              <div className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
                Your Journey Starts Here
              </div>

              <h2 className="font-display text-4xl md:text-7xl leading-[0.92] text-white">
                From local talent
                <br />
                to the global game.
              </h2>

              <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
                Join a football ecosystem designed to develop, expose and elevate
                ambitious African players.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <Button asChild variant="hero" size="lg">
                  <Link to="/join">
                    Apply Now <ArrowRight className="ml-1" />
                  </Link>
                </Button>

                <Button asChild variant="outlineLight" size="lg">
                  <Link to="/programs">
                    Explore Programs
                  </Link>
                </Button>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default AboutPage;
