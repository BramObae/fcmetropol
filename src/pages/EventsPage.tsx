import { useState } from "react";
import { SEO } from "@/components/SEO";
import { registerAttendee, getTicketAmount, TicketType } from "@/lib/eventRegistration";

import {
  Calendar,
  MapPin,
  Ticket,
  CreditCard,
  ArrowDown,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const featuredImage = "/event1.jpeg";

const EventsPage = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    ticketType: "Regular" as TicketType,
    transactionCode: "",
    mpesaMessage: "",
    notes: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const amount = getTicketAmount(form.ticketType);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    const result = await registerAttendee(form);

    if (result.success) {
      setSuccess(
        `Registration Successful! Your Registration Number is ${result.registration}`
      );

      setForm({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        ticketType: "Regular",
        transactionCode: "",
        mpesaMessage: "",
        notes: "",
      });
    } else {
      setError(result.error || "Registration failed.");
    }

    setLoading(false);
  };

  return (
    <>
      <SEO
        title="Events | FC Metropol HP Kenya"
        description="Reserve your seat for the FC Metropol HP Kenya Event."
      />

      <section className="pt-28 pb-20">

        <div className="container-pro max-w-6xl">

          {/* HERO */}

          <div className="text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-5 py-2 text-sm">

              <Calendar size={16} />

              AUGUST 2026 EVENT

            </span>

            <h1 className="mt-8 font-display text-5xl md:text-7xl">

              FC Metropol HP Kenya

              <span className="block text-gradient-gold">

                Networking & Sports Business Forum

              </span>

            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/70 leading-relaxed">

              Join football professionals, investors, club executives,
              coaches, scouts, media personalities and sports enthusiasts
              for one of Kenya's premier football networking events.

            </p>

          </div>

          {/* POSTER */}

          <div className="mt-14 flex justify-center">

            <img
              src={featuredImage}
              alt="FC Metropol Event"
              className="rounded-3xl shadow-2xl border border-white/10 max-h-[650px] object-contain"
            />

          </div>

          {/* EVENT DETAILS */}

          <div className="grid md:grid-cols-3 gap-5 mt-12">

            <div className="glass-card rounded-2xl p-6 text-center">

              <Calendar className="mx-auto text-accent mb-3" />

              <h3 className="font-semibold text-lg">

                Event Date

              </h3>

              <p className="text-foreground/70 mt-2">

                10th – 15th August 2026

              </p>

            </div>

            <div className="glass-card rounded-2xl p-6 text-center">

              <MapPin className="mx-auto text-accent mb-3" />

              <h3 className="font-semibold text-lg">

                Venue

              </h3>

              <p className="text-foreground/70 mt-2">

                TBD, Nairobi

              </p>

            </div>

            <div className="glass-card rounded-2xl p-6 text-center">

              <Ticket className="mx-auto text-accent mb-3" />

              <h3 className="font-semibold text-lg">

                Registration

              </h3>

              <p className="text-foreground/70 mt-2">

                Reserve your seat today.

              </p>

            </div>

          </div>

          {/* CTA */}

          <div className="flex justify-center mt-12">

            <a href="#registration">

              <Button size="lg">

                Reserve Your Seat

                <ArrowDown className="ml-2 h-5 w-5" />

              </Button>

            </a>

          </div>

          {/* REGISTRATION */}

          <section
            id="registration"
            className="mt-24 rounded-3xl border border-white/10 bg-card/30 p-8 md:p-12"
          >

            <h2 className="font-display text-4xl">

              Event Registration

            </h2>

            <p className="text-foreground/70 mt-4">

              Complete the registration form below and submit your M-Pesa payment details.
              Once payment is verified you will receive your official event confirmation.

            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-10">

              {/* LEFT */}

              <div>

                <h3 className="font-semibold text-xl mb-6">

                  Ticket Categories

                </h3>

                <div className="space-y-4">

                  <div className="glass rounded-xl p-5">

                    <div className="flex justify-between">

                      <strong>Regular</strong>

                      <strong>KES 500</strong>

                    </div>

                  </div>

                  <div className="glass rounded-xl p-5">

                    <div className="flex justify-between">

                      <strong>VIP</strong>

                      <strong>KES 1,000</strong>

                    </div>

                  </div>

                  <div className="glass rounded-xl p-5">

                    <div className="flex justify-between">

                      <strong>VVIP</strong>

                      <strong>KES 5,000</strong>

                    </div>

                  </div>

                </div>

                <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 p-6">

                  <div className="flex items-center gap-3">

                    <CreditCard className="text-accent" />

                    <strong>M-Pesa Payment</strong>

                  </div>

                  <div className="mt-5 space-y-2">

                    <p><strong>Paybill:</strong> 000000</p>

                    <p><strong>Account:</strong> EVENTS</p>

                    <p><strong>Current Amount:</strong> KES {amount}</p>

                  </div>

                  <p className="mt-5 text-sm text-foreground/70">

                    After making payment, copy the full M-Pesa confirmation SMS
                    and paste it into the registration form.

                  </p>

                </div>

              </div>

              {/* RIGHT */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Full Name */}

<div>
  <label className="mb-2 block text-sm font-medium">
    Full Name *
  </label>

  <input
    type="text"
    name="fullName"
    value={form.fullName}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none focus:border-accent"
    placeholder="John Doe"
  />
</div>

{/* Email */}

<div>
  <label className="mb-2 block text-sm font-medium">
    Email Address *
  </label>

  <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none focus:border-accent"
    placeholder="john@example.com"
  />
</div>

{/* Phone */}

<div>
  <label className="mb-2 block text-sm font-medium">
    Phone Number *
  </label>

  <input
    type="tel"
    name="phone"
    value={form.phone}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none focus:border-accent"
    placeholder="+2547..."
  />
</div>

{/* Country */}

<div>
  <label className="mb-2 block text-sm font-medium">
    Country *
  </label>

  <input
    type="text"
    name="country"
    value={form.country}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none focus:border-accent"
    placeholder="Kenya"
  />
</div>

{/* Ticket */}

<div>
  <label className="mb-2 block text-sm font-medium">
    Ticket Category *
  </label>

  <select
    name="ticketType"
    value={form.ticketType}
    onChange={handleChange}
    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none"
  >
    <option value="Regular">
      Regular — KES 500
    </option>

    <option value="VIP">
      VIP — KES 1,000
    </option>

    <option value="VVIP">
      VVIP — KES 5,000
    </option>
  </select>
</div>

{/* Amount */}

<div className="rounded-xl bg-accent/10 border border-accent/20 p-4">

  <div className="flex justify-between items-center">

    <span className="font-medium">
      Amount Payable
    </span>

    <span className="text-xl font-bold text-accent">

      KES {amount}

    </span>

  </div>

</div>

{/* Transaction */}

<div>
  <label className="mb-2 block text-sm font-medium">
    M-Pesa Transaction Code *
  </label>

  <input
    type="text"
    name="transactionCode"
    value={form.transactionCode}
    onChange={handleChange}
    required
    placeholder="SIH5ABCD12"
    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none focus:border-accent"
  />
</div>

{/* Mpesa */}

<div>

  <label className="mb-2 block text-sm font-medium">

    Paste Full M-Pesa Confirmation Message *

  </label>

  <textarea
    rows={5}
    name="mpesaMessage"
    value={form.mpesaMessage}
    onChange={handleChange}
    required
    placeholder="SIHXXXX Confirmed..."
    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none resize-none focus:border-accent"
  />

</div>

{/* Notes */}

<div>

  <label className="mb-2 block text-sm font-medium">

    Additional Notes (Optional)

  </label>

  <textarea
    rows={3}
    name="notes"
    value={form.notes}
    onChange={handleChange}
    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none resize-none focus:border-accent"
    placeholder="Special requests..."
  />

</div>

{/* Messages */}

{error && (

  <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-red-400">

    {error}

  </div>

)}

{success && (

  <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4">

    <div className="flex gap-2 items-center text-green-400">

      <CheckCircle size={18} />

      <span>{success}</span>

    </div>

  </div>

)}

{/* Submit */}

<Button
  type="submit"
  size="lg"
  className="w-full"
  disabled={loading}
>

  {loading
    ? "Submitting Registration..."
    : "Reserve My Seat"}

</Button>

</form>

</div>

</section>

</div>

</section>

</>

);

};

export default EventsPage;
