export default function DiscordCTA() {
  return (
    <section className="py-16 bg-[#010901]/70 backdrop-blur-md border-t border-primary-500/20 mb-16">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Have any questions?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-400">
          Join our Discord community to get instant support, connect with other users, and stay updated on the latest
          features and announcements.
        </p>
        <a
          href="https://discord.gg/yourhost"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-black font-bold bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-400 hover:to-primary-500 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)]"
        >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2"
              >
              <path d="M20.317 4.369a9.993 9.993 0 0 0-16.634 11.01L2 22l6.755-1.776a9.993 9.993 0 0 0 11.562-15.855zm-8.317 15c-1.676 0-3.293-.438-4.7-1.267l-.334-.197-4.006 1.053 1.07-3.902-.216-.353A7.993 7.993 0 1 1 12 19zm4.293-6.293a1 1 0 0 1-1.414 0l-2.293-2.293V7a1 1 0 1 1 2 0v2.586l1.293 1.293a1 1 0 0 1 0 1.414z"/>
              </svg>
          Contact Us
        </a>
      </div>
    </section>
  )
}
