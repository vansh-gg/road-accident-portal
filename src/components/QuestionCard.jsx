import { useLanguage } from "../i18n/LanguageContext";

export default function QuestionCard({ step, total, question, options, value, onSelect }) {
  const { t } = useLanguage();

  return (
    <div className="bg-white border border-[var(--color-line)] rounded-2xl p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-wide uppercase text-[var(--color-teal)] mb-2">
        {t("find_question_of")} {step} {t("find_of")} {total}
      </p>
      <h2 className="font-display text-xl sm:text-2xl font-semibold text-[var(--color-ink)] mb-6">
        {question}
      </h2>

      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((option) => {
          const selected = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={`text-left px-4 py-3.5 rounded-lg border text-sm font-medium transition-colors ${
                selected
                  ? "border-[var(--color-navy)] bg-[var(--color-navy)] text-white"
                  : "border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-teal)] hover:bg-[var(--color-teal-light)]"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
