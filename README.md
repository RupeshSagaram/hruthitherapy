# Hruthika Ambati — Counselling Website

A one-page marketing site for **Hruthika Ambati**, a Counselling Psychologist
practising at **Manospandana**. Built to feel calm, warm, and unhurried —
someone landing on this page may be anxious or hesitant, so the design
deliberately avoids urgency banners, countdowns, or a hard sell.

Live profile referenced by the site's booking links:
https://manospandana.in/our-psychologists/hruthika/

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via the `@tailwindcss/vite` plugin)
- No backend, no database — a fully static single-page site
- Deployable as-is to Netlify, Vercel, or any static host

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the local dev server (http://localhost:5173)
npm run build   # produce a production build in dist/
npm run preview # preview the production build locally
npm run lint    # run oxlint
```

## Editing the content

**All page copy lives in [`src/data/content.js`](src/data/content.js)** as
plain exported objects — headings, body text, card copy, hours, links. This
is the file to edit for text changes; none of the wording is hardcoded in
the components.

Two things are intentionally left as placeholders for the client to provide:

- **Her photo** — drop the real file at `src/assets/hruthika.jpg`. Until
  it's there, the Hero and About sections automatically show a neutral
  "Photo coming soon" placeholder box at the same size, so the layout never
  breaks either way (see `src/lib/photo.js`).
- **Her email** — `src/components/Contact.jsx` has a commented-out `TODO`
  block showing exactly where and how to add it once the client provides one.

## Project structure

```
src/
├── main.jsx              # entry point
├── App.jsx                # assembles the page from sections, in order
├── index.css               # design tokens: palette, fonts, motion, focus styles
├── data/
│   └── content.js         # all site copy, as plain exported objects
├── lib/
│   └── photo.js            # loads hruthika.jpg if present, else undefined
└── components/
    ├── Nav.jsx              # sticky nav, collapses to a mobile menu
    ├── Hero.jsx              # headline, CTA, photo + blob accent
    ├── About.jsx             # bio, language / mode-of-therapy chips
    ├── Areas.jsx             # "areas I can help with" card grid
    ├── HowIWork.jsx          # the 5 therapeutic approaches, explained plainly
    ├── FirstSession.jsx      # what a first session looks like, 3 steps
    ├── Contact.jsx           # hours, mode chips, booking CTA
    ├── Footer.jsx            # name, profile link, copyright, crisis note
    ├── Blob.jsx               # reusable organic accent shape
    └── ChipGroup.jsx          # small labelled pill group (languages, modes)
```

## Design system

Defined as Tailwind v4 `@theme` tokens in `src/index.css`.

**Palette:**

| Role | Hex |
|---|---|
| Background (warm off-white) | `#FBF6F3` |
| Primary accent (dusty rose) | `#D9A9A3` |
| Secondary accent (muted lilac) | `#C3AFD0` |
| Tertiary accent (powder blue) | `#A8C4D6` |
| Text (warm deep plum) | `#4A3B3D` |

**Typography:**

- Headings — [Quicksand](https://fonts.google.com/specimen/Quicksand) (weights 500/600/700 only)
- Body — [Inter](https://fonts.google.com/specimen/Inter), 17px minimum, generous line height

**Recurring visual signature:** a soft, hand-drawn-feeling organic "blob"
shape (`Blob.jsx`) sits behind her photo in the Hero and About sections,
alternating accent color — a deliberate departure from generic hard-edged
template shapes.

**Motion:** a single restrained `fade-up` keyframe, used sparingly, and
disabled automatically for visitors with `prefers-reduced-motion` set.

## Accessibility & content notes

- Exactly one `<h1>` on the page (the Hero headline); every card/list
  heading below it is correctly nested as an `<h3>` under its section's `<h2>`.
- Visible keyboard focus outlines on every interactive element, checked
  against both light and dark section backgrounds.
- Alt text on every image, including the photo placeholder.
- No claims about cure rates, guaranteed outcomes, or "proven" results
  anywhere in the copy.
- A discreet but clearly visible crisis note in the footer: this site is not
  an emergency service, and in a crisis in India, Tele-MANAS can be reached
  at **14416** (free, 24×7).

## Deployment

This is a static Vite build with no environment variables or server-side
requirements. `npm run build` outputs a deployable `dist/` folder — point
Netlify or Vercel at this repo with build command `npm run build` and
publish directory `dist`.
