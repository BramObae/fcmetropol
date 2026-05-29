import { SEO } from "@/components/SEO";

const EventsPage = () => {
  return (
    <>
      <SEO
        title="Events — FC Metropol HP Kenya"
        description="Football scouting events, camps, tournaments and development programs."
      />

      <section className="pt-32 pb-20">
        <div className="container-pro">
          <h1 className="font-display text-5xl md:text-7xl">
            Events
          </h1>

          <p className="mt-6 text-foreground/70 max-w-2xl">
            This is where we host scouting events, development camps, tournaments and
            international exposure programs for young football talent.
          </p>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
