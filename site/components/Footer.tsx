import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="sig">Proud of you. — Unc</div>
        <div className="links">
          <a href="https://x.com/uncfund">@uncfund on X</a>
          <a href="mailto:contactuncfund@gmail.com">contactuncfund@gmail.com</a>
          <Link href="/pitch">Pitch Unc</Link>
          <Link href="/nephews">Nephews</Link>
          <Link href="/anti-portfolio">Anti-portfolio</Link>
        </div>
        <div className="legal">
          Unc Fund LLC invests its own money. Nothing on this site is an offer to sell securities, investment advice, or a promise
          that Unc understands your business. Unc Fund is not a registered investment adviser.
        </div>
      </div>
    </footer>
  );
}
