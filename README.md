# RakshaSetu — Road Accident Compensation & Rehabilitation Portal

**Live:** [road-accident-portal.vercel.app](https://road-accident-portal.vercel.app)

An informational web portal that helps road accident victims, survivors, and
their families in India find and understand:

- Emergency treatment support (PM-RAHAT free cashless treatment)
- Compensation pathways (Hit & Run, Section 164 no-fault, Section 166 fault-based)
- State-level schemes (Rajasthan: Mukhyamantri Chiranjeevi Accident Insurance, CM Relief Fund)
- Legal aid through District Legal Services Authorities and MACT
- Rehabilitation and disability support
- Required documents at each stage
- Road safety awareness and Good Samaritan protections

Available in **English and Hindi**, with a language choice shown on first visit
and a toggle available on every page after that.

It is an **informational prototype**, not a substitute for legal advice,
medical advice, emergency services, or official government portals. All
scheme details should be verified with the concerned government authority.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- React Router v7
- Static JSON data — no backend, no database

## Local development

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build      # production build to /dist
npm run preview    # preview the production build
npm run lint        # run oxlint
```

## Deployment

This repo is connected to Vercel — every push to `main` deploys automatically.
No manual build or upload step is needed.

```bash
git add -A
git commit -m "your message"
git push
```

## Project structure

```
src/
  components/   Navbar, Footer, SchemeCard, QuestionCard, ChecklistItem,
                SectionHeader, StatCard, InfoCard, HelplineBanner,
                LanguageSplash
  i18n/
    LanguageContext.jsx   English/Hindi state, persisted in localStorage
    strings.js            All translated UI text
  data/
    schemes.json   13 scheme/resource records (central + Rajasthan state)
  pages/
    Home.jsx           Hero, categories, emergency note, helplines
    FindScheme.jsx      6-question guided flow with rule-based recommendation
    Schemes.jsx         Searchable, filterable scheme directory
    SchemeDetail.jsx    Full detail view for a single scheme (/schemes/:id)
    Documents.jsx       Document checklist grouped by case type
    LegalAid.jsx        Legal aid & rehabilitation guidance
    RoadSafety.jsx      Road safety awareness resources
    About.jsx           Project summary and disclaimer
    NotFound.jsx        404 fallback page
  App.jsx         Routing and layout
  main.jsx        Entry point (wraps App in BrowserRouter + LanguageProvider)
  index.css       Tailwind v4 theme tokens and base styles
```

## How the "Find My Scheme" recommendation works

Six questions (who it's for, accident outcome, hit-and-run status, FIR
status, vehicle identification, support type needed) are matched against a
rule-based function (`recommend()` in `FindScheme.jsx`) that maps answer
combinations to specific scheme IDs in `schemes.json`, with a plain-language
reason shown for each match. No AI or backend call — deterministic and
transparent by design.

## Adding or editing schemes

All scheme content lives in `src/data/schemes.json`:

```json
{
  "id": "unique-id",
  "name": "Scheme name",
  "category": "Emergency Treatment | Compensation | Legal Aid | Rehabilitation | Documents | Awareness",
  "type": "Central | State | NGO/Support | Guidance",
  "description": "One-line summary",
  "eligibility": ["..."],
  "benefits": ["..."],
  "documents": ["..."],
  "process": ["..."],
  "whereToApply": "...",
  "notes": "..."
}
```

Adding an entry automatically makes it searchable in the directory and
viewable at `/schemes/:id`. Scheme detail content is currently English-only;
Hindi translation of this content is a planned next step (UI chrome — nav,
homepage, questionnaire, disclaimers — is already fully bilingual).

## Adding translations

UI text lives in `src/i18n/strings.js` as parallel `en` / `hi` objects keyed
by the same string ID. Add a new key to both objects, then reference it with
`t("your_key")` via `useLanguage()` in any component.

## Disclaimer

This portal is an informational project. It does not replace official
government portals, legal advice, medical advice, or emergency services.
Users should verify all scheme details with the concerned government
authority.
