import { SEO } from "@/components/SEO";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { GlobalReach } from "@/components/site/GlobalReach";
import { Charity } from "@/components/site/Charity";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutPage = () => (
  <>
    <SEO
      title="About FC Metropol HP Kenya — Our Story & Mission"
      description="FC Metropol HP Kenya is a global football development programme. Learn how we develop, package and place players across five continents."
    />

    {/* Hero */}
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="container-pro">
        <div className="max-w-3xl reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Who we are</div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.9]">
            The story of <span className="text-gradient-gold">FC Metropol HP.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
            A global football programme turning amateur talent into professional careers — through
            elite training, world-class branding and direct placement into clubs, academies and
            colleges across five continents.
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
    <div className="reveal"><About /></div>
    <div className="reveal"><GlobalReach /></div>
    <div className="reveal"><Charity /></div>
  </>
);

export default AboutPage;
