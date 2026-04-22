"use client";
import { EVENT_CONFIG } from "@/config/event.config";
import { useDownloadActions } from "@/hooks/useDownloadActions";
import { useShareActions } from "@/hooks/useShareActions";
import { ShareModal } from "../share-modal/ShareModal";

export function ActionButtons() {
  const { handleDownloadICS, isDownloadingICS } = useDownloadActions();
  const { handleShare, isSharing, shareModalOpen, closeShareModal } = useShareActions();

  return (
    <>
      <div className="flex flex-col gap-3 w-full max-w-xs mt-6">
        <button
          onClick={handleShare}
          className="btn-primary"
          type="button"
          aria-label="Paylaş"
          disabled={isSharing}
        >
          <ShareIcon />
          {isSharing ? "Yükleniyor..." : "Paylaş"}
        </button>

        <div className="grid grid-cols-3 gap-2">
          <a
            href={EVENT_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="Konumumuz"
          >
            <MapPinIcon />
            <span>Konum</span>
          </a>

          <button
            onClick={handleDownloadICS}
            className="btn-secondary"
            type="button"
            aria-label="Takvime Ekle"
            disabled={isDownloadingICS}
          >
            <CalendarIcon />
            <span>{isDownloadingICS ? "..." : "Takvim"}</span>
          </button>

          <a
            href="/davetiye.pdf"
            download
            className="btn-secondary"
            aria-label="Davetiyeyi İndir"
          >
            <DownloadIcon />
            <span>PDF</span>
          </a>
        </div>
      </div>

      <ShareModal isOpen={shareModalOpen} onClose={closeShareModal} />
    </>
  );
}

function ShareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
      <polyline points="16 6 12 2 8 6"/>
      <line x1="12" y1="2" x2="12" y2="15"/>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}
