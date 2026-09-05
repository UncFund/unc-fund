import { put } from "@vercel/blob";
import { safeName } from "./files";

/**
 * Stores an uploaded file in Vercel Blob when a token is configured.
 * Returns the URL, or a reason it was not stored.
 */
export async function storeFile(file: File, folder: string): Promise<{ url?: string; note?: string }> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return { note: `File "${file.name}" (${file.size} bytes) was attached but not stored: BLOB_READ_WRITE_TOKEN is not set.` };
  }
  try {
    const blob = await put(`${folder}/${Date.now()}-${safeName(file.name)}`, file, {
      access: "public",
      addRandomSuffix: true,
      contentType: file.type || undefined,
    });
    return { url: blob.url };
  } catch (e) {
    return { note: `File "${file.name}" could not be stored: ${(e as Error).message}` };
  }
}
