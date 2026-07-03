import { SEO } from "@/components/SEO";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsPage = () => {
  return (
    <>
      <SEO
        title="Events | FC Metropol HP Kenya"
        description="Official FC Metropol HP Kenya Events."
      />

      <section className="pt-32 pb-24">
        <div className="container-pro">

          {/* Hero */}
          <div className="text-center mb-12">

            <span className="inline-flex rounded-full bg-accent/10 text-accent px-5 py-2 text-sm font-medium">
              ⚽ Registration Now Open
            </span>

            <h1 className="font-display text-5xl md:text-7xl mt-6">
              FC Metropol Elite
              <span className="block text-gradient-gold">
                Scouting Tournament
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/70">
              Join football enthusiasts, coaches, scouts, clubs and partners
              for an exciting football event focused on networking,
              development and opportunity.
            </p>

          </div>

          {/* Main Section */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Poster */}
            <div>

              <img
                src="/event1.jpeg"
                alt="Event Poster"
                className="rounded-3xl border border-white/10 shadow-2xl w-full"
              />

              {/* Event Info */}
              <div className="grid sm:grid-cols-3 gap-4 mt-6">

                <div className="glass rounded-xl p-5">

                  <Calendar className="text-accent mb-3" />

                  <p className="text-xs uppercase tracking-widest text-accent">
                    Date
                  </p>

                  <p className="mt-2 font-semibold">
                    10th – 15th August 2026
                  </p>

                </div>

                <div className="glass rounded-xl p-5">

                  <MapPin className="text-accent mb-3" />

                  <p className="text-xs uppercase tracking-widest text-accent">
                    Venue
                  </p>

                  <p className="mt-2 font-semibold">
                    TBD
                    <br />
                    Nairobi
                  </p>

                </div>

                <div className="glass rounded-xl p-5">

                  <Users className="text-accent mb-3" />

                  <p className="text-xs uppercase tracking-widest text-accent">
                    Attendance
                  </p>

                  <p className="mt-2 font-semibold">
                    Open
                  </p>

                </div>

              </div>

            </div>

            {/* Registration Card */}
            <div className="glass rounded-[2rem] p-8 sticky top-28">

              <div className="flex items-center gap-2 text-green-500 font-medium">

                <CheckCircle size={18} />

                Limited Seats Available

              </div>

              <h2 className="font-display text-4xl mt-4">
                Reserve Your Seat
              </h2>

              <p className="text-foreground/70 mt-3">
                Complete the registration form to secure your place.
                A confirmation email will be sent after submission.
              </p>

              <form className="space-y-5 mt-8">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                  required
                />

                <input
                  type="text"
                  placeholder="Country"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                  required
                />

                <select
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                >
                  <option>Attendance Category</option>
                  <option>Football Enthusiast</option>
                  <option>Coach</option>
                  <option>Scout</option>
                  <option>Club Representative</option>
                  <option>Media</option>
                  <option>Sponsor</option>
                  <option>Guest</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Special Requests (Optional)"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                />

                <label className="flex gap-3 text-sm items-start">

                  <input type="checkbox" required />

                  <span>
                    I confirm the information provided is accurate.
                  </span>

                </label>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  Reserve My Seat

                  <ArrowRight className="ml-2" size={18} />

                </Button>

              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default EventsPage;
