import React, { useState } from "react";
import { Globe, X } from "lucide-react";
import { motion } from "framer-motion";

const translations = {
  en: {
    nav: ["Home", "Services", "About", "Contact"],
    hero: "Welcome to GG Premium Cleaning",
    about:
      "We provide professional cleaning services with attention to detail, reliability, and premium quality.",
    servicesTitle: "Our Services",
    services: [
      {
        icon: "🏠",
        name: "Home Cleaning",
        price: "From €50",
        description:
          "Our professional home cleaning service ensures every room in your house shines. We take care of dusting, vacuuming, mopping, sanitizing bathrooms and kitchens, and leaving your home fresh and spotless.",
      },
      {
        icon: "💼",
        name: "Office Cleaning",
        price: "From €80",
        description:
          "Keep your workplace professional and hygienic. We provide daily, weekly, or monthly office cleaning, including desks, common areas, meeting rooms, and restrooms to maintain a healthy environment.",
      },
      {
        icon: "🪟",
        name: "Window Cleaning",
        price: "From €40",
        description:
          "Crystal clear windows improve the look of any property. Our eco-friendly cleaning methods leave streak-free, shining windows inside and out.",
      },
      {
        icon: "🧹",
        name: "Deep Cleaning",
        price: "From €100",
        description:
          "A complete deep cleaning service that reaches every corner. Ideal for spring cleaning or preparing your property for special occasions.",
      },
      {
        icon: "🚗",
        name: "Car Interior Cleaning",
        price: "From €60",
        description:
          "We restore the freshness of your car’s interior. Vacuuming, upholstery cleaning, dashboard polishing, and odor removal are all included.",
      },
    ],
    contact: "Contact Us",
  },
  it: {
    nav: ["Home", "Servizi", "Chi siamo", "Contatti"],
    hero: "Benvenuti a GG Premium Cleaning",
    about:
      "Offriamo servizi di pulizia professionali con attenzione ai dettagli, affidabilità e qualità premium.",
    servicesTitle: "I nostri servizi",
    services: [
      {
        icon: "🏠",
        name: "Pulizia Casa",
        price: "Da €50",
        description:
          "Il nostro servizio di pulizia domestica garantisce che ogni stanza della tua casa brilli. Spolveriamo, aspiriamo, laviamo i pavimenti, sanifichiamo bagni e cucine, lasciando la tua casa fresca e impeccabile.",
      },
      {
        icon: "💼",
        name: "Pulizia Uffici",
        price: "Da €80",
        description:
          "Mantieni il tuo ufficio professionale e igienico. Offriamo pulizia giornaliera, settimanale o mensile di scrivanie, aree comuni, sale riunioni e bagni.",
      },
      {
        icon: "🪟",
        name: "Pulizia Vetri",
        price: "Da €40",
        description:
          "Vetri brillanti migliorano l’aspetto di qualsiasi proprietà. I nostri metodi ecologici lasciano vetri senza aloni, sia interni che esterni.",
      },
      {
        icon: "🧹",
        name: "Pulizia Profonda",
        price: "Da €100",
        description:
          "Un servizio di pulizia profonda che raggiunge ogni angolo. Ideale per le pulizie di primavera o per preparare la tua proprietà a occasioni speciali.",
      },
      {
        icon: "🚗",
        name: "Pulizia Interni Auto",
        price: "Da €60",
        description:
          "Ripristiniamo la freschezza degli interni della tua auto. Aspirazione, pulizia dei sedili, lucidatura cruscotto e rimozione degli odori inclusi.",
      },
    ],
    contact: "Contattaci",
  },
  al: {
    nav: ["Kreu", "Shërbimet", "Rreth Nesh", "Kontakt"],
    hero: "Mirë se vini në GG Premium Cleaning",
    about:
      "Ne ofrojmë shërbime pastrimi profesionale me kujdes për detajet, besueshmëri dhe cilësi premium.",
    servicesTitle: "Shërbimet tona",
    services: [
      {
        icon: "🏠",
        name: "Pastrimi i Shtëpisë",
        price: "Nga €50",
        description:
          "Shërbimi ynë profesional i pastrimit të shtëpisë siguron që çdo dhomë të shkëlqejë. Pluhurosje, fshesë me korent, larje dyshemeje, sanitizim i kuzhinës dhe banjës.",
      },
      {
        icon: "💼",
        name: "Pastrimi i Zyrave",
        price: "Nga €80",
        description:
          "Mbani hapësirën tuaj të punës profesionale dhe higjienike. Ofrojmë pastrim ditor, javor ose mujor për zyra, salla mbledhjesh dhe ambiente të përbashkëta.",
      },
      {
        icon: "🪟",
        name: "Pastrimi i Dritareve",
        price: "Nga €40",
        description:
          "Dritaret e pastra përmirësojnë pamjen e çdo prone. Metodat tona ekologjike lënë dritaret pa njolla, si brenda ashtu edhe jashtë.",
      },
      {
        icon: "🧹",
        name: "Pastrimi i Thellë",
        price: "Nga €100",
        description:
          "Një pastrim i plotë i thellë që arrin çdo cep. Ideal për pastrime pranverore ose përgatitje për raste speciale.",
      },
      {
        icon: "🚗",
        name: "Pastrimi i Brendshëm i Makinës",
        price: "Nga €60",
        description:
          "Rikthejmë freskinë e brendshme të makinës suaj. Përfshin pastrim me fshesë, pastrim të tapicerisë, lustër të pultit dhe heqje të erërave.",
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
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5" />
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border rounded p-1"
          >
            <option value="en">EN</option>
            <option value="it">IT</option>
            <option value="al">AL</option>
          </select>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-100 to-blue-50">
        <img src="/logo.png" alt="Logo" className="mx-auto h-32 mb-6 animate-bounce" />
        <h1 className="text-4xl font-bold mb-4">{t.hero}</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">{t.about}</p>
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

      {/* Modal */}
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
              <X />
            </button>
            <div className="text-4xl mb-4">{selectedService.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{selectedService.name}</h3>
            <p className="text-blue-600 font-bold mb-4">{selectedService.price}</p>
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
        <p>Tel: 0685875622</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© 2025 GG Premium Cleaning. All rights reserved.</p>
      </footer>
    </div>
  );
}
