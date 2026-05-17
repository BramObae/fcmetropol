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

/* IMAGES */
import rene from "/rene.jpeg";
import elisha1 from "/elisha1.jpeg";

import eduardo from "/Eduardo Raupp.jpeg";
import tom from "/TomOgweno.jpeg";
import nicholas from "/NicholasMuyoti.jpeg";

import gabriel from "/Gabriel Kariuki.jpeg";
import edwin from "/Edwin Mwaura.jpeg";
import alexander from "/Alexander Otoo.jpeg";
import sambi from "/Sambi Shaban.jpeg";
import brian from "/Brian Odhiambo.jpeg";
import vincent from "/Vincent Ngesa.jpeg";
import calum from "/CalumShuan.jpeg";

/* FLAGS (FULL RESTORED SET) */
const countries = [
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "Burundi", flag: "🇧🇮" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Zambia", flag: "🇿🇲" },
  { name: "Zimbabwe", flag: "🇿🇼" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Tunisia", flag: "🇹🇳" },
  { name: "Algeria", flag: "🇩🇿" },
  { name: "Senegal", flag: "🇸🇳" },
  { name: "Cameroon", flag: "🇨🇲" },
  { name: "Ivory Coast", flag: "🇨🇮" },
  { name: "DR Congo", flag: "🇨🇩" },
  { name: "Estonia", flag: "🇪🇪" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "United States", flag: "🇺🇸" },
  { name: "Brazil", flag: "🇧🇷" },
];

const flagLoop = [...countries, ...countries];

/* PROGRAMS */
const programs = [
  {
    icon: Search,
    title: "Scouting",
    desc: "Identifying talented African footballers through showcases and scouting networks.",
  },
  {
    icon: Calendar,
    title: "Development",
    desc: "Elite football development focused on tactical growth and performance.",
  },
  {
    icon: Star,
    title: "Packaging",
    desc: "Professional player branding, highlights and profiling.",
  },
  {
    icon: Plane,
    title: "Placement",
    desc: "Pathways into clubs, academies and scholarships worldwide.",
  },
];

/* VALUES */
const values = [
  {
    icon: Target,
    title: "Discipline",
    desc: "Professional standards in training and performance.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "Transparent player development structure.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    desc: "Elite football environments inspired by global standards.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Using football to uplift future generations.",
  },
];

/* TECHNICAL TEAM */
const technicalTeam = [
  {
    name: "Nicholas Muyoti",
    role: "Head Coach · FC Metropol HP",
    image: nicholas,
  },
  {
    name: "Tom Ogweno",
    role: "Technical Director · FC Metropol HP",
    image: tom,
  },
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
  {
    name: "Calum Shuan Selby",
    role: "Head of Football Curriculum Development",
    image: calum,
  },
];

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About FC Metropol HP Kenya"
        description="Elite football development platform creating global pathways for African footballers."
      />

      {/* FLAGS */}
      <section className="pt-28 overflow-hidden border-b border-border/50 bg-card/20">
        <div className="flex gap-5 w-max marquee py-4">
          {flagLoop.map((c, i) => (
            <div
              key={i}
              className="glass rounded-full px-5 py-3 flex items-center gap-3 whitespace-nowrap"
            >
              <span className="text-xl">{c.flag}</span>
              <span className="uppercase text-xs tracking-[0.2em]">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-24">
        <div className="container-pro relative z-10 max-w-5xl">

          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em]">
              FC Metropol HP Kenya
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-[7rem] leading-[0.9]">
            Building Africa's <br />
            <span className="text-gradient-gold">
              global football pathway.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-foreground/75">
            FC Metropol HP develops African footballers into global professionals
            through scouting, development, packaging and placement.
          </p>

          <div className="mt-10 flex gap-4">
            <Button asChild variant="hero">
              <Link to="/join">
                Join Program <ArrowRight className="ml-1" />
              </Link>
            </Button>

            <Button asChild variant="outlineLight">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>

        </div>
      </section>

      <Stats />

      {/* PROGRAMS */}
      <section className="py-24">
        <div className="container-pro">
          <h2 className="text-4xl font-display mb-10">
            A complete football pathway
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl">
                <p.icon className="text-accent mb-4" size={24} />
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="text-foreground/70 mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 bg-card/20">
        <div className="container-pro">
          <h2 className="text-4xl font-display mb-10">Leadership</h2>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="glass-card p-6">
              <img src={rene} className="rounded-2xl mb-4" />
              <h3 className="text-xl">Rene Merilo</h3>
              <p className="text-accent text-sm">President · Estonia</p>
            </div>

            <div className="glass-card p-6">
              <img src={elisha1} className="rounded-2xl mb-4" />
              <h3 className="text-xl">Elisha Winga</h3>
              <p className="text-accent text-sm">President · Kenya</p>
            </div>

            <div className="glass-card p-6">
              <img src={eduardo} className="rounded-2xl mb-4" />
              <h3 className="text-xl">Eduardo Raupp Guimairreas</h3>
              <p className="text-accent text-sm">
                International Football Advisor · Brazil
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNICAL TEAM */}
      <section className="py-24">
        <div className="container-pro">
          <h2 className="text-4xl font-display mb-10">Technical Team</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {technicalTeam.map((m, i) => (
              <div key={i} className="glass-card p-6">
                <img src={m.image} className="rounded-2xl mb-4" />
                <h3 className="text-xl">{m.name}</h3>
                <p className="text-accent text-sm">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-card/20">
        <div className="container-pro">
          <h2 className="text-4xl font-display mb-10">Core Values</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="glass-card p-6">
                <v.icon className="text-accent mb-3" />
                <h3>{v.title}</h3>
                <p className="text-foreground/70">{v.desc}</p>
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
