import React from "react";
import "../css/Home.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
            <li>House Maid</li>
            <li>Cooking Maid</li>
            <li>Baby Caretaker</li>
            <li>All Rounders</li>
            <li>Cook in Delhi</li>
            <li>Cook in Bangalore</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About Kaam</h3>
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
        <p>Pune, Maharashtra 411057 | +91 6654453456 | support@kaam.com</p>
        <p>Copyright &copy; Kaam, Established in 2025. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;