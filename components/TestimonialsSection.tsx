"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useContent } from "@/contexts/LanguageContext";
import { fadeUpVariants, viewportOnce } from "@/lib/motion";

export function TestimonialsSection() {
  const { testimonials } = useContent();
  const reduced = useReducedMotion() ?? false;
  const variants = fadeUpVariants(reduced);

  return (
    <section className="bg-zinc-50 py-24 dark:bg-zinc-950 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          className="mb-16"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {testimonials.heading}
          </h2>
        </motion.div>

        <div className="space-y-0">
          {testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              className={i !== 0 ? "border-t border-zinc-200 pt-12 dark:border-zinc-800" : ""}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={reduced ? undefined : { delay: i * 0.1 }}
            >
              <p
                aria-hidden
                className="mb-4 font-serif text-5xl leading-none text-emerald-500 dark:text-emerald-400"
              >
                &ldquo;
              </p>
              <blockquote className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.quote}
              </blockquote>
              <div className="mt-6 pb-12">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">{item.author}</p>
                <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                  {item.role} · {item.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
