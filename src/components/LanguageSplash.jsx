import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function getGreeting() {
  const hour = new Date().getHours();
  // 0–4: late night/early morning, not "good morning"
  if (hour < 5) return { text: "Good night", icon: "🌙" };
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
      className={`fixed inset-0 z-[100] flex items-center justify-center px-5 transition-opacity duration-200 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "radial-gradient(120% 100% at 50% 0%, #1E3A5F 0%, #142B47 55%, #0D1E33 100%)",
      }}
      role="dialog"
      aria-label="Choose your language"
    >
      {/* Ambient glow orbs for depth */}
      <div
        className="absolute w-[420px] h-[420px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "var(--color-teal)", top: "-10%", left: "-8%" }}
      />
      <div
        className="absolute w-[360px] h-[360px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "var(--color-amber)", bottom: "-12%", right: "-6%" }}
      />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(90deg, white 0 2px, transparent 2px 34px)",
      }} />

      <div className="relative w-full max-w-2xl text-center fade-up">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white font-display text-lg">R</span>
          <span className="font-display text-2xl font-semibold text-white tracking-tight">RakshaSetu</span>
        </div>
        <p className="text-white/50 text-sm mb-10">Choose your language to continue &middot; अपनी भाषा चुनें</p>

        <div className="grid sm:grid-cols-2 gap-4">
          <button
            onClick={() => handleChoose("hi")}
            className="group relative overflow-hidden bg-white/[0.06] backdrop-blur-sm border border-white/15 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-[var(--color-teal)] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            <span className="w-14 h-14 rounded-xl bg-[var(--color-teal)]/15 border border-[var(--color-teal)]/30 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">🙏</span>
            <span className="block font-display text-3xl font-semibold text-white mb-1">नमस्ते</span>
            <span className="block text-sm text-white/60">हिंदी में जारी रखें</span>
          </button>

          <button
            onClick={() => handleChoose("en")}
            className="group relative overflow-hidden bg-white/[0.06] backdrop-blur-sm border border-white/15 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-[var(--color-teal)] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            <span className="w-14 h-14 rounded-xl bg-[var(--color-amber)]/15 border border-[var(--color-amber)]/30 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">{greeting.icon}</span>
            <span className="block font-display text-3xl font-semibold text-white mb-1">{greeting.text}</span>
            <span className="block text-sm text-white/60">Continue in English</span>
          </button>
        </div>

        <p className="text-white/30 text-xs mt-8">You can switch languages anytime from the top of any page.</p>
      </div>
    </div>
  );
}
