# Reply ledger

One row per reply Unc posts. This exists because the account cannot afford formal A/B tests — at
roughly 0.5 likes per reply, telling 0.50 apart from 0.75 needs about fifty replies per arm, and we
post one or two a round. Tagging every reply lets us **slice retrospectively** instead, so a question
asked in three weeks can be answered from data already collected rather than by starting a new trial.

**Every round appends its replies here.** No exceptions, including rounds that post one.

## Columns

| Column | Meaning |
|---|---|
| `when` | UTC, `MM-DD HH:MM` |
| `who` | account replied to |
| `words` | word count of Unc's reply. The variable under test — see below |
| `mode` | `oblivious` (Unc confidently misreads), `prop` (vest/age/runners/chair), `thesis` (small-check), `receipt` (dated anecdote), `praise` (specific compliment), `react` (short reaction), `own-thread` (answering a response on Unc's own post, usually the morning note). Append `+oc` for any reply in the on-chain register (Sep 14), e.g. `praise+oc` |
| `p_views` / `p_age` | parent views and parent age in minutes, **at the moment of catching it** |
| `vel` | `p_views / p_age`, the targeting metric |
| `p_repl` | replies already on the parent when Unc arrived |
| `views` / `likes` | Unc's reply, read at least two hours later |
| `op` | did the original poster reply to Unc? `y`/`n` — **the metric that matters most** |

## What is being varied right now

**Length, and nothing else.** Targeting (velocity) and voice (the five comedy rules) are both held
fixed until roughly 2026-09-23 or fifty replies, whichever comes first. Changing tone now would add a
third arm to an experiment that cannot resolve the two it has.

**Aim for about half of all replies under eight words.** Every Unc reply to date has been two or
three lines with a setup and a punchline; short has never once been tried, while the replies that
actually perform from working VC accounts are three to six words — "Hate it when that happens" (618
views), "Oooo. Solid" (357), "💪" (455). Length is orthogonal to voice, so a short reply is still
comedy, still Unc, still the same rules. It is the same arm measured a second way.

**Watch `op` more than `likes`.** The original poster replying is the highest-leverage outcome
available: it puts Unc in their notifications, their audience sees the exchange, and it converts a
one-shot into a conversation. Every one of Colin Gardiner's 500-plus-view replies sits inside a
conversation rather than standing alone.

### Second arm added 2026-09-12: the praise lane

Rand's instruction after the first OP reply landed: **lean into praise replies and chase more of
them.** Length stays under test; this adds a second thing to slice on, and the columns already
support it — `mode` = `praise`, and `op`.

From Sep 12 each round takes **two picks where the board allows**: one lane A velocity pick (the
existing rule, unchanged, which buys views) and one lane B praise pick on a *deliberately slow*
parent from a small account (which is the only thing that has ever bought a conversation). Full
reasoning, guardrails and the failure condition are in `08-reply-playbook.md` under "The praise lane".

Three things to hold onto when reading these rows back:

1. **Judge a `praise` row on `op`, never on views.** It sits on a sub-100/min parent by design. The
   Sep 12 one took seventeen views and that is a success, not a miss. Scoring it on views would
   quietly kill the arm inside a week.
2. **`praise` rows are not comparable to `oblivious` rows on reach.** When slicing the length
   question, split by mode first or the slow parents will drag the short-reply arm down and look like
   evidence that short replies underperform.
3. **The falsifier is written down in advance.** After roughly five `praise` rows, count the `op`
   column. Still one means the Sep 12 result was a fluke and the lane should be reported as not
   working — the same mistake the 0.9-to-1.5x velocity rule of thumb made when two fast parents were
   promoted to a rule and then failed five times running.

## Ledger

| when | who | words | mode | p_views | p_age | vel | p_repl | views | likes | op |
|---|---|---|---|---|---|---|---|---|---|---|
| 09-08 19:36 | — | — | — | — | — | — | — | 24 | 1 | y |
| 09-08 20:16 | — | — | prop | — | — | — | — | 93 | 0 | n |
| 09-08 21:59 | @ADINonline | 12 | thesis | 6536 | 469 | 14 | 7 | 6 | 0 | n |
| 09-08 22:14 | @MartinGTobias | — | prop | 140 | 5 | 28 | — | 97 | 1 | n |
| 09-09 14:16 | @MartinGTobias | — | prop | — | — | — | — | 15 | 1 | n |
| 09-09 14:17 | @Trace_Cohen | — | — | — | — | — | — | 6 | 0 | n |
| 09-09 15:54 | @a16z | 14 | thesis | — | 4 | — | — | 192 | 1 | n |
| 09-09 17:55 | @Jason | 16 | oblivious | 1765 | 3 | 588 | 0 | 532 | 0 | n |
| 09-09 18:18 | @vladtenev | 18 | oblivious | 45033 | 33 | 1414 | 328 | 2022 | 1 | n |
| 09-09 18:22 | @MollySOShea | 14 | oblivious | 648 | 8 | 81 | 0 | 24 | 0 | n |
| 09-09 19:20 | @MartinGTobias | 15 | oblivious | 987 | 31 | 32 | 10 | 92 | 1 | n |
| 09-09 22:12 | @Jason | 21 | mirror | 4069 | 17 | 239 | 0 | 230 | 0 | n |
| 09-09 23:54 | @jdtoelle | 20 | oblivious | — | 37 | — | — | 2 | 0 | n |
| 09-09 23:59 | @HarryStebbings | 16 | oblivious | 1193 | 22 | 54 | 5 | 126 | 1 | n |
| 09-10 00:22 | @naval | **7** | oblivious | 3670 | 2 | 1835 | 18 | **2745** | 2 | n |
| 09-10 15:45 | @a16z | **7** | prop | 3241 | 16 | 203 | 2 | 13 | 0 | n |
| 09-10 15:49 | @sweatystartup | 8 | oblivious | 1716 | 18 | 95 | 3 | 9 | 0 | n |
| 09-10 16:05 | @RobinhoodApp | **7** | oblivious | 11530 | 4 | **2956** | 80 | 424 | 0 | n |
| 09-10 16:17 | @Teknium | **6** | oblivious | 1654 | 8 | 199 | 2 | 36 | 0 | n |
| 09-10 16:35 | @ESCOweb3 | **4** | praise | — | — | — | — | 9 | 1 | n |
| 09-10 20:41 | @MollySOShea | 12 | thesis | 577 | 9 | 63 | 1 | void (12) | 1 | n (liked) |
| 09-10 22:16 | @amasad | 13 | oblivious | 1267 | 8 | 151 | 2 | 67 | 0 | n |
| 09-11 02:45 | @blknoiz06 | 8 | oblivious | 34469 | 35 | 988 (~334 now) | 60 | 105 | 0 | n |
| 09-12 17:46 | @alexisohanian | **5** | prop | 1601 | 20 | 80 (~51 now) | 1 | 14 | 0 | n |
| 09-12 17:48 | @ESCOweb3 | **4** | praise | 366 | 25 | 15 | 2 | 22 | 1 | **y** |
| 09-12 17:56 | @MartinShkreli | **6** | oblivious | 58043 | 79 | 735 | 81 | 82 | 0 | n |
| 09-12 19:12 | @ESCOweb3 | **5** | own-thread | — | — | — | — | 12 | 1 | **y** |
| 09-12 19:14 | @gregisenberg | **7** | oblivious | 8333 | 39 | 216 (~85 now) | 31 | 135 | 1 | n |
| 09-12 20:14 | @brycent | 15 | thesis | 472 | 11 | 44 | 1 | 7 | 0 | n |
| 09-12 22:16 | @notthreadguy | **8** | oblivious | 4962 | 17 | 287 (~160 now) | 27 | 177 | 0 | n |
| 09-12 23:17 | @SebastienEgo | **8** | praise | 5342 | 96 | 56 | 8 | 51 | 3 | **y** |
| 09-13 01:43 | @naval | **7** | oblivious | 11254 | 4 | 2745 (~630 now) | 25 | 439 | 0 | n |
| 09-13 02:21 | @itsusamak | **8** | praise | 36 | 134 | 0.3 | 1 | **unreadable (Community post, see 22:07 note)** | — | — |
| 09-13 03:36 | @blknoiz06 | **6** | prop | 18535 | 8 | 2317 (~953 now) | 320 | **10** | 0 | n |
| 09-13 13:49 | @SebastienEgo | **7** | own-thread | — | — | — | — | 9 | 0 | n (pending) |
| 09-13 13:56 | @CharlyKeleb | **7** | praise | 104 | 152 | 0.7 | 3 | 8 | 0 | n |
| 09-13 16:41 | @Teknium | **7** | oblivious | 6956 | 32 | 221 (~180 now) | 23 | 682 | 1 | n (liked) |
| 09-13 17:12 | @JIsaam | **6** | praise | 50 | 56 | 0.9 | 1 | 5 | 0 | n (liked Sep 14 16:00) |
| 09-13 17:22 | @garrytan | 8 | self-own | 6743 | 20 | 334 (~210 now) | 11 | 364 | 1 | n |
| 09-13 17:52 | @PKodmad | **7** | praise | 332 | 306 | 1.1 | 0 | 22 | 0 | **y** |
| 09-13 19:15 | @andruyeung | 10 | self-own | 553 | 13 | 43 | **0** | **2,550** (18h) | **5** | n |
| 09-13 21:36 | @olivercingl | **6** | praise | 531 | 174 | 3 | 17 | 20 | 1 | **y** |
| 09-13 22:07 | @not_fanti | **6** | praise | 72 | 42 | 1.7 | 1 | 9 | 1 | **y** |
| 09-14 00:10 | @not_fanti | **6** | own-thread | — | — | — | — | unreadable (Community) | — | n |
| 09-14 00:12 | @olivercingl | **7** | own-thread | — | — | — | — | 7 | 1 | **y** |
| 09-14 00:17 | @Motion_Viz | **7** | praise | 45 | 7 | 6 | 1 | 17 | 0 | **y** |
| 09-14 15:21 | @mytwillot | **6** | own-thread | — | — | — | — | 5 | 0 | n (pending) |
| 09-14 15:21 | @Motion_Viz | **7** | own-thread | — | — | — | — | 6 | 0 | n (pending) |
| 09-14 15:21 | @PKodmad | 8 | own-thread | — | — | — | — | 5 | 0 | n (pending) |
| 09-14 15:23 | @kseniam0s | **6** | thesis | 88 | 17 | 5 | 2 | 87 | **2** | n (liked) |
| 09-14 15:25 | @tarasshyn | 9 | praise | 79 | 18 | 4 | 0 | 20 | 1 | n (liked) |
| 09-14 16:30 | @brycent | **7** | thesis | — | — | — | — | 3 | 0 | n |
| 09-14 17:17 | @vladtenev | **7** | oblivious | 15183 | 4 | **~3,800** | 148 | 1,393 (113m) | 0 | n |
| 09-14 17:22 | @Artur_Abra | **7** | praise | 4 | 4 | 1 | 0 | Community post | — | **y** |
| 09-14 19:13 | @Artur_Abra | **6** | own-thread | — | — | — | — | Community post | — | pending |
| 09-14 19:14 | @RobinhoodApp | **6** | receipt | 16503 | 14 | 1179 (~350 now) | 147 | 137 (7h) | 1 | n |
| 09-14 19:16 | @ArunGopidas | **7** | praise | 31 | 106 | 0.3 | 1 | Community post | — | n (liked at 05:21 Sep 15) |
| 09-14 19:20 | @ESCOweb3 | **4** | praise | — | ~2,540 | — | — | 16 (6h50m) | 0 | n |
| 09-14 20:13 | @UpperClassArmz | **6** | praise | 5 | 4 | 1.4 | 1 | 17 (6h) | 1 | n (OP liked at 20:47) |
| 09-14 23:11 | @jean_ette_li | **7** | praise | 206 | 14 | 15 | 8 | 115 (15h) | 1 | **y** (liked and answered "haha fr" at 23:26, 15m) |
| 09-15 00:12 | @jean_ette_li | **5** | own-thread | — | — | — | — | 14 (14h) | 1 | **y** (liked, answered "Preesh!" at 00:17) |
| 09-15 01:16 | @VentureCoinist (parent unconfirmed) | 15 | prop | — | — | — | — | 224 (13h) | 1 | n (liked, Luke Martin at 01:20) |
| 09-15 14:13 | @paulg | **6** | self-own | 25456 | 51 | 499 (~460 now) | 48 | 137 (117m) | 1 | n |
| 09-15 14:15 | @kien_hoang18 | **7** | praise | ~1 | 14 | ~0 | 0 | 3 (115m) | 0 | pending (due 02:15 Sep 16) |
| 09-15 15:08 | @ronitrjain | **6** | react news | 2594 | 28 | 93 | 11 | 153 (61m, early) | 1 | n (OP liked at 15:59) |
| 09-15 16:13 | @arbitrum | **5** | prop+oc | 5899 | 4 | ~1,340 | 2 | 152 (57h) | 0 | n |
| 09-15 16:14 | @SashaMagicSpace | **5** | praise | 134 | 27 | 5 | 6 | 67 (57h) | **2** | n |
| 09-15 21:05 | @outdoorfarmshow | 20 | unlogged (not this session) | — | — | — | — | 2 (10m) | 0 | n |
| 09-15 22:41 | @Dkirtley | **7** | own-thread | — | — | — | — | 5 (50h) | 0 | n |
| 09-15 22:46 | @duborges | **7** | praise | 84 | 8 | 10.5 | 1 | 92 (50h) | 0 | n |
| 09-15 22:49 | @therollupco | 10 | receipt+oc | 527 | 31 | 17 | 1 | 8 (50h) | 0 | n |
| 09-18 01:18 | @andyyy | **8** | prop+oc | 2668 | 33 | 81 | 15 | 109 (56m) | 0 | n (56m) |
| 09-18 01:21 | @whysumancode | **7** | praise | 7 | 16 | 0.4 | 0 | 7 (54m) | 0 | n (54m) |
| 09-18 02:22 | @SpaceX | **8** | oblivious | 103000 | 24 | 4,292 | 44 | pending | — | pending (due 04:22 Sep 18) |
| 09-18 02:24 | @Cointelegraph | **9** | receipt+oc | 18000 | 52 | 346 | 23 | pending | — | pending (due 04:24 Sep 18) |
| 09-18 02:28 | @harryjwang | **6** | praise | 5 | 22 | 0.2 | 0 | unreadable (signed out) | — | n (parent reply count still 1 = Unc's, read 16:20 Sep 18) |
| 09-22 14:10 | @MollySOShea | 10 | self-own news | 991 | 10 | 99 | 2 | 171 (2h05m) | 2 | n (no replies under it, 16:15 Sep 22) |
| 09-22 16:10 | @blknoiz06 | **8** | receipt+oc | 26100 | 7.5 | ~3,480 | 58 | 26 (2h05m) | 2 | n |
| 09-22 16:12 | @nickvasiles | **8** | praise | 72 | 2 | 36 | 0 | 69 (2h05m) | 2 | **y** |
| 09-22 18:11 | @nickvasiles | **8** | own-thread | 68 | 115 | 0.6 | 0 | not read (thread render) | — | n |
| 09-22 18:13 | @ycombinator | **8** | receipt | 3882 | 24 | 162 | 5 | 50 (2h05m) | 0 | n |
| 09-22 18:16 | @MorganVonDruitt | **8** | praise | 3 | 7 | 0.4 | 0 | 10 (6h06m) | 1 | **y** (replied "The first of many to come", liked, and followed @UncFund) |
| 09-22 19:43 | @brycent | 16 | thesis (news check, backfilled) | 3800 | ~240 | ~16 | 3 | 20 (4h41m) | 0 | n |
| 09-22 20:12 | @MorganVonDruitt | **7** | own-thread | 5 | 2 | 2.5 | 0 | 2 (4h12m) | 0 | — |
| 09-22 20:14 | @SnorkelAI | **8** | oblivious | 123 | 7 | 18 | 1 | 36 (4h10m) | 1 | n (liked by @ColemanEntringer, not by OP) |
| 09-22 20:17 | @roywass_ | **8** | praise | 2 | 5 | 0.4 | 0 | Community (not countable) | 1 | n (**OP liked it**, did not reply) |
| 09-22 21:49 | @asdhas9082 | 5 | praise (hand-posted by Rand) | — | — | — | — | 5 (2h35m) | 0 | n |
| 09-22 21:51 | @ESCOweb3 | 5 | praise+oc (hand-posted by Rand) | — | — | — | — | 12 (2h33m) | 0 | **y** (replied 22:32 with laughing emojis and a heart-hands; answered at 00:22) |
| 09-22 21:52 | @RobinhoodCrypto | 7 | react+oc (hand-posted by Rand) | — | — | — | — | **1,185** (2h32m) | 0 | n |
| 09-22 21:52 | @garrytan | 9 | react (hand-posted by Rand) | — | — | — | — | 11 (2h32m) | 0 | n |
| 09-22 21:54 | @sama | 5 | react (hand-posted by Rand) | — | — | — | — | 10 (2h30m) | 0 | n |
| 09-22 21:58 | @stanleefounder | 14 | oblivious (hand-posted by Rand) | — | — | — | — | **2,795** (2h26m) | 0 | n |
| 09-23 00:22 | @ESCOweb3 | **7** | own-thread+oc | 10 | 110 | 0.1 | 0 | 6 (1h50m) | 0 | n |
| 09-23 00:27 | @andyyy | 18 | receipt+oc (hand-posted by Rand) | — | — | — | — | 62 (1h45m) | 0 | n |

### Sep 15, 16:09 round (12:09pm ET): both lanes plus a Helion quote

Read at 16:09–16:20 UTC.

- **Concurrent-run check clean.** The scheduler showed only this run live; newest Unc post was the 15:08 news-check
  reply, 61 minutes old. The viewport label flipped to "another Claude session set this" as usual, and nothing new
  appeared on `with_replies`.
- **Nothing inbound to answer.** Notifications since 14:09: **@ronitrjain liked "Pork bellies, then power, now
  compute." at 15:59** (OP like, no answer), and Shishira liked two posts including the morning note. The morning note
  has no replies.
- **Reads at about two hours:** @paulg plaque **137 views, 1 like** at 117 minutes, about 0.3x the ~460/min current rate.
  @kien_hoang18 praise 3 views, no answer yet. @ronitrjain 153 views and 1 like at 61 minutes.
- **Lane A: @arbitrum, "Excited to make stocks programmable"**, quoting @BitgetWallet's tokenized-stocks launch.
  Caught at 4.4 minutes, 5,899 views, 2 replies (~1,340/min lifetime, though a second read two minutes later
  suggested ~90/min current, so the early number was the quote's own burst). No cashtag or price in either post. "Unc's
  VCR still blinks 12:00." Five words, `prop+oc`: dumb about "programmable" as slang, silent on the product and the
  plumbing. The 14:09 round skipped an older @arbitrum tokenized-stocks post for tickers; this one had none. A grep
  steered away from "shoebox", which the file already flags as a spent paper-object shape.
- **Lane B: @SashaMagicSpace**, AgenturScout (a Swiss agency directory) "just made its first internet dollar" after
  months of work. Caught at 27 minutes, 134 views, 6 replies. First draft was "The first internet dollar weighs the
  most.", dropped because a verified reply above already said "nothing hits like the first dollar online". Sent "Best
  dollar in Switzerland today." Five words, praises the Swiss detail. The post was edited; replied on the current
  version.
- **Mechanics:** the intent composer opened as a plain "What's happening?" post with no "Replying to", so it was NOT
  used; both replies went through the inline box on the post page (wheel-scroll to it, coordinate click, `type`, DOM
  `.click()` on `tweetButtonInline`). The frame went 800x609 → 621 → 633 across pages and was re-matched each time.
  Both verified on `with_replies` (16:13:07, 16:14:39).
- **ET day now at five timeline replies.**

### Sep 15, 14:09 round (10:09am ET): both lanes, a @paulg plaque and a pause

Read at 14:09–14:20 UTC.

- **Concurrent-run check clean.** Newest Unc reply was 01:16, thirteen hours old. The viewport label flipped to "another
  Claude session set this" on most navigations, as it has for days; nothing new appeared on `with_replies`.
- **Morning note** (13:02, readers on the forehead) had 1 view and no replies. Nothing inbound on notifications except
  likes: **@ArunGopidas liked "A month of procrastinating is just research." at 05:21**, a like rather than an answer.
- **Four praise rows settled as `n`**, all past twelve hours: @tarasshyn (liked), @ArunGopidas (liked), the hand-sent
  @ESCOweb3 row, @UpperClassArmz (liked). Three of the four OPs liked Unc's line and none answered.
- **Reads:** the hand-sent diamonds reply climbed to 224 views and 1 like at 13 hours. Farewell card 115 and 1.
- **Lane A: @paulg, brass plaques "Build Stuff" and "Talk to Users".** Caught at 51 minutes, 25,456 views, 48 replies;
  two reads 90 seconds apart put the current rate near 460/min, still climbing, but past the 20-minute target. "Unc's
  brass plaque just says Nap." Six words, the chair prop as an object. Verified at 14:13:35.
- **Lane B: @kien_hoang18** (76 followers), pausing new Wishlyr features to go find a first customer; the app itself is
  about pausing before you buy. Caught at 14 minutes, zero replies. "Pausing is the hardest feature to ship." Seven
  words. Verified at 14:15:44. The first click landed on the quoted post because the composer sat below the fold of
  the intent dialog; `scroll_to` on the first "Post text" ref, then a coordinate click, fixed it.
- **The intent composer did not prefill `text=`** this round (empty box). Typing with `type` after clicking the box works.
- **No quote or repost.** @EleanorTerrett's newest was 578 minutes old. The fresh CLARITY Act posts were a
  Lummis-versus-Warner exchange (partisan, skipped). Nothing on the venture side under 30 minutes.
- **Skipped:** @NotSoEasyMoney's "hour drive for 5 miles" (138/min, a line was there but the post is a gripe about a
  place), @andruyeung's restaurant story (ends in a sports-betting app), @johnfelix123 on GPs manufacturing urgency (any
  Unc joke implies Unc raises money), @arbitrum tokenized stocks (70 minutes, tickers).
- **Likes:** @paulg (parent), @kien_hoang18 (parent), @ColinGardiner's Chevrolet line, @Securitize, @TokenRelations.
- **The praise lane: fifteen `praise` rows, fourteen settled and usable, eight OP replies.** But the last six settled
  rows went two for six (@Artur_Abra, @jean_ette_li), after six for eight before that. Four straight misses drew likes
  without answers. Worth watching whether the like-no-answer pattern is the lane cooling or noise.

### Sep 15, 02:10 round (10:10pm ET Sep 14): nothing posted, a thank-you liked, an unlogged eleventh reply found

Read at 02:10–02:25 UTC.

- **Concurrent-run check clean.** Newest Unc post was 01:16, 54 minutes old. The viewport label again flipped to
  "another Claude session set this" on most navigations, but nothing new appeared on `from:UncFund`.
- **@jean_ette_li answered a second time: "Preesh!" at 00:17**, five minutes after "Unc crossed out farewell. Wrote
  congratulations.", and liked it. The 00:12 own-thread row is `op` **y**. A thank-you is the close of the exchange, so
  it was liked and not answered, per the @ESCOweb3 precedent of not taking a third line for its own sake.
- **Unlogged 01:16 reply: "Unc hasn't hit diamonds yet, but he keeps digging and the vest stays on"** (15 words). No
  logged round sent it; probably hand-sent. `with_replies` renders it under @VentureCoinist's 00:06 Robinhood Chain quote
  post, and **Luke Martin (@VentureCoinist) liked it at 01:20**, but the status page did not render a parent and that
  post's text has no "diamonds" in it, so the parent is logged as unconfirmed. It sits past the ten-reply ET-day ceiling
  (eleventh reply for Sep 14 ET) and is flagged for Rand on that count only; the line itself is clean, no ticker.
- **@JIsaam liked "127 days straight, day off included." at 16:00 Sep 14**, a day after the send. The row is now
  `n (liked)`; it stays a miss for the `op` count.
- **Reads:** farewell card 84 views and 1 like at three hours. Vending machine 137 and 1 at seven hours. "Older than AI"
  17 and 1. "Unc believes in you" 16. Nothing inbound from @tarasshyn, @ArunGopidas, @UpperClassArmz or @ESCOweb3.
- **No timeline replies**: the ET day is Sep 14 and already over the ceiling. **No quote or repost**: the Following
  board's fresh posts were an impeachment-vote report, a token Dutch auction and a parody-names joke; @ycombinator's
  newest was a 16:49 CLARITY Act advocacy post, nine hours old.
- **Likes:** @jean_ette_li's "Preesh!", @UseCorgi's admitted-carrier pinned post, @HarryStebbings' VC-LP relationships
  post.
- **The praise lane: fourteen `praise` rows, ten settled and usable, eight OP replies**, unchanged. The @jean_ette_li
  exchange is now three messages deep.

### Sep 15, 00:09 round (8:09pm ET Sep 14): @jean_ette_li answered, and the praise lane goes eight for ten

Read at 00:09–00:20 UTC.

- **Concurrent-run check clean.** Newest Unc post was the 23:11 farewell-card reply, 59 minutes old. The viewport label
  flipped to "another Claude session set this" on most navigations, so a parallel session (likely the news check) was
  sharing the pane, but nothing new appeared on `with_replies` before or after the send.
- **@jean_ette_li liked "Unc had the farewell card half signed." and answered "haha fr" at 23:26:42**, fifteen minutes
  after the send. It isn't a Community post, so it showed on `to:UncFund` and in notifications. The row is `op` **y**.
  Her reply already carried a like from @UncFund when this round opened; no logged round placed it, so it was probably
  liked by hand or by the parallel session.
- **Answered at 00:12:15**: "Unc crossed out farewell. Wrote congratulations." Five words, calls back to the card,
  turns the fake-out into the congratulations, no question. "haha fr" is text rather than a wordless laugh, so it was
  treated as an opening, the way "yessirrrr" was on Sep 13. Intent composer, DOM `.click()` on `tweetButton`, "Your post
  was sent." first try; `with_replies` missed it on the first load and showed it after a reload ~30 seconds later. Not
  re-sent.
- **Reads:** farewell card 52 views and 1 like at 61 minutes (the parent went to 2,920 views and 16 replies). "Older
  than AI" 17 and 1. "Unc believes in you" 12. Vending machine 128 and 1 at five hours. Nothing else inbound:
  @tarasshyn, @ArunGopidas, @UpperClassArmz and @ESCOweb3 have not answered.
- **No timeline replies**: the ET day is still Sep 14 and at the ten-reply ceiling. **No quote or repost**:
  @EleanorTerrett's newest was 106 minutes old and about Senate vote counts; the Following board's two fresh posts were
  an airdrop joke and a Hunter Biden interview clip.
- **The praise lane: fourteen `praise` rows, ten settled and usable, eight OP replies.** The misses are still
  @CharlyKeleb and @JIsaam. Lane A is still zero.

### Sep 14, 23:08 round: the tenth reply, a praise pick on a Corgi intern going full time

Read at 23:08–23:20 UTC.

- **Concurrent-run check clean.** Newest reply was 20:13. A 23:00:02 original post, "$500 to $9,999. Decision in a week."
  (unc.fund link card), is the 7:00pm ET scheduled post, not a live round. The 23:07 news check was driving the same pane
  (viewport label flipped to "another Claude session set this") but had posted nothing.
- **Nothing inbound to answer.** Notifications since the last round: follows, a like on the vending machine, and
  **@UpperClassArmz liked "Older than AI. Unc respects seniority."** at 20:47. No reply from him yet, so `pending`.
- **Reads:** casserole settled at 1,399 views and 0 likes. Vending machine 120 and 1 like at ~4 hours, `op` n. "Unc
  believes in you" 10.
- **Lane B: @jean_ette_li**, reposted by @UseCorgi: "I'm sad to announce I'm leaving Corgi after my internship. / To join
  the Marketing Team full time!", after community college and a transfer to UCSD. Caught at 14 minutes, 206 views, 8
  replies. Clean: the "leaving" is a fake-out, not a departure. "Unc had the farewell card half signed." Seven words,
  rewards the fake-out with a prop-ish object, no question, no commitment. Grep found no earlier "farewell". Verified on
  `with_replies` at 23:11:04.
- **The ET day is now at the ten-reply ceiling.** Later rounds tonight post no timeline replies; own-thread answers
  are still open.
- **No lane A** (ceiling), **no quote or repost**: @EleanorTerrett's newest were 43–73 minutes old and about Senate vote
  counts, which is prediction-adjacent and politician-sourced.

### Sep 14, 20:08 round: one praise pick, day at nine

Read at 20:10–20:20 UTC, twenty minutes after the 19:49 round.

- **Concurrent-run check clean.** Newest Unc post was 19:20, 50 minutes old. Nothing new inbound in notifications
  since @Artur_Abra's 17:38 answer, already handled.
- **Early reads:** vending machine 72 views at 58 minutes, "Unc believes in you" 6 at 53 minutes, casserole 1.3K.
- **Lane B: @UpperClassArmz** (853 followers, a builder since 2010): "WE GOT OUR FIRST USER TODAY …. FROM SEO", an
  idea he and his co-founder had "before AI existed". Caught at 3.5 minutes with 5 views and 1 reply. "Older than
  AI. Unc respects seniority." Six words, praises the persistence detail through the age prop. Not a Community post;
  verified on `with_replies` at 20:13:25 after one reload.
- **No lane A.** The day is now **nine** timeline replies, so one remains. The fastest clean parent was
  @therollupco's CLARITY Act changes explainer (154/min, 0 replies), passed because a "last-minute changes" joke
  could read as mocking a contested bill, and @jaixbhatia's Turnstone launch (~45/min), passed on the raised bar.
- **No quote or repost.** @EleanorTerrett's newest post was 179 minutes old; nothing on the board was a fresh drop.

### Sep 14, 19:49 round: nothing posted, and a second hand-sent reply

Read at 19:49–19:52 UTC, thirty minutes after the 19:09 round closed.

- **Unlogged 19:20 reply: "Unc believes in you" on @ESCOweb3's Sep 13 00:58 "Believe…" post.** No logged round sent
  it, since the 19:09 round's last send was 19:16. It was probably sent by hand. It's logged above as `praise`, four words,
  with the `p_*` columns unknown except age. It's @ESCOweb3's second timeline reply this week (Sep 12 17:48), which
  is inside the three-a-week cap. **The day is now eight timeline replies**, so two remain.
- **Nothing inbound to answer.** Notifications have nothing after @Artur_Abra's 17:38 answer, which the 19:09 round
  answered. @theblondebroker followed, and the profile is at 26 followers.
- **Early reads:** vending machine 60 views at 37 minutes (the parent is at 28,806 and 255 replies). The 18:56 popcorn
  quote is at 15 views.
- **Nothing posted.** The Following board inside 60 minutes held @blknoiz06's "trade this free" (a trade call), a
  Morpho vault deposit post (yield, skipped), @relativityspace hardware progress (a brand account with no line
  beyond restating it), and @altryne's two Fable-relationship jokes at 8–18/min. The build-in-public search was
  generic day-N logs. At eight for the day, none of that clears a raised bar. The 19:47 news check had already found no
  fresh drop, so no quote or repost went out.

### Sep 14, 19:09 round: the praise lane goes seven for nine, and an off-playbook quote post

Read at 19:10–19:18 UTC.

- **@Artur_Abra answered "Eight slideshows a day is the milestone." at 17:38, sixteen minutes after the send**: "I need to
  post much more. I will automate all of the 8 in the next days, then I can focus on new TikTok accounts". It's a
  Community post, so it showed only in notifications, not on `to:UncFund`. Liked, and answered at 19:13 with "Unc's
  automation is a sticky note." Verified by the reply's count moving from 0 to 1.
- **The praise lane is now seven OP replies from nine settled rows** (@ESCOweb3, @SebastienEgo, @PKodmad,
  @olivercingl, @not_fanti, @Motion_Viz, @Artur_Abra). The misses are @CharlyKeleb and @JIsaam. @tarasshyn and
  @ArunGopidas are pending. @tarasshyn liked Unc's reply but hasn't answered.
- **Lane A stays at zero OP replies**, though **@kseniam0s liked "Unc is extremely comfortable with $500."** (with
  Rosa Wachuka), so that row is `n (liked)`. It settled at 87 views and 2 likes.
- **The casserole settled at 1,393 views and 0 likes at 113 minutes.** The parent went to 410K views and 892 replies.
  That's ~0.37x the ~3,800/min catch velocity, the second-best lane A view count since Dale.
- **Unlogged 18:56 post: "Unc will be watching with popcorn ready", quoting @andyyy's Hunter Biden interview promo.**
  No logged round sent it (the 17:14 round ended at 17:24 and this one started at 19:09), so it was probably sent by
  hand. It's a quote post, not a reply, so it isn't a ledger row and doesn't count toward the ceiling. **It's flagged
  for Rand**: a named political figure plus "popcorn" sits on the politics and drama lines of the skip list. It
  wasn't deleted, because deleting isn't a round's call. 4 views at 14 minutes.
- **Lane A: @RobinhoodApp, "who taught you about money first?"** Caught at 14 minutes with 16,503 views and 147
  replies. That's a 1,179/min lifetime average, and two reads 47 seconds apart put the current rate at about 350/min.
  There's no ticker and no product, just a human-moment question. "Vending machine, 1979. Kept Unc's quarter." Six
  words, logged as `receipt` because the joke is the dated anecdote. The last @RobinhoodApp reply was Sep 10.
- **Lane B: @ArunGopidas**, day 157 of building in public, "after a month of procrastinating, finally shipped this",
  quoting their first App Store submission. 31 views at 106 minutes with one reply (an app-awards account). "A month
  of procrastinating is just research." Seven words. It's a Community post, verified by the count moving from 1 to 2.
- **Day count (ET): seven timeline replies.** That's past the five-reply "raise the bar and expect nothing" line.
  Both were taken anyway: the Robinhood parent was the one clean fast setup on the board, and lane B is the only
  lane producing conversations. Three remain for the day, and the next rounds should expect to post at most one.

### Sep 14, 17:14 round: the fastest parent ever taken, and a zero-milestone praise pick

Read at 17:14–17:24 UTC.

- **An unlogged 16:30 reply is on `with_replies`**: "Send the deal flow, Unc cuts checks" on @brycent's "The front page of
  venture capital." (15:37). No logged round sent it, so it was probably posted by hand. It is logged above
  and counts toward the day. The `p_*` columns are unknown. It's the second @brycent reply this week (Sep 12
  20:14 was the first).
