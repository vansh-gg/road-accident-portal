import { useMemo, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import SchemeCard from "../components/SchemeCard";
import SectionHeader from "../components/SectionHeader";
import schemes from "../data/schemes.json";
import { useLanguage } from "../i18n/LanguageContext";

// Internal answer values stay in English so recommend() logic never has to
// change based on language. Only the displayed labels are translated.
function buildQuestions(t) {
  return [
    {
      key: "applyingFor",
      question: t("q_applying_for"),
      options: [
        { value: "Myself", label: t("opt_myself") },
        { value: "Family member", label: t("opt_family_member") },
        { value: "Someone I know", label: t("opt_someone_i_know") },
      ],
    },
    {
      key: "outcome",
      question: t("q_outcome"),
      options: [
        { value: "Injury", label: t("opt_injury") },
        { value: "Disability", label: t("opt_disability") },
        { value: "Death", label: t("opt_death") },
      ],
    },
    {
      key: "hitAndRun",
      question: t("q_hit_and_run"),
      options: [
        { value: "Yes", label: t("opt_yes") },
        { value: "No", label: t("opt_no") },
        { value: "Not sure", label: t("opt_not_sure") },
      ],
    },
    {
      key: "firFiled",
      question: t("q_fir"),
      options: [
        { value: "Yes", label: t("opt_yes") },
        { value: "No", label: t("opt_no") },
        { value: "In process", label: t("opt_in_process") },
      ],
    },
    {
      key: "vehicleIdentified",
      question: t("q_vehicle_identified"),
      options: [
        { value: "Yes", label: t("opt_yes") },
        { value: "No", label: t("opt_no") },
        { value: "Not sure", label: t("opt_not_sure") },
      ],
    },
    {
      key: "supportNeeded",
      question: t("q_support_needed"),
      options: [
        { value: "Compensation", label: t("opt_compensation") },
        { value: "Legal Aid", label: t("opt_legal_aid") },
        { value: "Rehabilitation", label: t("opt_rehabilitation") },
        { value: "Document Guidance", label: t("opt_document_guidance") },
      ],
    },
  ];
}

function getSchemeById(id) {
  return schemes.find((s) => s.id === id);
}

function recommend(answers) {
  const ids = new Set();
  const reasons = {};

  const add = (id, reason) => {
    ids.add(id);
    reasons[id] = reasons[id] ? `${reasons[id]} ${reason}` : reason;
  };

  if (answers.hitAndRun === "Yes") {
    add("hit-and-run-compensation", "Because the case involves a hit-and-run, this scheme applies directly.");
  }

  if (answers.outcome === "Death") {
    add("section-164-no-fault-compensation", "Since the accident resulted in death, Section 164 offers quick, no-fault relief.");
    add("legal-heir-documentation", "Legal heir documentation is typically required to process death-case claims.");
  }

  if (answers.outcome === "Disability") {
    add("disability-certificate-support", "A disability certificate is usually the first step for a disability case.");
    add("rehabilitation-support-survivors", "Rehabilitation support can help with recovery after a disability.");
  }

  if (answers.outcome === "Injury") {
    add("pm-rahat-scheme", "Right after an injury, free cashless treatment under PM-RAHAT is the first thing to secure.");
    add("emergency-medical-documentation", "Injury cases usually need well-organised medical documentation.");
  }

  if (answers.supportNeeded === "Compensation") {
    add("section-164-no-fault-compensation", "You indicated you need compensation support — Section 164 offers the fastest route.");
  }

  if (answers.supportNeeded === "Legal Aid") {
    add("legal-aid-dlsa", "You indicated you need legal aid guidance.");
  }

  if (answers.supportNeeded === "Rehabilitation") {
    add("rehabilitation-support-survivors", "You indicated you need rehabilitation support.");
  }

  if (answers.supportNeeded === "Document Guidance") {
    add("emergency-medical-documentation", "You indicated you need document guidance.");
    add("insurance-claim-documentation", "Insurance documentation guidance may also help with your claim.");
  }

  if (answers.firFiled === "No" || answers.firFiled === "In process") {
    add("legal-aid-dlsa", "Since the FIR is not yet complete, legal guidance can help with next steps.");
  }

  if (answers.vehicleIdentified === "No" || answers.vehicleIdentified === "Not sure") {
    add("hit-and-run-compensation", "When the vehicle isn't identified, hit-and-run provisions may apply.");
  }

  if (ids.size === 0) {
    add("legal-aid-dlsa", "As a general starting point, legal aid guidance can help you understand next steps.");
  }

  return [...ids].map((id) => ({ scheme: getSchemeById(id), reason: reasons[id] })).filter((r) => r.scheme);
}

export default function FindScheme() {
  const { t } = useLanguage();
  const questions = useMemo(() => buildQuestions(t), [t]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const current = questions[step];
  const progress = Math.round(((submitted ? questions.length : step) / questions.length) * 100);

  const results = useMemo(() => (submitted ? recommend(answers) : []), [submitted, answers]);

  const handleSelect = (value) => {
    const updated = { ...answers, [current.key]: value };
    setAnswers(updated);
    if (step < questions.length - 1) {
      setTimeout(() => setStep((s) => s + 1), 150);
    } else {
      setTimeout(() => setSubmitted(true), 150);
    }
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setSubmitted(false);
  };

  return (
    <div className="container-page py-14 sm:py-20">
      <SectionHeader
        eyebrow={t("find_eyebrow")}
        title={t("find_title")}
        description={t("find_description")}
      />

      {!submitted && (
        <>
          <div className="max-w-2xl mb-6">
            <div className="h-1.5 bg-[var(--color-line)] rounded-full overflow-hidden">
              <div className="h-full bg-[var(--color-teal)] transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="max-w-2xl">
            <QuestionCard
              step={step + 1}
              total={questions.length}
              question={current.question}
              options={current.options}
              value={answers[current.key]}
              onSelect={handleSelect}
            />

            {step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="mt-4 text-sm font-medium text-[var(--color-slate)] hover:text-[var(--color-navy)]"
              >
                {t("find_back")}
              </button>
            )}
          </div>
        </>
      )}

      {submitted && (
        <div>
          <div className="max-w-2xl bg-[var(--color-teal-light)] rounded-xl p-5 mb-8 flex items-start justify-between gap-4 flex-wrap">
            <p className="text-sm text-[var(--color-ink)]">
              {t("find_results_intro")}
            </p>
            <button
              onClick={restart}
              className="text-sm font-semibold text-[var(--color-navy)] whitespace-nowrap hover:text-[var(--color-teal)]"
            >
              {t("find_start_over")}
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {results.map(({ scheme, reason }) => (
              <div key={scheme.id} className="flex flex-col">
                <SchemeCard scheme={scheme} />
                <p className="text-xs text-[var(--color-slate)] mt-2 px-1 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[var(--color-slate)] max-w-2xl border-t border-[var(--color-line)] pt-5">
            {t("find_disclaimer")}
          </p>
        </div>
      )}
    </div>
  );
}
