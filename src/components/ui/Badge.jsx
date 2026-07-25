import { useTheme } from "../../context/ThemeContext";

// Dark / Cyber theme color classes
const darkColorMap = {
  violet: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  indigo: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  rose: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  amber: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  blue: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  pink: "bg-pink-500/15 text-pink-300 border-pink-500/30",
  accent: "bg-[var(--accent-glow)] text-[var(--accent)] border-[var(--border)]",
};

// Light theme — saturated, WCAG AA compliant
const lightColorMap = {
  violet: "bg-purple-100 text-purple-900 border-purple-200",
  cyan: "bg-sky-100 text-sky-800 border-sky-200",
  indigo: "bg-indigo-100 text-indigo-900 border-indigo-200",
  emerald: "bg-emerald-100 text-emerald-900 border-emerald-200",
  rose: "bg-rose-100 text-rose-900 border-rose-200",
  amber: "bg-amber-100 text-amber-900 border-amber-200",
  blue: "bg-blue-100 text-blue-900 border-blue-200",
  pink: "bg-pink-100 text-pink-900 border-pink-200",
  accent: "bg-purple-100 text-purple-900 border-purple-200",
};

export default function Badge({ label, color = "accent", className = "" }) {
  const { theme } = useTheme();
  const colorMap = theme === "light" ? lightColorMap : darkColorMap;
  const colorClass = colorMap[color] || colorMap.accent;

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-1
        text-xs font-semibold tracking-wide rounded-full border
        ${colorClass}
        ${className}
      `}
    >
      {label}
    </span>
  );
}
