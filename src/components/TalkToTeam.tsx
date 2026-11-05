import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/site";

/** Who visitors talk to. Set `photo` to a file in /public (e.g. "/team/wessel.jpg") to show a
 * real portrait instead of the initials. */
const TEAM_MEMBER = { name: "AllSourced team", role: "Account specialist", initials: "AS", photo: null as string | null };

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm0-21.6A11.8 11.8 0 0 0 1.9 17.9L.2 24l6.3-1.6A11.8 11.8 0 1 0 12 .2Z" />
    </svg>
  );
}

/** "Talk to our team" block on the homepage: a real person to reach on WhatsApp. */
export function TalkToTeam() {
  const member = TEAM_MEMBER;
  return (
    <section data-section="talk-to-team" className="bg-black px-5 py-14 sm:px-8 sm:py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#160c33] via-[#0b0716] to-black p-8 sm:p-12">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />

        <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <span className="relative shrink-0">
              {member.photo ? (
                <Image src={member.photo} alt={member.name} width={160} height={160} className="h-20 w-20 rounded-full object-cover ring-4 ring-white/10 sm:h-24 sm:w-24" />
              ) : (
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand text-2xl font-semibold text-white ring-4 ring-white/10 sm:h-24 sm:w-24">
                  {member.initials}
                </span>
              )}
              <span className="absolute bottom-1 right-1 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-[#0b0716] bg-emerald-400" />
              </span>
            </span>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Talk to our team</h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                Questions about ad accounts or structures? Message {member.name.startsWith("AllSourced") ? "us" : member.name.split(" ")[0]} on WhatsApp
                and get a reply fast.
              </p>
              <p className="mt-2 text-xs text-white/40">
                {member.name} · {member.role}
              </p>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
