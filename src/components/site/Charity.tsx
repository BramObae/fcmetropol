import { Heart, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* IMAGES (PUBLIC FOLDER - ORDERED) */
const images = Array.from(
  { length: 15 },
  (_, i) => `/charity${i + 1}.jpg`
);

export const Charity = () => {
  return (
    <section id="charity" className="section-pad">

      <div className="container-pro">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Metropol Christmas Charity Cup
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            Football that creates <span className="text-gradient-gold">opportunity.</span>
          </h2>

          <p className="mt-6 text-foreground/75 text-base md:text-lg">
            Every December, we host a U15 scouting tournament for young players
            from underserved communities — combining competition, mentorship,
            and a structured pathway into elite football environments.
          </p>
        </div>

        {/* FEATURE IMAGE (CLEAR STORY MOMENT) */}
        <div className="rounded-3xl overflow-hidden glass-card mb-10">
          <img
            src={images[0]}
            alt="Charity opening moment"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />

          <div className="p-6">
            <div className="flex items-center gap-2 text-accent mb-2">
              <Trophy size={16} />
              <span className="text-xs uppercase tracking-[0.25em]">
                Tournament Opening & Talent Scouting
              </span>
            </div>

            <p className="text-foreground/75 text-sm md:text-base">
              Matches are structured to evaluate real football intelligence —
              decision making, discipline, teamwork, and resilience under pressure.
            </p>
          </div>
        </div>

        {/* STORY FLOW GRID (CONTROLLED, NOT RANDOM) */}
        <div className="grid md:grid-cols-3 gap-5">

          {/* LEFT COLUMN */}
          <div className="space-y-5">
            <img src={images[1]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[2]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[3]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[4]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[5]} className="rounded-2xl w-full h-56 object-cover glass-card" />
          </div>

          {/* CENTER STORY BLOCK */}
          <div className="space-y-5">

            <div className="glass-card rounded-3xl p-6">
              <div className="flex items-center gap-2 text-accent mb-3">
                <Heart size={16} />
                <span className="text-xs uppercase tracking-[0.25em]">
                  Community Impact
                </span>
              </div>

              <h3 className="font-display text-2xl mb-3">
                Beyond the game
              </h3>

              <p className="text-foreground/75 text-sm leading-relaxed">
                The experience goes beyond football — players are guided through
                discipline, teamwork, mentorship, and exposure to structured
                development environments that prepare them for higher levels.
              </p>
            </div>

            <img src={images[6]} className="rounded-2xl w-full h-72 object-cover glass-card" />
            <img src={images[7]} className="rounded-2xl w-full h-72 object-cover glass-card" />
            <img src={images[8]} className="rounded-2xl w-full h-72 object-cover glass-card" />

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5">
            <img src={images[9]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[10]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[11]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[12]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[13]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[14]} className="rounded-2xl w-full h-56 object-cover glass-card" />
          </div>

        </div>

        {/* FINAL MESSAGE */}
        <div className="text-center mt-16 max-w-2xl mx-auto">

          <p className="text-foreground/75">
            The Christmas Charity Cup is not just an event — it is a structured
            scouting environment where talent is identified, developed, and
            given a real pathway forward.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

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
