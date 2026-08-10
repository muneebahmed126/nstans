# Nstans Website (Frontend)

Next.js frontend for **Nstans** — a software studio website with landing, services, about, contact, and a free consultation flow.

## Team

| Role | Person | Stack |
|------|--------|--------|
| Frontend | You | Next.js, TypeScript, Tailwind |
| Backend | Rutaba | Express.js (+ DB / admin later) |

## Pages

- `/` — Landing page (Hire Us + Free Consultation CTAs)
- `/services` — Full services list from mock data
- `/about` — Founders + studio story
- `/contact` — Contact form → `muneebahmed4134@gmail.com`
- `/consultation` — Multi-step intake questionnaire

## Mock data → future API

All on-screen content is sourced from typed arrays in `src/data/` through `src/lib/api.ts`.

When backend APIs are ready:

1. Set env vars in `.env.local`:

```env
NEXT_PUBLIC_USE_API=true
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

2. Keep the same response shapes as the mock exporters (or adapt `src/lib/api.ts`).

Suggested Express endpoints for later:

- `GET /api/services`
- `GET /api/service-categories`
- `GET /api/tech-stack`
- `GET /api/founders`
- `GET /api/testimonials`
- `GET /api/clients`
- `GET /api/consultation/questions`
- `POST /api/contact`
- `POST /api/consultation`

Admin dashboard (future): CRUD for services, tech stack, founders, testimonials.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
npm run lint
```

## Design notes

- Palette: ink slate + teal accent (intentionally different from blue-heavy agency references)
- Fonts: Outfit (display) + Plus Jakarta Sans (body)
- Motion: hero fade-ups + client marquee (respects reduced motion)

## Repo handoff

This folder is ready to become a GitHub repo. Suggested flow:

```bash
git init
git add .
git commit -m "Initial Nstans Next.js frontend"
# create repo on GitHub, then:
git remote add origin <your-repo-url>
git push -u origin main
```

Invite Rutaba as collaborator once the remote exists.
