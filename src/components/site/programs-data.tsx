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
  {
    id: "training",
    tag: "01",
    icon: Dumbbell,
    title: "Training & Development",
    short: "Position-specific coaching, S&C, and tactical mastery from elite coaches.",
    long:
      "Our flagship pillar — a high-performance environment engineered to turn raw talent into career-ready athletes. Players follow a periodised 12-week cycle covering technical mastery, tactical IQ, athletic development and recovery science. Sessions are led by UEFA & CAF licensed coaches who have worked across European academies and African top flights, with daily individual feedback so progress is measurable, not just promised.",
    features: [
      "Daily position-specific technical drills",
      "Strength, conditioning & speed work by certified S&C staff",
      "Weekly video analysis and individual development plans",
      "Performance nutrition & sleep / recovery protocols",
      "Game-realistic small-sided games and tactical periodization",
      "Mental performance coaching and mindset workshops",
    ],
    outcomes: [
      "Measurable gains in sprint, agility & endurance metrics",
      "Tactical awareness scored against pro-academy benchmarks",
      "Reduced injury risk through screened movement profiling",
    ],
    duration: "12-week cycles · 5 sessions / week",
    format: "On-site · Nairobi HQ",
    level: "U13 – U23",
  },
  {
    id: "branding",
    tag: "02",
    icon: Sparkles,
    title: "Player Branding & Profiling",
    short: "Highlight reels, media kits, and social presence built for scouts.",
    long:
      "Talent gets noticed when it is packaged like a professional. Our in-house production team builds a complete scout-ready identity for every player — cinematic 4K highlight reels, statistical dossiers, photo libraries and an active social presence — and pushes that identity through our verified agent and club network across Europe, the Gulf and the Americas.",
    features: [
      "Cinematic 4K highlight reel with multi-cam coverage",
      "Scout-grade player profile, biometric & stats sheet",
      "Editorial photoshoot and brand portrait library",
      "Social media content strategy and posting calendar",
      "Verified player profile distributed to partner agents",
      "Personal portfolio site with download-ready media kit",
    ],
    outcomes: [
      "A professional digital footprint scouts can verify in seconds",
      "Distribution to 30+ agents and academies in our network",
      "Higher conversion from trial invitation to contract offer",
    ],
    duration: "4 – 6 weeks",
    format: "Hybrid · Nairobi + remote",
    level: "All levels",
  },
  {
    id: "scouting",
    tag: "03",
    icon: Search,
    title: "Trials & Scouting",
    short: "Curated trial events with verified club scouts and federation reps.",
    long:
      "Live exposure where it actually matters. We host closed-door showcases, invitational tournaments and combine-style ID camps attended by scouts from European, Middle-Eastern and African clubs, plus federation representatives. Every player leaves with a written performance report — strengths, gaps and a recommended next step — so progress never stalls.",
    features: [
      "Quarterly invitational showcase tournaments",
      "Combine-style ID events with biometric testing",
      "Direct, named introductions to scouts and agents",
      "Detailed written performance report after every trial",
      "Pathway to representation by FIFA-licensed agents",
      "Travel logistics handled for out-of-town invitations",
    ],
    outcomes: [
      "Average of 8 scout touchpoints per player per cycle",
      "Documented trial history attached to every profile",
      "Clear, honest feedback to guide the next 90 days",
    ],
    duration: "Year-round · quarterly major events",
    format: "On-site · International tours",
    level: "Selected players",
  },
  {
    id: "placement",
    tag: "04",
    icon: Plane,
    title: "Placement Opportunities",
    short: "Direct contracts and academy placements across global leagues.",
    long:
      "We close the loop. Through partner clubs across five continents we negotiate trials, professional contracts and full academy enrollments — handling visas, flights, accommodation, schooling and family support end to end. Players are never alone abroad: a dedicated welfare officer checks in weekly for the first season.",
    features: [
      "Contract & trial negotiation with partner clubs",
      "Visa, flights and travel logistics fully managed",
      "Academy enrollment from U15 through U23",
      "Schooling and accommodation arrangements",
      "Family liaison, welfare and 24/7 emergency support",
      "Post-placement performance check-ins for 12 months",
    ],
    outcomes: [
      "Players signed across Europe, Gulf and North America",
      "Full duty-of-care wrap for the first competitive season",
      "Long-term career planning beyond the first contract",
    ],
    duration: "Per opportunity",
    format: "Global · 5 continents",
    level: "Career-ready players",
  },
];

export const ProgramFeatureBullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-foreground/80">
    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-md bg-accent/15 grid place-items-center">
      <Check size={12} className="text-accent" />
    </span>
    <span className="leading-relaxed">{children}</span>
  </li>
);

export const ProgramOutcomeBullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-foreground/85">
    <Trophy size={14} className="text-accent mt-1 shrink-0" />
    <span className="leading-relaxed">{children}</span>
  </li>
);
