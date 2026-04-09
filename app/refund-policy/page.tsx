import { SpaceBackground } from "@/components/space-background"

export const metadata = {
  title: "Refund Policy - AllSourced",
  description: "Refund policy for AllSourced services.",
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#010901] pt-32 pb-16">
      <SpaceBackground />
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-white">Refund Policy</h1>

          <div className="p-8 border rounded-lg border-primary-500/20 bg-[#010901]/70 backdrop-blur-md space-y-6 text-gray-300">
            <section>
              <p><strong>Business name:</strong> AllSourced</p>
              <p><strong>Operated by:</strong> Ceex</p>
              <p><strong>KVK Number:</strong> 97995177</p>
              <p><strong>Last updated:</strong> April 2025</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white">1. No Refund Policy</h2>
              <p>
                All purchases made through AllSourced are <strong className="text-white">final and non-refundable</strong>. Once a payment has been processed, no refunds will be issued under any circumstances.
              </p>
              <p>
                This policy applies to all services offered by AllSourced, including but not limited to agency ad accounts, reinstated profiles, aged profiles, email marketing services, and any other digital products or services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white">2. B2B Transactions</h2>
              <p>
                AllSourced operates exclusively as a <strong className="text-white">Business-to-Business (B2B)</strong> service provider. All clients are businesses or entrepreneurs purchasing services for commercial purposes.
              </p>
              <p>
                Under Dutch law (<em>Burgerlijk Wetboek</em>), the statutory consumer right of withdrawal (14-day cooling-off period) does <strong className="text-white">not apply</strong> to B2B transactions. As such, no right of withdrawal or refund is granted to our clients.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white">3. Applicable Law</h2>
              <p>
                This refund policy is governed by and construed in accordance with the laws of <strong className="text-white">the Netherlands</strong>. Any disputes arising from or related to this policy shall be submitted to the competent court in the Netherlands.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white">4. Exceptions</h2>
              <p>
                In exceptional cases where AllSourced has demonstrably failed to deliver the agreed service entirely, AllSourced reserves the right — at its sole discretion — to offer a partial credit or alternative resolution. This does not constitute a right to a refund and is handled on a case-by-case basis.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white">5. Contact</h2>
              <p>
                If you have questions about this policy, please contact us:
              </p>
              <ul className="list-none space-y-1">
                <li>Email: <a href="mailto:info@allsourced.nl" className="text-primary-400 hover:underline">info@allsourced.nl</a></li>
                <li>Phone: <a href="https://api.whatsapp.com/send/?phone=31647415437&type=phone_number&app_absent=0" className="text-primary-400 hover:underline">+31 6 47415437</a></li>
                <li>Address: Keizersgracht 520 H, 1017EK Amsterdam, The Netherlands</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
