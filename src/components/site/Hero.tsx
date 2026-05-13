import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import hero1 from "@/assets/hero1.jpeg";
import hero2 from "@/assets/hero2.jpeg";
import hero3 from "@/assets/hero3.jpeg";

const slides = [hero1, hero2, hero3];

const countries = [
  { code: "ke", name: "Kenya" },
  { code: "tz", name: "Tanzania" },
  { code: "rw", name: "Rwanda" },
  { code: "za", name: "South Africa" },
  { code: "zm", name: "Zambia" },
  { code: "zw", name: "Zimbabwe" },
  { code: "eg", name: "Egypt" },
  { code: "tn", name: "Tunisia" },
  { code: "ma", name: "Morocco" },
  { code: "ee", name: "Estonia" },
  { code: "br", name: "Brazil" },
];

export const Hero = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((p) => (p + 1) % slides.length);
    }, 6000);

    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND SLIDES */}
      {slides.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt="training"
            className="h-full w-full object-cover animate-ken-burns"
            fetchPriority={idx === 0 ? "high" : "auto"}
          />
        </div>
      ))}

      {/* OVERLAYS */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="relative z-10 container-pro min-h-screen flex flex-col justify-center pt-32 pb-20">

        {/* FLAGS MARQUEE (FIXED USING YOUR CSS .marquee) */}
        <div className="mb-8">
          <div className="group relative overflow-hidden rounded-full glass py-2">

            {/* fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            {/* MARQUEE TRACK */}
            <div className="flex w-max marquee group-hover:[animation-play-state:paused]">

              {[...countries, [...countries], [...countries]].flat().map((c, idx) => (
                <div
                  key={idx}
                  className="mx-6 flex items-center gap-2 text-xs whitespace-nowrap"
                >
                  <img
                    src={`https://flagcdn.com/w40/${c.code}.png`}
                    alt={c.name}
                    className="h-4 w-6 rounded-sm object-cover"
                    loading="lazy"
                  />
                  <span className="uppercase tracking-wider">
                    {c.name}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="max-w-4xl animate-fade-up">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-8">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-foreground/80">
              FC Metropol HP · Kenya's Pathway to Pro Football
            </span>
          </div>

          <h1 className="font-display text-[13vw] sm:text-7xl md:text-[7.5rem] lg:text-[9rem] leading-[0.9] mb-6 break-words">
            From <span className="text-gradient-gold">Amateur</span>
            <br />
            to <span className="italic font-light">Professional.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-foreground/75 max-w-2xl mb-8 sm:mb-10 font-light">
            We develop, package and place Africa's most ambitious footballers
            pairing world-class coaching with personal branding and direct pathways
            to clubs across Europe, the Gulf and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <Link to="/join">
                Join the Program <ArrowRight className="ml-1" />
              </Link>
            </Button>

            <Button asChild variant="outlineLight" size="xl" className="w-full sm:w-auto">
              <Link to="/programs">
                <Play className="mr-1" /> Explore Programs
              </Link>
            </Button>
          </div>
        </div>

        {/* SLIDE INDICATORS */}
        <div className="absolute bottom-10 left-6 lg:left-10 flex items-center gap-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1 rounded-full transition-all ${
                i === idx ? "w-12 bg-accent" : "w-6 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 right-6 lg:right-10 hidden md:flex flex-col items-end gap-1 z-20 text-foreground/50 text-xs uppercase tracking-[0.3em]">
          <span>Scroll</span>
          <span className="h-10 w-px bg-foreground/30" />
        </div>

      </div>
    </section>
  );
};
