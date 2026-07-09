import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)] mb-3">404</p>
      <h1 className="font-display text-3xl font-semibold text-[var(--color-ink)] mb-4">Page not found</h1>
      <p className="text-[var(--color-slate)] mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist. Try heading back to the
        homepage or browsing the scheme directory.
      </p>
      <div className="flex justify-center gap-3">
        <Link to="/" className="px-5 py-3 rounded-lg bg-[var(--color-navy)] text-white text-sm font-semibold">Go home</Link>
        <Link to="/schemes" className="px-5 py-3 rounded-lg border border-[var(--color-line)] text-sm font-semibold text-[var(--color-ink)]">Browse schemes</Link>
      </div>
    </div>
  );
}
