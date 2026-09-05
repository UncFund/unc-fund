import type { Metadata } from "next";

export const metadata: Metadata = { title: "Anti-portfolio", description: "Deals Unc passed on. Unc will be wrong." };

// Add entries when Unc passes on something that goes on to do well. Honesty is the brand.
const passes: { name: string; why: string; whatHappened: string }[] = [];

export default function AntiPortfolioPage() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">Anti-portfolio</div>
          <h1>Deals Unc passed on because he didn&apos;t understand them.</h1>
          <p className="lede">The nephews Unc should have had. Every investor has this list. Most keep it private. Unc thinks the list is the point.</p>
        </div>
      </header>
      <section>
        <div className="wrap prose">
          {passes.length === 0 ? (
            <p>Empty for now. Give it a year.</p>
          ) : (
            <ul className="plain">
              {passes.map((p) => (
                <li key={p.name}>
                  <b>{p.name}.</b> Unc said: &ldquo;{p.why}&rdquo; What happened: {p.whatHappened}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
