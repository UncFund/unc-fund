import type { Metadata } from "next";
import Unc from "@/components/Unc";

export const metadata: Metadata = { title: "About", description: "Who is behind Unc Fund." };

export default function AboutPage() {
  return (
    <>
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">About</div>
            <h1>One real person. One cartoon uncle.</h1>
            <p className="lede">
              Unc Fund started as a joke between friends about the smallest possible VC fund. Then the domain was available.
            </p>
          </div>
          <div className="unc-wrap">
            <Unc size={200} bubble="That's me." />
          </div>
        </div>
      </header>
      <section>
        <div className="wrap prose">
          <h3>Unc</h3>
          <p>
            Mid-50s. Comfortable. Was in tech once, did well in the &apos;90s, now spends his time at demo days telling founders they
            remind him of a young somebody. Slightly behind on slang and uses it wrong on purpose. Writes small checks fast
            because life is short and so is his attention span.
          </p>
          <h3>The person writing the checks</h3>
          <p>
            Unc Fund LLC is a single-member company. One founder, personal money, no outside investors. That is why the checks are
            small and the decisions are fast: there is no committee to convince.
          </p>
          <p>
            {/* Replace with a real bio and photo before launch. */}
            Bio coming. Until then: builder, operator, occasional uncle.
          </p>
          <h3>Why the vest</h3>
          <p>
            Every investor in this business owns the same fleece vest. Unc owns it too. He just admits it, and he zips it exactly
            halfway.
          </p>
        </div>
      </section>
    </>
  );
}
