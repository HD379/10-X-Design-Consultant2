import React from 'react';
import { Award, Calendar, MapPin } from 'lucide-react';
import { images } from '../data/mock';

const AboutSection = () => {
  const highlights = [
    { icon: Calendar, label: '30+ Years', description: 'Of Design Excellence' },
    { icon: MapPin, label: 'Marin County', description: 'California Based' },
    { icon: Award, label: 'Published Author', description: '6+ Books Written' }
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-stone-100 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <img
          src={images.texture1}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={images.garden1}
                alt="Dane Rose - Mystical Landscapes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <p className="font-serif text-emerald-800 text-lg italic">
                "Creating spaces where people and nature thrive together."
              </p>
              <p className="text-stone-500 text-sm mt-2">— Dane Rose</p>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:pl-8">
            <span className="text-emerald-700 text-sm tracking-widest uppercase font-medium">About Dane</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-stone-800 mt-4 mb-6 leading-tight">
              A Life Devoted to<br />
              <span className="text-emerald-800">Meaningful Design</span>
            </h2>
            
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Dane Rose formed Mystical Landscapes at age seventeen, born from a deep passion for art and the environment. His private Waldorf Education in New York and England included classes in Organic and Biodynamic gardening, laying the foundation for a lifetime of holistic design.
              </p>
              <p>
                Today, Dane is a published author of multiple books, founder of Happiness Data—a nonprofit measuring metrics of well-being—and a sought-after consultant in cultural design. His work spans from transforming physical landscapes to redesigning the invisible architectures of relationships, businesses, and communities.
              </p>
              <p>
                Cultural design, as Dane practices it, is the art of rearranging time, money, thought, and natural resources to create higher yields of sustainable well-being at every level of human experience.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-stone-200">
              {highlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <p className="font-serif text-stone-800 font-medium">{item.label}</p>
                  <p className="text-stone-500 text-sm">{item.description}</p>
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
