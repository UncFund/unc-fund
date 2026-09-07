import { put } from "@vercel/blob";

/**
 * Writes a submission to Blob as JSON so it survives regardless of email.
 *
 * Email is best-effort: if Resend is not configured, or the key is wrong, or Resend is down,
 * the notification silently fails and the submission would otherwise exist only in a Vercel
 * runtime log that rotates away. A founder's pitch is the single most valuable thing this site
 * receives, so it gets written to durable storage first and emailed second.
 */
export async function archiveSubmission(
  kind: "pitch" | "contact",
  data: Record<string, unknown>,
): Promise<{ url?: string; error?: string }> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return { error: "BLOB_READ_WRITE_TOKEN is not set" };
  }
  try {
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const blob = await put(
      `submissions/${kind}/${stamp}.json`,
      JSON.stringify({ kind, receivedAt: new Date().toISOString(), ...data }, null, 2),
      { access: "public", addRandomSuffix: true, contentType: "application/json" },
    );
    return { url: blob.url };
  } catch (e) {
    return { error: (e as Error).message };
  }
}
