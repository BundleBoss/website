---
layout: docs
title: Colours & branding
description: Match the BundleBoss configurator to your brand by changing a few colours in the WordPress Customizer.
permalink: /docs/theming/
lede: Match the configurator to your shop's brand by changing a few colours. No theme files to touch.
---

## Make it yours

The bundle configurator is built from a small set of named colours, so you can re-tint it to match your shop without editing any files. You set these in WordPress's own Customizer, and the change flows through every layout: the Add to Cart button, the selected options, the running total and the highlights.

## Change the main colour

Go to **Appearance &rarr; Customize &rarr; Additional CSS** and paste this, swapping the colour for your brand's:

```
:root {
  --bb-accent: #c2188f;       /* buttons, selected options, highlights */
  --bb-accent-deep: #9e1474;  /* the darker shade on hover */
}
```

Click **Publish**. That single change is usually all most shops need: it recolours the buttons, the chosen options and the progress highlights in one go. The Customizer previews it live, so you can try a colour before you save, and remove it any time to go back to the default.

## Finding your colour

The `#c2188f` part is a **hex code**, the standard way to write a colour for the web. There are two easy ways to get the one you want:

- **Use a plain colour name.** You can skip codes altogether and write a name instead, for example `--bb-accent: teal;` or `--bb-accent: navy;`. Most everyday colours work this way.
- **Use your exact brand colour.** Your logo files or brand guidelines usually list its hex code. If you do not have it to hand, any free [colour picker](https://www.google.com/search?q=color+picker) will give you one: pick your colour and copy the `#` value it shows.

## The colours you can set

You can fine-tune any of these the same way. The accent is the big one; the rest are there if you want a fuller match.

| Setting | Controls |
|---|---|
| `--bb-accent` | The main accent: buttons, selected options, highlights |
| `--bb-accent-deep` | The darker accent shown on hover and press |
| `--bb-summary-bg` | The background of the sticky summary bar |
| `--bb-ink` | Headings and the strongest text |
| `--bb-text` | Body text |
| `--bb-muted` | Secondary and label text |
| `--bb-border` | Card edges and divider lines |
| `--bb-success` | The "you save" and in-stock green |

<div class="callout tip"><span class="callout-label">Tip</span><p>Start with just <code>--bb-accent</code> set to your brand colour. That is about ninety percent of the effect, and you can always add the others later.</p></div>

## This is different from colour swatches

The colours here style the configurator's own buttons and bars. The little colour circles a customer picks from (for a "Colour" option) are set separately, per attribute. See [Colour swatches](/docs/swatches/) for those.
