"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { UI_CONFIG } from "@/config/ui.config";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

interface WindowSize {
  width: number;
  height: number;
}

export function ConfettiWrapper() {
  const reducedMotion = useReducedMotion();
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: 1920, height: 1080 });
  const [confettiRunning, setConfettiRunning] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setConfettiRunning(false), UI_CONFIG.confetti.duration);
    return () => clearTimeout(timeout);
  }, []);

  // Don't render confetti if user prefers reduced motion
  if (reducedMotion) {
    return null;
  }

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={UI_CONFIG.confetti.numberOfPieces}
      recycle={confettiRunning}
    />
  );
}
