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
        if (completed && onComplete) {
          onComplete();
        }

        return completed ? (
          <div className="bg-[color:var(--foreground)] text-[color:var(--background)] rounded-xl px-10 py-4 shadow-lg text-2xl font-bold flex items-center justify-center animate-pulse mb-8 mt-2 tracking-wide">
            {UI_CONFIG.countdown.completedMessage}
          </div>
        ) : (
          <div className="w-full flex flex-col items-center mb-8 mt-2">
            <div className="text-center mb-2 text-[color:var(--foreground)] text-lg font-medium">
              {EVENT_CONFIG.shortName}&apos;na Kalan Süre
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <TimeUnit value={days} label={UI_CONFIG.countdown.labels.days} />
              <TimeUnit value={hours} label={UI_CONFIG.countdown.labels.hours} />
              <TimeUnit value={minutes} label={UI_CONFIG.countdown.labels.minutes} />
              <TimeUnit value={seconds} label={UI_CONFIG.countdown.labels.seconds} />
            </div>
          </div>
        );
      }}
    />
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[color:var(--foreground)] text-[color:var(--background)] rounded-lg px-4 py-3 shadow-lg min-w-[80px] text-center">
        <span className="text-2xl font-bold">{value}</span>
      </div>
      <span className="mt-1 text-sm font-medium text-[color:var(--foreground)]">{label}</span>
    </div>
  );
}
