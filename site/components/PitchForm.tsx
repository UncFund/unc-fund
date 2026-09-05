"use client";

import { FormEvent, useState } from "react";
import FileDrop from "./FileDrop";
import Unc from "./Unc";
import { uploadDirect } from "@/lib/clientUpload";

type State = { status: "idle" | "uploading" | "sending" | "done" | "error"; message?: string };

export default function PitchForm() {
  const [deck, setDeck] = useState<File | null>(null);
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.delete("deck");

    try {
      if (deck) {
        setState({ status: "uploading", message: "Uploading the deck…" });
        const url = await uploadDirect(deck, "decks");
        if (url) fd.set("deckUrl", url);
        else fd.set("deck", deck, deck.name);
      }
      setState({ status: "sending", message: "Handing it to Unc…" });
      const res = await fetch("/api/pitch", { method: "POST", body: fd });
      const json = (await res.json()) as { ok: boolean; message?: string; error?: string };
      if (!res.ok || !json.ok) {
        setState({ status: "error", message: json.error || "Something broke. Email contactuncfund@gmail.com instead." });
        return;
      }
      setState({ status: "done", message: json.message });
      form.reset();
      setDeck(null);
    } catch {
      setState({ status: "error", message: "Network hiccup. Try again, or email contactuncfund@gmail.com." });
    }
  }

  if (state.status === "done") {
    return (
      <div className="result">
        <Unc mood="approve" size={120} wave={false} follow={false} />
        <div>
          <h2>Unc has it.</h2>
          <p>{state.message} You&apos;ll get a note from Unc by email either way.</p>
          <button className="btn btn-secondary" type="button" onClick={() => setState({ status: "idle" })}>Pitch another one</button>
        </div>
      </div>
    );
  }

  const busy = state.status === "uploading" || state.status === "sending";

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="row2">
        <div className="field">
          <label htmlFor="p-name">Your name</label>
          <input id="p-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="p-email">Email</label>
          <input id="p-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="p-handle">X handle <span className="hint">(optional)</span></label>
          <input id="p-handle" name="handle" type="text" placeholder="@" />
        </div>
        <div className="field">
          <label htmlFor="p-company">Company</label>
          <input id="p-company" name="company" type="text" required autoComplete="organization" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="p-one">One-liner</label>
        <input id="p-one" name="oneLiner" type="text" maxLength={140} required placeholder="What it is, in 140 characters." />
        <span className="hint">If Unc can&apos;t repeat it to a friend, it&apos;s too long.</span>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="p-cat">Category</label>
          <select id="p-cat" name="category" required defaultValue="">
            <option value="" disabled>Pick one</option>
            <option>Blockchain</option>
            <option>AI</option>
            <option>Software</option>
            <option>Robotics</option>
            <option>Unc won&apos;t get it but try</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="p-stage">Stage</label>
          <select id="p-stage" name="stage" required defaultValue="">
            <option value="" disabled>Pick one</option>
            <option>Idea</option>
            <option>Prototype</option>
            <option>Users</option>
            <option>Revenue</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="p-plan">What would you do with $2,500?</label>
        <textarea id="p-plan" name="plan" maxLength={2000} required placeholder="Be specific. A domain, a demo, a month of API credits, a flight to a customer." />
      </div>
      <div className="field">
        <label htmlFor="p-link">Link <span className="hint">(optional)</span></label>
        <input id="p-link" name="link" type="url" placeholder="Demo, repo, Loom, anything live." />
      </div>

      <FileDrop name="deck" label="Your deck" file={deck} onFile={setDeck} hint="PDF, PPTX or Keynote, up to 25 MB. Unc reads decks in bed, so PDF is kindest." />

      <label className="check">
        <input type="checkbox" name="agree" required />
        <span>I understand Unc&apos;s checks are small and his love is large.</span>
      </label>

      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />

      {state.status === "error" ? <div className="notice err">{state.message}</div> : null}

      <div>
        <button className="btn btn-primary" type="submit" disabled={busy}>
          {busy ? state.message : "Send it to Unc"}
        </button>
      </div>
    </form>
  );
}
