const helplines = [
  { label: "Ambulance & Police", number: "112" },
  { label: "Free Legal Help (NALSA)", number: "15100" },
  { label: "Hospital Refusal Complaint", number: "14555" },
];

export default function HelplineBanner() {
  return (
    <div className="bg-[var(--color-navy)] rounded-2xl p-6 sm:p-7 text-white">
      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal-light)] mb-4">
        Important helplines
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
        If you remember only 3 things: go to the nearest hospital for free treatment,
        get a copy of the FIR, and call 15100 for free legal help.
      </p>
    </div>
  );
}
