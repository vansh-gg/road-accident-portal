export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-10 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--color-ink)] mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--color-slate)] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
