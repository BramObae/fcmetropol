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
  { code: "gb", name: "United Kingdom" },
  { code: "us", name: "United States" },
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
    <section
      id="top"
      className="relative min-h-screen overflow-hidden"
    >
      {/* BACKGROUND SLIDES */}
      {slides.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt="FC Metropol HP"
            className="h-full w-full object-cover animate-ken-burns scale-105"
            fetchPriority={idx === 0 ? "high" : "auto"}
          />
        </div>
      ))}

      {/* BALANCED OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08121f]/55 via-[#0b2340]/20 to-[#08121f]/75" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#06111f]/45 via-transparent to-[#06111f]/30" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,90,0.10),transparent_35%)]" />

      {/* CONTENT */}
      <div className="relative z-10 container-pro min-h-screen flex flex-col justify-center pt-32 pb-20">

        {/* GLOBAL NETWORK BAR */}
        <div className="mb-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6 shadow-lg">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />

            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-foreground/75 font-medium">
              FC Metropol HP · International Football Development Network
            </span>
          </div>

          {/* FLAGS MARQUEE */}
          <div className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl py-3">

            {/* EDGE FADES */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            {/* TRACK */}
            <div className="flex w-max marquee group-hover:[animation-play-state:paused]">

              {[...countries, ...countries].map((c, idx) => (
                <div
                  key={idx}
                  className="mx-6 flex items-center gap-3 whitespace-nowrap"
                >
                  <img
                    src={`https://flagcdn.com/w40/${c.code}.png`}
                    alt={c.name}
                    className="h-4 w-6 rounded-sm object-cover shadow-md"
                    loading="lazy"
                  />

                  <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/75">
                    {c.name}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="max-w-4xl animate-fade-up">

          {/* TITLE */}
          <h1
            className="
              font-display
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[7.5rem]
              leading-[0.92]
              tracking-[-0.03em]
              mb-5
              text-white
            "
          >
            From{" "}
            <span className="text-gradient-gold">
              Amateur
            </span>

            <br />

            <span className="text-white/95">
              to Professional.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-sm
              sm:text-base
              md:text-lg
              text-foreground/75
              max-w-2xl
              leading-relaxed
              font-normal
              mb-8
            "
          >
            FC Metropol HP identifies, develops and places ambitious African
            footballers through elite coaching, international scouting exposure,
            tournament tours and direct pathways into clubs, academies and
            scholarship opportunities across Europe, the Gulf, America and beyond.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

            <Button
              asChild
              variant="hero"
              size="xl"
              className="
                w-full sm:w-auto
                rounded-full
                px-7
                text-sm
                font-semibold
                shadow-xl
              "
            >
              <Link to="/join">
                Join the Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outlineLight"
              size="xl"
              className="
                w-full sm:w-auto
                rounded-full
                px-7
                text-sm
                border-white/15
                bg-white/[0.03]
                hover:bg-white/[0.06]
              "
            >
              <Link to="/programs">
                <Play className="mr-2 h-4 w-4" />
                Explore Programs
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
              className={`h-1 rounded-full transition-all duration-300 ${
                i === idx
                  ? "w-12 bg-accent"
                  : "w-6 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}

        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 right-6 lg:right-10 hidden md:flex flex-col items-end gap-2 z-20">

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>

          <span className="h-12 w-px bg-white/30" />

        </div>
      </div>
    </section>
  );
};
