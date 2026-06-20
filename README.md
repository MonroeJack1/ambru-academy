# Ambru Academy — Landing Page

A static landing page for [Ambru Academy](https://skool.com/ambru-academy), built with Next.js (static export) and Tailwind CSS.

## Tech stack

- [Next.js 16](https://nextjs.org/) — `output: "export"` for fully static HTML
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) components
- [Lucide React](https://lucide.dev/) icons

---

## Local development

### Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- [pnpm](https://pnpm.io/) v9 or later (`npm install -g pnpm`)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> The dev server uses Next.js HMR — changes to any file are reflected instantly without a full reload.

---

## Building a static export locally

```bash
pnpm build
```

Next.js writes the fully static output to the `./out` directory. You can preview it with any static file server, for example:

```bash
npx serve out
```

---

## Deploying to GitHub Pages

### One-time repository setup

1. **Push this project** to a GitHub repository.

2. **Enable GitHub Pages with GitHub Actions** in your repo:
   - Go to **Settings → Pages**.
   - Under *Source*, choose **GitHub Actions**.

3. **(Optional) Set the base path** if your site lives under a subpath (e.g. `username.github.io/repo-name` instead of a custom domain or `username.github.io`):
   - Go to **Settings → Variables → Actions** (repository variables, not secrets).
   - Create a variable named `NEXT_PUBLIC_BASE_PATH` with the value `/your-repo-name` (leading slash, no trailing slash).
   - Leave this variable unset or empty for custom domains and root-level GitHub Pages sites.

### Deploying

Push to the `main` branch (or trigger the workflow manually via **Actions → Deploy to GitHub Pages → Run workflow**). The workflow will:

1. Install dependencies with pnpm.
2. Run `next build` to generate the static export in `./out`.
3. Upload and deploy the `./out` directory to GitHub Pages.

The live URL is shown in the **Actions → Deploy to GitHub Pages** job summary once deployment completes.

### Updating the Skool link

All CTAs point to `https://skool.com/ambru-academy`. To change this, search for `SKOOL_LINK` in the codebase — it appears in:

- `components/navbar.tsx`
- `components/sections/hero.tsx`
- `components/sections/solution.tsx`
- `components/sections/community.tsx`
- `components/sections/final-cta.tsx`

Update the value in each file, then rebuild and redeploy.

---

## Project structure

```
.
├── app/
│   ├── globals.css        # Tailwind v4 theme tokens + global styles
│   ├── layout.tsx         # Root layout, fonts, metadata
│   └── page.tsx           # Home page — composes all sections
├── components/
│   ├── navbar.tsx         # Sticky navigation bar
│   ├── footer.tsx         # Page footer
│   └── sections/          # One file per page section
│       ├── hero.tsx
│       ├── trust-strip.tsx
│       ├── problem.tsx
│       ├── solution.tsx
│       ├── curriculum.tsx
│       ├── how-it-works.tsx
│       ├── community.tsx
│       ├── gallery.tsx
│       ├── outcomes.tsx
│       ├── final-cta.tsx
│       └── faq.tsx
├── public/
│   └── images/            # Static images used by the site
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment workflow
├── next.config.mjs        # Next.js config (static export, basePath)
└── README.md
```
