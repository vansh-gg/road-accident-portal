import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const categoryStyles = {
  "Emergency Treatment": "bg-red-50 text-red-700",
  Compensation: "bg-[var(--color-teal-light)] text-[var(--color-teal)]",
  "Legal Aid": "bg-[var(--color-amber-light)] text-[var(--color-amber)]",
  Rehabilitation: "bg-emerald-50 text-emerald-700",
  Documents: "bg-indigo-50 text-indigo-700",
  Awareness: "bg-rose-50 text-rose-700",
};

export default function SchemeCard({ scheme }) {
  const { t } = useLanguage();
  const badge = categoryStyles[scheme.category] || "bg-slate-100 text-slate-700";

  return (
    <div className="flex flex-col h-full bg-white border border-[var(--color-line)] rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-teal)]/40 transition-all">
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badge}`}>{scheme.category}</span>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">{scheme.type}</span>
      </div>

      <h3 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-2 leading-snug">
        {scheme.name}
      </h3>

      <p className="text-sm text-[var(--color-slate)] leading-relaxed mb-4 flex-1">
        {scheme.description}
      </p>

      {scheme.eligibility?.length > 0 && (
        <p className="text-xs text-[var(--color-slate)] mb-4">
          <span className="font-semibold text-[var(--color-ink)]">Eligibility: </span>
          {scheme.eligibility[0]}
        </p>
      )}

      <Link
        to={`/schemes/${scheme.id}`}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-teal)]"
      >
        {t("view_details")}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Link>
    </div>
  );
}
