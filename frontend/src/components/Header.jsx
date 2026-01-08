import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Top Left Navigation - No Background */}
      <header className="fixed top-3 left-3 md:top-4 md:left-4 z-50">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_42191151-847d-4955-92c3-b2ce1488d8fa/artifacts/yphdj2ew_10%20X%20Design%20logo.png" 
              alt="10 X Design Logo" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover"
            />
          </a>

          {/* Menu Button - White Icon with Strong Drop Shadow */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-emerald-300 transition-colors"
            style={{ filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 8px rgba(0, 0, 0, 0.6))' }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Menu className="w-6 h-6 md:w-7 md:h-7" />}
          </button>
        </div>
      </header>

      {/* Slide-out Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 left-0 h-full w-64 md:w-72 bg-stone-900 shadow-2xl pt-20 px-6">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-stone-300 hover:text-emerald-400 transition-colors duration-300 text-lg py-3 border-b border-stone-800"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-6 px-6 py-3 bg-emerald-700 text-stone-100 text-sm hover:bg-emerald-600 transition-all duration-300 rounded-lg text-center"
              >
                Book a Call
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
