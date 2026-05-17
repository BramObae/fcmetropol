import { Heart, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* IMAGES (must exist in /public exactly as named) */
const images = [
  "/charity1.jpeg",
  "/charity2.jpeg",
  "/charity3.jpeg",
  "/charity4.jpeg",
  "/charity5.jpeg",
  "/charity6.jpeg",
  "/charity7.jpeg",
  "/charity8.jpeg",
  "/charity9.jpeg",
  "/charity10.jpeg",
  "/charity11.jpeg",
  "/charity12.jpeg",
  "/charity13.jpeg",
  "/charity14.jpeg",
  "/charity15.jpeg",
];

export const Charity = () => {
  return (
    <section id="charity" className="section-pad">

      <div className="container-pro">

        {/* HEADER STORY */}
        <div className="text-center max-w-4xl mx-auto mb-14">

          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Metropol Christmas Charity Cup
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            Football that creates{" "}
            <span className="text-gradient-gold">real opportunity.</span>
          </h2>

          <p className="mt-6 text-foreground/75 text-base md:text-lg leading-relaxed">
            The Metropol Christmas Charity Cup is an annual U15 football initiative
            that brings together young players from underserved communities and informal
            settlements for a structured football experience.
          </p>

          <p className="mt-4 text-foreground/70 text-sm md:text-base leading-relaxed">
            It is not just a tournament — it is a scouting platform, a mentorship space,
            and a Christmas experience. Players are given the opportunity to showcase their
            talent in professional conditions while also enjoying a memorable festive
            celebration built around football, dignity, and hope.
          </p>

        </div>

        {/* MAIN STORY IMAGE */}
        <div className="rounded-3xl overflow-hidden mb-10 glass-card">

          <img
            src={images[0]}
            alt="Charity Cup Opening Match"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />

          <div className="p-6">

            <div className="flex items-center gap-2 text-accent mb-2">
              <Trophy size={16} />
              <span className="text-xs uppercase tracking-[0.25em]">
                Opening Matches · Talent Identification Stage
              </span>
            </div>

            <p className="text-foreground/75 text-sm leading-relaxed">
              Matches are structured and professionally observed, allowing scouts and coaches
              to assess decision-making, discipline, teamwork, and raw potential under real game pressure.
            </p>

          </div>
        </div>

        {/* STORY GRID */}
        <div className="grid md:grid-cols-3 gap-5">

          {/* LEFT */}
          <div className="space-y-5">
            {images.slice(1, 6).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-56 object-cover rounded-2xl"
                loading="lazy"
              />
            ))}
          </div>

          {/* CENTER */}
          <div className="space-y-5">

            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">

              <div className="flex items-center gap-2 text-accent mb-3">
                <Heart size={16} />
                <span className="text-xs uppercase tracking-[0.25em]">
                  Community · Development · Mentorship
                </span>
              </div>

              <p className="text-foreground/75 text-sm leading-relaxed">
                Every player is guided beyond football — receiving mentorship, discipline,
                and exposure to structured training environments that build both character and ability.
              </p>

            </div>

            {images.slice(6, 10).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-60 object-cover rounded-2xl"
                loading="lazy"
              />
            ))}
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            {images.slice(10, 15).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-56 object-cover rounded-2xl"
                loading="lazy"
              />
            ))}
          </div>

        </div>

        {/* FINAL CTA */}
        <div className="text-center mt-14 max-w-2xl mx-auto">

          <p className="text-foreground/75 leading-relaxed">
            The Metropol Christmas Charity Cup is part of our long-term pathway system —
            identifying talent early, developing it properly, and connecting players to real football opportunities.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">

            <Button asChild variant="hero">
              <Link to="/join">
                <Heart className="mr-2" size={16} />
                Support Initiative
              </Link>
            </Button>

            <Button asChild variant="outlineLight">
              <Link to="/programs">
                <GraduationCap className="mr-2" size={16} />
                Development Pathway
              </Link>
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
};
