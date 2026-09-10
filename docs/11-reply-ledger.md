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
| 09-09 22:12 | @Jason | 21 | mirror | 4069 | 17 | 239 | 0 | 221 | 0 | n |
| 09-09 23:54 | @jdtoelle | 20 | oblivious | — | 37 | — | — | 2 | 0 | n |
| 09-09 23:59 | @HarryStebbings | 16 | oblivious | 1193 | 22 | 54 | 5 | 112 | 2 | n |
| 09-10 00:22 | @naval | **7** | oblivious | 3670 | 2 | 1835 | 18 | **2717** | 2 | n |
| 09-10 15:45 | @a16z | **7** | prop | 3241 | 16 | 203 | 2 | 9 | 0 | n |
| 09-10 15:49 | @sweatystartup | 8 | oblivious | 1716 | 18 | 95 | 3 | 8 | 0 | n |
| 09-10 16:05 | @RobinhoodApp | **7** | oblivious | 11530 | 4 | **2956** | 80 | 258 | 0 | n |
| 09-10 16:17 | @Teknium | **6** | oblivious | 1654 | 8 | 199 | 2 | 22 | 0 | n |
| 09-10 16:35 | @ESCOweb3 | **4** | praise | — | — | — | — | 7 | 1 | n |
| 09-10 20:41 | @MollySOShea | 12 | thesis | 577 | 9 | 63 | 1 | void (3) | 1 | n (liked) |

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
