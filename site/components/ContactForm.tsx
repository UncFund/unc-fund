"use client";

import { FormEvent, useState } from "react";
import FileDrop from "./FileDrop";
import Unc from "./Unc";
import { uploadDirect } from "@/lib/clientUpload";

type State = { status: "idle" | "busy" | "done" | "error"; message?: string };

export default function ContactForm() {
  const [file, setFile] = useState<File | null>(null);
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.delete("file");
    setState({ status: "busy" });
    try {
      if (file) {
        const url = await uploadDirect(file, "contact");
        if (url) fd.set("fileUrl", url);
        else fd.set("file", file, file.name);
      }
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const json = (await res.json()) as { ok: boolean; message?: string; error?: string };
      if (!res.ok || !json.ok) {
        setState({ status: "error", message: json.error || "Something broke. Email contactuncfund@gmail.com instead." });
        return;
      }
      setState({ status: "done", message: json.message });
      form.reset();
      setFile(null);
    } catch {
      setState({ status: "error", message: "Network hiccup. Try again, or email contactuncfund@gmail.com." });
    }
  }

  if (state.status === "done") {
    return (
      <div className="result">
        <Unc mood="happy" size={120} wave={false} follow={false} />
        <div>
          <h2>Got it.</h2>
          <p>{state.message}</p>
          <button className="btn btn-secondary" type="button" onClick={() => setState({ status: "idle" })}>Send another</button>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="row2">
        <div className="field">
          <label htmlFor="c-name">Your name</label>
          <input id="c-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-topic">What&apos;s it about</label>
        <select id="c-topic" name="topic" defaultValue="General">
          <option>General</option>
          <option>Press</option>
          <option>Partnership</option>
          <option>Merch</option>
          <option>I want to put money in</option>
          <option>Something Unc won&apos;t understand</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="c-msg">Message</label>
        <textarea id="c-msg" name="message" required maxLength={4000} />
      </div>
      <FileDrop name="file" label="Attach a file" file={file} onFile={setFile} hint="Deck, one-pager, anything. PDF, PPTX or Keynote, up to 25 MB." />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />
      {state.status === "error" ? <div className="notice err">{state.message}</div> : null}
      <div>
        <button className="btn btn-primary" type="submit" disabled={state.status === "busy"}>
          {state.status === "busy" ? "Sending…" : "Send to Unc"}
        </button>
      </div>
    </form>
  );
}
