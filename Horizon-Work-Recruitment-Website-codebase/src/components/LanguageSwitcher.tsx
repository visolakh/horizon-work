"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

const SUPPORTED = ["ru", "uz", "en"] as const;
type Lang = typeof SUPPORTED[number];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Sync document language attribute
    document.documentElement.lang = language;
  }, [language]);

  const items = [
    { id: "ru", label: "RU", emoji: "🇷🇺" },
    { id: "uz", label: "UZ", emoji: "🇺🇿" },
    { id: "en", label: "EN", emoji: "🇬🇧" },
  ] as const;

  const handleLanguageChange = (lang: Lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const handleKeyDown = (e: React.KeyboardEvent, lang: Lang) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleLanguageChange(lang);
    }
  };

  return (
    <div className="flex gap-2">
      {items.map((item) => (
        <button
          key={item.id}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 border rounded-lg bg-white cursor-pointer transition-all hover:shadow-sm ${
            language === item.id
              ? 'outline outline-2 outline-blue-600 font-bold border-blue-200'
              : 'border-gray-200 hover:border-gray-300'
          }`}
          aria-pressed={language === item.id}
          aria-current={language === item.id}
          aria-label={`Switch to ${item.label}`}
          onClick={() => handleLanguageChange(item.id as Lang)}
          onKeyDown={(e) => handleKeyDown(e, item.id as Lang)}
          tabIndex={0}
        >
          <span aria-hidden="true" className="text-base leading-none">
            {item.emoji}
          </span>
          <span className="text-sm">{item.label}</span>
        </button>
      ))}
    </div>
  );
}