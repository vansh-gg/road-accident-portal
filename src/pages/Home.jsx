import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import InfoCard from "../components/InfoCard";
import StatCard from "../components/StatCard";
import HelplineBanner from "../components/HelplineBanner";
import { useLanguage } from "../i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t("cat_compensation"),
      description: t("cat_compensation_desc"),
      tone: "navy",
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><text x="9" y="13.5" textAnchor="middle" fontSize="13" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">₹</text></svg>,
    },
    {
      title: t("cat_legal"),
      description: t("cat_legal_desc"),
      tone: "teal",
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L15 5V9C15 12.5 12.5 15.5 9 16.5C5.5 15.5 3 12.5 3 9V5L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
    },
    {
      title: t("cat_rehab"),
      description: t("cat_rehab_desc"),
      tone: "amber",
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.6"/><path d="M9 5.5V9L11.5 10.5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    },
    {
      title: t("cat_documents"),
      description: t("cat_documents_desc"),
      tone: "navy",
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="4" y="2" width="10" height="14" rx="1.2" stroke="white" strokeWidth="1.5"/><path d="M6.5 6H11.5M6.5 9H11.5M6.5 12H9.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
    {
      title: t("cat_awareness"),
      description: t("cat_awareness_desc"),
      tone: "teal",
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L16 15H2L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 7.5V10.5M9 12.5H9.01" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "repeating-linear-gradient(90deg, white 0 2px, transparent 2px 34px)",
        }} />
        <div className="container-page relative py-20 sm:py-28 fade-up">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal-light)] mb-5">
            {t("hero_eyebrow")}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-white max-w-3xl leading-tight">
            {t("hero_title")}
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl leading-relaxed text-base sm:text-lg">
            {t("hero_description")}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link to="/find-my-scheme" className="inline-flex justify-center items-center px-6 py-3.5 rounded-lg bg-[var(--color-teal)] text-white font-semibold text-sm hover:bg-teal-700 hover:-translate-y-0.5 transition-all">
              {t("hero_cta_find")}
            </Link>
            <Link to="/schemes" className="inline-flex justify-center items-center px-6 py-3.5 rounded-lg bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/15 hover:-translate-y-0.5 transition-all">
              {t("hero_cta_browse")}
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
              <p className="font-display text-2xl font-semibold text-white">13</p>
              <p className="text-xs text-white/60 mt-1">{t("hero_stat_schemes")}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
              <p className="font-display text-2xl font-semibold text-white">6</p>
              <p className="text-xs text-white/60 mt-1">{t("hero_stat_questions")}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
              <p className="font-display text-2xl font-semibold text-white">6</p>
              <p className="text-xs text-white/60 mt-1">{t("hero_stat_categories")}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
              <p className="font-display text-2xl font-semibold text-white">1</p>
              <p className="text-xs text-white/60 mt-1">{t("hero_stat_system")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-page pb-16 sm:pb-20">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/The%20108%20Ambulance.jpg?width=1600"
              alt="An emergency ambulance in India"
              className="w-full aspect-[16/9] object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-white/40 mt-2">
            {t("hero_photo_credit")}
          </p>
        </div>
      </section>

      {/* Emergency note */}
      <section className="bg-[var(--color-amber-light)] border-b border-[var(--color-line)]">
        <div className="container-page py-4 flex items-start gap-3 text-sm text-[var(--color-ink)]">
          <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L16 15H2L9 2Z" stroke="var(--color-amber)" strokeWidth="1.6" strokeLinejoin="round"/><path d="M9 7.5V10.5M9 12.5H9.01" stroke="var(--color-amber)" strokeWidth="1.6" strokeLinecap="round"/></svg>
          <p>{t("emergency_note")}</p>
        </div>
      </section>

      {/* Helplines */}
      <section className="container-page py-10">
        <HelplineBanner />
      </section>

      {/* Who it helps */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow={t("who_eyebrow")}
          title={t("who_title")}
          description={t("who_description")}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard value={t("who_victims")} label={t("who_victims_desc")} />
          <StatCard value={t("who_families")} label={t("who_families_desc")} />
          <StatCard value={t("who_survivors")} label={t("who_survivors_desc")} />
          <StatCard value={t("who_ngos")} label={t("who_ngos_desc")} />
        </div>
      </section>

      {/* Key categories */}
      <section className="bg-white border-y border-[var(--color-line)]">
        <div className="container-page py-16 sm:py-20">
          <SectionHeader
            eyebrow={t("categories_eyebrow")}
            title={t("categories_title")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <InfoCard key={c.title} icon={c.icon} title={c.title} description={c.description} tone={c.tone} />
            ))}
          </div>
        </div>
      </section>

      {/* Why needed */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <SectionHeader
            eyebrow={t("why_eyebrow")}
            title={t("why_title")}
            description={t("why_description")}
          />
          <div className="bg-[var(--color-teal-light)] rounded-2xl p-7 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-3">
              {t("why_does_title")}
            </h3>
            <ul className="space-y-2.5 text-sm text-[var(--color-ink)]/90">
              <li>&bull; {t("why_does_1")}</li>
              <li>&bull; {t("why_does_2")}</li>
              <li>&bull; {t("why_does_3")}</li>
              <li>&bull; {t("why_does_4")}</li>
            </ul>
            <p className="text-xs text-[var(--color-slate)] mt-5 leading-relaxed">
              {t("why_disclaimer")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
