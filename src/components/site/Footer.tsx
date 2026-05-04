import { Instagram, Facebook, Twitter, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const SOCIALS = [
  { Icon: Instagram, href: "https://www.instagram.com/fcmhpacademyke" },
  { Icon: Facebook, href: "https://www.facebook.com/fcmhpacademyke" },
  { Icon: Twitter, href: "https://x.com/FCMHPACADEMYKE" },
];

export const Footer = () => (
  <footer className="border-t border-border/60 bg-card/30">
    <div className="container-pro py-16">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-[var(--shadow-glow)]">
              <span className="font-display text-accent text-lg">M</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg">FC METROPOL HP</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Kenya</div>
            </div>
          </div>
          <p className="text-foreground/70 max-w-md leading-relaxed">
            Building the next generation of professional footballers — through training,
            branding, and global placement.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Explore</div>
          <ul className="space-y-2 text-foreground/75">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/programs" className="hover:text-accent">Programs</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/stories" className="hover:text-accent">Success Stories</Link></li>
            <li><Link to="/join" className="hover:text-accent">Join</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Contact</div>
          <ul className="space-y-3 text-foreground/75">
            <li className="flex items-center gap-3"><MapPin size={16} className="text-accent" /> Nairobi, Kenya</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-accent" /> hello@fcmetropolhp.com</li>
          </ul>
          <div className="flex gap-3 mt-6">
            {SOCIALS.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full glass grid place-items-center hover:bg-accent hover:text-accent-foreground transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} FC Metropol HP Kenya. All rights reserved.</div>
        <div className="uppercase tracking-[0.25em]">Develop · Package · Place</div>
      </div>
    </div>
  </footer>
);
