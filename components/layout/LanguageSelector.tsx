"use client";

import { useState } from "react";
import { ChevronDown, Globe, Check } from "lucide-react";

const languages = [
  { code: "ar", name: "Arabic" },
  { code: "zh-CN", name: "Chinese (Simplified)" },
  { code: "nl", name: "Dutch" },
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "es", name: "Spanish" },
  { code: "sw", name: "Swahili" },
];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const selected = languages.find(
    (language) => language.code === selectedLanguage,
  );

  return (
    <div className="relative">
      <label htmlFor="language-selector" className="sr-only">
        Select website language
      </label>

      <div className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-[var(--brand-navy)]">
        <Globe size={17} strokeWidth={1.7} aria-hidden="true" />

        <select
          id="language-selector"
          value={selectedLanguage}
          onChange={(event) => setSelectedLanguage(event.target.value)}
          className="max-w-32 cursor-pointer appearance-none bg-transparent py-2 pr-5 outline-none"
        >
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>

        <ChevronDown
          size={14}
          className="pointer-events-none -ml-6 shrink-0"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
