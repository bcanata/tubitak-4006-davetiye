"use client";
import Countdown from "react-countdown";
import { EVENT_CONFIG } from "@/config/event.config";
import { UI_CONFIG } from "@/config/ui.config";

interface CountdownTimerProps {
  onComplete?: () => void;
}

export function CountdownTimer({ onComplete }: CountdownTimerProps) {
  return (
    <Countdown
      date={new Date(EVENT_CONFIG.startDate)}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed && onComplete) onComplete();

        return completed ? (
          <div
            className="font-display italic font-bold rounded-xl px-10 py-4 shadow-lg text-2xl flex items-center justify-center animate-pulse"
            style={{ background: "var(--brand)", color: "var(--background)" }}
          >
            {UI_CONFIG.countdown.completedMessage}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--foreground)", opacity: 0.45 }}>
              {EVENT_CONFIG.shortName}&apos;na Kalan Süre
            </p>
            <div className="flex items-start gap-1 sm:gap-2">
              <TimeUnit value={days}    label={UI_CONFIG.countdown.labels.days} />
              <Separator />
              <TimeUnit value={hours}   label={UI_CONFIG.countdown.labels.hours} />
              <Separator />
              <TimeUnit value={minutes} label={UI_CONFIG.countdown.labels.minutes} />
              <Separator />
              <TimeUnit value={seconds} label={UI_CONFIG.countdown.labels.seconds} />
            </div>
          </div>
        );
      }}
    />
  );
}

function Separator() {
  return (
    <span
      className="text-2xl sm:text-3xl font-bold mt-1 select-none"
      style={{ color: "var(--brass)", fontFamily: "var(--font-geist-mono, monospace)" }}
      aria-hidden
    >
      :
    </span>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="rounded-lg px-3 py-2 sm:px-4 sm:py-3 shadow-sm min-w-[60px] sm:min-w-[76px] text-center"
        style={{
          background: "var(--background)",
          border: "1.5px solid var(--brand)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
        }}
      >
        <span
          className="text-2xl sm:text-3xl font-bold tabular-nums"
          style={{
            fontFamily: "var(--font-geist-mono, monospace)",
            color: "var(--foreground)",
            fontVariantNumeric: "tabular-nums"
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase" style={{ color: "var(--foreground)", opacity: 0.5 }}>
        {label}
      </span>
    </div>
  );
}
