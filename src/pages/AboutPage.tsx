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
import maurice from "/Maurice.jpeg";
import hany from "/Hany Hussein.jpeg";

/* LIAISON */
import mwanahalima from "/Mwanahalima.jpeg";
import mwanahalima1 from "/Mwanahalima1.jpeg";

/* TECHNICAL TEAM */
import gabriel from "/Gabriel Kariuki.jpeg";
import edwin from "/Edwin Mwaura.jpeg";
import alexander from "/Alexander Otoo.jpeg";
import sambi from "/Sambi Shaban.jpeg";
import brian from "/Brian Odhiambo.jpeg";
import vincent from "/Vincent Ngesa.jpeg";
import calum from "/CalumShuan.jpeg";
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
  { name: "Canada", flag: "🇨🇦" },
];

const flagLoop = [...countries, ...countries];

/* TECHNICAL TEAM */
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
    role: "Head of Curriculum Development",
    image: calum,
    object: "object-top",
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
            <div key={i} className="flex items-center gap-3 px-6 whitespace-nowrap">
              <span className="text-xl">{c.flag}</span>
              <span className="text-xs uppercase tracking-[0.25em] text-foreground/70">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-24 md:pt-28 md:pb-32">
        <div className="container-pro relative z-10">
          <h1 className="font-display text-5xl md:text-[7rem] leading-[0.9]">
            Building Africa's
            <br />
            <span className="text-gradient-gold">global football pathway.</span>
          </h1>
        </div>
      </section>

      <Stats />

      {/* LEADERSHIP */}
      <section className="py-24 bg-card/20">
        <div className="container-pro">

          {/* TOP LEADERS */}
          <div className="grid lg:grid-cols-3 gap-8">

            <div className="glass-card rounded-[2rem] overflow-hidden">
              <img src={rene} className="w-full h-[420px] object-cover object-top" />
              <div className="p-8">
                <h3 className="text-3xl">Rene Merilo</h3>
                <p className="text-accent text-sm">International President</p>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] overflow-hidden">
              <img src={elisha1} className="w-full h-[420px] object-cover object-top" />
              <div className="p-8">
                <h3 className="text-3xl">Elisha Winga</h3>
                <p className="text-accent text-sm">Kenya President</p>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] overflow-hidden">
              <img src={eduardo} className="w-full h-[420px] object-cover object-top" />
              <div className="p-8">
                <h3 className="text-3xl">Eduardo Raupp Guimarães</h3>
                <p className="text-accent text-sm">International Football Advisor</p>
              </div>
            </div>

          </div>

          {/* MID STRATEGIC */}
          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            <div className="glass-card rounded-[2rem] overflow-hidden">
              <img src={jorge} className="w-full h-[420px] object-cover object-top" />
              <div className="p-8">
                <h3>Jorge Fuster Molla</h3>
                <p className="text-accent text-sm">International Technical Director</p>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] overflow-hidden">
              <img src={maurice} className="w-full h-[420px] object-cover object-top" />
              <div className="p-8">
                <h3>Maurice Omoya Aoko</h3>
                <p className="text-accent text-sm">Sporting Director</p>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] overflow-hidden">
              <img src={hany} className="w-full h-[420px] object-cover object-top" />
              <div className="p-8">
                <h3>Hany Hussein</h3>
                <p className="text-accent text-sm">International Football Advisor (North Africa, Gulf & Asia)</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LIAISON */}
      <section className="py-24">
        <div className="container-pro">

          <div className="glass-card rounded-[2rem] overflow-hidden grid lg:grid-cols-2">

            <div className="grid grid-cols-2">
              <img src={mwanahalima} className="h-[520px] object-cover object-top" />
              <img src={mwanahalima1} className="h-[520px] object-cover object-top" />
            </div>

            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-4xl">Mwanahalima Jereko</h2>
              <p className="text-accent">International Football Liaison</p>
            </div>

          </div>

        </div>
      </section>

      {/* TECHNICAL TEAM */}
      <section className="py-24">
        <div className="container-pro grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {technicalTeam.map((m, i) => (
            <div key={i} className="glass-card rounded-[2rem] overflow-hidden">
              <img src={m.image} className={`h-[360px] w-full object-cover ${m.object}`} />
              <div className="p-6">
                <h3>{m.name}</h3>
                <p className="text-accent text-sm">{m.role}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-card/20">
        <div className="container-pro">
          <Stats />
        </div>
      </section>

      <Charity />
    </>
  );
};

export default AboutPage;
