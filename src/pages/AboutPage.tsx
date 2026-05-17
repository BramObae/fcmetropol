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
import elisha from "/elisha1.jpeg";

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
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Italy", flag: "🇮🇹" },
];

const flagLoop = [...countries, ...countries];

/* PROGRAMS */
const programs = [
  { icon: Search, title: "Scouting", desc: "Identifying talent globally." },
  { icon: Calendar, title: "Development", desc: "Elite football training systems." },
  { icon: Star, title: "Packaging", desc: "Player branding & exposure." },
  { icon: Plane, title: "Placement", desc: "Club & scholarship pathways." },
];

/* VALUES */
const values = [
  { icon: Target, title: "Discipline", desc: "Professional standards." },
  { icon: Heart, title: "Integrity", desc: "Honest development." },
  { icon: Trophy, title: "Excellence", desc: "Elite performance culture." },
  { icon: Users, title: "Community", desc: "Football for impact." },
];

/* TECH TEAM */
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
    role: "Strength & Conditioning",
    image: vincent,
  },
  {
    name: "Calum Shuan Selby",
    role: "Head of Curriculum",
    image: calum,
  },

  /* ADDED TOM HERE */
  {
    name: "Tom Ogweno",
    role: "Technical Director",
    image: tom,
  },
];

const leadership = [
  {
    name: "Rene Merilo",
    role: "President · FC Metropol Estonia",
    quote: "Strategic leadership and global structure.",
    image: rene,
  },
  {
    name: "Elisha Winga",
    role: "President · FC Metropol HP Kenya",
    quote: "Driving African football development pathways.",
    image: elisha,
  },
  {
    name: "Eduardo Raupp Guimairreas",
    role: "TMR SPORTS BRAZIL / INTERNATIONAL FOOTBALL ADVISOR",
    quote: "Connecting Africa to global football markets.",
    image: eduardo,
  },
];

/* PAGE */
const AboutPage = () => {
  return (
    <>
      <SEO title="About FC Metropol HP" />

      {/* FLAGS */}
      <section className="pt-28 overflow-hidden border-b border-border/50">
        <div className="flex w-max marquee py-4">
          {flagLoop.map((c, i) => (
            <div
              key={i}
              className="glass rounded-full px-5 py-3 flex items-center gap-3 whitespace-nowrap"
            >
              <span>{c.flag}</span>
              <span className="text-xs uppercase">{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HERO */}
      <section className="pt-24 pb-20 container-pro">
        <h1 className="font-display text-6xl">
          Building Africa’s
          <span className="text-gradient-gold"> football pathway</span>
        </h1>
        <p className="mt-6 text-foreground/75 max-w-3xl">
          Elite football development platform creating structured pathways from Africa to global football.
        </p>
      </section>

      <Stats />

      {/* LEADERSHIP */}
      <section className="py-24 container-pro">
        <h2 className="text-4xl font-display mb-10">Leadership</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {leadership.map((p, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden">
              <img
                src={p.image}
                className="h-[380px] w-full object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-accent text-xs uppercase mt-2">{p.role}</p>
                <p className="text-sm text-foreground/70 mt-3">{p.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MWANAHALIMA */}
      <section className="py-20 container-pro">
        <h2 className="text-3xl font-display mb-8">
          International Football Liaison
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[mwanahalima, mwanahalima1].map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-[420px] w-full object-cover object-center rounded-2xl"
            />
          ))}
        </div>

        <p className="mt-6 text-foreground/70">
          Mwanahalima Jereko — HB Køge (Denmark) · Harambee Starlets Assistant Captain
        </p>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 container-pro">
        <h2 className="text-4xl font-display mb-10">Programs</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl">
              <p.icon className="text-accent" />
              <h3 className="text-xl mt-3">{p.title}</h3>
              <p className="text-sm text-foreground/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 container-pro">
        <h2 className="text-4xl font-display mb-10">Values</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl">
              <v.icon className="text-accent" />
              <h3 className="mt-3">{v.title}</h3>
              <p className="text-sm text-foreground/70">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL TEAM */}
      <section className="py-24 container-pro">
        <h2 className="text-4xl font-display mb-10">Technical Team</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {technicalTeam.map((m, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden">
              <img
                src={m.image}
                className={`h-[360px] w-full object-cover ${
                  m.name === "Tom Ogweno"
                    ? "object-center scale-90"
                    : "object-top"
                }`}
              />
              <div className="p-5">
                <h3>{m.name}</h3>
                <p className="text-xs text-accent uppercase">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Charity />
    </>
  );
};

export default AboutPage;
