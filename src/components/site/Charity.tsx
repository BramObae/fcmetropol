import { Heart, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import charity from "@/assets/charity.jpg";

export const Charity = () => (
  <section id="charity" className="section-pad relative">
    <div className="container-pro">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] order-2 lg:order-1">
          <img src={charity} alt="Charity initiative" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-accent/20" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="text-accent" size={18} />
              <span className="text-xs uppercase tracking-[0.25em]">Impact 2024</span>
            </div>
            <div className="font-display text-3xl">120+ scholarships granted</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Charity & Scholarship</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] mb-8">
            Football for <span className="text-gradient-gold">every child.</span>
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed mb-6 font-light">
            We believe talent is universal — opportunity is not. Our scholarship program covers
            training, gear, and travel for less-advantaged kids with the gift of football.
          </p>
          <p className="text-foreground/70 mb-10">
            Every scholarship granted is a future rewritten — and a community uplifted.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg">
              <a href="#join"><Heart size={18} /> Support a Player</a>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <a href="#join"><GraduationCap size={18} /> Apply for Scholarship</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
