import h1 from "@/assets/hero-1.jpg";
import h3 from "@/assets/hero-3.jpg";
import g2 from "@/assets/gallery-2.jpg";

const stories = [
  {
    name: "Daniel Otieno",
    image: h1,
    from: "Nairobi · Amateur",
    to: "Portuguese Liga 3",
    quote: "Metropol gave me a runway I never had. From local pitches to a pro contract in 18 months.",
  },
  {
    name: "Marco Silva",
    image: g2,
    from: "Kisumu · Youth",
    to: "Belgian U21 Academy",
    quote: "The branding and trial pipeline made all the difference. Scouts came to me.",
  },
  {
    name: "Kelvin Mwangi",
    image: h3,
    from: "Mombasa · Amateur",
    to: "Saudi Pro League trials",
    quote: "Discipline, exposure, and a clear plan. That's what changed my life.",
  },
];

export const Stories = () => (
  <section id="stories" className="section-pad">
    <div className="container-pro">
      <div className="flex items-end justify-between gap-6 mb-12 md:mb-16 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Success Stories</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.9] max-w-3xl">
            Players whose lives we <span className="text-gradient-gold">transformed.</span>
          </h2>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {stories.map((s) => (
          <article key={s.name} className="group relative overflow-hidden rounded-3xl bg-card border border-border/60 hover-lift">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img src={s.image} alt={s.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 md:p-7">
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  {s.from} <span className="text-accent mx-1.5">→</span> {s.to}
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-3">{s.name}</h3>
                <p className="text-foreground/75 italic leading-relaxed text-sm">"{s.quote}"</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
