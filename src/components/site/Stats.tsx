import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 240, suffix: "+", label: "Players Placed" },
  { value: 32, suffix: "", label: "Countries Reached" },
  { value: 1500, suffix: "+", label: "Trials Completed" },
  { value: 18, suffix: "", label: "Partner Clubs" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.floor(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl md:text-7xl text-gradient-gold">
      {n.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Stats = () => (
  <section className="relative py-14 md:py-20 border-y border-border/50">
    <div className="container-pro grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <Counter to={s.value} suffix={s.suffix} />
          <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);
