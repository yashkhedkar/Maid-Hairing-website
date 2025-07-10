import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import "../css/contact.css"; 


const Contact = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="contact-page">
      {/* Navbar with Dropdown */}
      <Navbar />

      {/* Contact Section */}
      <section className="contact-info">
        <div className="contact-details">
          <div className="contact-item"><FaPhone className="icon" /><p>Phone Number</p><strong>+91 8401-8401-42</strong></div>
          <div className="contact-item"><FaEnvelope className="icon" /><p>Email</p><strong>support@Kaam.com</strong></div>
          <div className="contact-item"><FaWhatsapp className="icon" /><p>WhatsApp</p><strong>+91 8401-8401-42</strong></div>
        </div>
        <div className="social-icons">
          <FaLinkedin className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaFacebook className="social-icon" />
          <FaYoutube className="social-icon" />
          <FaTwitter className="social-icon" />
        </div>
        <div className="policies">
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/refund">Refund Policy</Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/your-number" className="whatsapp-btn">
        <FaWhatsapp className="floating-whatsapp" />
      </a>
    </div>
  );
};

export default Contact;