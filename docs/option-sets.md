---
layout: docs
title: Product options without variations
description: Attach reusable colour, size or any option lists to simple products. Shoppers pick per unit like variations, but you never generate or manage a single variation.
permalink: /docs/option-sets/
lede: Give a simple product colours, sizes or any options, and let shoppers pick them in a bundle, the same chips and swatches as variations, with none of the variation admin.
---

<div class="callout note"><span class="callout-label">Under development</span><p>This feature is in final testing and is not in the released plugin yet. This page previews how it will work so you can tell us if it fits your store. Want it sooner, or need it to do something specific? Email <a href="mailto:support@getbundleboss.com">support@getbundleboss.com</a>.</p></div>

## The idea

A shop with twenty colours and ten sizes faces two hundred WooCommerce variations for one shirt: generate them, price them, keep them in stock, wait while the admin loads. Plenty of shops give up and use an add-ons plugin instead, which drops the neat per-option picker and the clean pick list.

Option sets are the middle path. You define a list once (say your twelve garment colours), attach it to a **simple** product, and every bundle that includes the product lets shoppers pick from it, unit by unit, with the same swatch chips and size pills a variable product would show. No variations are ever created, so there is nothing to generate, price row by row, or scroll through.

<figure>
  <img src="/docs/img/option-sets-storefront.png" alt="A bundle unit with colour swatch chips and size pills, driven by option sets on a simple product">
  <figcaption>The shopper sees colour swatches and size pills, exactly like a variable product. Behind them is a plain simple product with two option sets attached.</figcaption>
</figure>

<div class="callout note"><span class="callout-label">Option sets or variations?</span><p>Both live side by side. Reach for option sets when the choice does not need its own stock or SKU (most colour and size runs). Keep real variations when each combination must track its own stock. You can mix the two in one bundle.</p></div>

## Create an option set

<ol class="steps">
<li>Go to <strong>BundleBoss &rarr; Option sets</strong> and click <strong>New set</strong>, or import a ready-made one (garment colours, sizes S to 4XL, UK shoe sizes, paper and board sizes, bag weights). A ready-made set imports as your own copy, free to rename, prune or reorder.</li>
<li>Add your options. Each has a label and, for colours, a swatch. Leave the swatch blank and BundleBoss fills it in from the name for around ninety-five common colours, the same way <a href="/docs/swatches/">swatches</a> work everywhere else.</li>
<li>Give any option a price bump if it costs more, say <strong>+2.00</strong> for 4XL. Blank means no change.</li>
</ol>

The set is now yours to attach to any product. Editing it later updates every product that uses it, and any bundle already in a shopper's cart keeps the price and label it was built with.

## Attach it to a product

On a **simple** product's edit screen, open the **Options** tab (it carries the BundleBoss mark).

<ol class="steps">
<li>Choose a set and click <strong>Attach set</strong>. Attach as many as the product needs, a colour set and a size set for a shirt.</li>
<li>Tick <strong>Required</strong> if the shopper must choose (a size), or leave it optional (a gift note colour).</li>
<li>Set <strong>price bump overrides</strong> if this product charges differently from the set default, say 4XL is +4.00 on a heavy hoodie but +2.00 on a tee.</li>
</ol>

That is all the product needs. Every bundle that includes it inherits the sets automatically. There is nothing to configure again per bundle.

<figure>
  <img src="/docs/img/option-sets-product-tab.png" alt="The product Options tab: attached sets shown as cards with swatch chips and price bump fields">
  <figcaption>Attach sets on the product once. The bundles do the rest.</figcaption>
</figure>

## How the price works

An option's price bump joins the unit price before any bundle pricing, so a percentage discount, a quantity tier, a fixed price or a Buy X Get Y all treat it exactly like a variation's own price. The cart and the order name the combination the shopper picked ("Navy / 4XL") and show the price they paid, and the [warehouse pick list](/docs/stock-fulfilment/) does the same.

For a **fixed-price** bundle you choose what bumps do: **included in the price** so the total never moves whatever the shopper picks, or **charged on top** so a dearer size adds a surcharge, like gift wrap. One setting on the Pricing tab.

## Narrow the options in one bundle

Sets attach on the product, but a single bundle can offer less. In the bundle's item row, under **Offer in this bundle**, tick only the options that bundle sells, or switch a set off entirely. A "summer range" bundle can show three colours from the same twelve-colour set while the main product keeps all twelve. The narrowing applies to what the shopper sees and to what the server accepts, so a hidden option can never be slipped in.

## Show them as chips, a dropdown, cards, a table or a grid

Because an optioned product behaves like a variable one, every unit layout works with it: the [layouts](/docs/layouts/) you already know, the compact cards, the table, and the [quantity grid](/docs/quantity-grid/) for a size run typed straight in. Pick the layout in the bundle's Display options, the same as any variable item.

## Move your sets to another store

Option sets live on the store, not on a single product, so a bundle export does not carry them on its own. On the **Option sets** page, **Export all sets** downloads the whole library as one file, and **Import sets** on another store recreates them, ids intact, so any product already attached lines up. Handy when you run a staging site, or move a catalogue between shops.

## What it does not do

An optioned simple product has **one stock pool**, the product's own, not a count per colour or size (that is what real variations are for). If you need to know you have exactly seven Navy 4XL left, use a variation for that item. For the common case, where a colour or size does not track its own stock, option sets are the faster, tidier way.

<div class="callout tip"><span class="callout-label">Tip</span><p>Coming from an add-ons plugin like Product Add-Ons Ultimate or Extra Product Options? Option sets give the same "options on a simple product" without the two hundred variations, and they carry through to a proper pick list. <a href="/docs/import-export/">Import and export</a> helps you move the setup over.</p></div>
