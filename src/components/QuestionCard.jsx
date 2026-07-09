export default function QuestionCard({ step, total, question, options, value, onSelect }) {
  return (
    <div className="bg-white border border-[var(--color-line)] rounded-2xl p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-wide uppercase text-[var(--color-teal)] mb-2">
        Question {step} of {total}
      </p>
      <h2 className="font-display text-xl sm:text-2xl font-semibold text-[var(--color-ink)] mb-6">
        {question}
      </h2>

      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`text-left px-4 py-3.5 rounded-lg border text-sm font-medium transition-colors ${
                selected
                  ? "border-[var(--color-navy)] bg-[var(--color-navy)] text-white"
                  : "border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-teal)] hover:bg-[var(--color-teal-light)]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
