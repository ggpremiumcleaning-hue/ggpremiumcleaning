mport { useState } from "react";
import { translations } from "./translations";
import "./App.css";

export default function App() {
  const [lang, setLang] = useState("en");
  const [activeService, setActiveService] = useState(null);
  const t = translations[lang];

  return (
    <div className="site">
      {/* NAVBAR */}
      <header className="nav">
        <div className="brand">
          <img src="/logo.png" alt={t.brand} />
          <span>{t.brand}</span>
        </div>

        <nav className="nav-links">
          <a href="#home">{t.nav.home}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="lang">
          <svg className="globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="currentColor" fill="none"/></svg>
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="en">EN</option>
            <option value="it">IT</option>
            <option value="al">AL</option>
          </select>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <img className="hero-logo" src="/logo.png" alt={t.brand} />
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-sub">{t.heroSubtitle}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn primary">{t.ctaPrimary}</a>
            <a href="#services" className="btn ghost">{t.ctaSecondary}</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2 className="section-title">{t.servicesTitle}</h2>

        <div className="cards">
          {t.services.map((s) => (
            <button key={s.id} className="card" onClick={() => setActiveService(s)}>
              <div className="card-icon" aria-hidden>{s.icon}</div>
              <h3 className="card-title">{s.name}</h3>
              <p className="card-short">{s.short}</p>
              <div className="card-bottom">
                <span className="price">{s.price}</span>
                <span className="more">➜</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process">
        <h2 className="section-title">{t.processTitle}</h2>
        <div className="steps">
          {t.steps.map((st) => (
            <div key={st.n} className="step">
              <div className="step-n">{st.n}</div>
              <div className="step-txt">
                <h4>{st.title}</h4>
                <p>{st.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2 className="section-title">{t.contactTitle}</h2>
        <div className="contact-grid">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const msg =
                `${t.brand} – Request\n` +
                `Name: ${data.get("name")}\n` +
                `Phone: ${data.get("phone")}\n` +
                `Message: ${data.get("msg")}`;
              // отправим в email-клиент пользователя
              window.location.href =
                "mailto:ggpremiumcleaning@gmail.com?subject=Cleaning%20request&body=" +
                encodeURIComponent(msg);
            }}
          >
            <input name="name" placeholder={t.formName} required />
            <input name="phone" placeholder={t.formPhone} required />
            <textarea name="msg" placeholder={t.formMsg} rows={4} required />
            <button type="submit" className="btn primary">{t.formSend}</button>
          </form>

          <div className="contact-info">
            <div><strong>{t.phoneLabel}:</strong> <a href="tel:+355685875622">+355 68 587 5622</a></div>
            <div><strong>{t.emailLabel}:</strong> <a href="mailto:ggpremiumcleaning@gmail.com">ggpremiumcleaning@gmail.com</a></div>
            <div className="whatsapp">
              <a className="btn ghost" href="https://wa.me/355685875622" target="_blank" rel="noreferrer">WhatsApp</a>
              <a className="btn ghost" href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
            </div>
            <p className="small-note">
              * Prices reflect typical market rates in Albania and may vary by size, condition and location.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>{t.footer}</p>
      </footer>

      {/* MODAL */}
      {activeService && (
        <div className="modal-backdrop" onClick={() => setActiveService(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveService(null)} aria-label="Close">×</button>
            <div className="modal-icon">{activeService.icon}</div>
            <h3 className="modal-title">{activeService.name}</h3>

            <div className="modal-meta">
              <span><strong>{translations[lang].modalPriceFrom}:</strong> {activeService.price}</span>
              <span><strong>{translations[lang].modalDuration}:</strong> {activeService.duration}</span>
            </div>

            <ul className="modal-list">
              {activeService.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>

            <div className="modal-cta">
              <a className="btn primary" href={`https://wa.me/355685875622?text=${encodeURIComponent(activeService.name)}%20-%20${activeService.price}`} target="_blank" rel="noreferrer">
                {translations[lang].modalOrder}
              </a>
              <a className="btn ghost" href="tel:+355685875622">Call</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
