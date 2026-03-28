"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useContent } from "@/contexts/LanguageContext";
import { fadeUpVariants, viewportOnce } from "@/lib/motion";

export function AboutSection() {
  const { about } = useContent();
  const reduced = useReducedMotion() ?? false;
  const variants = fadeUpVariants(reduced);

  return (
    <section
      aria-labelledby="about-heading"
      className="bg-white py-24 dark:bg-zinc-900 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            About
          </p>
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl"
          >
            {about.heading}
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: prose + selected work */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                {about.selectedProjects.heading}
              </h3>
              <ul className="border-l-2 border-zinc-200 pl-6 dark:border-zinc-700 space-y-3">
                {about.selectedProjects.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: stack definition list */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={reduced ? undefined : { delay: 0.1 }}
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Stack
            </h3>
            <dl className="space-y-5">
              {about.stack.map((entry) => (
                <div key={entry.label} className="border-t border-zinc-200 pt-5 dark:border-zinc-700">
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    {entry.label}
                  </dt>
                  <dd className="text-sm text-zinc-700 dark:text-zinc-300">{entry.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
