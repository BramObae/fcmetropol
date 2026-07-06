import { useState } from "react";
import {
  Calendar,
  MapPin,
  Ticket,
  Smartphone,
  ArrowDown,
  ArrowRight,
  CheckCircle,
  Trophy,
  Award,
  Utensils,
  Sparkles,
  Building2,
  ChevronDown,
  Mail,
  Phone,
  MessageCircle,
  Receipt,
  ShieldAlert,
  User,
  X,
  Plus,
  Minus,
  Star,
} from "lucide-react";

const TILL_NUMBER = "000000";

const PACKAGES = {
  dinner: {
    title: "Launch Dinner Pass",
    subtitle: "9 Aug · Per person",
    price: 5000,
    unit: "person",
    icon: Utensils,
    minQty: 1,
    maxQty: 12,
    inclusions: [
      "Entry to the Official Launch Dinner",
      "Sports Investment & Partnership Forum",
      "Dinner and refreshments",
      "Networking with international delegates",
    ],
  },
  openPlay: {
    title: "Open Play Pass",
    subtitle: "10–11 Aug · Per player",
    price: 5000,
    unit: "player",
    icon: Trophy,
    minQty: 1,
    maxQty: 20,
    inclusions: [
      "Two days of scouted talent assessment",
      "Technical, tactical & athletic evaluation",
      "Observed by international clubs & scouts",
      "Player performance profile",
    ],
  },
  workshop: {
    title: "Workshop Pass",
    subtitle: "12–14 Aug · Per player",
    price: 10000,
    unit: "player",
    icon: Award,
    minQty: 1,
    maxQty: 20,
    inclusions: [
      "Three days of elite development sessions",
      "High performance training & sports science",
      "Scholarship & career pathway guidance",
      "Certificate of participation",
    ],
  },
  combo: {
    title: "Open Play + Workshop",
    subtitle: "10–14 Aug · Full programme",
    price: 15000,
    unit: "player",
    icon: Sparkles,
    highlight: true,
    minQty: 1,
    maxQty: 20,
    inclusions: [
      "Everything in the Open Play Pass",
      "Everything in the Workshop Pass",
      "Priority visibility with scouts",
      "One registration for the full five days",
    ],
  },
  corporate: {
    title: "Corporate Table",
    subtitle: "9 Aug · Table of 10",
    price: 100000,
    unit: "table",
    icon: Building2,
    fixedQty: true,
    inclusions: [
      "Reserved table of 10 at the Launch Dinner",
      "Company branding on table signage",
      "Direct networking with delegates & sponsors",
      "Logo recognition in the event programme",
    ],
  },
};

const SCHEDULE = [
  { tag: "01", date: "9 Aug", title: "Official Launch Dinner & Partnership Forum" },
  { tag: "02", date: "10–11 Aug", title: "Open Play Talent Identification" },
  { tag: "03", date: "12–14 Aug", title: "Elite Player & Coach Workshops" },
  { tag: "04", date: "15 Aug", title: "PWD Curtain Raiser & Showcase Match" },
];

const STATS = [
  { value: "500+", label: "Players & Coaches" },
  { value: "30+", label: "Int'l Delegates" },
  { value: "05", label: "Ticket Categories" },
  { value: "7", label: "Event Days" },
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
    a: `Lipa na M-Pesa, Buy Goods, Till Number ${TILL_NUMBER}. Enter the amount shown for your pass, then confirm with your M-Pesa PIN. You'll enter the transaction code from your confirmation SMS on the registration form.`,
  },
  {
    q: "What's the difference between Open Play and Workshop?",
    a: "Open Play (10–11 Aug) is the two-day scouting and assessment programme. Workshop (12–14 Aug) is the three-day player and coach development programme. If your child is doing both, the combined pass at KES 15,000 covers all five days under one registration.",
  },
  {
    q: "How does the Corporate Table work?",
    a: "KES 100,000 reserves one table of 10 seats at the Launch Dinner on 9 August, with your company name on the table and recognition in the event programme.",
  },
  {
    q: "Can I register more than one player?",
    a: "Yes. Use the quantity control on the Open Play, Workshop or Combo pass to register multiple players in a single payment.",
  },
];

