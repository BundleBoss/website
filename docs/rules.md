---
layout: docs
title: Compatibility & quantity rules
description: Make one choice slot control another using the tags, categories and attributes already on your products. Enforced on the server.
permalink: /docs/rules/
lede: Rules keep every build valid: only offer the parts that fit what the customer already chose.
---

<div class="callout pro"><span class="callout-label">Pro feature</span><p>Rules work on [choice slots](/docs/choice-slots/) and are part of the Builder.</p></div>

## What rules do

A rule makes one slot's choice control what another slot may offer, using the **tags, categories or attributes already on your products**. Nothing new to model: tag your products once and the rules maintain themselves, so a new product with the right tags obeys existing rules automatically.

Rules read like a sentence:

> **If** [Processor] has [Tag: amd] **then** [Motherboard] **must have** [Tag: amd]

<figure>
  <img src="/docs/img/rules-admin.png" alt="A compatibility rule built from product tags in the admin">
  <figcaption>Rules are built from the tags, categories and attributes your products already carry.</figcaption>
</figure>

## Compatibility rules

Each rule sets what the target slot's options need:

- **must have** / **must not have** a given tag, category or attribute value.
- **Hide incompatible:** options that do not fit disappear, and are blocked on the server too.
- **Warn only:** they stay selectable but carry a warning badge.

When the customer changes the controlling choice, the affected slots refresh, and a chosen product that no longer fits is cleared with a short explanation.

## Quantity rules

The same rule cards can cap a quantity instead of filtering options:

> **If** [Motherboard] has [Tag: 2-dimm] **then** [Memory] **can have at most** [2]

Quantity rules are **always enforced** (there is no warn mode for a physical limit), they only ever **tighten**, and a slot's own Min always wins, so a misconfigured rule can never make a bundle unbuyable. On the storefront the stepper clamps live with a note like "Limited to 2 by your Motherboard choice", and lifts again if the controlling choice changes.

## Setting rules up

<ol class="steps">
<li>Tag your products so the relationships exist (for example tag processors and boards <code>amd</code> or <code>intel</code>).</li>
<li><strong>Save the bundle</strong> so its choice slots exist to connect.</li>
<li>Add a rule per relationship: a Hide rule each way for platform fit, a quantity rule for a physical cap.</li>
</ol>

<div class="callout"><p>Server enforcement is the authority. Whatever a customer's browser does, an add-to-cart that breaks a rule is refused, so an invalid build can never reach checkout.</p></div>

## A worked example: PC builder

- One choice slot per component: Processor, Motherboard, Memory, and so on.
- Tag by platform, then two Hide rules: <em>if Processor has amd, Motherboard must have amd</em>, and the same for intel.
- A physical cap as a quantity rule: <em>if Motherboard has 2-dimm, Memory can have at most 2</em>.

The seeded **Custom PC Builder** demo is set up exactly this way, including a warn-mode example, so you can copy it.
