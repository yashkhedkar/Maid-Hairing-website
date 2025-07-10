import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Ghar Seva</h1>
      </div>

      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>

        {/* Services Dropdown */}
        <li className="dropdown">
          <button
            className="nav-item dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Services 
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/services/services">Services</Link></li>
              <li><Link to="/services/allrounders">Allrounders</Link></li>
              <li><Link to="/services/cooks">Cooks</Link></li>
              <li><Link to="/services/babycaretaker">Babycaretaker</Link></li>
              <li><Link to="/services/domestichelps">Domestic </Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/pricing" className="nav-item">Pricing</Link></li>
        <li><Link to="/about" className="nav-item">About Us</Link></li>
        <li><Link to="/contact" className="nav-item">Contact Us</Link></li>
      </ul>

      <div className="nav-buttons">
        <Link to="/search-job" className="search-btn">SEARCH JOB</Link>
        <Link to="/login" className="login-btn">LOGIN</Link>
      </div>
    </nav>
  );
};

export default Navbar;