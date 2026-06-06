import { SEO } from "@/components/SEO";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

/* FEATURED IMAGE */
const featuredImage = "/event1.jpeg";

/* UPCOMING EVENTS */
const upcomingEvents = [
  {
    title: "Metropol Development Camp",
    type: "Training Camp",
    date: "September 2026",
    location: "Kisumu, Kenya",
    desc: "Elite structured training focused on player development.",
    icon: Star,
  },
  {
    title: "International Exposure Showcase",
    type: "Scouting Event",
    date: "October 2026",
    location: "Dar es Salaam, Tanzania",
    desc: "Connecting players with international scouts and clubs.",
    icon: Trophy,
  },
  {
    title: "Elite Football Combine",
    type: "Performance Testing",
    date: "November 2026",
    location: "Nairobi, Kenya",
    desc: "Technical and physical evaluation in professional setup.",
    icon: Users,
  },
];

/* PAST EVENTS */
const pastEvents = [
  {
    title: "Pre-Season Talent Showcase",
    date: "July 2025",
    location: "Nairobi, Kenya",
    desc: "Successful scouting event with strong player turnout.",
  },
  {
    title: "Regional Youth Trials",
    date: "May 2025",
    location: "Mombasa, Kenya",
    desc: "Identified emerging talent across coastal region.",
  },
];

const EventsPage = () => {
  return (
    <>
      <SEO
        title="Events — FC Metropol HP Kenya"
        description="Football scouting events, camps, tournaments and development programs."
      />

      {/* TRAINING BASE (NEW TOP SECTION - VERY VISIBLE) */}
      <section className="pt-32 pb-6">
        <div className="container-pro">

          <div className="glass rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Building2 className="text-accent" />
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl">
                  Official Training & Meeting Area
                </h2>

                <p className="mt-2 text-foreground/70">
                  All training sessions, meetings and player development activities are held at:
                </p>

                <p className="mt-2 text-lg font-semibold text-accent">
                  Jaffery’s Sports Club, Nairobi, Kenya
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* HERO */}
      <section className="pt-10 pb-12">
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
            Structured football events designed to identify, develop and expose talent
            into professional football pathways.
          </p>

        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="pb-20">
        <div className="container-pro">

          <div className="rounded-[2.5rem] border border-white/10 bg-card/20 p-6 md:p-10">

            {/* POSTER (FULL IMAGE FIXED) */}
            <div className="w-full flex justify-center">
              <img
                src={featuredImage}
                alt="August Scouting Tournament"
                className="w-auto max-w-full max-h-[750px] object-contain rounded-2xl shadow-lg"
              />
            </div>

            {/* CONTENT */}
            <div className="mt-10 text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 mb-6">
                <Trophy size={16} className="text-accent" />
                <span className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                  Featured Event
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-6xl">
                Metropol Elite{" "}
                <span className="text-gradient-gold">Scouting Tournament</span>
              </h2>

              <p className="mt-4 text-accent font-medium text-lg">
                10th – 15th August 2026 · Nairobi, Kenya
              </p>

              <p className="mt-6 text-foreground/70 max-w-3xl mx-auto">
                A high-level scouting tournament bringing together players,
                coaches and international scouts for exposure and opportunity.
              </p>

              <div className="mt-8 flex justify-center gap-4 flex-wrap">

                <div className="glass rounded-full px-5 py-3 flex items-center gap-2">
                  <Calendar size={14} className="text-accent" />
                  <span className="text-sm">10–15 Aug 2026</span>
                </div>

                <div className="glass rounded-full px-5 py-3 flex items-center gap-2">
                  <MapPin size={14} className="text-accent" />
                  <span className="text-sm">Nairobi, Kenya</span>
                </div>

              </div>

              <div className="mt-10 flex justify-center gap-4 flex-wrap">

                <Button variant="hero" size="lg">
                  Register Now <ArrowRight className="ml-2" size={18} />
                </Button>

                <Button variant="outlineLight" size="lg">
                  Learn More
                </Button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="pb-20">
        <div className="container-pro">

          <div className="flex items-center gap-2 mb-10">
            <Clock className="text-accent" size={18} />
            <h3 className="font-display text-3xl md:text-4xl">
              Upcoming Events
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {upcomingEvents.map((e, i) => (
              <div key={i} className="glass-card rounded-[2rem] p-7 border border-white/10">

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

      {/* PAST EVENTS */}
      <section className="pb-24 bg-card/20">
        <div className="container-pro">

          <div className="flex items-center gap-2 mb-10">
            <CheckCircle className="text-accent" size={18} />
            <h3 className="font-display text-3xl md:text-4xl">
              Past Events
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {pastEvents.map((e, i) => (
              <div key={i} className="glass-card rounded-[2rem] p-7 border border-white/10 opacity-90">

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
