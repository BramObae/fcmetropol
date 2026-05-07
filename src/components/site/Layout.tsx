import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PWAUpdateBanner } from "@/components/PWAUpdateBanner";

/** Activates `.reveal` elements as they scroll into view — gives every page a dynamic feel. */
const RevealRunner = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    let frame = 0;
    const setup = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      if (!els.length) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    };
    // Wait a tick so lazy-loaded sections mount first.
    let cleanup: (() => void) | undefined;
    frame = window.requestAnimationFrame(() => { cleanup = setup(); });
    const interval = window.setInterval(() => { cleanup?.(); cleanup = setup(); }, 800);
    const stop = window.setTimeout(() => window.clearInterval(interval), 4000);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(interval);
      window.clearTimeout(stop);
      cleanup?.();
    };
  }, [pathname]);
  return null;
};

export const Layout = () => (
  <div className="min-h-screen bg-background text-foreground flex flex-col">
    <ScrollToTop />
    <RevealRunner />
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <PWAUpdateBanner />
  </div>
);
