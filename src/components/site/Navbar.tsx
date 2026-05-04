import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#global", label: "Global Reach" },
  { href: "#gallery", label: "Gallery" },
  { href: "#stories", label: "Stories" },
  { href: "#charity", label: "Charity" },
  { href: "#join", label: "Join" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container-pro">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
            scrolled ? "glass shadow-elegant" : "bg-transparent"
          )}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-[var(--shadow-glow)]">
              <span className="font-display text-accent text-lg leading-none">M</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-base tracking-wide">FC METROPOL</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">HP · Kenya</div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-foreground/80 hover:text-accent transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button asChild variant="hero" size="sm">
              <a href="#join">Get Scouted</a>
            </Button>
          </div>

          <button
            aria-label="Menu"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden glass mt-2 rounded-2xl p-5 animate-fade-up">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block py-2 text-foreground/90 hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild variant="hero" className="w-full">
                  <a href="#join" onClick={() => setOpen(false)}>Get Scouted</a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
