---
layout: docs
title: Developer reference
description: Hooks, the build-changed JavaScript event, template overrides and reading bundle selections from an order.
permalink: /docs/developers/
lede: Extend BundleBoss with PHP hooks, a JavaScript build event, and a themeable product-page template.
---

## Override the product-page template

The configurator form lives at:

```
bundle-boss/templates/single-product/add-to-cart/bundle.php
```

Override it in your theme by copying it to:

```
your-theme/woocommerce/single-product/add-to-cart/bundle.php
```

## Read bundle selections from an order

Each order line item stores the raw selection data under `_bundle_boss_selections`:

```php
$selections = $order_item->get_meta( '_bundle_boss_selections' );
// [
//   [ 'product_id' => 123, 'variation_id' => 456, 'item_index' => 0, 'unit_index' => 0 ],
//   ...
// ]
```

## PHP hooks

A selection of the most useful hooks. All of these are in the free plugin.

| Hook | Type | When it fires |
|---|---|---|
| `bundle_boss_from_price` | filter | The "From &pound;X" (or fixed) price is calculated |
| `bundle_boss_cart_item_price` | filter | After the bundle cart item price is calculated |
| `bundle_boss_before_add_to_cart` | action | After validation passes, before the cart add |
| `bundle_boss_after_add_to_cart` | action | After a bundle is successfully added to cart |
| `bundle_boss_after_summary` | action | Renders a container under the summary, for outcome widgets |
| `bundle_boss_unit_fields` | action | Inside each configurator unit (where personalisation renders) |
| `bundle_boss_item_fields` | action | Once per item, above its units |

### Example: a flat surcharge on every bundle

```php
add_filter( 'bundle_boss_cart_item_price', function ( $price, $selections, $discount ) {
    return $price + 5.00; // a flat packaging surcharge
}, 10, 3 );
```

### Example: notify on add to cart

```php
add_action( 'bundle_boss_after_add_to_cart', function ( $cart_item_key, $bundle_id, $validated ) {
    // $validated is an array of [ product_id, variation_id, item_index, unit_index ]
    my_notifier( 'Bundle #' . $bundle_id . ' added to cart.' );
}, 10, 3 );
```

## JavaScript event: `bundle_boss:build_changed`

The configurator dispatches a bubbling `CustomEvent` on the form after **every** recalculation, carrying a snapshot of the whole build. Listen for it to drive outcome widgets (a weight panel, a nutrition readout, a performance score) rendered into the container printed by `bundle_boss_after_summary`. It fires on every bundle, free and Pro.

```js
document.addEventListener( 'bundle_boss:build_changed', function ( e ) {
    if ( ! e.detail.complete ) { return; }
    myPanel.textContent = 'Total weight: ' + myWeightFor( e.detail.items ) + ' kg';
} );
```

The `detail` is a public contract (additions are safe; breaking changes bump `detail.version`):

```js
{
  version, bundleId, complete, pricingMode, discountPct, subtotal, total,
  items: [ { index, included, choice, productId, qty,
             units: [ { unit, variationId, attributes } ] } ]
}
```

<div class="callout"><p>Need a hook that is not here? The plugin has more, and we are happy to add one where it makes sense. <a href="/support/">Tell us what you are building.</a></p></div>
