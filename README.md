# Nó

Figma plugin for consistent file naming and project page structures.

## Features

**Copy Name**
- Generate file names with client, product, version, and tags
- Live preview of the generated name
- Copy to clipboard with one click (Figma API doesn't allow direct file rename)
- Metadata stored for future sessions
- Shows if current file follows naming convention

**Create Structure**
- Pre-built templates: Web App, Mobile App, Design System, Marketing Website, Branding
- Each template includes guideline frames and a populated cover page
- Custom structures: one page per line, `---` for dividers
- Import JSON templates via the Config tab

## Install

```bash
npm install
npm run build
```

## Load in Figma

1. Figma desktop → Plugins → Development → Import plugin from manifest
2. Select `manifest.json`
3. Run from Plugins → Development

## JSON Template Format

```json
{
  "name": "Template Name",
  "pages": [
    { "name": "Cover", "description": "...", "bestPractices": ["..."] },
    { "name": "---", "isDivider": true },
    { "name": "Research", "description": "...", "bestPractices": ["..."] }
  ]
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Compile TypeScript |
| `npm run watch` | Auto-rebuild on changes |
| `npm run lint` | Run linter |

## Contributing

- Branch: `feature/<desc>`, `fix/<desc>`, or `chore/<desc>`
- PR title: `type: summary` (e.g., `feat: add divider pages`)
- Run `npm run lint && npm run build` before submitting
