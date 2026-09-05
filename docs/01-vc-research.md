# VC website and marketing research

Compiled 2026-09-05. Tech stacks were detected by fetching each homepage and looking for platform fingerprints, so treat "custom" as "no obvious builder", not as a hard fact. 40 sites scanned.

## The headline findings

1. **Webflow is the default for small and emerging funds.** Banana, Shrug, Weekend, Hustle Fund, Afore, Homebrew, Betaworks, Craft, Moxxie all run on it. Framer is the newer challenger (Sequoia, Uncork, 20VC).
2. **The big brands run WordPress or a custom Next.js build.** a16z, Founders Fund, USV, Lightspeed, Mayfield, Pear are WordPress. First Round and Contrary are Next.js. This is content-volume driven, not taste driven.
3. **Notion is the quiet backend.** Shrug, First Round, Long Journey, Ludlow and Pear all embed or link Notion for portfolio lists, memos, and applications. Cheap and good enough for a fund our size.
4. **Motion is now table stakes at the top.** Homebrew and Moxxie use GSAP scroll animation. Unusual uses Lottie. Rive is the current tool of choice for interactive mascots, which matters for an animated Unc.
5. **The playful funds win on personality, not polish.** Banana Capital's site is a one-page letter with emoji. Shrug's is 100+ testimonials and a merch shop. Hustle Fund has a hippo. None of them look like Sequoia and it works because the brand lives on X, not the website.
6. **Media is the moat for small funds.** Not Boring (Substack), 20VC (podcast), Banana (The Peel podcast + memes), Ludlow (Carpool.VC video). The website is a landing page for an audience built elsewhere.

## Comedic and personality-first funds (study these first)

| Fund | Link | The bit | Website | Why it matters to Unc |
|---|---|---|---|---|
| Banana Capital | https://www.bananacapital.vc | Turner Novak, self-styled "Chief Meme Officer". Grew a meme account into a $9.99M fund. Site is literally a one-page letter with 🍌🧢. | Webflow | Closest playbook: memes as deal sourcing, a persona as the brand, tiny website. Quote: "I move fast. I'm a one-person team, and don't have a rigid process." |
| Shrug Capital | https://www.shrug.vc | Started as a joke tweet, became a $3M fund with Tony Hawk and The Chainsmokers as LPs. Logo is SHRUG². Has a merch shop and "Drops". | Webflow + Notion | Proof that a joke can become a real fund and the joke can stay in the brand. Merch and drops are a marketing channel. |
| Hustle Fund | https://www.hustlefund.vc | "We invest in hilariously early startups." Hippo and yellow minivan mascots, pixel art, "no spreadsheets were harmed". Angel Squad lets people invest $1K checks. | Webflow + Astro | The best example of a mascot-led VC brand. Rebrand case study: https://www.hustlefund.vc/blog-posts-founders/the-process-of-rebranding-everything and https://dribbble.com/shots/19682358-Hustle-Fund-Rebrand |
| VC Starter Kit | https://vcstarterkit.com | Parody store selling the "VC uniform": Patagonia vest, Allbirds, Zero to One, a Tesla keychain. Profits to All Raise. Went viral in 2019. | Custom | Our exact visual joke already has a proven audience. Patagonia later stopped co-branding vests for finance firms, which is itself a story we can riff on. |
| Too Small to Fail | https://inthenoah.substack.com/p/introducing-too-small-to-fail-the | Satire piece about a pre-pre-seed fund that writes "novelty-sized tiny checks". | Substack | This is the Unc Fund joke written by someone else. Read it, then be the real version. |
| Ludlow Ventures / Carpool.VC | https://www.ludlowventures.com/carpool | Two GPs film cringe-but-honest conversations with founders in a car. Zero production value on purpose. | Custom + Notion | Cheap video format that builds relationships and content at once. Unc in a car is an easy episode. |
| Weekend Fund | https://www.weekend.fund | Ryan Hoover (Product Hunt). Site opens "Hello! I'm Ryan." Invests in "weird consumer to boring B2B". | Webflow | Personal, first-person voice. Sells side tools (Rolodexer, Signature Block) from the fund site. |
| Not Boring Capital | https://www.notboring.co/p/introducing-not-boring-capital | Packy McCormick raised $8M off a newsletter. The fund is the newsletter's business model. | Substack | Content first, fund second. |
| 20VC | https://www.20vc.com | Harry Stebbings turned a podcast into a fund. "The intersection of venture capital and media." | Framer | Same lesson at scale. |
| Chaotic Capital | https://chaotic.capital | "Complexity brings chaos. Chaos presents opportunity." Async-first, "we will not judge or nitpick." | Custom | Attitude in the name, minimal site. Good example of a two-person fund site that still feels intentional. |
| Mischief VC | https://mischief.vc | Founders-only fund, doodles next to testimonials, lightning bolt icon. | Custom | Hand-drawn doodles on an otherwise clean site is a look worth borrowing. |
| Litquidity | https://fortune.com/2022/01/13/litquidity-twitter-bain-venture-capital | Finance meme account whose founder became a Bain Capital Ventures scout and talked about "memeing a VC fund into existence". | n/a | Evidence that meme accounts convert into deal flow and LP interest. |

