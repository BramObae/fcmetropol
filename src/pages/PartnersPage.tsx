import { SEO } from "@/components/SEO";
import { Partners } from "@/components/site/Partners";

const PartnersPage = () => (
  <>
    <SEO
      title="Partners — FC Metropol HP Kenya"
      description="Clubs, federations and academies across five continents partnering with FC Metropol HP Kenya."
    />
    <section className="pt-36 md:pt-44 reveal">
      <div className="container-pro">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Partners</div>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.9]">
          Built with the <span className="text-gradient-gold">best in the game.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-foreground/75 text-lg">
          We collaborate with grassroots tournaments, professional clubs and federations across
          five continents to build pathways for our players.
        </p>
      </div>
    </section>
    <div className="reveal"><Partners /></div>
  </>
);

export default PartnersPage;
