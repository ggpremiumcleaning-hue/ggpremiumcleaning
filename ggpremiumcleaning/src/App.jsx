mport React from "react";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <button className="btn">Book Now</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Premium Cleaning Services</h1>
        <p>Creating spotless comfort for your home and office</p>
        <button className="btn">Get a Quote</button>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We are a professional cleaning company that values your time and
          comfort. Our mission is to deliver high-quality, eco-friendly, and
          affordable cleaning services for both residential and commercial
          spaces.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">🏠 Home Cleaning</div>
          <div className="card">🏢 Office Cleaning</div>
          <div className="card">🪟 Window Cleaning</div>
          <div className="card">🛋 Deep Cleaning</div>
          <div className="card">🚗 Car Interior Cleaning</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>📞 Call us: +123 456 789</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send</button>
        </form>
        <div className="map">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345087077!2d144.9537353153175!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2fddf1f%3A0x5045675218ceed30!2sCleaning%20Service!5e0!3m2!1sen!2sus!4v1610000000000"
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
        <p>© 2025 Premium Cleaning — All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
