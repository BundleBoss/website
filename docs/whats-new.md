---
layout: docs
title: What's new
description: The latest BundleBoss updates, and how to tell us what to build next. We read every message.
permalink: /docs/whats-new/
lede: BundleBoss is built with shop owners, not just for them. Here is what we have shipped lately, and how to shape what comes next.
---

We build the next feature from what you tell us. If something would make your store easier to run, or you have seen it done well somewhere else, we want to hear it.

<div class="callout tip">
<p><strong>Tell us what to build.</strong> Email <a href="mailto:support@getbundleboss.com">support@getbundleboss.com</a> with the features you want, the stores and tools you admire, or a screenshot of a checkout you love. There is no form to fill in and no wrong idea. A real person reads every message, and the person who reads it is the person who builds the plugin.</p>
</div>

## Recently shipped

A few of the latest improvements. The full per-release list is in the changelog on the [WordPress.org page](https://wordpress.org/plugins/bundle-boss/).

- **Order the whole range in one grid.** Turn on the quantity grid on a product's own page and a customer sets how many of each colour and size they want, then adds the whole run to the basket at once, instead of adding each one separately. Every colour and size lands as its own basket line at its own price. See [Quantity grid](/docs/quantity-grid/).
- **Printing and finishes chosen once for the order.** When a product carries a further set of choices like printing or a finish, the grid offers it once for the whole order rather than as a grid cell, and works out the charge across the quantity: for every item, or once for a setup fee. So a "printed, double-sided" run multiplies out cleanly.
- **Fields on a product's own page.** Add a name to print, a message, a number, a tick box, a dropdown or a logo upload straight onto a simple product, each optional or required and each able to carry a charge, once, per letter or per unit, so an engraving line or a rush fee prices itself on the page. See [Personalisation](/docs/personalisation/#on-a-simple-products-own-page).
- **Product options, no variations needed.** Define colours, sizes or weights once as a set, attach it to any simple product, and shoppers pick from swatches and pills exactly as they would on a variable product, on the product's own page and inside every bundle. Options can carry their own extra charges. See [Product options](/docs/product-options/).
- **A redesigned bundle editor.** The bundle's settings now live on five clear tabs: Bundle Items, Pricing, Promotions, Display and Help. Every extra (gift, sharing, offers, whole-order personalisation) is one row with a switch and an Edit, so what is on and what exists are both always visible, and item rows collapse to one line each.
- **Personalisation for the whole order.** Fields asked once for the entire bundle, a shared logo, a delivery note, a setup charge, alongside the per-item kind. See [Personalisation](/docs/personalisation/).
- **A proper sale, with a countdown.** The Sale countdown timer row holds a sale price and its dates; the bundle charges the sale figure for the window and shows a live countdown. Quantity tiers stack on the sale price. See [Promotions](/docs/promotions/).
- **Every price in your shop's tax basis.** The headline, the running total, the "was" and the "You save" all follow WooCommerce's "Display prices in the shop" setting, on shops that enter prices including tax and display them excluding it too. What you charge is unchanged.
- **Hide item prices where you sell the pack.** Choice slots and boxes can hide per-item prices on the page and in the cart, so a fixed-price hamper reads as one price, not a sum to second-guess.
- **Refunds restock components.** Refunding a bundle puts its component stock back when "restock refunded items" is ticked, so inventory stops drifting.
- **One rule per option type in the box.** A [build-a-box](/docs/build-a-box/) pool whose products carry several option types, say a weight and a flavour, now takes one pin per type, with per-product overrides. "Everything at 100g, any flavour" is one rule; the flavour stays the customer's choice.
- **Exports carry everything now.** A bundle export travels the whole setup, box sizes and rules, promotions, gift mode and personalisation kits included, and re-links your images when the files exist on the destination site. Restoring an export on the same site brings back exactly what you had. See [Import &amp; export](/docs/import-export/).
- **Components tell you when they run low.** When bundle sales drain a component past its low-stock threshold, you get WooCommerce's normal low-stock email, exactly as if it had sold on its own page, and every order notes its component stock movements. See [Stock &amp; fulfilment](/docs/stock-fulfilment/).
- **Tidier option rows and a clearer block cart.** Colour and size options now spread evenly when they wrap (five colours read as 3 and 2, never 4 with an orphan), and the block cart shows an Edit link beside a bundle's name instead of hiding it in the title link.
- **The order panel: your bundles, editable on the product page.** After adding, the page shows the bundles in your basket as a running order: edit, change quantity or remove each one right there, watch the quantity-tier progress bar fill, and check out when done. Fixed bundles merge repeat adds into one tidy line. On phones a slim bar keeps the total and the next action pinned while you scroll.
- **Pick the word your shop uses.** Call bundles "boxes", "kits" or "hampers" in one setting and the storefront wording follows, from the pricing pills to the buttons. See [Theming](/docs/theming/).
- **Edit a bundle in the wizard, not just create one.** Open any bundle in the [wizard](/docs/wizard/), change its products, layout, pricing, name and description, then save. Anything the wizard does not show is kept exactly as it was, so editing never strips a feature you set by hand.
- **Customer choices can be "pick several".** A [choice slot](/docs/choice-slots/) can now let shoppers pick more than one, for example "pick any 3 of these", alongside the usual pick-one choice.
- **The edit preview shows the whole product page.** When you edit a bundle in the wizard, the preview renders the entire product page with your unsaved changes, so you see exactly what the customer gets before you save.
- **Plainer wording in the wizard.** The Products step now speaks in plain shop-owner language, so a first-timer knows what each part does at a glance.
- **Pick-and-mix by pack size.** [Build a box](/docs/build-a-box/) can now offer set sizes &mdash; a 1.7kg bucket that holds 10, a 3kg that holds 20 &mdash; each at one flat price. The customer picks a size, then fills it, with the best value size badged. Made for buckets, hampers, coffee bags and meat boxes; set it up in the [wizard](/docs/wizard/) with One size or Different sizes.
- **Choice pools from several categories.** A [choice slot or box](/docs/choice-slots/) can now draw its pool from more than one product category at once, not just one, and each category pool keeps itself current.
- **A guided creation wizard.** [Create a bundle with the wizard](/docs/wizard/): pick what you are making, add your products, see a live preview, and publish or save as a draft. The fastest way to your first bundle, and it writes an ordinary bundle you can still edit by hand.
## In development

Being built now. Have a use for one of these, or want it to work a certain way? <a href="mailto:support@getbundleboss.com">Tell us</a> and help shape it before it ships.

- **Subscriptions.** Bundles on a repeating schedule, from a weekly coffee box to a monthly kit. See [where it stands](/docs/subscriptions/).
- **Bundle analytics.** Which bundles and which configurations actually sell. See [the plan](/docs/analytics/).

## The Builder's power features

The Builder (Pro) turns a bundle into a full configurator. These are the headline tools:

- [Product options](/docs/product-options/), colours and sizes on any simple product, no variations
- [Choice slots](/docs/choice-slots/), pick each part from pools you define
- [Build a box](/docs/build-a-box/), mix-and-match to a size you set
- [Configurator layout](/docs/layouts/), a full-page two-pane builder
- [Personalisation](/docs/personalisation/), names, options and logo upload per item
- [Frequently bought together](/docs/fbt/) and [Buy X Get Y](/docs/bogo/), upsells and offers
- [Gift mode](/docs/gift-mode/) and [conditional items](/docs/conditional-items/)

See the [pricing page](/pricing/) for the full free-versus-Pro breakdown.

## Tell us what's next

The roadmap is genuinely steered by what lands in the inbox. If there is something you need, the fastest way to get it built is to <a href="mailto:support@getbundleboss.com">tell us about it</a>. We would rather build the thing you actually need than guess.
