import type { Metadata } from "next";

export const metadata: Metadata = { title: "Notes", description: "Unc's takes on frontier tech and small checks." };

// Posts live here for now. Move to Markdown files or a CMS when there are more than a handful.
const posts: { slug: string; title: string; date: string; body: string }[] = [
  {
    slug: "why-500-dollars",
    title: "Why Unc writes $500 checks",
    date: "2026-09-05",
    body:
      "Because the first dollar is the hardest one to get and the easiest one to give. A $500 check will not build your company. It will buy the domain, the demo, or the flight, and it will tell you that one person who was not your mother believed you. That is worth more than the money, which is convenient, because the money is not much.",
  },
];

export default function NotesPage() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">Notes</div>
          <h1>Unc&apos;s takes.</h1>
        </div>
      </header>
      <section>
        <div className="wrap prose">
          {posts.map((p) => (
            <article key={p.slug} id={p.slug} style={{ marginBottom: 36 }}>
              <div className="eyebrow mono">{p.date}</div>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
              <p style={{ color: "var(--unc-vest)", fontFamily: "var(--font-display)" }}>Proud of you. — Unc</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
