# Nó – File Renamer & Page Structure (Figma Plugin)

Opinionated Figma plugin that renames the current file with consistent metadata and can create a ready-to-use page structure for common project types.

## What it does
- Rename the file with client, product, version, and tags; shows a live preview before applying.
- Store metadata in plugin data so future runs can prefill fields.
- Create page structures for web app, mobile app, design system, website, and branding projects (with guideline frames and cover details).
- Custom structures create empty pages only (no guideline frames); lines with `---` (or `--`/`—`) insert divider pages.
- Uses Figma’s Inter Regular/Medium/Bold fonts via `loadFontAsync`.

## Requirements
- Figma desktop (to load a local manifest).
- Node.js and npm installed locally.

## Setup
1) Install dependencies: `npm install`  
2) Build once: `npm run build` (outputs `code.js` from `code.ts`)  
3) (Optional) Auto-build on save: `npm run watch`  
4) (Optional) Lint: `npm run lint`

## Load in Figma
1) In Figma desktop: `Plugins` → `Development` → `Import plugin from manifest…`  
2) Select `Name/manifest.json`.  
3) Run the plugin from `Plugins` → `Development`.

## Using the plugin
- **Rename File tab**
  - Enter product name (required) plus optional client, version, tags, description.
  - Preview at the top shows the final filename. Click **Rename File** to apply.
- **Create Structure tab**
  - Pick a project type and click **Create Structure**.
  - Built-in types create guideline frames and a cover page populated with saved metadata (client/product/version/tags/description).
  - For **Custom Structure**, enter one page name per line:
    - `---` (or `--`/`—`) adds a divider page.
    - Other lines create empty pages (no guideline frames).
- **Configuration tab**
  - Import a JSON template (either `{ name, pages: [...] }` or just an array of page objects) and save it as an “Imported Template” option in Create Structure.

## Contribution & PR flow
- **Branch names:** `feature/<short-desc>`, `fix/<issue-or-bug>`, or `chore/<task>`.
- **PR title format:** `type: short summary` (e.g., `feat: add divider pages`, `fix: skip guideline on custom`).
- **Before opening a PR:**  
  1) Run `npm run lint` and `npm run build`.  
  2) Describe the change and testing in the PR body; attach UI screenshots/GIFs for visible changes.  
  3) Link related issues if they exist.  
  4) Request a review once checks pass.
