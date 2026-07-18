---
layout: docs
title: Product options (no variations)
description: Give any simple product choices like colour, size or weight without creating WooCommerce variations. Define a set once, attach it anywhere, charge extra per choice where you want to.
permalink: /docs/product-options/
lede: Colours, sizes, weights, finishes. Define the choices once, attach them to any simple product, and sell without building a single variation.
---

<div class="callout pro"><span class="callout-label">Pro feature</span><p>Product options are part of the Builder. A product with no sets attached behaves exactly as before.</p></div>

## What it is

Option sets let a simple product offer choices the way a variable product does, without the variable product. You define a list once, "Garment colours" or "Sizes S to 4XL" or "Bag weight", attach it to any product, and shoppers pick from tidy buttons on the page. Colours render as swatch dots, everything else as pills, and a choice can carry its own extra charge.

<figure>
  <img src="/docs/img/product-options-storefront.png" alt="A simple product with colour swatches and size pills, the bigger sizes showing an extra charge">
  <figcaption>One simple product: twelve colours, seven sizes, the big sizes charging &pound;2 more. No variations exist behind it.</figcaption>
</figure>

The point is what does not happen: WooCommerce never generates variation products. Twelve colours and seven sizes as variations would mean 84 records to price, stock and maintain, for one hoodie. As option sets it is one product, one price, one stock line.

## Create a set

Go to **Bundles &rarr; Option sets**. A set is a name and a list of options; each option has a label, an optional swatch colour, and an optional price bump. Drag to reorder, and the options appear in exactly that order everywhere.

There is a shelf of ready-made starters (garment colours, clothing sizes, UK shoe sizes, paper sizes and more), and one click imports a copy you own and can edit freely.

<figure>
  <img src="/docs/img/product-options-sets.png" alt="The Option sets page: saved sets shown as cards with their swatches and chips">
  <figcaption>Sets live in one place. Edit a set and every product using it follows.</figcaption>
</figure>

## Attach it to a product

On a simple product's edit screen, open the **Options** tab and attach the sets it should offer. Per set you choose whether an answer is **Required**, and you can override any option's extra charge for this product alone; leave a box blank to use the set's default.

<figure>
  <img src="/docs/img/product-options-attach.png" alt="The Options tab on a simple product with two attached sets and per-option charge overrides">
  <figcaption>Attach sets, mark them required, and override charges per product where one product's large costs more.</figcaption>
</figure>

Variable products ignore option sets on purpose: variations already do that job there, and the two systems coexist happily in one store.

## Inside bundles

Every bundle that includes the product inherits its options automatically. In a stacked bundle each unit carries its own choices, so three hoodies in a pack can each be a different colour and size, and a build-a-box card offers the choices before the item goes in the box.

<figure>
  <img src="/docs/img/product-options-bundle.png" alt="A three-hoodie bundle where each unit has its own colour swatches and size pills">
  <figcaption>A fixed-price pack of three: every unit picks its own colour and size.</figcaption>
</figure>

On a choice slot you will see **Options customers can pick** listing every set the pool offers. All options are offered unless you narrow them there, and switching a set off hides it in that bundle only; the set itself and other bundles are untouched.

## Charges

A charged option shows its price right on the chip, and the charge lands in the total, the cart line, the order and the confirmation email. Charges resolve on the server from your saved sets, never from anything the browser sends, and the cart keeps a snapshot of the picked labels and charges from the moment of adding, so editing a set later never changes an order already in flight.

## Options or variations?

Use **options** for choices that share the product's stock: a colour, a size, a finish, where you do not track each version separately. Use **variations** when each version needs its own stock line, SKU or photo set. They live side by side, and bundles handle both.

## Moving sets between stores

**Export all sets** downloads every set as one file, and importing it on another store recreates them with their identity intact, so any product already attached to them lines up. Handy for staging sites and agency work; it pairs with the wider [import and export](/docs/import-export/) tools.
