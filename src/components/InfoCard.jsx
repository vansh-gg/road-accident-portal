export default function InfoCard({ icon, title, description, tone = "navy" }) {
  const tones = {
    navy: "bg-[var(--color-navy)]",
    teal: "bg-[var(--color-teal)]",
    amber: "bg-[var(--color-amber)]",
  };

  return (
    <div className="bg-white border border-[var(--color-line)] rounded-xl p-6 h-full">
      <div className={`w-10 h-10 rounded-lg ${tones[tone] || tones.navy} text-white flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="font-display text-base font-semibold text-[var(--color-ink)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-slate)] leading-relaxed">{description}</p>
    </div>
  );
}
