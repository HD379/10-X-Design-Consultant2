import React from 'react';
import { Heart, TrendingUp, Leaf, Home, Users, Building } from 'lucide-react';
import { services, images } from '../data/mock';

const iconMap = {
  Heart,
  TrendingUp,
  Leaf,
  Home,
  Users,
  Building
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-stone-50 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-3">
        <img
          src={images.texture2}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 text-sm tracking-widest uppercase font-medium">Services</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-stone-800 mt-4 mb-6">
            10X Your Life &<br />
            <span className="text-emerald-800">Transform Your World</span>
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Whether you're seeking to enhance relationships, scale your business, or create sustainable communities,
            Dane brings decades of wisdom and practical experience to guide your transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative bg-white p-8 rounded-lg border border-stone-200 hover:border-emerald-200 hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                    {IconComponent && <IconComponent className="w-6 h-6 text-emerald-700" />}
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl text-stone-800 mb-3 group-hover:text-emerald-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 mt-6 text-emerald-700 text-sm tracking-wide uppercase group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative overflow-hidden rounded-xl">
          <div className="absolute inset-0">
            <img
              src={images.consulting}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-emerald-900/85" />
          </div>
          <div className="relative py-12 px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-2xl lg:text-3xl text-stone-100 mb-2">
                Ready to Begin Your Transformation?
              </h3>
              <p className="text-stone-300">
                Schedule a consultation and discover how cultural design can elevate your life.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 px-8 py-4 bg-stone-100 text-emerald-900 tracking-wide uppercase text-sm hover:bg-white transition-all duration-300 rounded"
            >
              Book Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
