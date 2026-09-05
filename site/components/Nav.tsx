import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="Unc.Fund home">
          <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#2F5D8A" />
            <path d="M18 18 Q32 12 46 18 L48 50 Q32 55 16 50 Z" fill="#F7F3EA" />
            <path d="M27 17 L32 30 L37 17 Z" fill="#2F5D8A" />
            <line x1="32" y1="30" x2="32" y2="52" stroke="#2F5D8A" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="29.5" y="28" width="5" height="7" rx="1.5" fill="#7FA7CF" />
          </svg>
          <span className="word">UNC<span className="light">.FUND</span></span>
        </Link>
        <ul>
          <li><Link href="/thesis">Thesis</Link></li>
          <li><Link href="/nephews">Nephews</Link></li>
          <li><Link href="/notes">Notes</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pitch" className="cta">Pitch Unc</Link></li>
        </ul>
      </div>
    </nav>
  );
}
