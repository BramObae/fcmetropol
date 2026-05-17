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

import gabriel from "/Gabriel Kariuki.jpeg";
import edwin from "/Edwin Mwaura.jpeg";
import alexander from "/Alexander Otoo.jpeg";
import sambi from "/Sambi Shaban.jpeg";
import brian from "/Brian Odhiambo.jpeg";
import vincent from "/Vincent Ngesa.jpeg";
import calum from "/CalumShuan.jpeg";

import tom from "/TomOgweno.jpeg";
import nicholas from "/NicholasMuyoti.jpeg";

import mwanahalima1 from "/Mwanahalima1.jpeg";
import mwanahalima2 from "/Mwanahalima.jpeg";

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

/* PROGRAMS (SIMPLIFIED) */
const programs = [
  { icon: Search, title: "Scouting", desc: "Identifying talent globally." },
  { icon: Calendar, title: "Development", desc: "Elite football training systems." },
  { icon: Star, title: "Packaging", desc: "Player branding & exposure." },
  { icon: Plane, title: "Placement", desc: "Club & scholarship pathways." },
];

/* VALUES (SIMPLIFIED) */
const values = [
  { icon: Target, title: "Discipline", desc: "Professional standards." },
  { icon: Heart, title: "Integrity", desc: "Honest development." },
  { icon: Trophy, title: "Excellence", desc: "Elite performance culture." },
  { icon: Users, title: "Community", desc: "Football for impact." },
];

/* TECHNICAL TEAM */
const technicalTeam = [
  { name: "Gabriel Kariuki", role: "Data Scientist", image: gabriel },
  { name: "Edwin Mwaura", role: "Assistant Coach", image: edwin },
  { name: "Alexander Otoo", role: "Media", image: alexander },
  { name: "Sambi Shaban", role: "Physiotherapist", image: sambi },
  { name: "Brian Odhiambo", role: "Assistant Coach", image: brian },
  { name: "Vincent Ngesa", role: "Strength & Conditioning", image: vincent },
  { name: "Calum Shuan Selby", role: "Curriculum Lead", image: calum },

  /* FIXED ROLES */
  {
    name: "Tom Ogweno",
    role: "Technical Director",
    image: tom,
    fix: true,
  },
  {
    name: "Nicholas Muyoti",
    role: "Head Coach",
    image: nicholas,
  },
];

/* PAGE */
const AboutPage = () => {
  return (
    <>
      <SEO title="About FC Metropol HP" description="Global football pathway." />

      {/* FLAGS */}
      <section className="pt-28 overflow-hidden border-b border-border/50 bg-card/20">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex w-max gap-5 marquee py-4">
            {flagLoop.map((c, i) => (
              <div key={i} className="glass px-5 py-3 rounded-full flex items-center gap-3">
                <span>{c.flag}</span>
                <span className="text-xs uppercase tracking-[0.2em]">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="pt-24 pb-24">
        <div className="container-pro">
          <h1 className="font-display text-5xl md:text-7xl leading-[0.9]">
            Building Africa’s <br />
            <span className="text-gradient-gold">global football pathway</span>
          </h1>

          <p className="mt-8 max-w-3xl text-foreground/75">
            Elite scouting, development, and placement platform for African footballers.
          </p>
        </div>
      </section>

      <Stats />

      {/* PROGRAMS */}
      <section className="py-24">
        <div className="container-pro">
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl">
                <p.icon className="text-accent mb-4" size={26} />
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-foreground/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 bg-card/20">
        <div className="container-pro">

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="glass-card overflow-hidden rounded-2xl">
              <img src={rene} className="h-[500px] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl">Rene Merilo</h3>
              </div>
            </div>

            <div className="glass-card overflow-hidden rounded-2xl">
              <img src={elisha} className="h-[500px] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl">Elisha Winga</h3>
              </div>
            </div>

            {/* EDUARDO IN LEADERSHIP */}
            <div className="glass-card overflow-hidden rounded-2xl lg:col-span-2">
              <img src={eduardo} className="h-[500px] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl">Eduardo Raupp Guimairreas</h3>
                <p className="text-accent text-sm uppercase">
                  TMR SPORTS BRAZIL · International Football Advisor
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MWANAHALIMA (NEW SECTION BETWEEN) */}
      <section className="py-24">
        <div className="container-pro grid md:grid-cols-2 gap-6">

          <img src={mwanahalima1} className="rounded-2xl h-[500px] w-full object-cover" />
          <img src={mwanahalima2} className="rounded-2xl h-[500px] w-full object-cover" />

        </div>
      </section>

      {/* TECHNICAL TEAM */}
      <section className="py-24">
        <div className="container-pro grid md:grid-cols-3 gap-6">

          {technicalTeam.map((m, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden">

              {/* FIX TOM ZOOM */}
              <img
                src={m.image}
                className={`w-full h-80 object-cover ${
                  m.name === "Tom Ogweno"
                    ? "object-center scale-95"
                    : "object-top"
                }`}
              />

              <div className="p-5">
                <h3 className="text-xl">{m.name}</h3>
                <p className="text-accent text-sm">{m.role}</p>
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
