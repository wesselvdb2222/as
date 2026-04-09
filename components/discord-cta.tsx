export default function DiscordCTA() {
  return (
    <section className="py-16 bg-[#010901]/70 backdrop-blur-md border-t border-primary-500/20 mb-16">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Have any questions?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-400">
          Contact us via WhatsApp for instant support and answers to all your questions.
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=31647415437&text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-white font-bold bg-[#25D366] hover:bg-[#1ebe5d] rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 mr-2">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.789-1.48-1.761-1.655-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51h-.573c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.552 4.193 1.607 6.02L0 24l6.26-1.572C8.06 23.448 10.06 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.837 0-3.674-.495-5.26-1.44l-.375-.223-3.72.933.992-3.636-.248-.374C2.01 15.6 1.5 13.8 1.5 12 1.5 6.48 6.48 1.5 12 1.5S22.5 6.48 22.5 12 17.52 22.5 12 22.5z"/>
          </svg>
          Contact via WhatsApp
        </a>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-sm text-gray-400">11 minutes average response rate</span>
        </div>
      </div>
    </section>
  )
}
