import { Target, Award, Globe2 } from "lucide-react";

const pillars = [
  { icon: Target, title: "Skill Development", desc: "Elite-level training methodologies tailored to each athlete's growth curve." },
  { icon: Award, title: "Player Branding", desc: "Professional profiling, media kits, and presence to make scouts notice." },
  { icon: Globe2, title: "Global Placement", desc: "Direct pathways to clubs, academies, and trials across five continents." },
];

export const About = () => (
  <section id="about" className="section-pad relative">
    <div className="container-pro">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">About</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.9]">
            Where talent meets <span className="text-gradient-gold">opportunity.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-foreground/75 font-light leading-relaxed">
          <p>
            FC Metropol HP Kenya is a global football development program built to bridge the gap
            between raw talent and professional football. We identify, mold, and present players
            to the world stage.
          </p>
          <p>
            Our mission is simple: transform amateur players into world-class professionals
            through structured training, modern branding, and an unmatched international
            placement network.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mt-14 md:mt-20">
        {pillars.map((p) => (
          <div key={p.title} className="glass-card rounded-2xl p-6 md:p-8 hover-lift group">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center mb-6 group-hover:shadow-[var(--shadow-glow)] transition-shadow">
              <p.icon className="text-accent" size={26} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
