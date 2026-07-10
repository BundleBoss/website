---
layout: docs
title: Multilingual & translations
description: Run bundles on a multilingual WooCommerce store with WPML or Polylang, and show the plugin itself in your customers' language.
permalink: /docs/multilingual/
lede: Two separate things make a store speak a language, your content and the plugin's own words. BundleBoss handles both, and this page explains exactly what is automatic and what is yours.
---

## The two halves of a language

When a customer flips your store's language switcher, two kinds of text change:

1. **Your content**: product names, bundle titles, slot labels, descriptions. These are your own words, written by you per language in your multilingual plugin. Nothing auto-translates them, on purpose.
2. **The plugin's words**: buttons, savings lines, stock messages ("Add Bundle to Cart", "You save", "Only 1 left"). These come from BundleBoss's translation files and switch automatically with the site language.

## Translating a bundle (WPML / Polylang)

Translate the bundle the way you translate any WooCommerce product. BundleBoss ships a `wpml-config.xml`, so its settings behave correctly:

- The bundle's **settings copy** across to each translation.
- **Slot labels** (the names on [choice slots](/docs/choice-slots/), like "Pick a treat") are **editable per language** in the translated bundle, so each language reads naturally.
- **Product and term references map automatically** to the language being browsed. A customer shopping in English sees the English versions of the component products, in the fixed items and inside the choice pools alike, with prices and stock following. We have tested this end to end: a bundle stored in one language, browsed in another, resolves every component, chooser option and savings line to the right language.

Set the component products up as translations of each other in your multilingual plugin, as you would for any related products, and BundleBoss follows those links.

## The plugin in your customers' language

BundleBoss is fully translation-ready. The site language (Settings, General) decides which translation loads; anything not yet translated falls back to English string by string, so a partial translation never breaks a page.

- **English** ships as standard.
- **Greek** is in development: a full storefront translation is written and going through native review now.
- **Your language next?** Translations land through WordPress.org language packs, which install and update automatically on every store in that locale, and the community can contribute there too. If you want BundleBoss in your language, [tell us](/support/) and we will prioritise it.

When a new BundleBoss version adds features, any brand-new text simply shows in English on a translated store until the translation catches up, usually within a release. Nothing breaks in the meantime.

## Good to know

- **Free Polylang users:** products are not translated until you switch them on. In **Languages, Settings, Custom post types**, tick **Products**. Until then, language URLs redirect to your default language and everything renders untranslated. (WPML with WooCommerce Multilingual handles products out of the box.)
- **Want to change one of our words on your site?** You do not have to wait for us. The free **Loco Translate** plugin lets you override any single string locally, your site, your wording, immediately.

If a particular string or reference is not showing in the right language, [get in touch](/support/) with the languages involved and an example bundle, and we will take a look.
