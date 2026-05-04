import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];

export const Hero = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {slides.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt="FC Metropol training"
            className="h-full w-full object-cover animate-ken-burns"
            fetchPriority={idx === 0 ? "high" : "auto"}
          />
        </div>
      ))}

      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="relative z-10 container-pro min-h-screen flex flex-col justify-center pt-32 pb-20">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-8">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-foreground/80">
              Global Football Development · Kenya
            </span>
          </div>

          <h1 className="font-display text-[14vw] md:text-[7.5rem] lg:text-[9rem] leading-[0.88] mb-6">
            From <span className="text-gradient-gold">Amateur</span>
            <br />
            to <span className="italic font-light tracking-tight" style={{ fontFamily: "Space Grotesk" }}>Professional.</span>
          </h1>

          <p className="text-lg md:text-2xl text-foreground/75 max-w-2xl mb-10 font-light">
            Develop. Package. Place. — An elite pathway forging the next generation of
            world-class footballers through training, branding, and international placement.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#join">
                Join the Program <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="#programs">
                <Play className="mr-1" /> Get Scouted
              </a>
            </Button>
          </div>
        </div>

        {/* slide indicators */}
        <div className="absolute bottom-10 left-6 lg:left-10 flex items-center gap-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1 rounded-full transition-all ${
                i === idx ? "w-12 bg-accent" : "w-6 bg-white/30"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-10 right-6 lg:right-10 hidden md:flex flex-col items-end gap-1 z-20 text-foreground/50 text-xs uppercase tracking-[0.3em]">
          <span>Scroll</span>
          <span className="h-10 w-px bg-foreground/30" />
        </div>
      </div>
    </section>
  );
};
