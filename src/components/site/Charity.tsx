import { Heart, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* IMAGES */
const images = Array.from({ length: 15 }, (_, i) => `/charity${i + 1}.jpg`);

export const Charity = () => {
  return (
    <section id="charity" className="section-pad relative overflow-hidden">

      {/* BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container-pro relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Metropol Christmas Charity Cup
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            Football, <span className="text-gradient-gold">hope & opportunity.</span>
          </h2>

          <p className="mt-6 text-foreground/75 text-base md:text-lg">
            Each December, we bring together U15 players from underserved communities
            for a structured scouting event that combines football, mentorship,
            and a celebration that stays with them for life.
          </p>
        </div>

        {/* HERO IMAGE (MAIN STORY MOMENT) */}
        <div className="rounded-3xl overflow-hidden glass-card mb-10">
          <img
            src={images[0]}
            alt="Charity main moment"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />

          <div className="p-6">
            <div className="flex items-center gap-2 text-accent mb-2">
              <Trophy size={16} />
              <span className="text-xs uppercase tracking-[0.25em]">
                Opening Match & Scout Showcase
              </span>
            </div>

            <p className="text-foreground/75">
              The tournament opens with structured matches where talent is observed
              in real conditions — discipline, teamwork, and potential under pressure.
            </p>
          </div>
        </div>

        {/* STORY GRID (CONTROLLED FLOW, NOT RANDOM) */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">

          {/* SECTION A */}
          <div className="space-y-4">
            <img src={images[1]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[2]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[3]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[4]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[5]} className="rounded-2xl w-full h-56 object-cover glass-card" />
          </div>

          {/* SECTION B (FOCUS COLUMN) */}
          <div className="space-y-4">
            <div className="glass-card rounded-3xl p-6">
              <div className="flex items-center gap-2 text-accent mb-3">
                <Heart size={16} />
                <span className="text-xs uppercase tracking-[0.25em]">
                  Community Impact
                </span>
              </div>

              <h3 className="font-display text-2xl mb-3">
                More than football
              </h3>

              <p className="text-foreground/75 text-sm leading-relaxed">
                Beyond the pitch, players experience mentorship, teamwork,
                discipline, and a structured environment designed to build character
                as much as skill.
              </p>
            </div>

            <img src={images[6]} className="rounded-2xl w-full h-72 object-cover glass-card" />
            <img src={images[7]} className="rounded-2xl w-full h-72 object-cover glass-card" />
            <img src={images[8]} className="rounded-2xl w-full h-72 object-cover glass-card" />
          </div>

          {/* SECTION C */}
          <div className="space-y-4">
            <img src={images[9]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[10]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[11]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[12]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[13]} className="rounded-2xl w-full h-56 object-cover glass-card" />
            <img src={images[14]} className="rounded-2xl w-full h-56 object-cover glass-card" />
          </div>

        </div>

        {/* FINAL MESSAGE */}
        <div className="text-center mt-14 max-w-2xl mx-auto">

          <p className="text-foreground/75">
            The Christmas Charity Cup is not just an event — it is a structured pathway
            where talent is identified, nurtured, and given a real chance to grow.
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
                Explore Development Pathway
              </Link>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};
