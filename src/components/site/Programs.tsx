import { Dumbbell, Sparkles, Search, Plane, ArrowUpRight } from "lucide-react";

const programs = [
  { icon: Dumbbell, title: "Training & Development", desc: "Position-specific coaching, S&C, and tactical mastery from elite coaches.", tag: "01" },
  { icon: Sparkles, title: "Player Branding & Profiling", desc: "Highlight reels, media kits, and social presence built for scouts.", tag: "02" },
  { icon: Search, title: "Trials & Scouting", desc: "Curated trial events with verified club scouts and federation reps.", tag: "03" },
  { icon: Plane, title: "Placement Opportunities", desc: "Direct contracts and academy placements across global leagues.", tag: "04" },
];

export const Programs = () => (
  <section id="programs" className="section-pad relative">
    <div className="container-pro">
      <div className="flex items-end justify-between gap-6 mb-16 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Programs</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] max-w-2xl">
            Built for the long road <span className="text-gradient-gold">to pro.</span>
          </h2>
        </div>
        <p className="max-w-md text-foreground/70">
          A complete pathway — from first touch to first contract — designed and delivered by professionals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {programs.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-10 hover:border-accent/50 transition-all duration-500"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-accent/15 transition-colors duration-700" />
            <div className="relative flex items-start justify-between mb-10">
              <div className="h-14 w-14 rounded-xl glass grid place-items-center">
                <p.icon className="text-accent" />
              </div>
              <span className="font-display text-2xl text-muted-foreground/60">{p.tag}</span>
            </div>
            <h3 className="relative text-2xl md:text-3xl font-semibold mb-3">{p.title}</h3>
            <p className="relative text-muted-foreground max-w-md mb-8">{p.desc}</p>
            <a href="#join" className="relative inline-flex items-center gap-2 text-accent text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
              Learn more <ArrowUpRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
