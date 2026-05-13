import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
   { to: "/partners", label: "Partners" },
  { to: "/gallery", label: "Gallery" },
  { to: "/stories", label: "Stories" },
  { to: "/join", label: "Join" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
    else triggerRef.current?.focus({ preventScroll: true });
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled || pathname !== "/" ? "py-3" : "py-5"
      )}
    >
      <div className="container-pro">
        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
            scrolled || pathname !== "/" ? "glass shadow-elegant" : "bg-transparent"
          )}
        >
          <Link to="/" className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md">
            <img
              src={logo}
              alt="FC Metropol HP Kenya crest"
              className="h-10 w-10 rounded-md object-contain drop-shadow"
              width={40}
              height={40}
            />
            <div className="leading-tight">
              <div className="font-display text-base tracking-wide">FC METROPOL HP</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Kenya · Est. 2021</div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "text-sm transition-colors relative rounded-md px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent after:content-[''] after:absolute after:left-1 after:-bottom-1.5 after:h-px after:bg-accent after:transition-all",
                      isActive
                        ? "text-accent after:w-[calc(100%-0.5rem)]"
                        : "text-foreground/80 hover:text-accent after:w-0 hover:after:w-[calc(100%-0.5rem)]"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block" />


          <button
            ref={triggerRef}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="lg:hidden p-2 text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </nav>

        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          hidden={!open}
          className={cn(
            "lg:hidden glass mt-2 rounded-2xl p-5",
            open && "animate-fade-up"
          )}
        >
          <ul className="flex flex-col gap-1">
            {links.map((l, i) => (
              <li key={l.to}>
                <NavLink
                  ref={i === 0 ? firstLinkRef : undefined}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "block py-3 px-3 rounded-lg min-h-[44px] text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isActive ? "text-accent bg-accent/10" : "text-foreground/90 hover:text-accent hover:bg-accent/5"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
