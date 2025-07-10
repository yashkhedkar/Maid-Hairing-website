import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Allrounders from "./pages/Allrounders";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Cooks from "./pages/Cooks";
import Domestic from "./pages/Domestic";
import Caretaker from "./pages/Caretaker";
import Login from "./pages/Login"; 
import Pricing from "./pages/Pricing"; 
import ViewPricing from "./pages/ViewPricing"; 


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/services" element={<Services />} />
      <Route path="/services/allrounders" element={<Allrounders />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services/cooks" element={<Cooks />} />
      <Route path="/services/domestichelps" element={<Domestic />} />
      <Route path="/services/babycaretaker" element={<Caretaker />} />
      <Route path="/login" element={<Login />} /> {/* Add the Login route */}
      <Route path="/pricing" element={<Pricing />} /> {/* Add the Pricing route */}
      <Route path="/viewpricing/:service" element={<ViewPricing />} /> {/* Dynamic route for ViewPricing */}
    </Routes>
  );
}

export default App;