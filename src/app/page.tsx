"use client";
import { ConfettiWrapper } from "@/components/confetti/ConfettiWrapper";
import { CountdownTimer } from "@/components/countdown/CountdownTimer";
import { InvitationCard } from "@/components/invitation-card/InvitationCard";
import { ActionButtons } from "@/components/action-buttons/ActionButtons";
import { FlipHint } from "@/components/flip-hint/FlipHint";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center" style={{ background: 'var(--background)' }}>
      <ConfettiWrapper />

      <CountdownTimer />

      <div className="z-10 flex flex-col items-center w-full px-2 sm:px-0">
        <InvitationCard />
        <FlipHint />
        <ActionButtons />
      </div>
    </div>
  );
}
