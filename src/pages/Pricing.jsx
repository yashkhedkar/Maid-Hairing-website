import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Pricing.css';
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const Pricing = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewPricing = (service) => {
    navigate(`/viewpricing/${service}`); // Navigate to the ViewPricing page with service type
  };

  return (
    <div className="pricing-page">
      <Navbar />
      <div className="pricing-container">
      
      <h1>Our Pricing Plans</h1>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h2>Domestic Help</h2>
          <button onClick={() => handleViewPricing('domestic')}>View Pricing</button>
        </div>
        <div className="pricing-card">
          <h2>All-rounders</h2>
          <button onClick={() => handleViewPricing('allrounders')}>View Pricing</button>
        </div>
        <div className="pricing-card">
          <h2>Cooks</h2>
          <button onClick={() => handleViewPricing('cooks')}>View Pricing</button>
        </div>
        <div className="pricing-card">
          <h2>Babysitters/ Japas</h2>
          <button onClick={() => handleViewPricing('babysitter')}>View Pricing</button>
        </div>
        
      </div>
      <div className="membership-benefits">
        <h2>Membership Includes</h2>
        <ul>
          <li>You are eligible for worker replacements</li>
          <li>Uniform and Welfare costs are included</li>
          <li>All the workers are experienced and verified</li>
          <li>Workers salary is separate from the package</li>
        </ul>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Pricing;