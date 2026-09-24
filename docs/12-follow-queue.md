# Follow queue

Accounts Rand asked @UncFund to follow on 2026-09-14: the institutions building on-chain finance,
bipartisan crypto-policy voices in DC, and the reporters and analysts covering the industry and its
regulation. The `unc-follow-queue` routine works down this file **slowly** — three follows per run,
three runs a day — because X silently reverts follows from a young account that moves fast. This
account hit that limit on Sep 7 and Sep 9.

**Rules for the routine** (full version in its task prompt):

- Before following, open the profile and confirm it matches the "Who" column — right name, verified
  badge, bio consistent. Bank, crypto and government accounts are heavily impersonated. If anything
  is off, mark the row `rejected` with the reason and move on. Never guess a replacement handle.
- After each follow, reload the profile and confirm the button reads Following. If it has flipped
  back to Follow, **X is limiting the account**: mark the row `reverted`, stop following for the rest
  of the run, and log it. Do not click again — a second click on a follow that did land undoes it.
- Mark each row `followed` with the Eastern date when it sticks.
- Following politicians is public. The set below is deliberately balanced across both parties, and
  the rounds never reply to, quote or repost politicians or committees — see "GOVERNMENT AND
  POLITICAL ACCOUNTS" in the reply-round prompt.

Status values: `queued`, `followed YYYY-MM-DD`, `rejected: reason`, `reverted YYYY-MM-DD`.

## Queue, in order

| # | Handle | Who | Status |
|---|---|---|---|
| 1 | @Securitize | Securitize, tokenization platform (verified Sep 14) | followed 2026-09-14 |
| 2 | @circle | Circle, USDC issuer (verified Sep 14) | followed 2026-09-14 |
| 3 | @BlackRock | BlackRock, asset manager (verified Sep 14) | followed 2026-09-14 |
| 4 | @EleanorTerrett | already followed by Rand | followed 2026-09-14 |
| 5 | @jchamilton75 | Jesse Hamilton, CoinDesk DC policy reporter | rejected: account does not exist (Sep 15) |
| 6 | @nikhileshde | Nikhilesh De, CoinDesk policy/regulation reporter | rejected: no verification badge; display name is "@nikhileshde.bsky.social" though bio matches CoinDesk policy (Sep 15) |
| 7 | @SenLummis | Sen. Cynthia Lummis (R-WY), crypto market structure | followed 2026-09-15 |
| 8 | @SenGillibrand | Sen. Kirsten Gillibrand (D-NY), co-author with Lummis | followed 2026-09-15 (already) |
| 9 | @Paxos | Paxos, regulated stablecoin and tokenization infrastructure (verified Sep 14) | followed 2026-09-15 |
| 10 | @stripe | Stripe, payments; owns stablecoin company Bridge (verified Sep 14) | followed 2026-09-15 |
| 11 | @jpmorgan | J.P. Morgan (verified Sep 14) | followed 2026-09-15 |
| 12 | @DigitalAssets | Fidelity Digital Assets (verified Sep 14) | followed 2026-09-15 |
| 13 | @laurashin | Laura Shin, Unchained host and crypto journalist | followed 2026-09-15 |
| 14 | @EricBalchunas | Eric Balchunas, Bloomberg ETF analyst | followed 2026-09-15 |
| 15 | @SenatorHagerty | Sen. Bill Hagerty (R-TN), stablecoin legislation | followed 2026-09-15 |
| 16 | @SenRubenGallego | Sen. Ruben Gallego (D-AZ), Senate Banking | followed 2026-09-15 |
| 17 | @OndoFinance | Ondo Finance, tokenized treasuries and equities | rejected: account does not exist (Sep 22, checked twice) |
| 18 | @Fidelity | Fidelity Investments (verified Sep 14) | followed 2026-09-22 |
| 19 | @StateStreet | State Street (verified Sep 14) | followed 2026-09-22 |
| 20 | @JSeyff | James Seyffart, Bloomberg ETF analyst | followed 2026-09-22 |
| 21 | @jchervinsky | Jake Chervinsky, crypto policy lawyer | followed 2026-09-22 |
| 22 | @RepFrenchHill | Rep. French Hill (R-AR), House Financial Services | followed 2026-09-22 |
| 23 | @RitchieTorres | Rep. Ritchie Torres (D-NY), House Financial Services | followed 2026-09-22 |
| 24 | @SECGov | U.S. Securities and Exchange Commission (government badge) | followed 2026-09-23 (list add pending) |
| 25 | @CFTC | U.S. Commodity Futures Trading Commission (government badge) | followed 2026-09-23 (list add pending) |
| 26 | @HesterPeirce | Hester Peirce, SEC Commissioner | followed 2026-09-23 |
| 27 | @coinbase | Coinbase | followed 2026-09-24 |
| 28 | @krakenfx | Kraken, tokenized equities (xStocks) | followed 2026-09-24 |
| 29 | @RobinhoodApp | Robinhood, stock tokens and Robinhood Chain | followed 2026-09-24 (already) |
| 30 | @Visa | Visa (verified Sep 14) | followed 2026-09-24 |
| 31 | @PayPal | PayPal, PYUSD issuer (verified Sep 14) | followed 2026-09-24 |
| 32 | @KenzieSigalos | MacKenzie Sigalos, CNBC crypto and tech reporter | followed 2026-09-24 |
| 33 | @fintechfrank | Frank Chaparro, crypto and fintech journalist | queued |
| 34 | @NateGeraci | Nate Geraci, ETF analyst | queued |
| 35 | @SenatorTimScott | Sen. Tim Scott (R-SC), Senate Banking chair | queued |
| 36 | @RepJoshG | Rep. Josh Gottheimer (D-NJ), House Financial Services | queued |
| 37 | @RepBryanSteil | Rep. Bryan Steil (R-WI), digital assets subcommittee | queued |
| 38 | @USTreasury | U.S. Department of the Treasury (government badge) | queued |
| 39 | @iShares | BlackRock iShares ETFs | queued |
| 40 | @vaneck_us | VanEck | queued |
| 41 | @BitwiseInvest | Bitwise Asset Management | queued |
| 42 | @Grayscale | Grayscale Investments | queued |
| 43 | @Nasdaq | Nasdaq | queued |
| 44 | @The_DTCC | DTCC, clearing and settlement | queued |
| 45 | @CMEGroup | CME Group | queued |
| 46 | @coincenter | Coin Center, crypto policy nonprofit | queued |
| 47 | @BlockchainAssn | Blockchain Association, industry trade group | queued |
| 48 | @crypto_council | Crypto Council for Innovation | queued |
| 49 | @DavidSacks | David Sacks, White House AI and crypto adviser | queued |
| 50 | @FinancialCmte | House Financial Services Committee (majority) | queued |
| 51 | @FSCDems | House Financial Services Committee Democrats (minority) | queued |

## Not queued, and why

- **@Kinexys** — checked Sep 14 and it is an unrelated personal account (5 followers), not
  JPMorgan's blockchain unit. The real handle needs finding by search before it is queued.
- **@FTI_US** — does not exist. Franklin Templeton's real handle needs finding by search.
- **Bridge** (Stripe's stablecoin company), **xStocks**, **Superstate** — handles not yet confirmed.
- **"stockxyz"** — waiting on Rand to say which company this is.
- Individual ranking members known mainly for broader partisan posting are left out in favour of
  the committee accounts, which carry the same policy news with both sides represented.
