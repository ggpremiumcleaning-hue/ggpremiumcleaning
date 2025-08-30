
import React, { useMemo, useState } from "react";
import LogoFile from "./assets/logo.png";
import { locales } from "./translations";

export default function GGWebsite() {
  const [lang, setLang] = useState("en");
  const phone = "0685875622";
  const whatsapp = "https://wa.me/355685875622";
  const email = "ggpremiumcleaning@gmail.com";

  const t = useMemo(() => locales[lang], [lang]);

  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#2b2b2b]">
      <header className="sticky top-0 z-40 border-b border-[#e9dfd2]">
        <div className="mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={LogoFile} alt="Logo" className="h-8 w-auto" />
            <span className="font-semibold">GG Premium Cleaning</span>
          </a>
          <div className="flex items-center gap-3">
            <LangSwitcher lang={lang} setLang={setLang} />
            <a href={`tel:${phone}`} className="hidden sm:block text-sm">{phone}</a>
            <a href={whatsapp} className="px-4 py-2 bg-[#d9c5a6] rounded-2xl">{t.cta.book}</a>
          </div>
        </div>
      </header>
    </div>
  );
}

function LangSwitcher({ lang, setLang }) {
  return (
    <div className="flex gap-2">
      {["en", "it", "sq"].map(code => (
        <button
          key={code}
          className={`px-2 py-1 text-sm rounded ${lang === code ? "bg-[#d9c5a6]" : "bg-gray-200"}`}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
