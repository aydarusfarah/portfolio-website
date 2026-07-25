export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl border backdrop-blur-xl
        bg-[var(--bg-glass)] border-[var(--border)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
