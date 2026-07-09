import SectionHeader from "../components/SectionHeader";
import ChecklistItem from "../components/ChecklistItem";

const immediateSteps = [
  { label: "Ensure your own safety first", note: "Move to a safe area away from oncoming traffic if possible" },
  { label: "Call for emergency help", note: "Contact local emergency services, police, or the nearest hospital" },
  { label: "Avoid moving a severely injured person", note: "Unless there is an immediate danger like fire" },
  { label: "Note down basic details", note: "Vehicle numbers, location, and time, if it is safe to do so" },
  { label: "Wait for or assist emergency responders", note: "Provide information calmly when they arrive" },
];

const goodSamaritan = [
  { label: "Bystanders are protected in good faith", note: "Helping a victim should not lead to unnecessary harassment" },
  { label: "You are not obligated to reveal your identity", note: "Unless you choose to, in most good-faith assistance situations" },
  { label: "Taking the victim to hospital is encouraged", note: "Timely help can significantly improve survival chances" },
];

const safeHabits = [
  "Always wear a helmet on two-wheelers, for both rider and pillion",
  "Always wear a seatbelt, in both front and rear seats",
  "Avoid using a mobile phone while driving or riding",
  "Follow speed limits, especially near schools and residential areas",
  "Do not drive under the influence of alcohol or drugs",
  "Use pedestrian crossings and footpaths where available",
  "Maintain safe following distance in traffic and during rain",
  "Report accidents and unsafe road conditions to local authorities",
];

export default function RoadSafety() {
  return (
    <div className="container-page py-14 sm:py-20">
      <SectionHeader
        eyebrow="Road safety resources"
        title="Awareness that can help before and after an accident"
        description="Practical, easy-to-remember guidance on responding to accidents and staying safe on the road."
      />

      <div className="rounded-2xl overflow-hidden border border-[var(--color-line)] mb-10 max-w-3xl">
        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Jaipur-Ajmer%20Road.JPG?width=1400"
          alt="A road in Rajasthan, India"
          className="w-full h-48 sm:h-64 object-cover"
          loading="lazy"
        />
        <p className="text-xs text-[var(--color-slate)] px-1 pt-2 pb-1">
          Jaipur-Ajmer Road, Rajasthan — photo via Wikimedia Commons
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        <div className="bg-white border border-[var(--color-line)] rounded-xl p-6">
          <h3 className="font-display text-base font-semibold text-[var(--color-ink)] mb-1">
            What to do immediately after an accident
          </h3>
          <ul className="divide-y divide-[var(--color-line)]">
            {immediateSteps.map((s) => <ChecklistItem key={s.label} label={s.label} note={s.note} />)}
          </ul>
        </div>

        <div className="bg-white border border-[var(--color-line)] rounded-xl p-6">
          <h3 className="font-display text-base font-semibold text-[var(--color-ink)] mb-1">
            Good Samaritan awareness
          </h3>
          <ul className="divide-y divide-[var(--color-line)]">
            {goodSamaritan.map((s) => <ChecklistItem key={s.label} label={s.label} note={s.note} />)}
          </ul>
        </div>
      </div>

      <div className="bg-[var(--color-navy)] rounded-2xl p-7 sm:p-8 text-white mb-10">
        <h3 className="font-display text-lg font-semibold mb-4">Responsible driving reminders</h3>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {safeHabits.map((h) => (
            <p key={h} className="text-sm text-white/80 flex gap-2 py-1.5">
              <span className="text-[var(--color-teal-light)]">&bull;</span>{h}
            </p>
          ))}
        </div>
      </div>

      <div className="bg-[var(--color-amber-light)] rounded-xl p-5 max-w-3xl text-sm text-[var(--color-ink)]">
        This page provides general awareness information for academic and
        public safety purposes. It is not a substitute for emergency response
        training or official road safety guidelines.
      </div>
    </div>
  );
}
