import { lazy, Suspense } from "react";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const About = lazy(() => import("@/components/site/About").then((m) => ({ default: m.About })));
const Programs = lazy(() => import("@/components/site/Programs").then((m) => ({ default: m.Programs })));
const GlobalReach = lazy(() => import("@/components/site/GlobalReach").then((m) => ({ default: m.GlobalReach })));
const Charity = lazy(() => import("@/components/site/Charity").then((m) => ({ default: m.Charity })));
const DriveGallery = lazy(() => import("@/components/site/DriveGallery").then((m) => ({ default: m.DriveGallery })));

const SectionSkeleton = () => (
  <div className="py-24 container-pro">
    <div className="h-8 w-48 bg-muted/40 rounded animate-pulse mb-6" />
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="h-48 rounded-2xl bg-muted/30 animate-pulse" />
      <div className="h-48 rounded-2xl bg-muted/30 animate-pulse" />
      <div className="h-48 rounded-2xl bg-muted/30 animate-pulse" />
    </div>
  </div>
);

const Home = () => (
  <>
    <SEO
      title="FC Metropol HP Kenya — From Amateur to Professional"
      description="Global football development program. Develop, package and place elite players worldwide through training, branding and international placements."
    />
    <Hero />
    <div className="reveal"><Stats /></div>
    <Suspense fallback={<SectionSkeleton />}>
      <div className="reveal"><About /></div>

      {/* About teaser CTA */}
      <section className="pb-4">
        <div className="container-pro flex justify-center reveal">
          <Button asChild variant="outlineLight" size="lg">
            <Link to="/about">Read our full story <ArrowRight size={18} /></Link>
          </Button>
        </div>
      </section>

      <div className="reveal"><Programs /></div>
      <div className="reveal"><GlobalReach /></div>

      <section className="section-pad reveal">
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

      <div className="reveal"><Charity /></div>
    </Suspense>
  </>
);

export default Home;
