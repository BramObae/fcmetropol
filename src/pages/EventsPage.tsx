import { SEO } from "@/components/SEO";
import {
  CalendarDays,
  MapPin,
  Ticket,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const EventsPage = () => {
  return (
    <>
      <SEO
        title="FC Metropol Elite Scouting Tournament"
        description="Reserve your seat for the FC Metropol Elite Scouting Tournament."
      />

      <section className="pt-32 pb-24">

        <div className="container-pro">

          {/* HERO */}

          <div className="text-center max-w-4xl mx-auto">

            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-5 py-2 text-accent text-sm font-medium">

              Registration Now Open

            </div>

            <h1 className="font-display text-5xl md:text-7xl mt-8 leading-tight">

              FC Metropol

              <span className="block text-gradient-gold">

                Elite Scouting Tournament

              </span>

            </h1>

            <p className="mt-6 text-lg text-foreground/70 leading-8">

              Join football enthusiasts, coaches, scouts, clubs and partners
              for one of Kenya's premier football networking and scouting
              events.

            </p>

          </div>

          {/* MAIN */}

          <div className="grid lg:grid-cols-2 gap-12 mt-20 items-start">

            {/* LEFT */}

            <div>

              <img
                src="/event1.jpeg"
                alt="FC Metropol Event"
                className="rounded-[2rem] shadow-2xl border border-white/10 w-full object-cover"
              />

              {/* EVENT DETAILS */}

              <div className="grid sm:grid-cols-3 gap-4 mt-8">

                <div className="glass rounded-2xl p-5">

                  <CalendarDays className="text-accent mb-3" />

                  <p className="text-xs uppercase tracking-widest text-accent">

                    Event Date

                  </p>

                  <h3 className="font-semibold mt-2">

                    10–15 August 2026

                  </h3>

                </div>

                <div className="glass rounded-2xl p-5">

                  <MapPin className="text-accent mb-3" />

                  <p className="text-xs uppercase tracking-widest text-accent">

                    Venue

                  </p>

                  <h3 className="font-semibold mt-2">

                    TBD

                    <br />

                    Nairobi

                  </h3>

                </div>

                <div className="glass rounded-2xl p-5">

                  <ShieldCheck className="text-accent mb-3" />

                  <p className="text-xs uppercase tracking-widest text-accent">

                    Status

                  </p>

                  <h3 className="font-semibold mt-2 text-green-500">

                    Registration Open

                  </h3>

                </div>

              </div>

              {/* ABOUT */}

              <div className="glass rounded-[2rem] p-8 mt-8">

                <h2 className="font-display text-3xl">

                  About The Event

                </h2>

                <p className="mt-5 text-foreground/70 leading-8">

                  The FC Metropol Elite Scouting Tournament brings together
                  football lovers, clubs, coaches, scouts and partners for an
                  unforgettable football experience. Meet new people, discover
                  opportunities and enjoy high-quality football throughout the
                  event.

                </p>

              </div>

            </div>

            {/* RIGHT */}

            <div className="sticky top-28">

              <div className="glass rounded-[2rem] border border-white/10 p-8 shadow-xl">

                <div className="flex items-center gap-3">

                  <Ticket className="text-accent" />

                  <span className="font-semibold text-green-500">

                    Limited Seats Available

                  </span>

                </div>

                <h2 className="font-display text-4xl mt-5">

                  Reserve Your Seat

                </h2>

                <p className="mt-3 text-foreground/70">

                  Complete your registration and secure your place before the
                  event reaches capacity.

                </p>

                {/* FORM */}

                <form className="space-y-5 mt-8">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3"
                  />

                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3"
                  />

                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3">

                    <option>Select Ticket</option>

                    <option>Regular — KES 500</option>

                    <option>VIP — KES 1,000</option>

                    <option>VVIP — KES 5,000</option>

                  </select>

                  <div className="rounded-2xl bg-accent/5 border border-accent/20 p-5">

                    <h3 className="font-semibold">

                      Payment Instructions

                    </h3>

                    <p className="mt-2 text-sm text-foreground/70">

                      Pay via M-Pesa using the details below.

                    </p>

                    <div className="mt-4">

                      <p className="text-xs uppercase tracking-widest text-accent">

                        Till Number

                      </p>

                      <p className="text-2xl font-bold mt-1">

                        123456

                      </p>

                    </div>

                  </div>

                  <input
                    type="text"
                    placeholder="M-Pesa Transaction Code"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3"
                  />

                  <textarea
                    rows={5}
                    placeholder="Paste your M-Pesa confirmation message here..."
                    className="w-full rounded-xl border border-border bg-background px-4 py-3"
                  />

                  <Button
                    className="w-full"
                    size="lg"
                    variant="hero"
                  >

                    Reserve My Seat

                    <ArrowRight className="ml-2" size={18} />

                  </Button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default EventsPage;
