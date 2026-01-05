import React from 'react';
import { Heart, Building2, Leaf, Home, Users, Hotel } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "10 X Relationships",
    description: "Transform your personal and professional relationships through conscious chemistry and emotional intelligence. Learn to create deeper connections and sustainable bonds.",
    icon: Heart,
    link: null
  },
  {
    id: 2,
    title: "10 X City",
    description: "Reimagine urban spaces through cultural design principles. Create cities and communities that prioritize sustainable well-being, connection, and thriving ecosystems for all residents.",
    icon: Building2,
    link: null
  },
  {
    id: 3,
    title: "10 X Landscape Design",
    description: "Over 30 years creating mystical landscapes in Marin County. Biodynamic gardening, sustainable design, and spaces that nurture the soul.",
    icon: Leaf,
    link: "https://www.mysticallandscapes.com"
  },
  {
    id: 4,
    title: "10 X Microcultures",
    description: "Design intentional communities and microcultures that foster well-being, sustainability, and meaningful human connection.",
    icon: Home,
    link: null
  },
  {
    id: 5,
    title: "10 X Your Nonprofit",
    description: "Strategic guidance for organizations focused on social impact. From Happiness Data to community initiatives, amplify your mission.",
    icon: Users,
    link: "https://storage.googleapis.com/wzukusers/user-25974819/documents/e122be7edcea4024b946dc7c4d7264a8/10-X-Giving%202024%20Digital.pdf"
  },
  {
    id: 6,
    title: "10 X Hospitality",
    description: "Create transformative hospitality experiences that blend biophilic design, wellness, and exceptional guest journeys.",
    icon: Hotel,
    link: null
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-emerald-700 text-base tracking-wider uppercase font-medium">Services</span>
          <p className="text-stone-600 mt-4">
            Transform your relationships, business, and community with decades of wisdom.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            const CardWrapper = service.link ? 'a' : 'div';
            const cardProps = service.link ? {
              href: service.link,
              target: "_blank",
              rel: "noopener noreferrer"
            } : {};

            return (
              <CardWrapper
                key={service.id}
                {...cardProps}
                className={`bg-white p-6 rounded-xl border border-stone-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 ${service.link ? 'cursor-pointer' : ''}`}
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="font-sans text-lg text-stone-800 mb-2">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
                {service.link && (
                  <span className="inline-block mt-4 text-emerald-700 text-sm">Learn more →</span>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
