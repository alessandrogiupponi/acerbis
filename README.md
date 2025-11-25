# Acerbis Franklin Blocks

This repository powers the Acerbis OEM Division site using Adobe Franklin. It contains reusable blocks and styles that can be authored through standard Franklin sections.

## Features Block (`blocks/features`)

The features block renders marketing highlights as responsive cards with numbered badges, colored headings, descriptions, and calls to action. It supports accessibility, lazy loading, and touch interactions out of the box.

### Markup

Create a four-column table (or Franklin row) for each feature:

```html
<div class="features">
  <div>
    <div>01</div>
    <div>Project Management</div>
    <div>
      <p>Ogni project manager di Acerbis segue i propri progetti assicurandone il controllo completo.</p>
    </div>
    <div><a href="/project-management">Approfondisci</a></div>
  </div>
  <!-- Repeat rows as needed -->
</div>
```

- Column 1: Optional numeric value; if omitted, the block auto-numbers the cards.
- Column 2: Title text, automatically highlighted.
- Column 3: Description (rich text allowed).
- Column 4: Link. The block reuses the first anchor it finds, or generates a placeholder if text only.

### Behaviour

- **Layout**: Up to three cards per row (`max-width: 33.33vw`). The fourth card automatically wraps to a new line. On narrow viewports the cards become a swipeable carousel.
- **Lazy Loading**: Images within the block receive `loading="lazy"` and `decoding="async"` for improved performance.
- **Touch Swipe**: Mobile users can drag horizontally to scroll through cards.
- **Accessibility**: Cards expose `role="listitem"`, respond to arrow-key navigation, and maintain ARIA labelling on the block (`role="region"`).

### Customisation

| Area | How to adjust |
| --- | --- |
| Number style | Update `.feature-number` in `blocks/features/features.css` for typography or spacing. |
| Title highlight colour | Change `.feature-title-text` background (`#ffeb0a` by default). |
| Card width | Modify the `flex` rules on `.feature-card`. Keep `max-width: 33.333%` to respect the three-column cap. |
| Mobile carousel | Tweak the `flex-basis` in the mobile media query or remove `scroll-snap-type` for free-scrolling. |
| Link appearance | Edit `.feature-link-anchor` styles to align with brand guidelines; arrow icon defined in `icon-feather-arrow-right.svg` and label reveals on hover/focus. |

## Development

```sh
npm install
npm run lint
```

Use the [AEM CLI](https://github.com/adobe/helix-cli) for local previews:

```sh
aem up
```

## Environments

- Preview: https://main--{repo}--{owner}.aem.page/
- Live: https://main--{repo}--{owner}.aem.live/

## Additional Resources

- [Franklin Documentation](https://www.aem.live/docs/)
- [Developer Tutorial](https://www.aem.live/developer/tutorial)
- [Performance Guidance](https://www.aem.live/developer/keeping-it-100)
