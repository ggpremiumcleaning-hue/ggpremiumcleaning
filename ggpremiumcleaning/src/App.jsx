import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

// Переводы
const translations = {
  en: {
    nav: { about: "About", services: "Services", contact: "Contact", book: "Book Now" },
    hero: { title: "Premium Cleaning Services", subtitle: "Creating spotless comfort for your home, office and store", quote: "Get a Quote" },
    about: {
      title: "About Us",
      text: `We are a professional cleaning company with years of experience in Albania. 
Our mission is to deliver high-quality, eco-friendly, and affordable cleaning services. 
We specialize in residential, office, and store cleaning. 
Why choose us?
✔ Experienced and trusted staff
✔ Eco-friendly cleaning products
✔ Flexible scheduling
✔ Affordable prices adapted to the Albanian market`
    },
    services: {
      title: "Our Services",
      list: [
        { emoji: "🏠", name: "Home Cleaning", details: "Welcome to a spotless home! Our home cleaning service is perfect for families, professionals, and anyone who wants to come back to a fresh and organized space. * Dusting, vacuuming, and mopping every corner * Kitchen and bathroom sanitization * Changing bed linens and making your home cozy * Special care for delicate surfaces and furniture. Relax and enjoy your free time while we take care of your home." },
        { emoji: "🏢", name: "Office Cleaning", details: "A clean office = a productive team! Our office cleaning service helps you maintain a professional environment where your staff and clients feel comfortable. * Daily or weekly cleaning tailored to your schedule * Desks, meeting rooms, and common spaces cleaned thoroughly * Waste removal and sanitizing high-touch areas * Flexible after-hours cleaning so your workday isn’t disturbed ✨ Boost morale and make your office shine." },
        { emoji: "🛋", name: "Deep Cleaning", details: "Sometimes a space needs more than just a quick refresh. Our deep cleaning is the solution for those hard-to-reach spots and detailed work. * Thorough scrubbing of kitchens, ovens, fridges, and bathrooms * Intensive dust removal from hidden areas * Window and glass cleaning for that perfect shine * Eco-friendly products available for safe and fresh results ✨ Perfect before moving in/out, after renovation, or when you want a complete reset." },
        { emoji: "🛍", name: "Store Cleaning", details: "First impressions matter! Our store cleaning keeps your business attractive and welcoming for every customer. * Floor care to keep your space spotless * Display shelves and glass surfaces polished * Sanitized fitting rooms, restrooms, and counters * Flexible schedules to suit your opening hours ✨ Let your shop shine as much as the products you sell." }
      ]
    },
    contact: {
      title: "Contact Us",
      phone: "📞 Call us: +355 68 587 5622",
      form: { name: "Your Name", email: "Your Email", message: "Your Message", send: "Send" }
    },
    footer: "© 2025 GG Premium Cleaning — All rights reserved."
  },
  it: {
    nav: { about: "Chi Siamo", services: "Servizi", contact: "Contatto", book: "Prenota Ora" },
    hero: { title: "Servizi di Pulizia Premium", subtitle: "Comfort impeccabile per la tua casa, ufficio e negozio", quote: "Richiedi Preventivo" },
    about: {
      title: "Chi Siamo",
      text: `Siamo un'azienda di pulizie professionale con anni di esperienza in Albania. 
La nostra missione è fornire servizi di pulizia di alta qualità, ecologici e convenienti. 
Perché sceglierci?
✔ Personale esperto e affidabile
✔ Prodotti ecologici
✔ Orari flessibili
✔ Prezzi accessibili per il mercato albanese`
    },
    services: {
      title: "I Nostri Servizi",
      list: [
        { emoji: "🏠", name: "Pulizia Casa", details: "Pulizia completa di cucina, bagni, camere e soggiorno. Prezzi da 1500 ALL." },
        { emoji: "🏢", name: "Pulizia Ufficio", details: "Pulizia professionale giornaliera o settimanale con prodotti ecologici. Prezzi da 3000 ALL." },
        { emoji: "🛋", name: "Pulizia Profonda", details: "Pulizia dettagliata ideale per traslochi. Prezzi da 5000 ALL." },
        { emoji: "🛍", name: "Pulizia Negozi", details: "Pulizia specializzata per negozi e spazi commerciali. Prezzi da 4000 ALL." }
      ]
    },
    contact: {
      title: "Contattaci",
      phone: "📞 Chiama: +355 68 587 5622",
      form: { name: "Il tuo nome", email: "La tua email", message: "Il tuo messaggio", send: "Invia" }
    },
    footer: "© 2025 GG Premium Cleaning — Tutti i diritti riservati."
  },
  sq: {
    nav: { about: "Rreth Nesh", services: "Shërbimet", contact: "Kontakti", book: "Rezervo Tani" },
    hero: { title: "Shërbime Premium Pastrimi", subtitle: "Komoditet i pastër për shtëpinë, zyrën dhe dyqanin tuaj", quote: "Merr Ofertë" },
    about: {
      title: "Rreth Nesh",
      text: `Ne jemi kompani profesionale pastrimi me vite përvojë në Shqipëri. 
Misioni ynë është të ofrojmë shërbime të cilësisë së lartë, ekologjike dhe me çmime të përballueshme. 
Pse të na zgjidhni?
✔ Staf me përvojë dhe i besueshëm
✔ Produkte ekologjike
✔ Orar fleksibël
✔ Çmime të përshtatura për tregun shqiptar`
    },
    services: {
      title: "Shërbimet Tona",
      list: [
        { emoji: "🏠", name: "Pastrimi i Shtëpisë", details: "Pastrimi i plotë i kuzhinës, banjove, dhomave dhe sallonit. Çmimet nga 1500 ALL." },
        { emoji: "🏢", name: "Pastrimi i Zyrave", details: "Pastrim profesional ditor ose javor me produkte ekologjike. Çmimet nga 3000 ALL." },
        { emoji: "🛋", name: "Pastrim i Thellë", details: "Pastrim i detajuar për çdo sipërfaqe. Ideal për hyrje/dalje. Nga 5000 ALL." },
        { emoji: "🛍", name: "Pastrimi i Dyqaneve", details: "Pastrim i specializuar për dyqane dhe hapësira tregtare. Nga 4000 ALL." }
      ]
    },
    contact: {
      title: "Na Kontaktoni",
      phone: "📞 Na telefononi: +355 68 587 5622",
      form: { name: "Emri juaj", email: "Email-i juaj", message: "Mesazhi juaj", send: "Dërgo" }
    },
    footer: "© 2025 GG Premium Cleaning — Të gjitha të drejtat e rezervuara."
  }
};

