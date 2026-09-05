# Unc.Fund brand direction

## The idea in one line

Unc is the uncle who doesn't fully get your startup but believes in you anyway, and he has a checkbook.

## The character: Unc

**Who he is.** Mid-50s. Comfortable. Was in tech once, "did well in the '90s", now spends his time at demo days telling founders they remind him of a young somebody. Slightly behind on slang and uses it wrong on purpose. Extremely warm. Writes small checks fast because "life is short and so is my attention span."

**What he wears.** The uniform, played straight:
- The vest. A navy quilted puffer vest in the Patagonia Nano Puff silhouette: horizontal baffles, stand-up collar, angled zip hand pockets, zipped exactly halfway. On the left chest, where the mountain label would be, a parody label with a sunset-band skyline and "UNC". Color is the brand's main accent (see palette). Master drawing: `brand/character/unc-master.svg`.
- Light blue oxford or a plain crewneck under the vest.
- Khakis or dark jeans.
- Grey Allbirds-style runners.
- Optional: readers pushed up on the forehead, an Apple Watch he never checks.

**Face and body.** Round, friendly, simple. Big head, small body (roughly 1:2.5 head-to-body) so he reads at avatar size. Eyebrows do most of the acting. Grey at the temples. Mustache is the one debate to settle: with mustache reads more "uncle", without reads more "tech". Recommendation: mustache.

**Style references for the illustration.**
- Duolingo's Duo and Hustle Fund's hippo for how a mascot lives on a website.
- Flat vector with a slight paper texture and hand-drawn line weight, in the spirit of Mischief VC's doodles, not glossy 3D.
- Pixel-art variant for memes and Discord/Farcaster (Hustle Fund does 8-bit as a nostalgic secondary style; it also makes memes cheap to produce).

**Poses to commission (character sheet).**
1. Idle, hands in vest pockets.
2. Wave.
3. Thumbs up.
4. Writing a check with a very large pen.
5. Holding a novelty-sized check that says "$500.00".
6. Squinting at a phone ("what is a zk rollup").
7. Arms crossed, nodding slowly ("that's a great question").
8. Pointing at the camera (recruiting poster).
9. Sitting in a car, Carpool-style.
10. Asleep in a chair at a demo day.

**Animated version (Rive).** States: `idle` (breathing, occasional blink, adjusts vest), `wave` (on page load), `look` (eyes follow cursor), `approve` (thumbs up on form submit), `think` (chin scratch while a form is validating), `check` (pulls a check out of the vest and hands it forward). Rive runs at 60fps on complex animations and drives from code inputs, which is why it beat Lottie for interactive mascots.

## Voice

Unc talks in first person. Short sentences. Sincere under the jokes.

- "I don't understand your business. I like you. Here's $2,500."
- "Pre-seed? Son, this is pre-pre-seed. There's no seed yet. Just soil."
- "Rounds close fast. Unc closes faster."
- "Unc doesn't do 47-slide decks. Unc does a phone call."
- "Frontier tech only. If your grandfather could explain it, we're not interested. If your grandfather could fund it, we're not needed."
- Sign-off on every email: "Proud of you. — Unc"

Rules: never punch down at founders. The joke is always on Unc or on VC culture, never on the person pitching. No "OK boomer" energy; "unc" is affectionate and comes from a term of respect, keep it that way.

## Taglines (pick one, keep two as secondary)

1. **"Small checks. Big uncle energy."**
2. "The first check nobody else will write."
3. "Frontier tech. Family money. (Well, Unc's money.)"
4. "Too small to fail."  (already used as a satire title, so it is a wink, not a claim)
5. "Unc believes in you."
6. "Pre-pre-seed. Pre-pre-everything."

## Palette

Deliberately warmer and dumber than the navy-and-white VC default. The vest is the accent.

| Token | Hex | Use |
|---|---|---|
| Vest | `#2F5D8A` | Primary accent. A slightly dusty "classic navy fleece" blue. |
| Vest highlight | `#7FA7CF` | Fleece texture, hover states. |
| Khaki | `#D9C8A6` | Secondary. Backgrounds for callouts, the pants. |
| Cream | `#F7F3EA` | Page background. Warm, not stark. |
| Ink | `#1E2430` | Text. A navy-black, not pure black. |
| Check green | `#2E8B57` | The money moment. Used once per page. |
| Alert orange | `#E8742C` | Error states, "new" badges, the one loud thing on a page. Sparingly. |

Dark mode: Ink becomes the ground (`#161B24`), Cream becomes text (`#EFE9DC`), Vest lifts to `#5C8BC0` for contrast.

## Typography

Direction A (recommended): a chunky rounded grotesque for the wordmark and headlines (Google Fonts: "Fredoka" or "Sora"), paired with a plain humanist body face ("Source Sans 3"). Reads friendly and slightly dad-like.

Direction B: a serif with personality ("Fraunces" at high optical size) for headlines, mono ("JetBrains Mono") for numbers and check amounts. Reads like a family office that hired a designer.

Direction C: full pixel-art system ("Press Start 2P" for accents only, never body). Only if the 8-bit angle becomes the main brand.

## Wordmark and logo ideas

1. **UNC.FUND set in the display face**, "UNC" heavy, ".FUND" light, the dot replaced by a tiny vest zipper pull.
2. **The vest as the mark.** A half-zipped vest silhouette in a rounded square. Works at 16px as a favicon.
3. **Unc's face in a circle** for social avatars. Eyebrows up, half smile.
4. **A check.** The logo is a tiny cheque with "UNC" on the signature line. Deal announcements use this as the frame.
5. **Monogram "U"** drawn as an unzipped collar.

Recommendation: 1 for the wordmark, 3 for avatars, 2 for favicon and merch patch. All three share the vest blue.

## Merch (also marketing)

- The Unc Vest. Blank fleece vest with a small embroidered UNC patch. Patagonia no longer does finance co-branding, so use a blank Patagonia plus a sewn patch, or a different supplier.
- "Backed by Unc" sticker for founders' laptops.
- A dad hat: "UNC" on the front, ".FUND" on the back.
- A novelty-sized cardboard check, reused for every deal photo.
- A "Proud of you" mug for LPs.

## Meme formats Unc owns

- **Unc reads a term sheet.** Unc squinting at documents, caption is any confusing crypto/AI jargon.
- **Unc vs the market.** Two panels: "VCs in 2021" / "Unc in 2026" holding a $500 check.
- **"Unc's take."** Quote card, serious frontier-tech opinion in Unc's voice. This one builds credibility.
- **Deal announcement.** Founder's logo + Unc thumbs up + check amount shown proudly, no matter how small.
- **Pass announcement.** "Unc passed. Unc will be wrong." Links to the anti-portfolio.
