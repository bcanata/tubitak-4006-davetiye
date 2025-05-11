"use client";
import Image from "next/image";
import { useState } from "react";

// Simple confetti effect
function Confetti() {
  // This is a placeholder for a confetti effect. For a real project, use a library like 'react-confetti' or 'canvas-confetti'.
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `hsl(${Math.random() * 360}, 80%, 60%)`,
            opacity: 0.7,
            animation: `fall ${2 + Math.random() * 2}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) scale(1); }
          100% { transform: translateY(110vh) scale(0.8); }
        }
      `}</style>
    </div>
  );
}

export default function InvitationPage() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100 overflow-hidden">
      <Confetti />
      <div className="absolute inset-0 bg-fixed bg-center bg-cover opacity-30 z-0" style={{ backgroundImage: 'url(/1.png)' }} />
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg text-center">TÜBİTAK 4006 Bilim Fuarı&#39;na Davetlisiniz!</h1>
        <p className="mb-6 text-lg sm:text-xl text-center max-w-xl drop-shadow">Okulumuzda düzenlenen TÜBİTAK 4006 Bilim Fuarı&#39;na katılımınızdan mutluluk duyarız. Davetiyenizi çevirmek için tıklayın!</p>
        <div
          className="relative w-[340px] h-[480px] sm:w-[420px] sm:h-[600px] perspective-1000 cursor-pointer group"
          onClick={() => setFlipped((f) => !f)}
        >
          <div
            className={`absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? 'rotate-y-180' : ''}`}
          >
            {/* Front */}
            <div className="absolute inset-0 [backface-visibility:hidden] shadow-xl rounded-xl overflow-hidden">
              <Image src="/1.png" alt="Davetiye Ön Yüz" fill className="object-cover" priority />
            </div>
            {/* Back */}
            <div className="absolute inset-0 [backface-visibility:hidden] rotate-y-180 shadow-xl rounded-xl overflow-hidden">
              <Image src="/2.png" alt="Davetiye Arka Yüz" fill className="object-cover" priority />
            </div>
          </div>
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs bg-black/60 px-3 py-1 rounded-full z-20 group-hover:scale-110 transition-transform">Ters çevirmek için tıklayın ↻</span>
        </div>
        <a
          href="/davetiye.pdf"
          download
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold text-lg"
        >
          Davetiyeyi PDF olarak indir
        </a>
      </div>
    </div>
  );
} 