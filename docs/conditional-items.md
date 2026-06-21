---
layout: docs
title: Conditional items (show / hide)
description: Show or hide a whole bundle item based on what the customer chose elsewhere. Reveal a matching-socks slot once a shoe is picked, or hide an add-on unless the premium option is chosen.
permalink: /docs/conditional-items/
lede: Reveal or hide a whole item based on an earlier choice. Show the matching-socks slot once a shoe is picked; hide an extra unless the premium option is chosen.
---


## What it is

Conditional items let a choice in one slot reveal or hide a **whole** item somewhere else in the bundle. Choose a running shoe and a matching-socks slot appears. Pick the standard model and the engraving add-on stays out of the way. The customer only ever sees the parts that make sense for what they have chosen so far.

It is part of the same rules engine as [compatibility and quantity rules](/docs/rules/): the trigger is a tag, category or attribute already on your products, so there is nothing new to tag up.

## Turn it on

In the bundle's **Rules** section, add a rule and read it as a sentence:

- The **If** side is a choice slot and a tag, category or attribute, the same as any rule: "If Footwear has the tag needs-socks".
- Set the action to **is shown** or **is hidden**.
- The **Then** side is the item to control. For show/hide it can be **any** item in the bundle, not only a choice slot: a fixed item, another slot, a box or a grid.

So "If Footwear has needs-socks, then Matching socks is shown" keeps the socks slot hidden until a shoe that takes socks is chosen.

## What the customer sees

The controlled item appears or disappears live as the customer makes their choices. There is no reload and no flicker of an empty field:

- A **shown** item stays hidden until its trigger is met, then slides into the build.
- A **hidden** item is there by default and tucks away when the trigger fires.
- While an item is hidden it is left out of the running total, and it is not required, so the customer can always reach Add to Cart.

## Good to know

- A hidden item is simply not part of the build while hidden, so a hidden item never blocks checkout, even if it would otherwise be required.
- Show and hide rules live alongside your compatibility and quantity rules in the one Rules section, so there is a single place to reason about how the bundle behaves.
- If several rules point at the same item, a hide that fires wins over a show.
