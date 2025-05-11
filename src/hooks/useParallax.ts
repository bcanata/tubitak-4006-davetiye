import { useState, useRef, useEffect } from "react";

export function useParallax(maxTilt = 15) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const pointerActive = useRef(false);

  // Pointer/touch parallax
  function handleMove(e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) {
    pointerActive.current = true;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    let x: number, y: number;
    if ('touches' in e && e.touches.length > 0) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else if ('clientX' in e) {
      x = e.clientX;
      y = e.clientY;
    } else {
      return;
    }
    const px = (x - rect.left) / rect.width;
    const py = (y - rect.top) / rect.height;
    setTilt({
      x: (py - 0.5) * -2 * maxTilt,
      y: (px - 0.5) * 2 * maxTilt,
    });
  }
  function resetTilt() {
    pointerActive.current = false;
    setTilt({ x: 0, y: 0 });
  }

  // Gyroscope parallax
  useEffect(() => {
    function handleOrientation(event: DeviceOrientationEvent) {
      if (pointerActive.current) return; // Ignore if pointer is active
      // gamma: left-right, beta: front-back
      const gamma = event.gamma || 0; // [-90,90]
      const beta = event.beta || 0;   // [-180,180]
      // Map gamma to y, beta to x
      setTilt({
        x: Math.max(-maxTilt, Math.min(maxTilt, beta / 90 * maxTilt)),
        y: Math.max(-maxTilt, Math.min(maxTilt, gamma / 45 * maxTilt)),
      });
    }
    window.addEventListener('deviceorientation', handleOrientation, true);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [maxTilt]);

  return {
    ref,
    tilt,
    handleMove,
    resetTilt,
  };
} 