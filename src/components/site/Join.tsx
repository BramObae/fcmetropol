import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, Youtube } from "lucide-react";

const YOUTUBE_RE =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|shorts\/|embed\/|live\/)[\w-]+|youtu\.be\/[\w-]+)(\S*)?$/i;

const Required = () => (
  <span className="text-accent ml-1" aria-label="required">*</span>
);

export const Join = () => {
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState("");
  const [videoError, setVideoError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!YOUTUBE_RE.test(video.trim())) {
      setVideoError("Please paste a valid YouTube link (youtube.com or youtu.be).");
      toast.error("Invalid YouTube link", { description: "Showcase must be a YouTube URL." });
      return;
    }
    setVideoError(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Application received", {
        description: "Our scouting team will be in touch within 5 business days.",
      });
      (e.target as HTMLFormElement).reset();
      setVideo("");
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
              Submit your details and a YouTube showcase link. Our scouts review every application.
            </p>
            <ul className="space-y-3 text-foreground/70">
              {["Open to all players age 15–25", "YouTube video review by certified scouts", "Response within 5 business days"].map((t) => (
                <li key={t} className="flex gap-3"><span className="text-accent">●</span>{t}</li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-muted-foreground">
              Fields marked <span className="text-accent">*</span> are required.
            </p>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Full name<Required /></Label>
                <Input id="name" name="name" required maxLength={100} className="mt-2 bg-background/50" />
              </div>
              <div>
                <Label htmlFor="phone">Phone number<Required /></Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  pattern="[0-9+\-\s()]{7,20}"
                  placeholder="+254 7XX XXX XXX"
                  className="mt-2 bg-background/50"
                />
              </div>
              <div>
                <Label htmlFor="age">Age<Required /></Label>
                <Input id="age" name="age" type="number" min={10} max={40} required className="mt-2 bg-background/50" />
              </div>
              <div>
                <Label htmlFor="email">Email<Required /></Label>
                <Input id="email" name="email" type="email" required maxLength={255} className="mt-2 bg-background/50" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="position">Position<Required /></Label>
                <Input id="position" name="position" required placeholder="e.g. Striker, CDM" className="mt-2 bg-background/50" />
              </div>
            </div>

            <div>
              <Label htmlFor="experience">Experience</Label>
              <Textarea id="experience" name="experience" rows={4} maxLength={1000} placeholder="Clubs, leagues, achievements..." className="mt-2 bg-background/50" />
            </div>

            <div>
              <Label htmlFor="video">YouTube showcase link<Required /></Label>
              <div className="mt-2 relative">
                <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 text-accent" size={18} />
                <Input
                  id="video"
                  name="video"
                  type="url"
                  required
                  value={video}
                  onChange={(e) => { setVideo(e.target.value); if (videoError) setVideoError(null); }}
                  placeholder="https://youtube.com/watch?v=... or https://youtu.be/..."
                  className="pl-10 bg-background/50"
                  aria-invalid={!!videoError}
                  aria-describedby="video-help"
                />
              </div>
              <p id="video-help" className={`mt-2 text-xs ${videoError ? "text-destructive" : "text-muted-foreground"}`}>
                {videoError ?? "Only YouTube links are accepted (youtube.com or youtu.be)."}
              </p>
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
