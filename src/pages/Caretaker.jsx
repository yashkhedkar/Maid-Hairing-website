import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import "./Allrounder.css"; // Import CSS

import BookingSection from "../components/BookingSection";

const cities = [
  { name: "Delhi", img: "image.png" },
  { name: "Noida", img: "noida.png" },
  { name: "Gurgaon", img: "gurgaon.png" },
  { name: "Ghaziabad", img: "ghaziabad.png" },
  { name: "Pune", img: "pune.png" },
  { name: "Bengaluru", img: "bengaluru.png" },
];

const faqs = [
  {
    question: "How can I hire a caretaker from Broomees?",
    answer: "1: Choose the caretaker service, fill in your requirements, and make a booking on our platform.\n2: Confirm your requirements with the relationship manager assigned to you.\n3: Sit tight while our relationship manager finds the right fit for your home.",
  },
  { question: "What if I’m not satisfied with the caretaker?", answer: "We offer a replacement or refund policy. Contact support for assistance." },
  { question: "How much will a caretaker cost in Delhi NCR?", answer: "Prices vary based on experience and responsibilities. Check our pricing page." },
  { question: "Why do your caretaker services seem more expensive than others?", answer: "We ensure quality, verified staff, and safety, which adds to the cost." },
  { question: "Is a caretaker from Broomees reliable?", answer: "Yes, all our staff go through background verification and training." },
  { question: "Is it safe to hire a caretaker during the pandemic?", answer: "Yes, we follow all safety protocols, including regular health checks and sanitization." },
];

const testimonials = [
  {
    name: "Asha",
    role: "My life savers",
    review: "I have good experience with Broomees. I was searching for a reliable caretaker but with limited references and verification issues, I was stuck. Broomees helped me by providing a verified and experienced caretaker. She is very polite and humble.",
    rating: 5,
    image: "asha.png",
  },
  {
    name: "Swati",
    role: "Partner for life",
    review: "Living alone in a big city like Delhi, it's great to have the support and comfort that Broomees gives. I’ve been able to get help very easily, and have got a lot of help from their customer service.",
    rating: 4.5,
    image: "swati.png",
  },
];

const Caretaker = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const bookingRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleBookNow = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="caretaker-container">
      {/* Navbar */}
      <Navbar />

      {/* Caretaker Section */}
      <div className="caretaker-hero">
        <div className="caretaker-left">
          <h2 className="caretaker-title">Caretakers</h2>
          <p className="caretaker-description">
            Experienced caretakers for your loved ones! Whether it's elderly care, child care, or special needs, we have the right fit for your family.
          </p>
          <button className="caretaker-button" onClick={handleBookNow}>Book Now</button>
        </div>
        <div className="caretaker-right">
          <img src="https://www.pngmart.com/files/22/Maid-PNG-Picture.png" alt="Caretaker at work" className="caretaker-img" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-container">
        <div className="stat">
          <h3>99,564 <span>+</span></h3>
          <p>Certified Workers</p>
        </div>
        <div className="stat">
          <h3>7,064 <span>+</span></h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat">
          <h3>119 <span>+</span></h3>
          <p>Pincodes & Counting</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonial-container">
        <div className="testimonial-left">
          <h2 className="testimonial-title">Testimonials</h2>
          <p className="testimonial-subtitle">Don’t Believe Us?</p>
          <h3 className="testimonial-heading">Check What Our Customers Say About Us</h3>
        </div>
        <div className="testimonial-right">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
              <h3>{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <div className="stars">
                {"★".repeat(Math.floor(testimonial.rating))}
                {testimonial.rating % 1 !== 0 ? "☆" : ""}
              </div>
              <p className="testimonial-review">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Booking Details Section */}
      <BookingSection bookingRef={bookingRef} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Caretaker;