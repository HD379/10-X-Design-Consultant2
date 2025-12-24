import React from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { siteConfig } from '../data/mock';

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Books', href: '#books' },
    { name: 'Ventures', href: '#ventures' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center group-hover:bg-emerald-700 transition-colors duration-300">
              <Leaf className="w-5 h-5 text-stone-100" />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl text-stone-800 tracking-wide">{siteConfig.name}</span>
              <span className="block text-xs text-stone-500 tracking-widest uppercase">{siteConfig.title}</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm text-stone-600 hover:text-emerald-800 transition-colors duration-300 tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-6 py-2.5 bg-emerald-800 text-stone-100 text-sm tracking-wide uppercase hover:bg-emerald-700 transition-all duration-300 rounded"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-stone-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-stone-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-stone-600 hover:text-emerald-800 transition-colors duration-300 tracking-wide uppercase text-sm py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-4 px-6 py-3 bg-emerald-800 text-stone-100 text-sm tracking-wide uppercase hover:bg-emerald-700 transition-all duration-300 rounded text-center"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
