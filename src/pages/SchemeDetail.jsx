import { Link, useParams } from "react-router-dom";
import schemes from "../data/schemes.json";

export default function SchemeDetail() {
  const { id } = useParams();
  const scheme = schemes.find((s) => s.id === id);

  if (!scheme) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="font-display text-2xl font-semibold text-[var(--color-ink)] mb-3">Scheme not found</h1>
        <p className="text-[var(--color-slate)] mb-6">The scheme you're looking for doesn't exist or may have moved.</p>
        <Link to="/schemes" className="text-[var(--color-teal)] font-semibold">Back to Scheme Directory</Link>
      </div>
    );
  }

  return (
    <div className="container-page py-14 sm:py-20">
      <Link to="/schemes" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-slate)] hover:text-[var(--color-navy)] mb-6">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Back to Scheme Directory
      </Link>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-teal-light)] text-[var(--color-teal)]">{scheme.category}</span>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">{scheme.type}</span>
      </div>

      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-ink)] mb-4 max-w-2xl">
        {scheme.name}
      </h1>
      <p className="text-[var(--color-slate)] leading-relaxed max-w-2xl mb-10 text-base">
        {scheme.description}
      </p>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {scheme.eligibility?.length > 0 && (
            <section>
              <h2 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-3">Who can apply</h2>
              <ul className="space-y-2">
                {scheme.eligibility.map((e, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-[var(--color-ink)]/90">
                    <span className="text-[var(--color-teal)] mt-1">&bull;</span>{e}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {scheme.benefits?.length > 0 && (
            <section>
              <h2 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-3">Benefits / support offered</h2>
              <ul className="space-y-2">
                {scheme.benefits.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-[var(--color-ink)]/90">
                    <span className="text-[var(--color-teal)] mt-1">&bull;</span>{b}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {scheme.documents?.length > 0 && (
            <section>
              <h2 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-3">Required documents</h2>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {scheme.documents.map((d, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-[var(--color-ink)]/90">
                    <span className="text-[var(--color-teal)] mt-1">&bull;</span>{d}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {scheme.process?.length > 0 && (
            <section>
              <h2 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-3">Application process</h2>
              <ol className="space-y-3">
                {scheme.process.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[var(--color-ink)]/90">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-navy)] text-white text-xs font-semibold flex items-center justify-center">{i + 1}</span>
                    <span className="pt-0.5">{p}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>

        <aside className="space-y-5">
          <div className="bg-white border border-[var(--color-line)] rounded-xl p-6">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-slate)] mb-2">Where to apply / contact</h3>
            <p className="text-sm text-[var(--color-ink)] leading-relaxed">{scheme.whereToApply}</p>
          </div>

          {scheme.notes && (
            <div className="bg-[var(--color-amber-light)] border border-amber-200/60 rounded-xl p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-amber)] mb-2">Important note</h3>
              <p className="text-sm text-[var(--color-ink)]/90 leading-relaxed">{scheme.notes}</p>
            </div>
          )}

          <div className="bg-slate-50 border border-[var(--color-line)] rounded-xl p-6">
            <p className="text-xs text-[var(--color-slate)] leading-relaxed">
              This page is an academic informational summary. It does not
              replace the official scheme notification or guidance from the
              concerned authority. Always verify current details before applying.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
