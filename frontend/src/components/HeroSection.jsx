import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/mock';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://customer-assets.emergentagent.com/job_42191151-847d-4955-92c3-b2ce1488d8fa/artifacts/6enkd0ip_A_breathtaking_zen-inspired_sustainable_modern_hom-1767878221383.png"
          alt="Zen-Inspired Sustainable Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-7xl text-stone-100 leading-tight mb-6">
          <span style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>10</span> X Design for Sustainable Well-being
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-stone-200 text-lg leading-relaxed mb-10" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)' }}>
          {siteConfig.description}
        </p>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-emerald-700 text-stone-100 text-sm hover:bg-emerald-600 transition-all duration-300 rounded-lg"
        >
          Begin Your Journey
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