- **Reads on the 15:19 round at about two hours:** @kseniam0s **45 views and 2 likes** (9x the 5/min
  parent, which went on to 768 views). @tarasshyn praise 19 and 1, and Taras hasn't answered yet (their
  parent has 3 replies, none from them on `to:UncFund`). The three own-thread answers sit at 3 to 6 views
  and nobody has answered them. Nothing new on `to:UncFund` or mentions.
- **Lane A: @vladtenev at four minutes, ~3,800/min.** That beats the previous fastest clean parent
  (@RobinhoodApp's 2,956/min) by about 30%. Robinhood Stock Tokens are getting in-kind redemption and
  voting. The door is Unc misreading "in-kind" as a potluck, which also calls back to the covered dish that
  earned Vlad's follow. No ticker, no price, and Unc doesn't touch the product. **243 views at six minutes**
  is an early read, not a result.
- **Lane B: @Artur_Abra** posted "No big milestone to share" about two TikTok slideshows a day on each of
  four accounts. Caught at four minutes, zero replies. The line does the multiplication and hands the
  milestone back: "Eight slideshows a day is the milestone." **It's a Community post** ("Build in
  Public"), so it was verified by the parent's reply count moving from 0 to 1, not on `with_replies`,
  and its views will be unreadable.
- **Day count (ET): five timeline replies** (kseniam0s, tarasshyn, brycent, vladtenev, Artur_Abra).

### Sep 14, 15:19 round: Rand signed back in, and the owed answers went out

Rand signed the in-app browser into @UncFund after the 15:13 check, and the round resumed. The profile link was `/UncFund`.

- **All three owed own-thread answers went out**, each verified on `with_replies`. @mytwillot's Twillot pitch got "Bookmark graveyard. Unc owns a plot." It praises the graveyard framing and commits to nothing. @Motion_Viz got "Unc wrote that on the legal pad." @PKodmad got "More stamps than Unc. His expired in 2009." The Monday note's other reply is hidden as probable spam and was skipped.
- **Lane A was @kseniam0s** and her founder/VC "whatever you're comfortable with" joke. It's the fastest *clean* comedy setup on the board, but only at 5/min. Faster parents were @RobinhoodCrypto's "green (chain) morning" (price-adjacent) and @RobinhoodApp's checkbook, which quotes "$HOOD Banking" (a ticker). **The row is logged as `thesis` because the joke is the $500.** It isn't a velocity pick in the strict sense.
- **Lane B was @tarasshyn**, whose first AppSumo sale came about two hours after launch. Caught at 18 minutes with zero replies. The row is nine words, so it doesn't count toward the under-eight half.
- **The frame changed mid-round.** The first screenshot reported 600x550, and the viewport was matched to it. The intent composer then reported **800x733**, so the viewport was re-matched. Clicks after that landed first try.

### Sep 14, 15:13 round: still on the wrong account

The profile link was still `/Envnt_io`, so nothing was posted or liked. No row was added. `to:UncFund` has nothing new since 13:10.
The owed own-thread answers (@Motion_Viz, @PKodmad, @mytwillot) still stand. The profile is at 22 followers.

### Sep 14, 13:10 round: signed in as the WRONG account, and the praise lane goes six for eight

The in-app browser was signed in, but as **@Envnt_io** (`twid` u=2064156534431510528, profile link
`/Envnt_io`), not @UncFund. `/UncFund/with_replies` showed a Follow button on Unc's own profile. Nothing was
posted or liked, because either would have come from the wrong account. The reads below are public
counts, taken read-only through `with_replies`, `from:UncFund` and `to:UncFund`, at 13:10–13:15 UTC.

- **@Motion_Viz answered "No podium. Open-sourced it anyway. Unc noticed." within two minutes** (00:18:57):
  "well even if i did not win, here to help people searching for jobs in the current market. so open souce
  is the way". **Unanswered. It's owed an own-thread reply** as soon as a session is signed in as Unc.
- **@PKodmad answered "Your app got its first passport stamp." at 05:02,** eleven hours after the send
  and inside the twelve-hour rule: "ha ha.. it's been to a lot of countries so far". **Also owed an answer.**
- **@olivercingl replied to "Knees filed a complaint." at 00:20**, with no visible text (likely an emoji or
  a GIF). That's the close of the exchange, so it needs a like and not a third line.
- **@CharlyKeleb and @JIsaam never answered.** Both are `n`, past twelve hours.
- **The praise lane is six OP replies from eight usable rows**: @ESCOweb3, @SebastienEgo, @PKodmad,
  @olivercingl, @not_fanti and @Motion_Viz. The misses are @CharlyKeleb and @JIsaam, and @itsusamak stays
  excluded. Lane A is still zero from more than thirty rows.
- **The Monday note went out at 11:49 UTC (7:49am ET)**, not 9am. It had 9 views and 2 replies. One is
  @mytwillot's pitch at 12:06: "Twillot", bookmarks and likes turned into a searchable knowledge base.
  The other reply didn't render. **Both are owed.**
- **Late reads:** @andruyeung 2,550 views and 5 likes at 18 hours. @Teknium 682 and 1, @garrytan 364 and
  1, and "The buried project was the one." 20 and 1.

### Sep 14, 11:24 round: signed out, nothing read

The in-app browser was signed out of X (guest cookies only), so no row above was re-read and none was
added. **The `op` verdicts for @CharlyKeleb, @JIsaam and @PKodmad are now past twelve hours.** The next
signed-in round should settle them, along with the 00:10, 00:12 and 00:17 rows.

### Sep 14, 00:08 round: the praise lane is four for eight, and both of last night's rows got answers

Read at 00:08–00:20 UTC Sep 14.

- **@olivercingl answered "The buried project was the one."** He liked it at 22:56:47 and replied
  "yessirrrr" ten seconds later, eighty minutes after the send. That reply sat under **17 generic
  congrats** replies, the harder test the 19:09 note set up, and it still drew an answer. Answered at 00:12
  with "Unc stood up. Knees filed a complaint." Seven words, a prop, no question.
- **@not_fanti answered "Unc is glad nobody bought it." eight minutes after it went out** (22:15):
  "no still looking for an exit im making another way greater app". The line had misread their plan,
  and they said so warmly. Answered at 00:10 with "Unc loves a founder with a sequel." Six words. It
  doesn't offer to buy, doesn't advise against selling, and commits to nothing. It's a Community post,
  so it was verified by the parent's reply count moving from 0 to 1, not on `with_replies`.
- **The praise lane now stands at four OP replies from eight usable rows** (@ESCOweb3, @SebastienEgo,
  @olivercingl, @not_fanti). Three are still inside the twelve-hour window: @CharlyKeleb to 01:56,
  @JIsaam to 05:12 and @PKodmad to 05:52 UTC. The 00:17 @Motion_Viz row is new. Lane A is still at zero
  `op` replies in more than thirty rows. **This is no longer n=1.** But all four hits came from small,
  active authors, so the account-size effect can't be separated from line quality yet.
- **Settled reads:** @andruyeung **1,921 views and 4 likes at five hours**, @Teknium 547 and 1,
  @garrytan 244 and 1, @naval Jagged 439, and the chair row 10.
- **The 00:17 @Motion_Viz row:** a 21-year-old builder who didn't place top three at a hackathon and
  open-sourced the six-hour build anyway. Caught at 7 minutes with 45 views and 1 reply.

### Sep 13, 22:07 round: replies to Community posts do not show on `with_replies`, which likely explains 02:21

Read at 21:42–22:12 UTC Sep 13.

- **The 22:07 @not_fanti reply went out, and `with_replies` and `from:UncFund` both missed it.** Neither
  showed it at +1, +2 or +4 minutes, and a phrase search for its text found nothing either. But on the
  parent's own page the reply was **there, ranked first under "Relevant"** (status 2099258638657376281,
  22:07:16). The parent is a **Community post** in "Build in Public", which is what the page header says.
