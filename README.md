# Chaitali Parlour

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Production URL

`https://chaitali-parlour.netlify.app/`

## Project Overview

Chaitali Parlour is a React + Vite website for a beauty parlour business. The project focuses on a polished salon-style presentation with clear service discovery, testimonials, gallery browsing, appointment booking, and contact information.

The UI is built around Material UI, Framer Motion, and a custom theme tailored for a beauty and parlour brand. The current version also includes layout cleanup, improved navigation behavior, responsive card grids, and updated SEO/public assets.

## Business Details

- Business name: `Chaitali Beauty Parlour`
- Alternate name: `Chaitali Parlour`
- Production site: `https://chaitali-parlour.netlify.app/`
- Main contact page: `https://chaitali-parlour.netlify.app/contact`
- Booking page: `https://chaitali-parlour.netlify.app/book`
- Services page: `https://chaitali-parlour.netlify.app/services`
- Gallery page: `https://chaitali-parlour.netlify.app/gallery`

## Tech Stack

- React
- Vite
- Material UI
- Emotion
- Framer Motion
- React Router DOM
- MUI X Date Pickers
- Day.js

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the local URL shown by Vite, usually:

```bash
http://localhost:5173
```

## Build And Preview

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Linting

Run ESLint:

```bash
npm run lint
```

## Project Structure

```text
chaitali-parlour/
├── public/
│   ├── favicon/
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── theme/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Deployment Notes

- The app is configured for static hosting with Vite output in `dist/`.
- `public/_redirects` supports SPA routing for Netlify.
- The production URL used in sitemap and public SEO assets is:

```text
https://chaitali-parlour.netlify.app/
```

## Current Highlights

- Responsive homepage with service, review, and offer sections
- About page with updated journey timeline through 2026
- Services page aligned with homepage card design
- Structured gallery layout
- Appointment booking page
- Contact page with refined form and visit card
- Footer/header navigation with scroll-to-top behavior

