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
| `mode` | `oblivious` (Unc confidently misreads), `prop` (vest/age/runners/chair), `thesis` (small-check), `receipt` (dated anecdote), `praise` (specific compliment), `react` (short reaction), `own-thread` (answering a response on Unc's own post, usually the morning note) |
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
| 09-12 19:14 | @gregisenberg | **7** | oblivious | 8333 | 39 | 216 (~85 now) | 31 | 63 | 0 | n |
| 09-12 20:14 | @brycent | 15 | thesis | 472 | 11 | 44 | 1 | 7 | 0 | n |
| 09-12 22:16 | @notthreadguy | **8** | oblivious | 4962 | 17 | 287 (~160 now) | 27 | 177 | 0 | n |
| 09-12 23:17 | @SebastienEgo | **8** | praise | 5342 | 96 | 56 | 8 | 15 | 0 | n |
| 09-13 01:43 | @naval | **7** | oblivious | 11254 | 4 | 2745 (~630 now) | 25 | 311 (42m) | 0 | n (early) |
| 09-13 02:21 | @itsusamak | **8** | praise | 36 | 134 | 0.3 | 1 | **unverified** | — | — |

**The 09-13 02:21 row is UNVERIFIED and must not be counted until it is seen.** `tweetButton`
returned "Your post was sent." and the parent's reply count moved 1 → 3, but the reply was absent
from `with_replies` and from `from:UncFund` at +1, +5 and **+66 minutes**, while the @naval reply
sent 38 minutes earlier from the same session appeared on both within seconds. It was **not
re-sent** — a double reply to a 42-follower account inside five minutes is the thin-repeat pattern
that earned the @Trace_Cohen block, and it would be aimed at exactly the account type lane B needs.
Full analysis in `08-reply-playbook.md` under "The send that said sent and never appeared". If the
reply is visible next round, fill the row in; if it is still absent, **the praise lane is at two
usable rows, not three**, and a filtered reply buys neither views nor conversation.


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
