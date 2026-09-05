"use client";

import { useId, useRef, useState } from "react";
import { ALLOWED_DECK_EXT, humanBytes, MAX_DECK_BYTES } from "@/lib/files";

type Props = {
  name: string;
  label: string;
  hint?: string;
  file: File | null;
  onFile: (f: File | null) => void;
  required?: boolean;
};

export default function FileDrop({ name, label, hint, file, onFile, required }: Props) {
  const [over, setOver] = useState(false);
  const [err, setErr] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const id = useId();

  function accept(f: File | null) {
    setErr("");
    if (!f) return onFile(null);
    const lower = f.name.toLowerCase();
    if (!ALLOWED_DECK_EXT.some((e) => lower.endsWith(e))) {
      setErr("PDF, PPTX, PPT or Keynote only.");
      return;
    }
    if (f.size > MAX_DECK_BYTES) {
      setErr(`That's ${humanBytes(f.size)}. Max is 25 MB. Export a smaller PDF.`);
      return;
    }
    onFile(f);
  }

  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {required ? "" : <span className="hint">(optional)</span>}
      </label>
      <div
        className={`drop ${over ? "over" : ""}`}
        onClick={() => input.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            input.current?.click();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setOver(false);
          accept(e.dataTransfer.files?.[0] ?? null);
        }}
        role="button"
        tabIndex={0}
        aria-describedby={`${id}-hint`}
      >
        <input
          ref={input}
          id={id}
          name={name}
          type="file"
          accept=".pdf,.pptx,.ppt,.key,application/pdf"
          onChange={(e) => accept(e.target.files?.[0] ?? null)}
        />
        {file ? (
          <div>
            <span className="file">{file.name}</span> · {humanBytes(file.size)}
            <small>Click to swap it, or drop another file.</small>
          </div>
        ) : (
          <div>
            Drop your deck here, or click to choose
            <small id={`${id}-hint`}>{hint || "PDF, PPTX or Keynote. Up to 25 MB."}</small>
          </div>
        )}
      </div>
      {err ? <div className="hint" style={{ color: "var(--unc-orange)" }}>{err}</div> : null}
    </div>
  );
}
