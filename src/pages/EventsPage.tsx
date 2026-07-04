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
  CreditCard,
  ArrowDown,
  ArrowRight,
  CheckCircle,
  User,
  Users,
  Award,
  Trophy,
  Handshake,
  Utensils,
  QrCode,
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
  { icon: QrCode, text: "Official QR Event Pass" },
];

const SCHEDULE = [
  {
    tag: "MD 01",
    date: "10 Aug",
    title: "Arrival & Registration",
    desc: "Check-in, welcome reception and QR pass collection.",
  },
  {
    tag: "MD 02",
    date: "11 Aug",
    title: "Leadership Forum",
    desc: "Panel sessions with club executives, coaches and scouts.",
  },
  {
    tag: "MD 03",
    date: "12 Aug",
    title: "Football Activities",
    desc: "On-pitch sessions, clinics and friendly matches.",
  },
  {
    tag: "MD 04",
    date: "13 Aug",
    title: "Business Networking",
    desc: "Structured networking between investors and clubs.",
  },
  {
    tag: "MD 05",
    date: "14 Aug",
    title: "Networking Dinner",
    desc: "Exclusive dinner with the team at Weston Hotel.",
  },
  {
    tag: "MD 06",
    date: "15 Aug",
    title: "Closing Ceremony",
    desc: "Awards, closing remarks and group photos.",
  },
];

const STATS = [
  { value: "06", label: "Event Days" },
  { value: "500+", label: "Participants" },
  { value: "20+", label: "Speakers" },
  { value: "03", label: "Ticket Categories" },
];

const TICKER_ITEMS = [
  "FOOTBALL",
  "LEADERSHIP FORUM",
  "BUSINESS NETWORKING",
  "GALA DINNER · WESTON HOTEL",
  "OFFICIAL QR PASS",
];

