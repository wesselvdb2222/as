"use client";

import { usePathname } from "next/navigation";

/** Renders its children except on the given paths, e.g. to drop a footer block on one page. */
export function HiddenOn({ paths, children }: { paths: string[]; children: React.ReactNode }) {
  const pathname = usePathname();
  return paths.includes(pathname) ? null : children;
}
