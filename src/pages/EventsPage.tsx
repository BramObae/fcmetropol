import { SEO } from "@/components/SEO";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsPage = () => {
  return (
    <>
      <SEO
        title="Events | FC Metropol HP Kenya"
        description="Official FC Metropol HP Kenya Events."
      />

      <section className="pt-32 pb-20">
        <div className="container-pro max-w-6xl">

          {/* Header */}
          <div className="text-center mb-10">

            <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-5 py-2 text-accent text-sm font-medium">
              FC Metropol HP Kenya • Official Event
            </div>

            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-tight">
              Elite Scouting
              <span className="block text-gradient-gold">
                Tournament 2026
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/70">
              Join football enthusiasts, coaches, scouts, clubs and partners
              for one of FC Metropol HP Kenya's biggest football events.
            </p>

          </div>

          {/* Event Poster */}
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-card/20 shadow-2xl">

            <img
              src="/event1.jpeg"
              alt="FC Metropol Event"
              className="w-full h-auto object-contain"
            />

          </div>

          {/* Event Information */}
          <div className="grid gap-6 md:grid-cols-3 mt-10">

            <div className="glass rounded-2xl p-6">

              <Calendar className="text-accent mb-4" size={22} />

              <h3 className="font-semibold text-lg">
                Event Date
              </h3>

              <p className="mt-2 text-foreground/70">
                10th – 15th August 2026
              </p>

            </div>

            <div className="glass rounded-2xl p-6">

              <MapPin className="text-accent mb-4" size={22} />

              <h3 className="font-semibold text-lg">
                Venue
              </h3>

              <p className="mt-2 text-foreground/70">
                TBD
                <br />
                Nairobi, Kenya
              </p>

            </div>

            <div className="glass rounded-2xl p-6">

              <Users className="text-accent mb-4" size={22} />

              <h3 className="font-semibold text-lg">
                Attendance
              </h3>

              <p className="mt-2 text-foreground/70">
                Open to football enthusiasts,
                coaches, scouts, clubs,
                partners and invited guests.
              </p>

            </div>

          </div>

          {/* About */}
          <div className="glass rounded-[2rem] p-8 mt-10">

            <h2 className="font-display text-3xl">
              About The Event
            </h2>

            <p className="mt-5 text-lg leading-8 text-foreground/70">
              The FC Metropol Elite Scouting Tournament brings together football
              stakeholders from across the region to celebrate talent, build
              valuable connections and promote football development.
              More information regarding fixtures, schedules and speakers
              will be shared with registered attendees.
            </p>

          </div>

          {/* Register CTA */}
          <div className="mt-14 text-center">

            <Button
              variant="hero"
              size="lg"
              onClick={() =>
                document
                  .getElementById("registration")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Register to Attend
              <ArrowRight className="ml-2" size={18} />
            </Button>

          </div>

          {/* Registration Placeholder */}
          <section
            id="registration"
            className="mt-20 glass rounded-[2rem] p-10 text-center"
          >

            <h2 className="font-display text-4xl">
              Registration
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-foreground/70">
              Event registration will open here.
              Complete your details to reserve your place once registration
              becomes available.
            </p>

            <div className="mt-8">

              <Button variant="outlineLight" size="lg">
                Registration Opening Soon
              </Button>

            </div>

          </section>

        </div>
      </section>
    </>
  );
};

export default EventsPage;
