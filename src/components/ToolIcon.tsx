import type { Tool } from "@/lib/site";

const paths: Record<Tool["icon"], React.ReactNode> = {
  "shield-key": (
    <>
      <path d="M12 3 19 6v5.5c0 4.3-2.9 8-7 9.5-4.1-1.5-7-5.2-7-9.5V6l7-3Z" />
      <circle cx="12" cy="10.5" r="2" />
      <path d="M12 12.5V16" />
    </>
  ),
  "user-check": (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6 1.3 0 2.5.4 3.5 1.1" />
      <path d="m15 18 2 2 4-4.5" />
    </>
  ),
};

export function ToolIcon({ icon }: { icon: Tool["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden
    >
      {paths[icon]}
    </svg>
  );
}
