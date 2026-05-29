import { SEO } from "@/components/SEO";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* EVENTS */
const events = [
  {
    title: "Metropol Development Camp",
    type: "Training Camp",
    date: "September 2026",
    location: "Kisumu, Kenya",
    desc: "Structured training program focused on elite player development.",
    icon: Star,
  },
  {
    title: "International Exposure Showcase",
    type: "Scouting Event",
    date: "October 2026",
    location: "Dar es Salaam, Tanzania",
    desc: "Connecting players with clubs and scouting networks.",
    icon: Trophy,
  },
  {
    title: "Elite Football Combine",
    type: "Performance Testing",
    date: "November 2026",
    location: "Nairobi, Kenya",
    desc: "Technical and physical evaluation in structured environment.",
    icon: Users,
  },
];

const EventsPage = () => {
  return (
    <>
      <SEO
        title="Events — FC Metropol HP Kenya"
        description="Football scouting events, camps and development programs."
      />

      {/* HERO */}
      <section className="pt-36 pb-12">
        <div className="container-pro">

          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-6">
            <Calendar size={16} className="text-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              Events Calendar
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Where talent meets{" "}
            <span className="text-gradient-gold">opportunity.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-foreground/70 text-lg leading-relaxed">
            Structured football events designed to identify and develop young talent
            into professional football pathways.
          </p>

        </div>
      </section>

      {/* ========================= */}
      {/* FEATURED AUGUST EVENT */}
      {/* ========================= */}
      <section className="pb-20">
        <div className="container-pro">

          <div className="rounded-[2.5rem] border border-white/10 bg-card/20 p-6 md:p-10">

            {/* POSTER IMAGE (FIXED PROPERLY) */}
            <div className="w-full flex justify-center items-center">

              <img
                src="/event1.jpeg"
                alt="August Scouting Tournament Poster"
                className="w-auto max-w-full h-auto max-h-[750px] object-contain rounded-2xl shadow-lg"
              />

            </div>

            {/* TEXT BELOW POSTER */}
            <div className="mt-10 text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 mb-6">
                <Trophy size={16} className="text-accent" />
                <span className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                  Featured Event
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
                Metropol Elite{" "}
                <span className="text-gradient-gold">
                  Scouting Tournament
                </span>
              </h2>

              <p className="mt-4 text-accent font-medium text-lg">
                10th – 15th August 2026 · Nairobi, Kenya
              </p>

              <p className="mt-6 text-foreground/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                A structured scouting event bringing together young players,
                coaches and international scouts for exposure, assessment
                and professional football opportunities.
              </p>

              {/* DETAILS */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <div className="glass rounded-full px-5 py-3 flex items-center gap-3 border border-white/10">
                  <Calendar size={15} className="text-accent" />
                  <span className="text-sm">10–15 August 2026</span>
                </div>

                <div className="glass rounded-full px-5 py-3 flex items-center gap-3 border border-white/10">
                  <MapPin size={15} className="text-accent" />
                  <span className="text-sm">Nairobi, Kenya</span>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-10 flex justify-center gap-4 flex-wrap">

                <Button variant="hero" size="lg">
                  Register Now
                  <ArrowRight className="ml-2" size={18} />
                </Button>

                <Button variant="outlineLight" size="lg">
                  View Details
                </Button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* OTHER EVENTS */}
      <section className="pb-24">
        <div className="container-pro">

          <h3 className="font-display text-3xl md:text-4xl mb-10">
            Upcoming Programs
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {events.map((e, i) => (
              <div
                key={i}
                className="glass-card rounded-[2rem] p-7 border border-white/10"
              >

                <div className="flex items-center justify-between mb-5">
                  <e.icon className="text-accent" size={18} />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent">
                    {e.type}
                  </span>
                </div>

                <h4 className="text-xl font-semibold">{e.title}</h4>

                <div className="mt-3 space-y-2 text-sm text-foreground/70">

                  <div className="flex items-center gap-2">
                    <Calendar size={13} className="text-accent" />
                    {e.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-accent" />
                    {e.location}
                  </div>

                </div>

                <p className="mt-4 text-sm text-foreground/70">
                  {e.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

    </>
  );
};

export default EventsPage;
