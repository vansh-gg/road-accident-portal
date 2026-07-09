import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[var(--color-navy-dark)] text-white/90">
      <div className="road-divider" />
      <div className="container-page py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center font-display text-sm">R</span>
            <span className="font-display text-lg font-semibold">RakshaSetu</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            A student-built bridge to road accident compensation, rehabilitation
            and legal aid information.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/50 mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/find-my-scheme">Find My Scheme</Link></li>
            <li><Link className="hover:text-white" to="/schemes">Scheme Directory</Link></li>
            <li><Link className="hover:text-white" to="/documents">Document Checklist</Link></li>
            <li><Link className="hover:text-white" to="/legal-aid">Legal Aid &amp; Rehabilitation</Link></li>
            <li><Link className="hover:text-white" to="/road-safety">Road Safety</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/50 mb-3">Project</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/about">About this project</Link></li>
            <li className="text-white/60">SRM Community Connect, 21GNP301L</li>
            <li className="text-white/60">CSE Academic Submission, 2025–26</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/50 mb-3">In an emergency</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Contact local emergency services, police or the nearest hospital
            immediately. This portal does not provide emergency response.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/50 leading-relaxed">
          This portal is an academic informational project developed for SRM
          Community Connect. It does not replace official government portals,
          legal advice, medical advice, or emergency services. Users should
          verify all scheme details with the concerned government authority
          before taking any action.
        </div>
      </div>
    </footer>
  );
}
