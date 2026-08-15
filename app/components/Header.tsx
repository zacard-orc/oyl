"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useI18n, type Language } from "../i18n/i18n-context";
import { useState, useRef, useEffect } from "react";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function Header() {
  const { language, setLanguage, t, languages } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-md h-14 md:px-xl">
      <div className="flex items-center gap-sm">
        <span className="font-headline-md text-headline-md font-black text-primary">OYL</span>
      </div>
      <div className="flex items-center gap-md" ref={dropdownRef}>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-xs text-on-surface-variant hover:bg-surface-container transition-colors rounded-full px-md py-1 h-10 active:scale-[0.98] border border-outline-variant/50 bg-surface-container-lowest/50"
            aria-label="Switch language"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>
              language
            </span>
            <span className="font-label-md text-label-md">{t(`language.${language}`)}</span>
          </button>

          {isOpen && (
            <div className="absolute right-0 top-full mt-2 bg-surface-container-high border border-outline-variant rounded-xl shadow-lg py-sm min-w-[200px] z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-md py-sm rounded-lg flex items-center gap-sm transition-colors ${
                    language === lang.code
                      ? "bg-primary-container text-on-primary-container"
                      : "text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {lang.flag && <span className="text-sm">{lang.flag}</span>}
                  <span className="font-label-md">{t(`language.${lang.code}`)}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="h-8 w-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden ml-2 flex items-center justify-center">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">person</span>
        </div>
      </div>
    </nav>
  );
}
