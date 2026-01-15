"use client";
import { useState, useCallback } from "react";
import { EVENT_CONFIG } from "@/config/event.config";
import { SITE_CONFIG } from "@/config/site.config";

interface UseShareActionsReturn {
  handleShare: () => Promise<void>;
  isSharing: boolean;
  shareModalOpen: boolean;
  closeShareModal: () => void;
  error: Error | null;
}

export function useShareActions(): UseShareActionsReturn {
  const [isSharing, setIsSharing] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleShare = useCallback(async () => {
    setIsSharing(true);
    setError(null);

    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({
          title: `${EVENT_CONFIG.schoolName} - ${EVENT_CONFIG.name}`,
          text: `${EVENT_CONFIG.schoolName} ${EVENT_CONFIG.shortName} Okul Fuarı davetiyesine göz atın!`,
          url: SITE_CONFIG.url
        });
      } else {
        // Fallback: show modal with sharing options
        setShareModalOpen(true);
      }
    } catch (err) {
      // User cancelled the share dialog - not an error
      if (err instanceof Error && err.name !== "AbortError") {
        setError(err);
        console.error("Failed to share:", err);
      }
    } finally {
      setIsSharing(false);
    }
  }, []);

  const closeShareModal = useCallback(() => {
    setShareModalOpen(false);
  }, []);

  return {
    handleShare,
    isSharing,
    shareModalOpen,
    closeShareModal,
    error
  };
}
