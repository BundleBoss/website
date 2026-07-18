---
layout: docs
title: Product options (no variations)
description: Give any simple product choices like colour, size or weight without creating WooCommerce variations. Define a set once, attach it anywhere, charge extra per choice where you want to.
permalink: /docs/product-options/
lede: Colours, sizes, weights, finishes. Define the choices once, attach them to any simple product, and sell without building a single variation.
---

<div class="callout pro"><span class="callout-label">Pro feature</span><p>Product options are part of the Builder. A product with no sets attached behaves exactly as before.</p></div>

## The idea

A shop with twelve colours and seven sizes faces 84 WooCommerce variations for one hoodie: generate them, price them, keep them straight, wait while the admin loads. Option sets are the way out. You define a list once, attach it to a **simple** product, and shoppers pick from the same swatch chips and size pills a variable product would show. No variations are ever created, so there is nothing to generate or scroll through: one product, one price, one stock line.

<figure>
  <img src="/docs/img/product-options-storefront.png" alt="A simple product with colour swatches and size pills, the bigger sizes showing an extra charge">
  <figcaption>One simple product: twelve colours, seven sizes, the big sizes charging &pound;2 more. No variations exist behind it.</figcaption>
</figure>

<div class="callout note"><span class="callout-label">Options or variations?</span><p>Both live side by side. Reach for option sets when the choice does not need its own stock or SKU (most colour and size runs). Keep real variations when each combination must track its own stock. You can mix the two in one bundle.</p></div>

## Create a set

<ol class="steps">
<li>Go to <strong>Bundles &rarr; Option sets</strong> and click <strong>New set</strong>, or grab a ready-made starter (garment colours, sizes S to 4XL, UK shoe sizes, paper sizes, bag weights). A starter imports as your own copy, free to rename, prune or reorder.</li>
<li>Add your options. Each has a label and, for colours, a swatch. Leave the swatch blank and BundleBoss fills it in from the name for common colours, the same way <a href="/docs/swatches/">swatches</a> work everywhere else.</li>
<li>Give any option an extra charge if it costs more, say <strong>+2.00</strong> for 4XL. Blank means no change.</li>
</ol>

Sets live in one place, so editing one later updates every product that uses it. A bundle already in a shopper's cart keeps the labels and charges it was built with.

<figure>
  <img src="/docs/img/product-options-sets.png" alt="The Option sets page: saved sets shown as cards with their swatches and chips">
  <figcaption>The set library, with the ready-made starters below.</figcaption>
</figure>

## Attach it to a product

On a **simple** product's edit screen, open the **Options** tab:

<ol class="steps">
<li>Choose a set and click <strong>Attach set</strong>. Attach as many as the product needs, a colour set and a size set for a shirt.</li>
<li>Tick <strong>Required</strong> if the shopper must choose (a size), or leave it optional.</li>
<li>Override any option's extra charge where this product differs from the set default, say 4XL is +4.00 on a heavy hoodie but +2.00 on a tee. Blank uses the set's default.</li>
</ol>

That is all the product needs: it now offers the choices on its own page, and every bundle that includes it inherits them automatically. Variable products ignore option sets on purpose, because variations already do that job there.

<figure>
  <img src="/docs/img/product-options-attach.png" alt="The Options tab on a simple product with two attached sets and per-option charge overrides">
  <figcaption>Attach sets on the product once. Its page and every bundle do the rest.</figcaption>
</figure>

## Inside bundles

In a stacked bundle each unit carries its own choices, so three hoodies in a pack can each be a different colour and size, and a build-a-box card offers the choices before the item goes in the box. Because an optioned product behaves like a variable one, the unit <a href="/docs/layouts/">layouts</a> you already know all work with it, including the <a href="/docs/quantity-grid/">quantity grid</a> for a size run typed straight in.

<figure>
  <img src="/docs/img/product-options-bundle.png" alt="A three-hoodie bundle where each unit has its own colour swatches and size pills">
  <figcaption>A fixed-price pack of three: every unit picks its own colour and size.</figcaption>
</figure>

To narrow what one bundle offers, open the bundle item's **Options customers can pick**: offer a subset ("summer range" shows three colours of the twelve), or switch a set off in that bundle only. The narrowing applies to what the shopper sees and to what the server accepts, so a hidden option can never be slipped in.

## How charges work

A charged option shows its price right on the chip, joins the live total, and lands on the cart line, the order, the confirmation email and the <a href="/docs/stock-fulfilment/">warehouse pick list</a>, named the way the shopper picked it ("Navy / 4XL"). Percentage discounts, quantity tiers and Buy X Get Y treat an option's charge exactly like a variation's own price. Charges resolve on the server from your saved sets, never from anything the browser sends.

On a **fixed-price** bundle you choose what charges do, with one setting on the Bundle Pricing tab, **Option extra charges**: *Included in the bundle price* keeps the total steady whatever the customer picks, or *Charged on top* adds a dearer option's extra like a surcharge.

## Moving sets between stores

Sets live on the store, not on a single product, so a bundle export does not carry them on its own. On the **Option sets** page, **Export all sets** downloads the library as one file, and **Import sets** on another store recreates them with their identity intact, so any product already attached lines up. Handy for staging sites and agency work; it pairs with the wider <a href="/docs/import-export/">import and export</a> tools.

<div class="callout tip"><span class="callout-label">Tip</span><p>Coming from an add-ons plugin? Option sets give the same "options on a simple product" without the variation pile, and the picks carry through to a proper pick list.</p></div>
