---
layout: docs
title: Build a box (mix and match)
description: Let customers fill a box with several different products from a pool you define, each with a quantity, up to a set total. Pick any 6, build your own 6-pack, choose any 4.
permalink: /docs/build-a-box/
lede: Pick any 6 chocolates, build your own 6-pack, choose any 4 sauces. The customer fills a box to a total you set.
---


## What it is

Build a box lets a customer fill a box with several **different** products from a pool you choose, each with its own quantity, where the total has to hit a size you set. It is the classic mix and match: pick any 6 chocolates, build your own 6-pack, choose any 4 sauces, fill a hamper.

It is the pick-many companion to [choice slots](/docs/choice-slots/), which are pick-one. Both are part of the Builder (Pro).

## Turn it on

A box is a choice slot in box mode. Add a choice slot to your bundle, then:

- Set **How many can they choose?** to **Build a box**.
- The **Min** and **Max** become the **box size** (the total number of items). For "pick any 6" set both to 6; for a range set, say, Min 4 and Max 8.
- Optionally set **Max per product**, the most a customer can take of any one item (for example up to 3 of each). Leave it at 0 for no per-product limit.
- Optionally set **Max different products**, the most *distinct* items a box can hold (for "pick any 6, up to 3 flavours"). Leave it at 0 for no limit.
- Choose the **products** the box can be filled from, the same way you build any choice slot's pool: hand-pick products and, or, pull in a whole category.

## What the customer sees

The pool shows as a grid of product cards, each with a quantity stepper. As they add items:

- A **"3 of 6 added"** meter and a progress bar fill up.
- The **live total** updates with every pick.
- **Add to cart stays disabled** until the box total is in range, so a half-filled box cannot be bought by mistake.

Every pick shows in the cart and on the order, and on the warehouse pick list, like any other bundle.

### Products with options

If a product in the pool has options (a t-shirt in several colours and sizes, say), its card shows a **Choose an option** dropdown. The customer picks the colour and size they want, then sets the quantity, all on the same card. The card waits for an option before it counts towards the box, so a half-chosen pick cannot slip through.

Each product is chosen one option at a time on its card. To offer the **same** product in several options at once (five small, five medium, five large of one shirt), use the [quantity grid](/docs/quantity-grid/) instead.

This makes a box ideal for a **build your own kit**: pick a tee, a hoodie and a cap, each in its own colour and size, up to the kit size you set.

## Pricing

A box uses the bundle's normal pricing. With percentage or set-amount pricing it costs the sum of what was picked (with any bundle discount). For a flat "any 6 for &pound;20" deal, set the bundle to a fixed price: the box decides **what** is in it, the fixed price decides **how much**.

**Quantity breaks** reward bigger boxes: set tiers so the more the customer adds, the bigger the discount, with a live "add 1 more for 10% off" nudge as they near the next tier. These use the bundle's [quantity tiers](/docs/pricing/).

## Good to know

- The box pool can mix simple products and products with options (variations). Each product with options is chosen one option at a time on its card.
- A box and the [quantity grid](/docs/quantity-grid/) are two different selection styles; a slot uses one or the other.
