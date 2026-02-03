import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const pageLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: '10 X Designing', href: '/10x-designing' },
    { name: '10 X Culture', href: '/10x-culture' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_42191151-847d-4955-92c3-b2ce1488d8fa/artifacts/xvs1rnze_10%20X%20Design%20logo.png" 
              alt="10 X Design Logo" 
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div>
              <span className="text-stone-100 font-sans text-lg">Dane Rose</span>
              <span className="block text-xs text-stone-500">10 X Design and Consultant</span>
            </div>
          </div>

          {/* Page Links - Stacked in rows */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3">
              {pageLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-800 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Dane Rose Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
