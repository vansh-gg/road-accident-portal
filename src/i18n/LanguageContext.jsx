import { createContext, useContext, useEffect, useState } from "react";
import { strings } from "./strings";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("rakshasetu-lang") || "en";
    } catch {
      return "en";
    }
  });

  const [hasChosen, setHasChosen] = useState(() => {
    try {
      return localStorage.getItem("rakshasetu-lang-chosen") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("rakshasetu-lang", lang);
    } catch {
      // localStorage unavailable — language just won't persist across visits
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "hi" : "en"));

  // Used by the first-visit splash: sets the language AND marks the choice
  // as made, so the splash never shows again on this device.
  const chooseLang = (value) => {
    setLang(value);
    setHasChosen(true);
    try {
      localStorage.setItem("rakshasetu-lang-chosen", "true");
    } catch {
      // localStorage unavailable — splash may reappear on next visit
    }
  };

  const t = (key) => {
    const value = strings[lang]?.[key] ?? strings.en[key];
    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, chooseLang, hasChosen, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
