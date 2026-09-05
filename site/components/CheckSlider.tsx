"use client";

import { useState } from "react";
import Unc from "./Unc";

function line(v: number): string {
  if (v < 1000) return "Five hundred bucks. Buy the domain. Send me the link.";
  if (v < 4000) return "That's a real check. Don't spend it all on a logo.";
  if (v < 8000) return "Now we're talking. Unc wants a monthly update. Two sentences is fine.";
  return "Nine thousand nine hundred ninety-nine. Unc is emotionally invested. Don't make him regret this.";
}

export default function CheckSlider() {
  const [v, setV] = useState(2500);
  const mood = v >= 8000 ? "approve" : v < 1000 ? "think" : "happy";
  return (
    <div className="slider-row">
      <div className="check-slider">
        <div className="eyebrow">How much does Unc believe in you?</div>
        <div className="amt mono" aria-live="polite">${v.toLocaleString("en-US")}</div>
        <input type="range" min={500} max={9999} step={1} value={v} onChange={(e) => setV(Number(e.target.value))} aria-label="Check size" />
        <div className="say">&ldquo;{line(v)}&rdquo;</div>
      </div>
      <Unc mood={mood} size={150} wave={false} follow={false} />
    </div>
  );
}
