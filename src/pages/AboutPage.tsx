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
import elisha from "/public/elisha.jpeg";
import elisha1 from "/public/elisha1.jpeg";

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
    icon: Search,
    title: "Scouting",
    desc: "Identifying talented African footballers through showcases, tournaments and scouting networks.",
  },
  {
    icon: Calendar,
    title: "Development",
    desc: "Elite football development programs focused on tactical growth, conditioning and performance.",
  },
  {
    icon: Star,
    title: "Packaging",
    desc: "Professional player branding including highlights, media kits and player profiling.",
  },
  {
    icon: Plane,
    title: "Placement",
    desc: "Creating pathways into clubs, academies, scholarships and professional football opportunities.",
  },
];

const values = [
  {
    icon: Target,
    title: "Discipline",
    desc: "Professional standards in training, education and performance.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "Transparent player development with honest guidance and structure.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    desc: "Building elite football environments inspired by global standards.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Using football to uplift and inspire future generations.",
  },
];

const leadership = [
  {
    name: "Rene Merilo",
    role: "President · FC Metropol Estonia",
    image: rene,
    description:
      "Rene Merilo leads the wider FC Metropol football ecosystem, helping create international pathways connecting African talent to clubs, academies and development opportunities across Europe and beyond.",
  },
  {
    name: "Elisha Ruoth Winga",
    role: "President · FC Metropol HP Kenya",
    image: elisha,
    image2: elisha2,
    description:
      "Elisha Ruoth Winga leads FC Metropol HP Kenya with a vision focused on identifying, developing and exposing African football talent through structured football pathways, education opportunities and international partnerships.",
  },
];

const technicalTeam = [
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
  {
    name: "Player Welfare",
    role: "Athlete Support & Mentorship",
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.20),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.15),transparent_35%)]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')]" />

        <div className="container-pro relative z-10">

          <div className="max-w-5xl">

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
              FC Metropol HP Kenya is a high-performance football development
              platform focused on scouting, developing, packaging and placing
              talented African footballers into global football opportunities.
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
              FC Metropol HP Kenya is connected to FC Metropol Estonia and an
              expanding international football structure focused on player
              development, scouting, exposure and long-term football growth.

              <br />
              <br />

              Through this ecosystem, players gain access to opportunities
              across Europe, Africa, North America and emerging football
              markets.
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

      {/* LEADERSHIP */}
      <section className="py-24">

        <div className="container-pro">

          <div className="max-w-3xl mb-16">

            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Leadership
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              The people driving
              <span className="text-gradient-gold"> the vision.</span>
            </h2>

            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              FC Metropol HP Kenya operates through an expanding football
              structure focused on elite player development, international
              exposure and long-term athlete growth.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {leadership.map((leader, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 glass-card"
              >

                <div className="grid grid-cols-2 gap-1 bg-background/40">

                  <img
                    src={leader.image}
                    alt={leader.name}
                    className={`w-full ${
                      leader.image2 ? "h-[420px]" : "h-[500px]"
                    } object-cover object-top`}
                  />

                  {leader.image2 && (
                    <img
                      src={leader.image2}
                      alt={leader.name}
                      className="w-full h-[420px] object-cover object-top"
                    />
                  )}

                </div>

                <div className="p-8">

                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
                    <span className="h-2 w-2 rounded-full bg-accent" />

                    <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/70">
                      FC Metropol Leadership
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-semibold">
                    {leader.name}
                  </h3>

                  <div className="mt-3 text-sm uppercase tracking-[0.25em] text-accent">
                    {leader.role}
                  </div>

                  <p className="mt-6 text-foreground/75 leading-relaxed text-lg">
                    {leader.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-card/20 border-y border-border/50">

        <div className="container-pro">

          <div className="grid lg:grid-cols-2 gap-8">

            <div
              className="relative overflow-hidden rounded-[2rem] p-10 border border-white/10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(37,99,235,0.22), rgba(15,23,42,0.95))",
              }}
            >

              <div className="relative">

                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur grid place-items-center mb-6">
                  <Flag className="text-accent" size={26} />
                </div>

                <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                  Mission
                </div>

                <h3 className="font-display text-4xl leading-[0.95] mb-5">
                  Scout.
                  <br />
                  Develop.
                  <br />
                  Place.
                </h3>

                <p className="text-lg text-white/80 leading-relaxed">
                  To create structured football and education pathways for
                  talented African players through elite development,
                  international exposure and professional opportunities.
                </p>

              </div>

            </div>

            <div
              className="relative overflow-hidden rounded-[2rem] p-10 border border-white/10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(15,23,42,0.95))",
              }}
            >

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
                  We envision an Africa where football talent is no longer
                  limited by geography or exposure but connected directly to
                  global opportunities.
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
              Development Structure
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              A complete football
              <span className="text-gradient-gold"> pathway.</span>
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

                <div className="h-72 bg-gradient-to-br from-primary/20 via-background to-accent/10 grid place-items-center">
                  <ShieldCheck className="text-accent" size={44} />
                </div>

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

      <Charity />

    </>
  );
};

export default AboutPage;
