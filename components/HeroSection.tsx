"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useContent } from "@/contexts/LanguageContext";

const externalLinkProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer",
};

function fadeLayer(reduced: boolean, delay: number): Pick<HTMLMotionProps<"div">, "initial" | "animate"> {
  if (reduced) return { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } };
  return {
    initial: { opacity: 0, y: 16 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", delay },
    },
  };
}

export function HeroSection() {
  const { hero, links, brand } = useContent();
  const reduced = useReducedMotion() ?? false;
  const workHref = links.portfolio ?? links.workAnchor;

  return (
    <section
      aria-labelledby="hero-title"
      className="border-b border-zinc-200/80 bg-gradient-to-b from-zinc-50 to-white dark:border-zinc-700/60 dark:from-zinc-950 dark:to-zinc-900"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left column */}
          <div>
            <motion.p
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400"
              {...fadeLayer(reduced, 0)}
            >
              {brand.subtitle}
            </motion.p>

            <motion.h1
              id="hero-title"
              className="mt-4 font-display text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl"
              {...fadeLayer(reduced, 0.08)}
            >
              {hero.headline.lead}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                {hero.headline.highlight1}
              </span>
              {hero.headline.middle}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                {hero.headline.highlight2}
              </span>
              {hero.headline.tail}
            </motion.h1>

            <motion.p
              className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
              {...fadeLayer(reduced, 0.16)}
            >
              {hero.subhead}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
              {...fadeLayer(reduced, 0.24)}
            >
              <a
                href={links.calendly}
                {...externalLinkProps}
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:scale-105 active:scale-95 dark:bg-emerald-600 dark:hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-emerald-500"
              >
                {hero.primaryCta}
              </a>
              <Link
                href={workHref}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm transition hover:scale-105 hover:border-zinc-400 hover:bg-zinc-50 active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-zinc-600 dark:hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
              >
                {hero.secondaryCta}
              </Link>
            </motion.div>

            <motion.p
              className="mt-6 text-xs text-zinc-400 dark:text-zinc-500"
              {...fadeLayer(reduced, 0.32)}
            >
              {hero.socialProof}
            </motion.p>
          </div>

          {/* Right column — stats strip */}
          <motion.div
            className="mt-16 lg:mt-0"
            {...fadeLayer(reduced, 0.4)}
          >
            <div className="grid grid-cols-3 gap-0 border-t border-zinc-200 dark:border-zinc-700 lg:border-t-0 lg:border-l lg:grid-cols-1 lg:gap-0">
              {hero.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-8 lg:py-10 ${i !== 0 ? "border-t border-zinc-200 dark:border-zinc-700" : ""} lg:pl-10 text-center lg:text-left`}
                >
                  <p className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
