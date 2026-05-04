import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Upload, Send } from "lucide-react";

export const Join = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Application received", {
        description: "Our scouting team will be in touch within 5 business days.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="join" className="section-pad relative">
      <div className="container-pro">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Join · Apply</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.9] mb-6 md:mb-8">
              Your trial <span className="text-gradient-gold">starts here.</span>
            </h2>
            <p className="text-foreground/75 text-base sm:text-lg font-light leading-relaxed mb-8">
              Submit your details and a short showcase. Our scouts review every application.
            </p>
            <ul className="space-y-3 text-foreground/70">
              {["Open to all players age 15–25", "Video review by certified scouts", "Response within 5 business days"].map((t) => (
                <li key={t} className="flex gap-3"><span className="text-accent">●</span>{t}</li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" required maxLength={100} className="mt-2 bg-background/50" />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" min={10} max={40} required className="mt-2 bg-background/50" />
              </div>
              <div>
                <Label htmlFor="position">Position</Label>
                <Input id="position" required placeholder="e.g. Striker, CDM" className="mt-2 bg-background/50" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required className="mt-2 bg-background/50" />
              </div>
            </div>
            <div>
              <Label htmlFor="experience">Experience</Label>
              <Textarea id="experience" rows={4} required placeholder="Clubs, leagues, achievements..." className="mt-2 bg-background/50" />
            </div>
            <div>
              <Label htmlFor="video">Showcase video / images</Label>
              <div className="mt-2 border-2 border-dashed border-border rounded-xl p-6 text-center bg-background/30 hover:border-accent/60 transition cursor-pointer">
                <Upload className="mx-auto mb-2 text-accent" />
                <p className="text-sm text-muted-foreground">Drop files here or browse</p>
                <input id="video" type="file" multiple className="sr-only" />
              </div>
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : <>Submit Application <Send size={16} /></>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
