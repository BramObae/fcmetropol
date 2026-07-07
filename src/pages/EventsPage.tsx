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
  Utensils,
  Target,
  GraduationCap,
  Layers,
  Star,
  ChevronDown,
  Mail,
  Phone,
  Globe,
  Building2,
  Receipt,
  ShieldAlert,
  X,
  Timer,
  AlertTriangle,
  Flame,
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
const KICKOFF = new Date("2026-08-09T00:00:00+03:00");

/* ------------------------------------------------------------------ */
/* Package configuration                                              */
/* Five fixed-price ticket categories: Launch Dinner (9 Aug), Corporate */
/* Table (9 Aug, table of 10), Open Play (10-11 Aug), Workshop          */
/* (12-14 Aug), and the Open Play + Workshop combo (10-14 Aug).         */
/* ------------------------------------------------------------------ */

const PACKAGES: Record<
  TicketType,
  {
    title: string;
    tag: string;
    subtitle: string;
    venue: string;
    price: number;
    icon: typeof User;
    includes: string[];
  }
> = {
  Dinner: {
    title: "Dinner Launch",
    tag: "GALA",
    subtitle: "5,000 per person, 9 Aug",
    venue: "Weston Hotel",
    price: getTicketAmount("Dinner"),
    icon: Utensils,
    includes: [
      "Official Launch Dinner, 9 Aug",
      "Sports Investment and Partnership Forum",
      "Networking with government, corporate and football leaders",
      "Meet Chief Guest Micky Adams (England)",
    ],
  },
  CorporateTable: {
    title: "Corporate Table",
    tag: "10 PAX",
    subtitle: "100,000 per table, 9 Aug",
    venue: "Weston Hotel",
    price: getTicketAmount("CorporateTable"),
    icon: Users,
    includes: [
      "Reserved table of 10 at the Launch Dinner",
      "Sports Investment and Partnership Forum access",
      "Corporate recognition on the night",
      "Priority networking access",
    ],
  },
  OpenPlay: {
    title: "Metropol Open Play",
    tag: "SCOUTING",
    subtitle: "5,000 per pax, 10 to 11 Aug",
    venue: "Jaffery Sports Club",
    price: getTicketAmount("OpenPlay"),
    icon: Target,
    includes: [
      "Two days of talent assessment, 10 to 11 Aug",
      "Assessed by international scouts and academies",
      "Technical, tactical and athletic evaluation",
      "For players aged 14 to 20",
    ],
  },
  Workshop: {
    title: "Metropol Workshop",
    tag: "DEVELOPMENT",
    subtitle: "10,000 per pax, 12 to 14 Aug",
    venue: "Jaffery Sports Club",
    price: getTicketAmount("Workshop"),
    icon: GraduationCap,
    includes: [
      "Three days of elite development, 12 to 14 Aug",
      "Led by international facilitators",
      "High performance training and sports science",
      "One on one feedback from a lead facilitator",
    ],
  },
  OpenPlayWorkshop: {
    title: "Open Play & Workshop",
    tag: "FULL PROGRAMME",
    subtitle: "15,000 per pax, 10 to 14 Aug",
    venue: "Jaffery Sports Club",
    price: getTicketAmount("OpenPlayWorkshop"),
    icon: Layers,
    includes: [
      "Full player programme, 10 to 14 Aug",
      "Open Play talent assessment",
      "Elite player development workshops",
      "Best for players serious about scouting",
    ],
  },
};

const SCHEDULE = [
  {
    range: "09 Aug",
    title: "Launch Dinner and Partnership Forum",
    desc: "Official launch, with Chief Guest Micky Adams (England). Weston Hotel.",
  },
  {
    range: "10-11 Aug",
    title: "Open Play Talent Identification",
    desc: "Scouting and assessment for players aged 14 to 20. Jaffery Sports Club.",
  },
  {
    range: "12-14 Aug",
    title: "Elite Player and Coach Workshops",
    desc: "International development sessions for players and coaches. Jaffery Sports Club.",
  },
  {
    range: "15 Aug",
    title: "Showcase Match and Closing Ceremony",
    desc: "PWD curtain raiser, international showcase match, awards.",
  },
];

