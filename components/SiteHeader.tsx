"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { fadeUpVariants } from "@/lib/motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useContent } from "@/contexts/LanguageContext";

const externalLinkProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer",
};

export function SiteHeader() {
  const { brand, nav, links } = useContent();
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeUpVariants(reduced)}
      className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/70 backdrop-blur-md dark:border-zinc-700/60 dark:bg-zinc-900/70"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="#top"
          className="min-w-0 shrink font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          <span className="block truncate">{brand.name}</span>
          <span className="block truncate text-xs font-normal text-zinc-500 dark:text-zinc-400 sm:text-sm">
            {brand.tagline}
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href={links.calendly}
            {...externalLinkProps}
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-emerald-500"
          >
            {nav.primaryCta}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
