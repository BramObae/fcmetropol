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

/* EVENTS DATA */
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
    desc: "Platform connecting players to international clubs and scouts.",
    icon: Trophy,
  },
  {
    title: "Elite Football Combine",
    type: "Performance Testing",
    date: "November 2026",
    location: "Nairobi, Kenya",
    desc: "Physical and technical evaluation for player development.",
    icon: Users,
  },
];

const EventsPage = () => {
  return (
    <>
      <SEO
        title="Events — FC Metropol HP Kenya"
        description="Elite scouting tournaments, camps and football development events."
      />

      {/* HERO */}
      <section className="pt-36 pb-14">
        <div className="container-pro">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-6">
            <Calendar size={16} className="text-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              Official Events Calendar
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Where talent meets{" "}
            <span className="text-gradient-gold">opportunity.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-foreground/70 text-lg leading-relaxed">
            Structured football events designed to identify, develop and expose
            players to professional scouting environments and global pathways.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* FEATURED AUGUST EVENT (FIXED) */}
      {/* ============================= */}
      <section className="pb-20">
        <div className="container-pro">

          {/* OUTER CARD */}
          <div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-card/20">

            {/* IMAGE SECTION (NOW FULLY VISIBLE) */}
            <div className="relative w-full h-[420px] md:h-[520px]">

              <img
                src="/event1.jpeg"
                alt="August Scouting Tournament"
                className="w-full h-full object-cover object-center"
              />

              {/* soft overlay ONLY (not blocking image) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* TEXT BELOW IMAGE (ATTACHED PROPERLY) */}
            <div className="p-8 md:p-12 lg:p-16">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 mb-6">
                <Trophy size={16} className="text-accent" />
                <span className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                  Featured August Event
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

              <p className="mt-6 text-foreground/70 text-base md:text-lg leading-relaxed max-w-3xl">
                A high-level scouting event bringing together young talent,
                coaches and international scouts. Focused on exposure,
                performance assessment and real football opportunity creation.
              </p>

              {/* DETAILS */}
              <div className="mt-8 flex flex-wrap gap-4">

                <div className="glass rounded-full px-5 py-3 flex items-center gap-3 border border-white/10">
                  <Calendar size={15} className="text-accent" />
                  <span className="text-sm text-foreground/80">
                    10–15 August 2026
                  </span>
                </div>

                <div className="glass rounded-full px-5 py-3 flex items-center gap-3 border border-white/10">
                  <MapPin size={15} className="text-accent" />
                  <span className="text-sm text-foreground/80">
                    Nairobi, Kenya
                  </span>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">

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

      {/* UPCOMING EVENTS */}
      <section className="pb-24">
        <div className="container-pro">

          <h3 className="font-display text-3xl md:text-4xl mb-10">
            Upcoming Development Programs
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
