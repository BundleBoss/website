---
layout: docs
title: Subscriptions (in development)
description: Sell any bundle as a recurring box. Subscribe and save, swap the box between deliveries, pause or skip anytime, prepaid gift terms, and renewals charged automatically through Stripe.
permalink: /docs/subscriptions/
lede: Turn any bundle into a subscription box. Customers subscribe and save, swap what is inside between deliveries, and manage everything themselves.
---

> **In development.** This feature is built and in testing but not yet in a released version. It is documented here so you can see what is coming. Details can still change before release.

## What it is

Subscriptions let you sell any bundle as a recurring box. The customer picks Subscribe on the product page, checks out once, and the box ships and bills on the schedule you set until they pause or cancel. Everything about the box stays a BundleBoss bundle: the configurator, choice slots, build a box, the pick list, component stock.

There is no separate subscriptions plugin to buy. Renewals are charged through your existing Stripe connection, so if your store already takes cards with the free WooCommerce Stripe gateway there is nothing extra to set up.

## Turn it on

Edit a bundle and open the **Subscription** section:

- **Sell as a subscription** switches it on. Customers then choose between Subscribe and a one-time purchase; one-time buyers pay full price and no subscription starts.
- **Bill every** sets the cadence: every week, every 2 weeks, every month, whatever fits the product.
- **Subscribe and save (%)** is the discount for subscribing, applied on the first order and every renewal. 10 to 15 percent converts best.
- **Free trial** and **Signup fee** are optional: delay the first charge, or add a one-off fee on top of the first payment.
- **Offer prepaid terms** adds a pay-once option for 3, 6 or 12 deliveries. Popular for gifts: the buyer pays upfront, the boxes arrive on schedule, and billing ends with the term. No card is kept on file for prepaid.

## What the customer sees

On the product page, the choice is three clean cards: **Subscribe and save 10%** (pre-selected), **One-time purchase**, and **Prepay a gift term** if you enabled it. The cart line spells out what they chose, for example "Subscription: monthly, saving 10%".

After buying, **My Account gains a Subscriptions tab**. Each subscription is a card showing the next delivery date, what is in the box, and one-tap actions:

- **Change box** opens the bundle's own configurator so they can swap what is inside. The change applies from the next delivery and the price updates to match the new contents, keeping their subscriber discount.
- **Skip next** pushes the next delivery one cycle without charging.
- **Pause** and **Resume** do what they say. Resuming after the due date does not charge for the paused stretch.
- **Edit schedule** changes the delivery frequency or moves the next delivery date.
- **Cancel** first offers to pause or skip instead, and asks (optionally) why they are leaving.

## Renewals, receipts and failed payments

Renewals run automatically. Each one creates a normal WooCommerce order that rebuilds the exact box, with the customer's addresses, the delivery cost and real tax lines, so fulfilment and reporting behave exactly like any other order. WooCommerce sends its usual order emails as receipts.

A few days before each renewal the customer gets a heads-up email with the box contents, the date and the price, plus a link to swap, skip or pause. If a payment fails, we retry a couple of days later and email the customer to sort their card; after several failed tries the subscription ends and they are told no further charges will be made. A double charge is impossible: every renewal carries a one-per-cycle idempotency key that Stripe honours.

## Your view as the merchant

**WooCommerce → Bundle Subscriptions** lists every subscription with its status, next payment and price, plus filters and Pause / Resume / Cancel actions on each row. At the top you get the health numbers: monthly recurring revenue, active subscriptions, how many ended in the last 30 days, and the top cancellation reasons your customers gave.

Every renewal also feeds [Bundle Analytics](/docs/analytics/), so subscription revenue shows up in your sales picture automatically.

## Good to know

- Subscriptions need a customer account, so the subscriber can reach their Subscriptions tab.
- A coupon used at signup applies once; it does not quietly discount every renewal.
- Prepaid terms never store a card, which also makes them safe to buy as guest gifts.
