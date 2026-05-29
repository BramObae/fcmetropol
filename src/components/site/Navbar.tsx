import { SEO } from "@/components/SEO";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Target,
  Star,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* FEATURED EVENT */
const featuredEvent = {
  title: "Metropol Elite Scouting Tournament",
  subtitle: "U15 Development & Talent Identification Showcase",
  date: "10th – 15th August 2026",
  location: "Nairobi, Kenya",
  desc:
    "A high-intensity scouting and development tournament bringing together young players from across regions. Players will be assessed under professional match conditions with scouts, coaches, and international observers present.",
};

/* OTHER EVENTS */
const events = [
  {
    title: "Metropol Development Camp",
    type: "Training Camp",
    date: "September 2026",
    location: "Kisumu, Kenya",
    status: "Planned",
    desc: "Structured training program focused on elite player development.",
    icon: Star,
  },
  {
    title: "International Exposure Showcase",
    type: "Scouting Event",
    date: "October 2026",
    location: "Dar es Salaam, Tanzania",
    status: "Planned",
    desc: "Platform connecting players to international clubs and scouts.",
    icon: Trophy,
  },
  {
    title: "Elite Football Combine",
    type: "Performance Testing",
    date: "November 2026",
    location: "Nairobi, Kenya",
    status: "Planned",
    desc: "Physical, tactical and technical player evaluation system.",
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
      <section className="pt-36 pb-16">
        <div className="container-pro">

          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-6">
            <Calendar size={16} className="text-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              Official Football Events Calendar
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Where talent meets
            <span className="text-gradient-gold"> opportunity.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-foreground/70 text-lg leading-relaxed">
            Our events are structured platforms designed to identify, develop,
            and expose young football talent to real scouting environments and
            professional football systems.
          </p>

        </div>
      </section>

      {/* FEATURED EVENT (AUGUST) */}
      <section className="pb-20">
        <div className="container-pro">

          <div className="glass-card rounded-[2.5rem] p-10 md:p-14 border border-accent/20 relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-transparent" />

            <div className="relative z-10">

              <div className="flex items-center gap-2 text-accent mb-4">
                <Trophy size={18} />
                <span className="text-xs uppercase tracking-[0.3em]">
                  Featured Event
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
                {featuredEvent.title}
              </h2>

              <p className="mt-3 text-accent font-medium">
                {featuredEvent.subtitle}
              </p>

              <p className="mt-6 text-foreground/70 max-w-3xl leading-relaxed">
                {featuredEvent.desc}
              </p>

              {/* DETAILS */}
              <div className="mt-8 grid md:grid-cols-2 gap-4 text-sm text-foreground/70">

                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-accent" />
                  {featuredEvent.date}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent" />
                  {featuredEvent.location}
                </div>

              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="hero">
                  Register Interest
                  <ArrowRight className="ml-2" size={16} />
                </Button>

                <Button variant="outlineLight">
                  Learn More
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
            Upcoming Development Programs
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {events.map((e, i) => (
              <div
                key={i}
                className="glass-card rounded-[2rem] p-7 border border-white/10 hover:-translate-y-1 transition"
              >

                <div className="flex items-center justify-between mb-5">
                  <e.icon className="text-accent" size={18} />

                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent">
                    {e.type}
                  </span>
                </div>

                <h4 className="text-xl font-semibold">
                  {e.title}
                </h4>

                <div className="mt-3 flex flex-col gap-2 text-sm text-foreground/70">

                  <div className="flex items-center gap-2">
                    <Calendar size={13} className="text-accent" />
                    {e.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-accent" />
                    {e.location}
                  </div>

                </div>

                <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
                  {e.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24">
        <div className="container-pro">

          <div className="glass-card rounded-[2.5rem] p-12 text-center border border-white/10">

            <h2 className="font-display text-4xl md:text-6xl">
              Be part of the next generation of football talent
            </h2>

            <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
              Join our August scouting tournament and get assessed in a structured
              professional environment designed to open global opportunities.
            </p>

            <div className="mt-8">
              <Button variant="hero" size="lg">
                Join August Event
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default EventsPage;
