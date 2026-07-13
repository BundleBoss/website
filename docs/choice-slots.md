---
layout: docs
title: Choice slots
description: Let customers pick each component of a bundle from a pool you define, with live pricing. The heart of the BundleBoss Builder.
permalink: /docs/choice-slots/
lede: A choice slot lets the customer pick the product, not just the colour. Think PC builder, gift hamper, ski package.
---

<div class="callout pro"><span class="callout-label">Pro feature</span><p>Choice slots are part of the Builder. The free plugin handles bundles where you choose the products; choice slots hand that choice to the customer.</p></div>

## What a choice slot is

A normal slot is a product you picked. A **choice slot** is a labelled slot ("Motherboard", "Pick a treat") with a **pool of candidate products**; the customer chooses one, then configures its quantity and variations exactly like any other item. Several choice slots together make a full configurator.

## Pick one, or pick several

Every choice slot has a mode:

- **Pick one** is the classic choice: the customer chooses a single product from the pool, then how many of it. A "Motherboard" slot is pick-one.
- **Build a box** turns the same slot into a "pick any N": the customer fills the slot with **several different products** from the pool, up to the count you set. Set Qty and Max to 6 and the slot reads "pick any 6"; a higher Max lets them choose how many. You can also cap how many *different* products they mix in ("up to 3 kinds") under More options.

In the [wizard](/docs/wizard/) this is the "one or several" question when you add a customer choice. A pick-several slot sits happily next to fixed items and pick-one slots in the same bundle, so "a hamper base, a cheese of your choice, and any 4 crackers" is one bundle with three kinds of row.

## Add a choice slot

<ol class="steps">
<li>On the <strong>Bundle Items</strong> tab click <strong>+ Add Choice Slot</strong> (the violet row).</li>
<li>Give it a <strong>slot name</strong> customers will see, like "Pick a treat".</li>
<li>Fill the <strong>pool</strong>: hand-pick products in the search box (names, IDs and SKUs all match), or pull in <strong>one or more categories</strong>, or both (they combine).</li>
<li>Optionally set a <strong>slot discount</strong>, a percentage off whichever product they choose.</li>
<li>Set <strong>Min</strong> and <strong>Max</strong> like any slot. Leave Max empty for "choose one or more" with no ceiling.</li>
<li>Optionally set a <strong>slot image</strong> (shown before a product is picked), or tick <strong>"Chosen product sets the main image"</strong> so the customer's pick takes over the page's main image.</li>
<li><strong>Save the product first.</strong> Rules can only connect slots once they have been saved.</li>
</ol>

<figure>
  <img src="/docs/img/choice-slot-admin.png" alt="A choice slot row in the admin with a pool of products and a slot discount">
  <figcaption>A choice slot: a label, a pool of candidate products (hand-picked and/or categories), and an optional slot discount.</figcaption>
</figure>

## A pool that maintains itself

A pool can be a hand-picked list, **one or more product categories**, or both together. A category pool is **live**: it always offers whatever is currently published in that category, so when you add a new product to the category later, it appears in the slot on its own, with no edit to the bundle. Point a "Pick a treat" slot at your *Treats* category once, and every treat you add from then on is offered automatically. Ideal for a rotating range or a large, changing catalogue.

<div class="callout tip">
<p>Hand-picked products and a category combine: the hand-picked ones show first, then the category fills in the rest. The server re-derives the pool on every submit, so a self-updating category never opens a hole in your validation.</p>
</div>

## What customers see

The slot shows **candidate cards** with each product's image, price and stock. Pools larger than eight get a search box, and long pools are paged. Choosing a product shows a green **chosen bar** with a **Change** button and drops the product's normal configuration UI (quantity, variations, swatches) straight in.

<figure>
  <img src="/docs/img/choice-slot-storefront.png" alt="Candidate product cards in a choice slot on the storefront">
  <figcaption>Candidate cards. Products on sale show their saving; featured products get a "Popular" ribbon.</figcaption>
</figure>

### Deal badges, for free

Candidates that are **on sale** show WooCommerce's strikethrough price and an exact "N% off" badge (or a plain "Sale" badge for variable products where the saving differs per variation). **Featured** products get a "Popular" ribbon. These read straight from the flags products already have, so there is nothing to configure.

### Hero slots

Tick **"Chosen product sets the main image"** and the customer's pick takes over the page's main product image, configurator-style. Great for a hero component like a PC case or a gift box. The latest hero choice wins, and clearing it puts the original image back.

## Pricing and validation

- A **slot discount** applies before bundle-level pricing and tiers. The live total and the server agree to the penny.
- The shop's **"From &pound;"** price uses the cheapest possible build.
- **Edit from cart** restores every chosen product, its configuration and any skipped optional slots.
- The server **re-derives the pool** on submit, so a build naming a product outside the pool is rejected whatever the browser sends.

## Going further

- [Compatibility &amp; quantity rules](/docs/rules/) make one slot's choice control another ("only boards that fit the chosen processor").
- [Shareable build links](/docs/share-links/) let a customer copy a finished build to a link anyone can open and buy.

<div class="callout tip"><span class="callout-label">Try the demo</span><p>The seeded <strong>Custom PC Builder</strong>, <strong>Ski Package</strong> and gift-box bundles are choice-slot examples to copy from.</p></div>
