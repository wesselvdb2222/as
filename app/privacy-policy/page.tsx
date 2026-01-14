import { SpaceBackground } from "@/components/space-background"

export const metadata = {
  title: "Privacy Policy - AllSourced (Ceex)",
  description: "Privacy policy and data handling practices for AllSourced services operated by Ceex.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#010901] pt-32 pb-16">
      <SpaceBackground />
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-white">Privacy Policy</h1>

          <div className="p-8 border rounded-lg border-primary-500/20 bg-[#010901]/70 backdrop-blur-md space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                At AllSourced (operated by AxisDigital), we value your privacy and are committed to handling personal data responsibly and transparently. 
                This privacy policy outlines how we collect, use, and protect business-related data in accordance with Dutch law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Data We Collect</h2>
              <p>
                As a business-to-business (B2B) service provider, we primarily collect data related to our clients' companies and representatives. 
                This may include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Company name and registration number (e.g., KVK)</li>
                <li>Business contact details: name, email, phone number of company representatives</li>
                <li>Billing and payment data</li>
                <li>Project and service usage data</li>
                <li>Technical data: IP address, browser type, system logs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
              <p>
                We process data only for legitimate business purposes, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Managing client relationships and fulfilling contracts</li>
                <li>Providing and improving our services</li>
                <li>Billing, invoicing, and accounting</li>
                <li>Ensuring security and preventing misuse of our services</li>
                <li>Compliance with Dutch legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
              <p>
                We apply strict technical and organizational measures to secure data from unauthorized access, alteration, or disclosure. 
                Access is restricted to authorized personnel with a legitimate business need.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
              <p>
                We retain data only as long as necessary to fulfill the purpose for which it was collected and to comply with legal, fiscal, or contractual requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p>
                Under the General Data Protection Regulation (GDPR), business clients or their representatives may request:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access to the personal data we hold</li>
                <li>Correction of inaccurate or outdated information</li>
                <li>Deletion of data when legally appropriate</li>
                <li>Restriction or objection to processing under certain conditions</li>
                <li>Portability of data, where applicable</li>
              </ul>
              <p className="mt-2">
                To exercise your rights, contact us using the details provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies</h2>
              <p>
                We may use cookies to improve website functionality and understand usage patterns. Cookies may store technical data and session identifiers 
                but are not used to profile individual users for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Access</h2>
              <p>
                We may share data with third parties only when necessary for service provision (e.g., hosting, invoicing) or when legally required. 
                All such parties are contractually obligated to handle data securely and in compliance with GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Updates to This Policy</h2>
              <p>
                We reserve the right to amend this Privacy Policy. Updates will be published on our website with the effective date noted below. 
                Continued use of our services implies agreement with the current version.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Information</h2>
              <p>
                For questions about this Privacy Policy or to exercise your rights, contact us at: <br />
                <strong>Email:</strong> info@allsourced.nl <br />
                <strong>Address:</strong> Keizersgracht 520 H, 1017EK Amsterdam, The Netherlands
              </p>
            </section>

            <div className="pt-4 text-sm text-gray-400">Last updated: April 21, 2025</div>
          </div>
        </div>
      </div>
    </div>
  )
}
