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

/* NEW LEADERSHIP */
import mourikam from "/Mourikam junior.jpeg";

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
    desc: "Identifying talent across academies, schools and competitive environments.",
  },
  {
    icon: Calendar,
    title: "Development",
    desc: "Structured elite football training systems.",
  },
  {
    icon: Star,
    title: "Packaging",
    desc: "Player branding, exposure and media profiling.",
  },
  {
    icon: Plane,
    title: "Placement",
    desc: "Club, scholarship and professional pathways.",
  },
];

/* -------------------------------- */
/* VALUES */
/* -------------------------------- */

const values = [
  {
    icon: Target,
    title: "Discipline",
    desc: "Professional standards in training and performance.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "Honest development and transparent systems.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    desc: "Elite football culture and high standards.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Football for impact and opportunity.",
  },
];

/* -------------------------------- */
/* LEADERSHIP (UPDATED) */
/* -------------------------------- */

const leadership = [
  {
    name: "Rene Merilo",
    role: "International President",
    image: rene,
    desc: "Driving global football structures and international partnerships.",
  },
  {
    name: "Elisha Winga",
    role: "Kenya President",
    image: elisha1,
    desc: "Leading Kenyan high-performance football development systems.",
  },
  {
    name: "Eduardo Raupp Guimarães",
    role: "International Technical Director",
    image: eduardo,
    desc: "Global technical oversight and player development strategy.",
  },
  {
    name: "Mwanahalima Jereko",
    role: "International Football Liaison",
    image: mwanahalima,
    desc: "Elite women’s football leadership and international linkage.",
  },
  {
    name: "Mourikam Junior",
    role: "Fairplay Sports Management Germany 🇩🇪 / International Football Advisor",
    image: mourikam,
    desc: "International scouting and European football network development.",
  },
  {
    name: "Calum Shuan Selby",
    role: "Head of Football Curriculum Development",
    image: calum,
    desc: "Designing structured football development methodology.",
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
    object: "object-[center_15%]", // FIXED ZOOM ISSUE
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
];

/* -------------------------------- */
/* PAGE */
/* -------------------------------- */

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About FC Metropol HP Kenya"
        description="Elite football development platform."
      />

      {/* FLAGS */}
      <section className="pt-28 overflow-hidden border-b border-border/50 bg-card/20">
        <div className="flex gap-5 w-max marquee py-4">
          {flagLoop.map((c, i) => (
            <div key={i} className="glass rounded-full px-5 py-3 flex gap-3">
              <span>{c.flag}</span>
              <span className="text-xs uppercase tracking-[0.2em]">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* HERO */}
      <section className="pt-24 pb-24">
        <div className="container-pro">
          <h1 className="font-display text-6xl md:text-7xl">
            Building Africa’s global football pathway
          </h1>
        </div>
      </section>

      <Stats />

      {/* LEADERSHIP */}
      <section className="py-24">
        <div className="container-pro">
          <h2 className="font-display text-5xl mb-12">Leadership</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((p, i) => (
              <div key={i} className="glass-card rounded-[2rem] overflow-hidden">
                <img
                  src={p.image}
                  className="h-[420px] w-full object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{p.name}</h3>
                  <p className="text-accent text-xs uppercase tracking-widest">
                    {p.role}
                  </p>
                  <p className="text-sm text-foreground/70 mt-3">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL TEAM */}
      <section className="py-24 bg-card/20">
        <div className="container-pro">
          <h2 className="font-display text-5xl mb-12">Technical Team</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalTeam.map((m, i) => (
              <div key={i} className="glass-card rounded-[2rem] overflow-hidden">
                <img
                  src={m.image}
                  className={`h-[360px] w-full object-cover ${m.object}`}
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{m.name}</h3>
                  <p className="text-xs uppercase text-accent">{m.role}</p>
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
