import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BooksSection from '../components/BooksSection';
import VenturesSection from '../components/VenturesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BooksSection />
        <VenturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
