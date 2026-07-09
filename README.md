# RakshaSetu — Road Accident Compensation & Rehabilitation Portal

**Design and Development of an Online Portal for Road Accident Compensation and Rehabilitation Schemes**
SRM Community Connect (21GNP301L) · Academic Year 2025–26 · CSE Academic Submission

## What this is

RakshaSetu is an academic informational web portal that helps road accident
victims, survivors, and their families understand:

- Government compensation schemes (central, state, and hit-and-run cases)
- Rehabilitation and disability support
- Legal aid through District Legal Services Authorities and MACT
- Documents required at each stage (medical, police, legal, compensation)
- Road safety awareness and Good Samaritan protections

It is a **prototype for academic demonstration only**. It does not provide
legal advice, medical advice, emergency services, or direct government
application submission. All content should be verified with official
government authorities.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- React Router v7
- Static JSON data (no backend required)

## Getting started

**First time only:** double-click the setup script for your operating system —
this installs everything needed.

| Your computer | Double-click this file (first time only) |
|---|---|
| Windows | `install-and-run.bat` |
| Mac | `install-and-run.command` |
| Linux | `install-and-run.sh` (run `bash install-and-run.sh` in a terminal) |

**Every time after that**, just use the quick-start file instead — it skips
the install step entirely and starts the app straight away:

| Your computer | Double-click this file (every time after) |
|---|---|
| Windows | `run.bat` |
| Mac | `run.command` |
| Linux | `run.sh` (run `bash run.sh` in a terminal) |

Either way, your browser opens automatically at `http://localhost:5173`.

**Manual way**, if you prefer the terminal:

```bash
npm install       # first time only
npm run dev       # every time after
npm run build     # production build to /dist
npm run preview   # preview the production build
npm run lint      # run oxlint
```

## Project structure

```
src/
  components/   Navbar, Footer, SchemeCard, QuestionCard, ChecklistItem,
                SectionHeader, StatCard, InfoCard
  data/
    schemes.json   10 sample scheme/resource records
  pages/
    Home.jsx           Landing page with hero, categories, and emergency note
    FindScheme.jsx      6-question guided flow with rule-based recommendation
    Schemes.jsx         Searchable, filterable scheme directory
    SchemeDetail.jsx    Full detail view for a single scheme (/schemes/:id)
    Documents.jsx       Document checklist grouped by case type
    LegalAid.jsx        Legal aid & rehabilitation guidance
    RoadSafety.jsx      Road safety awareness resources
    About.jsx           Academic project summary and disclaimer
    NotFound.jsx        404 fallback page
  App.jsx         Routing and layout
  main.jsx        Entry point (wraps App in BrowserRouter)
  index.css       Tailwind v4 theme tokens and base styles
```

## How the "Find My Scheme" recommendation works

The flow asks six questions (who it's for, accident outcome, hit-and-run
status, FIR status, vehicle identification, and support type needed). Answers
are matched against a simple rule-based function (`recommend()` in
`FindScheme.jsx`) that maps specific answer combinations to relevant scheme
IDs from `schemes.json`, along with a plain-language reason for each match.
No AI or backend call is involved — this is deterministic, transparent logic
suitable for an academic prototype.

## Adding or editing schemes

All scheme content lives in `src/data/schemes.json`. Each entry follows this
shape:

```json
{
  "id": "unique-id",
  "name": "Scheme name",
  "category": "Compensation | Legal Aid | Rehabilitation | Documents | Awareness",
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

Adding a new object automatically makes it searchable in the Scheme
Directory and viewable at `/schemes/:id`.

## Disclaimer

This portal is an academic informational project. It does not replace
official government portals, legal advice, medical advice, or emergency
services. Users should verify all scheme details with the concerned
government authority.