- **The 09-13 02:21 @itsusamak parent is a "Build in Public" Community post too.** That was the "said sent
  and never appeared" row. Replies to Community posts seem to be kept off the replier's profile tab and
  out of search, so that reply **probably did send**. It still can't be confirmed: that post page shows
  "5 replies" and renders none of them. The row is relabelled unreadable rather than absent, and it stays
  out of the `op` count, since no answer to it has come in on `to:UncFund`.
- **The rule this adds:** when a send doesn't show on `with_replies` in two minutes, check whether the
  parent page says "Community post". If it does, scroll the parent's replies to verify. Do not re-send.
- **Reads:** @andruyeung 1,440 views and 4 likes at 176 minutes. @olivercingl praise row 5 views at 34
  minutes. The 09-12 @gregisenberg row has kept climbing, to **135 views and 1 like** (it was logged at
  63). **@Teknium liked the legal pad reply himself** at 16:47, per notifications, so that row is now
  `n (liked)`. That is the first OP like on a lane A row since Molly O'Shea. Nothing new came in on
  `to:UncFund`.
- **The 22:07 row's `p_*` columns are send-time numbers.** At the catch (21:47) the parent was 22 minutes
  old with 39 views and 0 replies. By the send it had 72 views and one reply, a "Now keep it up".

