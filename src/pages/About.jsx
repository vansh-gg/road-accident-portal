import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <div className="container-page py-14 sm:py-20 max-w-3xl">
      <SectionHeader
        eyebrow="About this project"
        title="Design and Development of an Online Portal for Road Accident Compensation and Rehabilitation Schemes"
      />

      <div className="space-y-8 text-sm text-[var(--color-slate)] leading-relaxed">
        <section>
          <h2 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-2">Objective</h2>
          <p>
            To design and develop a centralised, informational web portal —
            RakshaSetu — that helps road accident victims, survivors, and
            families easily access information about government compensation
            schemes, rehabilitation support, legal aid, required documents, and
            road safety resources.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-2">Problem statement</h2>
          <p>
            Road accident victims and their families often face difficulty
            accessing timely and reliable information about compensation,
            rehabilitation support, legal aid, and required documentation.
            Information related to government schemes is scattered across
            multiple central and state government websites, making it
            difficult for users to understand eligibility, application
            procedures, and next steps during a stressful period.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-2">Proposed solution</h2>
          <p>
            RakshaSetu organises scheme information into a searchable
            directory, offers a guided "Find My Scheme" questionnaire that
            recommends relevant support based on simple rule-based logic, and
            provides plain-language guidance on documents, legal aid, and
            rehabilitation — all in one consistent, accessible interface.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-2">Technology used</h2>
          <ul className="grid grid-cols-2 gap-2 mt-2">
            <li>&bull; React.js</li>
            <li>&bull; Vite</li>
            <li>&bull; Tailwind CSS</li>
            <li>&bull; React Router</li>
            <li>&bull; Static JSON data</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-2">Target users</h2>
          <ul className="grid grid-cols-2 gap-2 mt-2">
            <li>&bull; Road accident victims</li>
            <li>&bull; Family members of victims</li>
            <li>&bull; Accident survivors</li>
            <li>&bull; Compensation seekers</li>
            <li>&bull; Rehabilitation seekers</li>
            <li>&bull; Legal aid seekers</li>
            <li>&bull; Students, NGOs, researchers</li>
            <li>&bull; General public</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-2">Social relevance</h2>
          <p>
            By consolidating scattered information into a single, accessible
            format, RakshaSetu aims to reduce confusion during an already
            distressing time and raise awareness about road safety, Good
            Samaritan protections, and the support systems available to
            accident-affected families.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-2">Future scope</h2>
          <ul className="space-y-1.5 mt-2">
            <li>&bull; Backend database and admin dashboard for scheme updates</li>
            <li>&bull; Multilingual support</li>
            <li>&bull; Application tracking and status updates</li>
            <li>&bull; Integration with official government portals</li>
            <li>&bull; Chatbot support and NGO/legal aid directory</li>
            <li>&bull; Location-based scheme recommendations</li>
            <li>&bull; PDF download for document checklists</li>
          </ul>
        </section>

        <section className="bg-[var(--color-amber-light)] rounded-xl p-5">
          <h2 className="font-display text-base font-semibold text-[var(--color-ink)] mb-2">Academic disclaimer</h2>
          <p>
            This project is developed as an academic initiative under SRM
            Community Connect (21GNP301L) to explore how technology can
            improve access to road accident compensation and rehabilitation
            information. It is an informational prototype and does not
            provide legal advice, medical advice, emergency services, or
            direct government application submission. Users must verify all
            details with official government authorities.
          </p>
        </section>
      </div>
    </div>
  );
}
