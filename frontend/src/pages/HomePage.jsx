import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const features = [
    {
      icon: Leaf,
      title: "Sustainable Design",
      description: "Creating environments and systems that nurture well-being for generations to come."
    },
    {
      icon: Heart,
      title: "Love Projects",
      description: "Working exclusively on projects motivated by genuine care for people and planet."
    },
    {
      icon: Sparkles,
      title: "10 X Impact",
      description: "Amplifying results through intentional, deeply considered design approaches."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        
        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-emerald-700 text-sm tracking-wider uppercase font-medium">Welcome</span>
                <h2 className="font-sans text-3xl text-stone-800 mt-3 mb-6">
                  Design that serves life
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  10 X Design is the practice of rearranging time, money, thought, and natural resources to create higher yields of sustainable well-being at every level of human experience.
                </p>
                <p className="text-stone-600 leading-relaxed mb-8">
                  Whether you're transforming a landscape, a relationship, a business, or a community, the principles remain the same: design should improve how people live, not just how things look.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
                >
                  Learn more about Dane <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div>
                <img
                  src="https://customer-assets.emergentagent.com/job_42191151-847d-4955-92c3-b2ce1488d8fa/artifacts/lejmy650_Geometry%20in%20Field.png"
                  alt="Sacred Geometry"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-emerald-700 text-sm tracking-wider uppercase font-medium">Approach</span>
              <h2 className="font-sans text-3xl text-stone-800 mt-3">
                The foundation of 10 X Design
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-emerald-700" />
                  </div>
                  <h3 className="font-sans text-xl text-stone-800 mb-3">{feature.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-emerald-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl text-stone-100 mb-4">
              Ready to explore what's possible?
            </h2>
            <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
              Whether you're at the beginning of your journey or refining an existing vision, let's discover how 10 X Design can amplify your impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/10x-designing"
                className="px-8 py-4 bg-stone-100 text-emerald-800 text-sm hover:bg-white transition-all duration-300 rounded-lg"
              >
                Explore 10 X Designing
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-stone-300 text-stone-100 text-sm hover:bg-stone-100/10 transition-all duration-300 rounded-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
