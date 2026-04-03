# GitHub Homepage

A minimalist glassmorphism-styled personal GitHub homepage built with Next.js.

## Features

- **Profile Card** — Avatar, name, bio, stats (repos / followers / following) and social links
- **Repository Grid** — Latest updated repositories with language, stars and forks
- **Contribution Heatmap** — Custom CSS grid heatmap (no third-party library)
- **Glassmorphism Design** — Dark gradient background with frosted glass cards and subtle hover animations

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (icons)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy the example env file and set your GitHub username:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
GITHUB_USERNAME=yourusername
# Optional: GITHUB_PAT=ghp_xxx  (increases API rate limit)
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout: Inter font, gradient bg, floating orbs
│   ├── page.tsx                # Main page: fetches data and composes all sections
│   ├── globals.css             # Gradient background, .glass-card utility, animations
│   ├── loading.tsx             # Skeleton loading state
│   └── error.tsx               # Error boundary with retry button
├── components/
│   ├── ProfileCard.tsx         # Avatar, name, bio, stats, social links
│   ├── RepoGrid.tsx            # Responsive grid of repository cards
│   └── ContributionHeatmap.tsx # 52x7 custom CSS grid contribution heatmap
├── lib/
│   ├── github.ts               # GitHub REST API client (user + repos)
│   └── contributions.ts        # Contribution data via third-party API
├── .env.local                  # Environment variables (not committed)
├── .env.example                # Environment variable template
├── next.config.ts              # Next.js config (image remote patterns)
├── tailwind.config.ts          # Tailwind theme extensions
└── tsconfig.json               # TypeScript configuration
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Push to GitHub and connect to [Vercel](https://vercel.com). Set the `GITHUB_USERNAME` environment variable in the Vercel dashboard.

## API Rate Limiting

Public GitHub API allows **60 requests/hour** by IP. If traffic exceeds this, create a [Personal Access Token](https://github.com/settings/tokens) (no scopes needed) and add it to `.env.local`:

```env
GITHUB_PAT=ghp_xxxxxxxxxxxxxxxxxxxx
```

This increases the rate limit to **5000 requests/hour**.
