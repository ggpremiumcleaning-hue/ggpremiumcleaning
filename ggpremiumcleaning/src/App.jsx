/* General styles */
body {
  margin: 0;
  font-family: "Helvetica Neue", Arial, sans-serif;
  background: #f5f0e6;
  color: #2e2a26;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: #4b3f35;
  color: #f5f0e6;
}

.header .logo {
  height: 50px;
}

.header nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header nav a {
  color: #f5f0e6;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.header nav a:hover {
  color: #d4a373;
}

.btn {
  background: #d4a373;
  border: none;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 600;
  transition: background 0.3s;
}

.btn:hover {
  background: #a68b6f;
}

/* Hero */
.hero {
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(
      rgba(75, 63, 53, 0.6),
      rgba(75, 63, 53, 0.6)
    ),
    url("https://picsum.photos/1600/600?blur=2") no-repeat center;
  background-size: cover;
  color: #f5f0e6;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

.hero p {
  font-size: 20px;
  margin-bottom: 20px;
}

/* About */
.about {
  padding: 60px 20px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

/* Services */
.services {
  padding: 60px 20px;
  text-align: center;
}

.services h2 {
  font-size: 32px;
  margin-bottom: 30px;
  color: #4b3f35;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  width: 250px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 18px rgba(0,0,0,0.15);
}

/* Contact */
.contact {
  padding: 60px 20px;
  text-align: center;
  background: #f0ebe2;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 20px auto;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.contact-form textarea {
  resize: none;
  min-height: 100px;
}

/* Footer */
footer {
  padding: 20px;
  background: #4b3f35;
  text-align: center;
  color: #f5f0e6;
  font-size: 14px;
}

/* 📱 Адаптивность */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .hero h1 {
    font-size: 32px;
  }

  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }
}
