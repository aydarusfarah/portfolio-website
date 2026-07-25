import { motion } from "framer-motion";

export default function BentoCard({
  children,
  className = "",
  delay = 0,
  span = "",
  id,
  noPadding = false,
  glowAccent = false,
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
      className={`
        transform-gpu relative rounded-2xl border overflow-hidden
        bg-[var(--bg-card)] border-[var(--border)]
        hover:border-[var(--border-hover)]
        transition-colors duration-300
        ${glowAccent ? "shadow-[0_0_30px_var(--accent-glow)]" : ""}
        ${noPadding ? "" : "p-6"}
        ${span}
        ${className}
      `}
      style={{
        boxShadow: glowAccent
          ? undefined
          : "var(--card-shadow, none)",
      }}
      onMouseEnter={e => {
        if (!glowAccent) e.currentTarget.style.boxShadow = "var(--card-shadow-hover, none)";
      }}
      onMouseLeave={e => {
        if (!glowAccent) e.currentTarget.style.boxShadow = "var(--card-shadow, none)";
      }}
    >
      {/* Subtle inner shimmer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at top left, var(--accent-glow) 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
