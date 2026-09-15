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
| 09-15 16:13 | @arbitrum | **5** | prop+oc | 5899 | 4 | ~1,340 | 2 | | | |
| 09-15 16:14 | @SashaMagicSpace | **5** | praise | 134 | 27 | 5 | 6 | | | pending (due 04:14 Sep 16) |

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
