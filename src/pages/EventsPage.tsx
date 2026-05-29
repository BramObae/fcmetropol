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

      {/* HERO SECTION */}
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
            young players to professional scouting environments and global
            football pathways.
          </p>
        </div>
      </section>

      {/* FEATURED AUGUST EVENT */}
      <section className="pb-20">
        <div className="container-pro">

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 min-h-[520px]">

            {/* IMAGE */}
            <img
              src="/event1.jpeg"
              alt="Metropol Elite Scouting Tournament"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* DARK OVERLAY FOR READABILITY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

            {/* CONTENT */}
            <div className="relative z-10 p-10 md:p-16 lg:p-20 text-white">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 mb-6 backdrop-blur-md">
                <Trophy size={16} className="text-accent" />
                <span className="text-xs uppercase tracking-[0.3em]">
                  Featured Event
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95]">
                Metropol Elite{" "}
                <span className="text-gradient-gold">
                  Scouting Tournament
                </span>
              </h2>

              <p className="mt-5 text-accent font-medium text-lg">
                U15 Development & Talent Identification Showcase
              </p>

              <p className="mt-6 max-w-3xl text-white/75 text-base md:text-lg leading-relaxed">
                A high-level football tournament bringing together young talent,
                coaches and scouts in a structured environment focused on exposure,
                performance evaluation and player opportunity creation.
              </p>

              {/* DETAILS */}
              <div className="mt-8 flex flex-wrap gap-4 text-white/80">

                <div className="glass rounded-full px-5 py-3 flex items-center gap-3 border border-white/10">
                  <Calendar size={15} className="text-accent" />
                  <span>10th – 15th August 2026</span>
                </div>

                <div className="glass rounded-full px-5 py-3 flex items-center gap-3 border border-white/10">
                  <MapPin size={15} className="text-accent" />
                  <span>Nairobi, Kenya</span>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">

                <Button variant="hero" size="lg">
                  Register Interest
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
                className="glass-card rounded-[2rem] p-7 border border-white/10 hover:-translate-y-1 transition"
              >

                <div className="flex items-center justify-between mb-5">
                  <e.icon className="text-accent" size={18} />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent">
                    {e.type}
                  </span>
                </div>

                <h4 className="text-xl font-semibold">{e.title}</h4>

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

      {/* FINAL CALL TO ACTION */}
      <section className="pb-28">
        <div className="container-pro">

          <div className="glass-card rounded-[2.5rem] p-12 text-center border border-white/10">

            <h2 className="font-display text-4xl md:text-6xl">
              Your football journey starts here
            </h2>

            <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
              Join our scouting events and development programs designed to
              connect talent with real football opportunities.
            </p>

            <div className="mt-8">
              <Button variant="hero" size="lg">
                Apply for Events
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
