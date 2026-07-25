import { createContext, useContext, useEffect, useState } from "react";

const THEMES = {
  dark: {
    name: "Dark Midnight",
    key: "dark",
    vars: {
      "--bg-base": "#0a0a0f",
      "--bg-surface": "#0e0e1a",
      "--bg-card": "#12121c",
      "--bg-card-hover": "#1a1a2c",
      "--bg-glass": "rgba(18,18,28,0.7)",
      "--border": "rgba(124,58,237,0.2)",
      "--border-hover": "rgba(124,58,237,0.5)",
      "--accent": "#7c3aed",
      "--accent-2": "#ec4899",
      "--accent-glow": "rgba(124,58,237,0.3)",
      "--text-primary": "#f5f5ff",
      "--text-secondary": "#a0a0c0",
      "--text-muted": "#606080",
      "--gradient-hero": "linear-gradient(135deg, #7c3aed22 0%, #ec489922 50%, #0a0a0f 100%)",
    },
  },
  cyber: {
    name: "Tech Cyber Blue",
    key: "cyber",
    vars: {
      "--bg-base": "#040d1a",
      "--bg-surface": "#061224",
      "--bg-card": "#071428",
      "--bg-card-hover": "#0a1c35",
      "--bg-glass": "rgba(7,20,40,0.75)",
      "--border": "rgba(0,212,255,0.2)",
      "--border-hover": "rgba(0,212,255,0.5)",
      "--accent": "#00d4ff",
      "--accent-2": "#0066ff",
      "--accent-glow": "rgba(0,212,255,0.25)",
      "--text-primary": "#e0f7ff",
      "--text-secondary": "#80c8e0",
      "--text-muted": "#3a7a99",
      "--gradient-hero": "linear-gradient(135deg, #00d4ff18 0%, #0066ff18 50%, #040d1a 100%)",
    },
  },
  light: {
    name: "Clean Light",
    key: "light",
    vars: {
      "--bg-base": "#f8fafc",
      "--bg-surface": "#f1f5f9",
      "--bg-card": "#ffffff",
      "--bg-card-hover": "#faf5ff",
      "--bg-glass": "rgba(255,255,255,0.88)",
      "--border": "rgba(148,163,184,0.55)",
      "--border-hover": "rgba(124,58,237,0.5)",
      "--accent": "#7c3aed",
      "--accent-2": "#db2777",
      "--accent-glow": "rgba(124,58,237,0.1)",
      "--text-primary": "#0f172a",
      "--text-secondary": "#334155",
      "--text-muted": "#64748b",
      "--card-shadow": "0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.05)",
      "--card-shadow-hover": "0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)",
      "--gradient-hero": "linear-gradient(135deg, #7c3aed14 0%, #db277714 50%, #f8fafc 100%)",
    },
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    const t = THEMES[theme] || THEMES.dark;
    const root = document.documentElement;
    Object.entries(t.vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const cycleTheme = () => {
    const keys = Object.keys(THEMES);
    const next = keys[(keys.indexOf(theme) + 1) % keys.length];
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export { THEMES };
