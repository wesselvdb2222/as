"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/** AllSourced's WhatsApp number, with a short opener prefilled. Same widget as on /tools. */
const WHATSAPP_URL = `https://wa.me/31647415437?text=${encodeURIComponent("Hi! I have a question.")}`;

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function CloseIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className={className} aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm0-21.6A11.8 11.8 0 0 0 1.9 17.9L.2 24l6.3-1.6A11.8 11.8 0 1 0 12 .2Z" />
    </svg>
  );
}

/** "Talk to our team" bubble, bottom-right on every page. Support runs through WhatsApp only, so
 * the chat window says so and hands over to WhatsApp instead of pretending to be live chat. */
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  // Unread badge on the bubble until the visitor opens the chat once.
  const [seen, setSeen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          id="chat-window"
          role="dialog"
          aria-label="Talk to our team"
          className="w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-ink-soft shadow-2xl shadow-black/60"
        >
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/40">
              <Image src="/allsourced-icon.png" alt="" width={1637} height={961} className="h-4 w-auto" />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-ink-soft bg-[#25D366]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">AllSourced Support</p>
              <p className="text-xs text-white/50">We reply on WhatsApp</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-md p-1.5 text-white/50 hover:bg-white/5 hover:text-white">
              <CloseIcon className="h-[18px] w-[18px]" />
            </button>
          </div>

          <div className="space-y-3 px-4 py-5">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-4 py-3 text-sm leading-relaxed text-white/85">
              Hi! 👋 Our team is only available on WhatsApp.
            </div>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-4 py-3 text-sm leading-relaxed text-white/85">
              Send us a message and we&apos;ll help you out.
            </div>
          </div>

          <div className="px-4 pb-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] text-sm font-semibold text-[#0b2e17] transition hover:brightness-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        ref={toggleRef}
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          setSeen(true);
        }}
        aria-expanded={open}
        aria-controls="chat-window"
        aria-label={open ? "Close chat" : "Talk to our team"}
        title={open ? undefined : "Talk to our team"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-black/40 transition hover:scale-105 hover:bg-brand-light"
      >
        {open ? <CloseIcon className="h-[22px] w-[22px]" /> : <ChatIcon />}
        {!seen && (
          <span
            aria-hidden
            className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-black bg-red-500 px-1 text-[11px] font-bold leading-none text-white"
          >
            1
          </span>
        )}
      </button>
    </div>
  );
}
