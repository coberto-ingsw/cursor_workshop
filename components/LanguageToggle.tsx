"use client";

import { useLang } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center rounded-lg border border-zinc-200 p-0.5 dark:border-zinc-700">
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded px-2 py-1 text-xs font-semibold transition ${
          lang === "en"
            ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
            : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`rounded px-2 py-1 text-xs font-semibold transition ${
          lang === "es"
            ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
            : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
        }`}
      >
        ES
      </button>
    </div>
  );
}
