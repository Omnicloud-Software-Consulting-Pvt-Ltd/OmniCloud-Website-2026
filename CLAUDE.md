# OmniCloud-Website-2026

## What this is
Marketing-only website for OmniCloud Consulting (Salesforce Revenue Cloud experts).
Split out from the older `OmniCloud-New-Website` repo in June 2026 to drop all the
Academy/payment complexity and the pitch-deck clutter.

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide icons
- **Backend:** none. Fully static marketing site — no database, auth, or env vars required.
- **App is at the repo root** (not nested in a subfolder).

## What was removed vs. the original repo
The Academy was dropped entirely: `app/academy`, `app/auth`, `app/dashboard`,
`app/api` (Stripe checkout + webhook), `components/EnrollButton.tsx`, the whole `lib/`
(Supabase + Stripe clients), `proxy.ts` middleware, and the `@supabase/*` + `stripe`
dependencies. The Academy code still lives in the original `OmniCloud-New-Website` repo
as the archive — not here.

## Pages
Home, About, Team, Services (Consulting, Implementation, Managed Services, Change
Management), Products (Salesforce Cloud, CPQ, Billing, Consumer Goods, Revenue
Lifecycle), Success Stories, RCA Deck, Contact.

## Hosting / deploy
- Hosted on **Vercel**, connected to this repo's GitHub remote
  (`Omnicloud-Software-Consulting-Pvt-Ltd/OmniCloud-Website-2026`).
- **Push to `main` → Vercel auto-builds and deploys to production** (~1-2 min).
- Use a feature branch for risky changes → Vercel gives a preview URL without touching production.
- No environment variables needed.

## Local dev
```bash
npm install      # already done once
npm run dev      # http://localhost:3000
npm run build    # production build check
npm run lint
```
