import { SEO } from "@/components/SEO";
import { DriveGallery } from "@/components/site/DriveGallery";

const GalleryPage = () => (
  <>
    <SEO
      title="Gallery — FC Metropol HP Kenya"
      description="Inside the program: training sessions, match-day moments, trials and events from FC Metropol HP Kenya."
    />
    <section className="pt-40 pb-12">
      <div className="container-pro">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Gallery</div>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.9] max-w-4xl">
          Inside the <span className="text-gradient-gold">program.</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/75 max-w-2xl">
          Live, syncing directly from our archives. New images appear automatically.
        </p>
      </div>
    </section>
    <section className="pb-32">
      <div className="container-pro">
        <DriveGallery />
      </div>
    </section>
  </>
);

export default GalleryPage;
