import { useEffect, useMemo, useRef, useState } from "react";
import { SEO } from "@/components/SEO";
import {
  registerAttendee,
  getTicketAmount,
  TicketType,
  MAX_QUANTITY,
  getTotalAmount,
  hasGroupDiscount,
} from "@/lib/eventRegistration";

import {
  Calendar,
  MapPin,
  Ticket,
  Smartphone,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Check,
  Copy,
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
  Quote,
  MessageCircle,
  LifeBuoy,
  Heart,
  Search,
  Handshake,
  ShieldCheck,
  ClipboardCheck,
  Minus,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const featuredImage = "/event1.jpeg";
const PAYBILL_NUMBER = "533522";
const ACCOUNT_NUMBER = "7921970";
const KICKOFF = new Date("2026-08-09T00:00:00+03:00");
const EVENT_ENDS = new Date("2026-08-15T23:59:59+03:00");

// This page's self-serve registration dialog only ever handles the
// five real attendee/corporate ticket types. Sponsorship tiers exist
// in the shared TicketType union (see eventRegistration.ts) but are
// deliberately excluded here — a sponsorship is a conversation, not a
// form (see the AUDIENCES config below, and the "Request Partner
// Brief" flow), so they're routed to a pre-filled email instead of
// this dialog rather than appearing as a sixth-through-tenth ticket
// card here.
type AttendeeTicketType = Exclude<
  TicketType,
  "StrategicTitle" | "Platinum" | "Gold" | "Silver" | "Bronze"
>;

const PACKAGES: Record<
  AttendeeTicketType,
  {
    title: string;
    tag: string;
    subtitle: string;
    venue: string;
    price: number;
    icon: typeof User;
    includes: string[];
    audience: string;
    unitLabel: string;
    featured?: boolean;
  }
> = {
  Dinner: {
    title: "Dinner Launch",
    tag: "GALA",
    subtitle: "5,000 per person, 9 Aug · 6PM–10PM",
    venue: "Weston Hotel",
    price: getTicketAmount("Dinner"),
    icon: Utensils,
    audience: "For adults & business professionals",
    unitLabel: "ticket",
    includes: [
      "Official Launch Dinner, 9 Aug",
      "Sports Investment and Partnership Forum",
      "Networking with government, corporate and football leaders",
      "Meet Chief Guest Micky Adams (England)",
    ],
  },
  OpenPlay: {
    title: "Metropol Open Play",
    tag: "SCOUTING",
    subtitle: "5,000 per pax, 10 to 11 Aug · 8AM–5PM",
    venue: "Nyayo Stadium, Nairobi",
    price: getTicketAmount("OpenPlay"),
    icon: Target,
    audience: "For players, aged 14 to 20",
    unitLabel: "ticket",
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
    venue: "Nyayo Stadium",
    price: getTicketAmount("Workshop"),
    icon: GraduationCap,
    audience: "For players",
    unitLabel: "ticket",
    includes: [
      "Three days of elite development, 12 to 14 Aug",
      "Led by international facilitators",
      "High performance training and sports science",
      "One on one feedback from a lead facilitator",
    ],
  },
  CoachesWorkshop: {
    title: "Coaches Workshop",
    tag: "COACH ED",
    subtitle: "5,000 per pax, 12 to 14 Aug",
    venue: "Nyayo Stadium",
    price: getTicketAmount("CoachesWorkshop"),
    icon: ClipboardCheck,
    audience: "For coaches",
    unitLabel: "ticket",
    includes: [
      "Three days of coach education, 12 to 14 Aug",
      "Coaching methodology and sports science",
      "Led by international facilitators",
      "Certificate of participation",
    ],
  },
  OpenPlayWorkshop: {
    title: "Open Play & Workshop",
    tag: "FULL PROGRAMME",
    subtitle: "15,000 per pax, 10 to 14 Aug",
    venue: "Nyayo Stadium",
    price: getTicketAmount("OpenPlayWorkshop"),
    icon: Layers,
    audience: "For players",
    unitLabel: "ticket",
    includes: [
      "Full player programme, 10 to 14 Aug",
      "Open Play talent assessment",
      "Elite player development workshops",
      "Best for players serious about scouting",
    ],
  },
  CorporateTable: {
    title: "Corporate Table",
    tag: "10 PAX",
    subtitle: "100,000 per table, 9 Aug · 6PM–10PM",
    venue: "Weston Hotel",
    price: getTicketAmount("CorporateTable"),
    icon: Users,
    audience: "For organisations",
    unitLabel: "table",
    featured: true,
    includes: [
      "Reserved table of 10 at the Launch Dinner",
      "Sports Investment and Partnership Forum access",
      "Corporate recognition on the night",
      "Priority networking access",
    ],
  },
};

const SCHEDULE = [
  {
    range: "09 Aug",
    title: "Launch Dinner and Partnership Forum",
    desc: "Official launch, with Chief Guest Micky Adams (England), 6PM to 10PM.",
    venue: "Weston Hotel",
  },
  {
    range: "10-11 Aug",
    title: "Open Play Talent Identification",
    desc: "Scouting and assessment for players aged 14 to 20, 8AM to 5PM.",
    venue: "Nyayo Stadium",
  },
  {
    range: "12-14 Aug",
    title: "Elite Player and Coach Workshops",
    desc: "International development sessions for players and coaches.",
    venue: "Nyayo Stadium",
  },
  {
    range: "15 Aug",
    title: "Showcase Match and Closing Ceremony",
    desc: "PWD curtain raiser, international showcase match, awards.",
    venue: "Nyayo Stadium",
  },
];

const STATS = [
  { value: "07", label: "Event Days" },
  { value: "300+", label: "Players Assessed" },
  { value: "30+", label: "Int'l Delegates" },
  { value: "05", label: "Ticket Categories" },
];

const PARTNERS = [
  "FC Metropol, Estonia",
  "IFG Macclesfield, England",
  "TMR Sports, Brazil",
  "FC Atlético Mineira, Brazil",
  "Football 7 Worldwide",
];

const CONTACTS = {
  ticketPhone: "0720496076",
  ticketWhatsapp: "https://wa.me/254720496076",
  eventPhone: "+254 708 666576",
  eventTel: "+254708666576",
  eventWhatsapp: "https://wa.me/254708666576",
  email: "hallo@fcmetropolhp.com",
};

const PAY_STEPS = [
  "Go to M-Pesa on your phone",
  "Select Lipa na M-Pesa",
  "Select Pay Bill",
  `Enter Business Number: ${PAYBILL_NUMBER}`,
  `Enter Account Number: ${ACCOUNT_NUMBER}`,
  "Enter the amount shown above",
  "Enter your M-Pesa PIN and confirm",
];

const PARTNER_TIERS = [
  { name: "Strategic Title Partner", amount: "KES 7,500,000+", note: "Official naming rights, category exclusivity" },
  { name: "Platinum Partner", amount: "KES 3,000,000 - 7,499,999", note: "Premium branding, launch dinner recognition" },
  { name: "Gold Partner", amount: "KES 1,500,000 - 2,999,999", note: "High level branding, hospitality" },
  { name: "Silver Partner", amount: "KES 750,000 - 1,499,999", note: "Branding and event access" },
  { name: "Bronze Partner", amount: "KES 250,000 - 749,999", note: "Partner recognition, logo placement" },
];

const REGISTRATION_JOURNEY = [
  { title: "Register and pay", desc: "Pick a ticket, pay via Lipa na M-Pesa, and submit your details." },
  { title: "We verify your payment", desc: "Your M-Pesa transaction is checked against your registration." },
  { title: "Your ticket is confirmed", desc: "You receive a confirmation email with your ticket and QR code." },
  { title: "Arrive and check in", desc: "Show your ticket at the gate, that's all you need." },
];

const FAQS = [
  {
    q: "How do I pay?",
    a: `Lipa na M-Pesa, Pay Bill, Business Number ${PAYBILL_NUMBER}, Account Number ${ACCOUNT_NUMBER}. Full steps are shown in the registration form. Enter the exact M-Pesa confirmation code from your payment message when you register.`,
  },
  {
    q: "What's the difference between Open Play, Workshop and the combo?",
    a: "Open Play (10 to 11 Aug, 8AM to 5PM) is the scouting and talent assessment. Workshop (12 to 14 Aug) is the elite player and coach development sessions. Both run at Nyayo Stadium. The combo covers both, 10 to 14 Aug.",
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
    q: "Is this event suitable for players under 18?",
    a: "Yes. Open Play and Workshop are open to players aged 14 to 20. A parent or guardian can register on a player's behalf, and our team is reachable throughout for any welfare or safeguarding questions before, during or after the event.",
  },
  {
    q: "How can coaches, academies, scouts or sponsors get involved?",
    a: "Use the audience section near the top of this page to submit team or academy interest, express scouting interest, or request a partnership brief. You can also reach us directly using the contact details below.",
  },
  {
    q: "Can I get a refund?",
    a: "Contact our support team below and we'll go through the options for your booking.",
  },
];

const TicketSeam = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="border-t-2 border-dashed border-white/20" />
    <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-background" />
    <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-background" />
  </div>
);

