import { SEO } from "@/components/SEO";
import { Stats } from "@/components/site/Stats";
import { Charity } from "@/components/site/Charity";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Trophy,
  ShieldCheck,
  Heart,
  Target,
  Users,
  Star,
  Plane,
  Search,
  Calendar,
  Flag,
  Compass,
} from "lucide-react";

import rene from "/rene.jpeg";
import elisha from "/elisha.jpeg";
import elisha1 from "/elisha1.jpeg";

import gabriel from "/Gabriel Kariuki.jpeg";
import edwin from "/Edwin Mwaura.jpeg";
import eduardo from "/Eduardo Raupp.jpeg";

import alexander from "/Alexander Otoo.jpeg";
import sambi from "/Sambi Shaban.jpeg";
import brian from "/Brian Odhiambo.jpeg";
import vincent from "/Vincent Ngesa.jpeg";

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

const programs = [
  {
    icon: Search,
    title: "Scouting",
    desc: "Identifying talented African footballers through showcases, tournaments and scouting networks.",
  },
  {
    icon: Calendar,
    title: "Development",
    desc: "Elite football development focused on tactical growth, conditioning and performance.",
  },
  {
    icon: Star,
    title: "Packaging",
    desc: "Professional player branding, highlights, media kits and profiling.",
  },
  {
    icon: Plane,
    title: "Placement",
    desc: "Pathways into clubs, academies, scholarships and professional football opportunities.",
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

const technicalTeam = [
  {
    name: "Gabriel Kariuki",
    role: "Data Scientist",
    image: gabriel,
  },
  {
    name: "Edwin Mwaura",
    role: "Assistant Coach",
    image: edwin,
  },
  {
    name: "Eduardo Raupp Guimairreas",
    role: "International Football Advisor",
    image: eduardo,
  },
  {
    name: "Alexander Otoo",
    role: "Media",
    image: alexander,
  },
  {
    name: "Sambi Shaban",
    role: "Physiotherapist",
    image: sambi,
  },
  {
    name: "Brian Odhiambo",
    role: "Assistant Coach",
    image: brian,
  },
  {
    name: "Vincent Ngesa",
    role: "Strength & Conditioning Coach",
    image: vincent,
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

      {/* MOVING FLAGS */}
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />

        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-5">
          {countries.concat(countries).map((c, i) => (
            <div
              key={i}
              className="glass rounded-full px-5 py-3 flex items-center gap-3 border border-white/10 whitespace-nowrap"
            >
              <span className="text-2xl">
                {c.flag}
              </span>

              <span className="uppercase tracking-[0.2em] text-xs text-foreground/80">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* TITLE */}
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
          <Link to="/programs">Explore Programs</Link>
        </Button>
      </div>
    </div>
  </div>
</section>

     
      {/* LEADERSHIP */}
      <section className="py-24">

        <div className="container-pro">

          <div className="max-w-3xl mb-14">

            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Leadership
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              The people driving
              <span className="text-gradient-gold"> the vision.</span>
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* RENE */}
            <div className="glass-card rounded-[2rem] overflow-hidden border border-white/10">

              <img
                src={rene}
                alt="Rene Merilo"
                className="w-full h-[500px] object-cover object-top"
              />

              <div className="p-8">

                <h3 className="text-3xl font-semibold">
                  Rene Merilo
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-accent">
                  President · FC Metropol Estonia
                </p>

                <p className="mt-5 text-foreground/75 leading-relaxed">
                  Rene Merilo leads the wider FC Metropol football ecosystem,
                  helping create international pathways connecting African
                  talent to clubs, academies and development opportunities.
                </p>

              </div>

            </div>

            {/* ELISHA */}
            <div className="glass-card rounded-[2rem] overflow-hidden border border-white/10">

              <div className="grid grid-cols-2 gap-1">

                <img
                  src={elisha}
                  alt="Elisha Ruoth Winga"
                  className="w-full h-[420px] object-cover object-top"
                />

                <img
                  src={elisha1}
                  alt="Elisha Ruoth Winga"
                  className="w-full h-[420px] object-cover object-top"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-semibold">
                  Elisha Ruoth Winga
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-accent">
                  President · FC Metropol HP Kenya
                </p>

                <p className="mt-5 text-foreground/75 leading-relaxed">
                  Elisha Ruoth Winga leads FC Metropol HP Kenya with a vision
                  focused on identifying, developing and exposing African
                  football talent through structured football pathways and
                  international partnerships.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-card/20 border-y border-border/50">

        <div className="container-pro">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* MISSION */}
            <div
              className="rounded-[2rem] p-10 border border-white/10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(37,99,235,0.22), rgba(15,23,42,0.95))",
              }}
            >

              <div className="h-14 w-14 rounded-2xl bg-white/10 grid place-items-center mb-6">
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
                talented African players through elite development and
                international exposure.
              </p>

            </div>

            {/* VISION */}
            <div
              className="rounded-[2rem] p-10 border border-white/10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(15,23,42,0.95))",
              }}
            >

              <div className="h-14 w-14 rounded-2xl bg-white/10 grid place-items-center mb-6">
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
                We envision an Africa where football talent is connected
                directly to global opportunities without limitations.
              </p>

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
                className="glass-card rounded-[2rem] p-8 border border-white/10"
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

                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-80 object-cover object-top"
                />

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

    </>
  );
};

export default AboutPage;
