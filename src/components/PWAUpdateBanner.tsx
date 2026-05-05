import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, X } from "lucide-react";

export const PWAUpdateBanner = () => {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [updateSW, setUpdateSW] = useState<((reload?: boolean) => Promise<void>) | null>(null);

  useEffect(() => {
    const host = window.location.hostname;
    const isPreview =
      host.includes("id-preview--") ||
      host.includes("lovableproject.com") ||
      host === "localhost" ||
      host === "127.0.0.1";
    let inIframe = false;
    try { inIframe = window.self !== window.top; } catch { inIframe = true; }
    if (isPreview || inIframe) return;

    import("virtual:pwa-register").then(({ registerSW }) => {
      const update = registerSW({
        immediate: true,
        onNeedRefresh() { setNeedRefresh(true); },
      });
      setUpdateSW(() => update);
    }).catch(() => {});
  }, []);

  if (!needRefresh) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:left-auto z-[60] max-w-md"
    >
      <div className="glass rounded-2xl p-4 shadow-elegant flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-accent/20 grid place-items-center text-accent shrink-0">
          <RefreshCw size={18} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold">New version available</div>
          <div className="text-xs text-muted-foreground">Refresh to load the latest updates.</div>
        </div>
        <Button
          size="sm"
          variant="hero"
          onClick={() => updateSW?.(true)}
          className="min-h-[40px]"
        >
          Refresh
        </Button>
        <button
          aria-label="Dismiss"
          onClick={() => setNeedRefresh(false)}
          className="p-2 rounded-md hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
