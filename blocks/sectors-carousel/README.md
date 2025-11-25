# Sectors Carousel Block

The **sectors-carousel** block recreates the “Settori” carousel from the Acerbis OEM site in Franklin/EDS. It pairs a list of vertical indicators with a fading hero-style slider, showing a background image, highlighted title, descriptive copy, and CTA.

## Authoring model

Create the block in the page editor as a table with the following rows and columns:

| Column | Purpose |
| --- | --- |
| 1 | Slide title (appears in the indicator button and on the slide) |
| 2 | Rich description text (supports paragraphs, emphasis, links, etc.) |
| 3 | CTA link (optional). If left empty, the block looks for the first link inside the description column. |
| 4 | Background asset (picture or image element). |
| 5 | Foreground asset (optional, rendered in the lower-right corner). |

### Optional eyebrow row

If the first row only contains a single cell, its text is used as the block eyebrow (e.g., `SETTORI`). All remaining rows are treated as slides.

### Sample markup

```
| SETTORI |
| MOTORCYCLE | I prodotti Acerbis ... | https://www.acerbisoem.com/settori/motorcycle/ | ![](motorcycle-bg.jpg) | ![](motorcycle-fg.png) |
| AGRICOLTURA | Forniamo serbatoi ... | [Scopri di più](https://www.acerbisoem.com/settori/agricoltura/) | ![](agricoltura-bg.jpg) | |
```

## Behavior

- Indicators update the active slide with a smooth fade transition.
- Slides are keyboard accessible (Arrow Left/Right). The entire block is focusable on desktop for quick navigation.
- Images are lazy-loaded, and the CTA automatically gets an accessible label if none is provided.
- CSS includes a gradient overlay, optional floating foreground image, and responsive layout that stacks navigation under the viewport on mobile.

## Assets

- Styles: `blocks/sectors-carousel/sectors-carousel.css`
- Logic: `blocks/sectors-carousel/sectors-carousel.js`

