import Link from "next/link";
import Unc from "@/components/Unc";
import CheckSlider from "@/components/CheckSlider";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Frontier-tech first checks</div>
            <h1>Small checks.<br />Big Unc energy.</h1>
            <p className="lede">
              Unc Fund writes the first $500 to $9,999 into blockchain, AI, software and robotics founders. Before the deck is
              finished. Before anyone else will. Decision in a week.
            </p>
            <div className="actions">
              <Link href="/pitch" className="btn btn-primary">Pitch Unc</Link>
              <a href="https://x.com/uncfund" className="btn btn-secondary">Follow @uncfund</a>
            </div>
          </div>
          <div className="unc-wrap">
            <Unc size={300} bubble="Proud of you." />
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="eyebrow">The check</div>
          <h2>How much does Unc believe in you?</h2>
          <p>Yes, these are real numbers. No, this is not a rolling fund. It is one Unc and his checkbook.</p>
          <CheckSlider />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="eyebrow">What Unc funds</div>
          <h2>Four things Unc reads about and doesn&apos;t fully understand</h2>
          <p>Which is exactly why they need funding.</p>
          <div className="tiles">
            <div className="tile">
              <h3>Blockchain</h3>
              <p>Infrastructure, wallets, onchain products people actually use. Not a token with a roadmap.</p>
              <p className="say">&ldquo;Explain it like I&apos;m your Unc. Because I am.&rdquo;</p>
            </div>
            <div className="tile">
              <h3>AI</h3>
              <p>Agents, tools and models applied to a real job that someone pays for today.</p>
              <p className="say">&ldquo;Does it work when the wifi is bad? Asking for me.&rdquo;</p>
            </div>
            <div className="tile">
              <h3>Software</h3>
              <p>Boring is fine. Boring with a customer is better. Boring with revenue makes Unc cry.</p>
              <p className="say">&ldquo;My nephew could build this. He did not. You did.&rdquo;</p>
            </div>
            <div className="tile">
              <h3>Robotics</h3>
              <p>Hardware that moves, senses or builds. Unc will ask to see it move.</p>
              <p className="say">&ldquo;Can it carry groceries. Follow-up: can it carry Unc.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="eyebrow">How it works</div>
          <h2>No 47-slide decks. No warm intro required.</h2>
          <div className="steps">
            <div className="step"><b>Fill the form</b><p>Five minutes. Attach a deck if you have one. If not, the one-liner will do.</p></div>
            <div className="step"><b>Talk to Unc</b><p>Twenty minutes on a call. Unc asks dumb questions. Smart founders answer them well.</p></div>
            <div className="step"><b>Money in a week</b><p>A yes means a SAFE, a wire, and you&apos;re a nephew now. A no still gets a reply and a reason.</p></div>
          </div>
          <p style={{ marginTop: 20 }}>
            <Link href="/pitch" className="btn btn-primary">Pitch Unc</Link>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="eyebrow">Nephews</div>
          <h2>Unc&apos;s first nephew is on the way.</h2>
          <p>
            Every company Unc backs is a nephew. When the first check lands there will be a photo of a very large novelty check
            and a very small number on it. The <Link href="/nephews">nephews</Link> page and the{" "}
            <Link href="/anti-portfolio">anti-portfolio</Link> fill in from there.
          </p>
        </div>
      </section>
    </>
  );
}
