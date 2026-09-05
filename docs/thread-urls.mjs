// Prints X intent URLs for the launch thread. Run: node docs/thread-urls.mjs [in_reply_to_id]
const posts = [
  "Unc Fund started as a joke between friends: what if there was a VC that wrote checks so small they couldn't possibly matter?\n\nThen I bought the domain. It stopped being a joke about a week later.",
  "The thesis: small checks early beat big checks never.\n\n$500 buys a domain and a demo. $2,500 buys a month of API credits and a flight to a customer. That's when you find out if the thing is real.",
  "What I fund: blockchain, AI, software, robotics.\n\nThe stuff I read about and don't fully understand. Which is exactly why it needs funding.",
  "How it works. One form, one call, an answer in a week.\n\nYes gets a SAFE and a wire. No gets a reason. Nobody gets ghosted. I'm an Unc, not a fund with a junior associate.",
  "If it's a yes, you're a nephew. That's what I call every company I back.\n\nNephews get intros when I have them, office hours every week, and the nephew group chat.\n\nA vest, eventually.",
  "The rules: no 47-slide decks.\n\nIf your grandfather could explain it, I'm not interested. If your grandfather could fund it, you don't need me.",
  "Pitch at unc.fund. Attach a deck if you have one. If you don't, the one-liner will do.\n\nProud of you.",
];
const n = Number(process.argv[2] || 0);
const reply = process.argv[3] || "";
if (n) {
  const p = posts[n - 1];
  console.log(`https://x.com/intent/post?text=${encodeURIComponent(p)}${reply ? "&in_reply_to=" + reply : ""}`);
} else {
  posts.forEach((p, i) => console.log(i + 1, p.length, "chars"));
}
