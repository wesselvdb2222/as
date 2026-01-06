import { SpaceBackground } from "@/components/space-background"
import { Mail, Phone, MessageSquare } from "lucide-react"

export const metadata = {
  title: "Contact Us - YourHost",
  description: "Get in touch with YourHost for sales inquiries, technical support, or general questions.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#010901] pt-32 pb-16">
      <SpaceBackground />
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-white text-center">Contact Us</h1>

          <div className="p-8 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md space-y-8 text-gray-300">
            <h2 className="text-2xl font-semibold text-white mb-6">Get In Touch</h2>

            <p>Have questions about our services? Need technical support? Our team is here to help you.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-white font-medium text-lg mb-2">Email Us</h3>
                  <p className="text-gray-400">
                    General Inquiries:{" "}
                    <a href="mailto:info@yourhost.com" className="text-green-400 hover:text-green-300">
                      info@yourhost.com
                    </a>
                  </p>
                  <p className="text-gray-400">
                    Support:{" "}
                    <a href="mailto:support@yourhost.com" className="text-green-400 hover:text-green-300">
                      support@yourhost.com
                    </a>
                  </p>
                  <p className="text-gray-400">
                    Sales:{" "}
                    <a href="mailto:sales@yourhost.com" className="text-green-400 hover:text-green-300">
                      sales@yourhost.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-white font-medium text-lg mb-2">Call Us</h3>
                  <p className="text-gray-400">
                    Support:{" "}
                    <a href="tel:+18001234567" className="text-green-400 hover:text-green-300">
                      +1 (800) 123-4567
                    </a>
                  </p>
                  <p className="text-gray-400">
                    Sales:{" "}
                    <a href="tel:+18009876543" className="text-green-400 hover:text-green-300">
                      +1 (800) 987-6543
                    </a>
                  </p>
                  <p className="text-gray-400">
                    International:{" "}
                    <a href="tel:+442012345678" className="text-green-400 hover:text-green-300">
                      +44 (20) 1234-5678
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:col-span-2">
                <MessageSquare className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-white font-medium text-lg mb-2">Discord Ticket Support</h3>
                  <p className="text-gray-400 mb-3">
                    Get faster support by joining our Discord server and opening a support ticket. Our team is available
                    24/7 to assist you with any issues or questions.
                  </p>
                  <a
                    href="https://discord.gg/yourhost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-black font-bold rounded-md transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    Join Our Discord
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-green-500/20">
              <h3 className="text-white font-medium text-lg mb-4">Business Hours</h3>
              <p className="text-gray-400">
                <strong>Technical Support:</strong> 24/7/365
              </p>
              <p className="text-gray-400">
                <strong>Sales & General Inquiries:</strong>
                <br />
                Monday - Friday: 9:00 AM - 6:00 PM (PST)
                <br />
                Saturday: 10:00 AM - 4:00 PM (PST)
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