const SectionDivider = () => (
  <div className="flex items-center justify-center gap-2" aria-hidden="true">
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
  "w-full rounded-2xl border border-white/10 bg-background/60 pl-11 pr-4 py-3.5 outline-none shadow-sm transition-all duration-200 focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/10 text-base";

const textareaClass =
  "w-full rounded-2xl border border-white/10 bg-background/60 px-4 py-3.5 outline-none shadow-sm resize-none transition-all duration-200 focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/10 text-base";

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
    return { days, hours, minutes, seconds, done: diff === 0, now };
  }, [now, target]);
}

type EventPhase = "upcoming" | "live" | "ended";
function getEventPhase(now: number, start: Date, end: Date): EventPhase {
  if (now < start.getTime()) return "upcoming";
  if (now <= end.getTime()) return "live";
  return "ended";
}

type Step = "ticket" | "pay" | "details" | "confirm";
const STEP_ORDER: Step[] = ["ticket", "pay", "details", "confirm"];
const STEP_LABELS: Record<Step, string> = {
  ticket: "Ticket",
  pay: "Payment",
  details: "Your details",
  confirm: "Confirm",
};

const EventsPage = () => {
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [step, setStep] = useState<Step>("ticket");
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [ticketType, setTicketType] = useState<AttendeeTicketType>("Dinner");
  const [quantity, setQuantity] = useState(1);
  const countdown = useCountdown(KICKOFF);
  const eventPhase = getEventPhase(countdown.now, KICKOFF, EVENT_ENDS);

  const mountedRef = useRef(true);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

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
  const [posterImageFailed, setPosterImageFailed] = useState(false);

  // Tracks which payment field (paybill or account) was just copied, so
  // the button can briefly show "Copied" before reverting. Cleared
  // automatically after a couple of seconds.
  const [copiedField, setCopiedField] = useState<"paybill" | "account" | null>(
    null
  );

  const copyToClipboard = (value: string, field: "paybill" | "account") => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopiedField(field);
        setTimeout(() => setCopiedField((current) => (current === field ? null : current)), 2000);
      })
      .catch(() => {
        // Clipboard access can fail (older browsers, permissions, etc.) —
        // the numbers are still visible and selectable by hand, so this
        // is a silent no-op rather than surfacing an error for something
        // this minor.
      });
  };

  const selectedPackage = PACKAGES[ticketType];
  const amount = getTotalAmount(ticketType, quantity);
  const isGroupDiscountEligible = hasGroupDiscount(ticketType);
  const groupDiscountActive = isGroupDiscountEligible && quantity === MAX_QUANTITY;
  const isPlayerTicket =
    ticketType === "OpenPlay" ||
    ticketType === "Workshop" ||
    ticketType === "OpenPlayWorkshop";

  const stepIndex = STEP_ORDER.indexOf(step);

  const detailsValid =
    form.fullName.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.phone.replace(/\D/g, "").length >= 9 &&
    form.country.trim().length > 0 &&
    form.transactionCode.trim().length >= 6 &&
    (ticketType !== "CorporateTable" || form.companyName.trim().length > 0);

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

  const openRegistration = (key?: AttendeeTicketType) => {
    if (key) setTicketType(key);
    setQuantity(1);
    setStep("ticket");
    setError("");
    setSuccess("");
    setDialogOpen(true);
  };

  const AUDIENCES = [
    {
      title: "Players",
      icon: Target,
      desc: "A chance to be seen, learn, develop and open pathway conversations with international scouts and clubs.",
      cta: "Register as a Player",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        openRegistration("OpenPlay");
      },
    },
    {
      title: "Parents",
      icon: Heart,
      desc: "A structured, supervised football development experience for your child, with safety and welfare at the centre.",
      cta: "Register My Child",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        openRegistration("OpenPlay");
      },
    },
    {
      title: "Coaches and Academies",
      icon: GraduationCap,
      desc: "Expose your players and staff to international technical standards, workshops and pathway opportunities.",
      cta: "Register for Coaches Workshop",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        openRegistration("CoachesWorkshop");
      },
    },
    {
      title: "Scouts and Clubs",
      icon: Search,
      desc: "A structured, week long window to engage and assess Kenyan youth talent alongside international peers.",
      cta: "Register for Open Play",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        openRegistration("OpenPlay");
      },
    },
    {
      title: "Sponsors and Partners",
      icon: Handshake,
      desc: "A platform for youth development, inclusion, community engagement and sports economy visibility.",
      cta: "Chat With Us on WhatsApp",
      href: CONTACTS.eventWhatsapp,
      target: "_blank" as const,
    },
  ];

  const goNext = () => {
    const idx = STEP_ORDER.indexOf(step);
    if (idx < STEP_ORDER.length - 1) setStep(STEP_ORDER[idx + 1]);
  };

  const goBack = () => {
    const idx = STEP_ORDER.indexOf(step);
    if (idx > 0) setStep(STEP_ORDER[idx - 1]);
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
    setQuantity(1);
    setConfirmChecked(false);
    setStep("ticket");
  };

  const submitRegistration = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    let composedNotes = "";
    if (groupDiscountActive) {
      composedNotes += `Group rate applied (${MAX_QUANTITY} x ${selectedPackage.title})`;
    }
    if (ticketType === "CorporateTable" && form.companyName) {
      composedNotes += composedNotes
        ? ` | Company: ${form.companyName}`
        : `Company: ${form.companyName}`;
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
      quantity,
      notes: composedNotes,
    };

    try {
      const result = await registerAttendee(payload);

      if (!mountedRef.current) return;

      if (result.success) {
        const firstName = form.fullName.trim().split(" ")[0] || "there";
        setSuccess(
          `Thank you for registering, ${firstName}. Your registration number is ${result.registration}. ` +
            `We'll send your confirmation to ${form.email} once your payment is verified.`
        );
      } else {
        setError(result.error || "Registration failed.");
      }
    } catch (err) {
      if (!mountedRef.current) return;
      setError("Something went wrong submitting your registration. Please try again.");
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Metropol Open Play Kenya 2026"
        description="Register for Metropol Open Play Kenya 2026, the Launch Dinner, Open Play talent identification and elite development workshops."
      />

      <div
        aria-hidden="true"
        className="fixed inset-0 -z-50 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="sticky top-0 z-40 border-b border-white/10 bg-background/90 backdrop-blur shadow-sm">
        <div className="container-pro max-w-6xl flex items-center justify-between gap-3 py-3">
          <span className="font-display text-sm md:text-base truncate">
            Metropol Open Play Kenya 2026
          </span>

          <div className="flex items-center gap-3">
            {eventPhase === "upcoming" && (
              <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs tabular-nums">
                <Timer size={13} className="text-accent" />
                <span>
                  {countdown.days}d {String(countdown.hours).padStart(2, "0")}h{" "}
                  {String(countdown.minutes).padStart(2, "0")}m to kickoff
                </span>
              </div>
            )}
            {eventPhase === "live" && (
              <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-semibold text-accent">Happening now</span>
              </div>
            )}
            <Button onClick={() => openRegistration()}>
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <section className="relative pt-10 pb-8 overflow-hidden">
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
            <p className="text-[11px] font-semibold tracking-[0.25em] text-foreground/40 uppercase">
              An International Football Development Event
            </p>

            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs sm:text-sm">
              {eventPhase === "live" ? (
                <>
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  Live now, 9 to 15 August 2026
                </>
              ) : eventPhase === "ended" ? (
                <>
                  <CheckCircle size={15} className="text-accent shrink-0" />
                  9 to 15 August 2026, thank you for being part of it
                </>
              ) : (
                <>
                  <Flame size={15} className="text-accent shrink-0" />
                  The countdown is on, 9 to 15 August 2026
                </>
              )}
            </span>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl">
              Metropol Open Play
              <span className="block text-gradient-gold">Kenya 2026</span>
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-foreground/70 leading-relaxed">
              Not just trials. A structured pathway platform bringing
              international football expertise to Nairobi, connecting
              Kenya's next generation to talent identification, coaching,
              education and long term opportunity, featuring Chief Guest
              Micky Adams (England).
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              <a href="#tickets" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  View Ticket Packages
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => openRegistration()}
              >
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

            <p className="mt-4 text-xs text-foreground/50">
              Here for someone specific?{" "}
              <a href="#audience" className="text-accent hover:underline">
                Players & Parents
              </a>
              {" · "}
              <a href="#audience" className="text-accent hover:underline">
                Coaches & Academies
              </a>
              {" · "}
              <a href="#audience" className="text-accent hover:underline">
                Scouts & Clubs
              </a>
              {" · "}
              <a href="#audience" className="text-accent hover:underline">
                Sponsors & Partners
              </a>
            </p>
          </div>

          {eventPhase === "upcoming" && (
            <div className="mt-8 mx-auto max-w-xl rounded-2xl border border-accent/20 bg-gradient-to-b from-accent/10 to-transparent px-4 sm:px-6 py-4 sm:py-5 shadow-[0_20px_40px_-24px_rgba(227,167,60,0.25)]">
              <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-widest text-accent uppercase">
                <Timer size={13} />
                Kicks off in
              </div>
              <div className="mt-3 flex items-center justify-center gap-1.5 sm:gap-6">
                {[
                  { label: "Days", value: countdown.days },
                  { label: "Hrs", value: countdown.hours },
                  { label: "Min", value: countdown.minutes },
                  { label: "Sec", value: countdown.seconds },
                ].map((unit, i) => (
                  <div key={unit.label} className="flex items-center gap-1.5 sm:gap-6">
                    <div className="text-center min-w-[2.5rem] sm:min-w-[3.5rem]">
                      <div className="font-display text-xl sm:text-4xl tabular-nums">
                        {String(unit.value).padStart(2, "0")}
                      </div>
                      <div className="mt-1 text-[9px] sm:text-[10px] tracking-widest text-foreground/50 uppercase">
                        {unit.label}
                      </div>
                    </div>
                    {i < 3 && (
                      <span className="text-lg sm:text-2xl text-accent/30">:</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {eventPhase === "live" && (
            <div className="mt-8 mx-auto max-w-xl rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/10 to-transparent px-6 py-5 text-center">
              <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest text-accent uppercase">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Event in progress
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Metropol Open Play Kenya 2026 is live, 9 to 15 August. Some
                ticket categories may have closed, contact us below to
                check availability.
              </p>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-center text-[10px] tracking-[0.2em] text-foreground/40 uppercase mb-4">
              Scouting alongside international partners
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {PARTNERS.map((p) => (
                <span
                  key={p}
                  className="text-sm text-foreground/50 font-display tracking-wide"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tickets" className="py-8 sm:py-10 scroll-mt-16">
        <div className="container-pro max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              TICKET PACKAGES
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Pick your way in
            </h2>
            <p className="mt-2 text-foreground/60 text-sm">
              Six ways to be part of Metropol Open Play Kenya 2026.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(Object.keys(PACKAGES) as AttendeeTicketType[]).map((key) => {
              const pkg = PACKAGES[key];
              const Icon = pkg.icon;
              return (
                <div
                  key={key}
                  className={`group relative rounded-3xl flex flex-col glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                    pkg.featured
                      ? "border-2 border-accent/40 shadow-[0_0_0_1px_rgba(227,167,60,0.25),0_28px_56px_-24px_rgba(0,0,0,0.65)]"
                      : "border border-white/10 hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(227,167,60,0.3),0_28px_56px_-24px_rgba(0,0,0,0.65)]"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 40%, rgba(227,167,60,0.06) 50%, transparent 60%)",
                    }}
                  />

                  {pkg.featured && (
                    <div className="bg-accent px-4 py-1.5 text-center text-[10px] font-bold tracking-widest text-background">
                      MOST RESERVED FOR PARTNERS
                    </div>
                  )}

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
                    <span className="mt-2 inline-block rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] font-medium text-foreground/60">
                      {pkg.audience}
                    </span>
                  </div>

                  <div className="mx-6 mt-4 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/15 to-accent/5 px-5 py-3.5">
                    <p className="text-[10px] tracking-widest text-foreground/50 uppercase">
                      {pkg.subtitle}
                    </p>
                    <span className="mt-1 block font-display text-3xl tabular-nums text-gradient-gold">
                      KES {pkg.price.toLocaleString()}
                    </span>
                    {hasGroupDiscount(key) && (
                      <p className="mt-1.5 text-[11px] text-accent font-medium">
                        Group of {MAX_QUANTITY}: KES{" "}
                        {getTotalAmount(key, MAX_QUANTITY).toLocaleString()}{" "}
                        total
                      </p>
                    )}
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
                      variant={pkg.featured ? "default" : "outline"}
                      onClick={() => openRegistration(key)}
                    >
                      Select {pkg.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

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


      <section className="py-8 sm:py-10">
        <div className="container-pro max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              WHY THIS MATTERS
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Not just trials, a pathway platform
            </h2>
            <p className="mt-3 text-foreground/70 leading-relaxed">
              International clubs, coaches and scouts from Europe and
              South America are coming directly to Nairobi, so talent
              identification, coach education, academic pathways and real
              football opportunity happen here, not somewhere players
              have to travel to find them.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Target,
                title: "Talent Identification",
                desc: "Direct exposure to international scouts, clubs and academies.",
              },
              {
                icon: GraduationCap,
                title: "Coach Education",
                desc: "Development workshops for coaches and administrators.",
              },
              {
                icon: Layers,
                title: "Football & Academic Pathways",
                desc: "Links to scholarship and education opportunities abroad.",
              },
              {
                icon: Handshake,
                title: "Sports Commercialisation",
                desc: "Investment, tourism and partnership opportunity for Kenya.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass rounded-2xl p-5 border border-white/10 text-center"
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 border border-accent/20 mb-3">
                    <Icon className="text-accent" size={20} />
                  </span>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="mt-1.5 text-xs text-foreground/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="audience" className="py-8 sm:py-10 scroll-mt-16">
        <div className="container-pro max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              WHO THIS IS FOR
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Built for everyone around the game
            </h2>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUDIENCES.map((aud) => {
              const Icon = aud.icon;
              return (
                <div
                  key={aud.title}
                  className="glass rounded-2xl p-6 border border-white/10 flex flex-col"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/20 mb-4">
                    <Icon className="text-accent" size={18} />
                  </span>
                  <h3 className="font-semibold text-lg">{aud.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed flex-1">
                    {aud.desc}
                  </p>
                  <a
                    href={aud.href || "#"}
                    onClick={aud.onClick}
                    target={aud.target}
                    rel={aud.target ? "noopener noreferrer" : undefined}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    {aud.cta}
                    <ArrowRight size={14} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-8 sm:py-10">
        <div className="container-pro max-w-6xl">
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl">
              <span className="absolute -top-4 -right-4 z-10 rotate-[8deg] rounded-full bg-accent px-5 py-2 text-xs font-bold tracking-wide text-background shadow-lg">
                ADMIT ONE
              </span>

              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                {posterImageFailed ? (
                  <div className="w-full h-[320px] flex flex-col items-center justify-center gap-3 bg-black/20 text-center px-6">
                    <Ticket className="text-accent/60" size={36} />
                    <p className="font-display text-xl">
                      Metropol Open Play Kenya 2026
                    </p>
                    <p className="text-sm text-foreground/50">
                      9 to 15 August, Weston Hotel and Nyayo Stadium
                    </p>
                  </div>
                ) : (
                  <img
                    src={featuredImage}
                    alt="Metropol Open Play Kenya 2026"
                    className="w-full max-h-[520px] object-contain bg-black/10"
                    onError={() => setPosterImageFailed(true)}
                  />
                )}
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
                      Nairobi
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

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-6 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {STATS.map((s) => (
                <div key={s.label} className="text-center px-2">
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl tabular-nums text-gradient-gold">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[11px] sm:text-xs tracking-widest text-foreground/60 uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-8 sm:py-10">
        <div className="container-pro max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              INTERNATIONAL LEADERSHIP
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              The team behind the opportunity
            </h2>
          </div>

          <div className="mt-8 glass-card rounded-3xl border border-white/10 p-8 md:p-10 relative overflow-hidden">
            <Quote
              className="absolute -top-2 -left-2 text-accent/10"
              size={100}
              aria-hidden="true"
            />
            <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <span className="shrink-0 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 border-2 border-accent/30 font-display text-2xl text-accent">
                MA
              </span>
              <div>
                <span className="inline-block rounded-full bg-accent/10 border border-accent/30 px-3 py-1 text-[10px] font-semibold tracking-widest text-accent">
                  CHIEF GUEST
                </span>
                <h3 className="mt-3 font-display text-2xl">Micky Adams</h3>
                <p className="text-foreground/60 text-sm mt-0.5">England</p>
                <p className="mt-3 text-foreground/80 leading-relaxed">
                  Former professional football manager and international
                  football development expert, headlining the Launch
                  Dinner and Sports Investment and Partnership Forum on 9
                  August at Weston Hotel.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-5">
            {[
              {
                initials: "OS",
                name: "Oliver Schlegl",
                country: "Latvia",
                role: "International Football Development Specialist, leading elite workshop sessions.",
              },
              {
                initials: "ER",
                name: "Eduardo Raupp",
                country: "Brazil",
                role: "Football Development and International Player Placement Specialist.",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="glass rounded-2xl p-6 border border-white/10 flex items-start gap-4"
              >
                <span className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 border border-accent/30 font-display text-lg text-accent">
                  {person.initials}
                </span>
                <div>
                  <h4 className="font-semibold">{person.name}</h4>
                  <p className="text-foreground/50 text-xs mt-0.5">
                    {person.country}
                  </p>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="highlights" className="py-8 sm:py-10 scroll-mt-16">
        <div className="container-pro max-w-4xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              PROGRAMME
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Seven days, four chapters
            </h2>
          </div>

          <div className="mt-8 relative">
            <div className="absolute left-[27px] sm:left-[35px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent" />
            <div className="space-y-8">
              {SCHEDULE.map((item, i) => (
                <div key={item.range} className="relative flex gap-5 sm:gap-7">
                  <div className="shrink-0 flex flex-col items-center">
                    <span className="flex h-14 w-14 sm:h-[70px] sm:w-[70px] items-center justify-center rounded-2xl bg-accent/10 border border-accent/30 font-display text-sm text-accent tabular-nums text-center leading-tight px-1">
                      {item.range}
                    </span>
                  </div>
                  <div className="glass rounded-2xl p-5 sm:p-6 border border-white/10 flex-1 transition-colors hover:border-accent/30">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <span className="text-[10px] tracking-widest text-foreground/50 uppercase whitespace-nowrap flex items-center gap-1">
                        <MapPin size={11} className="text-accent/70" />
                        {item.venue}
                      </span>
                    </div>
                    <p className="text-foreground/70 mt-1.5 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-8 sm:py-10">
        <div className="container-pro max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              PLAYER WELFARE
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Built with safety at the centre
            </h2>
            <p className="mt-3 text-foreground/70 leading-relaxed">
              For a youth event covering ages 14 to 20, parent and
              guardian confidence matters as much as talent
              identification does.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: ShieldCheck,
                title: "Clear age categories",
                desc: "Open Play and Workshop are structured for players aged 14 to 20, assessed by qualified international staff.",
              },
              {
                icon: Heart,
                title: "Medical support on site",
                desc: "First aid and medical readiness are part of the event's planning, alongside insurance for participants.",
              },
              {
                icon: Users,
                title: "Guardian registration",
                desc: "A parent or guardian can register a player under 18 directly, using their own contact details.",
              },
              {
                icon: LifeBuoy,
                title: "A direct line to us",
                desc: "Parents can reach our team before, during or after the event with any welfare or safeguarding question, see the contacts below.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass rounded-2xl p-5 border border-white/10 flex items-start gap-4"
                >
                  <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                    <Icon className="text-accent" size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="partners" className="py-8 sm:py-10 scroll-mt-16">
        <div className="container-pro max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              PARTNER WITH US
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Support youth development and sport
            </h2>
            <p className="mt-3 text-foreground/70 leading-relaxed">
              Organisations can back Metropol Open Play Kenya 2026
              financially, in kind, technically, strategically or
              through media, at a level that fits their goals.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 overflow-hidden">
            {PARTNER_TIERS.map((tier, i) => (
              <div
                key={tier.name}
                className={`flex items-center justify-between gap-4 px-5 py-4 flex-wrap ${
                  i % 2 === 0 ? "bg-white/[0.02]" : ""
                } ${i > 0 ? "border-t border-white/10" : ""}`}
              >
                <div>
                  <p className="font-semibold text-sm">{tier.name}</p>
                  <p className="text-xs text-foreground/50 mt-0.5">
                    {tier.note}
                  </p>
                </div>
                <span className="text-sm font-semibold text-accent tabular-nums whitespace-nowrap">
                  {tier.amount}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href={`mailto:${CONTACTS.email}?subject=${encodeURIComponent(
                "Partnership Brief Request, Metropol Open Play Kenya 2026"
              )}`}
            >
              <Button size="lg">
                Request Partner Brief
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-8 sm:py-10">
        <div className="container-pro max-w-4xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-accent font-semibold tracking-wide">
              HOW IT WORKS
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              What happens after you register
            </h2>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REGISTRATION_JOURNEY.map((step, i) => (
              <div
                key={step.title}
                className="glass rounded-2xl p-5 border border-white/10 text-center"
              >
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 border border-accent/20 mb-3 font-display text-sm text-accent">
                  {i + 1}
                </span>
                <h4 className="font-semibold text-sm">{step.title}</h4>
                <p className="mt-1.5 text-xs text-foreground/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="faq" className="py-8 sm:py-10 scroll-mt-16">
        <div className="container-pro max-w-4xl">
          <div className="text-center">
            <span className="text-sm text-accent font-semibold tracking-wide">
              FAQ
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Common questions
            </h2>
          </div>

          <div className="mt-6 space-y-2.5">
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
                  <span className="flex items-center gap-3 font-medium">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[11px] font-semibold text-accent tabular-nums">
                      {i + 1}
                    </span>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`shrink-0 text-accent transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pl-14 text-foreground/70 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="container-pro max-w-4xl">
          <div className="glass-card rounded-3xl border border-accent/20 p-8 sm:p-12 text-center relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(500px 250px at 50% 0%, rgba(227,167,60,0.10), transparent 70%)",
              }}
            />
            <h2 className="font-display text-3xl sm:text-4xl">
              Kenya's next generation is waiting to be seen
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-foreground/70 leading-relaxed">
              Metropol Open Play Kenya 2026 is a structured pathway
              platform bringing international football expertise to
              Nairobi, for talent identification, player development,
              coaching exposure, inclusion and opportunity.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" onClick={() => openRegistration()}>
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#tickets">
                <Button size="lg" variant="outline">
                  View Ticket Packages
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pb-20">
        <div className="container-pro max-w-6xl">
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(500px 220px at 50% 0%, rgba(227,167,60,0.06), transparent 70%)",
              }}
            />
            <div className="text-center max-w-xl mx-auto">
              <span className="text-sm text-accent font-semibold tracking-wide">
                SUPPORT AND PARTNERSHIPS
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl">
                Stuck? We're here to help
              </h2>
              <p className="mt-1.5 text-sm text-foreground/60">
                Registrations, sponsorship enquiries or press, we respond
                quickly.
              </p>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="glass rounded-2xl p-5 border border-white/10">
                <p className="text-[10px] font-semibold tracking-widest text-accent uppercase">
                  Ticket Inquiries
                </p>
                <p className="mt-1.5 text-sm text-foreground/70">
                  {CONTACTS.ticketPhone}
                </p>
                <div className="mt-3 flex gap-2">
                  <a
                    href={`tel:${CONTACTS.ticketPhone}`}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-background/60 py-2 text-xs font-medium transition-colors hover:border-accent/30"
                  >
                    <Phone size={13} className="text-accent" />
                    Call
                  </a>
                  <a
                    href={CONTACTS.ticketWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-background/60 py-2 text-xs font-medium transition-colors hover:border-accent/30"
                  >
                    <MessageCircle size={13} className="text-accent" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-5 border border-white/10">
                <p className="text-[10px] font-semibold tracking-widest text-accent uppercase">
                  Event Information
                </p>
                <p className="mt-1.5 text-sm text-foreground/70">
                  {CONTACTS.eventPhone}
                </p>
                <div className="mt-3 flex gap-2">
                  <a
                    href={`tel:${CONTACTS.eventTel}`}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-background/60 py-2 text-xs font-medium transition-colors hover:border-accent/30"
                  >
                    <Phone size={13} className="text-accent" />
                    Call
                  </a>
                  <a
                    href={CONTACTS.eventWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-background/60 py-2 text-xs font-medium transition-colors hover:border-accent/30"
                  >
                    <MessageCircle size={13} className="text-accent" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <a
                href={`mailto:${CONTACTS.email}`}
                className="glass rounded-2xl p-5 flex flex-col justify-between border border-white/10 transition-colors hover:border-accent/30"
              >
                <div>
                  <p className="text-[10px] font-semibold tracking-widest text-accent uppercase">
                    Email
                  </p>
                  <p className="mt-1.5 text-sm text-foreground/70 break-all">
                    {CONTACTS.email}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-accent">
                  <Mail size={13} />
                  Send an email
                </div>
              </a>
            </div>

            <div className="mt-4 text-center">
              <a
                href="https://www.fcmetropolhp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-foreground/50 hover:text-accent transition-colors"
              >
                <Globe size={12} />
                fcmetropolhp.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) {
            setError("");
            if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
            if (!success) {
              resetTimeoutRef.current = setTimeout(() => {
                if (!mountedRef.current) return;
                setStep("ticket");
                setConfirmChecked(false);
              }, 200);
            }
          } else if (resetTimeoutRef.current) {
            clearTimeout(resetTimeoutRef.current);
            resetTimeoutRef.current = null;
          }
        }}
      >
        <DialogContent className="w-full h-[100dvh] sm:h-auto sm:max-w-lg sm:max-h-[85vh] rounded-none sm:rounded-3xl p-0 gap-0 overflow-hidden flex flex-col [&>button]:z-20 [&>button]:top-5 [&>button]:right-5">
          <DialogTitle className="sr-only">
            Event Registration, {STEP_LABELS[step]}
          </DialogTitle>

          <div className="shrink-0 border-b border-white/10 bg-background">
            <div className="h-1 w-full bg-gradient-to-r from-accent/40 via-accent to-accent/40" />
            <div className="flex items-center justify-between pl-4 sm:pl-6 pr-12 py-3.5">
              <button
                type="button"
                onClick={() => (stepIndex === 0 ? setDialogOpen(false) : goBack())}
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/5 transition-colors text-foreground/70"
                aria-label={stepIndex === 0 ? "Close" : "Back"}
              >
                {stepIndex === 0 ? <X size={18} /> : <ArrowLeft size={18} />}
              </button>

              <div className="flex items-center gap-1.5">
                {STEP_ORDER.map((s, i) => (
                  <span
                    key={s}
                    className={`flex items-center justify-center rounded-full transition-all ${
                      i === stepIndex
                        ? "h-5 w-5 bg-accent/20 border border-accent"
                        : i < stepIndex
                        ? "h-5 w-5 bg-accent border border-accent"
                        : "h-1.5 w-1.5 bg-white/15"
                    }`}
                  >
                    {i < stepIndex && (
                      <Check size={11} className="text-background" strokeWidth={3} />
                    )}
                    {i === stepIndex && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                  </span>
                ))}
              </div>

              <span className="w-9" aria-hidden="true" />
            </div>
            <div className="pl-4 sm:pl-6 pr-12 pb-3 -mt-1">
              <p className="text-[11px] font-semibold tracking-widest text-accent uppercase">
                Step {stepIndex + 1} of {STEP_ORDER.length}
              </p>
              <h2 className="font-display text-xl mt-0.5">
                {STEP_LABELS[step]}
              </h2>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5">
            {step === "ticket" && (
              <>
                <div className="space-y-2.5">
                  {(Object.keys(PACKAGES) as AttendeeTicketType[]).map((key) => {
                  const pkg = PACKAGES[key];
                  const Icon = pkg.icon;
                  const active = ticketType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setTicketType(key);
                        setQuantity(1);
                      }}
                      className={`w-full flex items-center gap-3 rounded-2xl border p-3.5 text-left transition-all duration-200 ${
                        active
                          ? "border-accent bg-accent/10 shadow-sm"
                          : "border-white/10 bg-background/60 hover:border-white/20"
                      }`}
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                          active
                            ? "bg-accent/20 border-accent/40"
                            : "bg-white/5 border-white/10"
                        }`}
                      >
                        <Icon
                          className={active ? "text-accent" : "text-foreground/60"}
                          size={20}
                        />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-semibold truncate">
                          {pkg.title}
                        </span>
                        <span className="block text-xs text-foreground/50 mt-0.5 truncate">
                          {pkg.audience} · {pkg.subtitle}
                        </span>
                      </span>
                      <span className="shrink-0 text-right">
                        <span className="block text-sm font-semibold tabular-nums text-accent">
                          {pkg.price.toLocaleString()}
                        </span>
                        <span className="block text-[10px] text-foreground/40 uppercase">
                          KES
                        </span>
                      </span>
                      <span
                        className={`shrink-0 h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                          active ? "border-accent" : "border-white/20"
                        }`}
                      >
                        {active && (
                          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-background/60 p-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">
                      Number of {selectedPackage.unitLabel}
                      {quantity === 1 ? "" : "s"}
                    </p>
                    <p className="text-xs text-foreground/50 mt-0.5">
                      {isGroupDiscountEligible
                        ? `Bring a group of ${MAX_QUANTITY} for a flat group rate of KES ${getTotalAmount(
                            ticketType,
                            MAX_QUANTITY
                          ).toLocaleString()}.`
                        : `Buying for others too? Get up to ${MAX_QUANTITY} in one go, no need to register separately.`}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      disabled={quantity <= 1}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-background disabled:opacity-30 transition-colors hover:border-accent/40"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-display text-xl tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))
                      }
                      disabled={quantity >= MAX_QUANTITY}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-background disabled:opacity-30 transition-colors hover:border-accent/40"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {groupDiscountActive ? (
                  <div className="rounded-xl bg-accent/10 border-2 border-accent px-4 py-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wide">
                        <Users size={13} />
                        Group Rate Applied
                      </span>
                      <strong className="text-accent tabular-nums text-lg">
                        KES {amount.toLocaleString()}
                      </strong>
                    </div>
                    <p className="mt-1 text-[11px] text-foreground/60">
                      {MAX_QUANTITY} {selectedPackage.unitLabel}s for KES{" "}
                      {amount.toLocaleString()}, instead of KES{" "}
                      {(selectedPackage.price * MAX_QUANTITY).toLocaleString()}{" "}
                      — you save KES{" "}
                      {(
                        selectedPackage.price * MAX_QUANTITY -
                        amount
                      ).toLocaleString()}
                      .
                    </p>
                  </div>
                ) : (
                  isGroupDiscountEligible &&
                  quantity === MAX_QUANTITY - 1 && (
                    <div className="rounded-xl bg-accent/5 border border-accent/20 px-4 py-3 text-xs text-foreground/70">
                      Add 1 more to unlock the group rate of KES{" "}
                      {getTotalAmount(
                        ticketType,
                        MAX_QUANTITY
                      ).toLocaleString()}{" "}
                      for {MAX_QUANTITY}.
                    </div>
                  )
                )}

                {!groupDiscountActive && quantity > 1 && (
                  <div className="rounded-xl bg-accent/10 border border-accent/20 px-4 py-3 text-sm flex items-center justify-between">
                    <span className="text-foreground/70">
                      {quantity} × KES {selectedPackage.price.toLocaleString()}
                    </span>
                    <strong className="text-accent tabular-nums">
                      KES {amount.toLocaleString()}
                    </strong>
                  </div>
                )}
              </div>
              </>
            )}

            {step === "pay" && (
              <div className="space-y-4">
                <div className="rounded-2xl border border-accent/30 bg-accent/10 p-5">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <Smartphone className="text-accent" size={18} />
                      <strong className="text-sm">Lipa na M-Pesa</strong>
                    </div>
                    <span className="text-[10px] font-semibold tracking-widest text-accent uppercase">
                      Pay Bill
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] text-foreground/50">
                    Paid directly through Safaricom M-Pesa, no third party
                    handles your payment.
                  </p>

                  {/* Business Number / Account Number, made deliberately
                      unmissable: large tabular figures, a strong border,
                      a soft glow, and tap-to-copy so nothing needs to be
                      retyped by hand into M-Pesa. */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(PAYBILL_NUMBER, "paybill")}
                      className="rounded-xl border-2 border-accent bg-background/80 px-3 py-3 text-left transition-transform active:scale-[0.97] shadow-[0_0_24px_-6px_rgba(227,167,60,0.35)]"
                    >
                      <span className="text-[10px] font-semibold tracking-widest text-accent uppercase">
                        Business No.
                      </span>
                      <span className="mt-1 flex items-center justify-between gap-2">
                        <span className="font-display text-2xl tabular-nums text-accent">
                          {PAYBILL_NUMBER}
                        </span>
                        {copiedField === "paybill" ? (
                          <Check className="text-accent shrink-0" size={16} />
                        ) : (
                          <Copy className="text-accent/50 shrink-0" size={16} />
                        )}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(ACCOUNT_NUMBER, "account")}
                      className="rounded-xl border-2 border-accent bg-background/80 px-3 py-3 text-left transition-transform active:scale-[0.97] shadow-[0_0_24px_-6px_rgba(227,167,60,0.35)]"
                    >
                      <span className="text-[10px] font-semibold tracking-widest text-accent uppercase">
                        Account No.
                      </span>
                      <span className="mt-1 flex items-center justify-between gap-2">
                        <span className="font-display text-2xl tabular-nums text-accent">
                          {ACCOUNT_NUMBER}
                        </span>
                        {copiedField === "account" ? (
                          <Check className="text-accent shrink-0" size={16} />
                        ) : (
                          <Copy className="text-accent/50 shrink-0" size={16} />
                        )}
                      </span>
                    </button>
                  </div>
                  <p className="mt-1.5 text-[10px] text-foreground/40 text-center">
                    Tap either number to copy it
                  </p>

                  <div className="mt-3 rounded-xl bg-background/50 px-4 py-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/60">Amount to pay </span>
                      <strong className="text-accent tabular-nums">
                        KES {amount.toLocaleString()}
                      </strong>
                    </div>
                    {groupDiscountActive ? (
                      <p className="mt-1 text-[11px] text-accent text-right">
                        Group rate for {MAX_QUANTITY}{" "}
                        {selectedPackage.unitLabel}s
                      </p>
                    ) : (
                      quantity > 1 && (
                        <p className="mt-1 text-[11px] text-foreground/50 text-right">
                          {quantity} {selectedPackage.unitLabel}s × KES{" "}
                          {selectedPackage.price.toLocaleString()}
                        </p>
                      )
                    )}
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {PAY_STEPS.map((s, i) => (
                      <li key={s} className="flex items-start gap-3 text-sm">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-[11px] font-semibold text-accent">
                          {i + 1}
                        </span>
                        <span className="text-foreground/80">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 flex items-start gap-3">
                  <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-foreground/80 leading-relaxed">
                    <strong className="text-amber-500">Important: </strong>
                    if the M-Pesa line you pay from is registered to a
                    different name than the person you're registering
                    (for example, a parent paying for a player), that's
                    fine — just mention it in Additional Notes on the
                    next step (e.g. "Paid using parent's M-Pesa number").
                    Otherwise, if the names don't match and we're not
                    told why, we may need to contact you directly to
                    verify it, which can delay your ticket.
                  </p>
                </div>
              </div>
            )}

            {step === "details" && (
              <div className="space-y-4">
                <div>
                  <IconField icon={User}>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                      className={fieldClass}
                      placeholder={isPlayerTicket ? "Player full name" : "Full name"}
                    />
                  </IconField>
                  <p className="mt-1.5 text-xs text-foreground/50">
                    {isPlayerTicket
                      ? "Enter the player's own name, even if a parent or guardian is registering on their behalf."
                      : "Use the same name registered on the M-Pesa line used to pay."}
                  </p>
                </div>

                <IconField icon={Mail}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    inputMode="email"
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
                      autoComplete="tel"
                      inputMode="tel"
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
                      autoComplete="country-name"
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
                      autoComplete="organization"
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
                  placeholder={
                    isPlayerTicket
                      ? "Optional — e.g. 'Paid using parent's M-Pesa number'"
                      : "Additional notes (optional)"
                  }
                />

                <div>
                  <IconField icon={Receipt}>
                    <input
                      type="text"
                      name="transactionCode"
                      value={form.transactionCode}
                      onChange={handleChange}
                      autoComplete="off"
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
            )}

            {step === "confirm" && (
              <div className="space-y-4">
                {!success && (
                  <>
                    <div className="rounded-xl border border-white/10 bg-background/60 divide-y divide-white/10 text-sm">
                      <div className="flex justify-between px-4 py-3">
                        <span className="text-foreground/60">Ticket</span>
                        <strong>{selectedPackage.title}</strong>
                      </div>
                      <div className="flex justify-between px-4 py-3">
                        <span className="text-foreground/60">Venue</span>
                        <strong>{selectedPackage.venue}</strong>
                      </div>
                      {quantity > 1 && (
                        <div className="flex justify-between px-4 py-3">
                          <span className="text-foreground/60">Quantity</span>
                          <strong>
                            {quantity} {selectedPackage.unitLabel}s
                            {groupDiscountActive && (
                              <span className="ml-1.5 text-accent">
                                (Group Rate)
                              </span>
                            )}
                          </strong>
                        </div>
                      )}
                      <div className="flex justify-between px-4 py-3">
                        <span className="text-foreground/60">Name</span>
                        <strong className="truncate max-w-[60%] text-right">
                          {form.fullName || "-"}
                        </strong>
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

                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={confirmChecked}
                        onChange={(e) => setConfirmChecked(e.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded border-white/20 accent-current text-accent"
                      />
                      <span className="text-sm text-foreground/80">
                        I confirm I have completed this M-Pesa payment
                        using the same name as this registration, and the
                        transaction code above is correct.
                      </span>
                    </label>

                    {error && (
                      <div
                        role="alert"
                        className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-red-400 flex items-start gap-2"
                      >
                        <X size={18} className="shrink-0 mt-0.5" />
                        <span className="text-sm">{error}</span>
                      </div>
                    )}
                  </>
                )}

                {success && (
                  <div className="text-center py-4">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                      <CheckCircle className="text-green-400" size={28} />
                    </span>
                    <h3 className="font-display text-xl">You're in</h3>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                      {success}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="shrink-0 border-t border-white/10 bg-background px-4 sm:px-6 py-4">
            {step === "confirm" && success ? (
              <Button
                size="lg"
                className="w-full"
                onClick={() => {
                  setDialogOpen(false);
                  resetForm();
                  setSuccess("");
                }}
              >
                Done
              </Button>
            ) : step === "confirm" ? (
              <Button
                size="lg"
                className="w-full"
                disabled={!confirmChecked || loading}
                onClick={submitRegistration}
              >
                {loading ? "Submitting..." : "Confirm and Reserve"}
              </Button>
            ) : step === "details" ? (
              <Button
                size="lg"
                className="w-full"
                disabled={!detailsValid}
                onClick={goNext}
              >
                Review Registration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button size="lg" className="w-full" onClick={goNext}>
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}

            <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-foreground/50">
              <LifeBuoy size={12} className="text-accent/70 shrink-0" />
              Stuck? Call or WhatsApp{" "}
              <a
                href={`tel:${CONTACTS.ticketPhone}`}
                className="font-semibold text-accent hover:underline"
              >
                {CONTACTS.ticketPhone}
              </a>{" "}
              for tickets, or{" "}
              <a
                href={`mailto:${CONTACTS.email}`}
                className="font-semibold text-accent hover:underline"
              >
                email us
              </a>
              .
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventsPage;
