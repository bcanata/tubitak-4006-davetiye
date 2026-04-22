"use client";
import { useState } from "react";
import { ConfettiWrapper } from "@/components/confetti/ConfettiWrapper";
import { CountdownTimer } from "@/components/countdown/CountdownTimer";
import { InvitationCard } from "@/components/invitation-card/InvitationCard";
import { ActionButtons } from "@/components/action-buttons/ActionButtons";
import { FlipHint } from "@/components/flip-hint/FlipHint";
import { EVENT_CONFIG } from "@/config/event.config";

export default function Home() {
  const [hasFlipped, setHasFlipped] = useState(false);

  const handleFlip = (isFlipped: boolean) => {
    if (isFlipped && !hasFlipped) setHasFlipped(true);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <ConfettiWrapper fireExtra={hasFlipped} />

      <header className="anim-enter anim-d1 text-center mb-8 max-w-lg w-full">
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
          style={{ color: "var(--brand)" }}
        >
          8 Mayıs 2026 · 14.00 · {EVENT_CONFIG.location}
        </p>
        <h1
          className="font-display italic font-bold text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          Bilim,<br />kapımızda.
        </h1>
        <p
          className="mt-5 text-sm sm:text-base leading-relaxed"
          style={{ color: "var(--foreground)", opacity: 0.55 }}
        >
          {EVENT_CONFIG.schoolName}
        </p>
      </header>

      <div
        className="anim-enter anim-d2 w-10 h-px mb-8"
        style={{ background: "var(--brass)" }}
      />

      <div className="anim-enter anim-d3 w-full flex justify-center mb-10">
        <CountdownTimer />
      </div>

      <div className="anim-enter anim-d4 z-10 flex flex-col items-center w-full max-w-3xl">
        <InvitationCard onFlip={handleFlip} />
        <FlipHint visible={!hasFlipped} />
        <ActionButtons />
      </div>
    </main>
  );
}
