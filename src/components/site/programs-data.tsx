import { Dumbbell, Sparkles, Search, Plane, Check, Trophy } from "lucide-react";

export type ProgramDetail = {
  id: string;
  tag: string;
  icon: typeof Dumbbell;
  title: string;
  short: string;
  long: string;
  features: string[];
  outcomes: string[];
  duration: string;
  format: string;
  level: string;
};

export const PROGRAMS: ProgramDetail[] = [
  /* 01 — SCOUTING */
  {
    id: "scouting",
    tag: "01",
    icon: Search,
    title: "Scouting & Talent Identification",
    short: "We identify raw talent across Africa through structured scouting networks.",
    long:
      "We actively search for promising players across schools, academies, and grassroots competitions. Our scouting system is structured, data-informed, and focused on long-term potential — not just current performance.",
    features: [
      "Regional scouting across Africa and partner countries",
      "Talent ID camps and open trials",
      "Performance observation and match analysis",
      "Direct scout feedback reports",
      "Early pathway selection for promising players",
    ],
    outcomes: [
      "Clear identification of high-potential players",
      "Early exposure to structured football pathways",
      "Shortlisted talent for development programs",
    ],
    duration: "Year-round",
    format: "On-site & regional events",
    level: "Open entry",
  },

  /* 02 — DEVELOPMENT */
  {
    id: "development",
    tag: "02",
    icon: Dumbbell,
    title: "Player Development & Training",
    short: "Elite coaching to transform raw talent into structured, competitive athletes.",
    long:
      "Selected players enter a structured training environment focused on technical growth, tactical awareness, physical conditioning, and mental strength. Every session is measured, tracked, and adjusted for improvement.",
    features: [
      "Position-specific technical training",
      "Strength, speed & conditioning programs",
      "Tactical team systems & game intelligence",
      "Video analysis & performance tracking",
      "Recovery, nutrition & injury prevention",
    ],
    outcomes: [
      "Improved physical performance metrics",
      "Better tactical decision-making",
      "Increased match consistency and discipline",
    ],
    duration: "16-week cycles",
    format: "On-site (Nairobi HQ)",
    level: "U13 – U23",
  },

  /* 03 — PACKAGING */
  {
    id: "branding",
    tag: "03",
    icon: Sparkles,
    title: "Player Packaging & Branding",
    short: "We turn players into scout-ready professionals with full digital profiles.",
    long:
      "We build complete player identities that are ready for clubs, scouts, and agents. This includes highlight reels, performance data, scouting profiles, and digital presence designed to attract opportunities.",
    features: [
      "Professional highlight reels (multi-angle)",
      "Scouting profile & performance CV",
      "Player photography & branding kit",
      "Social media profile setup & strategy",
      "Distribution to agents & club networks",
    ],
    outcomes: [
      "Professional scout-ready player identity",
      "Increased visibility to clubs & agents",
      "Stronger chances of trial invitations",
    ],
    duration: "16 weeks",
    format: "Hybrid (Nairobi + remote)",
    level: "All levels",
  },

  /* 04 — PLACEMENT */
  {
    id: "placement",
    tag: "04",
    icon: Plane,
    title: "Placement & Career Opportunities",
    short: "We connect players to clubs, academies, and scholarships worldwide.",
    long:
      "We secure trials, contracts, academy placements, and scholarship opportunities across Europe, Africa, the Gulf, and the Americas. We also handle logistics including visas, travel, and accommodation support.",
    features: [
      "Club trials and contract negotiations",
      "University & academy scholarships",
      "Visa, travel & relocation support",
      "Schooling & accommodation coordination",
      "Career guidance & long-term placement tracking",
    ],
    outcomes: [
      "Professional contracts and academy placements",
      "Scholarship opportunities for student-athletes",
      "Global career pathway access",
    ],
    duration: "Per opportunity",
    format: "Global",
    level: "Career-ready players",
  },
];

/* ---------------- UI COMPONENTS ---------------- */

export const ProgramFeatureBullet = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <li className="flex items-start gap-3 text-foreground/80">
    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-md bg-accent/15 grid place-items-center">
      <Check size={12} className="text-accent" />
    </span>
    <span className="leading-relaxed">{children}</span>
  </li>
);

export const ProgramOutcomeBullet = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <li className="flex items-start gap-3 text-foreground/85">
    <Trophy size={14} className="text-accent mt-1 shrink-0" />
    <span className="leading-relaxed">{children}</span>
  </li>
);
