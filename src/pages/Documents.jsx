import ChecklistItem from "../components/ChecklistItem";
import SectionHeader from "../components/SectionHeader";

const groups = [
  {
    title: "Basic documents",
    items: [
      { label: "Identity proof", note: "Aadhaar card, voter ID, or any government-issued ID" },
      { label: "Address proof", note: "Utility bill, ration card, or Aadhaar" },
      { label: "Photographs", note: "Recent passport-size photographs" },
    ],
  },
  {
    title: "Medical documents",
    items: [
      { label: "Medical report", note: "Initial diagnosis and treatment record" },
      { label: "Hospital bills", note: "Original bills and payment receipts" },
      { label: "Discharge summary", note: "Issued by the treating hospital" },
    ],
  },
  {
    title: "Police / legal documents",
    items: [
      { label: "FIR copy", note: "First Information Report filed at the police station" },
      { label: "Panchnama / accident report", note: "Police-recorded description of the accident scene" },
      { label: "Witness details", note: "If available, names and contact details of witnesses" },
    ],
  },
  {
    title: "Death case documents",
    items: [
      { label: "Death certificate", note: "Issued by the municipal or local body" },
      { label: "Post-mortem report", note: "If applicable, from the government hospital" },
      { label: "Legal heir certificate", note: "Issued by the local revenue or tehsil office" },
    ],
  },
  {
    title: "Disability case documents",
    items: [
      { label: "Disability certificate", note: "Issued after assessment by an authorised medical board" },
      { label: "Treatment history", note: "Records supporting the extent of impairment" },
    ],
  },
  {
    title: "Compensation claim documents",
    items: [
      { label: "Bank account details", note: "For direct transfer of compensation, where applicable" },
      { label: "Vehicle / insurance details", note: "If available, RC and policy documents" },
      { label: "Insurance policy details", note: "If the vehicle involved was insured" },
      { label: "Photographs / evidence", note: "If available, images of the accident scene or damage" },
    ],
  },
];

export default function Documents() {
  return (
    <div className="container-page py-14 sm:py-20">
      <SectionHeader
        eyebrow="Document checklist"
        title="What documents may be needed after a road accident"
        description="Requirements vary by case type and scheme. Use this checklist as a general starting point to organise your documents."
      />

      <div className="bg-[var(--color-amber-light)] rounded-xl p-5 mb-10 max-w-3xl text-sm text-[var(--color-ink)]">
        Document requirements may vary depending on the scheme, state, case
        type, and authority. Users should verify requirements with the
        concerned office before applying.
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {groups.map((group) => (
          <div key={group.title} className="bg-white border border-[var(--color-line)] rounded-xl p-6">
            <h3 className="font-display text-base font-semibold text-[var(--color-ink)] mb-2">{group.title}</h3>
            <ul className="divide-y divide-[var(--color-line)]">
              {group.items.map((item) => (
                <ChecklistItem key={item.label} label={item.label} note={item.note} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
