import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import HealthInsurance from './pages/HealthInsurance';
import LifeInsurance from './pages/LifeInsurance';
import MutualFunds from './pages/MutualFunds';
import RealEstate from './pages/RealEstate';
import RentalProperty from './pages/RentalProperty';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/health-insurance" element={<HealthInsurance />} />
            <Route path="/services/life-insurance" element={<LifeInsurance />} />
            <Route path="/services/mutual-funds" element={<MutualFunds />} />
            <Route path="/services/real-estate" element={<RealEstate />} />
            <Route path="/services/rental-property" element={<RentalProperty />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            {/* Catch-all route redirects to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </BrowserRouter>
  );
}
