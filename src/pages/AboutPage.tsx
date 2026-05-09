import { SEO } from "@/components/SEO";
import { Stats } from "@/components/site/Stats";
import { Charity } from "@/components/site/Charity";
import { Partners } from "@/components/site/Partners";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Award,
  Globe2,
  Flag,
  Compass,
  Heart,
  Users,
  Trophy,
  GraduationCap,
  Plane,
  Search,
  Calendar,
  Star,
  BookOpen,
  Map,
  ShieldCheck,
} from "lucide-react";

/* -------- DATA -------- */

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
];
const flagLoop = [...countries, ...countries, ...countries];

const stories = [
  { name: "Story coming soon", role: "Nairobi · Striker", quote: "Photo & full story to be added." },
  { name: "Story coming soon", role: "Mombasa · Midfielder", quote: "Photo & full story to be added." },
  { name: "Story coming soon", role: "Kisumu · Defender", quote: "Photo & full story to be added." },
];

const team = [
  { name: "Member name", role: "Founder & CEO" },
  { name: "Member name", role: "Director of Football" },
  { name: "Member name", role: "Head of Operations" },
  { name: "Member name", role: "Head of Scouting" },
];
const techTeam = [
  { name: "Coach name", role: "Head Coach" },
  { name: "Coach name", role: "Assistant Coach" },
  { name: "Coach name", role: "Goalkeeping Coach" },
  { name: "Coach name", role: "Strength & Conditioning" },
  { name: "Coach name", role: "Performance Analyst" },
  { name: "Coach name", role: "Sports Physio" },
];

const programs = [
  { icon: Calendar, tag: "01", title: "16-Week Season", desc: "A full developmental season — 4 months, 64 sessions of elite training, tactics and game prep." },
  { icon: Plane, tag: "02", title: "International Tours", desc: "Curated tours that put our players in front of European, Gulf and South American football." },
  { icon: Search, tag: "03", title: "Scouting Tours", desc: "Targeted scouting missions across Africa to identify and onboard the next generation." },
  { icon: Trophy, tag: "04", title: "Tournament Tours", desc: "Competitive exposure at high-level invitational tournaments — game-time that matters." },
];

const pathways = [
  { icon: Star, title: "Pure Football Pathway", desc: "Direct placement into clubs, academies and pro environments — full footballing route." },
  { icon: BookOpen, title: "Academic Pathway", desc: "Football + education — placement into colleges and dual-career programs abroad." },
];
const opportunities = [
  { icon: GraduationCap, title: "Full Scholarships", desc: "100% funded placements for top-performing identified talent." },
  { icon: ShieldCheck, title: "Partial Scholarships", desc: "Subsidized placements opening doors that would otherwise stay shut." },
];

const values = [
  { icon: Target, title: "Discipline", desc: "Daily standards on and off the pitch." },
  { icon: Heart, title: "Integrity", desc: "Honest assessments. Players first, always." },
  { icon: Trophy, title: "Excellence", desc: "Elite benchmarks borrowed from the world's best." },
  { icon: Users, title: "Community", desc: "We lift as we climb — every signing opens a door." },
];

const goals = [
  { icon: GraduationCap, title: "Place 100+ players annually", desc: "Into clubs, academies and college programs by 2027." },
  { icon: Globe2, title: "Open four regional hubs", desc: "Nairobi, Lagos, Dubai and London." },
  { icon: Heart, title: "Scholarship 250 children", desc: "Through our charity arm — fully funded." },
  { icon: Award, title: "Africa's #1 packaging brand", desc: "Gold standard for player profiling and representation." },
];

const milestones = [
  { year: "2021", title: "FC Metropol HP founded in Nairobi" },
  { year: "2022", title: "First international placements — Europe & Gulf" },
  { year: "2023", title: "Charity arm launched — full scholarships" },
  { year: "2024", title: "Active across five continents" },
  { year: "2025", title: "Federation & tournament partnerships" },
];

/* -------- PAGE -------- */

