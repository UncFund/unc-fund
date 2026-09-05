import type { Metadata } from "next";
import Link from "next/link";
import Unc from "@/components/Unc";

export const metadata: Metadata = { title: "Portfolio", description: "Companies Unc has backed." };

// Add entries here as checks go out.
const portfolio: { name: string; oneLiner: string; category: string; amount: string; date: string; url?: string }[] = [];

export default function PortfolioPage() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">Portfolio</div>
          <h1>Backed by Unc.</h1>
        </div>
      </header>
      <section>
        <div className="wrap">
          {portfolio.length === 0 ? (
            <div className="empty">
              <Unc size={110} wave={false} follow={false} mood="think" />
              <div>
                <b>No checks yet.</b>
                <p style={{ margin: "6px 0 10px" }}>The first one is coming, and there will be a photo. Want it to be you?</p>
                <Link href="/pitch" className="btn btn-primary">Pitch Unc</Link>
              </div>
            </div>
          ) : (
            <div className="tiles">
              {portfolio.map((c) => (
                <div className="tile" key={c.name}>
                  <h3>{c.url ? <a href={c.url}>{c.name}</a> : c.name}</h3>
                  <p>{c.oneLiner}</p>
                  <p className="say mono">{c.category} · {c.amount} · {c.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
