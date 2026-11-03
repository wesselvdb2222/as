import type { ServiceLink } from "@/lib/site";

const paths: Record<ServiceLink["icon"], React.ReactNode> = {
  meta: (
    <path d="M3 12c0-3 1.6-5.5 3.6-5.5 2.6 0 4.6 5.5 6.4 8.5 1.4 2.3 2.4 2.5 3.4 2.5 2 0 3.6-2.2 3.6-5.5S18.4 6.5 16.4 6.5c-2.6 0-4.6 5.5-6.4 8.5-1.4 2.3-2.4 2.5-3.4 2.5C4.6 17.5 3 15 3 12Z" />
  ),
  google: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.4-4.4" />
    </>
  ),
};

export function ServiceIcon({ icon }: { icon: ServiceLink["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      {paths[icon]}
    </svg>
  );
}
