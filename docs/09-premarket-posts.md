# Unc's morning note

> **Changed 2026-09-10.** This slot used to be a SPY/QQQ premarket read. It is now an invitation
> for founders to pitch Unc in one line on Monday, Wednesday and Friday, and a funny morning line
> for founders and VCs on Tuesday and Thursday. The reply rounds answer every response. The
> premarket history below is kept as a record of what was tried.

## Why it changed

The three market posts drew **10, 10 and 2 views, zero likes**. Rand's read was that market
commentary never fit a fund that writes $500 first checks, and that is right on its own terms.

The data says something larger, though. **Every original Unc post since Sep 7 sits at 6 to 16
views with zero likes** — the barbecue joke, the zk-rollup sleeping bag, "every company I back is a
nephew". The market post was not losing to the other posts. Nothing Unc broadcasts reaches anyone
yet, because a twelve-follower account has no feed to land in. So a better line alone was expected
to pull about ten views too.

What changes that is a mechanism rather than copy. The Sep 9 competitor research found Colin
Gardiner's replies inside his own thread — answering people who responded to his "who is building a
weird marketplace?" post — pulled 455 to 618 views, while his replies on other people's posts pulled
9 to 57. An invitation post plus answering every reply is the one pattern with evidence behind it,
so it takes three of the five mornings. The funny line keeps the other two, which also sets up a
clean comparison in the log: invitation versus broadcast, same slot, same week.

**What to watch:** whether invitation mornings draw any replies at all. At twelve followers, zero
replies is a realistic outcome for the first week, and it would mean the account needs an audience
before an invitation can work — at which point the reply-guy rounds carry the load alone.

## Morning note log

| Date | Weekday | Format | Post | Views | Likes | Replies |
|---|---|---|---|---|---|---|
| 2026-09-12 | Saturday | — (skipped) | Nothing posted. Run fired 1:42 PM ET, past the 1:00 PM cutoff, and a morning line was already up from 10:00 AM ET. | — | — | — |

Note on 2026-09-12: the scheduled run landed at **1:42 PM Eastern**, four hours forty-two minutes
after the 9:00 slot and past the ~1:00 PM cutoff — a morning note in the afternoon reads wrong, so
it skipped rather than posting late.

Two other things worth recording. First, the account had **already posted a morning line today at
10:00 AM ET** — "Zipped the vest exactly halfway this morning. / Some things you don't change." —
which uses the vest prop and the morning framing, so posting again would have been a second morning
note in one day regardless of the clock. Second, the timeline shows posts at roughly even intervals
through Friday and Saturday (Sep 11 12:00 PM, 4:00 PM and 7:00 PM ET, then Sep 12 10:00 AM ET),
which suggests a **separate cadence task is also publishing Unc content** and is the likely source
of the 10:00 AM line. If that is right, this slot and that one can collide, and the "never two
morning notes in one day" rule cannot be enforced from the log alone — only by reading the timeline
first, as this run did. Worth reconciling the two schedules.

Also note this table is empty above this row: nothing has been logged since the format changed on
Sep 10, so invitation-versus-line comparison has no data yet.

## Premarket history (retired 2026-09-10)

# Unc's premarket post (retired)

Every US market day at 9:00 AM Eastern, half an hour before the open, Unc posts what premarket
is doing in SPY and QQQ and then turns it into encouragement for founders. It runs automatically
as the `unc-premarket-post` scheduled task.

## Why this post exists

It gives the account a reason to show up every single trading morning, which is the cheapest way
to build a posting habit an audience can rely on. The market is the hook. The founders are the
point. Unc's thesis is that the tape does not change whether you should ship today, and saying
that every morning against a live number makes it land harder than saying it in the abstract.

## The shape

Two beats, always in this order.

1. What premarket is actually doing, stated as fact, both tickers with percentages.
2. The pivot to founders.

> Premarket has SPY up 0.3% and QQQ up 0.5%. Looks like a green open.
>
> Doesn't change your day. Ship the thing.

> Premarket has SPY down 0.4% and QQQ down 0.6%. Red open, looks like.
>
> Unc has seen a lot of red mornings. The companies that got built got built anyway.

## The rules

- Premarket is reported as observable fact. Unc may say what it points to for the open. He never
  predicts a close and never uses "will" about a price.
