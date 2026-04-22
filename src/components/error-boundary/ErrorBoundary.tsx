"use client";
import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }}>
          <div
            className="rounded-xl shadow-lg p-8 max-w-md text-center"
            style={{ background: "var(--background)", border: "1.5px solid var(--brand)" }}
          >
            <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--brand)" }}>Bir Hata Oluştu</h1>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              Üzgünüz, bir şeyler yanlış gitti. Sayfayı yenilemeyi deneyin.
            </p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Sayfayı Yenile
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
