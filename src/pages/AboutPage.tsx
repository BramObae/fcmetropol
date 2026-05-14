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

const flagLoop = [...countries, ...countries];

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
  { name: "Gabriel Kariuki", role: "Data Scientist", image: gabriel },
  { name: "Edwin Mwaura", role: "Assistant Coach", image: edwin },
  { name: "Eduardo Raupp Guimairreas", role: "International Football Advisor", image: eduardo },
  { name: "Alexander Otoo", role: "Media", image: alexander },
  { name: "Sambi Shaban", role: "Physiotherapist", image: sambi },
  { name: "Brian Odhiambo", role: "Assistant Coach", image: brian },
  { name: "Vincent Ngesa", role: "Strength & Conditioning Coach", image: vincent },
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

      {/* FLAGS (NOW AT TOP BEFORE HERO TEXT) */}
      <section className="pt-28 overflow-hidden bg-card/20 border-b border-border/50">
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
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* GLOBAL NETWORK */}
      <section className="py-20 border-y border-border/50 bg-card/20">
        <div className="container-pro">
          <h2 className="font-display text-4xl md:text-6xl">
            Connected across <span className="text-gradient-gold">continents.</span>
          </h2>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24">
        <div className="container-pro">
          <h2 className="font-display text-4xl md:text-6xl mb-10">
            Leadership
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* RENE */}
            <div className="glass-card rounded-[2rem] overflow-hidden">
              <img src={rene} className="w-full h-[500px] object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-semibold">Rene Merilo</h3>
                <p className="text-accent text-sm mt-2">President</p>
              </div>
            </div>

            {/* ELISHA */}
            <div className="glass-card rounded-[2rem] overflow-hidden">
              <div className="grid grid-cols-2 gap-1">
                <img src={elisha} className="h-[420px] object-cover" />
                <img src={elisha1} className="h-[420px] object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold">Elisha Winga</h3>
                <p className="text-accent text-sm mt-2">
                  President · FC Metropol HP Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL TEAM */}
      <section className="py-24 bg-card/20">
        <div className="container-pro">
          <h2 className="font-display text-4xl md:text-6xl mb-10">
            Technical Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalTeam.map((m, i) => (
              <div key={i} className="glass-card rounded-[2rem] overflow-hidden">
                <img src={m.image} className="h-80 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{m.name}</h3>
                  <p className="text-accent text-sm">{m.role}</p>
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
