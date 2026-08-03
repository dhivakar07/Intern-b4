# Intern-b4 — Keel Landing Page

Marketing site for **Keel**, a product for cycle planning, delivery, and release notes.

Built as an internship project with React, Vite, and Tailwind CSS.

## Tech stack

- React 19
- Vite 8
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Framer Motion (installed)

## Getting started

```bash
cd frontend
npm install
npm run dev
```

App runs at [http://localhost:5173](http://localhost:5173).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run Oxlint |

## Project structure

```
frontend/
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonial.jsx
│   │   ├── Pricing.jsx
│   │   ├── Questions.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── Pages/
│   │   └── Home.jsx
│   ├── lib/
│   │   └── styles.js      # Shared Tailwind class helpers
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # Tailwind import + theme tokens
├── index.html
├── package.json
└── vite.config.js
```

## Page sections

1. **Navbar** — logo, product links, sign in / start free  
2. **Hero** — headline, CTAs, cycle chart  
3. **Features** — six product capabilities  
4. **Testimonials** — customer quotes  
5. **Pricing** — monthly/annual plans  
6. **FAQ** — expandable questions  
7. **Contact** — office details + inquiry form  
8. **Footer** — newsletter, links, socials  

## Contributors

| Name | Sections |
|------|----------|
| Asmaan | Hero, Pricing, Footer; Tailwind setup |
| Dhivakar | Navbar, Features, Testimonials, FAQ, Contact |

## License

Internship / internal use.
