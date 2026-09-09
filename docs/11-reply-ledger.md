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
| `mode` | `oblivious` (Unc confidently misreads), `prop` (vest/age/runners/chair), `thesis` (small-check), `receipt` (dated anecdote), `praise` (specific compliment), `react` (short reaction) |
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
| 09-09 15:54 | @a16z | 14 | thesis | — | 4 | — | — | | | |

Blank cells in the historical rows are genuinely unknown and are left blank rather than estimated.
Rows from here on get filled completely.

## Standing questions this is being collected to answer

1. Do replies under eight words outperform two-and-three-line replies on views, likes and `op`?
2. Does `vel` predict `views` better than `p_views` alone? The velocity rule rests on a single
   observation so far — a 140-view parent at five minutes returning 97 views, beating parents of
   2,800 to 9,700 — and one observation is not a rule.
3. Which `mode` earns `op` replies? Suspicion is `praise` and `react`, because both are easy to
   answer, and `thesis` is worst because it closes the exchange rather than opening it.
4. Does the like rate separate comedy from the old thoughtful style once targeting is finally held
   constant? Both sit at 0.50 and neither number means anything yet.
