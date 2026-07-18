import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return { text: "Good morning", icon: "☀️" };
  if (hour < 17) return { text: "Good afternoon", icon: "🌤️" };
  if (hour < 21) return { text: "Good evening", icon: "🌆" };
  return { text: "Good night", icon: "🌙" };
}

export default function LanguageSplash() {
  const { hasChosen, chooseLang } = useLanguage();
  const [greeting, setGreeting] = useState(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  if (hasChosen || !greeting) return null;

  const handleChoose = (lang) => {
    setClosing(true);
    setTimeout(() => chooseLang(lang), 200);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-navy-dark)] px-5 transition-opacity duration-200 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-label="Choose your language"
    >
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "repeating-linear-gradient(90deg, white 0 2px, transparent 2px 34px)",
      }} />

      <div className="relative w-full max-w-2xl text-center fade-up">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-white font-display text-base">R</span>
          <span className="font-display text-xl font-semibold text-white tracking-tight">RakshaSetu</span>
        </div>
        <p className="text-white/50 text-sm mb-10">Choose your language to continue &middot; अपनी भाषा चुनें</p>

        <div className="grid sm:grid-cols-2 gap-4">
          <button
            onClick={() => handleChoose("hi")}
            className="group bg-white/5 border border-white/15 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-[var(--color-teal)] hover:-translate-y-1 transition-all"
          >
            <span className="text-4xl mb-4 block">🙏</span>
            <span className="block font-display text-3xl font-semibold text-white mb-1">नमस्ते</span>
            <span className="block text-sm text-white/60">हिंदी में जारी रखें</span>
          </button>

          <button
            onClick={() => handleChoose("en")}
            className="group bg-white/5 border border-white/15 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-[var(--color-teal)] hover:-translate-y-1 transition-all"
          >
            <span className="text-4xl mb-4 block">{greeting.icon}</span>
            <span className="block font-display text-3xl font-semibold text-white mb-1">{greeting.text}</span>
            <span className="block text-sm text-white/60">Continue in English</span>
          </button>
        </div>

        <p className="text-white/30 text-xs mt-8">You can switch languages anytime from the top of any page.</p>
      </div>
    </div>
  );
}