const AboutPage = () => (
  <>
    <SEO
      title="About FC Metropol HP Kenya — Pathways across Africa & Beyond"
      description="Centre of excellence developing, identifying and placing African footballers — partners across Estonia, Brazil, Kenya, Tanzania, Rwanda, South Africa, Zambia, Zimbabwe, Egypt, Tunisia and Morocco."
    />

    {/* HERO */}
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-purple/15 blur-3xl -z-10" />
      <div className="container-pro">
        <div className="max-w-3xl reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Centre of Excellence</div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.9]">
            More than a club. <br />
            <span className="text-gradient-gold">A pathway.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
            We identify, develop and place African footballers — through a 16-week elite season,
            international tours and direct routes into clubs, academies and colleges worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/join">Join the Program <ArrowRight size={18} /></Link>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <div className="reveal"><Stats /></div>

    {/* OUR PARTNERS — countries marquee */}
    <section className="section-pad bg-card/20 border-y border-border/50">
      <div className="container-pro mb-10">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Our Partners</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
            Partners in <span className="text-gradient-gold">11 countries</span> — and growing.
          </h2>
          <p className="mt-3 text-foreground/70">
            A network spanning the entire African continent, plus Estonia and Brazil — opening doors
            wherever our players are headed.
          </p>
        </div>
      </div>

      <div className="marquee-wrap relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee flex gap-4 w-max">
          {flagLoop.map((c, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl px-6 py-4 flex items-center gap-4 min-w-[220px] hover:border-accent/60 transition"
            >
              <div className="text-4xl leading-none">{c.flag}</div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-accent">Partner</div>
                <div className="font-display text-lg leading-tight">{c.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* featured partner brands */}
      <div className="mt-10"><Partners /></div>
    </section>

    {/* KENYAN STORIES */}
    <section className="section-pad">
      <div className="container-pro">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap reveal">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Kenyan Stories</div>
            <h2 className="font-display text-3xl md:text-5xl">
              Voices from the <span className="text-gradient-gold">pitch.</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            Real players, real journeys. Photos and full stories drop in here — placeholders for now.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {stories.map((s, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 hover-lift reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-primary/30 via-purple/25 to-accent/20">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-24 w-24 rounded-full bg-background/40 backdrop-blur-md grid place-items-center text-accent">
                    <Users size={36} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">{s.role}</div>
                  <h3 className="font-display text-2xl mb-2">{s.name}</h3>
                  <p className="text-sm text-foreground/70 italic">"{s.quote}"</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* OUR TEAM */}
    <section className="section-pad bg-card/20 border-y border-border/50">
      <div className="container-pro">
        <div className="max-w-2xl mb-12 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Our Team</div>
          <h2 className="font-display text-3xl md:text-5xl">The people behind the pathway.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {team.map((m, i) => (
            <div key={i} className={`glass-card rounded-2xl overflow-hidden hover-lift reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="aspect-square bg-gradient-to-br from-primary/40 via-primary-glow/20 to-purple/30 grid place-items-center">
                <Users className="text-accent" size={40} />
              </div>
              <div className="p-5">
                <div className="font-display text-xl">{m.name}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-accent mt-1">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TECHNICAL TEAM */}
    <section className="section-pad">
      <div className="container-pro">
        <div className="max-w-2xl mb-12 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Technical Team</div>
          <h2 className="font-display text-3xl md:text-5xl">Coaches & specialists.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {techTeam.map((m, i) => (
            <div key={i} className={`glass-card rounded-2xl p-6 flex items-center gap-4 hover-lift reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br from-purple/40 to-primary/40 grid place-items-center">
                <ShieldCheck className="text-accent" size={24} />
              </div>
              <div>
                <div className="font-display text-lg leading-tight">{m.name}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-accent mt-1">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROGRAMS */}
    <section className="section-pad bg-card/20 border-y border-border/50">
      <div className="container-pro">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap reveal">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Programs</div>
            <h2 className="font-display text-3xl md:text-5xl">
              16 weeks. <span className="text-gradient-gold">64 sessions.</span> One pathway.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            A full season of elite development — 4 months, 4 sessions a week — plus international,
            scouting and tournament tours.
          </p>
        </div>

        {/* Big season counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { n: "16", l: "Weeks" },
            { n: "4", l: "Months" },
            { n: "64", l: "Sessions" },
            { n: "1", l: "Season" },
          ].map((s, i) => (
            <div key={i} className={`glass-card rounded-2xl p-6 text-center reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="font-display text-5xl md:text-6xl text-gradient-gold leading-none">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/70">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {programs.map((p, i) => (
            <div key={p.title} className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 md:p-10 hover:border-accent/50 transition reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl group-hover:bg-accent/15 transition" />
              <div className="relative flex items-start justify-between mb-8">
                <div className="h-12 w-12 rounded-xl glass grid place-items-center">
                  <p.icon className="text-accent" size={22} />
                </div>
                <span className="font-display text-2xl text-muted-foreground/60">{p.tag}</span>
              </div>
              <h3 className="relative text-xl md:text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="relative text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PATHWAYS & OPPORTUNITIES */}
    <section className="section-pad">
      <div className="container-pro">
        <div className="max-w-2xl mb-12 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Pathways</div>
          <h2 className="font-display text-3xl md:text-5xl">
            We <span className="text-gradient-gold">identify, develop & place.</span>
          </h2>
          <p className="mt-3 text-foreground/70">
            Two clear routes to your future — pure football, or football + education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-10">
          {pathways.map((p, i) => (
            <div key={p.title} className={`glass-card rounded-3xl p-8 md:p-10 hover-lift reveal reveal-delay-${i + 1}`}>
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-purple grid place-items-center mb-6">
                <p.icon className="text-accent" size={26} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3">{p.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {opportunities.map((o, i) => (
            <div key={o.title} className={`relative overflow-hidden rounded-3xl p-8 hover-lift reveal reveal-delay-${i + 1}`}
                 style={{ background: i === 0 ? "var(--gradient-royal)" : "linear-gradient(135deg, hsl(218 90% 28%), hsl(222 50% 15%))" }}>
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-background/20 backdrop-blur grid place-items-center mb-4">
                  <o.icon className="text-accent" size={22} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-2 text-white">{o.title}</h3>
                <p className="text-white/85">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* NETWORK COVERAGE */}
    <section className="section-pad bg-card/20 border-y border-border/50">
      <div className="container-pro">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal reveal-left">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Network Coverage</div>
            <h2 className="font-display text-3xl md:text-5xl leading-[0.95]">
              The <span className="text-gradient-gold">entire African continent.</span>
            </h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              From Cape Town to Cairo, Dakar to Mombasa — our scouting and placement network reaches
              every region of Africa, with active hubs in 11 countries and growing.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {countries.map((c) => (
                <span key={c.name} className="px-3 py-1.5 rounded-full text-sm bg-background/50 border border-border/60">
                  <span className="mr-1.5">{c.flag}</span>{c.name}
                </span>
              ))}
            </div>
          </div>
          <div className="reveal reveal-right">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-purple/30 to-accent/20 blur-2xl" />
              <div className="relative h-full w-full rounded-full glass-card grid place-items-center">
                <div className="text-center">
                  <Map className="mx-auto text-accent mb-4" size={56} />
                  <div className="font-display text-7xl text-gradient-gold leading-none">11</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/70">Countries</div>
                  <div className="mt-6 font-display text-3xl">All of Africa</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-accent mt-1">+ Estonia · Brazil</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* MISSION & VISION */}
    <section className="section-pad">
      <div className="container-pro grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="glass-card rounded-3xl p-8 md:p-10 reveal reveal-left">
          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center mb-6">
            <Flag className="text-accent" size={26} />
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Mission</div>
          <h3 className="font-display text-3xl md:text-4xl mb-4">Develop. Package. Place.</h3>
          <p className="text-foreground/80 leading-relaxed">
            Transform amateur African footballers into professionals through elite coaching,
            world-class personal branding and direct placement worldwide.
          </p>
        </div>
        <div className="glass-card rounded-3xl p-8 md:p-10 reveal reveal-right">
          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple to-purple-glow grid place-items-center mb-6">
            <Compass className="text-accent" size={26} />
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Vision</div>
          <h3 className="font-display text-3xl md:text-4xl mb-4">A pro pathway for every African talent.</h3>
          <p className="text-foreground/80 leading-relaxed">
            The most trusted bridge between African football talent and the global professional
            game — leaving no gifted child behind.
          </p>
        </div>
      </div>
    </section>

    {/* TIMELINE */}
    <section className="section-pad bg-card/20 border-y border-border/50">
      <div className="container-pro">
        <div className="max-w-2xl mb-12 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Timeline</div>
          <h2 className="font-display text-3xl md:text-5xl">Milestones along the way.</h2>
        </div>
        <ol className="relative border-l border-border/60 ml-3 space-y-8">
          {milestones.map((m, i) => (
            <li key={m.year} className={`pl-8 reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-background" />
              <div className="text-xs uppercase tracking-[0.3em] text-accent mb-1">{m.year}</div>
              <h3 className="font-display text-xl md:text-2xl">{m.title}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* GOALS & VALUES */}
    <section className="section-pad">
      <div className="container-pro">
        <div className="max-w-2xl mb-12 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Goals</div>
          <h2 className="font-display text-3xl md:text-5xl">Where we're headed.</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mb-16">
          {goals.map((g, i) => (
            <div key={g.title} className={`glass-card rounded-2xl p-6 md:p-8 hover-lift reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-purple grid place-items-center mb-5">
                <g.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{g.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mb-10 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Values</div>
          <h2 className="font-display text-3xl md:text-5xl">What we stand on.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {values.map((v, i) => (
            <div key={v.title} className={`glass-card rounded-2xl p-6 hover-lift reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-primary to-primary-glow grid place-items-center mb-4">
                <v.icon className="text-accent" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="reveal"><Charity /></div>

    {/* CLOSING CTA */}
    <section className="section-pad">
      <div className="container-pro">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center reveal"
             style={{ background: "var(--gradient-royal)" }}>
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Your move</div>
            <h2 className="font-display text-3xl md:text-6xl leading-[0.95] max-w-3xl mx-auto text-white">
              Ready to be <span className="text-gradient-gold">developed, packaged & placed?</span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/join">Apply now <ArrowRight size={18} /></Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link to="/programs">See programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
