import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import '../css/ViewPricing.css';
import Navbar from "./Navbar";
import Footer from '../components/Footer';

const ViewPricing = () => {
  
  const { service } = useParams(); // Get the service type from the URL
  const navigate = useNavigate(); // Initialize useNavigate

  // Pricing data for different services
  const pricingData = {
    babysitter: {
      title: "Babysitter/ Japas",
      plans: [
        { name: "Basic", discount: "25%", duration: "3 Months", description: "Three months trial plan to get you started" },
        { name: "Best Seller", discount: "35%", duration: "6 Months", description: "Pay for 5 months and get 1 month free!" },
        { name: "Super Saver", discount: "38%", duration: "12 Months", description: "Pay for 10 months and get 2 months free!" },
        { name: "Life Saver", discount: "50%", duration: "24 Months", description: "Pay for 20 months and get 4 months free!" },
      ],
      membershipPeriod: "Three Months Membership Period",
      benefits: [
        "You are eligible for 2 free worker replacements",
        "All the workers are experienced and verified",
        "*Prices are exclusive of GST",
      ],
      costs: {
        total: "Rs 8239",
        discounted: "Rs 6179*",
        monthly: "Rs 2060",
      },
    },
    cooks: {
      title: "Cooks",
      plans: [
        { name: "Basic", discount: "20%", duration: "3 Months", description: "Three months trial plan to get you started" },
        { name: "Best Seller", discount: "30%", duration: "6 Months", description: "Pay for 5 months and get 1 month free!" },
        { name: "Super Saver", discount: "35%", duration: "12 Months", description: "Pay for 10 months and get 2 months free!" },
        { name: "Life Saver", discount: "45%", duration: "24 Months", description: "Pay for 20 months and get 4 months free!" },
      ],
      membershipPeriod: "Six Months Membership Period",
      benefits: [
        "You are eligible for 3 free worker replacements",
        "All the workers are experienced and verified",
        "*Prices are exclusive of GST",
      ],
      costs: {
        total: "Rs 12368",
        discounted: "Rs 8039*",
        monthly: "Rs 1340",
      },
    },
    allrounders: {
      title: "All-rounders",
      plans: [
        { name: "Basic", discount: "30%", duration: "3 Months", description: "Three months trial plan to get you started" },
        { name: "Best Seller", discount: "40%", duration: "6 Months", description: "Pay for 5 months and get 1 month free!" },
        { name: "Super Saver", discount: "45%", duration: "12 Months", description: "Pay for 10 months and get 2 months free!" },
        { name: "Life Saver", discount: "55%", duration: "24 Months", description: "Pay for 20 months and get 4 months free!" },
      ],
      membershipPeriod: "Six Months Membership Period",
      benefits: [
        "You are eligible for 3 free worker replacements",
        "All the workers are experienced and verified",
        "*Prices are exclusive of GST",
      ],
      costs: {
        total: "Rs 15000",
        discounted: "Rs 9000*",
        monthly: "Rs 1500",
      },
    },
  };

  const data = pricingData[service] || pricingData.babysitter; // Default to babysitter if service is not found

  // Handle "Select Plan" button click
  const handleSelectPlan = () => {
    if (service === "cooks") {
      navigate("/services/cooks"); // Navigate to the Cooks page
    } else if (service === "allrounders") {
      navigate("/services/allrounders"); // Navigate to the All-rounders page
    } else if (service === "babysitter") {
      navigate("/services/babycaretaker"); // Navigate to the Babysitter/Japas page
    }
    else if (service === "domestic") {
      navigate("/services/domestichelps"); // Navigate to the All-rounders page
    }
    

  };

  return (
    <div className="pricing-page">
      <Navbar />
      <div className="viewpricing-container">
      
      <h1>{data.title}</h1>
      <div className="pricing-plans">
        {data.plans.map((plan, index) => (
          <div className="pricing-plan" key={index}>
            <h2>{plan.name}</h2>
            <div className="discount">{plan.discount} Discount</div>
            <p>{plan.duration}</p>
            <p>{plan.description}</p>
            <button onClick={handleSelectPlan}>Select Plan</button>
          </div>
        ))}
      </div>
      <div className="membership-details">
        <h2>{data.membershipPeriod}</h2>
        <ul>
          {data.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <div className="cost-summary">
          <p>Total Membership Cost: <span>{data.costs.total}</span></p>
          <p>Discounted Cost: <span>{data.costs.discounted}</span></p>
          <p>Effective Monthly Cost: <span>{data.costs.monthly}</span></p>
        </div>
        <button className="continue-button">Continue</button>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ViewPricing;