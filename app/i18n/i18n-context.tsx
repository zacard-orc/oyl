"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import en from "./en.json";
import zh from "./zh.json";
import ja from "./ja.json";
import ar from "./ar.json";
import zhTw from "./zh-tw.json";
import es from "./es.json";
import fr from "./fr.json";
import pt from "./pt.json";
import ru from "./ru.json";
import ko from "./ko.json";
import th from "./th.json";
import da from "./da.json";

export type Language = "en" | "zh" | "zh-tw" | "ja" | "ar" | "es" | "fr" | "pt" | "ru" | "ko" | "th" | "da";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: Array<{ code: Language; name: string; flag?: string }>;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const dictionaries = {
  en,
  zh,
  "zh-tw": zhTw,
  ja,
  ar,
  es,
  fr,
  pt,
  ru,
  ko,
  th,
  da,
};

const languageList: Array<{ code: Language; name: string; flag?: string }> = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "简体中文", flag: "🇨🇳" },
  { code: "zh-tw", name: "繁體中文", flag: "🇹🇼" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "da", name: "Dansk", flag: "🇩🇰" },
];

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // 从 localStorage 加载语言偏好
  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang && dictionaries[savedLang]) {
      setLanguage(savedLang);
    } else {
      // 根据浏览器语言设置默认语言
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("zh-hant") || browserLang.startsWith("zh-tw")) {
        setLanguage("zh-tw");
      } else if (browserLang.startsWith("zh")) {
        setLanguage("zh");
      } else if (browserLang.startsWith("ja")) {
        setLanguage("ja");
      } else if (browserLang.startsWith("ar")) {
        setLanguage("ar");
      } else if (browserLang.startsWith("es") || browserLang.startsWith("es-")) {
        setLanguage("es");
      } else if (browserLang.startsWith("fr")) {
        setLanguage("fr");
      } else if (browserLang.startsWith("pt") || browserLang.startsWith("pt-")) {
        setLanguage("pt");
      } else if (browserLang.startsWith("ru")) {
        setLanguage("ru");
      } else if (browserLang.startsWith("ko")) {
        setLanguage("ko");
      } else if (browserLang.startsWith("th")) {
        setLanguage("th");
      } else if (browserLang.startsWith("da")) {
        setLanguage("da");
      } else {
        setLanguage("en");
      }
    }
  }, []);

  // 保存语言偏好到 localStorage
  const setLanguageWithStorage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // 翻译函数
  const t = (key: string): string => {
    // 特殊处理 language 键，直接访问
    if (key.startsWith('language.')) {
      const langKey = key.substring('language.'.length);
      // 确保 langKey 是有效的语言代码
      if (langKey in dictionaries[language]?.language!) {
        return dictionaries[language]!.language![langKey as Language];
      }
    }

    const keys = key.split(".");
    let value: any = dictionaries[language];

    for (const k of keys) {
      if (value === undefined || value === null) {
        return key;
      }
      value = value[k];
    }

    if (typeof value === "string") {
      return value;
    }

    // 如果是对象，返回 key 作为回退
    return key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage: setLanguageWithStorage, t, languages: languageList }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
