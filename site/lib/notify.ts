import { Resend } from "resend";

const TO = process.env.NOTIFY_TO || "contactuncfund@gmail.com";
const FROM = process.env.RESEND_FROM || "Unc <onboarding@resend.dev>";

type Mail = { to?: string; subject: string; text: string; replyTo?: string };

/** Sends through Resend when a key exists. Otherwise logs, so local dev still works. */
export async function sendMail(mail: Mail): Promise<{ sent: boolean; error?: string }> {
  const key = process.env.RESEND_API_KEY;
  const to = mail.to || TO;
  if (!key) {
    console.log(`[notify] no RESEND_API_KEY, would send to ${to}\nSubject: ${mail.subject}\n\n${mail.text}`);
    return { sent: false, error: "no_api_key" };
  }
  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from: FROM,
      to,
      subject: mail.subject,
      text: mail.text,
      replyTo: mail.replyTo,
    });
    if (error) {
      console.error("[notify] resend error", error);
      return { sent: false, error: error.message };
    }
    return { sent: true };
  } catch (e) {
    console.error("[notify] resend threw", e);
    return { sent: false, error: (e as Error).message };
  }
}

export function block(fields: Record<string, string | undefined>): string {
  return Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}
