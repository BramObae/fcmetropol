import { motion } from "framer-motion";
import { Building2, Globe2, GraduationCap, Trophy, Users, Handshake } from "lucide-react";
import galleryData from "@/data/gallery.json";

const pool = (galleryData as { src: string }[]).map((g) => g.src);
const pic = (i: number) => pool[(i * 41) % pool.length];

const logos = [
  { name: "FISA Pro Club", src: "/partners/fisa.jpg" },
  { name: "ISMFF — Inter-School Mega Football Festival", src: "/partners/ismff.jpg" },
  { name: "Metropol Baltic Group", src: "/partners/mbg.jpg" },
  { name: "Metropol Baltic Group", src: "/partners/mbg-2.jpg" },
];

const affiliates = [
  "FC Metropol Estonia", "Metropol Baltic Group", "Brazil Soccer Pathway",
  "CAF", "FIFA Connect", "FKF", "TFF", "FERWAFA", "SAFA",
  "FAZ", "ZIFA", "EFA", "FTF", "FRMF",
];

const categories = [
  {
    icon: Trophy,
    t: "Professional Clubs",
    d: "Sister club to FC Metropol Estonia (Division 2) and an affiliate of Metropol Baltic Group — connecting players to clubs across Europe, the Gulf and the Americas.",
    items: ["FC Metropol Estonia", "Metropol Baltic Group", "Brazil partner clubs"],
  },
  {
    icon: Building2,
    t: "Federations",
    d: "Working alongside national football federations across Africa to align development standards and create cross-border pathways.",
    items: ["FKF Kenya", "TFF Tanzania", "FERWAFA Rwanda", "SAFA South Africa", "FAZ Zambia", "ZIFA Zimbabwe", "EFA Egypt", "FTF Tunisia", "FRMF Morocco"],
  },
  {
    icon: GraduationCap,
    t: "Academies & Colleges",
    d: "Soccer academies, colleges and universities seeking top athletes — facilitating full and partial scholarship pathways.",
    items: ["US College Network", "European Academies", "Estonian Football Schools"],
  },
  {
    icon: Users,
    t: "Tournaments & Showcases",
    d: "Grassroots tournaments and invitational showcases that surface talent and put players in front of scouts.",
    items: ["FISA Pro Club", "ISMFF Festival", "International Invitationals"],
  },
];

const regions = [
  { r: "Africa", c: ["Kenya", "Tanzania", "Rwanda", "South Africa", "Zambia", "Zimbabwe", "Egypt", "Tunisia", "Morocco"] },
  { r: "Europe", c: ["Estonia", "Baltic Network"] },
  { r: "South America", c: ["Brazil"] },
];

export function Partners() {
  const row = [...logos, ...logos, ...logos];
  const aff = [...affiliates, ...affiliates];

  return (
    <section className="relative">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <img src={pic(9)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-20 sm:py-28">
          <div className="text-xs uppercase tracking-[0.3em] gold-text font-semibold">Partners</div>
          <h1 className="mt-3 text-4xl sm:text-6xl md:text-7xl uppercase font-bold leading-[0.95]">
            Trusted by clubs,<br /><span className="gold-text">federations & academies.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-foreground/80">
            We collaborate with grassroots tournaments, professional clubs and federations
            across five continents to build pathways for our players. FC Metropol HP Kenya is
            a sister club to FC Metropol Estonia, an affiliate of Metropol Baltic Group —
            connecting to clubs across Europe, Africa, the Americas, Asia and the Middle East.
          </p>
        </div>
      </div>

      {/* Logo carousel */}
      <div className="group relative overflow-hidden py-10 sm:py-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex w-max marquee-slow items-center group-hover:[animation-play-state:paused]">
          {row.map((p, i) => (
            <div key={i} className="mx-4 sm:mx-6 flex h-28 sm:h-36 w-44 sm:w-56 items-center justify-center rounded-2xl glass p-4" title={p.name}>
              <img src={p.src} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-16 sm:py-20">
        <div className="text-xs uppercase tracking-[0.3em] gold-text font-semibold">Our Network</div>
        <h2 className="mt-3 text-3xl sm:text-5xl uppercase font-bold">
          Four pillars of <span className="gold-text">partnership.</span>
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {categories.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl glass p-6 sm:p-7"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--gold)]/10 gold-border">
                  <c.icon className="h-5 w-5 text-[color:var(--gold)]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide">{c.t}</h3>
              </div>
              <p className="mt-4 text-sm text-foreground/75">{c.d}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.items.map((it) => (
                  <span key={it} className="rounded-full glass px-3 py-1 text-[11px] uppercase tracking-wider text-foreground/80">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Regions */}
      <div className="relative overflow-hidden">
        <img src={pic(17)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-16 sm:py-20">
          <div className="text-xs uppercase tracking-[0.3em] gold-text font-semibold">Global Reach</div>
          <h2 className="mt-3 text-3xl sm:text-5xl uppercase font-bold">
            A network across <span className="gold-text">three continents.</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {regions.map((r) => (
              <div key={r.r} className="rounded-3xl glass p-6">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-[color:var(--gold)]" />
                  <h3 className="text-xl font-bold uppercase tracking-wide">{r.r}</h3>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/75">
                  {r.c.map((cn) => <li key={cn}>· {cn}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Affiliates marquee */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 mt-12 text-center">
        <div className="text-xs uppercase tracking-[0.3em] gold-text font-semibold mb-6">
          FC Metropol HP Kenya is an affiliate of
        </div>
      </div>
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex w-max marquee group-hover:[animation-play-state:paused]">
          {aff.map((p, i) => (
            <div key={i} className="mx-3 sm:mx-4 flex h-14 sm:h-16 items-center justify-center rounded-2xl glass px-5 sm:px-6 text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground/70 hover:text-[color:var(--gold)] transition whitespace-nowrap">
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Become a partner */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-20">
        <div className="rounded-3xl glass p-8 sm:p-12 text-center">
          <Handshake className="h-10 w-10 text-[color:var(--gold)] mx-auto" />
          <h3 className="mt-5 text-2xl sm:text-4xl uppercase font-bold">
            Partner with <span className="gold-text">FC Metropol HP.</span>
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/75">
            Clubs, federations, academies and colleges interested in top athletes — let's build a
            pathway together.
          </p>
          <a href="mailto:info@fcmetropolhp.com" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--gold)] to-amber-500 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[color:var(--gold-foreground)] shadow-glow">
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
