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

/* FLAGS */
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
    <section className="relative min-h-screen overflow-hidden">

      {/* ================= FLAGS (TOP MOST ELEMENT) ================= */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <div className="overflow-hidden border-b border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="flex w-max marquee py-3">
            {[...countries, ...countries].map((c, idx) => (
              <div
                key={idx}
                className="mx-6 flex items-center gap-3 whitespace-nowrap"
              >
                <img
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  alt={c.name}
                  className="h-4 w-6 rounded-sm object-cover"
                />
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/80">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BACKGROUND SLIDES ================= */}
      {slides.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt="background"
            className="h-full w-full object-cover scale-105"
          />
        </div>
      ))}

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 container-pro min-h-screen flex flex-col justify-center pt-36 pb-20">

        {/* TOP TAG */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/10">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/80">
              International Football Pathways
            </span>
          </div>
        </div>

        {/* MAIN TEXT */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.92] text-white">
          From <span className="text-gradient-gold">Amateur</span>
          <br />
          to Professional.
        </h1>

        <p className="mt-6 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed">
          We identify, develop and place football talent through elite coaching,
          scouting exposure, tournaments, and structured international pathways
          across Europe, America, and beyond.
        </p>

        {/* BUTTONS */}
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

    </section>
  );
};
