# Decisions

## 2026-09-02 - Feature Card Iconography
- **Decision**: Replaced text/emoji symbols with inline monochrome vector SVG icons inside themed contrast icon badges using `var(--ifm-color-primary)`.
- **Rejected alternatives**: External multi-colored asset files or emoji characters.
- **Reason for rejection**: Multi-colored emojis look dated/inconsistent across operating systems; monochrome vector SVGs ensure crisp contrast, fast loading, and strict Material/theme compliance.
- **Reversal trigger**: If dedicated custom branded illustration icons are requested.

## 2026-09-03 - Val Shop Documentation Suite Structure
- **Decision**: Structured the documentation under `docs/` into a root Welcome/Quickstart guide (`intro.mdx`), a categorized `user-guide/` containing dedicated chapters for Authentication/2FA/Multi-Account, Daily Store/Night Market/Wishlists, Party/Lobby/Matchmaking, Real-time XMPP Chat/Presence, Progression/Missions/Battle Pass, and Profile/Loadout/Stats, followed by standalone pages for Privacy/Security and FAQ/Troubleshooting.
- **Rejected alternatives**: Single monolithic README-style documentation page or sparse stub pages.
- **Reason for rejection**: Multi-page structured sidebar hierarchy allows players to navigate directly to specific subsystem questions (e.g. multi-account switching or party queue controls) and mirrors standard product documentation best practices.
- **Reversal trigger**: If documentation needs to be merged into in-app help modals or restructured based on new app feature updates.

