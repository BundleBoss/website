---
layout: docs
title: Multilingual (WPML / Polylang)
description: Run bundles on a multilingual WooCommerce store with WPML or Polylang.
permalink: /docs/multilingual/
lede: Bundles work on multilingual stores. Translate the product as usual and the rest follows.
---

## Translating a bundle

Translate the bundle product the way you translate any WooCommerce product in **WPML** or **Polylang**. BundleBoss ships a `wpml-config.xml` so its settings are handled correctly:

- The bundle's **settings copy** across to each translation.
- **Slot labels** (the names on choice slots, like "Pick a treat") are **editable per language** in the translated bundle, so each language reads naturally.
- **Product and term references** map to the language being browsed automatically, so a customer shopping in French sees the French versions of the component products and attributes.

## Good to know

- Set the component products up as translations of each other in your multilingual plugin, as you would for any related products, and BundleBoss follows those links.
- Polylang coexistence is smoke-tested alongside WPML support.

If a particular string or reference is not showing in the right language, [get in touch](/support/) with the languages involved and an example bundle, and we will take a look.
