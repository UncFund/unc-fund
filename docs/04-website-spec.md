# unc.fund website spec

## Job of the site

Three visitors, in order of priority:
1. A founder who saw Unc on X and wants to know if Unc will write a check and how to ask. Site job: get them to the pitch form, with their deck attached, in under 30 seconds.
2. Someone checking whether this is real. Site job: show the thesis, who is behind it, and the checks written.
3. Someone who saw a meme. Site job: make them follow the account.

## Stack recommendation

**Build it in code, not Webflow, because the mascot is the product.**

- Framework: Next.js (App Router). Chosen over Astro because the pitch form needs a server route for the file upload and email, and because the animated mascot and check slider are React anyway.
- Hosting: Vercel, custom domain unc.fund, Cloudflare DNS.
- Styling: Tailwind with the brand tokens from `docs/03-brand.md`.
- Mascot: Rive runtime (`@rive-app/canvas`). One `.riv` file with a state machine. Fallback static SVG for reduced-motion users.
- Content: Markdown in the repo for posts and portfolio. Notion sync later if non-coders need to edit.
- Forms: native. A Next.js route handler at `/api/pitch` accepts multipart form data with the deck file, stores the file in Vercel Blob, and emails contactuncfund@gmail.com through Resend with the fields and a link to the deck. Without the env keys it logs to the console so local dev works.
- Analytics: Plausible (paid, private) or Vercel Analytics (free tier).
- Newsletter: Beehiiv or Substack embed.

Why not Webflow: 12 of the 43 sites scanned use it, so it is safe, but embedding a Rive state machine that reacts to page events and a custom slider is fighting the tool. If nobody wants to maintain code, Webflow plus a Rive embed is the fallback and still ships in a weekend.

## Site map

```
/                 Home (hero with animated Unc, thesis, check slider, CTA)
/thesis           What Unc funds and why (Blockchain, AI, Software, Robotics)
/pitch            The form. Also the "how it works" 3 steps.
/nephews          The companies Unc backed. He calls them nephews. "Coming soon" card at launch.
/anti-portfolio   Deals Unc passed on. Empty at launch, funny later.
/about            Who is behind Unc. One real person, one cartoon Unc.
/notes            Blog / Unc's takes.
/merch            Link out to a Shopify or Fourthwall store.
/contact          General contact form (name, email, message, optional file).
```

## Home page, section by section

1. **Hero.** Left: wordmark, headline "Small checks. Big Unc energy.", subhead "Unc Fund writes the first $500 to $9,999 into frontier-tech founders. Blockchain, AI, software, robotics. Decision in a week." Buttons: "Pitch Unc" (primary), "Follow @uncfund" (secondary). Right: animated Unc, waves on load, eyes follow cursor.
2. **The check slider.** "How much does Unc believe in you?" Slider from $500 to $9,999. Unc's expression and caption change at $500, $2,500, $5,000, $9,999. Below it: "Yes, these are real numbers. No, we are not a rolling fund yet."
3. **What we fund.** Four tiles: Blockchain, AI, Software, Robotics. Each with one sentence of thesis and an Unc-ism.
4. **How it works.** Three steps: Fill the form (5 minutes), Call with Unc (20 minutes), Money in a week. "No 47-slide decks. No warm intro required."
5. **Nephews strip.** Logos, or a single card that says "Unc's first check goes out [date]."
6. **From the notes.** Latest three posts.
7. **Footer.** Socials, newsletter box, "Proud of you. — Unc", legal disclaimer.

## The pitch form fields

- Your name, X handle, email
- Company name and one-liner (140 chars, enforced)
- Category: Blockchain / AI / Software / Robotics / Unc won't get it but try
- Stage: idea / prototype / users / revenue
- What would you do with $2,500? (200 words max)
- Link: demo, repo, or Loom
- Deck file: drag-and-drop or click. PDF, PPTX, PPT, KEY. Max 25 MB. Optional but strongly encouraged.
- Checkbox: "I understand Unc's checks are small and his love is large."

## Copy draft: /thesis

> Unc funds the frontier. Blockchain, AI, software, robotics. The stuff Unc reads about and doesn't fully understand, which is exactly why it needs funding.
>
> We write the first check. Not the first institutional check. The first check. Three or four figures. Before the deck is done. Before the company exists, sometimes.
>
> Why so small? Because that is what we have, and because a small check early beats a big check never. Enough for a domain, a demo, a month of API credits, a flight to a customer.
>
> Why frontier tech? Because that is where Unc spends his time, and because pre-seed money in these categories goes to people with warm intros. Unc is the warm intro.

## Launch acceptance checklist

- [ ] Loads under 2s on mobile, Lighthouse 90+.
- [ ] Mascot animates on desktop, static on reduced-motion, never blocks render.
- [ ] Pitch form with a deck attached lands in contactuncfund@gmail.com with a working link to the file, and the founder gets a confirmation in Unc's voice.
- [ ] OG image shows Unc and the tagline when shared on X.
- [ ] Legal disclaimer in footer reviewed.
- [ ] Both themes readable.
