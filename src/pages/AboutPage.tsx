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
import elisha1 from "/elisha1.jpeg";
import eduardo from "/Eduardo Raupp.jpeg";
import jorge from "/Jorge Fuster Molla.jpeg";
import hany from "/Hany Hussein.jpeg";
import maurice from "/Maurice.jpeg";
import mourikam from "/Mourikam junior.jpeg";
import calum from "/CalumShuan.jpeg";

/* TECHNICAL TEAM IMAGES */
import gabriel from "/Gabriel Kariuki.jpeg";
import edwin from "/Edwin Mwaura.jpeg";
import alexander from "/Alexander Otoo.jpeg";
import sambi from "/Sambi Shaban.jpeg";
import brian from "/Brian Odhiambo.jpeg";
import vincent from "/Vincent Ngesa.jpeg";
import tom from "/TomOgweno.jpeg";
import muyoti from "/NicholasMuyoti.jpeg";

/* FLAGS */
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
];

const flagLoop = [...countries, ...countries];

/* PROGRAMS */
const programs = [
  {
    icon: Search,
    title: "Scouting",
    desc: "Identifying talent across academies, schools and competitions.",
  },
  {
    icon: Calendar,
    title: "Development",
    desc: "Elite structured football training systems.",
  },
  {
    icon: Star,
    title: "Packaging",
    desc: "Player branding, media exposure and profiling.",
  },
  {
    icon: Plane,
    title: "Placement",
    desc: "Professional clubs, scholarships and global pathways.",
  },
];

/* VALUES */
const values = [
  { icon: Target, title: "Discipline", desc: "Professional standards in performance." },
  { icon: Heart, title: "Integrity", desc: "Transparent development structure." },
  { icon: Trophy, title: "Excellence", desc: "Elite football culture and standards." },
  { icon: Users, title: "Community", desc: "Football for opportunity and impact." },
];

/* LEADERSHIP (UPDATED) */
const leadership = [
  {
    name: "Rene Merilo",
    role: "International President",
    image: rene,
    desc: "Global football development and international partnerships.",
  },
  {
    name: "Elisha Winga",
    role: "Kenya President",
    image: elisha1,
    desc: "National football structure and talent pathway leadership.",
  },
  {
    name: "Eduardo Raupp Guimarães",
    role: "International Technical Director",
    image: eduardo,
    desc: "Global technical strategy and football systems design.",
  },
  {
    name: "Jorge Fuster Molla",
    role: "International Football Advisor",
    image: jorge,
    desc: "European football advisory and strategic development.",
  },
  {
    name: "Hany Hussein",
    role: "International Football Advisor",
    image: hany,
    desc: "North Africa, Gulf & Asia football relations.",
  },
  {
    name: "Maurice Omoya Aoko",
    role: "Sporting Director",
    image: maurice,
    desc: "Recruitment, sporting structure and performance systems.",
  },
  {
    name: "Mourikam Vincent",
    role: "International Football Advisor",
    image: mourikam,
    desc: "Fairplay Sports Management Germany 🇩🇪 scouting & networks.",
  },
  {
    name: "Calum Shuan Selby",
    role: "Head of Football Curriculum Development",
    image: calum,
    desc: "Player development curriculum and coaching systems.",
  },
];

/* TECHNICAL TEAM */
const technicalTeam = [
  { name: "Tom Ogweno", role: "Technical Director", image: tom, object: "object-[center_15%]" },
  { name: "Nicholas Muyoti", role: "Head Coach", image: muyoti, object: "object-top" },
  { name: "Gabriel Kariuki", role: "Data Scientist", image: gabriel, object: "object-top" },
  { name: "Edwin Mwaura", role: "Assistant Coach", image: edwin, object: "object-top" },
  { name: "Alexander Otoo", role: "Media", image: alexander, object: "object-top" },
  { name: "Sambi Shaban", role: "Physiotherapist", image: sambi, object: "object-top" },
  { name: "Brian Odhiambo", role: "Assistant Coach", image: brian, object: "object-top" },
  { name: "Vincent Ngesa", role: "Strength & Conditioning Coach", image: vincent, object: "object-top" },
];

/* PAGE */
const AboutPage = () => {
  return (
    <>
      <SEO
        title="About FC Metropol HP Kenya"
        description="Elite football development platform building global pathways for African talent."
      />

      {/* FLAGS */}
      <section className="pt-28 overflow-hidden border-b border-border/50 bg-card/20">
        <div className="flex gap-5 w-max marquee py-4">
          {flagLoop.map((c, i) => (
            <div key={i} className="glass rounded-full px-5 py-3 flex gap-3">
              <span>{c.flag}</span>
              <span className="text-xs uppercase tracking-[0.2em]">{c.name}</span>
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

      {/* PROGRAMS */}
      <section className="py-24">
        <div className="container-pro grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-foreground/70 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 bg-card/20">
        <div className="container-pro">
          <h2 className="font-display text-5xl mb-12">Leadership</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((p, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden">
                <img src={p.image} className="h-[420px] w-full object-cover object-top" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{p.name}</h3>
                  <p className="text-xs uppercase text-accent mt-1">{p.role}</p>
                  <p className="text-sm text-foreground/70 mt-3">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL TEAM */}
      <section className="py-24">
        <div className="container-pro">
          <h2 className="font-display text-5xl mb-12">Technical Team</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {technicalTeam.map((m, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden">
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
