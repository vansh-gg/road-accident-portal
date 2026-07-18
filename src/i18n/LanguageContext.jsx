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

  // "Have they chosen a language THIS SESSION" — deliberately uses
  // sessionStorage, not localStorage. This means the welcome splash
  // reappears every time the site is freshly opened (new tab, browser
  // restart, next day, etc.) but won't re-show on every page navigation
  // within the same visit. The actual language preference (`lang` above)
  // still persists permanently via localStorage, so once someone picks
  // Hindi mid-session, the rest of that session stays in Hindi even if the
  // splash logic resets on their next visit.
  const [hasChosen, setHasChosen] = useState(() => {
    try {
      return sessionStorage.getItem("rakshasetu-lang-chosen") === "true";
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

  const chooseLang = (value) => {
    setLang(value);
    setHasChosen(true);
    try {
      sessionStorage.setItem("rakshasetu-lang-chosen", "true");
    } catch {
      // sessionStorage unavailable — splash may reappear on next page load
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
