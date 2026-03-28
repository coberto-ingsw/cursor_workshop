"use client";

import { createContext, useContext, useState } from "react";
import { contentEn, contentEs } from "@/constants/content";

export type Lang = "en" | "es";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  content: typeof contentEn;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  content: contentEn,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const content = (lang === "es" ? contentEs : contentEn) as typeof contentEn;

  return (
    <LanguageContext.Provider value={{ lang, setLang, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useContent() {
  return useContext(LanguageContext).content;
}

export function useLang() {
  const { lang, setLang } = useContext(LanguageContext);
  return { lang, setLang };
}
