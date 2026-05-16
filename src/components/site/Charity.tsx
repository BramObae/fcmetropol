import { Heart, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* IMPORTANT:
   Use EXACT filenames as they exist in /public
   You said they are .jpeg → so we use .jpeg everywhere
*/

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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Metropol Christmas Charity Cup
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl">
            Football creating real <span className="text-gradient-gold">opportunity</span>
          </h2>

          <p className="mt-6 text-foreground/75">
            A structured U15 scouting event giving young players from underserved communities
            a chance to play, be seen, and experience professional football standards.
          </p>
        </div>

        {/* MAIN IMAGE */}
        <div className="rounded-3xl overflow-hidden mb-10">
          <img
            src={images[0]}
            alt="Charity main event"
            className="w-full h-[420px] md:h-[520px] object-cover"
            onError={(e) => {
              console.log("Image failed:", images[0]);
            }}
          />

          <div className="p-6">
            <div className="flex items-center gap-2 text-accent mb-2">
              <Trophy size={16} />
              <span className="text-xs uppercase tracking-[0.25em]">
                Opening Matches & Scouting
              </span>
            </div>

            <p className="text-foreground/75 text-sm">
              Players are assessed in real match conditions — not trials, but structured football environments.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-5">

          <div className="space-y-5">
            {images.slice(1, 6).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-56 object-cover rounded-2xl"
              />
            ))}
          </div>

          <div className="space-y-5">

            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <div className="flex items-center gap-2 text-accent mb-3">
                <Heart size={16} />
                <span className="text-xs uppercase tracking-[0.25em]">
                  Community Impact
                </span>
              </div>

              <p className="text-foreground/75 text-sm">
                Beyond football — discipline, mentorship, structure, and exposure define the experience.
              </p>
            </div>

            {images.slice(6, 10).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-60 object-cover rounded-2xl"
              />
            ))}
          </div>

          <div className="space-y-5">
            {images.slice(10, 15).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-56 object-cover rounded-2xl"
              />
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-14">

          <p className="text-foreground/75 max-w-xl mx-auto">
            The Christmas Charity Cup is a structured pathway — identifying and developing talent through real football environments.
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
