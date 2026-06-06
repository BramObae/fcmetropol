import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound.tsx";

/* LAYOUT */
import { Layout } from "@/components/site/Layout";

/* PAGES */
const ProgramsPage = lazy(() => import("./pages/ProgramsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const StoriesPage = lazy(() => import("./pages/StoriesPage"));
const JoinPage = lazy(() => import("./pages/JoinPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PartnersPage = lazy(() => import("./pages/PartnersPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));

/* ✅ FLOATING BUTTON (IMPORTANT) */
import LiveChat from "@/components/live-chat";

const queryClient = new QueryClient();

/* LOADING */
const PageFallback = () => (
  <div className="min-h-screen grid place-items-center">
    <div className="h-10 w-10 rounded-full border-2 border-accent border-t-transparent animate-spin" />
  </div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Suspense fallback={<PageFallback />}>
            <Routes>

              {/* MAIN LAYOUT ROUTES */}
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/programs" element={<ProgramsPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/stories" element={<StoriesPage />} />
                <Route path="/join" element={<JoinPage />} />
              </Route>

              {/* 404 */}
              <Route path="*" element={<NotFound />} />

            </Routes>

            {/* ✅ GLOBAL FLOATING COMPONENT (VERY IMPORTANT) */}
            <LiveChat />

          </Suspense>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
