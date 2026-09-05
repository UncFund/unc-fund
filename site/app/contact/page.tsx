import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Unc Fund. Attach a file if you like.",
};

export default function ContactPage() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1>Talk to Unc.</h1>
          <p className="lede">
            Pitching a company? Use the <a href="/pitch">pitch form</a> so nothing gets lost. Everything else goes here. You can
            attach a file.
          </p>
        </div>
      </header>
      <section>
        <div className="wrap">
          <ContactForm />
          <p style={{ marginTop: 20, color: "var(--unc-ink-2)", fontSize: ".9rem" }}>
            Or just email <a href="mailto:contactuncfund@gmail.com">contactuncfund@gmail.com</a>. Unc checks it more than he should.
          </p>
        </div>
      </section>
    </>
  );
}
