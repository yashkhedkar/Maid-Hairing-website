import React from "react";

const testimonials = [
  {
    name: "Asha",
    role: "My life savers",
    review: "I have good experience with Broomees. I was searching for a reliable cook but with limited references and verification issues, I was stuck. Broomees helped me by providing a verified and experienced cook. She is very polite and humble.",
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

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;