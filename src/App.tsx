import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/site/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound.tsx";

const ProgramsPage = lazy(() => import("./pages/ProgramsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const StoriesPage = lazy(() => import("./pages/StoriesPage"));
const JoinPage = lazy(() => import("./pages/JoinPage"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen grid place-items-center" role="status" aria-label="Loading">
    <div className="h-10 w-10 rounded-full border-2 border-accent border-t-transparent animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/join" element={<JoinPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
