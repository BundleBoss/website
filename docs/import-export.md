---
layout: docs
title: Import, export & migrate
description: Move bundles between sites with a portable JSON file, control uninstall behaviour, and migrate from Composite Products.
permalink: /docs/import-export/
lede: Take your bundles with you. Export to one JSON file, import on another site, or convert existing Composite products.
---

Everything here lives on the tools page at **BundleBoss &rarr; Tools**.

## Export

**Export** downloads every bundle as a single JSON file, and the file carries everything: items, choice pools, rules, pricing, box setup with its sizes and per-type rules, Buy X get Y, gift mode, personalisation kits and layout choices. Each product reference carries its **id, SKU, slug and name**, so the file still makes sense on a different site where the database ids differ, and main, gallery and slot images travel as references. Take an export before any big change; it is a clean backup of your bundle setup, and restoring it on the same site brings back exactly what you had.

## Import

**Import** reads an export back in. Existing bundles are matched by their web address (slug) and updated; new ones are created. Products are matched by **SKU first**, then by name, so it works across sites where the internal IDs differ. Any tags or categories the bundles use that are missing on the new site are created for you.

Anything that cannot be matched is **listed, never guessed**. If an item could not be imported, any rules that depended on it are dropped and reported rather than wired up wrongly. Images are **re-linked** when the same file exists in the media library, which is always true when restoring on the same site; files are never downloaded, and an image that cannot be found is reported and skipped.

<div class="callout"><p>Export and import are part of the free plugin, on purpose. Your data is yours, and you can move it or back it up without a licence.</p></div>

## Uninstall behaviour

The tools page has a data setting: **"Delete all BundleBoss data when the plugin is uninstalled"**. It is **off by default**, so uninstalling keeps all your bundles. Only when you turn it on does uninstall remove bundle products, and **order history is never touched** either way.

## Migrate from Composite Products <span class="pro-pill">Pro</span>

If you have WooCommerce **Composite Products**, a migration section appears (only when composites exist). It converts each composite into a new **draft** bundle for you to review: components map to [choice slots](/docs/choice-slots/) with their pools, category sources, quantities, optional flags and per-slot discounts. The originals are never modified.

Anything that does not map cleanly (scenarios, a base price, default selections) is reported per product with advice, so you can finish those by hand. This importer is in beta until it has been validated against more real-world data.