### Sep 13, 19:09 round: the best multiple in the file, from reply one on a 43/min parent

Read at 19:10 and again at 21:36–21:40 UTC Sep 13. The session stalled for about two hours and twenty
minutes between the two sends (19:16 → 21:35), so the lane B row went out far later than planned.

- **@andruyeung, "Unc has asked the gate agent 212 times. Still 31C." — 1,400 views and 4 likes at 141
  minutes.** The parent was caught at 13 minutes with 553 views (43/min) and **zero replies**. It then
  went to 34,774 views and 20 replies. That is **~32x the catch velocity**, against a file where almost
  every row since Sep 10 has landed between 0.06x and 1.1x. The four likes are the most on any lane A
  row ever. It is also ten words, the longest reply in two days.
- **What was different is position, not speed.** Unc was the first reply on a post that went on to
  explode. The two biggest earlier results (Dale on @naval, 18 replies ahead; the covered dish, 328) came
  off fast parents; this one came off a slow parent with an empty reply section. **One row. Do not
  write a "be reply one" rule off it** — that is the exact move the velocity band and the cluster both
  made and both regretted. Log `p_repl` carefully and see whether zero-reply catches keep outperforming.
- **Settled reads on the 16:37 and 17:16 rounds:** @Teknium legal pad **494 views, 1 like** (~2.7x the
  ~180/min current rate at the catch). @garrytan **195 views, 1 like** (~0.93x of ~210/min). Neither
  OP replied.
- **Praise rows still pending:** @JIsaam 4 views, @PKodmad 8 views (their parent went from 1 reply to
  2, but nothing on `to:UncFund`), @CharlyKeleb unchanged. Nothing new on `to:UncFund` since
  @SebastienEgo's 05:39 "Let's connect". Verdicts are due after 05:52 UTC Sep 14.
- **The 21:36 @olivercingl row was planned for 19:45.** At the 19:16 catch the parent had 178 views
  and 7 replies at 34 minutes. The stall pushed the send to 174 minutes, by which point it had 531 views
  and 17 replies. The `p_views`/`p_age`/`p_repl` columns are the send-time numbers. It is a
  1,990-follower founder's first paying customer after two years. With 17 generic "congrats" replies
  above it, this is a harder test of the lane's mechanism than the 0–3-reply parents it has used so far.
- **The lane B send took 50 seconds to show on `with_replies`.** The first load after "Your post was
  sent." did not list it, and a reload 25 seconds later did (21:36:35). It was not re-sent.

### Sep 13, 17:16 round: opened four minutes after the last one closed

Read at 17:16–17:52 UTC Sep 13. The round began four minutes after the 16:37 round's 17:12 send, and
that round had already committed, so this was a back-to-back slot, not a concurrent run.

- **Nothing was two hours old to settle.** Early reads only: the 16:41 @Teknium legal pad **214 views,
  1 like at 55 minutes** (the parent was at 19,064). The 17:12 @JIsaam praise row had **3 views at 25
  minutes**. His thread took two more replies, both from a third account, and none from him yet. The
  13:49 own-thread reply was at 8 views and the 13:56 @CharlyKeleb row at 7. Both stay pending.
- **The 17:22 @garrytan row is eight words, so it does not count toward the under-eight half.** It had
  **1 like and 24 views at 15 minutes**, and 37 at 30. The parent climbed from 6,743 at the catch to
  11,980 at 51 minutes. The mode is logged as `self-own` because the joke is Unc's uncle-ness rather
  than a named prop or a misreading.
- **Spacing was broken on purpose for lane A, 10 minutes after 17:12.** The 30-minute default would
  have landed the reply at 41 minutes on a parent that was still climbing. The cluster explanation is
  recorded above as refuted, so the default was kept only where it costs nothing, which is lane B. The
  @PKodmad parent was five hours old and was held until 17:52. **Compare the @garrytan multiple with
  the parent's ~210/min current rate** at the two-hour read before concluding anything about spacing.
- **The 17:52 @PKodmad row was the only reply on the parent.** Its count went from 0 to 1 at the send.
  The account has **11.4K followers**, just above the lane's rough 10K line, and was taken because
  nobody had replied in five hours. Call `op` no earlier than 05:52 UTC Sep 14.

### Sep 13 afternoon: the legal pad took a like inside thirty minutes

Read at 16:38–17:12 UTC Sep 13.

- **Previous round, at about three hours:** own-thread "Unc is waving" **7 views, 0 likes**, no answer
  from @SebastienEgo yet. @CharlyKeleb praise row **6–7 views, 0 likes**, no OP reply yet. His parent
  went from 3 replies to 5, but neither new one is an answer to Unc on `to:UncFund`. **Both stay
  pending under the twelve-hour rule**, not `n`.
- **The 09-13 03:36 chair row finished at 8 views.** The @naval Jagged row is at 429 and
  @SebastienEgo's praise row at 54 views and 3 likes.
- **The 16:41 @Teknium row had 120 views and 1 like at 27 minutes.** That is already more than any
  lane A row since the 01:43 @naval reply. The parent went from 6,956 views at the catch to **14,310
  at 63 minutes**, so it roughly doubled after the catch, like the Sep 9 picks did. An early read like
  this is not a settled number. Read it again after 18:41 UTC.
- **The 14:00 UTC Sunday morning note had 3 views at two and a half hours.** Saturday's 21:00 post
  had 26. Nobody replied, so there was nothing to answer in the own thread.

### Sep 13 morning read: the praise lane is two for two, and the chair reply got four views

Read at 13:46 UTC Sep 13, after Rand logged the in-app browser back in. (An earlier 13:43 attempt
found the session signed out, and nothing was read then.)

- **@SebastienEgo replied to Unc.** At 05:39 UTC he answered "Thirty-eight is early. Unc started at
  fifty-five." with "Let's connect", six hours and twenty-two minutes after it posted. The reply also
  finished at **51 views and 3 likes**. That is the best like count on any row in this file, on the
  lane that is supposed to score badly. Answered at 13:49 with "Unc is waving. That's how he
  connects." It is seven words, commits to nothing, and has no follow, no DM and no question.
- **So both settled `praise` rows have now earned an OP reply: @ESCOweb3 and @SebastienEgo.** The
  01:39 round called @SebastienEgo a settled `n` at four hours. That was wrong: the answer came at
  six. **Wait at least twelve hours before marking a `praise` row `n`.**
- **"Chair. Lights off. Vest still on." got 4 views in ten hours.** Its parent went on to 132K views
  and **1,314 replies**. That is 0.004x its velocity at the catch, the worst multiple in the ledger.
  The six lane A rows since Sep 12 17:46 have **zero likes between them**. The praise row posted in
  the same stretch took 3 likes and a conversation.

**The 09-13 02:21 row is now CONFIRMED ABSENT and is struck from every count.** It was checked again
at **+80 minutes** on both `with_replies` and `from:UncFund` and is on neither. `tweetButton` had
returned "Your post was sent." and the parent's reply count moved 1 → 3, but eighty minutes is far
past the sixteen seconds the @naval reply took from the same session, the same composer and the same
click method. It was **not re-sent** — a double reply to a 42-follower account is the thin-repeat
pattern that earned the @Trace_Cohen block, aimed at exactly the account type lane B needs. Full
analysis in `08-reply-playbook.md` under "The send that said sent and never appeared". **The praise
lane therefore stands at TWO usable rows, not three**, and "Your post was sent." is no longer
sufficient verification on its own.


### The @naval row settles at 400, which is 0.15x — and the rule of thumb misses again

Read at 03:41 UTC Sep 13, two hours in: **400 views, 0 likes, `op` n**, having moved 311 → 394 → 397
→ 400 across the second hour. It is done. Against the parent's ~630/min current rate at the catch the
prediction was 570 to 950; against the 2,745/min lifetime average it was thousands. **It landed at
0.15x of the current rate**, back in the 0.06-to-0.34x band that has held on nearly every row since
Sep 10. The @notthreadguy row's 1.1x last night looks like the outlier rather than a return to form,
which is exactly what the note under it warned against reading too quickly.

Also worth recording: **the two fastest parents the account has ever taken are now one row apart in
velocity and two orders of magnitude apart in outcome.** Dale on a 1,835/min @naval parent returned
2,745 views; Jagged on a 2,745/min @naval parent returned 400. Same target account, same mode, both
seven words, three days apart. Whatever drives reply reach, parent velocity is not it — or not it any
more.

### The rule of thumb held for the first time since Sep 10, on the E*Trade row

**@notthreadguy: 177 views at 3h20m on a parent running ~160/min at the catch — 1.1x**, squarely
inside the 0.9-to-1.5x band that has missed on every row since Sep 10 00:22. Five straight rows came
in between 0.06x and 0.34x; this one did not.

