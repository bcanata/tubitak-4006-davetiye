"use client";
import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/config/site.config";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen) {
      const modal = document.querySelector("[role=dialog]");
      if (modal) {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        firstElement?.focus();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const shareUrl = typeof window !== "undefined" ? window.location.href : SITE_CONFIG.url;
  const shareTitle = typeof document !== "undefined" ? document.title : SITE_CONFIG.title;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 w-80 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Kapat"
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 id="share-modal-title" className="font-bold text-lg mb-2 text-center">
          Paylaş
        </h2>

        <ShareButton
          href={`https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`}
          label="WhatsApp"
          ariaLabel="WhatsApp ile paylaş"
        />

        <ShareButton
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`}
          label="Twitter"
          ariaLabel="Twitter ile paylaş"
        />

        <ShareButton
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          label="Facebook"
          ariaLabel="Facebook ile paylaş"
        />

        <ShareButton
          href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
          label="Telegram"
          ariaLabel="Telegram ile paylaş"
        />

        <button
          className="btn-primary"
          aria-label="Bağlantıyı kopyala"
          onClick={handleCopyLink}
        >
          {copied ? "Kopyalandı!" : "Bağlantıyı Kopyala"}
        </button>
      </div>
    </div>
  );
}

interface ShareButtonProps {
  href: string;
  label: string;
  ariaLabel: string;
}

function ShareButton({ href, label, ariaLabel }: ShareButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
      aria-label={ariaLabel}
    >
      {label}
    </a>
  );
}
