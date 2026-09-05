# Unc.Fund brand assets

Everything here is vector (SVG) so it scales and can be edited in Figma, Illustrator or Inkscape. Fonts are Google Fonts (Fredoka, Source Sans 3, JetBrains Mono); install them locally before exporting PNGs or the fallbacks will render.

**One source of truth.** `character/unc-master.svg` is the only file to draw in. Everything else with Unc in it is generated:

```bash
node brand/build-assets.mjs
```

That rebuilds the pose sheet, avatar, X banner, OG image, the three post templates, the plan page hero, and the copies the site serves. The React mascot in `site/components/Unc.tsx` mirrors the master by hand, so update it when the master changes.

| File | Use |
|---|---|
| `tokens.css` / `tokens.json` | Color, type and voice tokens. The site imports the CSS version. |
| `logo/unc-wordmark.svg` | Horizontal wordmark for light backgrounds. The dot in UNC.FUND is a zipper pull. |
| `logo/unc-wordmark-reversed.svg` | Same on dark. |
| `logo/unc-vest-mark.svg` | Half-zipped vest in a rounded square. Favicon, app icon, embroidered patch. |
| `logo/unc-avatar.svg` | Unc's face in a circle. X, Instagram, TikTok, GitHub avatar. 512 px. |
| `logo/unc-lockup.svg` | Vest mark + wordmark + tagline. Email signatures, decks, large headers. |
| `character/unc-master.svg` | The master drawing. Idle pose, full detail, labelled groups. Every other Unc is derived from this file, so edit here first. |
| `character/unc-poses.svg` | Character sheet: idle, wave, approve, the check, think, point. Brief for an illustrator or a Rive build. |
| `social/x-banner.svg` | X header at 1500 x 500. |
| `social/og-image.svg` | Link preview at 1200 x 630. The live site generates its own PNG version at `/opengraph-image`. |
| `templates/deal-announcement.svg` | 1080 x 1080 post: "Backed by Unc", logo box, amount, Unc holding the check. Swap the text and logo. |
| `templates/quote-card.svg` | 1200 x 675 dark card for "Unc's take" opinions. |
| `templates/meme-template.svg` | 1080 x 1080 Unc squinting at a phone, top and bottom caption. |
| `build-assets.mjs` | The generator. |
| `unc-concept.svg` | The first sketch. Kept for history. |

## Exporting PNGs

No image tools are installed on this machine. Any of these work:

- Open the SVG in Figma (File > Import), select the frame, export PNG at 1x or 2x.
- Inkscape: `inkscape social/og-image.svg --export-type=png --export-filename=og.png`
- Node: `npx svgexport social/og-image.svg og.png 1x` after Node is installed.

## The character in one paragraph

Mid-50s, round and friendly, big head on a small body. The vest is the point: a navy quilted puffer vest in the Patagonia Nano Puff silhouette, zipped halfway, with horizontal stitched baffles, a stand-up collar with a zipper garage, contrast armhole binding, two angled zip hand pockets, a hem band, and a small woven label on the left chest with a mountain skyline in sunset bands and "UNC" under it (a parody of the outdoor-brand label, not a copy of one). Light blue oxford with the collar showing in the V, cuffs turned back, a plain watch on the left wrist. Khakis with a crease and a brown belt, grey runners with cream soles. A full head of short grey hair (no scalp showing, ever), readers pushed up into the hair, thick raised brows, crow's feet, a little colour in the cheeks, a full grey mustache and a half smile. Ink outlines throughout so he reads at any size. He is never the smartest person in the room and never the least kind.

## Drawing rules

- Outline everything in Ink at 2.5 px (2 px for small parts). No outline on texture, blush or highlights.
- The vest is quilted: dark stitch lines every 16 px with a lighter highlight line 6 px above each, both curving slightly with the body. The zipper is silver teeth on dark tape.
- Hair's outer edge is the head outline itself. Never draw hair as a shape floating on the head.
- Eyebrows are filled shapes, not strokes. They carry the expression: raised is happy, flat is thinking, one up is doubt.
- Eyes are white ovals with a large pupil and one highlight top-left. Squint by replacing them with short arcs.
- The mouth sits below the mustache. Smile, grin (approve) and flat (think) are the three states.
- Hands get four knuckle ticks at rest. Open hands show four fingers and a thumb.

## Next steps for the mascot

1. Hand `character/unc-poses.svg` and `docs/03-brand.md` to a character illustrator for a polished sheet with 10 poses.
2. Rebuild the polished character in Rive with the state machine described in the brand doc (idle, wave, look, think, approve, check).
3. Replace the inline SVG component in the site (`site/components/Unc.tsx`) with the Rive runtime.
