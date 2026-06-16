---
layout: docs
title: Quantity grid (size runs)
description: Let customers buy a bulk run split across variations, like five small and five large, by typing into one grid instead of configuring each unit.
permalink: /docs/quantity-grid/
lede: For bulk orders split across sizes and colours: tap a colour, type how many of each size. One grid instead of ten unit rows.
---

<div class="callout pro"><span class="callout-label">Pro feature</span><p>The Quantity grid is a Pro display option for a multi-quantity variable item. The free plugin can buy a bulk run of identical items with "All the same"; the grid is for a run that is <em>mixed</em> across variations.</p></div>

## The problem it solves

Someone ordering ten team shirts rarely wants ten identical ones. They want a size run: a few small, a few medium, a couple of large, maybe across two colours. Configuring ten separate unit rows for that is slow. The quantity grid lets them **type the quantities straight into a grid**.

<figure>
  <img src="/docs/img/quantity-grid-storefront.png" alt="A quantity grid: colour tiles with size quantities expanded below one tile">
  <figcaption>Tap a colour tile and its sizes expand inline. Type how many of each; the count and total update live.</figcaption>
</figure>

## Turn it on

On the **Bundle Items** tab, set **Multiple items** to **Quantity grid** for the variable item. A second setting, **Colour tiles**, decides how each colour looks:

| Tile style | Shows |
|---|---|
| Swatches | a colour dot only |
| Swatches and names (default) | a colour dot with its name |
| Names | the colour name only |
| Photos | the colour's variation photo |

Swatch colours come from your [swatch settings](/docs/swatches/), or are filled in from the colour name, so even a custom attribute shows real dots.

<figure>
  <img src="/docs/img/quantity-grid-setting.png" alt="The Multiple items setting set to Quantity grid with a Colour tiles dropdown">
  <figcaption>Set Multiple items to Quantity grid, then pick how the colour tiles look.</figcaption>
</figure>

## How customers use it

- The first attribute (usually colour) shows as **tiles**. Tapping one expands its sizes inline, with a count badge on the tile.
- They **type a quantity** into each size they want. A live "N of M chosen" and a running subtotal keep the target clear, and each cell shows its own stock.
- The grid **auto-shapes** to the product: many colours become tiles; a single-attribute item becomes a flat row of cells.
- On a phone it **reflows to a stacked list**, so there is never a sideways scroll.

In the cart the run breaks into clear lines (Navy / M times 3, Red / L times 2), and the [pick list](/docs/cart-checkout-orders/) lists each variation with its quantity for the warehouse.

## When to use it

- **Workwear and team kit:** the classic "ten shirts across these sizes" order.
- **Any size run** a customer buys in bulk but split across variations.

It pairs with a [choice slot](/docs/choice-slots/) too: let the customer choose the garment, then order a size run of it.

<div class="callout tip"><span class="callout-label">Grid or personalisation?</span><p>The grid is for quantity at speed. If each unit needs its own name or number, use <a href="/docs/personalisation/">personalisation</a> with the Compact cards layout instead, where every unit has its own fields. A single shared logo across the whole run still works alongside the grid.</p></div>
