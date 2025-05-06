import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import WebHostingPage from './pages/services/WebHostingPage';
import BulkSMSPage from './pages/services/BulkSMSPage';
import WebMaintenancePage from './pages/services/WebMaintenancePage';
import DomainRegistrationPage from './pages/services/DomainRegistrationPage';
import ChurchSoftwarePage from './pages/ChurchSoftwarePage';
import MobileAppPage from './pages/MobileAppPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services/web-hosting" element={<WebHostingPage />} />
            <Route path="/services/bulk-sms" element={<BulkSMSPage />} />
            <Route path="/services/web-maintenance" element={<WebMaintenancePage />} />
            <Route path="/services/domain-registration" element={<DomainRegistrationPage />} />
            <Route path="/church-software" element={<ChurchSoftwarePage />} />
            <Route path="/mobile-app" element={<MobileAppPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;