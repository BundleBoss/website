---
layout: docs
title: Build a box (mix and match)
description: Let customers fill a box with several different products from a pool you define, each with a quantity, up to a set total. Pick any 6, build your own 6-pack, choose any 4, or a pick-and-mix bucket priced by pack size (1.7kg, 3kg, 4kg).
permalink: /docs/build-a-box/
lede: Pick any 6 chocolates, build your own 6-pack, choose any 4 sauces, or a 3kg pick-and-mix bucket. The customer fills a box to a size you set, or picks a pack size then fills it.
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
- Choose the **products** the box can be filled from, the same way you build any choice slot's pool: hand-pick products, pull in a whole **category**, or both. A category pool **keeps itself current**: add a product to that category later and customers can pick it from the box automatically, with no edit to the bundle.

## Sizes and pack options

Instead of one fixed box size, you can offer **set sizes or packs**, each a **flat price for an exact number of items**: a 1.7kg bucket that holds 10, a 3kg bucket that holds 20, a 4kg bucket that holds 30. The customer picks a size first, then fills it.

Add them on the choice slot under **Sizes / pack options**, giving each a label, a price and the number of items it holds. The storefront shows the sizes as tappable tiles with the **best value** size badged automatically, then the fill grid below.

When sizes set the price they take over: per-item prices, quantity breaks and the slot discount no longer apply, because each size is one flat price. Leave sizes empty for ordinary per-item pricing (with optional quantity breaks, below).

Sizes suit **pick-and-mix buckets, hampers, coffee bags, chocolate boxes and meat boxes**: anything "pick a pack, then fill it". Set them up fastest in the [creation wizard](/docs/wizard/): choose Build-your-own box, then **Different sizes**.

## What the customer sees

The pool shows as a grid of product cards, each with a quantity stepper. As they add items:

- A **"3 of 6 added"** meter and a progress bar fill up.
- The **live total** updates with every pick.
- **Add to cart stays disabled** until the box total is in range, so a half-filled box cannot be bought by mistake.

Every pick shows in the cart and on the order, and on the warehouse pick list, like any other bundle.

### Products with options

If a product in the pool has options (a t-shirt in several colours and sizes, say), its card shows a **Choose an option** dropdown. The customer picks the colour and size they want, then sets the quantity, all on the same card. The card waits for an option before it counts towards the box, so a half-chosen pick cannot slip through.

Each product is chosen one option at a time on its card. To offer the **same** product in several options at once (five small, five medium, five large of one shirt), use the [quantity grid](/docs/quantity-grid/) instead.

This makes a box ideal for a **build your own kit**: pick a tee, a hoodie and a cap, each in its own colour and size, up to the kit size you set. And when the choice is noise rather than the point, take it off the customer's plate with a **Default size**, below.

## One size for the whole box

Sometimes the option dropdowns are the point (a kit in your colour and size). And sometimes they are in the way: a sweet shop selling 100g bags does not want every card opening a size chooser.

**Default size** appears on the slot as soon as its pool holds a product with options, and decides what fills the box:

- **Customer picks**: every card keeps its dropdown, exactly as before.
- **Smallest of each** or **Largest of each**: every product goes in at its own smallest or largest option.
- **A specific size**: name the size, say 100g, and every product is offered at that size only. A product that does not come in that size uses its own smallest instead, so nothing drops out of the pool.

When the rule leaves a product exactly one option there is nothing left to choose, so its card drops the dropdown entirely and becomes tap to add.

**Size overrides** handle the exception. The pool follows the default size while a product you name uses its own: everything at 100g, one bag at 125g. The picker offers exactly the pool's products, category pools included, so an override can never point at something outside the box.

Two behaviours worth knowing. A set size that is **sold out** shows its product as sold out rather than quietly offering a different size at a different price. And a pool whose products carry **several option types** (a weight and a flavour, say) takes **one rule per option type**: pin each type to a value, or leave a type open for the customer to choose. Per-product overrides carry the same per-type values, so one product can differ on just one type while following the rest.

The wizard's Build-your-own box step carries the same controls: a Default size choice, a size pick on each product chip, and the Item prices switch below.

## Item prices

Every box slot has an **Item prices** switch. **Hide** removes the small price under each product card and keeps per-line prices out of the "What's inside" readback in the order panel, for a cleaner "just pick what you like" box. The box total and the From price still show, so the customer always sees exactly what they will pay.

## Pricing

A box uses the bundle's normal pricing. With percentage or set-amount pricing it costs the sum of what was picked (with any bundle discount). For a flat "any 6 for &pound;20" deal, set the bundle to a fixed price: the box decides **what** is in it, the fixed price decides **how much**.

**Quantity breaks** reward bigger boxes: set tiers so the more the customer adds, the bigger the discount. The box sells the deal itself: the whole ladder is shown above the products ("3+ items: 10% off &middot; 6+ items: 15% off &middot; 10+ items: 20% off"), the nudge appears before the first pick ("add 3 more for 10% off"), and once a tier is reached the note shows the active discount alongside the next rung ("10% off &middot; add 3 more for 15% off"). These use the bundle's [quantity tiers](/docs/pricing/).

## Good to know

- The box pool can mix simple products and products with options (variations). Each product with options is chosen one option at a time on its card.
- A box and the [quantity grid](/docs/quantity-grid/) are two different selection styles; a slot uses one or the other.