Two things it is worth being careful about. It is **one row**, and the 09-11 note's reading — that
the band is really a description of parents above ~1,000/min — is not overturned by a 160/min parent
landing in it, it is just complicated by it. And this round's other row, the praise pick, is at 15
views on a 56/min parent (0.27x at 2.3 hours) and still early. **Do not promote 1.1x back into a rule
on the strength of one good row.** That is precisely the mistake the file has now made twice, with the
velocity band and with the cluster.

### The cluster hypothesis just took its hardest hit, from the round that violated spacing

Read at 22:10–23:20 UTC Sep 12. **@gregisenberg finished at 63 views on an ~85/min current parent —
0.74x, the best multiple the ledger has recorded since Sep 10 00:22.** It was posted *two minutes*
after the 19:12 own-thread reply, the spacing violation the 19:08 round flagged against itself and
predicted would read "near a tenth" if clustering were real.

It did not. It read three-quarters. **The prediction was written down in advance and it failed**,
which is the useful kind of failure. Taken with the 09-11 row (0.31x, four and a half hours clear of
any neighbour), spacing now looks like the wrong variable twice over: the tightest-spaced reply in
the file scored best and a well-spaced one scored poorly. The live reading stands as the 09-11 note
left it — the 0.9-to-1.5x rule of thumb is a description of two very fast parents, and everything
below roughly 1,000/min scatters — but **the cluster explanation should now be treated as refuted
rather than open.** Keep the thirty-minute default anyway, because it costs nothing; stop attributing
weak rows to it.

The rest of the reads: @alexisohanian 14 (0.27x of ~51/min), @MartinShkreli 82 (0.11x of 735/min),
@ESCOweb3 praise 22 with a like and the OP reply, own-thread 12 with a like and the OP reply.
**@brycent, the concurrent run's 15-word thesis reply, finished at 7 views on a 44/min parent —
0.16x, and the worst row of the day.** It is the longest reply of the six and the only `thesis` one.

### `op` is now two rows, both @ESCOweb3, and both came back inside four minutes

Read 20:10–20:20 UTC Sep 12.

- **"Thanks UNC" came three minutes after Unc's line, not eighty.** Unc's "I'm proud of you" posted
  at 17:48:23 and @ESCOweb3 answered at 17:51:06 — 163 seconds. The 19:08 round recorded the gap as
  eighty minutes. The correction matters: a three-minute turnaround is a person sitting in their
  notifications, which is a property of the *account* being small and engaged, not of the line being
  good enough to rediscover later. It strengthens the praise-lane read rather than weakening it.
- **He replied a second time, so the 19:12 own-thread row is `op` y as well.** "Anytime. Unc is
  cheering, seated." drew 😂😂😭😭 at 19:18:14, four minutes after it went out. One four-word `praise`
  reply has now produced a two-exchange conversation.
- **Not answered, deliberately.** A wordless laugh is the close of an exchange, not a prompt. A third
  Unc line there would be getting the last word for its own sake, which is the needy shape the
  no-questions rule exists to prevent. Liked it instead.

**Previous-round timestamps corrected.** The three replies logged as 17:44 / 17:46 / 17:54 actually
went out at **17:46:28, 17:48:23 and 17:56:20**. Views at roughly 2.4 hours: 10, 21 and 74, each a
little above the 19:08 round's early reads and each still near a tenth of parent velocity. The
@gregisenberg row reads 39 views at 60 minutes; its two-hour read is still due after 21:15 UTC.

**The 09-12 20:14 @brycent row was posted by a concurrent run, not by the 20:09 round.** It is logged
here because every reply belongs in this file regardless of which session sent it, but its `p_views`,
`p_age` and `vel` are this round's sweep numbers taken three minutes before it was sent, not that
round's own catch numbers. Treat the targeting columns on that row as approximate.

### `op` is no longer zero. Four words did it, and the shortest reply ever did worst.

**@ESCOweb3 replied "Thanks UNC" to "I'm proud of you" eighty minutes later.** That is the **first
original-poster reply in the ledger's history**, across nineteen filled rows. It also took the round's
only like. The reply was **four words**, mode `praise`, on the *slowest* parent of the three posted in
that ten-minute window (15 views/min, versus 80 and 735).

This lands directly on standing question 3, and it lands where the suspicion said it would:
**`praise` earns `op`, and it does so on velocity that targeting would have thrown away.** Every
reply in this file that chased velocity — the 2,956/min duck, the 1,835/min Dale, the 735/min
Shkreli row below — got views and zero conversation. "I'm proud of you" got seventeen views and a
reply from a human being. The two outcomes are not measuring the same thing, and the ledger has spent
nineteen rows optimising the one that does not compound.

Answered at 19:12 with "Anytime. Unc is cheering, seated." — five words, keeping the exchange open and
committing to nothing, per the praise-don't-commit rule.

**What to change, provisionally, and what not to:** do not drop the velocity rule, which is still the
best-evidenced thing here for *views*. Do add a second lane. On a thin board, a warm four-word `praise`
reply to a small motivated account is now a legitimate pick rather than a consolation prize, and it
should be logged as such so the `op` column can accumulate more than one row. One observation is not a
rule — this is exactly the trap the velocity rule of thumb fell into — but it is the first row in the
file where the highest-value outcome actually occurred.

**The 17:44 cluster is the counterweight and it is brutal.** Three replies went out inside ten minutes
(17:44, 17:46, 17:54) and the five-word @alexisohanian reply landed at **7 views** at 84 minutes,
against a rule-of-thumb prediction of 45 to 75. That is **0.09x** its parent's current rate — the same
tenth the Sep 10 afternoon cluster produced. The 39-hour silence before it was supposed to make it the
cleanest cluster test available; instead the round contaminated its own test by firing twice more
within ten minutes. The Shkreli row (66 views on a 735/min parent, 0.09x) matches exactly. **Three of
three in that window came in at roughly a tenth.** The cluster hypothesis, which the 09-11 row had
demoted, is back on the table — and this time the spacing violation is in the same session's own log.

**Keep replies thirty minutes apart. This round did 19:12 and 19:14, which is a violation**, mitigated
only in that the 19:12 reply is own-thread (lane 1) rather than a timeline reply. Read both no earlier
than 21:15 UTC Sep 12; if the @gregisenberg row also comes in near a tenth, spacing is confirmed as the
dominant effect and the round structure itself has to change.

**09-12 17:44 is the shortest reply the account has ever posted: five words.** Previous shortest was
six ("Unc shimmed the deck. Architecturally sound."). It went out after a **39-hour gap with no
timeline replies at all** — the longest quiet stretch since the account started replying — so it
carries no cluster contamination whatsoever. That makes it the cleanest cluster test available: the
previous Unc reply was 2,341 minutes old. Parent was @alexisohanian's "It's @ATHLOS week here in
London", 1,601 views at 20 minutes, one existing reply. On the rule of thumb the average rate (80/min)
predicts ~70 to 120 views and the current rate (~51/min) predicts ~45 to 75. Read no earlier than
19:46 UTC Sep 12.

**09-11 02:45 resolved at 105 views, 0 likes, `op` n**, read 39 hours later. That is **0.11x its
parent's lifetime average (988/min) and 0.31x its current rate at the catch (~334/min)**. The row was
posed as a test of which number to target on, and the answer is neither: both overshot badly. Taken
with the chip-shop row (0.34x of 151/min) and Sep 10's afternoon cluster (0.06 to 0.17x), **the 0.9 to
1.5x rule of thumb has not held once since Sep 10 00:22.** Four of the five rows since then sit
between 0.06x and 0.34x, on parents ranging from 63/min to 2,956/min. The cluster explanation cannot
cover this row — the previous Unc reply was four and a half hours earlier and the next was 39 hours
later — so **the cluster hypothesis is now the weaker candidate.** What changed on Sep 10 was not
spacing. The two rows that hit 0.9x+ (Dale 1,835/min, covered dish 1,414/min) are also the only two
above 1,400/min. The live reading is that the rule of thumb is not a rule at all: it is a description
of two very fast parents, and everything below roughly 1,000/min returns a tenth to a third
regardless of spacing, length or account type.

**09-11 02:45 was the first row with the parent's CURRENT rate logged next to its average.** The
`vel` column is views over age, which is the lifetime average: 988/min. Two reads on the post page 84
seconds apart (34,469 then 34,937) put the rate at the catch at about 334/min. The 00:09 round said
past twenty minutes the two can differ by 5x, and here they differ by 3x. On the rule of thumb, the
average predicts roughly 900 to 1,500 views and the current rate predicts roughly 300 to 500. Where the
row lands says which number to target on. This is a reading of a reply that was taken on its merits,
not a designed test. It is also the account's first reply on a crypto-influencer parent since Sep 6.
Read it no earlier than 04:45 UTC Sep 11.

Re-read at 02:40 UTC Sep 11: chip shop 67 at 264 minutes (0.44x, up from 51 at 120), duck 424, shimmed 36,
Devin Pops 12 (still void). No original poster has replied to any of them.

**`op` was zero across every filled row, fourteen deep, until 09-12 17:46 broke it (see above).** Before that, nothing inbound at all since @jdtoelle
on Sep 9; `to:UncFund` still holds only him and @ESCOweb3.

**The 09-10 22:16 cluster test landed in between: 51 views at 120 minutes, 0.34x its 151/min parent.**
That is three times the afternoon's rate (0.06 to 0.17x) and a third of the 0.9 to 1.5x rule of thumb,
so it neither confirms nor rules out the cluster. It is also thirteen words on a person's account, so
it separates nothing on length or on brand accounts either.

What the row does show, read against Sep 9: **the rule of thumb has only ever held above about
500/min.** The mid-velocity rows scatter widely: 239/min returned 0.96x, 81/min 0.3x, 54/min 2.1x,
32/min 2.9x, and now 151/min 0.34x. A sub-200/min parent's multiple is mostly noise at n=1, so a
single reply cannot settle the cluster question. Stop designing one-reply tests. Keep replies at least
thirty minutes apart by default, which costs nothing, and let the question answer itself across a week
of spaced rows.

Later reads at 00:17 UTC Sep 11 moved the rows above to their current values: duck 382, shimmed 35,
vests 13, mower 9, Dale 2,745, and co-located 126. The co-located row's aria-label now reads **1 like,
down from 2**. It is logged as read. A withdrawn like is the likeliest explanation, but that is a guess.

**09-10 22:16 is the cluster test the Devin Pops reply was meant to be.** It went out 95 minutes after
the previous Unc reply, and nothing else went out within thirty minutes of it. The parent is clean, text
plus a photo, and was the fastest clean post on the board. By the rule of thumb it should land at about
135 to 225 views. If it does, the four-in-32-minutes cluster is the best explanation for this
afternoon's tenth. If it lands near 15, the cluster is ruled out, and brand-account reply sections or
length move up the list. Read it no earlier than 00:16 UTC Sep 11.

The afternoon rows were re-read at ~22:20 UTC, six hours in, and are still at about a tenth of parent
velocity: duck 351 (0.12x), shimmed 33 (0.17x), forty vests 12 (0.06x), riding mower 9 (0.09x). They
barely moved after the two-hour mark, so the 18:15 read was not early. It was final.

**09-10 20:41 is VOID for every analysis: the parent was deleted.** Molly O'Shea liked Unc's reply at
20:43, ninety seconds after it went out, and then deleted the Devin Pops post itself. By 20:50 her profile
and replies tab had no trace of it and a Latest search for "Devin Pops" found only one stranger's reply
under the dead id. Unc's reply is orphaned at 3 views. This means **the cluster hypothesis is still
untested**. The reply that was supposed to test it no longer has a parent to ride. The OP like is real
and is the first OP engagement of any kind on a timeline reply. It is logged as `n (liked)`, not `y`,
because `op` counts replies. Not re-replied: there is no live post, and a repost would make a third
reply to her this week, over the cap of two.

**Sep 10, ~18:15 UTC read: every reply today landed at about a tenth of the rule of thumb.** Duck: 258
views on a 2,956/min parent (0.09x). Shimmed: 22 on 199/min (0.11x, read at 113m; 27 at 292m, so 0.14x). Forty vests: 9 on
203/min (0.04x). Riding mower: 8 on 95/min (0.08x). Sep 9's top four ran 0.9 to 1.5x. There are three
candidate causes, and they can't be separated yet:
1. **The cluster.** Four replies in 32 minutes got the account down-ranked for the afternoon.
2. **Brand accounts** (@RobinhoodApp, @a16z) rank a twelve-follower reply lower than people do. But
   @Teknium and @sweatystartup are people and did no better.
3. **Length.** All four were six to eight words. Dale was seven words and returned 1.48x, though.

Only the cluster covers all four rows. The 20:41 reply went out four and a half hours after it, so it
is the first test. If it lands near 0.9x of 63/min (~55 views), the cluster was the cause. If it also
comes in near a tenth, look elsewhere.

The 16:35 @ESCOweb3 row was not logged by whichever session posted it. It turned up on
`from:UncFund` and is counted toward the day's ceiling. It is a four-word reply on a Space hosted by
an account already in Unc's orbit.

