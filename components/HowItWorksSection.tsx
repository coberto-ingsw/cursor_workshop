"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useContent } from "@/contexts/LanguageContext";
import { fadeUpVariants, viewportOnce } from "@/lib/motion";

export function HowItWorksSection() {
  const { process } = useContent();
  const reduced = useReducedMotion() ?? false;
  const variants = fadeUpVariants(reduced);

  return (
    <section className="bg-zinc-50 py-24 dark:bg-zinc-950 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="mb-16"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Process
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {process.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            {process.subheading}
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-3">
          {process.steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative pl-5 border-l-2 border-emerald-500"
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={reduced ? undefined : { delay: i * 0.1 }}
            >
              <span
                aria-hidden
                className="absolute -top-3 -left-1 select-none text-7xl font-bold leading-none text-zinc-100 dark:text-zinc-800"
              >
                {step.number}
              </span>
              <div className="relative">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
