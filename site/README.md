# unc.fund website

Next.js 15 (App Router), plain CSS with the brand tokens, no UI framework. Deploys to Vercel.

## Run it

Node 20 or newer is required. It was not installed on the machine this was written on.

```bash
cd site
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## What is here

| Path | What |
|---|---|
| `app/page.tsx` | Home: animated Unc, thesis, check slider, how it works |
| `app/pitch/` | The pitch form with deck upload |
| `app/contact/` | General contact form with optional attachment |
| `app/thesis/`, `app/about/`, `app/portfolio/`, `app/anti-portfolio/`, `app/notes/` | Content pages |
| `app/api/pitch/route.ts` | Receives the pitch, stores the deck if it arrived as a file, emails the inbox |
| `app/api/contact/route.ts` | Same for contact |
| `app/api/deck-upload/route.ts` | Issues client upload tokens so large decks go browser-to-Blob directly, skipping the 4.5 MB serverless body limit |
| `components/Unc.tsx` | The mascot. Inline SVG, blinks, eyes follow the cursor, waves on load. Swap for Rive later |
| `components/PitchForm.tsx`, `ContactForm.tsx` | Client forms with drag-and-drop |
| `components/CheckSlider.tsx` | The $500 to $9,999 slider |
| `lib/notify.ts` | Resend email, falls back to console.log without a key |
| `lib/files.ts` | Allowed deck types and size limit |
| `app/tokens.css` | Copy of `../brand/tokens.css`. Keep them in sync |

## How the deck upload works

1. The browser asks `/api/deck-upload` for a token, then uploads the file straight to Vercel Blob (`@vercel/blob/client`).
2. The form posts the fields plus the resulting deck URL to `/api/pitch`.
3. The route emails `NOTIFY_TO` with every field and the deck link, and sends the founder a confirmation.
4. If the client upload fails (no `BLOB_READ_WRITE_TOKEN` in local dev), the file is posted with the form instead and the route stores it if it can. On Vercel that fallback path is capped at 4.5 MB by the platform, so set the token in production.

Decks are stored with `access: "public"` under an unguessable random suffix. That is how Vercel Blob works today; do not share the URLs.

## Deploy

1. Push the repo to GitHub and import it in Vercel with `site` as the root directory.
2. Add a Blob store in the Storage tab. Vercel injects `BLOB_READ_WRITE_TOKEN`.
3. Add `RESEND_API_KEY`, `RESEND_FROM`, `NOTIFY_TO`, `NEXT_PUBLIC_SITE_URL`.
4. Verify unc.fund in Resend so mail can come from `unc@unc.fund`.
5. Point unc.fund DNS at Vercel.
