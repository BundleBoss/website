---
layout: docs
title: Troubleshooting
description: Common BundleBoss symptoms and their fixes.
permalink: /docs/troubleshooting/
lede: The usual suspects, and how to put them right.
---

| Symptom | Likely cause | Fix |
|---|---|---|
| "Add Bundle to Cart" stays disabled | Not every required slot is fully configured | Check that each unit has all its options set; an incomplete build cannot be added |
| A "stock conflict" warning appears | Two units picked the same variation and together exceed its stock | Change one unit to a different variation |
| "From &pound;X" shows an old price | A component price changed but the bundle was not re-saved | Re-save the bundle, or re-save the component product |
| A bundle does not appear in the shop | The product is not Published | Publish the bundle product |
| The Bundle Items panel is blank | WooCommerce is older than 8.0 | Update WooCommerce |
| A variable item shows "this combination is unavailable" | An older version with custom attributes | Update to the latest BundleBoss; recent versions match custom attributes automatically |
| Options do not update after picking a product | A JavaScript error on the edit screen | Check the browser console; make sure jQuery and Select2 load on the product edit page |
| The cart shows a stale price after editing | Browser caching | Hard-refresh (Ctrl+Shift+R) and retry |
| The "Restrict options" colour list looks empty | An older build with many options | Update BundleBoss; recent versions fix the admin option list width |

## Still stuck?

Send the details to [support](/support/): your WordPress and WooCommerce versions, which bundle and layout you were using, what you expected, and what happened instead. A screenshot is worth all of that. The person who reads it is the person who builds the plugin, so most answers come back in one reply.
