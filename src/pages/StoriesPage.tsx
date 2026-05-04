import { SEO } from "@/components/SEO";
import { Stories } from "@/components/site/Stories";
import { SocialFeed } from "@/components/site/SocialFeed";

const StoriesPage = () => (
  <>
    <SEO
      title="Success Stories — FC Metropol HP Kenya"
      description="Real players, real placements. Meet footballers whose careers we've helped launch — and follow our latest social updates."
    />
    <section className="pt-32 md:pt-40 pb-10">
      <div className="container-pro">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Success Stories</div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] max-w-4xl">
          Lives we've <span className="text-gradient-gold">transformed.</span>
        </h1>
      </div>
    </section>
    <Stories />
    <section className="section-pad bg-card/20 border-y border-border/50">
      <div className="container-pro">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Social</div>
          <h2 className="font-display text-4xl md:text-6xl">Latest from our channels.</h2>
        </div>
        <SocialFeed />
      </div>
    </section>
  </>
);

export default StoriesPage;
