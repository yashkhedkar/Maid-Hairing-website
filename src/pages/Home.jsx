import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import "../css/Home.css"; 

const Home = () => {
  const services = [
    {
      title: "Cooks",
      description: "Experienced japa for all your child-care needs",
      image: "japas.jpg",
    },
    {
      title: "Baby Caretaker",
      description: "Reliable and caring babysitters for your children",
      image: "babysitters.jpg",
    },
    {
      title: "All-Rounders",
      description: "Choose between basic home-style or fancy cooking at affordable rates!",
      image: "allrounders.jpg",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="home-container">
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            INDIA'S TRUSTED HOME MAKERS
          </h1>
          <p className="hero-subtitle">
            Brownees is the simplest way to get your life in order with the right domestic help.
          </p>
          <Link to="/services/services" className="book-btn">
            BOOK NOW
          </Link>
        </div>
        <div className="cooks-right">
          <img src="https://www.pngmart.com/files/22/Maid-PNG-Picture.png" alt="Cook at work" className="cooks-img" />
        </div>
      </section>

      <section className="featured-services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={`/assets/images/${service.image}`}
                alt={service.title}
                className="service-image"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to="/services/services" className="learn-more-btn">
                See More
              </Link>
            </div>
          ))}
        </div>
      </section>


      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">
            <img src="/assets/images/verification-icon.png" alt="Verification" className="why-icon" />
            <h3>Verification & Assessment</h3>
            <p>We ensure the highest quality assessments of our workers.</p>
          </div>
          <div className="why-card">
            <img src="/assets/images/pricing-icon.png" alt="Pricing" className="why-icon" />
            <h3>Transparent Pricing</h3>
            <p>Get a replacement guarantee, verification documents, and more!</p>
          </div>
          <div className="why-card">
            <img src="/assets/images/support-icon.png" alt="Support" className="why-icon" />
            <h3>Customer Support</h3>
            <p>Our executives are always there to solve your issues.</p>
          </div>
        </div>
      </section>

      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul>
              <li>House Maid</li>
              <li>Cooking Maid</li>
              <li>Baby Caretaker</li>
              <li>All Rounders</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About Gharseva</h3>
            <ul>
              <li>Our Mission</li>
              <li>Our Team</li>
              <li>Our Blog</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li>Register as a Broomee</li>
              <li>Apply for Internship</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Pune, Maharashtra 411057 | +91 6654453456 | support@brownees.com</p>
          <p>Copyright &copy; Brownees, Established in 2025. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;