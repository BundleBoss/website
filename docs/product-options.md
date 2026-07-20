---
layout: docs
title: Product options (no variations)
description: Give any simple product choices like colour and size, or sell it by measured size, without creating WooCommerce variations. Define a set once, attach it anywhere, and charge per choice where you want to.
permalink: /docs/product-options/
lede: Colours, sizes, finishes, or cut-to-size by the metre. Define the choices once, attach them to any simple product, and sell without building a single variation.
---

<div class="callout pro"><span class="callout-label">Pro feature</span><p>Product options are part of the Builder. A product with no sets attached behaves exactly as before.</p></div>

## The idea

A shop with twelve colours and seven sizes faces 84 WooCommerce variations for one hoodie: generate them, price them, keep them straight, wait while the admin loads. Option sets are the way out. You define a list once, attach it to a **simple** product, and shoppers pick from the same swatch chips and size pills a variable product would show. No variations are created, so there is nothing to generate or scroll through: one product, one stock line.

<figure>
  <img src="/docs/img/product-options-storefront.png" alt="A simple product with colour swatches and size pills, each size showing its own price">
  <figcaption>One simple product, twelve colours and seven sizes. No variations exist behind it.</figcaption>
</figure>

<div class="callout note"><span class="callout-label">Options or variations?</span><p>Both live side by side. Reach for option sets when the choice does not need its own stock or SKU (most colour and size runs). Keep real variations when each combination must track its own stock. You can mix the two in one bundle.</p></div>

## Two kinds of set

When you create a set, the first thing you pick is what kind it is:

- **A list of choices.** Named options, each with its own price: colours, finishes, or set sizes like Small, Medium, Large. The shopper picks one.
- **A measured size.** Priced by dimensions and a rate, for anything sold by the metre or the square metre: cut-to-size banners, fabric, rope, worktops. The shopper types a size, or picks a ready-made one.

Most shops only ever need the first. The rest of this guide covers both.

## Create a set

<ol class="steps">
<li>Go to <strong>BundleBoss &rarr; Option sets</strong> and click <strong>New set</strong>, or start from a ready-made one (garment colours, sizes S to 4XL, UK shoe sizes, paper and board sizes, bag weights). A ready-made set imports as your own copy, free to rename, prune or reorder.</li>
<li>Leave <strong>This set is</strong> on <em>a list of choices</em>. Add your options. Each has a name and, for colours, a swatch. Leave the swatch blank and BundleBoss fills it in from the name for common colours, the same way <a href="/docs/swatches/">swatches</a> work everywhere else.</li>
<li>Give any option a price where it costs more, say <strong>+2.00</strong> for 4XL. Blank means the same as the rest.</li>
</ol>

Sets live in one place, so editing one later updates every product that uses it. A bundle already in a shopper's cart keeps the names and prices it was built with.

<figure>
  <img src="/docs/img/product-options-sets.png" alt="The Option sets page: saved sets shown as cards with their swatches and pills, ready-made sets below">
  <figcaption>The set library, with the ready-made sets below.</figcaption>
</figure>

## Attach it to a product

On a **simple** product's edit screen, open the **Product options** tab:

<ol class="steps">
<li>Choose a set and attach it. Attach as many as the product needs, a colour set and a size set for a shirt.</li>
<li>Mark a set <strong>Required</strong> if the shopper must choose (a size), or leave it optional.</li>
<li>Override any option's price where this product differs from the set, say 4XL is +4.00 on a heavy hoodie but +2.00 on a tee. Blank uses the set's own price.</li>
</ol>

That is all the product needs: it now offers the choices on its own page, and every bundle that includes it inherits them.

<div class="callout warn"><span class="callout-label">Give the product a price</span><p>A product with no price is not purchasable in WooCommerce, so its Add to cart area, and the options with it, never show. Set a price on the General tab and they appear. Zero is a valid price: use it when the options are meant to be the whole price. The Product options tab reminds you if the price is blank.</p></div>

<figure>
  <img src="/docs/img/product-options-attach.png" alt="The Product options tab on a simple product with two attached sets and per-option price overrides">
  <figcaption>Attach sets on the product once. Its page and every bundle do the rest.</figcaption>
</figure>

## How the price shows

Each choice states its own price right on its chip, so a shopper reads "4XL is £26", never a surcharge aimed at them. Sizes that cost the same all show the same price, so no single choice is singled out; a set that is all one price (your colours) shows no prices at all. The running total updates with every pick, and the picked options land on the cart line, the order, the confirmation email and the <a href="/docs/stock-fulfilment/">warehouse pick list</a>, named the way the shopper chose them ("Navy / 4XL").

The price a shopper sees is the **product's price plus the choices**. So set the product's price to your cheapest, everyday version and let the dearer choices add from there. Charges resolve on the server from your saved sets, never from anything the browser sends, and every figure follows your shop's tax display setting.

