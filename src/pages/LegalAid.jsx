import SectionHeader from "../components/SectionHeader";
import InfoCard from "../components/InfoCard";

const contacts = [
  "District Legal Services Authority (DLSA)",
  "Motor Accident Claims Tribunal (MACT)",
  "Local police station",
  "Hospital / medical board",
  "Transport department",
  "Insurance company",
  "Local NGOs or road safety organisations",
];

export default function LegalAid() {
  return (
    <div className="container-page py-14 sm:py-20">
      <SectionHeader
        eyebrow="Legal aid & rehabilitation"
        title="Support options beyond compensation"
        description="Recovering from a road accident often involves more than a compensation claim. This page explains legal aid and rehabilitation support in simple terms."
      />

      <div className="rounded-2xl overflow-hidden border border-[var(--color-line)] mb-12 max-w-3xl">
        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/New%20Rajasthan%20High%20Court%20Building.jpg?width=1400"
          alt="Rajasthan High Court building"
          className="w-full h-48 sm:h-64 object-cover"
          loading="lazy"
        />
        <p className="text-xs text-[var(--color-slate)] px-1 pt-2 pb-1">
          Rajasthan High Court, Jodhpur — photo via Wikimedia Commons
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">What is legal aid?</h2>
          <p className="text-sm text-[var(--color-slate)] leading-relaxed mb-6">
            Legal aid means free or subsidised legal help for people who cannot
            easily access or afford a lawyer. For road accident cases, this
            usually includes guidance on filing compensation claims, understanding
            court procedures, and preparing the right documents.
          </p>

          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">District Legal Services Authority</h2>
          <p className="text-sm text-[var(--color-slate)] leading-relaxed mb-6">
            Every district has a Legal Services Authority that provides free
            legal advice and, in eligible cases, representation. They can help
            victims and families understand whether they qualify for
            compensation and what steps to take next.
          </p>

          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">MACT claim guidance</h2>
          <p className="text-sm text-[var(--color-slate)] leading-relaxed">
            The Motor Accident Claims Tribunal hears compensation claims arising
            from motor vehicle accidents. A claim petition, supported by police
            and medical documents, is filed before the Tribunal, which then
            decides the amount of compensation.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">Rehabilitation support</h2>
          <p className="text-sm text-[var(--color-slate)] leading-relaxed mb-6">
            Rehabilitation covers the physical, emotional, and social recovery
            that follows an accident. This can include physiotherapy,
            counselling, and help returning to work or study.
          </p>

          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">Disability certificate guidance</h2>
          <p className="text-sm text-[var(--color-slate)] leading-relaxed mb-6">
            Survivors with a long-term impairment can be assessed by an
            authorised medical board to receive an official disability
            certificate, which supports both compensation and welfare benefit applications.
          </p>

          <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">Medical and emotional support</h2>
          <p className="text-sm text-[var(--color-slate)] leading-relaxed">
            Recovery is not only physical. Psychological support and community
            care play an important role, especially for survivors coping with
            trauma or families coping with loss.
          </p>
        </div>
      </div>

      <SectionHeader eyebrow="Where to seek guidance" title="Authorities and organisations that can help" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((c) => (
          <InfoCard
            key={c}
            tone="teal"
            icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 13V6L8 2L14 6V13H10V9H6V13H2Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round"/></svg>}
            title={c}
            description="Reach out directly for case-specific guidance and current procedural details."
          />
        ))}
      </div>
    </div>
  );
}
