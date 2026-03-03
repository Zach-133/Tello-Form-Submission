# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- This is a **React + Vite** project. Start the dev server from the project root:
  ```
  npm run dev
  ```
- Vite serves on **http://localhost:8080** (fixed port, see `vite.config.ts`).
- Do NOT use `node serve.mjs` — that is for static HTML projects only.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/Admin/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/Admin/.cache/puppeteer/`.
- **`screenshot.mjs`** lives at `C:\Users\Admin\Downloads\Tello Frontend v4\screenshot.mjs`. Use it as-is.
- **Always screenshot from localhost:** `node "C:\Users\Admin\Downloads\Tello Frontend v4\screenshot.mjs" http://localhost:8080`
- Screenshots are saved to `C:\Users\Admin\Downloads\Tello Frontend v4\temporary screenshots\screenshot-N.png`.
- Optional label suffix: append a label argument to save as `screenshot-N-label.png`.
- After screenshotting, read the PNG with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing.

## Project Structure
```
tello-v2/
├── src/
│   ├── components/
│   │   ├── landing/       # Landing page sections (Navbar, HeroSection, etc.)
│   │   ├── ui/            # shadcn/ui primitives (Button, Card, Input, etc.)
│   │   ├── InterviewForm.tsx
│   │   ├── ScoreCard.tsx
│   │   └── PerformanceOverview.tsx
│   ├── pages/
│   │   ├── Landing.tsx    # Route: /
│   │   ├── Index.tsx      # Route: /form  (interview setup form)
│   │   ├── Interview.tsx  # Route: /interview
│   │   ├── Results.tsx    # Route: /results/:sessionId
│   │   └── NotFound.tsx
│   ├── assets/            # hero-illustration.png, avatar-*.png
│   ├── index.css          # Design system tokens (CSS variables) + Tailwind
│   └── App.tsx            # Router
├── brand_assets/          # Tello Logo.jpg
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── temporary screenshots/ # Auto-created by screenshot.mjs (PNGs gitignored)
├── tailwind.config.ts
└── index.html
```

## Route Map
| Path | Component | Purpose |
|------|-----------|---------|
| `/` | `Landing.tsx` | Marketing landing page |
| `/form` | `Index.tsx` | Interview setup form |
| `/interview` | `Interview.tsx` | Live AI interview |
| `/results/:sessionId` | `Results.tsx` | Score & feedback |

## Output Defaults
- Edit component `.tsx` files in `src/` — do NOT create a standalone `index.html`.
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive.

## Brand Assets
- Check `brand_assets/` before designing — contains `Tello Logo.jpg`.
- Design system is defined in `src/index.css` (CSS variables) and `tailwind.config.ts`.
- Primary colour palette: deep brown primary, coral CTA, warm cream backgrounds.
- Fonts: **DM Serif Display** (headings) + **Inter** (body).

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Use design system tokens (`primary`, `coral`, `teal`, `gold`, `success`).
- **Shadows:** Never use flat `shadow-md`. Use `shadow-soft`, `shadow-medium`, `shadow-strong`, `shadow-coral`.
- **Typography:** Headings use `font-serif` (DM Serif Display). Body uses Inter. Apply tight tracking on large headings, generous line-height on body.
- **Gradients:** Use `bg-gradient-coral`, `bg-gradient-warm`, `bg-gradient-hero`, `bg-gradient-card` utility classes.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states.
- **Spacing:** Use intentional, consistent spacing tokens.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