/* ---------- tiny local UI primitives (no external component deps) ---------- */

const Btn = ({ variant = "solid", className = "", children, ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "bg-amber-400 text-zinc-900 hover:bg-amber-300"
      : variant === "outline"
      ? "border border-white/20 text-zinc-100 hover:border-white/40"
      : "text-zinc-100 hover:text-amber-300";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

const IconField = ({ icon: Icon, children }) => (
  <div className="relative">
    <Icon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
    {children}
  </div>
);

const QuantityStepper = ({ value, onChange, min = 1, max = 20, unit }) => (
  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900 px-4 py-2.5">
    <span className="text-sm text-zinc-400">
      Number of {unit}
      {value === 1 ? "" : "s"}
    </span>
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-400 disabled:opacity-30 hover:border-amber-400/50 hover:text-amber-300 transition-colors"
      >
        <Minus size={14} />
      </button>
      <span className="w-6 text-center font-semibold tabular-nums text-zinc-100">{value}</span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-400 disabled:opacity-30 hover:border-amber-400/50 hover:text-amber-300 transition-colors"
      >
        <Plus size={14} />
      </button>
    </div>
  </div>
);

/* Faux registration call — mimics your real registerAttendee(), just without
   the network round trip, so this preview can actually "succeed". */
function mockRegisterAttendee(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        registration:
          "FCM-" + new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14),
      });
    }, 900);
  });
}

