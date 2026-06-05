import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png‎";

const SOCIALS = [
  { Icon: Instagram, href: "https://www.instagram.com/fcmhpacademyke", label: "Instagram" },
  { Icon: Facebook, href: "https://www.facebook.com/fcmhpacademyke", label: "Facebook" },
  { Icon: Twitter, href: "https://x.com/FCMHPACADEMYKE", label: "X / Twitter" },
];

export const Footer = () => (
  <footer className="border-t border-border/60 bg-card/30">
    <div className="container-pro py-10">

      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="FC Metropol HP Kenya crest"
            className="h-10 w-10 rounded-md object-contain"
          />
          <div className="leading-tight">
            <div className="font-display text-base tracking-wide">
              FC METROPOL HP
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Develop · Package · Place
            </div>
          </div>
        </Link>

        {/* NAV */}
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/75 justify-center">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/about" className="hover:text-accent">About</Link>
          <Link to="/programs" className="hover:text-accent">Programs</Link>
          <Link to="/gallery" className="hover:text-accent">Gallery</Link>
          <Link to="/stories" className="hover:text-accent">Stories</Link>
          <Link to="/partners" className="hover:text-accent">Partners</Link>
          <Link to="/join" className="hover:text-accent">Join</Link>
        </nav>

        {/* SOCIALS */}
        <div className="flex items-center justify-center gap-2">
          {SOCIALS.map(({ Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="h-9 w-9 rounded-full glass grid place-items-center hover:bg-accent hover:text-accent-foreground transition"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

      </div>

      {/* BOTTOM ROW */}
      <div className="mt-6 pt-5 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">

        {/* CONTACT */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} className="text-accent" />
            Nairobi, Kenya
          </span>

          <a href="tel:+254708666576" className="inline-flex items-center gap-1.5 hover:text-accent">
            <Phone size={13} className="text-accent" />
            +254 708 666 576
          </a>

          <a href="mailto:hello@fcmetropolhp.com" className="inline-flex items-center gap-1.5 hover:text-accent">
            <Mail size={13} className="text-accent" />
            hello@fcmetropolhp.com
          </a>
        </div>

        {/* CENTER SECTION (CLEAN + CENTERED) */}
        <div className="flex flex-col items-center justify-center text-center gap-2">

          <span className="text-center">
            © {new Date().getFullYear()} FC Metropol HP Kenya
          </span>

          <a
            href="https://www.vertatechsolution.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-[0.25em] text-accent hover:opacity-80 transition text-center"
          >
            Powered by Vertatech Solutions
          </a>

        </div>

      </div>

    </div>
  </footer>
);
