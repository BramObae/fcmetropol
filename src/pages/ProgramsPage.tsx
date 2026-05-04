import { SEO } from "@/components/SEO";
import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";
import { PROGRAMS, ProgramFeatureBullet, ProgramOutcomeBullet } from "@/components/site/programs-data";

const GlobalReach = lazy(() =>
  import("@/components/site/GlobalReach").then((m) => ({ default: m.GlobalReach })),
);

const ProgramsPage = () => (
  <>
    <SEO
      title="Programs — FC Metropol HP Kenya"
      description="Training & development, player branding, scouting trials and international placement pathways for serious footballers."
    />
    <section className="pt-32 md:pt-40 pb-10">
      <div className="container-pro">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Programs</div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] max-w-4xl">
          Four pillars. <span className="text-gradient-gold">One pathway to pro.</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-foreground/75 max-w-2xl">
          Every FC Metropol player follows a structured, evidence-based journey designed by
          professional coaches, sports scientists and FIFA-licensed scouts — built to produce
          career-ready athletes, not weekend warriors.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {PROGRAMS.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-foreground/80 hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition"
            >
              <span className="text-accent">{p.tag}</span> {p.title}
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad pt-6">
      <div className="container-pro space-y-10 md:space-y-16">
        {PROGRAMS.map((p, idx) => (
          <article
            key={p.id}
            id={p.id}
            className="scroll-mt-28 grid lg:grid-cols-12 gap-6 md:gap-10 items-start glass-card rounded-3xl p-6 md:p-10 relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            />

            <div className="lg:col-span-4 relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-[var(--shadow-glow)]">
                  <p.icon className="text-accent" aria-hidden="true" />
                </div>
                <span className="font-display text-3xl text-muted-foreground/60">{p.tag}</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl mb-4">{p.title}</h2>
              <p className="text-foreground/75 leading-relaxed">{p.long}</p>

              <div className="mt-6 flex flex-wrap gap-2.5 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border">
                  <Clock size={14} className="text-accent" /> {p.duration}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border">
                  <MapPin size={14} className="text-accent" /> {p.format}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border">
                  <Users size={14} className="text-accent" /> {p.level}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">What's included</div>
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <ProgramFeatureBullet key={f}>{f}</ProgramFeatureBullet>
                ))}
              </ul>

              <div className="text-xs uppercase tracking-[0.3em] text-accent mt-8 mb-4">Outcomes you can measure</div>
              <ul className="space-y-2.5">
                {p.outcomes.map((o) => (
                  <ProgramOutcomeBullet key={o}>{o}</ProgramOutcomeBullet>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 flex lg:flex-col gap-3 lg:items-stretch relative">
              <Button asChild variant="hero" className="w-full min-h-[44px]">
                <Link to="/join">Apply for this</Link>
              </Button>
              <Button asChild variant="outlineLight" className="w-full min-h-[44px]">
                <Link to="/gallery">See it live</Link>
              </Button>
              <div className="hidden lg:block text-xs text-muted-foreground pt-2">
                Stage {idx + 1} of {PROGRAMS.length}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <Suspense fallback={<div className="h-32" />}>
      <GlobalReach />
    </Suspense>

    <section className="section-pad">
      <div className="container-pro glass-card rounded-3xl p-8 md:p-16 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl mb-6">Ready to start?</h2>
        <p className="text-foreground/75 max-w-xl mx-auto mb-8">
          Submit your details and a short showcase video. Our scouts review every application
          within 5 working days.
        </p>
        <Button asChild variant="hero" size="xl" className="min-h-[48px]">
          <Link to="/join">Apply now <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default ProgramsPage;
