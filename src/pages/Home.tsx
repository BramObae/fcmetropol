import { SEO } from "@/components/SEO";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { GlobalReach } from "@/components/site/GlobalReach";
import { Partners } from "@/components/site/Partners";
import { Charity } from "@/components/site/Charity";
import { DriveGallery } from "@/components/site/DriveGallery";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Home = () => (
  <>
    <SEO
      title="FC Metropol HP Kenya — From Amateur to Professional"
      description="Global football development program. Develop, package and place elite players worldwide through training, branding and international placements."
    />
    <Hero />
    <Stats />
    <About />
    <Programs />
    <GlobalReach />

    <section className="section-pad">
      <div className="container-pro">
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Latest from the pitch</div>
            <h2 className="font-display text-4xl md:text-6xl">Recent moments.</h2>
          </div>
          <Button asChild variant="outlineLight">
            <Link to="/gallery">View full gallery <ArrowUpRight size={16} /></Link>
          </Button>
        </div>
        <DriveGallery compact />
      </div>
    </section>

    <Partners />
    <Charity />
  </>
);

export default Home;
