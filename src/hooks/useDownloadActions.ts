"use client";
import { useState, useCallback } from "react";
import { downloadICS } from "@/utils/downloadICS";

interface UseDownloadActionsReturn {
  handleDownloadICS: () => Promise<void>;
  isDownloadingICS: boolean;
  error: Error | null;
}

export function useDownloadActions(): UseDownloadActionsReturn {
  const [isDownloadingICS, setIsDownloadingICS] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleDownloadICS = useCallback(async () => {
    setIsDownloadingICS(true);
    setError(null);

    try {
      downloadICS();
      // Add a small delay to show the loading state
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Download failed"));
      console.error("Failed to download ICS:", err);
    } finally {
      setIsDownloadingICS(false);
    }
  }, []);

  return {
    handleDownloadICS,
    isDownloadingICS,
    error
  };
}
