import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

import hero1 from "@/assets/hero1.jpeg";
import hero2 from "@/assets/hero2.jpeg";
import hero3 from "@/assets/hero3.jpeg";

import back1 from "@/assets/back1.jpeg";
import back2 from "@/assets/back2.jpeg";
import back3 from "@/assets/back3.jpeg";
import back4 from "@/assets/back4.jpeg";
import back5 from "@/assets/back5.jpeg";
import back6 from "@/assets/back6.jpeg";
import back7 from "@/assets/back7.jpeg";

const slides = [
  hero1,
  hero2,
  hero3,
  back1,
  back2,
  back3,
  back4,
  back5,
  back6,
  back7,
];

/* FULL COUNTRIES LIST YOU REQUESTED */
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
  { code: "lv", name: "Latvia" },
  { code: "lt", name: "Lithuania" },

  { code: "pl", name: "Poland" },
  { code: "pt", name: "Portugal" },
  { code: "es", name: "Spain" },

  { code: "cz", name: "Czech Republic" },
  { code: "sk", name: "Slovakia" },
  { code: "si", name: "Slovenia" },

  { code: "ge", name: "Georgia" },
  { code: "ro", name: "Romania" },
  { code: "tr", name: "Turkey" },

  { code: "gb", name: "United Kingdom" },
  { code: "us", name: "United States" },
  { code: "br", name: "Brazil" },

  { code: "eg", name: "Egypt" },
  { code: "tn", name: "Tunisia" },
  { code: "ma", name: "Morocco" },

  { code: "us", name: "USA Colleges 🎓" },
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
    <section id="top" className="relative min-h-screen overflow-hidden">

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
            className="h-full w-full object-cover animate-ken-burns scale-105"
            alt="hero"
          />
        </div>
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08121f]/60 via-[#0b2340]/25 to-[#08121f]/80" />

      {/* CONTENT */}
      <div className="relative z-10 container-pro min-h-screen flex flex-col justify-center pt-32 pb-20">

        {/* ================= FLAGS (NOW DIRECTLY BELOW NAV) ================= */}
        <div className="mb-10">

          <div className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl py-3">

            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex w-max marquee group-hover:[animation-play-state:paused]">
              {[...countries, ...countries].map((c, idx) => (
                <div
                  key={idx}
                  className="mx-6 flex items-center gap-3 whitespace-nowrap"
                >
                  <img
                    src={`https://flagcdn.com/w40/${c.code}.png`}
                    className="h-4 w-6 rounded-sm object-cover"
                    alt={c.name}
                  />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/80">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HERO TEXT */}
        <div className="max-w-4xl animate-fade-up">

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.92] text-white">
            From <span className="text-gradient-gold">Amateur</span>
            <br />
            to Professional.
          </h1>

          <p className="mt-6 max-w-2xl text-white/70 text-base md:text-lg">
            We develop, expose and place football talent through structured
            pathways across Europe, America, and global academies.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/join">
                Join the Program <ArrowRight className="ml-2" />
              </Link>
            </Button>

            <Button asChild variant="outlineLight" size="xl">
              <Link to="/programs">
                <Play className="mr-2" /> Explore Programs
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
