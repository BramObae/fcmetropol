import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { GlobalReach } from "@/components/site/GlobalReach";
import { Gallery } from "@/components/site/Gallery";
import { Partners } from "@/components/site/Partners";
import { Stories } from "@/components/site/Stories";
import { Charity } from "@/components/site/Charity";
import { Join } from "@/components/site/Join";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "FC Metropol HP Kenya — From Amateur to Professional";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "FC Metropol HP Kenya — global football development. Develop, package, and place elite players worldwide."
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <GlobalReach />
      <Gallery />
      <Partners />
      <Stories />
      <Charity />
      <Join />
      <Footer />
    </main>
  );
};

export default Index;
