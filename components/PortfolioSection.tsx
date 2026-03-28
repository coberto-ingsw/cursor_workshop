"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useContent } from "@/contexts/LanguageContext";
import { fadeUpVariants, viewportOnce } from "@/lib/motion";

export function PortfolioSection() {
  const { portfolio } = useContent();
  const reduced = useReducedMotion() ?? false;
  const variants = fadeUpVariants(reduced);

  return (
    <section id="portfolio" className="bg-white py-24 dark:bg-zinc-900 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="mb-16"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {portfolio.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            {portfolio.subheading}
          </p>
        </motion.div>

        <div className="grid gap-0 md:grid-cols-2">
          {portfolio.items.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group border-t border-zinc-200 py-8 dark:border-zinc-700 ${
                i % 2 === 0
                  ? "md:pr-8"
                  : "md:border-l md:pl-8"
              }`}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={reduced ? undefined : { delay: i * 0.08 }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
                  {item.label}
                </h3>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
