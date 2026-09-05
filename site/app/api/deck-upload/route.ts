import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { ALLOWED_DECK_TYPES, MAX_DECK_BYTES } from "@/lib/files";

/**
 * Issues short-lived tokens so the browser can upload a deck straight to Vercel Blob.
 * This is what lets decks bigger than the 4.5 MB serverless body limit through.
 */
export async function POST(request: Request): Promise<Response> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json({ error: "Blob storage is not configured." }, { status: 503 });
  }
  const body = (await request.json()) as HandleUploadBody;
  try {
    const json = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!pathname.startsWith("decks/") && !pathname.startsWith("contact/")) {
          throw new Error("Unexpected upload path.");
        }
        return {
          allowedContentTypes: ALLOWED_DECK_TYPES,
          maximumSizeInBytes: MAX_DECK_BYTES,
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({ pathname, at: Date.now() }),
        };
      },
      onUploadCompleted: async ({ blob }) => {
        console.log("[deck-upload] stored", blob.url);
      },
    });
    return Response.json(json);
  } catch (e) {
    return Response.json({ error: (e as Error).message }, { status: 400 });
  }
}
