"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cloud, Gauge, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { type ServiceIconId } from "@/constants/content";
import { useContent } from "@/contexts/LanguageContext";
import { fadeUpVariants, viewportOnce } from "@/lib/motion";

const icons: Record<ServiceIconId, LucideIcon> = {
  Layers,
  Cloud,
  Gauge,
};

export function ServicesSection() {
  const { services } = useContent();
  const reduced = useReducedMotion() ?? false;
  const variants = fadeUpVariants(reduced);

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-zinc-50 py-24 dark:bg-zinc-950 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="mb-16"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Services
          </p>
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl"
          >
            {services.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            {services.subheading}
          </p>
        </motion.div>

        <div className="grid gap-0 md:grid-cols-3">
          {services.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <motion.article
                key={item.id}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={reduced ? undefined : { delay: i * 0.08 }}
                className={`border-t border-zinc-200 py-10 dark:border-zinc-700 ${i > 0 ? "md:border-l md:pl-8" : ""}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {item.number}
                  </span>
                  <Icon className="h-5 w-5 text-zinc-400 dark:text-zinc-500" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
