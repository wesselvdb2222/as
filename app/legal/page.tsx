import { SpaceBackground } from "@/components/space-background"
import Link from "next/link"

export const metadata = {
  title: "Legal Information - YourHost",
  description: "Legal information, compliance, and policies for YourHost services.",
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#010901] pt-32 pb-16">
      <SpaceBackground />
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-white">Legal Information</h1>

          <div className="p-8 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Company Information</h2>
              <p>YourHost is operated by YourHost Technologies, Inc., a company registered in Delaware, USA.</p>
              <p className="mt-2">
                Registration Number: 12345678
                <br />
                VAT ID: US123456789
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Legal Documents</h2>
              <p>The following legal documents govern your use of our services:</p>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/terms-of-service" className="text-green-400 hover:text-green-300 flex items-center">
                    <span className="mr-2">Terms of Service</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Link>
                  <p className="text-sm text-gray-400 mt-1">Our terms and conditions for using YourHost services.</p>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-green-400 hover:text-green-300 flex items-center">
                    <span className="mr-2">Privacy Policy</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Link>
                  <p className="text-sm text-gray-400 mt-1">How we collect, use, and protect your personal data.</p>
                </li>
                <li>
                  <Link href="#" className="text-green-400 hover:text-green-300 flex items-center">
                    <span className="mr-2">Acceptable Use Policy</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Link>
                  <p className="text-sm text-gray-400 mt-1">Guidelines for acceptable use of our services.</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Compliance</h2>
              <p>YourHost is committed to complying with all applicable laws and regulations, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>General Data Protection Regulation (GDPR)</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>Children's Online Privacy Protection Act (COPPA)</li>
                <li>Payment Card Industry Data Security Standard (PCI DSS)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Copyright</h2>
              <p>
                All content on this website, including text, graphics, logos, icons, images, and software, is the
                property of YourHost or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Trademarks</h2>
              <p>
                YourHost and the YourHost logo are trademarks of YourHost Technologies, Inc. All other trademarks,
                service marks, and logos used on this website are the property of their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <p>
                For legal inquiries, please contact:
                <br />
                legal@yourhost.com
                <br />
                YourHost Technologies, Inc.
                <br />
                123 Hosting Street
                <br />
                San Francisco, CA 94105
                <br />
                United States
              </p>
            </section>

            <div className="pt-4 text-sm text-gray-400">Last updated: April 24, 2025</div>
          </div>
        </div>
      </div>
    </div>
  )
}
