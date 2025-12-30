import React from 'react';
import { Heart, TrendingUp, Leaf, Home, Users, Building } from 'lucide-react';
import { services } from '../data/mock';

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
    <section id="services" className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm tracking-wider uppercase">Services</span>
          <h2 className="font-serif text-4xl text-stone-800 mt-3 mb-4">
            10X Your Life
          </h2>
          <p className="text-stone-600">
            Transform your relationships, business, and community with decades of wisdom.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-white p-6 rounded-xl border border-stone-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="w-5 h-5 text-emerald-700" />}
                </div>
                <h3 className="font-serif text-lg text-stone-800 mb-2">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
