import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROGRAMS } from "./programs-data";

const programs = PROGRAMS.map((p) => ({ icon: p.icon, title: p.title, desc: p.short, tag: p.tag, id: p.id }));

export const Programs = () => (
  <section id="programs" className="section-pad relative">
    <div className="container-pro">
      <div className="flex items-end justify-between gap-6 mb-10 md:mb-16 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Programs</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.9] max-w-2xl">
            Built for the long road <span className="text-gradient-gold">to pro.</span>
          </h2>
        </div>
        <p className="max-w-md text-foreground/70">
          A complete pathway — from first touch to first contract — designed and delivered by professionals.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {programs.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 md:p-10 hover:border-accent/50 transition-all duration-500"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-accent/15 transition-colors duration-700" />
            <div className="relative flex items-start justify-between mb-8 md:mb-10">
              <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl glass grid place-items-center">
                <p.icon className="text-accent" />
              </div>
              <span className="font-display text-2xl text-muted-foreground/60">{p.tag}</span>
            </div>
            <h3 className="relative text-xl md:text-3xl font-semibold mb-3">{p.title}</h3>
            <p className="relative text-muted-foreground max-w-md mb-8">{p.desc}</p>
            <Link to={`/programs#${p.id}`} className="relative inline-flex items-center gap-2 text-accent text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
              Learn more <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);
