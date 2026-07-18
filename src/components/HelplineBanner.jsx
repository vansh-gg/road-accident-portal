import { useLanguage } from "../i18n/LanguageContext";

export default function HelplineBanner() {
  const { t } = useLanguage();

  const helplines = [
    { label: t("helpline_ambulance"), number: "112" },
    { label: t("helpline_legal"), number: "15100" },
    { label: t("helpline_hospital"), number: "14555" },
  ];

  return (
    <div className="bg-[var(--color-navy)] rounded-2xl p-6 sm:p-7 text-white">
      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal-light)] mb-4">
        {t("helpline_title")}
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        {helplines.map((h) => (
          <div key={h.label} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3">
            <span className="text-sm text-white/80">{h.label}</span>
            <span className="font-display text-lg font-semibold">{h.number}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-white/60 mt-4 leading-relaxed">
        {t("helpline_note")}
      </p>
    </div>
  );
}
