import { deckLooksAllowed, humanBytes, MAX_DECK_BYTES } from "@/lib/files";
import { block, sendMail } from "@/lib/notify";
import { storeFile } from "@/lib/storeFile";

function str(fd: FormData, key: string, max = 4000): string {
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
  if (str(fd, "website")) return Response.json({ ok: true });

  const name = str(fd, "name", 120);
  const email = str(fd, "email", 200);
  const topic = str(fd, "topic", 60);
  const message = str(fd, "message", 4000);
  let fileUrl = str(fd, "fileUrl", 1000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    return Response.json({ ok: false, error: "Name, a valid email and a message are required." }, { status: 400 });
  }

  let note = "";
  const file = fd.get("file");
  if (!fileUrl && file instanceof File && file.size > 0) {
    if (file.size > MAX_DECK_BYTES) {
      return Response.json({ ok: false, error: `Attachment is ${humanBytes(file.size)}. Max is 25 MB.` }, { status: 400 });
    }
    if (!deckLooksAllowed(file.name, file.type)) {
      return Response.json({ ok: false, error: "Attachment must be a PDF, PPTX, PPT or Keynote file." }, { status: 400 });
    }
    const stored = await storeFile(file, "contact");
    fileUrl = stored.url || "";
    note = stored.note || "";
  }

  const inbox = await sendMail({
    subject: `Contact: ${topic || "General"} from ${name}`,
    replyTo: email,
    text: ["New message through unc.fund/contact", "", block({ Name: name, Email: email, Topic: topic, Attachment: fileUrl || "(none)", Note: note }), "", message].join("\n"),
  });

  return Response.json({
    ok: true,
    delivered: inbox.sent,
    message: inbox.sent ? "Sent. Unc reads his own email." : "Logged on the server. Email is not configured here yet.",
  });
}
