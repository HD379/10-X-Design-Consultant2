import React from 'react';

const Footer = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_42191151-847d-4955-92c3-b2ce1488d8fa/artifacts/yphdj2ew_10%20X%20Design%20logo.png" 
              alt="10 X Design Logo" 
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div>
              <span className="text-stone-100 font-sans text-lg">Dane Rose</span>
              <span className="block text-xs text-stone-500">10 X Design and Consultant</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-800 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Dane Rose Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
