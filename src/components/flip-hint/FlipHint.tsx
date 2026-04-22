interface FlipHintProps {
  visible?: boolean;
}

export function FlipHint({ visible = true }: FlipHintProps) {
  if (!visible) return null;

  return (
    <div
      className="mt-5 flex items-center gap-2 text-sm select-none pointer-events-none anim-bob"
      style={{ color: "var(--foreground)", opacity: 0.45 }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 12V8a4 4 0 0 1 4-4h8"/>
        <path d="m15 1 3 3-3 3"/>
        <path d="M20 12v4a4 4 0 0 1-4 4H8"/>
        <path d="m9 23-3-3 3-3"/>
      </svg>
      <span>Tıklayarak sayfayı çevirin</span>
    </div>
  );
}
