import { useMemo, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import SchemeCard from "../components/SchemeCard";
import SectionHeader from "../components/SectionHeader";
import schemes from "../data/schemes.json";

const questions = [
  {
    key: "applyingFor",
    question: "Who are you applying for?",
    options: ["Myself", "Family member", "Someone I know"],
  },
  {
    key: "outcome",
    question: "What was the accident outcome?",
    options: ["Injury", "Disability", "Death"],
  },
  {
    key: "hitAndRun",
    question: "Was it a hit-and-run case?",
    options: ["Yes", "No", "Not sure"],
  },
  {
    key: "firFiled",
    question: "Was an FIR filed?",
    options: ["Yes", "No", "In process"],
  },
  {
    key: "vehicleIdentified",
    question: "Was the vehicle identified?",
    options: ["Yes", "No", "Not sure"],
  },
  {
    key: "supportNeeded",
    question: "Which support do you need?",
    options: ["Compensation", "Legal Aid", "Rehabilitation", "Document Guidance"],
  },
];

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
        eyebrow="Guided questionnaire"
        title="Find My Scheme"
        description="Answer a few short questions about the accident. Based on your answers, we'll point you to schemes and resources that are most likely to be relevant."
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
                &larr; Back
              </button>
            )}
          </div>
        </>
      )}

      {submitted && (
        <div>
          <div className="max-w-2xl bg-[var(--color-teal-light)] rounded-xl p-5 mb-8 flex items-start justify-between gap-4 flex-wrap">
            <p className="text-sm text-[var(--color-ink)]">
              Based on your answers, here are the schemes and resources most
              relevant to your situation.
            </p>
            <button
              onClick={restart}
              className="text-sm font-semibold text-[var(--color-navy)] whitespace-nowrap hover:text-[var(--color-teal)]"
            >
              Start over
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
            Recommendations are based on basic inputs and are for informational
            purposes only. Users should verify scheme details and eligibility
            with official authorities.
          </p>
        </div>
      )}
    </div>
  );
}