- Never buy, sell, hold, or any recommendation. No targets, no valuation opinions.
- No individual stocks. Only the SPY and QQQ ETFs.
- **Down more than about 1.5% and the jokes stop.** Short, warm, steady instead. A genuinely bad
  morning gets sincerity, not a bit. People are having a rough day and Unc is the calm uncle.
- Never gloat, never smug, never negative.
- No links, no hashtags, no emoji.
- Never repeat a previous morning's phrasing. Check the log below and vary the opening.

## Data

Robinhood connector, `get_equity_quotes` for SPY and QQQ.

- Premarket price: `last_non_reg_trade_price` (the extended-hours print)
- Reference: `adjusted_previous_close`
- Percent change: (premarket - reference) / reference x 100, one decimal

Market-closed check: if neither `venue_last_trade_time` nor `venue_last_non_reg_trade_time` is
from today, the market is closed or nothing has traded yet. Skip and post nothing. Never post a
stale number. A hardcoded holiday list lives in the task prompt as a first pass, but the
freshness check is the real guard because the list goes stale.

## It posts on its own

The task is standing authorization to publish. It does not draft and wait, does not ask whether
the numbers look right, and does not ask before clicking Post. It fires at 6 AM Pacific when
nobody is awake to answer, so a post that waits for approval is a post that never goes out.

That removes the check-in, not the standards. The hard rules below still gate every post. Three
things stop it, and all three are genuine blockers rather than questions: the browser is signed
out of X, the market is closed, or the data looks wrong. Everything else — a rounding call, an
opening phrase, a number that crossed a decimal while composing — gets decided and noted in the
log row instead of asked about.

## The 9:00 slot is soft

Being late is not a reason to skip. If the run fires after the open, it posts as soon as it can
and beat one is reframed to the live session instead of premarket. A missed morning is worse
than a late one.

This matters because `last_non_reg_trade_price` goes null the moment the regular session starts.
Read literally, the old freshness check treated that as "market closed" and skipped a perfectly
normal trading day — which is exactly what happened on 2026-09-08. The check now looks for any
trade today, and the price field is chosen by which window the run lands in:

| Window | Price field | Beat one reads |
|---|---|---|
| Premarket | `last_non_reg_trade_price` | "Premarket has SPY..." |
| Regular session | `last_trade_price` | "First hour in.", "Couple hours into the day." |

Never call a live regular-session price premarket. The only hard stop is after the 4:00 PM
Eastern close: a morning note posted at night is worse than none, and the next run covers it.

Phrase the time reference so it stays true between composing and clicking Post. "First hour in"
survives a few minutes of delay. "Forty minutes into the session" becomes false while you work.

## Log

| Date | SPY | QQQ | Post |
|---|---|---|---|
| 2026-09-08 | -0.5% | -0.3% | First hour in. SPY down 0.5%, QQQ down 0.3%. A little red, nothing dramatic.<br><br>Unc's opinion of you hasn't moved a basis point. Go build. |
| 2026-09-09 | -0.3% | -0.4% | Premarket's a touch red. SPY down 0.3%, QQQ down 0.4%.<br><br>That's a rounding error in a costume. Your roadmap didn't change overnight. Go ship. |
| 2026-09-10 | -0.4% | -0.6% | Market's been open about an hour. SPY down 0.4%, QQQ down 0.6%. Mild red.<br><br>Unc's been through enough of these to know the only number that matters today is how many things you ship. |

Note on 2026-09-08: the run fired around 10:08 AM Eastern instead of 9:00, so premarket was
over and `last_non_reg_trade_price` was null. Posted against the live session instead of
premarket, with beat one reframed to the open. Percentages are regular-session prices vs the
Sep 4 close. This is the run that prompted the soft-slot policy above; a late run now posts
on its own rather than skipping.

Note on 2026-09-09: on time, genuine premarket prints at 9:01 AM Eastern. QQQ moved from
-0.45% to -0.44% between the first pull and the re-pull just before composing, which flipped
the rounding from -0.5% to -0.4%. Posted the fresher number.

Note on 2026-09-10: late run, about 10:37 AM Eastern, so these are regular-session
`last_trade_price` prints vs the Sep 9 close, not premarket. Beat one said "about an hour" so it
stayed true through the click. QQQ moved from -0.66% to -0.63% between the first pull and the
re-pull, flipping the rounding from -0.7% to -0.6%. Posted the fresher number. Post count went
71 to 72.
