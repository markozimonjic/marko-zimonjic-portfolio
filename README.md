# Marko Zimonjic — Portfolio

Personal portfolio site of Marko Zimonjic, Senior Java Backend Developer based in Belgrade, Serbia.

## Stack

- **React 19** + **TypeScript**
- **Vite** for the dev server and production build
- **Tailwind CSS v4** for styling
- **Framer Motion** for scroll-reveal animations
- **Lucide** + **React Icons** for the icon set

## Getting started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Project structure

```
src/
├── components/
│   ├── portfolio/   # Hero, About, Skills, Experience, Footer sections
│   └── ui/          # Reusable UI primitives (Button, ...)
├── lib/             # cn() helper (tailwind-merge + clsx)
├── pages/           # Top-level page components
├── App.tsx
├── main.tsx
└── index.css        # Tailwind theme + design tokens
```

## License

Personal project — all rights reserved.
