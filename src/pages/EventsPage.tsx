import { useEffect, useMemo, useState } from "react";
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
  Handshake,
  Trophy,
  ChevronDown,
  Mail,
  Phone,
  MessageCircle,
  Building2,
  Receipt,
  ShieldAlert,
  X,
  Timer,
  Wallet,
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
const KICKOFF = new Date("2026-08-10T00:00:00+03:00");
const WHATSAPP_URL = "https://wa.me/254700000000";

/* ------------------------------------------------------------------ */
/* Package configuration                                              */
/* Three real ticket categories: Individual (single attendee), the      */
/* Corporate Package (fixed price covering 10 delegates), and a Sponsor */
/* Package at a custom partnership amount, entered on the form.         */
/* ------------------------------------------------------------------ */

const PACKAGES: Record<
  TicketType,
  {
    title: string;
    tag: string;
    subtitle: string;
    price: number | null; // null = custom amount, entered on the form
    icon: typeof User;
    highlight?: string;
    includes: string[];
  }
> = {
  Individual: {
    title: "Individual Ticket",
    tag: "SINGLE PASS",
    subtitle: "For the single attendee",
    price: getTicketAmount("Individual"),
    icon: User,
    includes: [
      "Access to all six event days",
      "Football activities",
      "Leadership Forum",
      "Business Networking",
      "Dinner with the Team",
      "Exclusive Networking Dinner at Weston Hotel",
    ],
  },
  Corporate: {
    title: "Corporate Package",
    tag: "10 DELEGATES",
    subtitle: "10 delegates, one registration",
    price: getTicketAmount("Corporate"),
    icon: Users,
    highlight: "Team's Pick",
    includes: [
      "Access to all six event days",
      "Football activities",
      "Leadership Forum",
      "Business Networking",
      "Dinner with the Team",
      "Exclusive Networking Dinner at Weston Hotel",
    ],
  },
  Sponsor: {
    title: "Sponsor Package",
    tag: "PARTNERSHIP",
    subtitle: "Custom partnership amount",
    price: null,
    icon: Handshake,
    includes: [
      "Access to all six event days",
      "Football activities",
      "Leadership Forum",
      "Business Networking",
      "Dinner with the Team",
      "Exclusive Networking Dinner at Weston Hotel",
    ],
  },
};

const SCHEDULE = [
  { day: "01", date: "10 Aug", title: "Arrival & Registration" },
  { day: "02", date: "11 Aug", title: "Leadership Forum" },
  { day: "03", date: "12 Aug", title: "Football Activities" },
  { day: "04", date: "13 Aug", title: "Business Networking" },
  { day: "05", date: "14 Aug", title: "Networking Dinner, Weston Hotel" },
  { day: "06", date: "15 Aug", title: "Closing Ceremony" },
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
    a: "One registration covers 10 delegates at a fixed KES 40,000, with the full six-day pass for each delegate. Add your company name on the form so we can allocate seats correctly.",
  },
  {
    q: "How does the Sponsor Package work?",
    a: "Sponsor packages are custom partnership amounts, agreed with our team. Enter the amount on the form, or contact us first via WhatsApp or email to arrange a package tailored to your organisation.",
  },
  {
    q: "Can I get a refund?",
    a: "Contact our support team below and we'll go through the options for your booking.",
  },
];

/* Pitch-marking divider — a shallow chevron pair, used between sections
   instead of a plain rule so the football motif carries through quietly. */
const SectionDivider = () => (
  <div className="flex items-center justify-center gap-2 py-2" aria-hidden="true">
    <span className="h-px w-16 bg-white/10" />
    <svg width="22" height="14" viewBox="0 0 22 14" className="text-accent/60">
      <path
        d="M1 1 L11 13 L21 1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="h-px w-16 bg-white/10" />
  </div>
);

const IconField = ({
  icon: Icon,
  children,
}: {
  icon: typeof User;
  children: React.ReactNode;
}) => (
  <div className="relative">
    <Icon
      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40"
      size={18}
    />
    {children}
  </div>
);

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  return useMemo(() => {
    const diff = Math.max(0, target.getTime() - now);
    const days = Math.floor(diff / 86_400_000);
    const hours = Math.floor((diff % 86_400_000) / 3_600_000);
    const minutes = Math.floor((diff % 3_600_000) / 60_000);
    const seconds = Math.floor((diff % 60_000) / 1000);
    return { days, hours, minutes, seconds, done: diff === 0 };
  }, [now, target]);
}

