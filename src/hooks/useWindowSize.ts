"use client";
import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}

const DEFAULT_SIZE: WindowSize = {
  width: 1920,
  height: 1080
};

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>(DEFAULT_SIZE);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
