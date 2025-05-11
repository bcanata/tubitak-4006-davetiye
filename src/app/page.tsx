"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { downloadICS } from "../utils/downloadICS";
import { useParallax } from "../hooks/useParallax";
import Countdown from "react-countdown";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const { ref, tilt, handleMove, resetTilt } = useParallax(18);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [confettiRunning, setConfettiRunning] = useState(true);
  const [shareModal, setShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setConfettiRunning(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center" style={{ background: 'var(--background)' }}>
      <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={120} recycle={confettiRunning} />
      <Countdown
        date={new Date("2025-05-14T14:00:00+03:00")}
        renderer={({ days, hours, minutes, seconds, completed }) =>
          completed ? (
            <div className="bg-[color:var(--foreground)] text-[color:var(--background)] rounded-xl px-10 py-4 shadow-lg text-2xl font-bold flex items-center justify-center animate-pulse mb-8 mt-2 tracking-wide">
              Başladı!
            </div>
          ) : (
            <div className="w-full flex flex-col items-center mb-8 mt-2">
              <div className="text-center mb-2 text-[color:var(--foreground)] text-lg font-medium">
                TÜBİTAK 4006 Bilim Fuarı&#39;na Kalan Süre
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex flex-col items-center">
                  <div className="bg-[color:var(--foreground)] text-[color:var(--background)] rounded-lg px-4 py-3 shadow-lg min-w-[80px] text-center">
                    <span className="text-2xl font-bold">{days}</span>
                  </div>
                  <span className="mt-1 text-sm font-medium text-[color:var(--foreground)]">Gün</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[color:var(--foreground)] text-[color:var(--background)] rounded-lg px-4 py-3 shadow-lg min-w-[80px] text-center">
                    <span className="text-2xl font-bold">{hours}</span>
                  </div>
                  <span className="mt-1 text-sm font-medium text-[color:var(--foreground)]">Saat</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[color:var(--foreground)] text-[color:var(--background)] rounded-lg px-4 py-3 shadow-lg min-w-[80px] text-center">
                    <span className="text-2xl font-bold">{minutes}</span>
                  </div>
                  <span className="mt-1 text-sm font-medium text-[color:var(--foreground)]">Dakika</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[color:var(--foreground)] text-[color:var(--background)] rounded-lg px-4 py-3 shadow-lg min-w-[80px] text-center">
                    <span className="text-2xl font-bold">{seconds}</span>
                  </div>
                  <span className="mt-1 text-sm font-medium text-[color:var(--foreground)]">Saniye</span>
                </div>
              </div>
            </div>
          )
        }
      />
      <div className="z-10 flex flex-col items-center w-full px-2 sm:px-0">
        <div
          ref={ref}
          className="relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl aspect-[2000/1414] perspective-1000 cursor-pointer select-none shadow-xl rounded-xl"
          style={{
            touchAction: 'pan-y',
            WebkitTapHighlightColor: 'transparent',
          }}
          onClick={() => setFlipped((f) => !f)}
          onMouseMove={handleMove}
          onMouseLeave={resetTilt}
          onTouchMove={handleMove}
          onTouchEnd={resetTilt}
          aria-label="Davetiyeyi çevir"
        >
          <div
            className={`absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d]`}
            style={{
              transform: `rotateY(${flipped ? 180 : 0}deg) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            }}
          >
            {/* Front (1.png) */}
            <div className="absolute inset-0 [backface-visibility:hidden] shadow-xl rounded-xl overflow-hidden">
              <Image src="/1.png" alt="Davetiye Ön Yüz" fill className="object-contain" priority sizes="(max-width: 640px) 95vw, 768px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAn8B9Qn2qgAAAABJRU5ErkJggg==" />
            </div>
            {/* Back (2.png) */}
            <div className="absolute inset-0 [backface-visibility:hidden] rotate-y-180 shadow-xl rounded-xl overflow-hidden">
              <Image src="/2.png" alt="Davetiye Arka Yüz" fill className="object-contain" priority sizes="(max-width: 640px) 95vw, 768px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAn8B9Qn2qgAAAABJRU5ErkJggg==" />
            </div>
          </div>
        </div>
        <span className="mt-4 block text-white text-sm bg-black/60 px-4 py-1 rounded-full z-20 pointer-events-none select-none shadow-lg text-center">
          Tıklayarak sayfayı çevirin
        </span>
        <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
          <a
            href="https://maps.app.goo.gl/RN5z9NCVtaGmpMyn7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Konumumuz"
          >
            Konumumuz
          </a>
          <button
            onClick={downloadICS}
            className="btn-primary"
            type="button"
            aria-label="Takvime Ekle"
          >
            Takvime Ekle
          </button>
          <a
            href="/davetiye.pdf"
            download
            className="btn-primary"
            aria-label="Davetiyeyi İndir"
          >
            Davetiyeyi İndir
          </a>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Veliköy OSB MTAL - TÜBİTAK 4006 Okul Fuarı',
                  text: 'Veliköy OSB MTAL TÜBİTAK 4006 Okul Fuarı davetiyesine göz atın!',
                  url: window.location.href
                });
              } else {
                setShareModal(true);
              }
            }}
            className="btn-primary"
            type="button"
            aria-label="Paylaş"
          >
            Paylaş
          </button>
        </div>
      </div>
      {/* Share Modal */}
      {shareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 w-80 relative">
            <button aria-label="Kapat" className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={() => setShareModal(false)}>&times;</button>
            <div className="font-bold text-lg mb-2 text-center">Paylaş</div>
            <a href={`https://wa.me/?text=${encodeURIComponent(document.title + ' ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="WhatsApp ile paylaş">WhatsApp</a>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(document.title + ' ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Twitter ile paylaş">Twitter</a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Facebook ile paylaş">Facebook</a>
            <a href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(document.title)}`} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Telegram ile paylaş">Telegram</a>
            <button
              className="btn-primary"
              aria-label="Bağlantıyı kopyala"
              onClick={async () => {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
            >
              {copied ? "Kopyalandı!" : "Bağlantıyı Kopyala"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
