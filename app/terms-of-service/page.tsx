import { SpaceBackground } from "@/components/space-background"

export const metadata = {
  title: "Terms of Service - AllSourced (Ceex)",
  description: "Terms and conditions for using AllSourced services operated by Ceex.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#010901] pt-32 pb-16">
      <SpaceBackground />
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-white">Terms and Conditions – AllSourced (operated by Ceex)</h1>

          <div className="p-8 border rounded-lg border-primary-500/20 bg-[#010901]/70 backdrop-blur-md space-y-6 text-gray-300">
            <section>
              <p><strong>Business name:</strong> AllSourced</p>
              <p><strong>Date published:</strong> 21-4-2025</p>
              <p><strong>KVK Number:</strong> 97995177</p>
              <p><strong>Business Address:</strong> Keizersgracht 520 H, 1017EK Amsterdam, The Netherlands</p>
              <p><strong>Governing Law:</strong> Dutch Law</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Definitions</h2>
              <p>
                “AllSourced”, “Ceex”, “we”, or “us” refers to the registered company Ceex operating under the trade name AllSourced.
                “Client” refers exclusively to the business (B2B) customer entering into a service agreement with us.
                “Services” refer to all digital services provided by AllSourced, including but not limited to consultancy, development, and platform-based solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Applicability</h2>
              <p>
                These Terms and Conditions apply to all offers, agreements, and services delivered by AllSourced to business clients. 
                By engaging our services, the Client agrees to these terms. Deviations from these terms must be explicitly agreed to in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Business-to-Business Only</h2>
              <p>
                AllSourced exclusively provides services to companies, entrepreneurs, and other commercial parties. 
                We do not offer services to consumers (individuals acting outside a professional or business capacity).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. No Refunds Policy</h2>
              <p>
                All fees and payments made to AllSourced are non-refundable, regardless of performance or usage. 
                By agreeing to our services, the Client explicitly waives any right to refund this because we only sell B2B.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. No Liability</h2>
              <p>
                To the maximum extent permitted under Dutch law, AllSourced shall not be held liable for any direct, indirect, incidental, or consequential damages 
                arising from the use of our services. This includes, but is not limited to, loss of data, profit, revenue, or business interruption.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h2>
              <p>
                Unless otherwise agreed, all intellectual property created or used during the delivery of services remains the property of AllSourced or its licensors. 
                The Client receives a non-exclusive, non-transferable right to use the deliverables for internal business purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Confidentiality</h2>
              <p>
                Both parties agree to treat all non-public information as confidential and not to disclose such information to third parties 
                without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
              <p>
                We reserve the right to terminate or suspend services at any time if the Client breaches these terms or applicable laws. 
                In case of termination, no refunds shall be provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Governing Law and Jurisdiction</h2>
              <p>
                All agreements and disputes shall be governed by and interpreted in accordance with the laws of the Netherlands. 
                The competent court of Den Haag (the Netherlands) shall have exclusive jurisdiction over any disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Amendments</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. 
                The most recent version will always be published on our website. Continued use of our services implies acceptance of the updated terms.
              </p>
            </section>

            <div className="pt-4 text-sm text-gray-400">Last updated: April 21, 2025</div>
          </div>
        </div>
      </div>
    </div>
  )
}
