import { SEO } from "@/components/SEO";
import { Stats } from "@/components/site/Stats";
import { Charity } from "@/components/site/Charity";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Trophy,
  Heart,
  Target,
  Users,
  Star,
  Plane,
  Search,
  Calendar,
} from "lucide-react";

import rene from "/rene.jpeg";
import elisha1 from "/elisha1.jpeg";
import eduardo from "/Eduardo Raupp.jpeg";

import mwanahalima from "/Mwanahalima.jpeg";
import mwanahalima1 from "/Mwanahalima1.jpeg";

import gabriel from "/Gabriel Kariuki.jpeg";
import edwin from "/Edwin Mwaura.jpeg";
import alexander from "/Alexander Otoo.jpeg";
import sambi from "/Sambi Shaban.jpeg";
import brian from "/Brian Odhiambo.jpeg";
import vincent from "/Vincent Ngesa.jpeg";
import calum from "/CalumShuan.jpeg";
import tom from "/TomOgweno.jpeg";
import muyoti from "/NicholasMuyoti.jpeg";

/* -------------------------------- */
/* FLAGS */
/* -------------------------------- */

const countries = [
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "Burundi", flag: "🇧🇮" },
  { name: "South Sudan", flag: "🇸🇸" },
  { name: "Ethiopia", flag: "🇪🇹" },
  { name: "Somalia", flag: "🇸🇴" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Zambia", flag: "🇿🇲" },
  { name: "Zimbabwe", flag: "🇿🇼" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Senegal", flag: "🇸🇳" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Tunisia", flag: "🇹🇳" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Algeria", flag: "🇩🇿" },
  { name: "Estonia", flag: "🇪🇪" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Argentina", flag: "🇦🇷" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "United States", flag: "🇺🇸" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "UAE", flag: "🇦🇪" },
];

const flagLoop = [...countries, ...countries];

/* -------------------------------- */
/* PROGRAMS */
/* -------------------------------- */

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

/* -------------------------------- */
/* VALUES */
/* -------------------------------- */

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

/* -------------------------------- */
/* TECHNICAL TEAM */
/* -------------------------------- */

const technicalTeam = [
  {
    name: "Tom Ogweno",
    role: "Technical Director",
    image: tom,
    object: "object-[center_15%]",
  },
  {
    name: "Nicholas Muyoti",
    role: "Head Coach",
    image: muyoti,
    object: "object-top",
  },
  {
    name: "Gabriel Kariuki",
    role: "Data Scientist",
    image: gabriel,
    object: "object-top",
  },
  {
    name: "Edwin Mwaura",
    role: "Assistant Coach",
    image: edwin,
    object: "object-top",
  },
  {
    name: "Alexander Otoo",
    role: "Media",
    image: alexander,
    object: "object-top",
  },
  {
    name: "Sambi Shaban",
    role: "Physiotherapist",
    image: sambi,
    object: "object-top",
  },
  {
    name: "Brian Odhiambo",
    role: "Assistant Coach",
    image: brian,
    object: "object-top",
  },
  {
    name: "Vincent Ngesa",
    role: "Strength & Conditioning Coach",
    image: vincent,
    object: "object-top",
  },
  {
    name: "Calum Shuan Selby",
    role: "Head of Football Curriculum Development",
    image: calum,
    object: "object-top",
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

      {/* FLAGS */}
      <section className="pt-28 overflow-hidden border-b border-border/50 bg-card/20">
        <div className="relative overflow-hidden">

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />

          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex gap-5 w-max marquee py-4">
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

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-24 md:pt-28 md:pb-32">

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

      {/* LEADERSHIP */}
      <section className="py-24 bg-card/20">

        <div className="container-pro">

          <div className="max-w-3xl mb-14">

            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Leadership
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              The people driving
              <span className="text-gradient-gold"> the vision.</span>
            </h2>

            <p className="mt-6 text-foreground/75 text-lg leading-relaxed">
              Leadership at FC Metropol HP combines international football
              experience, player development expertise and a long-term vision
              focused on building sustainable pathways for talented African players.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* RENE */}
            <div className="glass-card rounded-[2rem] overflow-hidden border border-white/10">

              <img
                src={rene}
                alt="Rene Merilo"
                className="w-full h-[420px] object-cover object-top"
              />

              <div className="p-8">

                <h3 className="text-3xl font-semibold">
                  Rene Merilo
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-accent">
                  President · FC Metropol Estonia
                </p>

                <p className="mt-4 text-foreground/70 leading-relaxed">
                  Driving international partnerships and long-term football development structures across Europe and Africa.
                </p>

              </div>

            </div>

            {/* ELISHA */}
            <div className="glass-card rounded-[2rem] overflow-hidden border border-white/10">

              <img
                src={elisha1}
                alt="Elisha Winga"
                className="w-full h-[420px] object-cover object-top"
              />

              <div className="p-8">

                <h3 className="text-3xl font-semibold">
                  Elisha Winga
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-accent">
                  President · FC Metropol HP Kenya
                </p>

                <p className="mt-4 text-foreground/70 leading-relaxed">
                  Leading the Kenyan high-performance structure with focus on talent identification and player growth.
                </p>

              </div>

            </div>

            {/* EDUARDO */}
            <div className="glass-card rounded-[2rem] overflow-hidden border border-white/10">

              <img
                src={eduardo}
                alt="Eduardo Raupp Guimairreas"
                className="w-full h-[420px] object-cover object-top"
              />

              <div className="p-8">

                <h3 className="text-3xl font-semibold">
                  Eduardo Raupp Guimairreas
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-accent">
                  TMR SPORTS BRAZIL / INTERNATIONAL FOOTBALL ADVISOR
                </p>

                <p className="mt-4 text-foreground/70 leading-relaxed">
                  Supporting international player exposure, football networking and strategic global opportunities.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* INTERNATIONAL FOOTBALL LIAISON */}
      <section className="py-24">

        <div className="container-pro">

          <div className="glass-card rounded-[2.5rem] overflow-hidden border border-white/10">

            <div className="grid lg:grid-cols-2 gap-0">

              <div className="grid grid-cols-2 gap-1">

                <img
                  src={mwanahalima}
                  alt="Mwanahalima Jereko"
                  className="h-[520px] w-full object-cover object-top"
                />

                <img
                  src={mwanahalima1}
                  alt="Mwanahalima Jereko"
                  className="h-[520px] w-full object-cover object-top"
                />

              </div>

              <div className="p-10 lg:p-14 flex flex-col justify-center">

                <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
                  International Football Liaison
                </div>

                <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
                  Mwanahalima
                  <span className="text-gradient-gold"> Jereko.</span>
                </h2>

                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  Mwanahalima Jereko plays for HB Køge in the Danish Women Premier League
                  and serves as the Harambee Starlets Assistant Captain.
                </p>

                <p className="mt-5 text-foreground/70 leading-relaxed">
                  Her international football experience, leadership and understanding
                  of elite football environments help inspire and guide the next generation
                  of African football talent pursuing global opportunities.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* TECHNICAL TEAM */}
      <section className="py-24">

        <div className="container-pro">

          <div className="max-w-3xl mb-14">

            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Technical Team
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
                  className={`h-[360px] w-full object-cover ${m.object}`}
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
      <section className="py-24 bg-card/20">

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
