import React, { useState } from "react";
import "../css/BookingSection.css";

const BookingSection = ({ bookingRef }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [houseSize, setHouseSize] = useState("");
  const [floors, setFloors] = useState("");
  const [hasDog, setHasDog] = useState("");
  const [shiftTime, setShiftTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [notes, setNotes] = useState("");

  const cities = ["Delhi", "Noida", "Gurgaon", "Ghaziabad", "Pune", "Bengaluru"];
  const services = ["Brooming, Mopping", "Bathroom Cleaning", "Dusting", "Dish-washing"];
  const houseSizes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "6 BHK"];
  const floorOptions = ["1 floor only", "2 floors", "3 floors", "4 floors", "5 floors"];
  const dogOptions = ["Yes", "No"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      selectedCity,
      selectedService,
      houseSize,
      floors,
      hasDog,
      shiftTime,
      startDate,
      notes,
    });
  };

  return (
    <div className="booking-section" ref={bookingRef}>
      <h2>BOOKING DETAILS</h2>
      <form onSubmit={handleSubmit}>
        {/* City Selection */}
        <div className="form-group">
          <label>Select your city</label>
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} required>
            <option value="">Select a city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Service Selection */}
        <div className="form-group">
          <label>Select a Service</label>
          <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* House Size */}
        <div className="form-group">
          <label>Select house size</label>
          <select value={houseSize} onChange={(e) => setHouseSize(e.target.value)} required>
            <option value="">Select house size</option>
            {houseSizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Floors */}
        <div className="form-group">
          <label>How many such floors?</label>
          <select value={floors} onChange={(e) => setFloors(e.target.value)} required>
            <option value="">Select number of floors</option>
            {floorOptions.map((floor, index) => (
              <option key={index} value={floor}>
                {floor}
              </option>
            ))}
          </select>
        </div>

        {/* Dog Preference */}
        <div className="form-group">
          <label>Do you have dog(s)?</label>
          <select value={hasDog} onChange={(e) => setHasDog(e.target.value)} required>
            <option value="">Select an option</option>
            {dogOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Shift Time */}
        <div className="form-group">
          <label>Select shift start time</label>
          <input
            type="time"
            value={shiftTime}
            onChange={(e) => setShiftTime(e.target.value)}
            required
          />
        </div>

        {/* Start Date */}
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        {/* Additional Notes */}
        <div className="form-group">
          <label>Additional notes (if any)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter any additional notes..."
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingSection;