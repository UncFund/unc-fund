# Your steps, in order

Everything on this list needs you, because it involves an account, a payment, or a signature. Each step says what to do, where, and what to send back to me so I can finish the wiring. Budget for the whole list: about $200 to $400 in year one, most of it the LLC.

Where things stand: this project is in its own folder with its own git history and its own commit identity (contactuncfund@gmail.com). Nothing here touches any other project.

---

## 1. GitHub for Unc Fund — DONE 2026-09-05

The repo lives at https://github.com/UncFund/unc-fund under its own `UncFund` organization. The local folder tracks `main`. The repo is public so Vercel's free plan can deploy it.

---

## 2. Vercel hosting (15 minutes, free)

Vercel's free Hobby plan cannot deploy a private repo owned by a GitHub organization, so the repo was made public on 2026-09-05. Decision: stay on Hobby for now. Hobby's terms are non-commercial, so when the fund is real and the site is doing business, upgrade to Pro ($20/month, team name top-left > Settings > Billing).

1. Sign in at https://vercel.com/login. The account was created with email/Google on 2026-09-05, which is fine: GitHub gets connected in the next step. If the GitHub option never appears on the import page, connect it at https://vercel.com/account/login-connections first.
2. Go to https://vercel.com/new and under **Import Git Repository** click **Continue with GitHub**. GitHub asks where to install the Vercel app: pick the **UncFund** organization (not your personal account), choose **Only select repositories**, pick `unc-fund`, click **Install**. Back in Vercel, click **Import** next to `UncFund/unc-fund`. If the org is missing later, click **Adjust GitHub App Permissions** on that page.
3. On the configure screen set **Root Directory** to `site`. Leave the framework as Next.js. Click **Deploy**. The first deploy will work but the forms will only log, not email, until steps 3 and 4 are done.
4. In the project, open **Storage > Create Database > Blob**, name it `unc-decks`, connect it to the project. This adds `BLOB_READ_WRITE_TOKEN` automatically.
5. Open **Settings > Environment Variables** and add:
   - `NOTIFY_TO` = `contactuncfund@gmail.com`
   - `NEXT_PUBLIC_SITE_URL` = `https://unc.fund`
   - `RESEND_API_KEY` and `RESEND_FROM` come from step 3 below.
6. Redeploy (Deployments > three dots on the latest > Redeploy).

Docs: https://vercel.com/docs/storage/vercel-blob and https://vercel.com/docs/projects/environment-variables

---

## 3. Resend for outgoing email (15 minutes, free tier covers 3,000 emails a month)

1. Sign up at https://resend.com/signup with contactuncfund@gmail.com.
2. **Domains > Add Domain**: `unc.fund`. Resend shows three or four DNS records (MX, TXT for SPF, TXT for DKIM). Leave the tab open.
3. Add those records at GoDaddy: https://dcc.godaddy.com/manage/unc.fund/dns (sign in, find unc.fund, DNS). Copy each record exactly. Wait for Resend to show **Verified** (usually under an hour).
4. **API Keys > Create API Key**, name `unc-fund-site`, permission Sending access. Copy it once, it is only shown once.
5. In Vercel (step 2.5) set `RESEND_API_KEY` to that key and `RESEND_FROM` to `Unc <unc@unc.fund>`.

Until the domain is verified you can set `RESEND_FROM` to `Unc <onboarding@resend.dev>`, which only delivers to the email you signed up with. Fine for testing.

Docs: https://resend.com/docs/dashboard/domains/introduction

---

## 4. Point unc.fund at Vercel (10 minutes, plus DNS wait)

1. In Vercel, project **Settings > Domains > Add**: `unc.fund` and `www.unc.fund`. Vercel shows the records it wants: an A record for `@` pointing to `76.76.21.21`, and a CNAME for `www` pointing to `cname.vercel-dns.com`.
2. At GoDaddy DNS (same page as step 3.3), delete the placeholder "Launching Soon" records for `@` and `www` and add Vercel's two records.
3. Wait. Vercel's Domains page turns green when it sees the records. HTTPS is automatic.

Docs: https://vercel.com/docs/projects/domains/add-a-domain

---

## 5. Form the LLC (30 minutes online, $50 to $500 depending on state, then yearly fees)

This is a single-member LLC investing your own money. No outside investors means no fund paperwork.

1. Pick the state. Your home state is cheapest and simplest for a solo LLC (Delaware adds a registered agent fee and a $300 annual tax and buys you nothing here). Search "[your state] secretary of state LLC formation".
2. Name: `Unc Fund LLC`. Check availability on the state site first.
3. File online. You will need a registered agent (you, at your address, is fine in most states) and a mailing address.
4. Get a free EIN from the IRS the same day: https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number-ein-online
5. Sign a one-page operating agreement (single-member templates are free; Stripe Atlas or Clerky include one if you use them).
6. Open a business bank account: https://mercury.com or https://brex.com. Bring the formation document and EIN.
7. Book one call with a startup lawyer before the first check. Questions to ask: can this LLC hold SAFEs, does anything on unc.fund read as a public securities offering, and what changes the day someone else wants to put money in. Two sources that explain the rules in plain language: https://sydecar.io/learn/who-can-be-a-vc and https://www.angellist.com/funds/venture-funds

If you want it done for you: https://stripe.com/atlas ($500, Delaware only) or https://www.clerky.com

---

## 6. Handles still open (15 minutes, free)

Use contactuncfund@gmail.com for all of them. Upload `brand/logo/unc-avatar.svg` exported as PNG for the avatar (see step 8).

1. Instagram: https://www.instagram.com/accounts/emailsignup/ as `uncfund`. Threads comes with it.
2. TikTok: https://www.tiktok.com/signup as `@uncfund`.
3. YouTube: sign in with the Gmail at https://www.youtube.com, create a channel, set the handle to `@uncfund` in channel settings.
4. LinkedIn company page: https://www.linkedin.com/company/setup/new/ named `Unc Fund`.
5. Optional, crypto side: Farcaster at https://warpcast.com as `uncfund`, and `unc.eth` at https://app.ens.domains
6. Turn on two-factor authentication on each, and store logins in a password manager vault called "Unc Fund".

---

## 7. Trademark check (10 minutes, free)

Search "UNC FUND" and "UNC CAPITAL" at https://tmsearch.uspto.gov before spending on merch. Uncork Capital and Unusual Ventures exist; a quick look for conflicts is enough for now. Registering can wait.

---

## 8. Export PNGs from the SVG brand files (10 minutes, free)

The X avatar, X banner and Instagram avatar need PNGs. Two easy routes:

- Figma (free): https://www.figma.com, new file, drag `brand/logo/unc-avatar.svg` and `brand/social/x-banner.svg` onto the canvas, select each, **Export** panel on the right, PNG at 2x.
- Or tell me to install Inkscape and I will export them from the command line.

Then upload: X profile at https://x.com/settings/profile (avatar 400x400, banner 1500x500).

---

## 9. Optional, but worth it

- Resend also handles the founder confirmation email. No extra setup.
- Plausible analytics ($9 a month, no cookie banner needed): https://plausible.io. Send me the site ID and I will add the script.
- Merch store for the vest and stickers: https://fourthwall.com (no upfront cost, they print and ship).

---

## What I still do once you send things back

- Push the repo when the GitHub URL exists.
- Add analytics when you have a Plausible ID.
- Replace the placeholder bio on /about when you send me two sentences and a photo.
