---
layout: docs
title: Colour swatches
description: Show colour circles instead of text buttons, set once on the attribute or filled in automatically from the colour name.
permalink: /docs/swatches/
lede: Show colour circles instead of text. Set them once, or let BundleBoss fill them in from the colour name.
---

## What swatches are

A swatch is a small coloured circle shown in place of a text button for a colour option. It is a BundleBoss feature: WooCommerce has no built-in colour swatch, so the colour is stored against the attribute and rendered on the bundle's product page, with the colour name in a hover tooltip.

<figure>
  <img src="/docs/img/swatches-storefront.png" alt="Colour options shown as swatch circles on a bundle product page">
  <figcaption>Colour options as swatch circles. Size stays as text, so the two mix freely.</figcaption>
</figure>

## Set a swatch colour

For a global attribute (one you manage under Products, Attributes):

<ol class="steps">
<li>Go to <strong>Products &rarr; Attributes</strong>, find your Colour attribute and click <strong>Configure terms</strong>.</li>
<li>Edit a term (say "Red") and pick a <strong>Swatch colour</strong> with the colour picker.</li>
<li>Save. That colour now shows as a circle everywhere the attribute appears in a bundle.</li>
</ol>

A swatch column in the terms list shows which colours are set.

## Filled in from the name

If a colour has **no swatch set**, BundleBoss works it out from the **name**. It knows around ninety-five common colours and falls back to the base word for compounds, so "Royal Blue" and "Heather Grey" still resolve. This runs in both the configurator and the [quantity grid](/docs/quantity-grid/).

This matters most for **custom (product-level) attributes**, the kind imported catalogues often use. They have no attribute term to attach a colour to, so the name is the only source, and it means those products show real colour dots with no setup at all. A name BundleBoss cannot recognise falls back to a tidy text chip rather than a blank circle.

<div class="callout tip"><span class="callout-label">Tip</span><p>You only need to set swatch colours by hand for shades the name cannot describe, like a specific brand colour. Everyday colours fill themselves in.</p></div>

## Mixing swatches and text

You do not have to swatch everything. Colour can show as circles while Size stays as text buttons in the same bundle. Any attribute term without a colour (and any name that cannot be resolved) simply renders as text, so nothing ever looks broken.
