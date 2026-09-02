# Decisions

## 2026-09-02 - Feature Card Iconography
- **Decision**: Replaced text/emoji symbols with inline monochrome vector SVG icons inside themed contrast icon badges using `var(--ifm-color-primary)`.
- **Rejected alternatives**: External multi-colored asset files or emoji characters.
- **Reason for rejection**: Multi-colored emojis look dated/inconsistent across operating systems; monochrome vector SVGs ensure crisp contrast, fast loading, and strict Material/theme compliance.
- **Reversal trigger**: If dedicated custom branded illustration icons are requested.

## 2026-09-02 - Homepage Features Content & Card Presentation
- **Decision**: Replaced default Docusaurus features on the homepage with Val Shop app feature cards (Daily Shop Viewer, Multi-Account Support, Detailed Profile Overview, Smart Store Caching, Clean & Native UI, Secure Authentication) and included the official disclaimer. Used Material-aligned card styling with subtle hover elevations and emoji iconography.
- **Rejected alternatives**: Retaining SVG illustration placeholders or creating custom raw unstyled lists.
- **Reason for rejection**: The app content is feature-focused and fits clean cards seamlessly without introducing heavy external assets; styling matches Docusaurus theme variables cleanly.
- **Reversal trigger**: If custom product screenshots or specific SVG illustrations are designed and provided for each feature.
