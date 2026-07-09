import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/find-my-scheme", label: "Find My Scheme" },
  { to: "/schemes", label: "Schemes" },
  { to: "/documents", label: "Documents" },
  { to: "/legal-aid", label: "Legal Aid" },
  { to: "/road-safety", label: "Road Safety" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[var(--color-line)]">
      <div className="container-page flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="w-8 h-8 rounded-md bg-[var(--color-navy)] flex items-center justify-center text-white font-display text-sm">R</span>
          <span className="font-display text-lg font-semibold text-[var(--color-navy)] tracking-tight">RakshaSetu</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[var(--color-navy)] bg-[var(--color-teal-light)]"
                    : "text-[var(--color-slate)] hover:text-[var(--color-navy)] hover:bg-[var(--color-paper)]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-md border border-[var(--color-line)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 1L17 17M17 1L1 17" stroke="#16213A" strokeWidth="2" strokeLinecap="round"/></svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M0 1H18M0 7H18M0 13H18" stroke="#16213A" strokeWidth="2"/></svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[var(--color-line)] bg-white">
          <div className="container-page py-2 flex flex-col">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-2 py-3 text-sm font-medium border-b border-[var(--color-line)] last:border-0 ${
                    isActive ? "text-[var(--color-navy)]" : "text-[var(--color-slate)]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