const STATS = [
  { value: "07", label: "Event Days" },
  { value: "300+", label: "Players Assessed" },
  { value: "30+", label: "Int'l Delegates" },
  { value: "05", label: "Ticket Categories" },
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
    a: `Lipa na M-Pesa, Buy Goods, Till Number ${TILL_NUMBER}. Full steps are shown in the registration form. Enter the exact M-Pesa confirmation code from your payment message when you register.`,
  },
  {
    q: "What's the difference between Open Play, Workshop and the combo?",
    a: "Open Play (10 to 11 Aug) is the scouting and talent assessment. Workshop (12 to 14 Aug) is the elite player and coach development sessions. The combo covers both, 10 to 14 Aug. Both run at Jaffery Sports Club.",
  },
  {
    q: "How does the Corporate Table work?",
    a: "It reserves a table of 10 at the Launch Dinner at Weston Hotel, under one registration. Add your company name on the form.",
  },
  {
    q: "Why does my name need to match the M-Pesa payment?",
    a: "We verify each registration against the M-Pesa payment used to pay for it. If the name on your registration doesn't match the name on the M-Pesa line that made the payment, we may not be able to confirm your ticket without contacting you directly, which can cause delays.",
  },
  {
    q: "Can I get a refund?",
    a: "Contact our support team below and we'll go through the options for your booking.",
  },
];

/* Small reusable "tear line" seam, the perforated edge of a ticket
   stub, complete with the two punched notches at either end. */
const TicketSeam = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="border-t-2 border-dashed border-white/20" />
    <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-background" />
    <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-background" />
  </div>
);

/* Pitch marking divider, a shallow chevron pair, used between sections
   instead of a plain rule so the motif carries through quietly. Kept
   tight on vertical space so sections read as one continuous flow. */
