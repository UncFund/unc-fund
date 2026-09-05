export const MAX_DECK_BYTES = 25 * 1024 * 1024; // 25 MB

export const ALLOWED_DECK_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation", // .pptx
  "application/vnd.ms-powerpoint", // .ppt
  "application/x-iwork-keynote-sffkey", // .key
  "application/vnd.apple.keynote",
  "application/zip", // some browsers report .key as zip
  "application/octet-stream", // unknown extension fallback, checked by name below
];

export const ALLOWED_DECK_EXT = [".pdf", ".pptx", ".ppt", ".key"];

export function deckLooksAllowed(name: string, type: string): boolean {
  const lower = name.toLowerCase();
  const extOk = ALLOWED_DECK_EXT.some((e) => lower.endsWith(e));
  const typeOk = !type || ALLOWED_DECK_TYPES.includes(type);
  return extOk && typeOk;
}

export function humanBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

export function safeName(name: string): string {
  return name.replace(/[^\w.\-]+/g, "_").slice(0, 120);
}
