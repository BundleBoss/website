---
layout: docs
title: Per-item personalisation
description: Let customers add names, messages, embroidery and logo uploads to bundle items, with optional charges, all the way through to the warehouse pick list.
permalink: /docs/personalisation/
lede: Names to print, a gift message, a position, a logo to upload. Add-on fields per item, each able to carry a charge.
---

<div class="callout pro"><span class="callout-label">Pro feature</span><p>Personalisation is part of the Builder. It is fully opt-in: a bundle with no add-on fields behaves exactly as before.</p></div>

## What it is

Personalisation lets customers fill in details for an item, with optional charges. It is built for team kit, workwear and promotional products: a name and number on each shirt, a logo across a set, a gift message in a hamper.

<figure>
  <img src="/docs/img/personalisation-admin.png" alt="The Personalisation panel on a bundle item with several add-on fields">
  <figcaption>Add-on fields on a bundle item: ready-made types or your own, each with an optional charge.</figcaption>
</figure>

## Add a field

On a bundle item, switch on the **Personalisation on this item** row, click **Edit fields**, then **+ Add a field**:

- Pick a ready-made field (**Name / text**, **Gift message**, **Dropdown of options**, **Tick box**, **Number**, **Section label**) or "Custom", and give it a label.
- **Dropdown** options are a plain list: type each option's label and an optional charge in the &pound; box. No codes.
- **Charge:** a flat amount "for each", "once", or "per letter"; dropdowns charge per option.
- **Required:** *Optional*, *Always*, or *If personalising* (required only once the customer starts filling the item in, so a position that only matters when there is a name is skipped, and not charged, when there is none).
- Drag the grip to reorder fields.

## Per unit or once per item

Each field is captured either **per unit** (a name on each shirt) or **once per item** (one logo for the whole set). You decide per field, so a team order can collect a different name for every shirt and a single shared crest.

## What customers see

Each unit gains a **"Personalise this item"** button. What the customer enters, and any charges, appear in the live total, the cart, the order, the confirmation email, and the warehouse **pick list**, so staff see exactly what goes on each item.

<figure>
  <img src="/docs/img/personalisation-storefront.png" alt="A customer entering personalisation details on a bundle unit">
  <figcaption>Entered details and their charges flow through to the order and the pick list.</figcaption>
</figure>

## Logo and file upload

For artwork, add a **File upload** field with a maximum size. Customers upload a JPG, PNG, GIF, WEBP or PDF while configuring, and the file shows as a download link on the order and the pick list. Set it to **"once for the set"** for one shared logo, or **"for each one"** if every item gets its own.

Uploaded files are personal data, so BundleBoss includes them in WordPress's privacy export and erase tools, and a daily job clears uploads from configurations that were never ordered.

## Whole-order personalisation

Some details belong to the order, not to any one item: a company logo that goes on everything, a delivery instruction, a setup charge. Switch on **Personalisation for the whole order** under **Bundle Promotions** and build its fields the same way; each is asked **once for the entire bundle**, and a fee there is charged once no matter how many items or copies the order holds.

The section carries your own title on the page ("Add your branding", or whatever fits your shop), and everything entered flows to the order and the pick list alongside the per-item details.

<figure>
  <img src="/docs/img/whole-order-admin.png" alt="The whole-order personalisation row on Bundle Promotions with its fields editor open">
  <figcaption>Whole-order fields live with the other bundle extras, asked once for the order.</figcaption>
</figure>

## On a simple product's own page

The same fields work directly on a **simple product**, with no bundle involved, for an engraving line, a monogram, a rush note or a logo to print. On the product's **Product options** tab, click **Add a field**:

- Choose a **name or text line**, a **message**, a **number**, a **tick box**, a **dropdown**, a **file or logo upload**, or a display-only **section label** or **info block**.
- Make each **optional** or **required**, and give it a **charge** where it costs more: **once**, **per letter**, or **per unit**. So an engraving line prices itself as the customer types, and a rush fee is added once.
- A field can **reveal itself on a choice**, "Available only when Gift wrap is Yes", the same rule the [option sets](/docs/product-options/) follow. A hidden field is inert: never charged, never required, until it applies.
- Drag fields and sets into a **group** to fold them into a tidy collapsible section.

Everything the customer fills in, and every charge, flows to the cart, the order, the confirmation email and the [pick list](/docs/stock-fulfilment/), exactly as it does inside a bundle. On a product set to the [quantity grid](/docs/quantity-grid/), the fields apply to the **whole order** and price across the quantity.

<div class="callout tip"><span class="callout-label">Best layout for it</span><p>Use the <a href="/docs/layouts/">Compact cards</a> display for personalised multi-unit items: each unit gets its own tidy card with room for its fields. Per-unit personalisation and the <a href="/docs/quantity-grid/">quantity grid</a> are mutually exclusive (the grid has no addressable units to name), but a single shared logo sits happily alongside a grid order.</p></div>