const FAQS = [
  {
    q: "How do I pay for my ticket?",
    a: "Payments are made via M-Pesa to the Paybill and Account number shown in the Ticket Packages section. After paying, enter your M-Pesa transaction code in the registration form.",
  },
  {
    q: "What's included in every ticket?",
    a: "Every ticket — Individual, Corporate or Sponsor — includes access to all six event days, football activities, the Leadership Forum, business networking, dinner with the team, the exclusive networking dinner at Weston Hotel, and your official QR event pass.",
  },
  {
    q: "How does the Corporate Package work?",
    a: "The Corporate Package covers 10 delegates from your organisation under a single registration. Add your company name during registration so we can prepare all 10 QR passes together.",
  },
  {
    q: "How does the Sponsor Package work?",
    a: "Sponsor Packages are custom partnership amounts. Enter the agreed amount during registration and our team will follow up to confirm sponsorship benefits.",
  },
  {
    q: "Can I get a refund?",
    a: "Reach out to our support team via email or phone and we'll walk you through the options for your specific booking.",
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

const Barcode = () => (
  <div className="flex items-end gap-[3px] h-8 opacity-70">
    {[3, 1, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 2, 1, 4, 1, 2, 1].map((w, i) => (
      <span
        key={i}
        style={{ width: `${w}px`, height: i % 5 === 0 ? "100%" : "70%" }}
        className="bg-foreground/70"
      />
    ))}
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
      setSuccess(
        `Registration Successful! Your Registration Number is ${result.registration}`
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

      {/* Scoped, self-contained styles for the ticket-strip marquee. */}
      <style>{`
        @keyframes fcmp-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fcmp-marquee-track {
          animation: fcmp-marquee 26s linear infinite;
        }
        .fcmp-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .fcmp-marquee-track { animation: none; }
        }
      `}</style>

      {/* HERO */}
      <section className="pt-28 pb-16">
        <div className="container-pro max-w-6xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-5 py-2 text-sm">
              <Calendar size={16} />
              AUGUST 2026 · ALL-ACCESS PASS
            </span>

            <h1 className="mt-8 font-display text-5xl md:text-7xl">
              FC Metropol HP Kenya
              <span className="block text-gradient-gold">
                Networking &amp; Sports Business Forum
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/70 leading-relaxed">
              Join football professionals, investors, club executives,
              coaches, scouts, media personalities and sports enthusiasts
              for one of Kenya's premier football networking events.
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
              <span className="text-sm text-foreground/60">
                Passes from{" "}
                <strong className="text-accent">
                  KES {getTicketAmount("Individual").toLocaleString()}
                </strong>
              </span>
            </div>
          </div>

          {/* TICKER STRIP */}
          <div className="mt-12 overflow-hidden border-y border-white/10 py-3">
            <div className="fcmp-marquee-track flex w-max gap-10 whitespace-nowrap">
              {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map(
                (item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-3 text-xs font-semibold tracking-widest text-foreground/50"
                  >
                    {item}
                    <span className="h-1 w-1 rounded-full bg-accent" />
                  </span>
                )
              )}
            </div>
          </div>

          {/* POSTER — presented as the event's own admit-one stub */}
          <div className="mt-14 flex justify-center">
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
                      GATE
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

          {/* EVENT DETAILS */}
          <div id="overview" className="grid md:grid-cols-3 gap-5 mt-14">
            <div className="glass-card rounded-2xl p-6 text-center">
              <Calendar className="mx-auto text-accent mb-3" />
              <h3 className="font-semibold text-lg">Event Dates</h3>
              <p className="text-foreground/70 mt-2">10th – 15th August 2026</p>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center">
              <MapPin className="mx-auto text-accent mb-3" />
              <h3 className="font-semibold text-lg">Venue</h3>
              <p className="text-foreground/70 mt-2">TBD, Nairobi</p>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center">
              <Ticket className="mx-auto text-accent mb-3" />
              <h3 className="font-semibold text-lg">Registration</h3>
              <p className="text-foreground/70 mt-2">Reserve your seat today.</p>
            </div>
          </div>

          {/* SCOREBOARD STATS */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-black/20 px-6 py-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-foreground/50">
                ON THE SCOREBOARD
              </span>
            </div>
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

      {/* ABOUT */}
      <section id="about" className="pb-20">
        <div className="container-pro max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm text-accent font-semibold tracking-wide">
              ABOUT THE EVENT
            </span>
            <h2 className="mt-3 font-display text-4xl">
              Where Kenyan football meets serious business
            </h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              FC Metropol HP Kenya brings together six days of football
              activity, leadership dialogue and structured business
              networking. It's designed for anyone who takes the game — and
              the business behind it — seriously: club owners, investors,
              coaches, scouts, sponsors and media.
            </p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Every attendee leaves with new relationships, a QR-verified
              event pass, and an invitation to the exclusive networking
              dinner at Weston Hotel.
            </p>
          </div>
          <div className="glass-card rounded-3xl p-8">
            <h3 className="font-semibold text-xl mb-5">Why Attend</h3>
            <ul className="space-y-4">
              {[
                "Meet decision-makers across Kenyan football",
                "Direct access to club leadership and scouts",
                "Structured, high-value networking sessions",
                "A single pass covering every day of the forum",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={18} />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / MATCHDAY TIMELINE */}
      <section id="highlights" className="pb-20">
        <div className="container-pro max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              EVENT HIGHLIGHTS
            </span>
            <h2 className="mt-3 font-display text-4xl">Six matchdays, one pass</h2>
          </div>

          <div className="mt-14 relative">
            <div className="absolute left-6 md:left-[4.5rem] top-2 bottom-2 w-px bg-white/10" />
            <div className="space-y-8">
              {SCHEDULE.map((item) => (
                <div key={item.tag} className="relative flex gap-6 md:gap-8">
                  <div className="shrink-0 flex flex-col items-center w-12 md:w-32">
                    <div className="h-12 w-12 rounded-full border-2 border-accent/50 bg-background flex items-center justify-center font-display text-sm text-accent z-10">
                      {item.tag.split(" ")[1]}
                    </div>
                    <div className="hidden md:block mt-2 text-xs text-foreground/50">
                      {item.date}
                    </div>
                  </div>
                  <div className="glass rounded-2xl p-6 border border-white/10 flex-1">
                    <div className="flex items-center gap-2 md:hidden mb-1 text-xs text-foreground/50">
                      {item.date}
                    </div>
                    <span className="text-[11px] font-semibold tracking-widest text-accent">
                      MATCHDAY {item.tag.split(" ")[1]}
                    </span>
                    <h4 className="font-semibold text-lg mt-1">{item.title}</h4>
                    <p className="text-foreground/70 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
            <p className="mt-4 text-foreground/70">
              Every pass below includes full access to the forum — pick the
              one that fits how you're attending.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {(Object.keys(PACKAGES) as TicketType[]).map((key) => {
              const pkg = PACKAGES[key];
              const Icon = pkg.icon;
              return (
                <div
                  key={key}
                  className={`relative rounded-3xl flex flex-col border overflow-hidden ${
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

                  <div className="p-8 flex flex-col flex-1">
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
                        <li
                          key={inc.text}
                          className="flex items-start gap-3 text-sm"
                        >
                          <inc.icon
                            className="text-accent shrink-0 mt-0.5"
                            size={16}
                          />
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

                  <TicketSeam />

                  <div className="flex items-center justify-between px-8 py-5">
                    <Barcode />
                    <span className="text-[10px] tracking-widest text-foreground/40">
                      SCAN TO ENTER
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-pro max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-accent/10 p-10 md:p-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-background/40 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent">
              FINAL WHISTLE ON EARLY SEATS
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              Seats are limited. Secure yours today.
            </h2>
            <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
              Complete your registration in minutes and receive your official
              QR event pass by email.
            </p>
            <Button size="lg" className="mt-8" onClick={() => setDialogOpen(true)}>
              Reserve Your Seat
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
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
                CONTACT &amp; SUPPORT
              </span>
              <h2 className="mt-3 font-display text-3xl">
                Need help with your registration?
              </h2>
              <p className="mt-3 text-foreground/70">
                Our support team is on hand for ticketing, corporate group
                bookings and sponsorship enquiries.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              <a
                href="mailto:events@fcmetropolhp.co.ke"
                className="glass rounded-2xl p-5 flex items-center gap-3 border border-white/10"
              >
                <Mail className="text-accent" size={20} />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-sm text-foreground/70">
                    events@fcmetropolhp.co.ke
                  </div>
                </div>
              </a>
              <a
                href="tel:+254700000000"
                className="glass rounded-2xl p-5 flex items-center gap-3 border border-white/10"
              >
                <Phone className="text-accent" size={20} />
                <div>
                  <div className="text-sm font-medium">Phone</div>
                  <div className="text-sm text-foreground/70">+254 700 000 000</div>
                </div>
              </a>
              <a
                href="https://wa.me/254700000000"
                className="glass rounded-2xl p-5 flex items-center gap-3 border border-white/10"
              >
                <MessageCircle className="text-accent" size={20} />
                <div>
                  <div className="text-sm font-medium">WhatsApp</div>
                  <div className="text-sm text-foreground/70">Chat with us</div>
                </div>
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
              Complete the form and submit your M-Pesa transaction code. Once
              payment is verified you'll receive your official confirmation.
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

          {/* Amount payable */}
          <div className="mt-5 rounded-2xl border border-accent/30 bg-accent/10 p-5">
            <div className="flex items-center gap-3">
              <CreditCard className="text-accent" size={18} />
              <strong className="text-sm">M-Pesa Payment</strong>
            </div>
            <div className="mt-4 space-y-1 text-sm">
              <p>
                <strong>Paybill:</strong> 000000
              </p>
              <p>
                <strong>Account:</strong> EVENTS
              </p>
              <p>
                <strong>Amount:</strong>{" "}
                {ticketType === "Sponsor"
                  ? amount
                    ? `KES ${amount.toLocaleString()}`
                    : "Enter your sponsor amount below"
                  : `KES ${amount.toLocaleString()}`}
              </p>
            </div>
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

            {/* Sponsor: amount */}
            {ticketType === "Sponsor" && (
              <div>
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
