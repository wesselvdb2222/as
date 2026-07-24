import Link from "next/link";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/31647415437"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-60 [animation-duration:2.5s]" />
      <WhatsAppIcon className="h-7 w-7" />
    </Link>
  );
}