function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav>
          <a href="#about">{t.nav.about}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#contact">{t.nav.contact}</a>
          <button className="btn">{t.nav.book}</button>
          {/* Language Switcher */}
          <div className="lang-switcher">
            <button onClick={() => setLang("en")}>🇬🇧</button>
            <button onClick={() => setLang("it")}>🇮🇹</button>
            <button onClick={() => setLang("sq")}>🇦🇱</button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
        <button className="btn">{t.hero.quote}</button>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>{t.about.title}</h2>
        <p>{t.about.text}</p>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <h2>{t.services.title}</h2>
        <div className="cards">
          {t.services.list.map((service, idx) => (
            <div key={idx} className="card" onClick={() => setSelectedService(service)}>
              {service.emoji} {service.name}
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedService.emoji} {selectedService.name}</h3>
            <p>{selectedService.details}</p>
            <button className="btn" onClick={() => setSelectedService(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Contact */}
   <section id="contact" className="contact">
  <h2>{t.contact.title}</h2>
  <p>{t.contact.phone}</p>
  <form className="contact-form">
    <input type="text" placeholder={t.contact.form.name} required />
    <input type="email" placeholder={t.contact.form.email} required />
    <textarea placeholder={t.contact.form.message} required></textarea>
    <button type="submit" className="btn">{t.contact.form.send}</button>
  </form>

  {/* Карта */}
  <div className="map">
    <iframe
      title="Our Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.7078730917966!2d19.8189!3d41.3275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310b2ef7f2f1%3A0x3a861e7b49f84e87!2sTirana%2C%20Albania!5e0!3m2!1sen!2s!4v1700000000000"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</section>


      {/* Footer */}
      <footer>
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
