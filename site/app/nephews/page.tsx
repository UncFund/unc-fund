import type { Metadata } from "next";
import Link from "next/link";
import Unc from "@/components/Unc";

export const metadata: Metadata = { title: "Nephews", description: "The companies Unc has backed. He calls them nephews." };

// Add a nephew here every time a check goes out.
const nephews: { name: string; oneLiner: string; category: string; amount: string; date: string; url?: string }[] = [];

export default function NephewsPage() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">Nephews</div>
          <h1>The companies Unc backed. He calls them nephews.</h1>
          <p className="lede">Anyone Unc writes a check to is a nephew. It&apos;s a title, not a description. Nephews get the group chat, the office hours, and a very proud Unc.</p>
        </div>
      </header>
      <section>
        <div className="wrap">
          {nephews.length === 0 ? (
            <div className="empty">
              <Unc size={110} wave={false} follow={false} mood="think" />
              <div>
                <b>No nephews yet.</b>
                <p style={{ margin: "6px 0 10px" }}>The first one is coming, and there will be a photo with a very large check. Want it to be you?</p>
                <Link href="/pitch" className="btn btn-primary">Pitch Unc</Link>
              </div>
            </div>
          ) : (
            <div className="tiles">
              {nephews.map((c) => (
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
