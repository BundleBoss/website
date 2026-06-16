---
layout: docs
title: Shareable build links
description: Copy a finished bundle build to a link anyone can open and buy, with nothing stored on your server.
permalink: /docs/share-links/
lede: A finished build copies to a link anyone can open and buy. Nothing is stored on your server.
---

<div class="callout pro"><span class="callout-label">Pro feature</span><p>The Share button ships with the Builder. It works on any complete build, including fixed bundles.</p></div>

## How it works

Once a customer completes a build, a **Share this bundle** button appears under the total. It copies a link that carries the whole build in the URL itself (a `?bb_build=` token); **nothing is saved on your server**, so there is no database of links to manage and no privacy footprint.

Opening the link **restores the exact build**: every chosen product, quantity, variation pick and skipped optional item, re-validated against your live catalogue at the moment it is opened.

## What happens to old links

Because a link is validated when opened, a build that no longer fits the catalogue degrades gracefully. If a product in it has since been removed, that slot simply opens back at "choose", and the rest of the build is intact. Stale or garbled links open as a fresh bundle rather than an error.

## Where it is useful

- A **sales rep** configures a quote and sends the customer a link to buy.
- A **customer** shares a build with a colleague or partner for sign-off.
- **Support** reproduces a customer's exact build from a link they paste in.
