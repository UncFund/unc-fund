// Week-2 schedule for @UncFund: Mon Sep 14 through Sun Sep 20, 2026.
// TIMES ARE PACIFIC because X's scheduler runs in the browser timezone. Eastern is the
// project standard; the ET column below is the intent, PT is what to type into X.
//   Weekdays: 12pm ET (9:00 AM PT), 4pm ET (1:00 PM PT), 7pm ET (4:00 PM PT)
//   Weekends: 10am ET (7:00 AM PT), 5pm ET (2:00 PM PT)   <- mornings pulled earlier
// Run: node docs/schedule-week2.mjs            -> lists slots
//      node docs/schedule-week2.mjs <n>        -> prints the intent URL for slot n
const slots = [
  ["2026-09-14", "9:00 AM", "12pm ET", "Most first checks come from people who already know you. That's the whole problem.\n\nUnc doesn't know you. Unc has a form."],
  ["2026-09-14", "1:00 PM", "4pm ET", "Read a deck this morning that used the word \"synergy.\"\n\nI'm 55 and even I know we don't say that anymore."],
  ["2026-09-14", "4:00 PM", "7pm ET", "$500 to $9,999. Decision in a week.\n\nunc.fund"],

  ["2026-09-15", "9:00 AM", "12pm ET", "Founders apologize for small numbers.\n\nDon't. Small numbers with a direction are the only numbers Unc can fund."],
  ["2026-09-15", "1:00 PM", "4pm ET", "\"What's your check size?\"\n\nThree or four figures.\n\n\"Figures of what?\"\n\nDollars, son. Dollars."],
  ["2026-09-15", "4:00 PM", "7pm ET", "The plan for the first $2,500 tells me more than the plan for the first $2.5M."],

  ["2026-09-16", "9:00 AM", "12pm ET", "Unc's decision process: form, call, week.\n\nUnc's other process: coffee, vest, decks."],
  ["2026-09-16", "1:00 PM", "4pm ET", "Software founders: boring is fine.\n\nBoring with a customer is better. Boring with revenue makes me emotional."],
  ["2026-09-16", "4:00 PM", "7pm ET", "No deck? Fine. One-liner and a link.\n\nunc.fund"],

  ["2026-09-17", "9:00 AM", "12pm ET", "Every VC has an anti-portfolio. Most hide it.\n\nMine is a page on the website with my name on it."],
  ["2026-09-17", "1:00 PM", "4pm ET", "Nephew update: he built the thing.\n\nIt does not work when the wifi is bad. We're working on it."],
  ["2026-09-17", "4:00 PM", "7pm ET", "If you're pre-idea, that's fine, but tell me what you'd build first.\n\n\"Exploring\" is not a plan for $2,500."],

  ["2026-09-18", "9:00 AM", "12pm ET", "Friday. Bed. Decks. PDF.\n\nYou know the drill."],
  ["2026-09-18", "1:00 PM", "4pm ET", "Unc will never be the smartest investor on your cap table.\n\nUnc will be the first one who answered."],
  ["2026-09-18", "4:00 PM", "7pm ET", "Send it before the weekend.\n\nunc.fund"],

  ["2026-09-19", "7:00 AM", "10am ET", "The vest has a label with a mountain on it.\n\nDon't ask which mountain. It's the mountain."],
  ["2026-09-19", "2:00 PM", "5pm ET", "AI founders: if it needs a demo to be understood, it's not ready for the form.\n\nIf it needs a form to be funded, it's ready for Unc."],

  ["2026-09-20", "7:00 AM", "10am ET", "Two weeks in. Every pitch that came in got a reply.\n\nThat's the promise, so that's the report."],
  ["2026-09-20", "2:00 PM", "5pm ET", "Week three starts tomorrow.\n\nunc.fund"],
];
const n = Number(process.argv[2] || 0);
if (!n) {
  slots.forEach((s, i) => console.log(i + 1, s[0], s[1].padEnd(9), s[2].padEnd(8), s[3].length + "ch", JSON.stringify(s[3].slice(0, 44))));
} else {
  const [d, tPT, tET, text] = slots[n - 1];
  console.log(JSON.stringify({ n, date: d, pt: tPT, et: tET, len: text.length, url: "https://x.com/intent/post?text=" + encodeURIComponent(text) }));
}
