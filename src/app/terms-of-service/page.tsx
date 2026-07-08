import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

const TITLE = "Terms of Service";
const DESCRIPTION =
  "The terms and conditions that apply when you order services from AllSourced.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/terms-of-service",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Topbar />
      <main className="flex-1 bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted">
            Effective date: July 8, 2026
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_p+p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            <section>
              <h2>1. About AllSourced</h2>
              <p>
                AllSourced (&ldquo;AllSourced&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;) is registered at Keizersgracht 520 H, 1017
                EK Amsterdam, the Netherlands. These Terms of Service
                (&ldquo;Terms&rdquo;) govern your use of our website and any
                services you order from us.
              </p>
            </section>

            <section>
              <h2>2. Acceptance of These Terms</h2>
              <p>
                By placing an order, contacting us to request a service, or
                otherwise using our website, you agree to be bound by these
                Terms. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2>3. Services</h2>
              <p>
                We provide e-commerce backend services, including but not
                limited to Meta (Facebook and Instagram) account structures,
                email marketing flows, Google advertising services, and
                order fulfillment. The specific scope of each service is
                described on the relevant service page or agreed with you
                directly.
              </p>
            </section>

            <section>
              <h2>4. Orders and Payment</h2>
              <p>
                Orders are placed through WhatsApp or another channel we
                agree on. Prices listed on our website are in euros and may
                change without prior notice. Payment terms (upfront,
                one-time, or recurring) are confirmed with you before work
                begins. For Fulfillment services, a minimum daily order
                quantity applies as stated on the Fulfillment page.
              </p>
            </section>

            <section>
              <h2>5. B2B Transactions and Refunds</h2>
              <p>
                Our services are offered exclusively to businesses (B2B) and
                not to consumers. As a result, statutory consumer protection
                rights, including any cooling-off period or right of
                withdrawal that may otherwise apply to consumer purchases,
                do not apply to orders placed with AllSourced. All sales are
                final: payments are non-refundable once an order has been
                placed, except where a warranty or replacement is expressly
                offered for the relevant service, as described in Section
                7.
              </p>
            </section>

            <section>
              <h2>6. Delivery and Turnaround Times</h2>
              <p>
                Indicated delivery times (for example &ldquo;instant&rdquo;
                or &ldquo;4&ndash;8 hours&rdquo;) are estimates, not
                guarantees. Actual delivery may take longer due to platform
                review processes, verification requirements, or factors
                outside our control.
              </p>
            </section>

            <section>
              <h2>7. Warranty and Replacements</h2>
              <p>
                Where a warranty or free replacement period is stated for a
                specific service or package, it applies only to the issue
                described (for example, an account being disabled through
                no fault of your own) and is valid for the period stated on
                the relevant service page. Misuse of a product or service in
                violation of the platform&rsquo;s own terms voids the
                warranty.
              </p>
            </section>

            <section>
              <h2>8. Platform Risk and Disclaimer</h2>
              <p>
                AllSourced is an independent agency and is not affiliated
                with, authorized, maintained, sponsored, or endorsed by Meta
                Platforms, Inc., Google, or any other third-party platform.
                Advertising accounts, business managers, and profiles are
                subject to the policies of those platforms, which are
                outside our control. We cannot guarantee that an account
                will not be restricted, disabled, or banned by the platform
                after delivery.
              </p>
            </section>

            <section>
              <h2>9. Client Responsibilities</h2>
              <ul>
                <li>
                  You are responsible for using any account, asset, or
                  service we provide in accordance with the relevant
                  platform&rsquo;s terms of service.
                </li>
                <li>
                  You are responsible for the accuracy of the information
                  you provide to us (billing details, business information,
                  creative assets, and so on).
                </li>
                <li>
                  You may not resell, sublicense, or misrepresent our
                  services as your own without our written agreement.
                </li>
              </ul>
            </section>

            <section>
              <h2>10. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, and
                logos, is owned by AllSourced or its licensors and may not
                be copied or reused without permission. Any creative assets
                or account structures we deliver to you as part of a paid
                service become yours to use for the purpose agreed, unless
                stated otherwise.
              </p>
            </section>

            <section>
              <h2>11. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, AllSourced is not
                liable for indirect, incidental, or consequential damages,
                including lost profits or lost advertising spend, arising
                from your use of our services. Our total liability for any
                claim is limited to the amount you paid for the service
                giving rise to the claim.
              </p>
            </section>

            <section>
              <h2>12. Termination</h2>
              <p>
                We may suspend or refuse service at our discretion, in
                particular where we suspect fraud, abuse, or a violation of
                these Terms. You may stop using our services at any time;
                any fees already paid for delivered work are non-refundable
                unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2>13. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Changes take
                effect once posted on this page. Continued use of our
                services after a change constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            <section>
              <h2>14. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the Netherlands. Any
                disputes will be submitted to the competent court in
                Amsterdam, the Netherlands.
              </p>
            </section>

            <section>
              <h2>15. Contact</h2>
              <p>
                Questions about these Terms can be sent to us via WhatsApp
                at +31 6 47415437, or by mail to AllSourced, Keizersgracht
                520 H, 1017 EK Amsterdam, the Netherlands.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
