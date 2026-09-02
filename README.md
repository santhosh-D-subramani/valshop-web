# Val Shop Web & Documentation

Official website and documentation for **Val Shop** — a comprehensive mobile companion app for VALORANT players.

🌐 **Live Website**: [valshop.santhoshdsubramani.in](https://valshop.santhoshdsubramani.in)  
📱 **Google Play Store**: [Val Shop on Google Play](https://play.google.com/store/apps/details?id=com.santhoshDsubramani.val_shop)

---

## Overview

This repository hosts the landing page, user documentation, architecture guides, and FAQ for the **Val Shop** mobile app. Built with [Docusaurus](https://docusaurus.io/), it provides a fast, responsive, and beautifully themed resource for players.

### Key Sections

* 🏠 **Homepage**: Highlights core app features, Google Play store link, and official disclaimers.
* 📖 **User Guides**: Step-by-step documentation for authentication, daily store rotations, party lobby controls, contracts/missions, and loadout inspection.
* 🛡️ **Privacy & Security**: Details regarding on-device token storage (`SharedPreferences`) and direct client-to-Riot communication.
* ❓ **FAQ**: Answers to common questions, session renewal instructions, and troubleshooting.

---

## Tech Stack

* **Framework**: [Docusaurus v3](https://docusaurus.io/) (Classic Preset)
* **Frontend**: React 19, TypeScript
* **Styling**: Vanilla CSS Modules (Material 3 color system compliance)
* **Syntax Highlighting**: Prism React Renderer

---

## Project Structure

```text
valshop-web/
├── docs/                      # Documentation pages (Markdown / MDX)
│   ├── intro.mdx              # Welcome & Quickstart overview
│   ├── user-guide/            # Categorized user guides
│   │   ├── authentication.mdx # Riot sign-in, 2FA, session refresh
│   │   ├── store-and-favorites.mdx # Storefront, bundles, Night Market, wishlists
│   │   ├── party-and-lobby.mdx # Matchmaking queues & server pods
│   │   ├── xmpp-chat.mdx      # In-game presence & chat (Beta/WIP)
│   │   ├── progression.mdx    # Missions, Battle Pass & KC
│   │   └── profile-and-stats.mdx # Loadout & match history
│   ├── privacy-and-security.mdx
│   └── faq.mdx
├── src/                       # Custom React components & pages
│   ├── components/            # Reusable UI components (e.g. HomepageFeatures)
│   ├── css/                   # Global styles & theme overrides
│   └── pages/                 # Custom landing page (index.tsx)
├── static/                    # Static assets (images, favicon, logo)
├── docusaurus.config.ts       # Site configuration & navigation metadata
└── sidebars.ts                # Documentation sidebar hierarchy
```

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (version `20.0` or higher)
* `npm`, `yarn`, `pnpm`, or `bun`

### Installation

```bash
npm install
```

### Local Development

Start the local development server:

```bash
npm run start
```

Runs the site locally at `http://localhost:3000/` with fast hot-reloading.

### Type Checking & Production Build

Check TypeScript types and compile static production files:

```bash
# Type check
npm run typecheck

# Build static assets for production
npm run build

# Preview the production build locally
npm run serve
```

---

## Disclaimer

*Val Shop is a fan-made project and is not affiliated with, endorsed, or sponsored by Riot Games, Inc. VALORANT and Riot Games are trademarks or registered trademarks of Riot Games, Inc.*
