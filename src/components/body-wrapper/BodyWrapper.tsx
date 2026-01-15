"use client";

import { ErrorBoundary } from "@/components/error-boundary/ErrorBoundary";
import { useServiceWorker } from "@/hooks/useServiceWorker";

export function BodyWrapper({ children }: { children: React.ReactNode }) {
  useServiceWorker();

  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
}