const EventsPage = () => {
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [ticketType, setTicketType] = useState<TicketType>("Individual");
  const countdown = useCountdown(KICKOFF);

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
  const isSponsor = ticketType === "Sponsor";
  const isCorporate = ticketType === "Corporate";

  const parsedSponsorAmount = Number(form.sponsorAmount);
  const amount = isSponsor
    ? Number.isFinite(parsedSponsorAmount) && parsedSponsorAmount > 0
      ? parsedSponsorAmount
      : 0
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
    setConfirmChecked(false);
  };

  // Fires when the form's native validation passes. Instead of registering
  // immediately, it opens a payment-confirmation popup so nobody can submit
  // a code without deliberately confirming they paid.
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isSponsor && amount <= 0) {
      setError("Enter a valid partnership amount before continuing.");
      return;
    }

    setConfirmOpen(true);
  };

  const submitRegistration = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    let composedNotes = "";
    if (form.notes) {
      composedNotes = `Notes: ${form.notes}`;
    }

    const payload = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      country: form.country,
      ticketType,
      transactionCode: form.transactionCode,
      companyName: form.companyName,
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
    setConfirmOpen(false);
  };

  return (
    <>
      <SEO
        title="FC Metropol HP Kenya — Networking & Sports Business Forum"
        description="Register for FC Metropol HP Kenya's Networking & Sports Business Forum — six days of football, leadership and business networking in Nairobi."
      />

      {/* STICKY REGISTRATION BAR */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-background/90 backdrop-blur shadow-sm">
        <div className="container-pro max-w-6xl flex items-center justify-between gap-3 py-3">
          <span className="font-display text-sm md:text-base truncate">
            FC Metropol HP Kenya
          </span>

          <div className="flex items-center gap-3">
            {!countdown.done && (
              <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs tabular-nums">
                <Timer size={13} className="text-accent" />
                <span>
                  {countdown.days}d {String(countdown.hours).padStart(2, "0")}h{" "}
                  {String(countdown.minutes).padStart(2, "0")}m to kickoff
                </span>
              </div>
            )}
            <Button onClick={() => setDialogOpen(true)}>
              Reserve Your Seat
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative pt-16 pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(600px 300px at 15% 0%, rgba(227,167,60,0.10), transparent 60%), radial-gradient(600px 300px at 85% 10%, rgba(227,167,60,0.08), transparent 60%)",
          }}
        />

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
                  alt="FC Metropol HP Kenya — Networking & Sports Business Forum"
                  className="w-full max-h-[560px] object-contain bg-black/10"
                />

                <div className="relative">
                  <div className="border-t-2 border-dashed border-white/20 mx-6" />
                  <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-background" />
                  <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-background" />
                </div>

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

          {/* SCOREBOARD — stats on the left, live countdown on the right */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-black/20 px-6 py-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
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

              {!countdown.done && (
                <div className="flex items-center justify-center gap-4 border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  {[
                    { label: "DAYS", value: countdown.days },
                    { label: "HRS", value: countdown.hours },
                    { label: "MIN", value: countdown.minutes },
                    { label: "SEC", value: countdown.seconds },
                  ].map((unit) => (
                    <div key={unit.label} className="text-center">
                      <div className="font-display text-3xl tabular-nums w-14">
                        {String(unit.value).padStart(2, "0")}
                      </div>
                      <div className="mt-1 text-[10px] tracking-widest text-foreground/50">
                        {unit.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SCHEDULE */}
      <section id="highlights" className="py-20">
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
                key={item.day}
                className="glass rounded-2xl p-6 border border-white/10 flex items-start gap-4 transition-colors hover:border-accent/30"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 border border-accent/30 font-display text-sm text-accent tabular-nums">
                  {item.day}
                </span>
                <div>
                  <span className="text-xs tracking-widest text-foreground/50 tabular-nums">
                    {item.date}
                  </span>
                  <h4 className="font-semibold text-lg mt-1">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 glass rounded-2xl p-5 border border-white/10 flex items-center gap-3">
            <Trophy className="text-accent shrink-0" size={20} />
            <p className="text-sm text-foreground/80">
              The forum closes with an <strong>Exclusive Networking Dinner at
              Weston Hotel</strong>, bringing together delegates, sponsors and
              guests from across the six-day programme.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* TICKET PACKAGES */}
      <section id="tickets" className="py-20">
        <div className="container-pro max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              TICKET PACKAGES
            </span>
            <h2 className="mt-3 font-display text-4xl">Choose your pass</h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(Object.keys(PACKAGES) as TicketType[]).map((key) => {
              const pkg = PACKAGES[key];
              const Icon = pkg.icon;
              const featured = Boolean(pkg.highlight);
              return (
                <div
                  key={key}
                  className={`group relative rounded-3xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 glass-card ${
                    featured
                      ? "border-2 border-accent/50 shadow-[0_0_0_1px_rgba(227,167,60,0.35),0_24px_48px_-24px_rgba(0,0,0,0.65)]"
                      : "border border-white/10 hover:border-accent/40"
                  }`}
                >
                  {featured && (
                    <div className="bg-accent px-4 py-1.5 text-center text-[11px] font-bold tracking-widest text-background">
                      {pkg.highlight?.toUpperCase()}
                    </div>
                  )}

                  <div className="flex items-center justify-between px-6 pt-6">
                    <span className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-foreground/60">
                      {pkg.tag}
                    </span>
                    <Icon className="text-accent" size={22} />
                  </div>

                  <div className="px-8 pt-4">
                    <h3 className="font-display text-2xl">{pkg.title}</h3>
                    <p className="text-foreground/60 text-sm mt-1">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div className="mx-6 mt-6 rounded-xl border border-accent/20 bg-accent/10 px-4 py-3">
                    <span className="font-display text-3xl tabular-nums text-gradient-gold">
                      {pkg.price === null
                        ? "Custom"
                        : `KES ${pkg.price.toLocaleString()}`}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 flex-1 px-8">
                    {pkg.includes.map((text) => (
                      <li key={text} className="flex items-start gap-3 text-sm">
                        <CheckCircle
                          className="text-accent shrink-0 mt-0.5"
                          size={16}
                        />
                        <span className="text-foreground/80">{text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-8 pt-8">
                    <Button
                      className="w-full"
                      variant={featured ? "default" : "outline"}
                      onClick={() => handlePackageSelect(key)}
                    >
                      Select {pkg.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section id="faq" className="py-20">
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
                  aria-expanded={openFaq === i}
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
                className="glass rounded-2xl p-5 flex items-center gap-3 border border-white/10 transition-colors hover:border-accent/30"
              >
                <Mail className="text-accent" size={20} />
                <div className="text-sm text-foreground/70">
                  events@fcmetropolhp.co.ke
                </div>
              </a>
              <a
                href="tel:+254700000000"
                className="glass rounded-2xl p-5 flex items-center gap-3 border border-white/10 transition-colors hover:border-accent/30"
              >
                <Phone className="text-accent" size={20} />
                <div className="text-sm text-foreground/70">
                  +254 700 000 000
                </div>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-3 border border-white/10 transition-colors hover:border-accent/30"
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
          if (!open) setError("");
        }}
      >
        <DialogContent className="max-w-2xl max-h-[88vh] overflow-y-auto p-0 gap-0">
          <div className="h-1.5 w-full bg-gradient-to-r from-accent/40 via-accent to-accent/40" />

          <div className="p-6 md:p-8">
            <DialogHeader>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 border border-accent/30">
                  <Ticket className="text-accent" size={20} />
                </span>
                <div>
                  <DialogTitle className="font-display text-2xl">
                    Event Registration
                  </DialogTitle>
                  <DialogDescription className="mt-0.5">
                    Pick your pass, pay via Lipa na M-Pesa, then confirm.
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            {/* STEP 1 — Package */}
            <div className="mt-8">
              <span className="text-[11px] font-semibold tracking-widest text-foreground/40">
                01 · PASS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                {(Object.keys(PACKAGES) as TicketType[]).map((key) => {
                  const pkg = PACKAGES[key];
                  const Icon = pkg.icon;
                  const active = ticketType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTicketType(key)}
                      className={`rounded-2xl border p-4 text-center transition-all ${
                        active
                          ? "border-accent bg-accent/10 shadow-md scale-[1.02]"
                          : "border-white/10 bg-background hover:border-white/20"
                      }`}
                    >
                      <Icon
                        className={`mx-auto mb-1.5 ${
                          active ? "text-accent" : "text-foreground/60"
                        }`}
                        size={20}
                      />
                      <div className="text-xs font-medium">{pkg.title}</div>
                      <div className="text-[11px] text-foreground/50 mt-0.5 tabular-nums">
                        {pkg.price === null
                          ? "Custom"
                          : `KES ${pkg.price.toLocaleString()}`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2 — Pay */}
            <div className="mt-8">
              <span className="text-[11px] font-semibold tracking-widest text-foreground/40">
                02 · PAY
              </span>
              <div className="mt-3 rounded-2xl border border-accent/30 bg-accent/10 p-5">
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

                {isSponsor && (
                  <div className="mt-3">
                    <IconField icon={Wallet}>
                      <input
                        type="number"
                        min={1}
                        name="sponsorAmount"
                        value={form.sponsorAmount}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/10 bg-background pl-11 pr-4 py-3 outline-none focus:border-accent"
                        placeholder="Agreed partnership amount (KES)"
                      />
                    </IconField>
                  </div>
                )}

                <div className="mt-3 rounded-xl bg-background/50 px-4 py-3 text-sm">
                  <span className="text-foreground/60">Amount to pay </span>
                  <strong className="text-accent tabular-nums">
                    {amount > 0 ? `KES ${amount.toLocaleString()}` : "—"}
                  </strong>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {PAY_STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-[11px] font-semibold text-accent">
                        {i + 1}
                      </span>
                      <span className="text-foreground/80">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* STEP 3 — Details */}
            <form onSubmit={handleFormSubmit} className="mt-8">
              <span className="text-[11px] font-semibold tracking-widest text-foreground/40">
                03 · YOUR DETAILS
              </span>

              <div className="mt-3 space-y-4">
                <IconField icon={User}>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-background pl-11 pr-4 py-3 outline-none focus:border-accent"
                    placeholder="Full name"
                  />
                </IconField>

                <IconField icon={Mail}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-background pl-11 pr-4 py-3 outline-none focus:border-accent"
                    placeholder="Email address"
                  />
                </IconField>

                <div className="grid sm:grid-cols-2 gap-4">
                  <IconField icon={Phone}>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-background pl-11 pr-4 py-3 outline-none focus:border-accent"
                      placeholder="+2547..."
                    />
                  </IconField>

                  <IconField icon={MapPin}>
                    <input
                      type="text"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-background pl-11 pr-4 py-3 outline-none focus:border-accent"
                      placeholder="Country"
                    />
                  </IconField>
                </div>

                {(isCorporate || isSponsor) && (
                  <IconField icon={Building2}>
                    <input
                      type="text"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-background pl-11 pr-4 py-3 outline-none focus:border-accent"
                      placeholder="Company / organisation name"
                    />
                  </IconField>
                )}

                <textarea
                  rows={2}
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none resize-none focus:border-accent"
                  placeholder="Additional notes (optional)"
                />

                <div>
                  <IconField icon={Receipt}>
                    <input
                      type="text"
                      name="transactionCode"
                      value={form.transactionCode}
                      onChange={handleChange}
                      required
                      placeholder="M-Pesa transaction code, e.g. UG45CA77YR"
                      className="w-full rounded-xl border border-white/10 bg-background pl-11 pr-4 py-3 outline-none focus:border-accent"
                    />
                  </IconField>
                  <p className="mt-1.5 text-xs text-foreground/50">
                    The code at the start of your M-Pesa confirmation SMS,
                    e.g. "UG45CA77YR Confirmed..."
                  </p>
                </div>
              </div>

              {error && (
                <div className="mt-5 rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-red-400 flex items-start gap-2">
                  <X size={18} className="shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div className="mt-5 rounded-xl bg-green-500/10 border border-green-500/20 p-4">
                  <div className="flex gap-2 items-start text-green-400">
                    <CheckCircle size={18} className="shrink-0 mt-0.5" />
                    <span>{success}</span>
                  </div>
                </div>
              )}

              <Button type="submit" size="lg" className="w-full mt-6">
                Review &amp; Confirm Payment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* PAYMENT CONFIRMATION POPUP */}
      <Dialog
        open={confirmOpen}
        onOpenChange={(open) => {
          if (!loading) setConfirmOpen(open);
        }}
      >
        <DialogContent className="max-w-md p-0 gap-0">
          <div className="h-1.5 w-full bg-gradient-to-r from-accent/40 via-accent to-accent/40" />
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 border border-accent/30">
                <ShieldAlert className="text-accent" size={20} />
              </span>
              <DialogTitle className="font-display text-xl">
                Confirm Your Payment
              </DialogTitle>
            </div>

            <p className="mt-4 text-sm text-foreground/70">
              Please double-check the details below before we submit your
              registration.
            </p>

            <div className="mt-4 rounded-xl border border-white/10 bg-background/60 divide-y divide-white/10 text-sm">
              <div className="flex justify-between px-4 py-3">
                <span className="text-foreground/60">Pass</span>
                <strong>{selectedPackage.title}</strong>
              </div>
              <div className="flex justify-between px-4 py-3">
                <span className="text-foreground/60">Amount</span>
                <strong className="text-accent tabular-nums">
                  KES {amount.toLocaleString()}
                </strong>
              </div>
              <div className="flex justify-between px-4 py-3">
                <span className="text-foreground/60">Transaction Code</span>
                <strong>{form.transactionCode || "—"}</strong>
              </div>
            </div>

            <label className="mt-5 flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={confirmChecked}
                onChange={(e) => setConfirmChecked(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-white/20 accent-current text-accent"
              />
              <span className="text-sm text-foreground/80">
                I confirm I have completed this M-Pesa payment and the
                transaction code above is correct.
              </span>
            </label>

            <div className="mt-6 flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                disabled={loading}
                onClick={() => setConfirmOpen(false)}
              >
                Go Back
              </Button>
              <Button
                type="button"
                className="flex-1"
                disabled={!confirmChecked || loading}
                onClick={submitRegistration}
              >
                {loading ? "Submitting..." : "Confirm & Reserve"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventsPage;
