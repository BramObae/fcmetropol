import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PWAUpdateBanner } from "@/components/PWAUpdateBanner";

export const Layout = () => (
  <div className="min-h-screen bg-background text-foreground flex flex-col">
    <ScrollToTop />
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <PWAUpdateBanner />
  </div>
);
