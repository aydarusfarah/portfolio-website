import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem("portfolio-lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const setLang = (newLang) => {
    if (newLang === "en" || newLang === "de") {
      setLangState(newLang);
    }
  };

  const toggleLang = () => {
    setLangState((prev) => (prev === "en" ? "de" : "en"));
  };

  /**
   * Translation helper function
   * Can accept a dot-separated string key (e.g., 'nav.home')
   * or a multilingual object ({ en: '...', de: '...' })
   */
  const t = (keyOrObj) => {
    if (!keyOrObj) return "";

    if (typeof keyOrObj === "object") {
      return keyOrObj[lang] || keyOrObj.en || "";
    }

    if (typeof keyOrObj === "string") {
      const keys = keyOrObj.split(".");
      let val = translations[lang];

      for (const k of keys) {
        if (val && typeof val === "object" && k in val) {
          val = val[k];
        } else {
          val = null;
          break;
        }
      }

      if (val !== null && val !== undefined) return val;

      // Fallback to English
      let fallback = translations.en;
      for (const k of keys) {
        if (fallback && typeof fallback === "object" && k in fallback) {
          fallback = fallback[k];
        } else {
          return keyOrObj;
        }
      }
      return fallback;
    }

    return keyOrObj;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
