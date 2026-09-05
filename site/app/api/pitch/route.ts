import { deckLooksAllowed, humanBytes, MAX_DECK_BYTES } from "@/lib/files";
import { block, sendMail } from "@/lib/notify";
import { storeFile } from "@/lib/storeFile";

const CATEGORIES = ["Blockchain", "AI", "Software", "Robotics", "Unc won't get it but try"];
const STAGES = ["Idea", "Prototype", "Users", "Revenue"];

function str(fd: FormData, key: string, max = 2000): string {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(request: Request): Promise<Response> {
  let fd: FormData;
  try {
    fd = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "Could not read the form." }, { status: 400 });
  }

  // Honeypot: real people leave this empty.
  if (str(fd, "website")) return Response.json({ ok: true });

  const name = str(fd, "name", 120);
  const email = str(fd, "email", 200);
  const handle = str(fd, "handle", 60);
  const company = str(fd, "company", 120);
  const oneLiner = str(fd, "oneLiner", 140);
  const category = str(fd, "category", 60);
  const stage = str(fd, "stage", 40);
  const plan = str(fd, "plan", 2000);
  const link = str(fd, "link", 500);
  const agree = str(fd, "agree") === "on";
  let deckUrl = str(fd, "deckUrl", 1000);

  const problems: string[] = [];
  if (!name) problems.push("name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) problems.push("email");
  if (!company) problems.push("company");
  if (!oneLiner) problems.push("one-liner");
  if (!CATEGORIES.includes(category)) problems.push("category");
  if (!STAGES.includes(stage)) problems.push("stage");
  if (!plan) problems.push("plan");
  if (!agree) problems.push("agreement");
  if (problems.length) {
    return Response.json({ ok: false, error: `Missing or invalid: ${problems.join(", ")}.` }, { status: 400 });
  }

  // Fallback path: the deck came with the form instead of via the client upload.
  let deckNote = "";
  const deck = fd.get("deck");
  if (!deckUrl && deck instanceof File && deck.size > 0) {
    if (deck.size > MAX_DECK_BYTES) {
      return Response.json({ ok: false, error: `Deck is ${humanBytes(deck.size)}. Max is 25 MB.` }, { status: 400 });
    }
    if (!deckLooksAllowed(deck.name, deck.type)) {
      return Response.json({ ok: false, error: "Deck must be a PDF, PPTX, PPT or Keynote file." }, { status: 400 });
    }
    const stored = await storeFile(deck, "decks");
    deckUrl = stored.url || "";
    deckNote = stored.note || "";
  }

  const subject = `Pitch: ${company} (${category}, ${stage})`;
  const text = [
    "New pitch through unc.fund",
    "",
    block({
      Name: name,
      Email: email,
      X: handle,
      Company: company,
      "One-liner": oneLiner,
      Category: category,
      Stage: stage,
      Link: link,
      Deck: deckUrl || "(none)",
      Note: deckNote,
    }),
    "",
    "What they'd do with $2,500:",
    plan,
  ].join("\n");

  const inbox = await sendMail({ subject, text, replyTo: email });

  // Confirmation to the founder, in Unc's voice. Best effort.
  void sendMail({
    to: email,
    subject: `Unc got your pitch for ${company}`,
    text: [
      `Hey ${name.split(" ")[0]},`,
      "",
      `Got it. ${company}. "${oneLiner}"`,
      "",
      "Unc reads everything himself, so give him a week. If it's a yes you'll hear from me with a time to talk. If it's a no you'll still hear from me, because that's the polite thing.",
      "",
      "Proud of you.",
      "— Unc",
      "",
      "Unc Fund LLC · unc.fund · contactuncfund@gmail.com",
    ].join("\n"),
  });

  return Response.json({
    ok: true,
    delivered: inbox.sent,
    deckUrl: deckUrl || null,
    message: inbox.sent
      ? "Unc has it. Give him a week."
      : "Unc has it, but the email service is not configured on this server, so it was logged instead.",
  });
}
