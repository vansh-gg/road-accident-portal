export default function StatCard({ value, label }) {
  return (
    <div className="border border-[var(--color-line)] rounded-xl p-5 bg-white">
      <p className="font-display text-3xl font-semibold text-[var(--color-navy)]">{value}</p>
      <p className="text-sm text-[var(--color-slate)] mt-1">{label}</p>
    </div>
  );
}
