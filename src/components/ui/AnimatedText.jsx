import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TypewriterText = memo(function TypewriterText({ words, className = "" }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className={className}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-[1em] bg-[var(--accent)] ml-0.5 align-middle"
      />
    </span>
  );
});

export function GradientHeading({ children, className = "", as: Tag = "h2" }) {
  return (
    <Tag
      className={`bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="transform-gpu mb-10 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-base">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]" />
    </motion.div>
  );
}
