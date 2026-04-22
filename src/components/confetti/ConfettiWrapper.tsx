"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { UI_CONFIG } from "@/config/ui.config";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

interface ConfettiWrapperProps {
  fireExtra?: boolean;
}

interface WindowSize {
  width: number;
  height: number;
}

export function ConfettiWrapper({ fireExtra }: ConfettiWrapperProps) {
  const reducedMotion = useReducedMotion();
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: 1920, height: 1080 });
  const [confettiRunning, setConfettiRunning] = useState(true);
  const extraFired = useRef(false);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setConfettiRunning(false), UI_CONFIG.confetti.duration);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (fireExtra && !extraFired.current && !reducedMotion) {
      extraFired.current = true;
      setConfettiRunning(true);
      const t = setTimeout(() => setConfettiRunning(false), 3000);
      return () => clearTimeout(t);
    }
  }, [fireExtra, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={UI_CONFIG.confetti.numberOfPieces}
      recycle={confettiRunning}
    />
  );
}
