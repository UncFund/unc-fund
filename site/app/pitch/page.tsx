import type { Metadata } from "next";
import PitchForm from "@/components/PitchForm";
import Unc from "@/components/Unc";

export const metadata: Metadata = {
  title: "Pitch Unc",
  description: "Send Unc your startup and your deck. $500 to $9,999 first checks into blockchain, AI, software and robotics. Decision in a week.",
};

export default function PitchPage() {
  return (
    <>
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Pitch Unc</div>
            <h1>Five minutes. One deck. One Unc.</h1>
            <p className="lede">
              Fill this in and attach your deck. Unc reads every one himself and answers within a week, yes or no, with a reason.
            </p>
          </div>
          <div className="unc-wrap">
            <Unc size={200} mood="think" wave={false} bubble="Reading. Slowly." />
          </div>
        </div>
      </header>
      <section>
        <div className="wrap">
          <PitchForm />
          <p className="hint" style={{ marginTop: 20, color: "var(--unc-ink-2)", fontSize: ".9rem" }}>
            Decks are stored privately and only Unc reads them. Prefer email? contactuncfund@gmail.com works too.
          </p>
        </div>
      </section>
    </>
  );
}
