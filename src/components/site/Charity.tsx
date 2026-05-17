import { Heart, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* IMAGES */
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

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-14">

          <div className="text-xs uppercase tracking-[0.35em] text-accent mb-4">
            Annual Elite Youth Scouting Event
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.92] font-bold">
            <span className="text-white">
              Metropol Christmas
            </span>
            <br />
            <span className="text-gradient-gold">
              Charity Cup
            </span>
          </h2>

          <p className="mt-6 text-foreground/75 text-base md:text-lg leading-relaxed">
            The Metropol Christmas Charity Cup is a flagship U15 football scouting initiative
            that brings together talented young players from underserved communities and informal
            settlements for a professional football showcase combined with a life-changing Christmas experience.
          </p>

          <p className="mt-4 text-foreground/70 text-sm md:text-base leading-relaxed">
            It is where football meets opportunity — players are scouted in structured matches,
            mentored by coaches, and exposed to pathways into academies, scholarships, and professional
            football environments across the world. Beyond football, it creates dignity, joy, and hope
            during the festive season.
          </p>

        </div>

        {/* MAIN IMAGE */}
        <div className="rounded-3xl overflow-hidden glass-card mb-10">

          <div className="w-full h-[420px] md:h-[520px] lg:h-[600px] bg-black/10 flex items-center justify-center">

            <img
              src={images[0]}
              alt="Charity main event"
              className="w-full h-full object-contain md:object-cover object-center"
            />

          </div>

          <div className="p-6">

            <div className="flex items-center gap-2 text-accent mb-2">
              <Trophy size={16} />
              <span className="text-xs uppercase tracking-[0.25em]">
                Opening Matches · Talent Identification Stage
              </span>
            </div>

            <p className="text-foreground/75 text-sm leading-relaxed">
              Players are evaluated in structured match environments that simulate real football pressure —
              focusing on discipline, decision-making, teamwork, and raw potential.
            </p>

          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-5">

          {/* LEFT COLUMN */}
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

          {/* CENTER COLUMN */}
          <div className="space-y-5">

            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">

              <div className="flex items-center gap-2 text-accent mb-3">
                <Heart size={16} />
                <span className="text-xs uppercase tracking-[0.25em]">
                  Community Impact · Mentorship · Growth
                </span>
              </div>

              <p className="text-foreground/75 text-sm leading-relaxed">
                The initiative goes beyond football — offering mentorship, discipline-building environments,
                emotional support, and structured guidance that shapes both character and athletic development.
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

          {/* RIGHT COLUMN */}
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

        {/* CTA */}
        <div className="text-center mt-14 max-w-2xl mx-auto">

          <p className="text-foreground/75 leading-relaxed">
            The Metropol Christmas Charity Cup is not just an event — it is a structured pathway system
            designed to identify, develop, and connect young talent to real football opportunities.
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
