export default function ChecklistItem({ label, note }) {
  return (
    <li className="flex items-start gap-3 py-2.5">
      <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-md border-2 border-[var(--color-teal)] flex items-center justify-center">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="var(--color-teal)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <span className="text-sm text-[var(--color-ink)]">
        {label}
        {note && <span className="block text-xs text-[var(--color-slate)] mt-0.5">{note}</span>}
      </span>
    </li>
  );
}
