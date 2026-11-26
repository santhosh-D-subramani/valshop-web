# VThunai Documentation

Official website and documentation for **VThunai** — a free, open-source, cross-platform companion application for VALORANT players, built with Flutter for Android and iOS.

* **App Repository**: [santhosh-D-subramani/VThunai](https://github.com/santhosh-D-subramani/VThunai)
* **Releases & Downloads**: [GitHub Releases](https://github.com/santhosh-D-subramani/VThunai/releases)

---

## About VThunai

VThunai brings daily store tracking, loadout and preset management, match analytics, rank goal tracking, party and XMPP social features, and game reference data into a single mobile client so you can manage your account without launching your PC.

### Features

* **Authentication & Multi-Account Switching**: Sign in through the official Riot Games WebView flow with 2-Factor Authentication (2FA) support, and switch between multiple saved Riot accounts.
* **Daily Store, Bundles & Wishlist**: Check daily weapon skin offers, pricing, and reset timers; browse featured and historical bundles, chromas, levels, and preview videos; track shop history and wishlist desired skins; sync offers to home screen widgets.
* **Loadout & Presets**: Manage equipped weapon skins, buddies, sprays, and player cards; create, preview, and share loadout presets; configure rule-based auto-loadouts.
* **Profile, Stats & Progression**: Inspect career summaries, match history, and round-by-round breakdowns; track rank progression, rank goals, XP forecasts, battlepass tiers, agent contracts, and estimated collection value; browse regional leaderboards and look up players.
* **Party, Social & Game Info**: View and manage party state, friend lists, and real-time Riot XMPP presence and chat, plus an in-app reference hub for agents, maps, and weapons.
* **Appearance & Localization**: Material 3 theming with dynamic color, light/dark/pure black modes, and support for English (`en`) and Tamil (`ta`).

---

## Installing VThunai

* **iOS (Sideloading)**: Pre-built unsigned `.ipa` files (`VThunai.ipa`) are published on [GitHub Releases](https://github.com/santhosh-D-subramani/VThunai/releases) for installation via AltStore, SideStore, or other iOS sideloading tools.
* **Android & Building from Source**: Clone and build from the main [VThunai repository](https://github.com/santhosh-D-subramani/VThunai).

---

## Privacy & Security

* Authentication is performed directly on the official Riot Games sign-in page inside an in-app WebView.
* Account tokens and session data are stored locally on your device using `SharedPreferences` and are never transmitted to any third-party developer server.
* Network requests go only to official Riot endpoints, community game-data/stats endpoints (`valorant-api.com`, `api.henrikdev.xyz`), and your configured remote config URL.

---

## Running Documentation Locally

To preview or contribute to this documentation site locally:

```bash
bun install
bun run start
```

To type-check and build static production assets:

```bash
bun run typecheck
bun run build
```

---

## License & Disclaimer

VThunai is free, open-source software licensed under the **GNU General Public License v3.0 (GPL-3.0)**.

VThunai is an unofficial, fan-made project created under Riot Games' "Legal Jibber Jabber" policy. It is not affiliated with, endorsed, or sponsored by Riot Games, Inc. VALORANT and Riot Games are trademarks or registered trademarks of Riot Games, Inc.
