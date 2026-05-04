import { Dumbbell, Sparkles, Search, Plane, Check } from "lucide-react";

export type ProgramDetail = {
  id: string;
  tag: string;
  icon: typeof Dumbbell;
  title: string;
  short: string;
  long: string;
  features: string[];
  duration: string;
  format: string;
};

export const PROGRAMS: ProgramDetail[] = [
  {
    id: "training",
    tag: "01",
    icon: Dumbbell,
    title: "Training & Development",
    short: "Position-specific coaching, S&C, and tactical mastery from elite coaches.",
    long:
      "A high-performance program built around your position. Daily technical sessions, strength & conditioning, video analysis, and tactical periodization led by UEFA/CAF licensed coaches.",
    features: [
      "Position-specific technical drills",
      "Strength & conditioning by certified S&C coaches",
      "Weekly video analysis sessions",
      "Nutrition & recovery plans",
      "Match scenarios and tactical periodization",
    ],
    duration: "12-week cycles",
    format: "On-site · Nairobi",
  },
  {
    id: "branding",
    tag: "02",
    icon: Sparkles,
    title: "Player Branding & Profiling",
    short: "Highlight reels, media kits, and social presence built for scouts.",
    long:
      "We package you like a professional. Cinematic highlight reels, scout-ready media kits, polished social presence, and a verified player profile distributed through our agent network.",
    features: [
      "Cinematic highlight reel (4K)",
      "Scout-grade player profile & stats sheet",
      "Professional photoshoot",
      "Social media content strategy",
      "Verified profile on agent networks",
    ],
    duration: "4-6 weeks",
    format: "Hybrid",
  },
  {
    id: "scouting",
    tag: "03",
    icon: Search,
    title: "Trials & Scouting",
    short: "Curated trial events with verified club scouts and federation reps.",
    long:
      "Live exposure where it matters. Closed-door showcases, friendly tournaments, and combine-style ID events attended by club scouts, agents, and federation representatives.",
    features: [
      "Quarterly showcase tournaments",
      "Combine-style ID events",
      "Direct scout introductions",
      "Performance reports for every trial",
      "Agent representation pathway",
    ],
    duration: "Ongoing",
    format: "On-site · International",
  },
  {
    id: "placement",
    tag: "04",
    icon: Plane,
    title: "Placement Opportunities",
    short: "Direct contracts and academy placements across global leagues.",
    long:
      "We close the loop. Through partner clubs across 5 continents we negotiate trials, contracts, and academy enrollments — handling visas, logistics, and family support end to end.",
    features: [
      "Contract & trial negotiation",
      "Visa and travel support",
      "Academy enrollment (U15–U23)",
      "Family liaison & welfare",
      "Post-placement performance check-ins",
    ],
    duration: "Per opportunity",
    format: "Global",
  },
];

export const ProgramFeatureBullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-foreground/80">
    <Check size={16} className="text-accent mt-1 shrink-0" />
    <span>{children}</span>
  </li>
);
