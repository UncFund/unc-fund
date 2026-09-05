# Unc.Fund brand assets

Everything here is vector (SVG) so it scales and can be edited in Figma, Illustrator or Inkscape. Fonts are Google Fonts (Fredoka, Source Sans 3, JetBrains Mono); install them locally before exporting PNGs or the fallbacks will render.

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
| `social/og-image.svg` | Link preview at 1200 x 630. Export to PNG for the site's `public/og.png`. |
| `unc-concept.svg` | The first sketch. Kept for history. |

## Exporting PNGs

No image tools are installed on this machine. Any of these work:

- Open the SVG in Figma (File > Import), select the frame, export PNG at 1x or 2x.
- Inkscape: `inkscape social/og-image.svg --export-type=png --export-filename=og.png`
- Node: `npx svgexport social/og-image.svg og.png 1x` after Node is installed.

## The character in one paragraph

Mid-50s, round and friendly, big head on a small body. Fleece vest in Vest blue zipped halfway, stand-up collar, two zip pockets, stitched edges, a small UNC patch on the chest. Light blue oxford with the collar showing in the V, cuffs turned back, a plain watch on the left wrist. Khakis with a crease and a brown belt, grey runners with cream soles. Readers pushed up on the forehead, grey side hair with a thinning comb-over, thick raised brows, crow's feet, a little colour in the cheeks, a full grey mustache and a half smile. Ink outlines throughout so he reads at any size. He is never the smartest person in the room and never the least kind.

## Drawing rules

- Outline everything in Ink at 2.5 px (2 px for small parts). No outline on texture, blush or highlights.
- The fleece is a dot pattern at low opacity over Vest blue. The zipper is a dashed line in Vest highlight.
- Eyebrows are filled shapes, not strokes. They carry the expression: raised is happy, flat is thinking, one up is doubt.
- Eyes are white ovals with a large pupil and one highlight top-left. Squint by replacing them with short arcs.
- The mouth sits below the mustache. Smile, grin (approve) and flat (think) are the three states.
- Hands get four knuckle ticks at rest. Open hands show four fingers and a thumb.

## Next steps for the mascot

1. Hand `character/unc-poses.svg` and `docs/03-brand.md` to a character illustrator for a polished sheet with 10 poses.
2. Rebuild the polished character in Rive with the state machine described in the brand doc (idle, wave, look, think, approve, check).
3. Replace the inline SVG component in the site (`site/components/Unc.tsx`) with the Rive runtime.
