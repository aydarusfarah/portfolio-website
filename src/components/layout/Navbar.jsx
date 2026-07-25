import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Zap } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certs", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["about", "skills", "certifications", "projects", "education", "contact"];

const ThemeIcon = ({ themeKey }) => {
  if (themeKey === "dark") return <Moon size={14} />;
  if (themeKey === "cyber") return <Zap size={14} />;
  return <Sun size={14} />;
};

export default function Navbar() {
  const { theme, setTheme, themes } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(SECTION_IDS, 100);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const themeKeys = Object.keys(themes);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 bg-[var(--bg-glass)] backdrop-blur-xl border-b border-[var(--border)]"
            : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label="Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center text-white font-bold text-base shadow-lg shadow-[var(--accent-glow)] group-hover:scale-110 transition-transform duration-200">
              AF
            </div>
            <span className="font-bold text-[var(--text-primary)] text-sm hidden sm:inline tracking-wide">
              Aydarus Farah
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-[var(--accent-glow)] border border-[var(--border-hover)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              );
            })}
          </nav>

          {/* Theme selector + mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Theme pills */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-[var(--bg-card)] border border-[var(--border)]">
              {themeKeys.map((key) => {
                const isActive = theme === key;
                return (
                  <button
                    key={key}
                    id={`theme-btn-${key}`}
                    onClick={() => setTheme(key)}
                    title={themes[key].name}
                    className={`relative flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-white shadow-md"
                        : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                    }`}
                    aria-label={`Switch to ${themes[key].name}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="theme-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)]"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.35 }}
                      />
                    )}
                    <span className="relative z-10">
                      <ThemeIcon themeKey={key} />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[var(--bg-card)] border-b border-[var(--border)] overflow-hidden md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-xl text-sm font-medium transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
