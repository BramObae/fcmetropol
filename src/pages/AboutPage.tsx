import { SEO } from "@/components/SEO";
import { Stats } from "@/components/site/Stats";
import { GlobalReach } from "@/components/site/GlobalReach";
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
} from "lucide-react";

const values = [
  { icon: Target, title: "Discipline", desc: "Daily standards on and off the pitch — the foundation of every professional career." },
  { icon: Heart, title: "Integrity", desc: "Honest assessments, transparent placements, players first — always." },
  { icon: Trophy, title: "Excellence", desc: "Elite coaching benchmarks borrowed from European and Gulf academies." },
  { icon: Users, title: "Community", desc: "We lift as we climb — every signed player opens a door for the next." },
];

const goals = [
  { icon: GraduationCap, title: "Place 100+ players annually", desc: "Into clubs, academies and college programs across five continents by 2027." },
  { icon: Globe2, title: "Open four regional hubs", desc: "Nairobi, Lagos, Dubai and London — full-cycle development & scouting nodes." },
  { icon: Heart, title: "Scholarship 250 children", desc: "Through our charity arm, fully funding talented but under-resourced kids." },
  { icon: Award, title: "Be Africa's #1 packaging brand", desc: "Setting the gold standard for player profiling, media and representation." },
];

const milestones = [
  { year: "2021", title: "FC Metropol HP founded in Nairobi", desc: "Born from a single conviction — African talent deserves world-class packaging, not just world-class skills." },
  { year: "2022", title: "First international placements", desc: "Players signed with academies in Europe and the Gulf within 12 months of launch." },
  { year: "2023", title: "Charity arm launched", desc: "Full scholarships introduced for less-advantaged children with real footballing potential." },
  { year: "2024", title: "Five-continent footprint", desc: "Active partnerships and player pathways across Africa, Europe, America, Asia and the Middle East." },
  { year: "2025", title: "Federation partnerships", desc: "Recognized by federations and grassroots tournaments as a leading development partner." },
];

const AboutPage = () => (
  <>
    <SEO
      title="About FC Metropol HP Kenya — Our Story, Mission & Goals"
      description="The story of FC Metropol HP Kenya — a global football programme that develops, packages and places amateur players into professional pathways across five continents."
    />

    {/* HERO */}
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="container-pro">
        <div className="max-w-3xl reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Who we are</div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.9]">
            More than a club. <br />
            <span className="text-gradient-gold">A pathway.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
            FC Metropol HP Kenya is a global football development programme turning amateur talent
            into professional careers — through elite training, world-class personal branding and
            direct placement into clubs, academies and colleges on five continents.
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

    {/* OUR STORY */}
    <section className="section-pad">
      <div className="container-pro grid lg:grid-cols-12 gap-14 items-start">
        <div className="lg:col-span-5 reveal reveal-left">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Our Story</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
            How it <span className="text-gradient-gold">started.</span>
          </h2>
          <p className="mt-6 text-foreground/70">
            From a Nairobi training pitch to a five-continent network — this is the journey of
            FC Metropol HP.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-5 text-base md:text-lg text-foreground/80 font-light leading-relaxed reveal reveal-right">
          <p>
            FC Metropol HP Kenya was founded in <span className="text-foreground font-medium">2021</span>{" "}
            on a simple, stubborn belief: African footballers don't lack talent — they lack a
            <span className="text-accent"> pathway</span>. Too many gifted players stall not because
            they can't compete, but because nobody packages, profiles or places them where decision-
            makers can see them.
          </p>
          <p>
            We started small — a handful of coaches, a borrowed pitch in Nairobi, and a promise to
            treat every player like a future professional. Within a year we had placed our first
            athletes into European and Gulf academies. Within three, we were operating across{" "}
            <span className="text-foreground font-medium">five continents</span>.
          </p>
          <p>
            Today we are a complete development engine — coaching, branding, media, scouting and
            placement under one roof. And through our charity arm, we make sure the door we kicked
            open stays open for the next generation of less-advantaged children.
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

        <ol className="relative border-l border-border/60 ml-3 space-y-10">
          {milestones.map((m, i) => (
            <li key={m.year} className={`pl-8 reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-background" />
              <div className="text-xs uppercase tracking-[0.3em] text-accent mb-1">{m.year}</div>
              <h3 className="font-display text-xl md:text-2xl">{m.title}</h3>
              <p className="mt-2 text-foreground/75 max-w-2xl leading-relaxed">{m.desc}</p>
            </li>
          ))}
        </ol>
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
            To transform amateur African footballers into professionals by combining elite coaching,
            world-class personal branding and direct placement into clubs, academies and colleges
            across the globe.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-10 reveal reveal-right">
          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center mb-6">
            <Compass className="text-accent" size={26} />
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Vision</div>
          <h3 className="font-display text-3xl md:text-4xl mb-4">A pro pathway for every African talent.</h3>
          <p className="text-foreground/80 leading-relaxed">
            To become the most trusted bridge between African football talent and the global
            professional game — and to make sure no gifted child is left behind because of where
            they were born.
          </p>
        </div>
      </div>
    </section>

    {/* GOALS */}
    <section className="section-pad bg-card/20 border-y border-border/50">
      <div className="container-pro">
        <div className="max-w-2xl mb-12 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Goals</div>
          <h2 className="font-display text-3xl md:text-5xl">Where we're headed.</h2>
          <p className="mt-3 text-foreground/70">
            Concrete, measurable goals that drive every training session, every signing, every
            partnership.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {goals.map((g, i) => (
            <div key={g.title} className={`glass-card rounded-2xl p-6 md:p-8 hover-lift reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center mb-5">
                <g.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{g.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* VALUES */}
    <section className="section-pad">
      <div className="container-pro">
        <div className="max-w-2xl mb-12 reveal">
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

    <div className="reveal"><GlobalReach /></div>
    <div className="reveal"><Charity /></div>

    {/* PARTNERS — moved here per request */}
    <div className="reveal"><Partners /></div>

    {/* CLOSING CTA */}
    <section className="section-pad">
      <div className="container-pro">
        <div className="glass-card rounded-3xl p-10 md:p-16 text-center reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Your move</div>
          <h2 className="font-display text-3xl md:text-6xl leading-[0.95] max-w-3xl mx-auto">
            Ready to be <span className="text-gradient-gold">developed, packaged and placed?</span>
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
    </section>
  </>
);

export default AboutPage;
