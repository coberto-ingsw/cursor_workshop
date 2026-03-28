"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useContent } from "@/contexts/LanguageContext";
import { fadeUpVariants, viewportOnce } from "@/lib/motion";

export function FaqSection() {
  const { faq } = useContent();
  const { lang } = useLang();
  const [faqState, setFaqState] = useState<{ lang: string; openIndex: number | null }>({
    lang,
    openIndex: null,
  });

  const openIndex = faqState.lang === lang ? faqState.openIndex : null;
  const reduced = useReducedMotion() ?? false;
  const variants = fadeUpVariants(reduced);

  function toggle(i: number) {
    setFaqState({ lang, openIndex: openIndex === i ? null : i });
  }

  return (
    <section className="bg-white py-24 dark:bg-zinc-900 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <motion.div
          className="mb-16"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {faq.heading}
          </h2>
        </motion.div>

        <dl className="divide-y divide-zinc-200 dark:divide-zinc-700">
          {faq.items.map((item, i) => (
            <motion.div
              key={i}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={reduced ? undefined : { delay: i * 0.05 }}
            >
              <dt>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={openIndex === i}
                  onClick={() => toggle(i)}
                >
                  <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.dd
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {item.answer}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
