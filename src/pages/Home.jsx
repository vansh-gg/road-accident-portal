import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import InfoCard from "../components/InfoCard";
import StatCard from "../components/StatCard";
import HelplineBanner from "../components/HelplineBanner";

const categories = [
  {
    title: "Compensation",
    description: "Understand central and state schemes that provide financial relief after a road accident.",
    tone: "navy",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1V17M13 4H6.5C5.12 4 4 5.12 4 6.5S5.12 9 6.5 9H11.5C12.88 9 14 10.12 14 11.5S12.88 14 11.5 14H4" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  },
  {
    title: "Legal Aid",
    description: "Learn how District Legal Services Authorities and MACT support victims and families.",
    tone: "teal",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L15 5V9C15 12.5 12.5 15.5 9 16.5C5.5 15.5 3 12.5 3 9V5L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Rehabilitation",
    description: "Explore physical, psychological and vocational support available during recovery.",
    tone: "amber",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.6"/><path d="M9 5.5V9L11.5 10.5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  },
  {
    title: "Required Documents",
    description: "Get a clear checklist of documents needed for medical, legal and compensation processes.",
    tone: "navy",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="4" y="2" width="10" height="14" rx="1.2" stroke="white" strokeWidth="1.5"/><path d="M6.5 6H11.5M6.5 9H11.5M6.5 12H9.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  },
  {
    title: "Road Safety Awareness",
    description: "Read practical guidance on immediate response, Good Samaritan protection and safe habits.",
    tone: "teal",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L16 15H2L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 7.5V10.5M9 12.5H9.01" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "repeating-linear-gradient(90deg, white 0 2px, transparent 2px 34px)",
        }} />
        <div className="container-page relative py-20 sm:py-28">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal-light)] mb-5">
            SRM Community Connect &middot; Academic Informational Project
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-white max-w-3xl leading-tight">
            Find road accident compensation and rehabilitation support in one place
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl leading-relaxed text-base sm:text-lg">
            An informational portal designed to help victims, survivors, and families
            understand schemes, required documents, legal aid, rehabilitation
            support, and next steps after a road accident.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link to="/find-my-scheme" className="inline-flex justify-center items-center px-6 py-3.5 rounded-lg bg-[var(--color-teal)] text-white font-semibold text-sm hover:bg-teal-700 transition-colors">
              Find My Scheme
            </Link>
            <Link to="/schemes" className="inline-flex justify-center items-center px-6 py-3.5 rounded-lg bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/15 transition-colors">
              Browse Schemes
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
              <p className="font-display text-2xl font-semibold text-white">10+</p>
              <p className="text-xs text-white/60 mt-1">Schemes &amp; resources organised</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
              <p className="font-display text-2xl font-semibold text-white">6</p>
              <p className="text-xs text-white/60 mt-1">Guided questions to a recommendation</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
              <p className="font-display text-2xl font-semibold text-white">5</p>
              <p className="text-xs text-white/60 mt-1">Support categories covered</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
              <p className="font-display text-2xl font-semibold text-white">1</p>
              <p className="text-xs text-white/60 mt-1">Single-window information system</p>
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
              className="w-full h-56 sm:h-72 object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-white/40 mt-2">
            Photo: "The 108 Ambulance" via Wikimedia Commons, CC BY-SA / GFDL
          </p>
        </div>
      </section>

      {/* Emergency note */}
      <section className="bg-[var(--color-amber-light)] border-b border-[var(--color-line)]">
        <div className="container-page py-4 flex items-start gap-3 text-sm text-[var(--color-ink)]">
          <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L16 15H2L9 2Z" stroke="var(--color-amber)" strokeWidth="1.6" strokeLinejoin="round"/><path d="M9 7.5V10.5M9 12.5H9.01" stroke="var(--color-amber)" strokeWidth="1.6" strokeLinecap="round"/></svg>
          <p>
            <strong>In case of an emergency</strong>, contact local emergency
            services, police, ambulance services, or the nearest hospital
            immediately. This portal is for informational and academic purposes only.
          </p>
        </div>
      </section>

      {/* Helplines */}
      <section className="container-page py-10">
        <HelplineBanner />
      </section>

      {/* Who it helps */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow="Who this portal helps"
          title="Built for the people navigating the hardest part after an accident"
          description="Whether you are a victim, a family member, or someone supporting a survivor, RakshaSetu organises the information you need into one guided experience."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard value="Victims" label="Understand your compensation options" />
          <StatCard value="Families" label="Navigate death and legal heir documentation" />
          <StatCard value="Survivors" label="Access rehabilitation and disability support" />
          <StatCard value="NGOs & students" label="Reference organised road safety data" />
        </div>
      </section>

      {/* Key categories */}
      <section className="bg-white border-y border-[var(--color-line)]">
        <div className="container-page py-16 sm:py-20">
          <SectionHeader
            eyebrow="Key support categories"
            title="Everything scattered across government sites, organised in one place"
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
            eyebrow="Why this portal is needed"
            title="Reliable information shouldn't be the hardest part of recovery"
            description="Details about compensation, eligibility, required documents, legal processes, and rehabilitation are scattered across multiple central and state government websites. During an already stressful time, this creates confusion and delays."
          />
          <div className="bg-[var(--color-teal-light)] rounded-2xl p-7 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-3">
              What RakshaSetu does
            </h3>
            <ul className="space-y-2.5 text-sm text-[var(--color-ink)]/90">
              <li>&bull; Simplifies scattered scheme information into one clear structure</li>
              <li>&bull; Guides users to relevant support through a short questionnaire</li>
              <li>&bull; Explains documents, legal aid, and rehabilitation options in plain language</li>
              <li>&bull; Points users to the correct official authority for next steps</li>
            </ul>
            <p className="text-xs text-[var(--color-slate)] mt-5 leading-relaxed">
              RakshaSetu is an informational prototype. It does not provide legal
              advice, medical advice, emergency services, or direct government
              application submission.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
