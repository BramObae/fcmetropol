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

/* LEADERSHIP IMAGES */
import rene from "/rene.jpeg";
import elisha from "/elisha.jpeg";
import eduardo from "/Eduardo Raupp.jpeg";

/* TECHNICAL TEAM IMAGES */
import gabriel from "/Gabriel Kariuki.jpeg";
import edwin from "/Edwin Mwaura.jpeg";
import alexander from "/Alexander Otoo.jpeg";
import sambi from "/Sambi Shaban.jpeg";
import brian from "/Brian Odhiambo.jpeg";
import vincent from "/Vincent Ngesa.jpeg";
import calum from "/CalumShuan.jpeg";
import tom from "/TomOgweno.jpeg";
import nicholas from "/NicholasMuyoti.jpeg";

/* -------------------------------- */
/* FLAGS */
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
    name: "Gabriel Kariuki",
    role: "Data Scientist",
    image: gabriel,
    quote: "Data-driven performance optimization.",
  },
  {
    name: "Edwin Mwaura",
    role: "Assistant Coach",
    image: edwin,
    quote: "Building discipline through training.",
  },
  {
    name: "Alexander Otoo",
    role: "Media",
    image: alexander,
    quote: "Telling the story of talent.",
  },
  {
    name: "Sambi Shaban",
    role: "Physiotherapist",
    image: sambi,
    quote: "Recovery is part of performance.",
  },
  {
    name: "Brian Odhiambo",
    role: "Assistant Coach",
    image: brian,
    quote: "Shaping mentality and character.",
  },
  {
    name: "Vincent Ngesa",
    role: "Strength & Conditioning Coach",
    image: vincent,
    quote: "Building elite physical standards.",
  },
  {
    name: "Calum Shuan Selby",
    role: "Head of Football Curriculum",
    image: calum,
    quote: "Designing modern football structure.",
  },
  {
    name: "Tom Ogweno",
    role: "Technical Director · FC Metropol HP",
    image: tom,
    quote: "Defining the technical vision.",
  },
  {
    name: "Nicholas Muyoti",
    role: "Head Coach",
    image: nicholas,
    quote: "Leading performance on the pitch.",
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
        <div className="container-pro relative z-10 max-w-5xl">
          <h1 className="font-display text-5xl sm:text-7xl md:text-[7rem] leading-[0.9]">
            Building Africa's
            <br />
            <span className="text-gradient-gold">
              global football pathway.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-2xl text-foreground/75">
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
      </section>

      <Stats />

      {/* PROGRAMS */}
      <section className="py-24">
        <div className="container-pro">
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <div key={i} className="glass-card p-8 rounded-[2rem]">
                <p.icon className="text-accent mb-4" size={28} />
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-foreground/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 bg-card/20">
        <div className="container-pro">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Rene */}
            <div className="glass-card overflow-hidden rounded-[2rem]">
              <img className="h-[420px] w-full object-cover" src={rene} />
              <div className="p-6">
                <h3 className="text-2xl">Rene Merilo</h3>
                <p className="text-accent text-sm">President · Estonia</p>
                <p className="text-xs mt-2 text-foreground/60">
                  “Global football systems architect.”
                </p>
              </div>
            </div>

            {/* Elisha (single image fixed) */}
            <div className="glass-card overflow-hidden rounded-[2rem]">
              <img className="h-[420px] w-full object-cover" src={elisha} />
              <div className="p-6">
                <h3 className="text-2xl">Elisha Winga</h3>
                <p className="text-accent text-sm">President · Kenya</p>
                <p className="text-xs mt-2 text-foreground/60">
                  “Driving African talent to global platforms.”
                </p>
              </div>
            </div>

            {/* Eduardo (NOW LEADERSHIP) */}
            <div className="glass-card overflow-hidden rounded-[2rem]">
              <img className="h-[420px] w-full object-cover" src={eduardo} />
              <div className="p-6">
                <h3 className="text-2xl">Eduardo Raupp Guimairreas</h3>
                <p className="text-accent text-sm">
                  TMR Sports Brazil · International Football Advisor
                </p>
                <p className="text-xs mt-2 text-foreground/60">
                  “Connecting continents through football expertise.”
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNICAL TEAM */}
      <section className="py-24">
        <div className="container-pro">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technicalTeam.map((m, i) => (
              <div key={i} className="glass-card rounded-[2rem] overflow-hidden">
                <img
                  src={m.image}
                  className="h-72 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="text-xs text-accent uppercase">{m.role}</p>
                  <p className="text-xs text-foreground/60 mt-2">
                    {m.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES + CHARITY */}
      <section className="py-24 bg-card/20">
        <div className="container-pro">
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="glass-card p-6 rounded-[2rem]">
                <v.icon className="text-accent mb-3" />
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-foreground/70">{v.desc}</p>
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
