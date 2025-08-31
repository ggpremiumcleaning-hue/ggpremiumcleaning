
import React, { useState } from "react";
import { motion } from "framer-motion";

const translations = {
  en: {
    nav: ["Home", "Services", "About", "Contact"],
    hero: "Welcome to GG Premium Cleaning",
    about:
      "We provide professional cleaning services with attention to detail, reliability, and premium quality. Whether it’s your home, office, or car – our team delivers spotless results every time.",
    servicesTitle: "Our Services",
    services: [
      {
        icon: "🏠",
        name: "Home Cleaning",
        price: "From €50",
        description:
          "Professional home cleaning: dusting, vacuuming, mopping, sanitizing bathrooms and kitchens, making your home fresh and spotless.",
      },
      {
        icon: "💼",
        name: "Office Cleaning",
        price: "From €80",
        description:
          "Keep your workplace professional and hygienic with our flexible office cleaning – daily, weekly, or monthly.",
      },
      {
        icon: "🪟",
        name: "Window Cleaning",
        price: "From €40",
        description:
          "Eco-friendly streak-free window cleaning, improving the look of any property inside and out.",
      },
      {
        icon: "🧹",
        name: "Deep Cleaning",
        price: "From €100",
        description:
          "Complete deep cleaning that reaches every corner – ideal for spring cleaning or special occasions.",
      },
      {
        icon: "🚗",
        name: "Car Interior Cleaning",
        price: "From €60",
        description:
          "We restore freshness to your car interior: vacuuming, upholstery cleaning, dashboard polishing, and odor removal.",
      },
    ],
    contact: "Contact Us",
  },
  it: {
    nav: ["Home", "Servizi", "Chi siamo", "Contatti"],
    hero: "Benvenuti a GG Premium Cleaning",
    about:
      "Offriamo servizi di pulizia professionali con attenzione ai dettagli, affidabilità e qualità premium. Casa, ufficio o auto – garantiamo risultati impeccabili.",
    servicesTitle: "I nostri servizi",
    services: [
      {
        icon: "🏠",
        name: "Pulizia Casa",
        price: "Da €50",
        description:
          "Pulizia domestica completa: spolvero, aspirapolvere, lavaggio pavimenti, sanitizzazione di bagni e cucine.",
      },
      {
        icon: "💼",
        name: "Pulizia Uffici",
        price: "Da €80",
        description:
          "Mantieni il tuo ufficio professionale e igienico. Pulizia giornaliera, settimanale o mensile.",
      },
      {
        icon: "🪟",
        name: "Pulizia Vetri",
        price: "Da €40",
        description:
          "Pulizia vetri ecologica senza aloni, sia all’interno che all’esterno.",
      },
      {
        icon: "🧹",
        name: "Pulizia Profonda",
        price: "Da €100",
        description:
          "Pulizia profonda completa per ogni angolo – ideale per pulizie di primavera o eventi speciali.",
      },
      {
        icon: "🚗",
        name: "Pulizia Interni Auto",
        price: "Da €60",
        description:
          "Rinfreschiamo gli interni della tua auto: aspirazione, pulizia tappezzeria, lucidatura cruscotto e rimozione odori.",
      },
    ],
    contact: "Contattaci",
  },
  al: {
    nav: ["Kreu", "Shërbimet", "Rreth Nesh", "Kontakt"],
    hero: "Mirë se vini në GG Premium Cleaning",
    about:
      "Ofron shërbime pastrimi profesionale me kujdes për detajet, besueshmëri dhe cilësi premium. Për shtëpi, zyrë ose makinë – ne garantojmë rezultate të pastra.",
    servicesTitle: "Shërbimet tona",
    services: [
      {
        icon: "🏠",
        name: "Pastrimi i Shtëpisë",
        price: "Nga €50",
        description:
          "Pastrimi profesional i shtëpisë: heqja e pluhurit, fshesë me korent, larje dyshemeje, sanitizim i kuzhinës dhe banjës.",
      },
      {
        icon: "💼",
        name: "Pastrimi i Zyrave",
        price: "Nga €80",
        description:
          "Mbajeni hapësirën tuaj të punës profesionale dhe higjienike me pastrim fleksibël ditor, javor ose mujor.",
      },
      {
        icon: "🪟",
        name: "Pastrimi i Dritareve",
        price: "Nga €40",
        description:
          "Pastrimi i dritareve pa njolla me metoda ekologjike, brenda dhe jashtë.",
      },
      {
        icon: "🧹",
        name: "Pastrimi i Thellë",
        price: "Nga €100",
        description:
          "Pastrimi i plotë i thellë që arrin çdo cep – ideal për pastrime pranverore ose raste të veçanta.",
      },
      {
        icon: "🚗",
        name: "Pastrimi i Brendshëm i Makinës",
        price: "Nga €60",
        description:
          "Rikthejmë freskinë e brendshme të makinës suaj: pastrim me fshesë, pastrim tapicerie, lustër pulti dhe heqje erërash.",
      },
    ],
    contact: "Na kontaktoni",
  },
};

export default function App() {
  const [lang, setLang] = useState("en");
  const [selectedService, setSelectedService] = useState(null);
  const t = translations[lang];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="GG Premium Cleaning" className="h-12" />
          <span className="text-xl font-bold">GG Premium Cleaning</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {t.nav.map((item, i) => (
            <a key={i} href="#" className="hover:text-blue-600">
              {item}
            </a>
          ))}
        </nav>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border rounded p-1"
        >
          <option value="en">EN</option>
          <option value="it">IT</option>
          <option value="al">AL</option>
        </select>
      </header>

      {/* Hero Section */}
      <section
        className="relative text-center py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/cleaning-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <img
            src="/logo.png"
            alt="GG Premium Cleaning"
            className="mx-auto h-32 mb-6 drop-shadow-lg"
          />
          <h1 className="text-4xl font-bold text-white mb-4">{t.hero}</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">{t.about}</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          {t.servicesTitle}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((s, i) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
              onClick={() => setSelectedService(s)}
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{s.name}</h3>
              <p className="text-blue-600 font-bold">{s.price}</p>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Modal for service details */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-lg relative shadow-lg"
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedService(null)}
            >
              ✖
            </button>
            <div className="text-4xl mb-4">{selectedService.icon}</div>
            <h3 className="text-2xl font-bold mb-2">
              {selectedService.name}
            </h3>
            <p className="text-blue-600 font-bold mb-4">
              {selectedService.price}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {selectedService.description}
            </p>
          </motion.div>
        </div>
      )}

      {/* Contact */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">{t.contact}</h2>
        <p>Email: ggpremiumcleaning@gmail.com</p>
        <p>Tel: +355 685 875 622</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© 2025 GG Premium Cleaning. All rights reserved.</p>
      </footer>
    </div>
  );
}
