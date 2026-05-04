import { SEO } from "@/components/SEO";
import { Join } from "@/components/site/Join";

const JoinPage = () => (
  <>
    <SEO
      title="Join the Program — FC Metropol HP Kenya"
      description="Apply to FC Metropol HP Kenya. Submit your details and a short showcase. Open to players age 15–25."
    />
    <section className="pt-40 pb-4">
      <div className="container-pro">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Join</div>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.9] max-w-4xl">
          Your trial <span className="text-gradient-gold">starts here.</span>
        </h1>
      </div>
    </section>
    <Join />
  </>
);

export default JoinPage;
