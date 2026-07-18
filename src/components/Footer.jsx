import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

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
            {t("footer_tagline")}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/50 mb-3">{t("footer_explore")}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/find-my-scheme">{t("nav_find")}</Link></li>
            <li><Link className="hover:text-white" to="/schemes">{t("nav_schemes")}</Link></li>
            <li><Link className="hover:text-white" to="/documents">{t("nav_documents")}</Link></li>
            <li><Link className="hover:text-white" to="/legal-aid">{t("nav_legal")}</Link></li>
            <li><Link className="hover:text-white" to="/road-safety">{t("nav_road_safety")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/50 mb-3">{t("footer_project")}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/about">{t("nav_about")}</Link></li>
            <li className="text-white/60">{t("footer_project_course")}</li>
            <li className="text-white/60">{t("footer_project_year")}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/50 mb-3">{t("footer_emergency_title")}</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            {t("footer_emergency_text")}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/50 leading-relaxed">
          {t("footer_disclaimer")}
        </div>
      </div>
    </footer>
  );
}
