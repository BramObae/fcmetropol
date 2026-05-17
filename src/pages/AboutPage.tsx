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
import tom from "/TomOgweno.jpeg";
import nicholas from "/NicholasMuyoti.jpeg";

import gabriel from "/Gabriel Kariuki.jpeg";
import edwin from "/Edwin Mwaura.jpeg";
import alexander from "/Alexander Otoo.jpeg";
import sambi from "/Sambi Shaban.jpeg";
import brian from "/Brian Odhiambo.jpeg";
import vincent from "/Vincent Ngesa.jpeg";
import calum from "/CalumShuan.jpeg";

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
];

const flagLoop = [...countries, ...countries];

/* PROGRAMS */
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

/* VALUES */
const values = [
  { icon: Target, title: "Discipline", desc: "Professional standards in training, education and performance." },
  { icon: Heart, title: "Integrity", desc: "Transparent player development with honest guidance and structure." },
  { icon: Trophy, title: "Excellence", desc: "Building elite football environments inspired by global standards." },
  { icon: Users, title: "Community", desc: "Using football to uplift and inspire future generations." },
];

/* TECHNICAL TEAM */
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
    role: "Strength & Conditioning Coach",
    image: vincent,
  },
  {
    name: "Calum Shuan Selby",
    role: "Head of Football Curriculum Development",
    image: calum,
  },
  {
    name: "Tom Ogweno",
    role: "Technical Director · FC Metropol HP",
    image: tom,
  },
  {
    name: "Nicholas Muyoti",
    role: "Head Coach · FC Metropol HP",
    image: nicholas,
  },
];

/* LEADERSHIP */
const leadership = [
  {
    name: "Rene Merilo",
    role: "President · FC Metropol Estonia",
    quote: "Building bridges between talent and global opportunity.",
    image: rene,
  },
  {
    name: "Elisha Winga",
    role: "President · FC Metropol HP Kenya",
    quote: "Developing disciplined players for global pathways.",
    image: elisha,
  },
  {
    name: "Eduardo Raupp Guimairreas",
    role: "TMR SPORTS BRAZIL / INTERNATIONAL FOOTBALL ADVISOR",
    quote: "Connecting African talent to global football ecosystems.",
    image: eduardo,
  },
];

/* PAGE */
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
            <h1 className="font-display text-5xl sm:text-7xl md:text-[7rem] leading-[0.9]">
              Building Africa's
              <br />
              <span className="text-gradient-gold">
                global football pathway.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg md:text-2xl text-foreground/75 leading-relaxed font-light">
              FC Metropol HP Kenya is a high-performance football development platform
              focused on scouting, developing, packaging and placing talented African
              footballers into global football opportunities.
            </p>
          </div>
        </div>
      </section>

      <Stats />

      {/* LEADERSHIP */}
      <section className="py-24 bg-card/20">
        <div className="container-pro">
          <h2 className="font-display text-5xl mb-12">
            Leadership Driving the Vision
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((p, i) => (
              <div key={i} className="glass-card rounded-[2rem] overflow-hidden">
                <img
                  src={p.image}
                  className="w-full h-[360px] object-cover object-top"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{p.name}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mt-1">
                    {p.role}
                  </p>
                  <p className="text-sm text-foreground/70 mt-3 italic">
                    "{p.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL TEAM */}
      <section className="py-24">
        <div className="container-pro">
          <h2 className="font-display text-5xl mb-12">
            Technical Team
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {technicalTeam.map((m, i) => (
              <div key={i} className="glass-card rounded-[2rem] overflow-hidden">
                <img
                  src={m.image}
                  className={
                    m.name === "Tom Ogweno"
                      ? "w-full h-[300px] object-contain bg-black/10 p-3"
                      : "w-full h-[300px] object-cover object-top"
                  }
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold">{m.name}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
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
