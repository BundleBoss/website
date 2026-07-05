---
layout: docs
title: Bundle Analytics (in development)
description: Your bundle sales on your own site with no external tracking. Revenue, top bundles, most popular configurations, which features sell best, and CSV export.
permalink: /docs/analytics/
lede: Which bundles earn, which configurations customers actually buy, and which features sell best. Recorded on your site only, with no external tracking.
---

> **In development.** This feature is built and in testing but not yet in a released version. It is documented here so you can see what is coming. Details can still change before release.

## What it is

Bundle Analytics answers the questions a bundle store actually asks: how much are my bundles earning, which ones are winning, which are sitting idle, and which exact configurations do customers pick. It lives under **WooCommerce → Bundle Analytics**.

It is built to match the plugin's privacy promise. Sales are recorded on your own site when an order is paid, and that is the whole story: no external service, no JavaScript beacon, no page-view tracking, and no personal data. We store what sold and for how much, never who bought it.

## What you see

- **Headline cards** for the window you pick (7, 30, 90 days or all time): revenue, units sold, bundle sales and average sale, each with an up or down arrow against the previous period.
- **Revenue over time** as a chart with real values and dates.
- **Top bundles** by units and revenue, linked straight to the product editor.
- A **"No sales in this window"** line listing published bundles that did not sell, so the duds are as visible as the winners.
- **Which features sell best**: bundles using Buy X get Y, gift options, customer choice, quantity tiers or conditional items, ranked against plain bundles. Measure by revenue or by units with one click, and a plain takeaway when one feature clearly outsells the rest.
- **Most popular configurations**: the exact combinations customers build, grouped and counted. This is the one no other plugin has, and it tells you what your next fixed bundle should be.
- **Download CSV** exports the raw rows for the current window, ready for a spreadsheet.

## How the numbers behave

- A sale counts once, when the order is paid. Abandoned carts never count.
- Refunds, full or partial, net the revenue and units back down, so the figures reconcile with reality.
- Subscription renewals are recorded automatically, so recurring revenue shows up alongside one-time sales.
- The free plugin records sales too. The dashboard is part of Pro, and because the data lives in your own database, upgrading shows your full history from day one, nothing starts from zero.

## Good to know

- Everything is your data, in your database. Uninstalling with the full-wipe option removes it; otherwise it stays, like your orders do.
- Figures are per store currency. If you run a multi-currency setup, treat the totals as indicative for now.
