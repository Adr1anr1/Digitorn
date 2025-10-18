import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Tjänster', id: 'services' },
    { name: 'Kontakt', id: 'contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/company/digitorn'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/digitorn'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Digitorn</h3>
            <p className="footer-tagline">
              Vi bygger digitala upplevelser som gör skillnad
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <span className="footer-social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Snabblänkar</h4>
            <ul className="footer-nav">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    className="footer-link"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-title">Kontakt</h4>
            <div className="footer-contact-info">
              <p>📧 info@digitorn.se</p>
              <p>📞 +46 70 123 45 67</p>
              <p>📍 Stockholm, Sverige</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Digitorn. Alla rättigheter förbehållna.</p>
          </div>
          <div className="footer-legal">
            <button className="footer-legal-link">Integritetspolicy</button>
            <button className="footer-legal-link">Användarvillkor</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