const SectionDivider = () => (
  <div className="flex items-center justify-center gap-2 py-1" aria-hidden="true">
    <span className="h-px w-16 bg-white/10" />
    <svg width="20" height="12" viewBox="0 0 22 14" className="text-accent/60">
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

/* Premium icon-prefixed input wrapper, styled closer to a modern
   payment/checkout field: soft shadow, generous radius, a focus ring
   instead of a hard border swap. Used throughout the registration form. */
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

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-background/60 pl-11 pr-4 py-3.5 outline-none shadow-sm transition-all duration-200 focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/10";

const textareaClass =
  "w-full rounded-2xl border border-white/10 bg-background/60 px-4 py-3.5 outline-none shadow-sm resize-none transition-all duration-200 focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/10";

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

  const [ticketType, setTicketType] = useState<TicketType>("Dinner");
  const countdown = useCountdown(KICKOFF);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    transactionCode: "",
    companyName: "",
    notes: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const selectedPackage = PACKAGES[ticketType];
  const amount = selectedPackage.price;
  const isPlayerTicket =
    ticketType === "OpenPlay" ||
    ticketType === "Workshop" ||
    ticketType === "OpenPlayWorkshop";

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
      notes: "",
    });
    setTicketType("Dinner");
    setConfirmChecked(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setConfirmOpen(true);
  };

  const submitRegistration = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    let composedNotes = "";
    if (ticketType === "CorporateTable" && form.companyName) {
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
        `Thank you for registering, ${firstName}. Your registration number is ${result.registration}. ` +
          `We'll send your confirmation to ${form.email} once your payment is verified.`
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
        title="Metropol Open Play Kenya 2026"
        description="Register for Metropol Open Play Kenya 2026, the Launch Dinner, Open Play talent identification and elite development workshops."
      />

      {/* STICKY REGISTRATION BAR */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-background/90 backdrop-blur shadow-sm">
        <div className="container-pro max-w-6xl flex items-center justify-between gap-3 py-3">
          <span className="font-display text-sm md:text-base truncate">
            Metropol Open Play Kenya 2026
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
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative pt-12 pb-10 overflow-hidden">
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
              <Flame size={15} className="text-accent" />
              The countdown is on — 9 to 15 August 2026
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-7xl">
              Metropol Open Play
              <span className="block text-gradient-gold">Kenya 2026</span>
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed">
              Seven days where scouts, coaches and clubs from around the
              world come looking for the next generation. Football
              scouting, elite development and international pathways for
              players aged 14 to 20 — featuring Chief Guest Micky Adams
              (England).
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <a href="#tickets">
                <Button size="lg">
                  View Ticket Packages
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button size="lg" variant="outline" onClick={() => setDialogOpen(true)}>
                Register Now
              </Button>
            </div>

            <p className="mt-3 text-sm text-foreground/60">
              Tickets from{" "}
              <strong className="text-accent">
                KES {getTicketAmount("Dinner").toLocaleString()}
              </strong>{" "}
              , pay instantly with Lipa na M-Pesa
            </p>
          </div>

          {/* HERO COUNTDOWN — the big, unmissable version, right up top */}
          {!countdown.done && (
            <div className="mt-8 mx-auto max-w-xl rounded-2xl border border-accent/20 bg-gradient-to-b from-accent/10 to-transparent px-6 py-5">
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold tracking-widest text-accent uppercase">
                <Timer size={13} />
                Kicks off in
              </div>
              <div className="mt-3 flex items-center justify-center gap-3 sm:gap-6">
                {[
                  { label: "Days", value: countdown.days },
                  { label: "Hrs", value: countdown.hours },
                  { label: "Min", value: countdown.minutes },
                  { label: "Sec", value: countdown.seconds },
                ].map((unit, i) => (
                  <div key={unit.label} className="flex items-center gap-3 sm:gap-6">
                    <div className="text-center">
                      <div className="font-display text-3xl sm:text-4xl tabular-nums w-14">
                        {String(unit.value).padStart(2, "0")}
                      </div>
                      <div className="mt-1 text-[10px] tracking-widest text-foreground/50 uppercase">
                        {unit.label}
                      </div>
                    </div>
                    {i < 3 && <span className="text-2xl text-accent/30">:</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TICKET PACKAGES, the primary decision on the page, so it leads
          right after the headline. Each card reads like a premium
          match-day pass: a gold foil price strip, a corner category tag,
          and a ticket-stub perforation at the base tying it back to the
          event's overall ticket motif. */}
      <section id="tickets" className="py-14">
        <div className="container-pro max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              TICKET PACKAGES
            </span>
            <h2 className="mt-2 font-display text-4xl">Pick your way in</h2>
            <p className="mt-2 text-foreground/60 text-sm">
              Five ways to be part of Metropol Open Play Kenya 2026.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(Object.keys(PACKAGES) as TicketType[]).map((key) => {
              const pkg = PACKAGES[key];
              const Icon = pkg.icon;
              return (
                <div
                  key={key}
                  className="group relative rounded-3xl flex flex-col border border-white/10 glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(227,167,60,0.3),0_28px_56px_-24px_rgba(0,0,0,0.65)]"
                >
                  {/* thin gold rule across the top, a quiet premium cue
                      shared by every card regardless of tag */}
                  <div className="h-1 w-full bg-gradient-to-r from-accent/30 via-accent to-accent/30" />

                  <div className="flex items-center justify-between px-6 pt-5">
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-accent">
                      {pkg.tag}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 border border-accent/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="text-accent" size={18} />
                    </span>
                  </div>

                  <div className="px-6 pt-4">
                    <h3 className="font-display text-2xl">{pkg.title}</h3>
                    <p className="text-foreground/50 text-xs mt-1.5 flex items-center gap-1.5">
                      <MapPin size={12} className="text-accent/70" />
                      {pkg.venue}
                    </p>
                  </div>

                  <div className="mx-6 mt-4 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/15 to-accent/5 px-5 py-3.5">
                    <p className="text-[10px] tracking-widest text-foreground/50 uppercase">
                      {pkg.subtitle}
                    </p>
                    <span className="mt-1 block font-display text-3xl tabular-nums text-gradient-gold">
                      KES {pkg.price.toLocaleString()}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5 flex-1 px-6">
                    {pkg.includes.map((text) => (
                      <li key={text} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle
                          className="text-accent shrink-0 mt-0.5"
                          size={15}
                        />
                        <span className="text-foreground/80">{text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="px-6 pt-6">
                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={() => handlePackageSelect(key)}
                    >
                      Select {pkg.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* ticket-stub perforation at the base */}
                  <div className="relative mt-6 px-6">
                    <div className="border-t-2 border-dashed border-white/15" />
                    <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-background" />
                    <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-background" />
                  </div>
                  <div className="pb-5" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* EVENT POSTER, moved below the tickets so the pricing decision
          leads and the poster serves as supporting detail rather than
          the first thing on the page. */}
      <section className="py-14">
        <div className="container-pro max-w-6xl">
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl">
              <span className="absolute -top-4 -right-4 z-10 rotate-[8deg] rounded-full bg-accent px-5 py-2 text-xs font-bold tracking-wide text-background shadow-lg">
                ADMIT ONE
              </span>

              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src={featuredImage}
                  alt="Metropol Open Play Kenya 2026"
                  className="w-full max-h-[520px] object-contain bg-black/10"
                />

                <TicketSeam className="mx-6" />

                <div className="grid grid-cols-3 divide-x divide-white/10 text-center py-4">
                  <div>
                    <div className="text-[11px] tracking-widest text-foreground/50">
                      LAUNCH
                    </div>
                    <div className="mt-1 font-display text-lg">9 Aug</div>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-widest text-foreground/50">
                      VENUE
                    </div>
                    <div className="mt-1 font-display text-base">
                      Jaffery Sports Club
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-widest text-foreground/50">
                      DURATION
                    </div>
                    <div className="mt-1 font-display text-lg">7 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCOREBOARD */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 px-6 py-6">
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

      <SectionDivider />

      {/* SCHEDULE */}
      <section id="highlights" className="py-14">
        <div className="container-pro max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              SCHEDULE
            </span>
            <h2 className="mt-2 font-display text-4xl">Four phases, one event</h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {SCHEDULE.map((item) => (
              <div
                key={item.range}
                className="glass rounded-2xl p-6 border border-white/10 transition-colors hover:border-accent/30"
              >
                <span className="inline-block rounded-full bg-accent/10 border border-accent/30 px-3 py-1 text-xs font-semibold text-accent tabular-nums">
                  {item.range}
                </span>
                <h4 className="font-semibold text-lg mt-3">{item.title}</h4>
                <p className="text-foreground/70 mt-1 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 glass rounded-2xl p-5 border border-white/10 flex items-center gap-3">
            <Star className="text-accent shrink-0" size={20} />
            <p className="text-sm text-foreground/80">
              <strong>Chief Guest:</strong> Micky Adams (England), former
              professional football manager and international football
              development expert.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section id="faq" className="py-14">
        <div className="container-pro max-w-4xl">
          <div className="text-center">
            <span className="text-sm text-accent font-semibold tracking-wide">
              FAQ
            </span>
            <h2 className="mt-2 font-display text-4xl">Common questions</h2>
          </div>

          <div className="mt-8 space-y-2.5">
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
      <section id="contact" className="pb-20">
        <div className="container-pro max-w-6xl">
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-sm text-accent font-semibold tracking-wide">
                SUPPORT
              </span>
              <h2 className="mt-2 font-display text-3xl">Need a hand?</h2>
              <p className="mt-1.5 text-sm text-foreground/60">
                We're quick to respond — reach out any way that suits you.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <a
                href="mailto:hallo@fcmetropolhp.com"
                className="glass rounded-2xl p-5 flex items-center gap-3 border border-white/10 transition-colors hover:border-accent/30"
              >
                <Mail className="text-accent" size={20} />
                <div className="text-sm text-foreground/70">
                  hallo@fcmetropolhp.com
                </div>
              </a>
              <a
                href="tel:+254708666576"
                className="glass rounded-2xl p-5 flex items-center gap-3 border border-white/10 transition-colors hover:border-accent/30"
              >
                <Phone className="text-accent" size={20} />
                <div className="text-sm text-foreground/70">
                  +254 708 666 576
                </div>
              </a>
              <a
                href="https://www.fcmetropolhp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-3 border border-white/10 transition-colors hover:border-accent/30"
              >
                <Globe className="text-accent" size={20} />
                <div className="text-sm text-foreground/70">
                  fcmetropolhp.com
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
                    Pick your ticket, pay via Lipa na M-Pesa, then confirm.
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            {/* STEP 1 - Package */}
            <div className="mt-7">
              <span className="text-[11px] font-semibold tracking-widest text-foreground/40">
                01 · TICKET
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                {(Object.keys(PACKAGES) as TicketType[]).map((key) => {
                  const pkg = PACKAGES[key];
                  const Icon = pkg.icon;
                  const active = ticketType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTicketType(key)}
                      className={`rounded-2xl border p-4 text-center transition-all duration-200 ${
                        active
                          ? "border-accent bg-accent/10 shadow-md scale-[1.02]"
                          : "border-white/10 bg-background/60 hover:border-white/20 hover:bg-background"
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
                        KES {pkg.price.toLocaleString()}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2 - Pay */}
            <div className="mt-7">
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

                <div className="mt-3 rounded-xl bg-background/50 px-4 py-3 text-sm">
                  <span className="text-foreground/60">Amount to pay </span>
                  <strong className="text-accent tabular-nums">
                    KES {amount.toLocaleString()}
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

                {/* Name-matching disclaimer */}
                <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 flex items-start gap-3">
                  <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-foreground/80 leading-relaxed">
                    <strong className="text-amber-500">Important: </strong>
                    pay using the M-Pesa line registered to the same name you
                    enter below. If the payer name and the registration name
                    don't match, we may not be able to verify your ticket
                    without contacting you directly, which can delay it.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 3 - Details */}
            <form onSubmit={handleFormSubmit} className="mt-7">
              <span className="text-[11px] font-semibold tracking-widest text-foreground/40">
                03 · YOUR DETAILS
              </span>

              <div className="mt-3 space-y-4">
                <div>
                  <IconField icon={User}>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                      placeholder={isPlayerTicket ? "Player full name" : "Full name"}
                    />
                  </IconField>
                  <p className="mt-1.5 text-xs text-foreground/50">
                    Use the same name registered on the M-Pesa line used to
                    pay above.
                  </p>
                </div>

                <IconField icon={Mail}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={fieldClass}
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
                      className={fieldClass}
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
                      className={fieldClass}
                      placeholder="Country"
                    />
                  </IconField>
                </div>

                {ticketType === "CorporateTable" && (
                  <IconField icon={Building2}>
                    <input
                      type="text"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                      placeholder="Company name"
                    />
                  </IconField>
                )}

                <textarea
                  rows={2}
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  className={textareaClass}
                  placeholder="Additional notes (optional)"
                />

                {/* Transaction code is the last field, deliberately */}
                <div>
                  <IconField icon={Receipt}>
                    <input
                      type="text"
                      name="transactionCode"
                      value={form.transactionCode}
                      onChange={handleChange}
                      required
                      placeholder="M-Pesa transaction code, e.g. UG45CA77YR"
                      className={fieldClass}
                    />
                  </IconField>
                  <p className="mt-1.5 text-xs text-foreground/50">
                    Copy the exact code from your M-Pesa confirmation
                    message, the letters and numbers at the very start,
                    e.g. "UG45CA77YR Confirmed...". An incorrect or
                    mistyped code cannot be verified and will delay your
                    ticket.
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
                Review and Confirm Payment
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
              Please double check the details below before we submit your
              registration.
            </p>

            <div className="mt-4 rounded-xl border border-white/10 bg-background/60 divide-y divide-white/10 text-sm">
              <div className="flex justify-between px-4 py-3">
                <span className="text-foreground/60">Ticket</span>
                <strong>{selectedPackage.title}</strong>
              </div>
              <div className="flex justify-between px-4 py-3">
                <span className="text-foreground/60">Venue</span>
                <strong>{selectedPackage.venue}</strong>
              </div>
              <div className="flex justify-between px-4 py-3">
                <span className="text-foreground/60">Amount</span>
                <strong className="text-accent tabular-nums">
                  KES {amount.toLocaleString()}
                </strong>
              </div>
              <div className="flex justify-between px-4 py-3">
                <span className="text-foreground/60">Transaction Code</span>
                <strong>{form.transactionCode || "-"}</strong>
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
                I confirm I have completed this M-Pesa payment using the
                same name as this registration, and the transaction code
                above is correct.
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
                {loading ? "Submitting..." : "Confirm and Reserve"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventsPage;