**09-10 16:17 is the shortest reply yet at six words**, on the only clean parent above 100/min left on
a thin midday board. Early reads at ~16:18 UTC, all far too young for the two-hour rule and left out of
the table: the Robinhood duck at 49 views after 13 minutes, forty vests at **4 views after 26 minutes**
and the riding mower at 6 after 29. The forty-vests number is worth watching: it sat under a 203/min
@a16z parent, and the other @a16z reply (CRM, 1,047/min) is already the one outlier under the velocity
rule of thumb. If it finishes far below ~200, @a16z's reply section may rank differently from a
founder's, and @a16z should be weighted down as a target.

Blank cells in the historical rows are genuinely unknown and are left blank rather than estimated.
Rows from here on get filled completely.

**09-10 16:05 is the fastest clean parent ever taken: ~2,956 views/min at four minutes.** A seven-word
reply on it is the length arm's best-placed test yet. By the rule of thumb below (eventual views at
0.9 to 1.5 times parent velocity on fast parents) it should land somewhere in the 2,500 to 4,500
range. If it comes in far under that, the rule of thumb is wrong, or a brokerage brand account's reply
section ranks differently from a founder's. The 15:45 and 15:49 rows were only 15 to 20 minutes old
at this round and are still unread. The 09-09 23:59 like count moved to 2 (Sofi z, ~15:28 UTC Sep 10).

**09-10 00:22 is the first reply under eight words the account has ever posted.** Seven words, on
the second-fastest parent ever caught (1,835 views/min). Every prior row is 12-21 words. This is the
length arm's first real data point and it was deliberately placed on a high-traffic parent so the
result means something either way — a short reply that dies on a 1,835/min thread is informative;
one that dies on a 30/min thread is not.

**Reading the filled rows: `vel` is doing better than `p_views`, and ratio is dead.** @vladtenev at
1,414/min behind **328 existing replies** took the round's only like; @MollySOShea at 81/min with
**zero** existing replies took eight views and nothing, the same round. @MartinGTobias at 32/min
returned 59 views and @Jason at 239/min returned 54 — the one place velocity has NOT separated them,
and both are mid-table. The clean split is at the top of the range, not across it.

**`op` is still zero across every row.** Nine consecutive replies, no original poster has answered.
The one inbound conversation the account has ever had came from @jdtoelle, a *stranger reading the
thread*, not from the OP — which suggests the reachable outcome at this size is the third-party
reply, not the OP reply. Worth watching before more effort goes into chasing `op` specifically.

### Sep 10 read: the seven-word reply is the best result the account has ever had

Measured at 14:35 UTC Sep 10, fourteen to twenty-four hours after the Sep 9 rows went out.

**@naval, "Unc's Einstein is Dale, two doors down." — 7 words, 2,717 views, 2 likes.** Previous best
by views was the @vladtenev covered dish at 2,022, which was itself last night's record. The two best
replies ever are both on the two fastest parents ever taken.

**Question 2 (does `vel` predict `views`) now has a real answer, and it is yes.** Sorted by parent
velocity, the filled rows run: 1,835/min → 2,717; 1,414 → 2,022; 588 → 532; 239 → 221; 54 → 112;
32 → 92; 81 → 24. On the top four, **a reply's eventual views land at roughly 0.9 to 1.5 times its
parent's views-per-minute at the catch.** That is a usable rule of thumb for deciding whether a parent
is worth taking. The one clear outlier is the @a16z CRM reply (1,047/min at 4 minutes, 192 views),
which suggests a very young parent's velocity overstates how long it keeps climbing.

**Question 1 (length) has one clean pair and it does not separate yet.** Dale (7 words) returned 1.48
views per unit of parent velocity; Communacopia (18 words) returned 1.43. Same reach per unit of
traffic, one extra like. Short replies are not reaching worse, which is enough to keep putting half
the replies under eight words. Sep 10 added one more at seven words and one at exactly eight.

**`op` is still zero across eleven filled rows.** Two replies on the covered-dish reply are counted but
do not render and do not appear in `to:UncFund`, so their authors are unknown; neither is @vladtenev
as far as any surface shows.

## Standing questions this is being collected to answer

1. Do replies under eight words outperform two-and-three-line replies on views, likes and `op`?
2. Does `vel` predict `views` better than `p_views` alone? The velocity rule rests on a single
   observation so far — a 140-view parent at five minutes returning 97 views, beating parents of
   2,800 to 9,700 — and one observation is not a rule.
3. Which `mode` earns `op` replies? Suspicion is `praise` and `react`, because both are easy to
   answer, and `thesis` is worst because it closes the exchange rather than opening it.
4. Does the like rate separate comedy from the old thoughtful style once targeting is finally held
   constant? Both sit at 0.50 and neither number means anything yet.

### Sep 15, 2pm ET round: signed out, nothing read

The in-app browser was signed out of X again (sign-in page on x.com/home), so no row was re-read and none was
added. The @kien_hoang18 and @SashaMagicSpace praise rows stay pending under the twelve-hour rule; the @arbitrum
row and the morning note thread are unread since the 12:09 round.

### Sep 15, 4pm ET round: signed out, nothing read

Still signed out (guest Log in / Sign up banner on x.com/UncFund/with_replies). No row re-read or added; pending
reads unchanged from the 2pm note above.

### Sep 15, 6pm ET round: signed out, nothing read

Still signed out (guest Log in / Sign up panel on x.com/UncFund/with_replies). No row re-read or added; pending
reads unchanged from the 2pm note above.

### Sep 15, 6pm-ish ET round (ran late, ~22:40-23:50 UTC): first live round since the sign-out

Rand could not sign in to the Claude in-app browser and signed in to @UncFund in Chrome on the work laptop
instead, then told the run to continue, so this round used the Chrome extension tools. The account was verified
as @UncFund (profile link and Edit profile button) before anything was posted.

Two rows were finally re-measured: @arbitrum took 102 views and 0 likes on a 29K parent, and @SashaMagicSpace
took 54 views and **2 likes** on a 998-view parent. @SashaMagicSpace is the better row on every ratio and it is
the praise pick, which is the pattern the lane predicts; the OP check on it is still due 04:14 Sep 16.

The @outdoorfarmshow row is **not this session's reply**. It was already on with_replies, about nine minutes old,
written in the deprecated twenty-word thoughtful style. Logged for completeness with its source unconfirmed.

**Round 8pm ET Sep 15 (00:09 UTC Sep 16): no rows.** Blocked before the browser — in-app browser signed out of
@UncFund, Chrome extension tools denied by the permission classifier. The 6pm round's three replies (@Dkirtley,
@duborges, @therollupco) still have no views/likes read, and the @kien_hoang18 and @SashaMagicSpace `op` reads
remain pending.

**Round 10pm ET Sep 15 (02:09 UTC Sep 16): no rows.** In-app browser still signed out of @UncFund — ninth
routine in a row. The guest profile renders the header but the timeline itself does not load for logged-out
visitors ("Something went wrong. Try reloading."), so with_replies could not be read and no views, likes or `op`
values could be taken. Chrome extension tools not attempted: they are outside this task's approved toolset and
were denied by the permission classifier on the 8pm round.

Still unmeasured, now three rounds stale: @kien_hoang18 praise (`op` was due 02:15 UTC Sep 16, now overdue),
@SashaMagicSpace praise (`op` due 04:14), and the three replies from the ~6pm round (@Dkirtley own-thread,
@duborges praise, @therollupco receipt+oc) which have never had a views/likes read. The praise lane now has
four rows waiting on `op` reads, which is one short of the five-row falsifier check — that check cannot be run
until the account can be read again.

**Round 4pm ET Sep 16 (20:10 UTC): no rows.** In-app browser still signed out of @UncFund. No views, likes or `op`
values could be read; the pending rows listed above remain unmeasured.

**Round 8pm ET Sep 17 (00:10 UTC Sep 18): no rows.** In-app browser still signed out. No views, likes or `op`
values could be read. The praise lane still has four rows waiting on `op` reads (@kien_hoang18, @SashaMagicSpace,
@duborges, plus the @therollupco and @Dkirtley rows never measured), one short of the five-row falsifier check,
and that check stays impossible while every round is blind.

**Round 8pm ET Sep 17 (01:10-01:45 UTC Sep 18): two rows, and the backlog is finally measured.** Rand signed the
in-app browser in mid-run, so this is the first round since Sep 15 that could read or write anything.

Two replies posted. Lane A: @andyyy, 8 words, `prop+oc` — "Unc is zipping the vest all the way." on his
tokenization-announcements post, caught at 33 minutes and 2,668 views, about 81 views a minute, reply 16 of 16.
Lane B: @whysumancode, 7 words, `praise` — "Eleven reviews. That's the number Unc reads." on a day-nine
build-in-public milestone: 7 views, 16 minutes old, zero replies, exactly the slow-parent small-account shape the
lane is meant to buy.

Backlog cleared. @Dkirtley own-thread 5 views, @duborges 92, @therollupco 8, @SashaMagicSpace 67 with 2 likes,
@arbitrum 152. None of those four OPs replied, so all go down `n`. @kien_hoang18 is still the one unread row —
the with_replies scroll did not reach Sep 15 14:15 inside the round's time budget.

**The praise lane now has twelve rows and five OP replies** (@olivercingl, @not_fanti, @Motion_Viz, @Artur_Abra,
@jean_ette_li), against seven that got nothing. That is past the five-row falsifier check Rand asked for, and the
answer is that the lane works: no other mode in this ledger has produced an OP reply at anything like 5-in-12,
and the velocity picks — @paulg at 25K parent views, @vladtenev at 15K, @arbitrum at 5.9K — have produced none
at all. Views and conversation really are coming from different posts.

**Posting mechanics, for the next round.** Two send attempts failed silently before one worked, which is the
old coordinate bug in a new costume. What failed: (1) clicking a Reply button at a coordinate read from a
screenshot taken BEFORE a `scroll_to` — the page reflowed and the click landed on the Grok button; (2) clicking
the composer's submit button by a `ref` captured BEFORE the composer was opened — stale, did nothing, and the
composer cleared anyway. What worked, both times: open the composer, type, take a FRESH screenshot, and click the
Reply coordinate from that screenshot in the VERY NEXT call with no scrolling in between. `ctrl+Return` in the
composer also did not send. Verify on with_replies every time — both failures left an empty composer, and one of
them also bumped the parent's reply count, so neither signal is worth anything.

### Sep 17, 10pm ET round (02:10-02:35 UTC Sep 18): three replies, two lanes, board was unusually good

Second live round in a row — the in-app browser stayed signed in. Scheduler check clean (news check succeeded
01:15, follow queue 00:00, morning note done); newest Unc post on with_replies was 48 minutes old, so no
concurrent run. Followers are now **30**, up from 12 on Sep 15. Following 99.

**Previous round measured, both at ~55 minutes.** @andyyy prop+oc took **109 views, 0 likes** on a 2,668-view
parent caught at 81/min — roughly 1.3x parent velocity, right on the Sep 10 rule of thumb. @whysumancode praise
took **7 views, 0 likes** on a 7-view parent, which is the lane B shape working as designed. Neither OP replied
inside the hour; both go down `n`.

**Lane A: @SpaceX, 8 words, `oblivious`.** "Unc has a dentist appointment in 2028 too." on the Falcon 9 /
NASA StarBurst rideshare announcement — 103K views at 24 minutes, about **4,292 views a minute**, the fastest
parent this ledger has ever recorded. Reply 45 of 44 existing. The oblivious-literal read (treating a 2028 launch
window as a personal calendar conflict) passes the standalone test on its own.

**Second lane A pick, on-chain register: @Cointelegraph, 9 words, `receipt+oc`.** "Candy dish in the lobby.
Stablecoins in the back." on Coinbase teaming with Stablecore to bring custody, trading and stablecoin payments
to community banks and credit unions — 18K views at 52 minutes, 346/min. Rails, not assets; no figure quoted
beyond what the post reports.

**Lane B: @harryjwang, 6 words, `praise`.** "Bug reports are love letters, son." on a sincere open-source
build-in-public post about Suzuri getting community suggestions, bug reports and code contributions — 5 views,
22 minutes old, **zero replies**. Exactly the slow-parent small-account shape the lane hunts, and the praise
names the specific detail (bug reports) rather than the post.

**Two candidates rejected on freshness, and the rule held.** @vladtenev on Robinhood Ventures' $25M into
Crusoe was the single best venture-news setup on the board — 73K views — but `time[datetime]` put it at **119
minutes**, so it was skipped under criterion (a) with no exception made. The relative label read "1h", which is
exactly why the label is never trusted. @andyfang's DoorDash Dot post (YC reposted) was 62 minutes and skipped
for the same reason.

**Also skipped:** @therollupco at 12 minutes (L1 token value-capture framing — asset talk, fails the register's
rails-not-assets rule), @joinfrontier "onchain traders are the new athletes" (trading), @leadlagreport on rate
policy (skip list).

**No repost or quote.** The Cointelegraph drop qualified on substance but was 52 minutes old, past the ~30
minute cap for putting news on Unc's profile.

**Posting mechanics held.** All three sends worked first time using the Sep 17 recipe: open composer, `form_input`
by ref, `scroll_to` the composer, take a FRESH screenshot, click the Reply coordinate from that screenshot in the
very next call. Two of the three needed a second screenshot because the pane rendered black on the first — worth
knowing that a black screenshot means "not settled", not "not loaded", and re-shooting fixes it. Verified all
three on `from:UncFund&f=live`, which renders faster than with_replies (the Cointelegraph reply was missing from
with_replies for a full minute after it had actually sent — post count 153→154 was the earlier tell).

