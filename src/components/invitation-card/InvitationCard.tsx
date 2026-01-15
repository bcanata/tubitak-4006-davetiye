"use client";
import Image from "next/image";
import { useState } from "react";
import { useParallax } from "@/hooks/useParallax";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { UI_CONFIG } from "@/config/ui.config";

interface InvitationCardProps {
  onFlip?: (isFlipped: boolean) => void;
}

export function InvitationCard({ onFlip }: InvitationCardProps) {
  const [flipped, setFlipped] = useState(false);
  const reducedMotion = useReducedMotion();
  const { ref, tilt, handleMove, resetTilt } = useParallax(UI_CONFIG.parallax.maxTilt);
  const flipDuration = reducedMotion ? 0 : UI_CONFIG.animation.flipDuration;

  const handleFlip = () => {
    const newFlippedState = !flipped;
    setFlipped(newFlippedState);
    onFlip?.(newFlippedState);
  };

  return (
    <div
      ref={ref}
      className="relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl aspect-[2000/1414] perspective-1000 cursor-pointer select-none shadow-xl rounded-xl"
      style={{
        touchAction: 'pan-y',
        WebkitTapHighlightColor: 'transparent',
      }}
      onClick={handleFlip}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      onTouchMove={handleMove}
      onTouchEnd={resetTilt}
      aria-label="Davetiyeyi çevir"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleFlip();
        }
      }}
    >
      <div
        className={`absolute inset-0 transition-transform duration-[${flipDuration}ms] [transform-style:preserve-3d]`}
        style={{
          transform: `rotateY(${flipped ? 180 : 0}deg) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transitionDuration: `${flipDuration}ms`
        }}
      >
        <CardFace
          src={UI_CONFIG.card.frontImage}
          alt={UI_CONFIG.card.altTextFront}
          isFlipped={false}
        />
        <CardFace
          src={UI_CONFIG.card.backImage}
          alt={UI_CONFIG.card.altTextBack}
          isFlipped={true}
        />
      </div>
    </div>
  );
}

interface CardFaceProps {
  src: string;
  alt: string;
  isFlipped: boolean;
}

function CardFace({ src, alt, isFlipped }: CardFaceProps) {
  return (
    <div className={`absolute inset-0 [backface-visibility:hidden] shadow-xl rounded-xl overflow-hidden ${isFlipped ? 'rotate-y-180' : ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        priority
        sizes="(max-width: 640px) 95vw, 768px"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAn8B9Qn2qgAAAABJRU5ErkJggg=="
      />
    </div>
  );
}
