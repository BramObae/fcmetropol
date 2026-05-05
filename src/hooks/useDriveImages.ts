import { useEffect, useState } from "react";


export type DriveImage = { id: string; name: string; url: string; thumb: string; createdTime?: string | null };

const cache = new Map<string, DriveImage[]>();

export function useDriveImages(folderId: string) {
  const [images, setImages] = useState<DriveImage[]>(cache.get(folderId) ?? []);
  const [loading, setLoading] = useState(!cache.has(folderId));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (cache.has(folderId)) {
      setImages(cache.get(folderId)!);
      setLoading(false);
      return;
    }
    setLoading(true);

    const url = `https://mjnijxotbcovosbeofsz.supabase.co/functions/v1/drive-images?folderId=${folderId}&size=s1600`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        if (data.error) throw new Error(data.error);
        cache.set(folderId, data.files);
        setImages(data.files);
      })
      .catch((e) => !cancelled && setError(e.message))
      .finally(() => !cancelled && setLoading(false));

    return () => {
      cancelled = true;
    };
  }, [folderId]);

  return { images, loading, error };
}