**Round Sep 18, 10am ET (14:09-14:20 UTC): NO ROWS APPENDED — browser signed out of X.** The in-app
browser is logged out of @UncFund, so nothing could be posted and, more importantly, **nothing could be
measured**. Logged-out X now gates the entire timeline: the profile header renders (155 posts, 106
following, 31 followers) but the Replies tab returns "Something went wrong. Try reloading." and the
Posts tab renders zero posts. No view counts, no like counts, no OP check.

**Three rows are still pending and are now overdue:** @SpaceX (09-18 02:22), @Cointelegraph (09-18 02:24)
and @harryjwang (09-18 02:28). They were due at 04:22-04:28 UTC and are now ~12 hours old. The first
round that gets a signed-in session must read all three before doing anything else — they include the
fastest parent this ledger has ever recorded (@SpaceX at 4,292 views/min), so the numbers matter to the
velocity question and to the praise-lane count (@harryjwang would be praise row thirteen).

**Follower count is worth noting while it was visible: 31, up from 12 when the targeting rules were
written.** Following is 106 against 31 followers, a 3.4:1 ratio — still high, but well down from the 5.8:1
that paused following on Sep 9.

**Round Sep 18, 12pm ET (16:09-16:25 UTC): NO ROWS APPENDED — browser still signed out of X.** Fourth
consecutive blocked Unc routine (morning note 13:02, reply round 14:09, follow queue 15:26, this one).
Nothing posted, no mentions answered, no likes. Logging in is not something this routine is permitted to
do, so the block stands until Rand signs the in-app browser back into @UncFund.

**But logged-out X is only PARTIALLY gated, which the last three blocked rounds did not test.** What still
reads without a session, verified this round:
- A stranger's profile renders its recent posts.
- Any individual status page renders full text, the exact Eastern timestamp, the VIEW count and the REPLY
  count. `@harryjwang`'s Suzuri parent read 41 views (was 5 when caught) and reply count 1.
- Unc's own profile renders its five most recent posts (the Replies tab still returns "Something went
  wrong", and the reply LIST on any status page is behind a "See all the replies / Continue to X" gate).

So in a blocked round, PARENT views and PARENT reply counts are measurable; Unc's own reply-level views and
likes are not. Where Unc was the ONLY reply on a parent, that is enough to settle `op` — which is how the
`@harryjwang` row above is now closed as **n** rather than left pending.

**@SpaceX (09-18 02:22) and @Cointelegraph (09-18 02:24) stay unreadable.** Both parents carried 44 and 23
replies when Unc arrived, so a reply count tells us nothing about `op`, and the view counts on Unc's own
replies need a session. If the account is still signed out on the next round, treat those two rows as lost
rather than spending the round hunting them.

**Praise lane, the honest count the playbook asked for.** Twenty-one `praise` rows logged, nineteen
resolved. **Eight earned an OP reply**: @ESCOweb3 (09-12), @SebastienEgo, @PKodmad, @olivercingl,
@not_fanti, @Motion_Viz, @Artur_Abra, @jean_ette_li. That is no longer n=1 and it is no longer a lane
running on faith — it is roughly a 40 percent conversation rate against a velocity lane that has produced
almost none. The falsifier written down on Sep 12 has been cleared. Keep running lane B.

**Round 2pm ET Sep 18 (18:33-18:50 UTC): no rows.** In-app browser still signed out of @UncFund — sixth
consecutive blocked Unc routine today (morning note 13:02, reply round 14:09, follow queue 15:26, reply
round 16:09, news check 17:05, this round 18:33). `x.com/home` renders the "Happening now" sign-in wall and
`x.com/UncFund` renders the guest view with a Follow button, so no view, like or `op` value could be read
and nothing could be posted.

**The @SpaceX (09-18 02:22) and @Cointelegraph (09-18 02:24) rows are now marked LOST**, per the rule the
12pm round wrote down: both parents carried 44 and 23 replies when Unc arrived, so a logged-out parent
reply-count tells us nothing about `op`, and reply-level views need a session. Sixteen hours on, the numbers
would no longer be comparable to the two-hour reads every other row carries. That costs us the read on the
fastest parent this ledger has ever recorded (@SpaceX, 4,292 views/min), which is a real loss to the
velocity question and cannot be recovered.

**One measurement route WAS found and it does not help the ledger.** A logged-out session renders any
individual status page in full, including its view count — Unc's own 12:00pm post read 2 views, the 7pm
Sep 17 evergreen 12 and the 4pm Sep 17 evergreen 10, all without a session. But that only works from a
status URL, and this ledger has never stored the status ID of Unc's own replies; the Replies tab still
errors out for guests and the reply list on a parent sits behind the "See all the replies" gate. **Worth
adding a `url` column when writes resume** — with the reply's own status ID on the row, every blocked round
could still measure views instead of going blind.

No praise pick and no velocity pick. Praise-lane count unchanged from the 12pm round: 21 rows, 19 resolved,
8 with an OP reply.

**Round Sep 18, 9pm ET (01:23-01:35 UTC Sep 19): no rows.** Seventh consecutive blocked Unc routine today
(morning note 13:02, reply round 14:09, follow queue 15:26, reply round 16:09, news check 17:05, reply round
18:33, this round 01:23). `x.com/home` renders the "Happening now" sign-in wall and `x.com/UncFund` renders
the guest view with a Follow button, so nothing could be posted, liked or measured at reply level.

**The own-thread lane is empty today, and not by chance.** There is NO 9am Eastern morning note on the
profile for Sep 18 — the 13:02 UTC premarket run was itself blocked, so the note never went out. The morning
note is what generates own-thread replies, and own-thread replies are the highest-value thing a round does
(455-618 views against 9-57 on strangers). One blocked morning note therefore costs every reply round that
follows it, not just itself. Worth noting for the recovery: the first signed-in morning note should expect a
cold thread rather than a backlog.

**Logged-out view reads, Unc's own queued posts** (the only numbers available this round):
| Post | Time ET | Views | Other |
|---|---|---|---|
| "Send it before the weekend." | 09-18 7:00pm | 3 | - |
| "Unc will never be the smartest investor on your cap table." | 09-18 4:00pm | 3 | one unlabelled engagement |
| "Friday. Bed. Decks. PDF." | 09-18 12:00pm | 3 | - (read 2 at 18:33, so +1 in seven hours) |
| "If you're pre-idea, that's fine..." | 09-17 7:00pm | 12 | - |

**ACTION FOR THE NEXT SIGNED-IN ROUND: the 4:00pm Sep 18 post carries one engagement the guest view will not
identify.** The action bar renders "3 Views 1" and the guest DOM exposes the Reply/Repost/Like/Bookmark
labels without their counts, so it is impossible to tell logged out whether that 1 is a reply, a like or a
bookmark. If it is a REPLY it needs an own-thread answer and it is the only own-thread work outstanding.
Check `x.com/UncFund/status/2101038550116671581` first thing.

Praise-lane count unchanged: 21 rows, 19 resolved, 8 with an OP reply.

### Sep 22, 16:09 round (12:09pm ET): both lanes, first signed-in round since Sep 18
- **Lane A, @blknoiz06** (Ansem quoting @orangie meeting him, the person who got orangie into on chain): "Unc's was a bank teller named Gary. 1987." 8 words. Caught at 7.5 min, 26.1K views, ~3,480/min, 58 replies. Tagged `+oc` loosely: on-chain parent, no rails content, nothing about assets.
- **Lane B, @nickvasiles** (1 month of runway to Orgo joining YC; worked out of an electrical room under the stairs): "Electrical room under the stairs to YC. Beautiful." 8 words. Caught at 2 min, 72 views, 0 replies. **Note: 16K followers, above the ~10K lane B guide** — taken because the detail was ideal and the parent was brand new with zero replies. Judge on `op`.
- Morning note ("grey runners to a board meeting") had no replies; mentions had nothing new.
- **Double-send scare, no harm:** with_replies lagged ~30s after the first click, so the Ansem reply was re-filled and clicked a second time. X rejected the identical text and only one reply exists (status 2102430351734010190). Lesson: wait ~10s and check the thread itself before concluding a send failed.
- Praise-lane count: 22 rows, 19 resolved, 8 with an OP reply (this row pending).

### Sep 22, 18:09 round (2:09pm ET): both lanes, plus the second OP reply in two rounds

**The 12:09 praise pick earned an OP reply, and it came back inside two hours.** @nickvasiles — the
Orgo founder whose Series-A-adjacent YC post Unc answered with "Electrical room under the stairs to
YC. Beautiful." — replied "beautiful" with a photo of the actual electrical room, and liked the reply.
That row closes **op = y**. The velocity pick beside it (@blknoiz06, 3,480 views/min, 58 replies
deep) took 26 views, 2 likes and no conversation. Same pattern as Sep 12: the slow parent bought the
exchange, the fast one bought nothing.

Worth noting what the two picks actually returned on views: the praise pick on a 36/min parent took
**69** views and the velocity pick on a 3,480/min parent took **26**. That is the second time a lane B
pick has out-reached a lane A pick outright, which was not the prediction when the lane was written —
lane B was expected to score badly on views and buy conversation instead. Being one of two replies on
a small thread is apparently worth more than being reply 59 on a huge one, on both metrics.

**Own-thread answer, posted first and fast:** "Frame it, son. That room did the work." (8 words), under
Nick's photo. Keeping the exchange open is the whole point of earning it, so it went out before either
timeline pick.

**Lane A, @ycombinator:** the Firecrawl $75M Series B congrats, caught at 24 minutes and 3,882 views
(162/min) behind 5 replies. Reply: "Unc printed the web once. Took all afternoon." (8 words, `receipt`
— confidently wrong about the technology, age prop, no comment on the round size). A library joke was
available from the Alexandria detail and was deliberately left alone: @heyraven_ai had already posted
"the internet needed a library card" under it, and any version Unc wrote would have read as a dig at
the product rather than a self-own.

**Lane B, @MorganVonDruitt:** "Every builder has this screenshot" — Dipity.studio live, first paying
user, with a Stripe chart showing **$43.50** gross volume. 7 minutes old, 3 views, 0 replies, tiny
account. Reply: "$43.50 is the best number on that chart." (8 words).

**The number was the reply, and it was nearly the wrong reply.** First draft was "$43.50." as the whole
punchline, which is absurd specificity exactly as rule 2 asks for — and which a founder could read cold
as a jab at how small the number is. The prime directive settles it: any chance of anger means rewrite.
"the best number on that chart" makes the praise unambiguous while keeping the specificity. **Rule for
next time: when the specific detail is someone's own small number, the line has to carry the praise
explicitly. Specificity and warmth are not the same axis.**

All three replies were 8 words. That is now four consecutive 8-word replies across two rounds, so the
short arm is getting filled; what it still lacks is any reply under six words to separate "short" from
"one sentence".

**Quote post (news drop):** @ycombinator's Firecrawl announcement, quoted at ~18:14 UTC with
"Congratulations to the Firecrawl founders. Unc read the whole thing with his readers on his forehead."
Parent was 25 minutes old, inside the 30-minute cap. Second quote/repost of the day (the 13:00 news
check did the a16z Academy via @MollySOShea), so two of four used.

**Praise-lane count: 23 rows, 20 resolved, 9 with an OP reply.** Roughly 45 percent conversation rate.
The lane is working and the Sep 12 falsifier stays cleared.

**Mechanics, one thing worth writing down:** `computer type` reached the composer on all four sends and
`aria-valuenow` confirmed non-zero each time, but the FIRST click at a measured rect missed twice — once
on Nick's thread and once on Morgan's — because the page scrolled between the `getBoundingClientRect()`
read and the click. Both times the composer simply stayed empty or the Reply button stayed put, with no
error. The fix both times was re-measure, re-click. This is the same "the layout moves" finding already
in the playbook; it is still the single most common way a send silently does nothing.

### Sep 22, 19:40 manual run: YIELDED, no rows

Rand ran the round by hand at 19:40 UTC (3:40pm ET). Scheduler check came back with **unc-news-check
`running`** — started 19:03:13Z, `last_activity_at` 19:39:57Z, eleven seconds before the check. That is
a live run, not a hung one, so the 10-minute staleness bound does not apply, and at 37 minutes in it is
far outside the 2-minute window that would let a higher-priority routine proceed. Yielded per the rule:
nothing touched in the browser, nothing posted, nothing liked.

Worth noting this was the right call for a second reason. The 18:09 round finished at 18:17 with three
replies inside six minutes; a second round starting 83 minutes later would have been fine on its own,
but running it on top of a live news check is exactly the two-runs-one-session collision that on Sep 9
looked like a platform-wide write block and cost a day of misdiagnosis.

Nothing outstanding was dropped: the 18:09 round already answered the only own-thread item
(@nickvasiles), the mentions tab was empty, and the three rows appended at 18:11/18:13/18:16 are not
due for a view read until roughly 20:15 UTC. The next scheduled round picks them up.

Praise-lane count unchanged: 23 rows, 20 resolved, 9 with an OP reply.