On a **fixed-price** bundle you decide what charges do, with one setting on the Bundle Pricing tab, **Option extra charges**: keep the total steady whatever the customer picks, or add a dearer option on top like a surcharge.

## Give your options a photo

An option can carry its own photo, so a colour chip shows the garment in that colour, and picking it swaps the product's main image the way a variation would. You do not have to set them one by one. **Suggest photos**, on the Product options tab, reads the product's gallery and your media library, matches an image to each option by file name, and even recognises the colour codes suppliers put in file names (a photo called RX500-BLK-FRONT lands on your Black option). It shows every proposed match with its reason, and nothing changes until you apply and save.

## Sell by measured size

Choose **a measured size** for the set kind when the price follows a measurement rather than a fixed list.

<ol class="steps">
<li>Under <strong>Dimensions</strong>, name each measurement the customer gives you. One row prices by length (per metre), two by area (per square metre), three by volume. So a cut-to-size banner uses two rows, Width and Height.</li>
<li>Pick each row's <strong>unit</strong> (mm, cm, m, or a weight or volume unit). <strong>Smallest</strong>, <strong>Largest</strong> and <strong>Steps</strong> are optional limits: Steps of 10 keeps sizes to sensible multiples of 10.</li>
<li>Set the <strong>rate</strong> under Price. Its unit follows your dimensions, so two dimensions price per square metre. A <strong>minimum charge</strong> is a floor for small sizes, not an amount added on top.</li>
</ol>

The **live example** shows what a sample size costs as you type, so you can sanity-check the rate before saving. That one rate prices every size, whether the customer types their own or taps a **ready-made size** you have set up. Ready-made sizes are shortcuts, priced by the same rate unless you give one its own price. To offer only ready-made sizes and no free typing, untick "Let customers enter their own size" under Advanced.

<figure>
  <img src="/docs/img/product-options-measured.png" alt="The measured-size editor: dimensions with column headers, a rate priced per square metre, a live worked example, and ready-made sizes">
  <figcaption>A cut-to-size set: width and height, a rate per square metre, and a live worked example.</figcaption>
</figure>

## Show one set only when another is chosen

A set can stay hidden until an earlier set has a certain value, so the page reveals depth only as the shopper asks for it. Set the reveal on the later set: it shows a "when" condition naming the set and value that unlock it (say a **Backing** set that appears only once **Material** is Canvas). A hidden set is inert, so nothing it holds is ever charged or required until it is on screen.

## Collect artwork on the product

A product can take a file upload on its own page, next to the options, for a logo or a print-ready design. Set it up on the **Product options** tab: a label, the allowed file types and a size limit, and an optional template for the customer to download and fill in. The file rides through to the order and the pick list with the rest of the choices. This is the same upload the <a href="/docs/personalisation/">personalisation</a> fields offer inside a bundle, here on a plain product page.

## On variable products

A variable product already has variations owning colour, size, stock and photos, so option sets ride along as **extras on top**, priced per pick, rather than replacing that. Attach them the same way, on the Product options tab. The variation is chosen first; the option prices then add to it.

## Attach to a whole category

To put the same set on many products at once, open a set on the **Option sets** page and use **Attach to products**: pick a category and BundleBoss attaches the set to every simple product in it, skipping any that already offer it. Handy for rolling a colour or size set across a whole range in one go.

## Inside bundles

In a stacked bundle each unit carries its own choices, so three hoodies in a pack can each be a different colour and size, and a build-a-box card offers the choices before the item goes in the box. Because an optioned product behaves like a variable one, the unit <a href="/docs/layouts/">layouts</a> you already know all work with it, including the <a href="/docs/quantity-grid/">quantity grid</a> for a size run typed straight in.

<figure>
  <img src="/docs/img/product-options-bundle.png" alt="A three-hoodie bundle where each unit has its own colour swatches and size pills">
  <figcaption>A fixed-price pack of three: every unit picks its own colour and size.</figcaption>
</figure>

To narrow what one bundle offers, open the bundle item's **Options customers can pick**: offer a subset ("summer range" shows three colours of the twelve), or switch a set off in that bundle only. The narrowing applies to what the shopper sees and to what the server accepts, so a hidden option can never be slipped in.

## Move sets between stores

Sets live on the store, not on a single product, so a bundle export does not carry them on its own. On the **Option sets** page, **Export all sets** downloads the library as one file, and **Import sets** on another store recreates them with their identity intact, so any product already attached lines up. Handy for staging sites and agency work; it pairs with the wider <a href="/docs/import-export/">import and export</a> tools.

<div class="callout tip"><span class="callout-label">Tip</span><p>Coming from an add-ons plugin? Option sets give the same "options on a simple product" without the variation pile, and the picks carry through to a proper pick list.</p></div>
