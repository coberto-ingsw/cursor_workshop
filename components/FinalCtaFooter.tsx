"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { useContent } from "@/contexts/LanguageContext";
import { fadeUpVariants, viewportOnce } from "@/lib/motion";

const externalLinkProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer",
};

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function FinalCtaFooter() {
  const { finalCta, footer, links, brand } = useContent();
  const reduced = useReducedMotion() ?? false;
  const year = new Date().getFullYear();

  return (
    <>
      <section
        aria-labelledby="final-cta-heading"
        className="relative overflow-hidden bg-zinc-900 py-24 text-white dark:bg-zinc-800 sm:py-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUpVariants(reduced)}
            className="text-center"
          >
            <h2
              id="final-cta-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {finalCta.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-300">{finalCta.body}</p>
            <a
              href={links.calendly}
              {...externalLinkProps}
              className="mt-10 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:scale-105 active:scale-95 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {finalCta.cta}
            </a>
            <p className="mt-4 text-sm text-zinc-500">{finalCta.subline}</p>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-zinc-950 py-12 text-zinc-400 dark:border-zinc-700">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUpVariants(reduced)}
            className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
          >
            <div className="space-y-1">
              <p className="font-semibold text-zinc-200">{brand.name}</p>
              <p className="text-sm">
                © {year} {brand.name}. {footer.rightsLabel}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={links.email}
                className="inline-flex items-center gap-2 text-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                {links.emailDisplay}
              </a>
              <a
                href={links.whatsapp}
                {...externalLinkProps}
                className="inline-flex items-center gap-2 text-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                {links.whatsappDisplay}
              </a>
              <div className="flex items-center gap-4">
                <a
                  href={links.linkedin}
                  {...externalLinkProps}
                  aria-label="LinkedIn"
                  className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <a
                  href={links.x}
                  {...externalLinkProps}
                  aria-label="X (Twitter)"
                  className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
                >
                  <XIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
