import { useState } from "react";
import { SEO } from "@/components/SEO";
import {
  registerAttendee,
  getTicketAmount,
  TicketType,
} from "@/lib/eventRegistration";

import {
  Calendar,
  MapPin,
  Ticket,
  Smartphone,
  ArrowDown,
  ArrowRight,
  CheckCircle,
  User,
  Users,
  Award,
  Trophy,
  Handshake,
  Utensils,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Mail,
  Phone,
  MessageCircle,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const featuredImage = "/event1.jpeg";
const TILL_NUMBER = "000000";

/* ------------------------------------------------------------------ */
/* Package configuration                                              */
/* TicketType is Individual / Corporate / Sponsor directly.            */
/* Price for Individual and Corporate comes from getTicketAmount();    */
/* Sponsor is a custom amount the attendee enters, sent explicitly     */
/* via the `amount` field.                                            */
/* ------------------------------------------------------------------ */

const PACKAGES: Record<
  TicketType,
  {
    title: string;
    subtitle: string;
    price: number | null; // null = custom amount
    icon: typeof User;
    highlight?: boolean;
  }
> = {
  Individual: {
    title: "Individual Ticket",
    subtitle: "For the single attendee",
    price: getTicketAmount("Individual"),
    icon: User,
  },
  Corporate: {
    title: "Corporate Package",
    subtitle: "10 Delegates",
    price: getTicketAmount("Corporate"),
    icon: Users,
    highlight: true,
  },
  Sponsor: {
    title: "Sponsor Package",
    subtitle: "Custom partnership amount",
    price: null,
    icon: Award,
  },
};

const INCLUSIONS = [
  { icon: Calendar, text: "Access to all six event days" },
  { icon: Trophy, text: "Football activities" },
  { icon: ShieldCheck, text: "Leadership Forum" },
  { icon: Handshake, text: "Business Networking" },
  { icon: Utensils, text: "Dinner with the Team" },
  { icon: Sparkles, text: "Exclusive Networking Dinner at Weston Hotel" },
];

const SCHEDULE = [
  { tag: "01", date: "10 Aug", title: "Arrival & Registration" },
  { tag: "02", date: "11 Aug", title: "Leadership Forum" },
  { tag: "03", date: "12 Aug", title: "Football Activities" },
  { tag: "04", date: "13 Aug", title: "Business Networking" },
  { tag: "05", date: "14 Aug", title: "Networking Dinner, Weston Hotel" },
  { tag: "06", date: "15 Aug", title: "Closing Ceremony" },
];

const STATS = [
  { value: "06", label: "Event Days" },
  { value: "500+", label: "Participants" },
  { value: "20+", label: "Speakers" },
  { value: "03", label: "Ticket Categories" },
];

const PAY_STEPS = [
  "Go to M-Pesa on your phone",
  "Select Lipa na M-Pesa",
  "Select Buy Goods and Services",
  `Enter Till Number: ${TILL_NUMBER}`,
  "Enter the amount shown above",
  "Enter your M-Pesa PIN and confirm",
];

const FAQS = [
  {
    q: "How do I pay?",
    a: `Lipa na M-Pesa, Buy Goods, Till Number ${TILL_NUMBER}. Full steps are shown in the registration form. Enter the M-Pesa transaction code you receive when you register.`,
  },
  {
    q: "How does the Corporate Package work?",
    a: "It covers 10 delegates under one registration. Add your company name on the form.",
  },
  {
    q: "How does the Sponsor Package work?",
    a: "Enter your agreed partnership amount on the form. Our team will follow up to confirm details.",
  },
  {
    q: "Can I get a refund?",
    a: "Contact our support team below and we'll go through the options for your booking.",
  },
];

/* Small reusable "tear line" seam — the perforated edge of a ticket
   stub, complete with the two punched notches at either end. */
const TicketSeam = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="border-t-2 border-dashed border-white/20" />
    <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-background" />
    <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-background" />
  </div>
);

