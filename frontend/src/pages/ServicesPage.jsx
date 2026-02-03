import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Building2, Leaf, Home, Users, Hotel } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

const ServicesPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* Title Section */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-emerald-700 text-base tracking-wider uppercase font-medium">Services</span>
          <h1 className="font-sans text-4xl text-stone-800 mt-3">
            Transform your world with decades of wisdom
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
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
                  className={`bg-stone-50 p-6 rounded-xl border border-stone-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 ${service.link ? 'cursor-pointer' : ''}`}
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

      {/* CTA Section */}
      <section className="py-16 bg-emerald-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-stone-100 mb-4">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-stone-300 mb-8">
            Let's explore how we can work together to create sustainable well-being.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-stone-100 text-emerald-800 text-sm hover:bg-white transition-all duration-300 rounded-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
