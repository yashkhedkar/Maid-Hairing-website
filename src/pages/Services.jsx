import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import "../css/services.css"; // Import CSS

const Services = () => {
  const services = [
    {
      title: "Domestic Help",
      rating: 4.3,
      image: "/images/domestic-help.jpg",
    },
    {
      title: "Cooks",
      rating: 4.8,
      image: "/images/cooks.jpg",
    },
    {
      title: "Babysitters/Japas",
      rating: 4.9,
      image: "/images/babysitters.jpg",
    },
    {
      title: "All-rounders",
      rating: 4.7,
      image: "/images/allrounders.jpg",
    },
    {
      title: "24 hrs - Full Time",
      rating: 4.4,
      image: "/images/fulltime.jpg",
    },
    {
      title: "24 Hrs - Japas",
      rating: 4.5,
      image: "/images/japas.jpg",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.image} alt={service.title} className="service-image" />
                <h3>{service.title}</h3>
                <p className="rating">⭐ {service.rating}</p>
                <Link to="/book" className="book-btn">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;