### Sep 22, 22:09 round (6:09pm ET): nothing posted, the day is four replies past the ceiling

**Rand hand-posted six timeline replies between 21:49 and 21:58 UTC, eleven to twenty-two minutes
before this round opened.** They are logged above with what could be recovered (text, target, age,
views); parent velocity was not captured because the round arrived after the fact. Targets were
@asdhas9082, @ESCOweb3, @RobinhoodCrypto, @garrytan, @sama and @stanleefounder.

That puts the day at **14 timeline replies against a hard ceiling of 10**. The ceiling is not a
target to fill, so this round posted nothing on the timeline. There was no judgement call to make:
eight logged plus six hand-posted is past the limit before the round starts, and the rule that
says to raise the bar at five or more resolves to silence at fourteen.

**This is worth flagging to Rand rather than just absorbing.** The scheduled rounds pace themselves
against a count they read off `with_replies`, so a hand-posted burst is invisible until the next
round loads the profile — and by then the budget is already spent. Two of the six were the same
line, "Unc is proud of you", sent to @asdhas9082 and @ESCOweb3 ninety seconds apart. That line was
already marked spent in the playbook after Sep 12, and two identical replies to two strangers inside
two minutes is the exact repeated-template shape the cadence rules exist to avoid. Nothing to undo
and no harm visible, but if the hand-posting continues the rounds need to know about it in advance.

**Rand's picks did find reach the rounds have not been finding.** @stanleefounder took 210 views in
twelve minutes and @RobinhoodCrypto 351 in nineteen — both far above anything this account's
scheduled velocity picks returned today. Worth reading properly rather than dismissing on process
grounds: those two parents were live and large at the moment of catching them.

**Previous round's numbers, read at ~2h20m:**
- @SnorkelAI ("Unc thought Snorkel sold swim gear. Congratulations anyway.") — 32 views, 1 like from
  @ColemanEntringer. No OP reply.
- @roywass_ ("You watched instead of explaining. That's the skill.") — **the OP liked it** but did
  not reply. Community posts do not surface in `from:UncFund` search or on `with_replies`, so views
  are not readable; this is the second Community-post row with no view number and they should
  probably stop being taken as lane B picks for that reason alone.
- @MorganVonDruitt own-thread ("Unc just sat up in the chair.") — 2 views, unsurprising for a reply
  three deep in a tiny thread.

**Drift on older rows, for anyone reading the length question later:** the Sep 22 replies kept
climbing after their 2h read. @nickvasiles 69 to 129, @ycombinator 50 to 85, @blknoiz06 26 to 31,
@MorganVonDruitt praise 8 to 10, @brycent 11 to 16. The 2h convention undercounts by roughly half on
the better rows. Not changed here, because changing the read window mid-experiment would break
comparability with every row above — but the bias is real and it is in one direction.

**No OP replies since the last round.** Mentions tab has nothing newer than Sep 17. The only OP reply
of the day, @MorganVonDruitt's "The first of many to come", was already answered at 20:11.

**No repost or quote.** The fourth and last slot of the day stayed open. The list search gave
continuous coverage from 3 to 27 minutes and every candidate failed: @laurashin on diet and
prescription drugs, @JeffWeniger on gold and Treasury yields (price talk), @andyyy replying with
tickers, @MollySOShea and @HarryStebbings posting replies rather than drops. The one real candidate
was @ycombinator at 17 minutes on **Earendil Robotics, autonomous drone interceptors** — a genuine
company spotlight inside the window, and skipped on the prime directive. Defense and weapons are
divisive enough that a warm Unc line under attack drones fails the ten-thousand-strangers test even
though nothing on the literal skip list names it.

Likes: four confirmed by state change, not by screenshot — @stanleefounder (8 to 9),
@sama, @Teknium, and @MorganVonDruitt's "thinking like a coward" post, the last of those chosen
because he followed the account today.

Praise-lane count: 24 rows, 22 resolved, 9 with an OP reply. The @roywass_ row closes `op = n` with
an OP like, so the rate slips to roughly 41 percent. Still well clear of the Sep 12 falsifier.

**Mechanics:** the first like click landed on the heart, showed the hover tooltip, and did not
register — the count stayed at 8 and the testid stayed `like`. A second click at the same measured
centre worked. This is the same first-click-misses behaviour logged at 18:09, and it now looks less
like the page scrolling and more like the first click being eaten as a focus event. **Always verify
a like by reading `data-testid` for `unlike`, never by the screenshot.** Also: `with_replies` failed
to render five of the six hand-posted replies and both 20:1x replies, while
`x.com/search?q=from%3AUncFund&f=live` returned all of them with targets and view counts in one
pass. The search is the reliable way to audit what the account has posted; the profile is not.

### Sep 22, 8:15pm ET round (00:15-00:35 UTC Sep 23): one own-thread reply, no timeline picks

**Scheduler clear.** news-check succeeded at 00:14:43Z (one minute before this round opened, the 7pm
slot running long), follow-queue succeeded 19:47Z, morning note succeeded 14:08Z. Nothing running, so
no yield. Newest Unc post on the account was 2h old, so no concurrent round either.

**The day is still over the ceiling, so no lane A and no lane B.** Sep 22 Eastern closed out at
roughly fourteen timeline replies against a hard ceiling of ten — eight from the scheduled rounds
plus Rand's six hand-posted ones at 21:49-21:58 UTC. This is the third consecutive round (4pm, 6pm,
8pm) to post nothing on the timeline for that reason. The 6pm round already worked the board and
found it thin; this round did not re-run the velocity search, because no line, however good, can be
posted under a blown budget. The next round that can take a timeline pick is the first one after the
Eastern day rolls over.

**What the round did post: the own-thread answer, and it was earned.** @ESCOweb3 replied to Unc at
22:32 UTC with laughing emojis and a heart-hands — the original poster answering, on the "Unc is
proud of you" praise reply Rand hand-posted at 21:51. Answered at 00:22 UTC with **"Unc wasn't
joking. Unc has no material."** (7 words, `own-thread+oc`). The oblivious-literal read: ESCO laughed,
so Unc takes it at face value that he was not making a joke, and the self-own carries the warmth.
ESCO's post was about deliberate pursuit and winning; nothing in the answer touches crypto, but ESCO
is a web3 account so the row carries `+oc` per the register's account test.

**Hand-posted rows now resolved, and they are the story of the day.** Read at roughly 2h30m:

| target | views | note |
|---|---|---|
| @stanleefounder | **2,795** | best-performing reply this account has ever posted |
| @RobinhoodCrypto | **1,185** | second best |
| @ESCOweb3 | 12 | **OP replied** |
| @garrytan | 11 | |
| @sama | 10 | |
| @asdhas9082 | 5 | |

Two of Rand's six cleared a thousand views. Every scheduled velocity pick logged this month is in
double or low-triple digits. That gap is now too large to keep explaining away on process grounds,
and it is worth Rand and the rounds looking at the two winners together: @stanleefounder and
@RobinhoodCrypto were both large, live parents caught while climbing, which is what criterion (b)
asks for — the rounds have simply not been finding parents of that size inside the freshness window.
The board the rounds actually see (Following timeline plus four search terms) may be the binding
constraint rather than the picking rule.

**Drift on the rest, re-read this round:** @brycent 11 to 20, @SnorkelAI 32 to 36, @MorganVonDruitt
praise 8 to 10, @MorganVonDruitt own-thread flat at 2. The undercount at the 2h read convention holds
in the same direction as yesterday.

**Praise-lane count: 25 rows, 23 resolved, 10 with an OP reply** — the @ESCOweb3 hand-posted row
closes `y`. Roughly 43 percent conversation rate, still well clear of the Sep 12 falsifier.

**Mechanics, one new failure mode worth writing down.** `form_input` on the reply composer reports
success and leaves the visible box empty with Reply greyed out — but the value IS in React state, and
it merges with anything typed afterwards. The first send attempt produced
`"Unc wasn't joking. Unc Unc wasn't joking. Unc has no material.has no material."` in the composer,
and neither `ctrl+a`+`Delete` nor 90 `Backspace` presses cleared it even with the element confirmed
focused. The fix was to reload the page and use `computer type` alone. **Do not use `form_input` on
X composers; click and type.** Separately, wheel scrolling and `PageDown` both silently do nothing
whenever the emulated viewport and the reported coordinate frame differ — and the frame drifted on
almost every navigation this round (609, 621, 633, 645, 657, 670, 683, 696, 709, 723, 737). Re-reading
the frame off each screenshot and resizing to match before clicking is not optional; it was the
difference between a dead page and a working one four separate times.

### Sep 22, 10:09pm ET round (02:09-02:30 UTC Sep 23): nothing posted, fourth round under a blown budget

**Scheduler clear.** news-check succeeded 01:09:21Z, follow-queue 00:19:00Z, morning note 14:08:42Z. Nothing
running, so no yield. Newest Unc post was 1h old (Rand's hand-posted @andyyy reply at 00:26:51Z), so no
concurrent round either.

**No lane A and no lane B: the Eastern day closed at 15 timeline replies against a ceiling of 10.** Audited
off `x.com/search?q=from%3AUncFund&f=live`, which again rendered every row where `with_replies` did not. The
15: @MollySOShea, @blknoiz06, @nickvasiles, @ycombinator, @MorganVonDruitt, @brycent, @SnorkelAI, @roywass_
from the scheduled rounds, plus Rand's seven hand-posted ones (@asdhas9082, @ESCOweb3, @RobinhoodCrypto,
@garrytan, @sama, @stanleefounder at 21:49-21:58, and @andyyy at 00:27). Own-thread replies excluded, as the
rules say. Repost/quote is also spent at 4 of 4. This is the **fourth consecutive round** (4pm, 6pm, 8pm,
10pm) to post nothing on the timeline for budget reasons. The budget resets at midnight ET, so the 11pm
round is the first that can take a pick again.

**And the board was genuinely good tonight, which is worth saying plainly.** Two clean on-chain-register
setups sat inside the freshness window and had to be passed: **@arbitrum at 22 minutes**, "AI compute is
being tokenized now", quoting a @WatcherGuru BlackRock line — 8.2K views, ~370/min, 8 replies, no ticker and
no price anywhere in either post; and **@therollupco at 46 minutes** on Nathan McCauley saying banks will
adopt blockchain and tokenization, 682 views and 2 replies, which is also a textbook lane B parent (small,
slow, sincere, two replies deep). Both are exactly what criterion (b) asks for and both were unusable. The
constraint tonight was the budget, not the board.

**Nothing inbound to answer.** Mentions still have nothing newer than Sep 17. Notifications since the last
round: zero new. @ESCOweb3's 3h-old reply was answered at 00:22 and @MorganVonDruitt's 7h-old one at 20:12.
Today's morning note ("Unc wore the grey runners to a board meeting once") sits at **9 views, 1 like, 0
replies** — the own-thread lane, which the playbook calls the most valuable thing a round does, currently has
no supply at all because the notes are not drawing responses. Worth Rand's attention separately from the
reply rules.

**Drift, re-read at 02:15 UTC.** The 2h convention keeps undercounting in one direction and the gap widened
again: @MollySOShea 171 to **387**, @ycombinator 50 to **117**, @nickvasiles praise 129 to **139**,
@stanleefounder 2,795 to **3.8K**, @RobinhoodCrypto 1,185 to **1.5K**, @SnorkelAI 36 to 45, @blknoiz06 26 to
34, @ESCOweb3 hand-posted 12 to 17, @garrytan 11 to 15, @sama 10 to 12, @asdhas9082 5 to 7,
@MorganVonDruitt praise 10 to 11 and his own-thread 2 to 4, @brycent flat at 20. The @nickvasiles own-thread
row, unreadable last round, resolves at **9**. Roughly a 2x undercount on the better rows. Still not changing
the read window mid-experiment, but a future analysis should treat every logged `views` figure as a floor.

**No OP replies since the last round.** Praise-lane count unchanged: 25 rows, 23 resolved, 10 with an OP
reply, about 43 percent — still well clear of the Sep 12 falsifier.

**Likes: 4, all confirmed by the button label flipping to "Liked" with the count incremented** — @paulg
(prewar watch movements), @arbitrum (tokenized AI compute), @andyyy (his RobinhoodCrypto Stock Tokens quote)
and @therollupco (banks adopting blockchain). Skipped @nikitabier (names a political figure), @notthreadguy
(NFT mint talk), @andyyy's Kalshi wash-trading post (live allegation), @RonwHammond (CLARITY grievance, a
politics-adjacent complaint rather than a factual policy drop) and @ColinGardiner (uses "bearish").

**Mechanics, one clean finding.** Every like this round was clicked **by `ref`** rather than by coordinate,
and all four registered on the first click — against the first-click-misses behaviour logged at 18:09 and
21:xx, where coordinate clicks were eaten as focus events and needed a second press. Ref clicks also survive
the frame drift, which hit again on every navigation (609 on the profile, 621 on notifications and search,
633 on home). **Prefer `ref` clicks over measured coordinates for like buttons.** Also confirmed again:
`get_page_text` returns an empty `<main>` on the first call after `navigate` and needs a wait or a second
call, and `computer scroll` with a coordinate errors unless a screenshot was taken in the same batch first.
