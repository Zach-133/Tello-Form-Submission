# Tello — AI Interview Platform

Tello is an AI-powered mock interview platform that helps candidates practice for job interviews with real-time voice conversation, personalised questions, and detailed performance feedback.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool, dev server on port 8080)
- **Tailwind CSS** + **shadcn/ui** (component library)
- **ElevenLabs** (`@elevenlabs/react`) — live voice AI interview
- **React Router v6** — client-side routing
- **React Query** — async state management

## Getting Started

```sh
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev

# Type-check
npx tsc --noEmit

# Run tests
npm test

# Build for production
npm run build
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Marketing landing page |
| `/form` | Interview setup (name, duration, field, difficulty) |
| `/interview` | Live AI voice interview |
| `/results/:sessionId` | Score breakdown and feedback |

## Project Structure

```
src/
├── components/
│   ├── landing/        # Landing page sections
│   ├── ui/             # shadcn/ui primitives
│   ├── InterviewForm.tsx
│   ├── ScoreCard.tsx
│   └── PerformanceOverview.tsx
├── pages/
│   ├── Landing.tsx
│   ├── Index.tsx       # /form
│   ├── Interview.tsx
│   ├── Results.tsx
│   └── NotFound.tsx
├── assets/             # Images
├── hooks/
├── lib/
├── App.tsx
├── main.tsx
└── index.css           # Design tokens + Tailwind
```

## Design System

Tokens are defined as CSS variables in `src/index.css` and mapped in `tailwind.config.ts`.

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | Deep brown | Headings, text |
| `--coral` | Warm orange | CTA buttons, accents |
| `--teal` | Muted teal | Secondary accents |
| `--gold` | Warm gold | Achievements |
| `--success` | Green | Positive states |

Fonts: **DM Serif Display** (headings) · **Inter** (body)
