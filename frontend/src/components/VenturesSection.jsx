import React from 'react';
import { ExternalLink, Leaf, Heart, Sparkles } from 'lucide-react';
import { ventures, images } from '../data/mock';

const iconMap = {
  0: Leaf,
  1: Heart,
  2: Sparkles
};

const VenturesSection = () => {
  return (
    <section id="ventures" className="relative py-24 lg:py-32 bg-stone-100 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={images.garden2}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 text-sm tracking-widest uppercase font-medium">Connected Ventures</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-stone-800 mt-4 mb-6">
            A Network of<br />
            <span className="text-emerald-800">Purposeful Work</span>
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Dane's consulting practice is part of a broader ecosystem of ventures, each dedicated 
            to creating sustainable well-being and meaningful transformation.
          </p>
        </div>

        {/* Ventures Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {ventures.map((venture, index) => {
            const IconComponent = iconMap[index];
            return (
              <a
                key={venture.id}
                href={venture.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Top Accent */}
                <div className="h-2 bg-gradient-to-r from-emerald-600 to-emerald-800" />
                
                <div className="p-8">
                  {/* Icon & Link */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                      {IconComponent && <IconComponent className="w-6 h-6 text-emerald-700" />}
                    </div>
                    <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-emerald-600 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-2xl text-stone-800 mb-3 group-hover:text-emerald-800 transition-colors duration-300">
                    {venture.name}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {venture.description}
                  </p>

                  {/* Visit Link */}
                  <div className="mt-6 pt-6 border-t border-stone-100">
                    <span className="inline-flex items-center gap-2 text-emerald-700 text-sm tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                      Visit Website
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
