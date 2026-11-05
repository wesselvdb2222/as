import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How AllSourced collects, uses and protects personal data on allsourced-agency.com and in our tools.",
  path: "/privacy-policy",
});

/**
 * Privacy policy. Describes what the sites actually do (see lib/ and the tools app): keep it in
 * step when tracking, providers or retention change.
 */
export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-black to-[#0b0716]">
      <div className="mx-auto w-full max-w-3xl px-5 pb-24 pt-44 sm:px-8 sm:pt-52">
        <p className="text-sm font-semibold text-brand-light">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-white/50">Effective date: November 5, 2026</p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-white/60 [&_a]:text-brand-light [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:font-semibold [&_h3]:text-white/80 [&_p+p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          <section>
            <h2>1. Who we are</h2>
            <p>
              AllSourced (&ldquo;AllSourced&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), Keizersgracht 520 H, 1017 EK
              Amsterdam, the Netherlands, is the controller for the personal data described in this policy. It applies to
              allsourced-agency.com, including our tools at allsourced-agency.com/tools, and to the services you order from
              us.
            </p>
            <p>
              Questions or requests about your data: <a href="mailto:support@allsourced-agency.com">support@allsourced-agency.com</a>{" "}
              or +31 6 47415437.
            </p>
          </section>

          <section>
            <h2>2. What we collect and why</h2>

            <h3>Visiting our website</h3>
            <ul>
              <li>
                <strong className="text-white/80">Website statistics (our own).</strong> We count page views and clicks on
                links and buttons to see which pages and offers are used. For each visit we store the page, the referring
                website, your country (derived from your IP address by our hosting provider), your device type (mobile,
                tablet or desktop) and an anonymous visitor code. That code is a one-way hash of your IP address and browser
                that changes every day; we do not store your IP address and do not place cookies for this.
              </li>
              <li>
                <strong className="text-white/80">Google Analytics.</strong> We use Google Analytics to understand how
                visitors use our website. Google Analytics sets cookies and processes data such as your IP address, device
                and browser information, and the pages you visit.
              </li>
              <li>
                <strong className="text-white/80">Server logs.</strong> Our hosting provider processes technical data such
                as your IP address and browser to deliver and secure the website.
              </li>
            </ul>

            <h3>Contacting us</h3>
            <p>
              When you contact us by WhatsApp, email or phone, we process your name, contact details and the content of
              your messages to answer you and, if you order, to deliver our services. WhatsApp is provided by WhatsApp
              (Meta); its own privacy policy applies to messages sent through WhatsApp.
            </p>

            <h3>Clients</h3>
            <p>
              When you order our services we process your name, company details, email address, phone number, billing
              details, the services ordered, invoices and payments. We need this to perform our agreement with you and to
              meet our tax and accounting obligations. Card payments are handled by Stripe; we do not receive or store your
              full card details.
            </p>

            <h3>Our tools</h3>
            <ul>
              <li>
                <strong className="text-white/80">Account.</strong> If you create an account we store your email address and
                a securely hashed password, and use cookies to keep you signed in.
              </li>
              <li>
                <strong className="text-white/80">Wallet and payments.</strong> We keep a record of your top-ups and
                purchases. Top-ups are paid through Stripe.
              </li>
              <li>
                <strong className="text-white/80">Temporary SMS.</strong> When you rent a number we store the service,
                country, number, price and the verification code or message received. Numbers are provided by our SMS
                provider, which receives the service and country you selected but not your account details.
              </li>
              <li>
                <strong className="text-white/80">Temporary email.</strong> Temp mail works without an account. Your inbox is
                linked to your browser by a cookie. Emails sent to a temporary address are stored so you can read them and
                are deleted after 24 hours. To limit abuse we store an anonymous hash of the IP address that created an
                address. Incoming mail is received through Cloudflare.
              </li>
              <li>
                <strong className="text-white/80">2FA code generator and UID Checker.</strong> These run entirely in your
                browser. The 2FA key and the UID lists you enter are not sent to us. The UID Checker contacts
                Facebook&apos;s public servers directly from your browser to check each UID.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Legal bases</h2>
            <ul>
              <li><strong className="text-white/80">Contract:</strong> to deliver services you order, run your tools account and process your payments.</li>
              <li><strong className="text-white/80">Legal obligation:</strong> to keep invoices and accounting records.</li>
              <li><strong className="text-white/80">Legitimate interest:</strong> to answer questions, secure our website and tools, prevent abuse, and measure use of our website with our own cookieless statistics.</li>
              <li><strong className="text-white/80">Consent:</strong> for analytics cookies, where the law requires consent. You can withdraw your consent at any time.</li>
            </ul>
          </section>

          <section>
            <h2>4. Cookies and similar technologies</h2>
            <ul>
              <li><strong className="text-white/80">Strictly necessary:</strong> sign-in cookies for your tools account, and a cookie that links your temporary inbox to your browser (kept for up to 30 days).</li>
              <li><strong className="text-white/80">Preferences:</strong> your chosen display currency, stored in your browser (local storage).</li>
              <li><strong className="text-white/80">Analytics:</strong> Google Analytics cookies (such as <code>_ga</code>) to measure how the website is used.</li>
            </ul>
            <p>You can delete or block cookies in your browser settings. Blocking necessary cookies may stop the tools from working.</p>
          </section>

          <section>
            <h2>5. Who we share data with</h2>
            <p>We do not sell your personal data. We use service providers that process data on our behalf:</p>
            <ul>
              <li>Vercel (website hosting)</li>
              <li>Supabase (database and accounts; data stored in the EU)</li>
              <li>Google (Google Analytics)</li>
              <li>Stripe (payments)</li>
              <li>Cloudflare (receiving temporary email)</li>
              <li>Our SMS number provider (temporary numbers)</li>
              <li>Resend (sending emails such as invoices)</li>
              <li>WhatsApp / Meta (when you contact us through WhatsApp)</li>
            </ul>
            <p>We may also share data when required by law or to protect our rights.</p>
          </section>

          <section>
            <h2>6. International transfers</h2>
            <p>
              Some of these providers are based in, or process data in, countries outside the European Economic Area, such
              as the United States. Where that happens, the transfer is based on an adequacy decision (such as the EU-U.S.
              Data Privacy Framework) or the European Commission&apos;s standard contractual clauses.
            </p>
          </section>

          <section>
            <h2>7. How long we keep data</h2>
            <ul>
              <li>Temporary email addresses and their emails: 24 hours.</li>
              <li>Website statistics: as long as they are useful to us, in anonymised form.</li>
              <li>Messages and contact details: as long as needed to help you, and for the duration of our relationship.</li>
              <li>Invoices, payments and wallet records: 7 years, as required by Dutch tax law.</li>
              <li>Tools account data: until you ask us to delete your account, unless we must keep it longer by law.</li>
            </ul>
          </section>

          <section>
            <h2>8. Your rights</h2>
            <p>
              You have the right to access, correct or delete your personal data, to restrict or object to its processing,
              to data portability, and to withdraw consent at any time. To use these rights, email{" "}
              <a href="mailto:support@allsourced-agency.com">support@allsourced-agency.com</a>. We respond within one month.
            </p>
            <p>
              You can also file a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) at{" "}
              <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a>.
            </p>
          </section>

          <section>
            <h2>9. Security</h2>
            <p>
              We use appropriate technical and organisational measures to protect personal data, including encrypted
              connections (HTTPS), restricted access to our systems, and hashing of passwords and visitor codes.
            </p>
          </section>

          <section>
            <h2>10. Children</h2>
            <p>Our website, tools and services are not intended for anyone under 16, and we do not knowingly collect their data.</p>
          </section>

          <section>
            <h2>11. Changes to this policy</h2>
            <p>We may update this policy when our services or the law change. The effective date at the top shows when it was last updated.</p>
          </section>

          <section>
            <h2>12. Contact</h2>
            <p>
              AllSourced, Keizersgracht 520 H, 1017 EK Amsterdam, the Netherlands ·{" "}
              <a href="mailto:support@allsourced-agency.com">support@allsourced-agency.com</a> · +31 6 47415437
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
