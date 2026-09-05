// Week-1 schedule for @UncFund (Labor Day weekend launch). Prints intent URLs with their slot.
// Run: node docs/schedule-week1.mjs            -> lists slots
//      node docs/schedule-week1.mjs <n>        -> prints the intent URL for slot n
const slots = [
  ["2026-09-05", "6:00 PM", "Launched a fund on a holiday weekend. Nobody's reading. Perfect. Neither are the other investors.\n\nSend the pitch while they're at the lake. unc.fund"],
  ["2026-09-06", "10:00 AM", "Labor Day weekend and half of you are \"taking a break\" by rebuilding the onboarding flow.\n\nI see you. Proud of you. Also go outside for an hour."],
  ["2026-09-06", "4:00 PM", "The early bird gets the worm, sure, but the second mouse gets the cheese.\n\nPoint is: show up. There's a snack either way."],
  ["2026-09-07", "9:00 AM", "Happy Labor Day to everyone who labors. Founders, that's you.\n\nNobody works harder for less money, and I say that as a man who writes $500 checks."],
  ["2026-09-07", "1:00 PM", "Labor Day is for the people who built this country. Also for the people building the next version of it in a garage right now.\n\nGrill something. Then get back to it."],
  ["2026-09-07", "6:00 PM", "Every VC is at a barbecue today. Unc is at a barbecue too. Unc is also reading your deck between burgers.\n\nThe form works on holidays. unc.fund"],
  ["2026-09-08", "9:00 AM", "Boring software with one paying customer beats a beautiful demo with none.\n\nI will say this every week until it stops being true."],
  ["2026-09-08", "1:00 PM", "My nephew asked what a zk rollup is. I told him it's when you fold the sleeping bag really tight. He believed me.\n\nDon't be my nephew. Explain it to me at unc.fund."],
  ["2026-09-08", "6:00 PM", "You miss 100% of the checks you don't ask for.\n\nI know, I know. But you do. Ask."],
  ["2026-09-09", "9:00 AM", "Things Unc will ask on the call:\n\nDoes it work when the wifi is bad.\nWho pays.\nWhat would you do with $2,500.\n\nThat's the whole list."],
  ["2026-09-09", "1:00 PM", "To the VCs reading this: the founder you passed on for being \"too early\" is who I fund.\n\nSend them my way. I'll send them back to you in eighteen months with revenue."],
  ["2026-09-09", "6:00 PM", "Every company I back is a nephew. Not a portfolio company. A nephew.\n\nYou get the group chat, the office hours, and an Unc who brags about you at dinner.\n\nunc.fund"],
  ["2026-09-10", "9:00 AM", "A $500 check will not build your company.\n\nIt will tell you that one person who was not your mother believed you. That's worth more than the money, which is convenient, because it's not much money."],
  ["2026-09-10", "1:00 PM", "I keep a list of every deal I pass on. When they get huge, the list goes on the website.\n\nAccountability is the brand. unc.fund/anti-portfolio"],
  ["2026-09-10", "6:00 PM", "Nobody felt ready. Not Edison, not your mom, not me the day I bought this vest.\n\nReady is a feeling you get after. Start now."],
  ["2026-09-11", "9:00 AM", "It is Friday. Unc reads decks in bed on Fridays.\n\nPDF is kindest."],
  ["2026-09-11", "1:00 PM", "Investors: \"we'd love to see more traction\" is a no. Say no.\n\nFounders can handle a no. It's the maybe that kills them."],
  ["2026-09-11", "6:00 PM", "Weekend plans: read every pitch that came in this week.\n\nSend yours. unc.fund"],
  ["2026-09-12", "10:00 AM", "Zipped the vest exactly halfway this morning.\n\nSome things you don't change."],
  ["2026-09-12", "4:00 PM", "Your first version is going to be ugly.\n\nSo was I. Look at me now. Ship it."],
  ["2026-09-13", "10:00 AM", "Sunday thought: the first dollar is the hardest one to get and the easiest one to give.\n\nSo I give it."],
  ["2026-09-13", "4:00 PM", "Dream big, start small, zip the vest halfway.\n\nOnly one of those is negotiable."],
];
const n = Number(process.argv[2] || 0);
if (!n) {
  slots.forEach((s, i) => console.log(i + 1, s[0], s[1], s[2].length + "ch", JSON.stringify(s[2].slice(0, 40))));
} else {
  const [d, t, text] = slots[n - 1];
  console.log(JSON.stringify({ n, date: d, time: t, len: text.length, url: "https://x.com/intent/post?text=" + encodeURIComponent(text) }));
}
