---
layout: docs
title: Stock & fulfilment
description: How BundleBoss keeps component stock honest, handles the bundle stock cap, shipping weight, and downloadable or virtual components.
permalink: /docs/stock-fulfilment/
lede: Component stock stays honest from the configurator to the order, with no overselling.
---

## Component stock

When a bundle sells, the stock of **every component variation inside it** is reduced automatically, and restored if the order is cancelled or refunded. There is no double counting and no overselling through the components' own product pages.

Stock is checked at three points:

- **While configuring:** low-stock badges (like "Only 3 left") appear per unit, and out-of-stock options are blocked.
- **At add to cart.**
- **Again at checkout**, in case stock changed in the meantime.

### Cross-unit stock conflicts

If the same variation is picked in more than one unit and the combined demand is more than the stock available, the configurator says so and keeps Add to Cart disabled until the customer changes a selection. Two units cannot quietly claim the same last item.

## Bundle stock cap

Separately from component stock, you can cap how many of the **bundle itself** can sell, on the [Bundle Pricing](/docs/pricing/) tab. That uses WooCommerce's native stock counter, including its low-stock email threshold.

## Shipping weight

On the **Shipping** tab, choose a **weight mode**:

- **Automatic:** the shipping weight is the sum of the components the customer actually chose.
- **Manual:** always uses the weight you set on the bundle.

## Downloadable and virtual components

- **Downloadable components** work fully: file permissions are granted on payment (the right number of times for the quantity, with the product's own expiry), links appear in the customer's emails, the thank-you page, the order view and My Account, and a refund or cancellation cuts access. The pick list tags download rows.
- **Virtual components** add no weight or shipping. A bundle made entirely of virtual items is itself virtual.
