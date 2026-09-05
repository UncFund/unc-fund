"use client";

import { safeName } from "./files";

/**
 * Uploads a file browser-to-Blob using a token from /api/deck-upload.
 * Returns the URL, or null if the direct path is unavailable (for example no Blob token in local dev),
 * in which case the caller should send the file with the form instead.
 */
export async function uploadDirect(file: File, folder: "decks" | "contact"): Promise<string | null> {
  try {
    const { upload } = await import("@vercel/blob/client");
    const blob = await upload(`${folder}/${Date.now()}-${safeName(file.name)}`, file, {
      access: "public",
      handleUploadUrl: "/api/deck-upload",
      contentType: file.type || "application/octet-stream",
    });
    return blob.url;
  } catch (e) {
    console.warn("[upload] direct upload unavailable, falling back to form post", e);
    return null;
  }
}
