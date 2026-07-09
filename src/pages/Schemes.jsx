import { useMemo, useState } from "react";
import SchemeCard from "../components/SchemeCard";
import SectionHeader from "../components/SectionHeader";
import schemes from "../data/schemes.json";

const categories = ["All", "Emergency Treatment", "Compensation", "Legal Aid", "Rehabilitation", "Documents", "Awareness"];
const types = ["All", "Central", "State", "NGO/Support", "Guidance"];

export default function Schemes() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  const filtered = useMemo(() => {
    return schemes.filter((s) => {
      const matchesQuery =
        query.trim() === "" ||
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || s.category === category;
      const matchesType = type === "All" || s.type === type;
      return matchesQuery && matchesCategory && matchesType;
    });
  }, [query, category, type]);

  return (
    <div className="container-page py-14 sm:py-20">
      <SectionHeader
        eyebrow="Scheme directory"
        title="Browse all schemes and resources"
        description="Search and filter through compensation, legal aid, rehabilitation, document, and awareness resources."
      />

      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="#5B6478" strokeWidth="1.5" />
            <path d="M11.5 11.5L14.5 14.5" stroke="#5B6478" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search schemes by name or keyword"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--color-line)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-3 rounded-lg border border-[var(--color-line)] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]"
        >
          {categories.map((c) => <option key={c} value={c}>{c === "All" ? "All categories" : c}</option>)}
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="px-4 py-3 rounded-lg border border-[var(--color-line)] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]"
        >
          {types.map((t) => <option key={t} value={t}>{t === "All" ? "All types" : t}</option>)}
        </select>
      </div>

      <p className="text-sm text-[var(--color-slate)] mb-6">
        Showing {filtered.length} of {schemes.length} schemes and resources
      </p>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s) => <SchemeCard key={s.id} scheme={s} />)}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-[var(--color-line)] rounded-xl">
          <p className="text-[var(--color-slate)]">No schemes match your search. Try a different keyword or filter.</p>
        </div>
      )}
    </div>
  );
}