More reading on the joke-VC genre:
- The Information on meme investors: https://www.theinformation.com/articles/can-you-meme-your-way-into-venture-capital-maybe
- Bryce Roberts interviewing Turner Novak: https://bryce.medium.com/going-bananas-w-turner-novak-founder-of-banana-capital-171b4c9e5442
- Fortune satire "Group of White Men in Patagonia Vests Confused for VC Fund, Raise $500 Million": https://fortune.com/2017/09/29/group-of-white-men-in-patagonia-vests-confused-for-vc-fund-raise-500-million
- NPR on the vest: https://www.npr.org/2022/03/31/1089994672/patagonia-vest-tech-workers-san-francisco
- Inc. on the brands inside the VC Starter Kit: https://www.inc.com/talib-visram/vc-starter-kit-silicon-valley-unofficial-uniform.html

## Serious funds worth studying for craft

| Fund | Link | What to steal | Website |
|---|---|---|---|
| Sequoia | https://www.sequoiacap.com | Restraint. Type and whitespace do the work. | Framer |
| First Round | https://firstround.com | Content architecture: the Review, the Fast Track, resources for founders. | Next.js + Sanity + Notion |
| a16z | https://a16z.com | "Software is eating the world." A thesis as a tagline. | WordPress |
| Founders Fund | https://foundersfund.com | The manifesto ("We wanted flying cars, instead we got 140 characters"). A fund that writes like it has opinions. | WordPress |
| Bessemer | https://www.bvp.com/anti-portfolio | The Anti-Portfolio: a public list of deals they passed on. Self-deprecation as trust. | Custom |
| USV | https://www.usv.com | Public thesis, public blog since 2003. | WordPress |
| Contrary | https://www.contrary.com | Research reports as the front door. | Next.js |
| Homebrew | https://www.homebrew.co | Small, warm, opinionated. | Webflow + GSAP |
| Pear VC | https://www.pear.vc | Pre-seed specialist positioning, clear programs. | WordPress + Notion |
| Precursor | https://precursorvc.com | Pre-seed specialist, plain language. | Custom |
| Afore | https://www.afore.vc | Pre-seed specialist. | Webflow |
| Uncork Capital | https://uncorkcapital.com | Naming adjacency warning: "Unc" vs "Uncork". Also see Unusual Ventures (https://www.unusual.vc). Do a trademark search before spending on brand. | Framer |
| Indie.vc | https://indie.vc | Anti-VC VC. Shut down, came back. Contrarian positioning. | Squarespace |
| TinySeed | https://tinyseed.com | Small checks into bootstrappers, branded around being small. | Squarespace |

Roundups with more examples: https://www.joinamply.com/post/best-vc-firm-website-examples, https://mycodelesswebsite.com/venture-capital-website-design/, https://mediaboom.com/news/venture-capital-website-design/, https://jaredgold.medium.com/the-best-venture-capital-websites-brands-ive-seen-8d6d421332e4, https://webflow.com/made-in-webflow/venture-capital

## Full tech-stack scan

| Site | Detected stack |
|---|---|
| a16z.com | WordPress, links Substack |
| sequoiacap.com | Framer |
| foundersfund.com | WordPress |
| firstround.com | Next.js + Sanity + Notion |
| usv.com | WordPress |
| hustlefund.vc | Webflow (+ Astro) |
| bananacapital.vc | Webflow |
| shrug.vc | Webflow + Notion |
| weekend.fund | Webflow |
| longjourney.vc | Squarespace + Notion |
| ludlowventures.com | Custom + Notion |
| uncorkcapital.com | Framer |
| unusual.vc | WordPress + Lottie |
| precursorvc.com | Custom |
| afore.vc | Webflow |
| contrary.com | Next.js |
| chapterone.com | Custom |
| indie.vc | Squarespace |
| tinyseed.com | Squarespace |
| slow.co | Custom |
| homebrew.co | Webflow + GSAP |
| bvp.com | Custom |
| 776.vc | Custom |
| harlem.capital | WordPress, links Substack |
| backstagecapital.com | WordPress |
| 20vc.com | Framer, links Substack |
| betaworks.com | Webflow |
| chaotic.capital | Custom |
| vcstarterkit.com | Custom |
| craftventures.com | Webflow |
| nextview.vc | WordPress |
| mayfield.com | WordPress |
| pear.vc | WordPress + Notion |
| initialized.com | Next.js + WordPress |
| founderscollective.com | WordPress |
| lsvp.com | WordPress |
| nfx.com | Webflow + Next.js |
| mischief.vc | Custom |
| moxxie.vc | Webflow + GSAP, links Substack |
| ycombinator.com | Custom |

Count: Webflow 10, WordPress 11, custom 10, Framer 3, Next.js 3 (plus 2 hybrids), Squarespace 3.

## What the word "unc" gives us

"Unc" is Gen Z slang for an older guy who is out of touch but usually loved anyway. It comes from AAVE, where it was a term of respect for an elder or mentor. That double meaning is the whole brand: an Unc who is slightly behind on the memes, but who shows up with a check and good advice. Background: https://www.mentalfloss.com/language/slang/unc-meaning-explained and https://aftermath.site/unc-aave-african-american-vernacular-english-slang-gen-z/ (worth reading so the brand stays affectionate rather than mocking).
