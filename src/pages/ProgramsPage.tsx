import { SEO } from "@/components/SEO";
import { Programs } from "@/components/site/Programs";
import { GlobalReach } from "@/components/site/GlobalReach";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProgramsPage = () => (
  <>
    <SEO
      title="Programs — FC Metropol HP Kenya"
      description="Training & development, player branding, scouting trials and international placement pathways for serious footballers."
    />
    <section className="pt-40 pb-10">
      <div className="container-pro">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Programs</div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] max-w-4xl">
          Four pillars. <span className="text-gradient-gold">One pathway to pro.</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/75 max-w-2xl">
          Every player follows a structured journey designed by professional coaches and
          scouts — built to produce career-ready athletes.
        </p>
      </div>
    </section>
    <Programs />
    <GlobalReach />
    <section className="section-pad">
      <div className="container-pro glass-card rounded-3xl p-10 md:p-16 text-center">
        <h2 className="font-display text-4xl md:text-6xl mb-6">Ready to start?</h2>
        <p className="text-foreground/75 max-w-xl mx-auto mb-8">
          Submit your details and a short showcase video. Our scouts review every application.
        </p>
        <Button asChild variant="hero" size="xl">
          <Link to="/join">Apply now <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default ProgramsPage;
