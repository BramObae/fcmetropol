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
import chima from "/Chima Nwaka.jpeg";

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
  {
    icon: Target,
    title: "Discipline",
    desc: "Professional standards in performance.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "Transparent development structure.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    desc: "Elite football culture and standards.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Football for opportunity and impact.",
  },
];

/* LEADERSHIP */
const leadership = [
  {
    name: "Rene Merilo",
    role: "President Estonia",
    image: rene,
    desc: "Global football development and international partnerships.",
  },
  {
    name: "Elisha Ruoth Winga",
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
    desc: "European football advisor and strategic development.",
  },
  {
    name: "Hany Hussein",
    role: "Former Sports Agent",
    image: hany,
    desc: "North Africa, Gulf & Asia football relations.",
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
  {
    name: "Maurice Omoya Aoko",
    role: "Sporting Director",
    image: maurice,
    desc: "Recruitment, sporting structure and performance systems.",
  },
  {
    name: "Chima Nwaka Oti. BSN RN.",
    role: "Finance Advisor",
    image: chima,
    desc: "Georgia Football Association (USA.) international football investment and strategic development advisory.",
  },
];

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
        <div className="relative overflow-hidden">

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />

          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex gap-5 w-max marquee py-4">
            {flagLoop.map((c, i) => (
              <div
                key={i}
                className="glass rounded-full px-5 py-3 flex gap-3 items-center whitespace-nowrap border border-white/10"
              >
                <span className="text-lg">{c.flag}</span>

                <span className="text-xs uppercase tracking-[0.2em] text-foreground/75">
                  {c.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HERO */}
      <section className="pt-24 pb-24">
        <div className="container-pro">

          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />

              <span className="text-xs uppercase tracking-[0.3em] text-foreground/75">
                FC Metropol HP Kenya
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl md:text-[6rem] leading-[0.9]">
  Building Africa’s
  <br />
  <span className="text-gradient-gold">
    global football pathway.
  </span>
</h1>

<p className="mt-6 text-foreground/75 text-base md:text-lg leading-relaxed max-w-2xl">
  Discover. Develop. Deliver.
</p>

<p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed">
  We enjoy rich global networks of technical experts and sporting strategists,
  connecting talent to elite football opportunities worldwide.
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

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <div
                key={i}
                className="glass-card p-8 rounded-3xl border border-white/10"
              >

                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/20 grid place-items-center mb-6">
                  <p.icon className="text-accent" size={24} />
                </div>

                <h3 className="text-2xl font-semibold">
                  {p.title}
                </h3>

                <p className="text-foreground/70 mt-3 leading-relaxed">
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

            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              International football
              <span className="text-gradient-gold"> leadership.</span>
            </h2>

            <p className="mt-6 text-foreground/75 text-lg leading-relaxed">
              A leadership structure bringing together international football
              experience, technical expertise, sporting strategy and global
              player development pathways.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {leadership.map((p, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl overflow-hidden border border-white/10"
              >

                <img
                  src={p.image}
                  alt={p.name}
                  className="h-[420px] w-full object-cover object-top"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-semibold">
                    {p.name}
                  </h3>

                  <p className="text-xs uppercase tracking-[0.2em] text-accent mt-2">
                    {p.role}
                  </p>

                  <p className="text-sm text-foreground/70 mt-4 leading-relaxed">
                    {p.desc}
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

          <div className="max-w-3xl mb-14">

            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Technical Team
            </div>

            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              Football minds behind
              <span className="text-gradient-gold"> the structure.</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {technicalTeam.map((m, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl overflow-hidden border border-white/10"
              >

                <img
                  src={m.image}
                  alt={m.name}
                  className={`h-[360px] w-full object-cover ${m.object}`}
                />

                <div className="p-5">

                  <h3 className="text-xl font-semibold">
                    {m.name}
                  </h3>

                  <p className="text-xs uppercase tracking-[0.2em] text-accent mt-1">
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
