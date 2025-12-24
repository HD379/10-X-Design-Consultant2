import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { siteConfig, images } from '../data/mock';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Mystical Garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-32 h-32 border border-stone-400/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-10 w-24 h-24 border border-emerald-400/20 rounded-full" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100/10 backdrop-blur-sm rounded-full border border-stone-100/20 mb-8">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-stone-100 text-sm tracking-widest uppercase">{siteConfig.rate} Consulting</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-100 leading-tight mb-6">
          <span className="block">Cultural</span>
          <span className="block text-emerald-400">Design</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-stone-200 font-light mb-4 tracking-wide">
          {siteConfig.tagline}
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-stone-300 text-lg leading-relaxed mb-12">
          {siteConfig.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group px-8 py-4 bg-emerald-700 text-stone-100 tracking-wide uppercase text-sm hover:bg-emerald-600 transition-all duration-300 rounded flex items-center gap-3"
          >
            Begin Your Journey
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-stone-100/30 text-stone-100 tracking-wide uppercase text-sm hover:bg-stone-100/10 transition-all duration-300 rounded backdrop-blur-sm"
          >
            Explore Services
          </a>
        </div>
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
