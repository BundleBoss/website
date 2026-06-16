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

On a bundle item, open the **Personalisation** panel and click **+ Add a field**:

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

<div class="callout tip"><span class="callout-label">Best layout for it</span><p>Use the <a href="/docs/layouts/">Compact cards</a> display for personalised multi-unit items: each unit gets its own tidy card with room for its fields. Per-unit personalisation and the <a href="/docs/quantity-grid/">quantity grid</a> are mutually exclusive (the grid has no addressable units to name), but a single shared logo sits happily alongside a grid order.</p></div>