export default function EventsPagePreview() {
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const [packageKey, setPackageKey] = useState("openPlay");
  const [quantity, setQuantity] = useState(1);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    transactionCode: "",
    companyName: "",
    notes: "",
  });
  const [touched, setTouched] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const selectedPackage = PACKAGES[packageKey];
  const effectiveQty = selectedPackage.fixedQty ? 1 : quantity;
  const amount = selectedPackage.price * effectiveQty;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePackageSelect = (key) => {
    setPackageKey(key);
    setQuantity(1);
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
    setPackageKey("openPlay");
    setQuantity(1);
    setConfirmChecked(false);
    setTouched(false);
  };

  const requiredFilled =
    form.fullName.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.country.trim() &&
    form.transactionCode.trim() &&
    (packageKey !== "corporate" || form.companyName.trim());

  const handleReview = () => {
    setTouched(true);
    setError("");
    if (!requiredFilled) return;
    setConfirmOpen(true);
  };

  const submitRegistration = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    const payload = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      country: form.country,
      ticketType: packageKey,
      quantity: effectiveQty,
      transactionCode: form.transactionCode,
      amount,
      notes: form.notes,
    };

    const result = await mockRegisterAttendee(payload);

    if (result.success) {
      const firstName = form.fullName.trim().split(" ")[0] || "there";
      setSuccess(
        `Thank you for registering, ${firstName}! Your registration number is ${result.registration}. We'll send your official confirmation to ${form.email} shortly.`
      );
      resetForm();
    } else {
      setError(result.error || "Registration failed.");
    }

    setLoading(false);
    setConfirmOpen(false);
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      <div className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <span className="font-bold text-sm md:text-base truncate">Metropol Open Play Kenya 2026</span>
          <Btn onClick={() => setDialogOpen(true)}>
            Get Tickets <ArrowRight className="ml-2 h-4 w-4" />
          </Btn>
        </div>
      </div>

      <section className="pt-16 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm text-amber-300">
            <Calendar size={16} /> 9 – 15 August 2026 · Nairobi
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl font-extrabold tracking-tight">
            Metropol Open Play
            <span className="block text-amber-400">Kenya 2026</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed">
            Creating global opportunities through football, education and international
            partnerships. Scouting, coach education and a Launch Dinner with delegates
            from Europe and South America.
          </p>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <Btn className="px-6 py-3.5 text-base" onClick={() => setDialogOpen(true)}>
              Reserve Your Pass <ArrowDown className="ml-2 h-5 w-5" />
            </Btn>
            <a href="#tickets">
              <Btn variant="outline" className="px-6 py-3.5 text-base">
                View Ticket Categories
              </Btn>
            </a>
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Passes from <strong className="text-amber-300">KES 5,000</strong> · Pay with Lipa na M-Pesa
          </p>

          <div className="mt-14 rounded-2xl border border-white/10 bg-black/30 px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {STATS.map((s) => (
                <div key={s.label} className="text-center px-2">
                  <div className="text-4xl md:text-5xl font-extrabold tabular-nums text-amber-400">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs tracking-widest text-zinc-500 uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-amber-400 font-semibold tracking-wide">PROGRAMME</span>
            <h2 className="mt-3 text-4xl font-bold">Four stages, one pass each</h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SCHEDULE.map((item) => (
              <div key={item.tag} className="rounded-2xl p-5 border border-white/10 bg-white/5 flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-full border-2 border-amber-400/50 flex items-center justify-center font-bold text-sm text-amber-300">
                  {item.tag}
                </div>
                <div>
                  <div className="text-xs text-zinc-500">{item.date}</div>
                  <div className="font-medium leading-snug">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tickets" className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-amber-400 font-semibold tracking-wide">TICKET CATEGORIES</span>
            <h2 className="mt-3 text-4xl font-bold">Choose your pass</h2>
            <p className="mt-3 text-zinc-500">
              Every pass is priced per player or guest — pick what fits, and adjust the
              quantity when you register.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(PACKAGES).map((key) => {
              const pkg = PACKAGES[key];
              const Icon = pkg.icon;
              return (
                <div
                  key={key}
                  className={`relative rounded-3xl flex flex-col border overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-1 ${
                    pkg.highlight
                      ? "border-amber-400/40 bg-amber-400/10 shadow-xl md:-translate-y-3"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {pkg.highlight && (
                    <span className="absolute top-5 -right-9 z-10 rotate-45 bg-amber-400 px-10 py-1 text-[11px] font-bold tracking-wide text-zinc-900 shadow flex items-center gap-1 justify-center">
                      <Star size={11} className="fill-current" /> FULL PROGRAMME
                    </span>
                  )}

                  <Icon className="text-amber-400 mb-4" size={28} />
                  <h3 className="text-2xl font-bold">{pkg.title}</h3>
                  <p className="text-zinc-500 text-sm mt-1">{pkg.subtitle}</p>

                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold tabular-nums">
                      KES {pkg.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-zinc-500">/ {pkg.unit}</span>
                  </div>

                  <ul className="mt-6 space-y-3 flex-1">
                    {pkg.inclusions.map((text) => (
                      <li key={text} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="text-amber-400 shrink-0 mt-0.5" size={16} />
                        <span className="text-zinc-300">{text}</span>
                      </li>
                    ))}
                  </ul>

                  <Btn
                    variant={pkg.highlight ? "solid" : "outline"}
                    className="mt-8 w-full"
                    onClick={() => handlePackageSelect(key)}
                  >
                    Select {pkg.title} <ArrowRight className="ml-2 h-4 w-4" />
                  </Btn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <span className="text-sm text-amber-400 font-semibold tracking-wide">FAQ</span>
            <h2 className="mt-3 text-4xl font-bold">Common questions</h2>
          </div>

          <div className="mt-10 space-y-3">
            {FAQS.map((item, i) => (
              <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium">{item.q}</span>
                  <ChevronDown
                    className={`shrink-0 text-amber-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-zinc-400 leading-relaxed">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-12">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-sm text-amber-400 font-semibold tracking-wide">SUPPORT</span>
              <h2 className="mt-3 text-3xl font-bold">Need help?</h2>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              <a href="mailto:hallo@fcmetropolhp.com" className="rounded-2xl p-5 flex items-center gap-3 border border-white/10 bg-white/5">
                <Mail className="text-amber-400" size={20} />
                <div className="text-sm text-zinc-300">hallo@fcmetropolhp.com</div>
              </a>
              <a href="tel:+254708666576" className="rounded-2xl p-5 flex items-center gap-3 border border-white/10 bg-white/5">
                <Phone className="text-amber-400" size={20} />
                <div className="text-sm text-zinc-300">+254 708 666 576</div>
              </a>
              <a href="https://wa.me/254708666576" className="rounded-2xl p-5 flex items-center gap-3 border border-white/10 bg-white/5">
                <MessageCircle className="text-amber-400" size={20} />
                <div className="text-sm text-zinc-300">WhatsApp</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION MODAL */}
      {dialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setDialogOpen(false)}>
          <div
            className="max-w-2xl w-full max-h-[88vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1.5 w-full bg-amber-400" />
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/10 border border-amber-400/30">
                    <Ticket className="text-amber-400" size={20} />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold">Ticket Registration</h3>
                    <p className="text-sm text-zinc-500 mt-0.5">Pick your pass, pay via Lipa na M-Pesa, then confirm.</p>
                  </div>
                </div>
                <button onClick={() => setDialogOpen(false)} className="text-zinc-500 hover:text-zinc-200">
                  <X size={20} />
                </button>
              </div>

              <div className="mt-8">
                <span className="text-[11px] font-semibold tracking-widest text-zinc-500">01 · PASS</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                  {Object.keys(PACKAGES).map((key) => {
                    const pkg = PACKAGES[key];
                    const Icon = pkg.icon;
                    const active = packageKey === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setPackageKey(key);
                          setQuantity(1);
                        }}
                        className={`rounded-2xl border p-4 text-center transition-all ${
                          active ? "border-amber-400 bg-amber-400/10 scale-[1.02]" : "border-white/10 bg-zinc-900 hover:border-white/20"
                        }`}
                      >
                        <Icon className={`mx-auto mb-1.5 ${active ? "text-amber-400" : "text-zinc-500"}`} size={20} />
                        <div className="text-xs font-medium">{pkg.title}</div>
                        <div className="text-[11px] text-zinc-500 mt-0.5">
                          KES {pkg.price.toLocaleString()} / {pkg.unit}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {!selectedPackage.fixedQty && (
                  <div className="mt-4">
                    <QuantityStepper
                      value={quantity}
                      onChange={setQuantity}
                      min={selectedPackage.minQty}
                      max={selectedPackage.maxQty}
                      unit={selectedPackage.unit}
                    />
                  </div>
                )}

                {packageKey === "corporate" && (
                  <div className="mt-4">
                    <IconField icon={Building2}>
                      <input
                        type="text"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-zinc-900 pl-11 pr-4 py-3 outline-none focus:border-amber-400"
                        placeholder="Company name"
                      />
                    </IconField>
                    {touched && !form.companyName.trim() && (
                      <p className="mt-1.5 text-xs text-red-400">Company name is required for a Corporate Table.</p>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-8">
                <span className="text-[11px] font-semibold tracking-widest text-zinc-500">02 · PAY</span>
                <div className="mt-3 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <Smartphone className="text-amber-400" size={18} />
                      <strong className="text-sm">Lipa na M-Pesa</strong>
                    </div>
                    <div className="text-sm">
                      <span className="text-zinc-400">Till Number </span>
                      <strong>{TILL_NUMBER}</strong>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl bg-black/30 px-4 py-3 text-sm flex items-center justify-between flex-wrap gap-2">
                    <span className="text-zinc-400">
                      {selectedPackage.title}
                      {!selectedPackage.fixedQty && ` × ${effectiveQty}`}
                    </span>
                    <strong className="text-amber-300 text-base">KES {amount.toLocaleString()}</strong>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {PAY_STEPS.map((step, i) => (
                      <li key={step} className="flex items-start gap-3 text-sm">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[11px] font-semibold text-amber-300">
                          {i + 1}
                        </span>
                        <span className="text-zinc-300">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <span className="text-[11px] font-semibold tracking-widest text-zinc-500">03 · YOUR DETAILS</span>

                <div className="mt-3 space-y-4">
                  <div>
                    <IconField icon={User}>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-zinc-900 pl-11 pr-4 py-3 outline-none focus:border-amber-400"
                        placeholder="Full name"
                      />
                    </IconField>
                    {touched && !form.fullName.trim() && <p className="mt-1 text-xs text-red-400">Full name is required.</p>}
                  </div>

                  <div>
                    <IconField icon={Mail}>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-zinc-900 pl-11 pr-4 py-3 outline-none focus:border-amber-400"
                        placeholder="Email address"
                      />
                    </IconField>
                    {touched && !form.email.trim() && <p className="mt-1 text-xs text-red-400">Email is required.</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <IconField icon={Phone}>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-zinc-900 pl-11 pr-4 py-3 outline-none focus:border-amber-400"
                          placeholder="+2547..."
                        />
                      </IconField>
                      {touched && !form.phone.trim() && <p className="mt-1 text-xs text-red-400">Phone is required.</p>}
                    </div>
                    <div>
                      <IconField icon={MapPin}>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-zinc-900 pl-11 pr-4 py-3 outline-none focus:border-amber-400"
                          placeholder="Country"
                        />
                      </IconField>
                      {touched && !form.country.trim() && <p className="mt-1 text-xs text-red-400">Country is required.</p>}
                    </div>
                  </div>

                  <textarea
                    rows={2}
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 outline-none resize-none focus:border-amber-400"
                    placeholder="Additional notes (optional)"
                  />

                  <div>
                    <IconField icon={Receipt}>
                      <input
                        type="text"
                        name="transactionCode"
                        value={form.transactionCode}
                        onChange={handleChange}
                        placeholder="M-Pesa transaction code, e.g. UG45CA77YR"
                        className="w-full rounded-xl border border-white/10 bg-zinc-900 pl-11 pr-4 py-3 outline-none focus:border-amber-400"
                      />
                    </IconField>
                    <p className="mt-1.5 text-xs text-zinc-500">
                      The code at the start of your M-Pesa confirmation SMS, e.g. "UG45CA77YR Confirmed..."
                    </p>
                    {touched && !form.transactionCode.trim() && (
                      <p className="mt-1 text-xs text-red-400">Transaction code is required.</p>
                    )}
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

                <Btn className="w-full mt-6" onClick={handleReview}>
                  Review &amp; Confirm Payment <ArrowRight className="ml-2 h-4 w-4" />
                </Btn>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAYMENT CONFIRMATION POPUP */}
      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="max-w-md w-full rounded-2xl bg-zinc-950 border border-white/10">
            <div className="h-1.5 w-full bg-amber-400" />
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/10 border border-amber-400/30">
                  <ShieldAlert className="text-amber-400" size={20} />
                </span>
                <h3 className="text-xl font-bold">Confirm Your Payment</h3>
              </div>

              <p className="mt-4 text-sm text-zinc-400">
                Please double-check the details below before we submit your registration.
              </p>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/30 divide-y divide-white/10 text-sm">
                <div className="flex justify-between px-4 py-3">
                  <span className="text-zinc-400">Pass</span>
                  <strong>
                    {selectedPackage.title}
                    {!selectedPackage.fixedQty && ` × ${effectiveQty}`}
                  </strong>
                </div>
                <div className="flex justify-between px-4 py-3">
                  <span className="text-zinc-400">Amount</span>
                  <strong className="text-amber-300">KES {amount.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between px-4 py-3">
                  <span className="text-zinc-400">Transaction Code</span>
                  <strong>{form.transactionCode || "—"}</strong>
                </div>
              </div>

              <label className="mt-5 flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={confirmChecked}
                  onChange={(e) => setConfirmChecked(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-white/20"
                />
                <span className="text-sm text-zinc-300">
                  I confirm I have completed this M-Pesa payment and the transaction code above is correct.
                </span>
              </label>

              <div className="mt-6 flex gap-3">
                <Btn variant="outline" className="flex-1" disabled={loading} onClick={() => setConfirmOpen(false)}>
                  Go Back
                </Btn>
                <Btn className="flex-1" disabled={!confirmChecked || loading} onClick={submitRegistration}>
                  {loading ? "Submitting..." : "Confirm & Reserve"}
                </Btn>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
