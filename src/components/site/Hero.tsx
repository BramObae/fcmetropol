import { Heart, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* IMPORTANT: ALL .jpeg (NOT .jpg) */
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
    <section id="charity" className="section-pad relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container-pro relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Metropol Christmas Charity Cup
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            Football, <span className="text-gradient-gold">hope & opportunity.</span>
          </h2>

          <p className="mt-6 text-foreground/75 text-base md:text-lg">
            A structured U15 Christmas showcase where talent meets opportunity
            through scouting, mentorship, and community celebration.
          </p>
        </div>

        {/* FEATURE IMAGE (FOR VISIBILITY CHECK) */}
        <div className="rounded-3xl overflow-hidden glass-card mb-8">
          <img
            src={images[0]}
            alt="charity main"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">

          {images.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden glass-card">
              <img
                src={img}
                alt={`charity-${i + 1}`}
                className="w-full h-44 md:h-52 object-cover"
                loading="lazy"
                onError={(e) => {
                  // DEBUG HELPER (shows broken path if needed)
                  console.log("Missing image:", img);
                }}
              />
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-14 max-w-2xl mx-auto">
          <p className="text-foreground/75">
            The Christmas Cup is a structured pathway that transforms community
            talent into real football opportunity.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero">
              <Link to="/join">
                <Heart className="mr-2" size={16} />
                Support a Player
              </Link>
            </Button>

            <Button asChild variant="outlineLight">
              <Link to="/programs">
                <GraduationCap className="mr-2" size={16} />
                Explore Pathway
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