const EventsPage = () => {
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [ticketType, setTicketType] = useState<TicketType>("Individual");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    transactionCode: "",
    companyName: "",
    sponsorAmount: "",
    notes: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const selectedPackage = PACKAGES[ticketType];
  const amount =
    ticketType === "Sponsor"
      ? Number(form.sponsorAmount) || 0
      : selectedPackage.price ?? 0;

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

  const handlePackageSelect = (key: TicketType) => {
    setTicketType(key);
    setDialogOpen(true);
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      transactionCode: "",
      companyName: "",
      sponsorAmount: "",
      notes: "",
    });
    setTicketType("Individual");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    // Fold package-specific details into `notes` for extra context.
    let composedNotes = "";
    if (ticketType === "Corporate" && form.companyName) {
      composedNotes += `Company: ${form.companyName}`;
    }
    if (form.notes) {
      composedNotes += composedNotes
        ? ` | Notes: ${form.notes}`
        : `Notes: ${form.notes}`;
    }

    const payload = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      country: form.country,
      ticketType,
      transactionCode: form.transactionCode,
      amount,
      notes: composedNotes,
    };

    const result = await registerAttendee(payload);

    if (result.success) {
      const firstName = form.fullName.trim().split(" ")[0] || "there";
      setSuccess(
        `Thank you for registering, ${firstName}! Your registration number is ${result.registration}. ` +
          `We'll send your official confirmation to ${form.email} shortly.`
      );
      resetForm();
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

      {/* STICKY REGISTRATION BAR */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-background/90 backdrop-blur">
        <div className="container-pro max-w-6xl flex items-center justify-between py-3">
          <span className="font-display text-sm md:text-base truncate">
            FC Metropol HP Kenya
          </span>
          <Button onClick={() => setDialogOpen(true)}>
            Register Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-16 pb-16">
        <div className="container-pro max-w-6xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-5 py-2 text-sm">
              <Calendar size={16} />
              10 – 15 August 2026
            </span>

            <h1 className="mt-8 font-display text-5xl md:text-7xl">
              FC Metropol HP Kenya
              <span className="block text-gradient-gold">
                Networking &amp; Sports Business Forum
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed">
              Six days of football, leadership and business networking in
              Nairobi. Reserve your seat below.
            </p>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
              <Button size="lg" onClick={() => setDialogOpen(true)}>
                Reserve Your Seat
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <a href="#tickets">
                <Button size="lg" variant="outline">
                  View Ticket Packages
                </Button>
              </a>
            </div>

            <p className="mt-4 text-sm text-foreground/60">
              Passes from{" "}
              <strong className="text-accent">
                KES {getTicketAmount("Individual").toLocaleString()}
              </strong>{" "}
              · Pay with Lipa na M-Pesa
            </p>
          </div>

          {/* POSTER */}
          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-3xl">
              <span className="absolute -top-4 -right-4 z-10 rotate-[8deg] rounded-full bg-accent px-5 py-2 text-xs font-bold tracking-wide text-background shadow-lg">
                ADMIT ONE
              </span>

              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src={featuredImage}
                  alt="FC Metropol Event"
                  className="w-full max-h-[560px] object-contain bg-black/10"
                />

                <TicketSeam className="mx-6" />

                <div className="grid grid-cols-3 divide-x divide-white/10 text-center py-5">
                  <div>
                    <div className="text-[11px] tracking-widest text-foreground/50">
                      KICKOFF
                    </div>
                    <div className="mt-1 font-display text-lg">10 Aug</div>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-widest text-foreground/50">
                      VENUE
                    </div>
                    <div className="mt-1 font-display text-lg">Nairobi</div>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-widest text-foreground/50">
                      DURATION
                    </div>
                    <div className="mt-1 font-display text-lg">6 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCOREBOARD STATS */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-black/20 px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {STATS.map((s) => (
                <div key={s.label} className="text-center px-2">
                  <div className="font-display text-4xl md:text-5xl tabular-nums text-gradient-gold">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs tracking-widest text-foreground/60 uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / TIMELINE */}
      <section id="highlights" className="pb-20">
        <div className="container-pro max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              SCHEDULE
            </span>
            <h2 className="mt-3 font-display text-4xl">Six days, one pass</h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SCHEDULE.map((item) => (
              <div
                key={item.tag}
                className="glass rounded-2xl p-5 border border-white/10 flex items-center gap-4"
              >
                <div className="h-11 w-11 shrink-0 rounded-full border-2 border-accent/50 flex items-center justify-center font-display text-sm text-accent">
                  {item.tag}
                </div>
                <div>
                  <div className="text-xs text-foreground/50">{item.date}</div>
                  <div className="font-medium">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKET PACKAGES */}
      <section id="tickets" className="pb-20">
        <div className="container-pro max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              TICKET PACKAGES
            </span>
            <h2 className="mt-3 font-display text-4xl">Choose your pass</h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {(Object.keys(PACKAGES) as TicketType[]).map((key) => {
              const pkg = PACKAGES[key];
              const Icon = pkg.icon;
              return (
                <div
                  key={key}
                  className={`relative rounded-3xl flex flex-col border overflow-hidden p-8 ${
                    pkg.highlight
                      ? "border-accent/40 bg-accent/10 shadow-2xl md:-translate-y-3"
                      : "border-white/10 glass-card"
                  }`}
                >
                  {pkg.highlight && (
                    <span className="absolute top-5 -right-9 z-10 rotate-45 bg-accent px-10 py-1 text-[11px] font-bold tracking-wide text-background shadow">
                      TEAM'S PICK
                    </span>
                  )}

                  <Icon className="text-accent mb-4" size={28} />
                  <h3 className="font-display text-2xl">{pkg.title}</h3>
                  <p className="text-foreground/60 text-sm mt-1">
                    {pkg.subtitle}
                  </p>

                  <div className="mt-6">
                    {pkg.price !== null ? (
                      <span className="font-display text-3xl tabular-nums">
                        KES {pkg.price.toLocaleString()}
                      </span>
                    ) : (
                      <span className="font-display text-3xl">Custom</span>
                    )}
                  </div>

                  <ul className="mt-6 space-y-3 flex-1">
                    {INCLUSIONS.map((inc) => (
                      <li key={inc.text} className="flex items-start gap-3 text-sm">
                        <inc.icon className="text-accent shrink-0 mt-0.5" size={16} />
                        <span className="text-foreground/80">{inc.text}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="mt-8 w-full"
                    variant={pkg.highlight ? "default" : "outline"}
                    onClick={() => handlePackageSelect(key)}
                  >
                    Select {pkg.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="pb-20">
        <div className="container-pro max-w-4xl">
          <div className="text-center">
            <span className="text-sm text-accent font-semibold tracking-wide">
              FAQ
            </span>
            <h2 className="mt-3 font-display text-4xl">Common questions</h2>
          </div>

          <div className="mt-10 space-y-3">
            {FAQS.map((item, i) => (
              <div
                key={item.q}
                className="glass rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium">{item.q}</span>
                  <ChevronDown
                    className={`shrink-0 text-accent transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-foreground/70 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / SUPPORT */}
      <section id="contact" className="pb-24">
        <div className="container-pro max-w-6xl">
          <div className="glass-card rounded-3xl p-10 md:p-12">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-sm text-accent font-semibold tracking-wide">
                SUPPORT
              </span>
              <h2 className="mt-3 font-display text-3xl">Need help?</h2>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              <a
                href="mailto:events@fcmetropolhp.co.ke"
                className="glass rounded-2xl p-5 flex items-center gap-3 border border-white/10"
              >
                <Mail className="text-accent" size={20} />
                <div className="text-sm text-foreground/70">
                  events@fcmetropolhp.co.ke
                </div>
              </a>
              <a
                href="tel:+254700000000"
                className="glass rounded-2xl p-5 flex items-center gap-3 border border-white/10"
              >
                <Phone className="text-accent" size={20} />
                <div className="text-sm text-foreground/70">
                  +254 700 000 000
                </div>
              </a>
              <a
                href="https://wa.me/254700000000"
                className="glass rounded-2xl p-5 flex items-center gap-3 border border-white/10"
              >
                <MessageCircle className="text-accent" size={20} />
                <div className="text-sm text-foreground/70">WhatsApp</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION MODAL */}
      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) {
            setError("");
          }
        }}
      >
        <DialogContent className="max-w-2xl max-h-[88vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              Event Registration
            </DialogTitle>
            <DialogDescription>
              Pick your package, pay via Lipa na M-Pesa, then enter your
              details below.
            </DialogDescription>
          </DialogHeader>

          {/* Package switcher inside modal */}
          <div className="grid grid-cols-3 gap-3 mt-2">
            {(Object.keys(PACKAGES) as TicketType[]).map((key) => {
              const pkg = PACKAGES[key];
              const Icon = pkg.icon;
              const active = ticketType === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTicketType(key)}
                  className={`rounded-xl border p-3 text-center transition-colors ${
                    active
                      ? "border-accent bg-accent/10"
                      : "border-white/10 bg-background"
                  }`}
                >
                  <Icon
                    className={`mx-auto mb-1 ${
                      active ? "text-accent" : "text-foreground/60"
                    }`}
                    size={18}
                  />
                  <div className="text-xs font-medium">{pkg.title}</div>
                </button>
              );
            })}
          </div>

          {/* Sponsor amount needs to be set before the payment steps make sense */}
          {ticketType === "Sponsor" && (
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Sponsor Amount (KES) *
              </label>
              <input
                type="number"
                min={1}
                name="sponsorAmount"
                value={form.sponsorAmount}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none focus:border-accent"
                placeholder="e.g. 100000"
              />
            </div>
          )}

          {/* Lipa na M-Pesa */}
          <div className="mt-5 rounded-2xl border border-accent/30 bg-accent/10 p-5">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Smartphone className="text-accent" size={18} />
                <strong className="text-sm">Lipa na M-Pesa</strong>
              </div>
              <div className="text-sm">
                <span className="text-foreground/60">Till Number </span>
                <strong>{TILL_NUMBER}</strong>
              </div>
            </div>

            <div className="mt-2 text-sm">
              <span className="text-foreground/60">Amount to pay: </span>
              <strong className="text-accent">
                {ticketType === "Sponsor" && !amount
                  ? "Enter sponsor amount above"
                  : `KES ${amount.toLocaleString()}`}
              </strong>
            </div>

            <ol className="mt-4 space-y-1.5 text-sm text-foreground/80 list-decimal list-inside">
              {PAY_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
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

            {/* Corporate: company name */}
            {ticketType === "Corporate" && (
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none focus:border-accent"
                  placeholder="Your Company Ltd"
                />
              </div>
            )}

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
                placeholder="UG45CA77YR"
                className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none focus:border-accent"
              />
              <p className="mt-1.5 text-xs text-foreground/50">
                The code at the start of your M-Pesa confirmation SMS, e.g.
                "UG45CA77YR Confirmed..."
              </p>
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
              <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-red-400 flex items-start gap-2">
                <X size={18} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4">
                <div className="flex gap-2 items-start text-green-400">
                  <CheckCircle size={18} className="shrink-0 mt-0.5" />
                  <span>{success}</span>
                </div>
              </div>
            )}

            {/* Submit */}
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Submitting Registration..." : "Reserve My Seat"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventsPage;
