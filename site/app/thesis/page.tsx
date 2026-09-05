import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Thesis", description: "What Unc funds and why." };

export default function ThesisPage() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">Thesis</div>
          <h1>The first check. Not the first institutional check. The first check.</h1>
        </div>
      </header>
      <section>
        <div className="wrap prose">
          <p>
            Unc funds the frontier. Blockchain, AI, software, robotics. The stuff Unc reads about and doesn&apos;t fully understand,
            which is exactly why it needs funding.
          </p>
          <p>
            We write the first check. Three or four figures. Before the deck is done. Before the company exists, sometimes.
          </p>
          <h3>Why so small?</h3>
          <p>
            Because that is what Unc has, and because a small check early beats a big check never. Enough for a domain, a demo, a
            month of API credits, a flight to a customer. Enough to find out if the thing is real.
          </p>
          <h3>Why frontier tech?</h3>
          <p>
            Because that is where Unc spends his time, and because pre-seed money in these categories goes to people with warm
            intros. Unc is the warm intro.
          </p>
          <h3>What Unc looks for</h3>
          <ul className="plain">
            <li>A founder who has already built something, however small, without permission or money.</li>
            <li>A one-liner Unc can repeat to a friend.</li>
            <li>A reason this has to exist now and not in 2019.</li>
            <li>A plan for the first $2,500 that is embarrassingly specific.</li>
          </ul>
          <h3>How it works</h3>
          <p>
            Post-money SAFE, standard terms, uncapped with MFN on the smallest checks so nobody argues about a $500 valuation.
            One form, one call, answer in seven days. If it is a no, you get the reason.
          </p>
          <h3>What comes with the money</h3>
          <p>
            You become a nephew. That is what Unc calls every company he backs. Nephews get intros when Unc has them, office
            hours weekly, the nephew group chat, and a vest, eventually.
          </p>
          <p>
            <Link href="/pitch" className="btn btn-primary">Pitch Unc</Link>
          </p>
        </div>
      </section>
    </>
  );
}
