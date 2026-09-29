# AGENTS.md

## Repository shape

- This is a Spanish-language manual repository with a custom Node.js Markdown→HTML generator; there is no `package.json`, lockfile, CI, `npm test`, lint, or typecheck configuration.
- Run commands from the repository root. Node.js is the only required runtime.
- Edit the canonical `manual_parts/*.md` files, not the generated `MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.md` or `.html` files.
- `tools/build_manual.js` is the executable source of truth for the exact 14-part order and output names. Do not rebuild by globbing every Markdown file.
- `tools/build_website.js` derives that same canonical order, builds the static multi-page site in `site/`, and bundles a local full-text search index. Site styles/behavior are sourced from `tools/site_template/`; do not edit generated `site/` output by hand.
- Historical draft folders, audit reports, and migration/debug scripts were removed; do not recreate alternate canonical parts. `tools/build_manual.js` remains the only source of build ordering.

## Required workflow

Run in this order after changing canonical Markdown:

```powershell
node tools/build_manual.js
node tools/validate_manual.js
node tools/validate_html.js
node tools/verify_reviewed_numbers.js
node tools/canonical_cases.js
node tools/dcf_sensitivity.js
node tools/scan_master.js MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.md
node tools/scan_question_artifacts.js MANUAL_VALUE_INVESTING_Y_ANALISIS_FINANCIERO_REVISADO.md
node tools/build_website.js
node tools/validate_website.js
```

- Run `build_manual.js` before `validate_manual.js` and `validate_html.js`; run `build_website.js` before `validate_website.js`. The Markdown validator checks source/master parity, the 34 chapter numbers, required formulas, terms, and known artifacts.
- `validate_html.js` checks the generated standalone HTML, converted math blocks, checkboxes, tables, and character artifacts.
- `validate_website.js` checks the generated 38-page static site, local links/anchors, offline assets, full-text search index, and formula blocks.
- For a focused Markdown check, pass an alternate master path to `validate_manual.js`; for a focused HTML check, pass a path to `validate_html.js`.
- If chapter 30 inputs change, update the expected fixtures in both `tools/canonical_cases.js` and `tools/verify_reviewed_numbers.js`, then run both scripts.
- The reviewed Markdown/HTML and the `site/` folder are generated deliverables; edit canonical parts or `tools/site_template/`, then rebuild rather than patching outputs by hand.

## Content invariants

- Keep the final 30-minute/1-hour/3-hour protocol in `manual_parts/parte_37_protocolo_tiempos.md`, after the canonical appendices and aliases; the published document must retain 34 chapters and that final section.
- All company cases, prices, returns, and portfolios are fictional. Preserve the stated case cutoff (31 December 2025) and editorial date (24 September 2026); do not add current market data without an explicit request and dated sources.
- Keep the cash-flow conventions distinct: historical `CFO − CapEx` is apalancado FCF; FCFF is discounted with WACC to EV; FCFE is discounted with `K_e` to equity. Do not mix flow definitions or denominators.
- Use `MoS = (IV − price) / IV` (equivalently `1 − price/IV`); never label `1 − IV/price` as margin of safety. Treat a negative IV percentage as not meaningful.
- Match DCF flow and rate (`FCFF`/WACC or `FCFE`/`K_e`), and do not multiply an already indexed terminal flow such as `FCFF_(n+1)` by `(1+g)` again.
- Distinguish historical ROIC/WACC (EVA) from incremental ROIC and project NPV; keep the EV→Equity bridge, table master, glossary, aliases, and appendices consistent.
- Both HTML generators expect closed `\\\[ ... \\\]` math blocks; run `validate_html.js` and `validate_website.js` after formula/parser changes.
