import React from 'react';
import { Leaf, ExternalLink } from 'lucide-react';
import { siteConfig, ventures } from '../data/mock';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Books', href: '#books' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'Contact', href: '#contact' }
  ];

  const externalLinks = [
    { name: 'Personal Website', href: 'https://daneeasterrose.com/' },
    { name: '10X Living YouTube', href: 'https://www.youtube.com/channel/UChVPrDjUq_rOD5w5mUOHuog' },
    { name: 'Ideas Worth Action', href: 'https://www.youtube.com/channel/UCRH0wRlAOaEn3y-1W_mxXDg' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-stone-100" />
              </div>
              <div>
                <span className="font-serif text-xl text-stone-100">{siteConfig.name}</span>
                <span className="block text-xs text-stone-500 tracking-widest uppercase">{siteConfig.title}</span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Cultural design for sustainable well-being at the personal, relationship, family, 
              community and national level.
            </p>
            <p className="text-emerald-500 font-serif text-lg">{siteConfig.rate}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-100 font-medium uppercase tracking-wide text-sm mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-stone-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="text-stone-100 font-medium uppercase tracking-wide text-sm mb-6">Ventures</h4>
            <ul className="space-y-3">
              {ventures.map((venture) => (
                <li key={venture.id}>
                  <a
                    href={venture.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-stone-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                  >
                    {venture.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-stone-100 font-medium uppercase tracking-wide text-sm mb-6">Resources</h4>
            <ul className="space-y-3">
              {externalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-stone-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Dane Rose Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-stone-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-stone-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
