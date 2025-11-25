# Features Block Showcase

This demo illustrates the rebuilt `features` block used on the Acerbis OEM Division site.

## Sample Markup

```html
<div class="features">
  <div>
    <div>01</div>
    <div>Project Management</div>
    <div>
      <p>Ogni project manager di Acerbis segue i propri progetti assicurandone il controllo completo di tutte le fasi.</p>
    </div>
    <div><a href="/project-management">Approfondisci</a></div>
  </div>
  <div>
    <div></div>
    <div>Engineering Capability</div>
    <div>
      <p>Acerbis è in grado di supportare le esigenze dei clienti fin dalla fase iniziale di progettazione.</p>
    </div>
    <div><a href="/engineering">Approfondisci</a></div>
  </div>
  <div>
    <div>03</div>
    <div>Quality Control</div>
    <div>
      <p>Il nostro successo è legato indissolubilmente alla soddisfazione del cliente.</p>
    </div>
    <div><a href="/quality">Approfondisci</a></div>
  </div>
</div>
```

- The second card omits a number; the block auto-generates `02`.
- Any images included in the description will be lazily loaded.
- Cards respond to arrow keys (Left/Right/Up/Down, Home, End) and gain focus styling for keyboard users.
- On small screens, drag horizontally to swipe between cards thanks to pointer-enabled scrolling.

## Preview Steps

1. Run `aem up` locally.
2. Paste the sample markup into a Franklin page section.
3. Verify:
   - Desktop view shows a three-column layout with the fourth item wrapping.
   - Mobile view presents a swipeable carousel.
   - Focus states are visible and keyboard navigation cycles through cards.
