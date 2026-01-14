import React from 'react';
import { Award, Calendar } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Calendar, label: '30+ Years', description: 'Design Excellence' },
    { icon: Award, label: '6+ Books', description: 'Published Author' }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://customer-assets.emergentagent.com/job_42191151-847d-4955-92c3-b2ce1488d8fa/artifacts/9zd9aces_Lotus.png"
              alt="Lotus - Sacred Geometry"
              className="w-full aspect-[4/5] object-cover rounded-xl"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-emerald-700 text-base tracking-wider uppercase font-medium">About Dane</span>
            <h2 className="font-sans text-4xl text-stone-800 mt-3 mb-6">
              Design devoted to sustainable human well-being
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Dane Rose formed Mystical Landscapes at age seventeen, born from a passion for art and environment. His Waldorf Education in New York and England included Organic and Biodynamic gardening.
              </p>
              <p>
                Today, Dane is a published author, founder of Happiness Data nonprofit, and a sought-after consultant in cultural design—the art of rearranging resources to create sustainable well-being.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-stone-200">
              {highlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-2">
                    <item.icon className="w-4 h-4 text-emerald-700" />
                  </div>
                  <p className="font-medium text-stone-800 text-sm">{item.label}</p>
                  <p className="text-stone-500 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
