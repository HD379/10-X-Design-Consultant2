import React from 'react';
import { ArrowDown } from 'lucide-react';
import { siteConfig } from '../data/mock';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Beautiful Modern Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-stone-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-7xl text-stone-100 leading-tight mb-6">
          {siteConfig.tagline}
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-stone-200 text-lg leading-relaxed mb-10">
          {siteConfig.description}
        </p>

        {/* CTA Button - No Arrow */}
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-emerald-700 text-stone-100 text-sm hover:bg-emerald-600 transition-all duration-300 rounded-lg"
        >
          Begin Your Journey
        </a>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-100/60 hover:text-stone-100 transition-colors duration-300 animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
