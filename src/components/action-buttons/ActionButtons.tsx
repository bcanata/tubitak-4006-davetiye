"use client";
import { EVENT_CONFIG } from "@/config/event.config";
import { useDownloadActions } from "@/hooks/useDownloadActions";
import { useShareActions } from "@/hooks/useShareActions";

export function ActionButtons() {
  const { handleDownloadICS, isDownloadingICS } = useDownloadActions();
  const { handleShare, isSharing, shareModalOpen, closeShareModal } = useShareActions();

  return (
    <>
      <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
        <LocationButton />
        <CalendarButton onClick={handleDownloadICS} disabled={isDownloadingICS} />
        <DownloadButton />
        <ShareButton onClick={handleShare} disabled={isSharing} />
      </div>
      <ShareModal isOpen={shareModalOpen} onClose={closeShareModal} />
    </>
  );
}

function LocationButton() {
  return (
    <a
      href={EVENT_CONFIG.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
      aria-label="Konumumuz"
    >
      Konumumuz
    </a>
  );
}

function CalendarButton({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      className="btn-primary"
      type="button"
      aria-label="Takvime Ekle"
      disabled={disabled}
    >
      {disabled ? "İndiriliyor..." : "Takvime Ekle"}
    </button>
  );
}

function DownloadButton() {
  return (
    <a
      href="/davetiye.pdf"
      download
      className="btn-primary"
      aria-label="Davetiyeyi İndir"
    >
      Davetiyeyi İndir
    </a>
  );
}

function ShareButton({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      className="btn-primary"
      type="button"
      aria-label="Paylaş"
      disabled={disabled}
    >
      {disabled ? "Yükleniyor..." : "Paylaş"}
    </button>
  );
}

// Import ShareModal at the bottom to avoid circular dependency
import { ShareModal } from "../share-modal/ShareModal";
