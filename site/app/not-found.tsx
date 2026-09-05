import Link from "next/link";
import Unc from "@/components/Unc";

export default function NotFound() {
  return (
    <section>
      <div className="wrap result">
        <Unc mood="think" size={120} wave={false} />
        <div>
          <h1>Unc can&apos;t find that page.</h1>
          <p>To be fair, Unc can&apos;t find most things. Try the <Link href="/">home page</Link> or <Link href="/pitch">pitch him</Link> anyway.</p>
        </div>
      </div>
    </section>
  );
}
