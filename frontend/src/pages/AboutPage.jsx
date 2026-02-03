import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* Content Section */}
      <section className="pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Title */}
          <div className="mb-8">
            <span className="text-emerald-700 text-base tracking-wider uppercase font-medium">About</span>
            <h1 className="font-sans text-4xl text-stone-800 mt-3">
              Design devoted to sustainable human well-being
            </h1>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Image */}
            <div className="lg:col-span-2">
              <img
                src="https://customer-assets.emergentagent.com/job_42191151-847d-4955-92c3-b2ce1488d8fa/artifacts/dgpvmqst_Jan%2012%202026%20Medicina%20089.jpg"
                alt="Dane Rose"
                className="w-full rounded-xl shadow-lg sticky top-24"
              />
            </div>

            {/* Text Content */}
            <div className="lg:col-span-3 space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                Dane Rose formed Mystical Landscapes at age seventeen, driven by an early passion for art, environment, and how spaces shape human experience. His Waldorf education in New York and England included deep exposure to organic and biodynamic gardening, grounding his creative work in ecological thinking from the start.
              </p>
              
              <p>
                Today, Dane is a published author, founder of the Happiness Data nonprofit, and a sought-after consultant in cultural design. His work focuses on a simple but ambitious idea: rearranging resources, systems, and environments to create sustainable well-being.
              </p>
              
              <p>
                Through Happiness Data, Dane explores the patterns behind human flourishing and how evidence-based insights can guide better decisions in design, culture, and community systems. His writing and research translate complex ideas about happiness, meaning, and resilience into practical frameworks that people and organizations can actually use.
              </p>
              
              <p>
                Alongside this work, Dane continues to practice hands-on design through Mystical Landscapes, where he creates outdoor environments that feel intentional, alive, and deeply connected to place. Whether working with data, landscapes, or cultural systems, the through-line is the same: design should improve how people live, not just how things look.
              </p>
              
              <p>
                <span style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>10</span> X Designer is where these worlds come together. It reflects Dane's belief that designers can and should expand their impact by combining creativity with clarity, authorship with practice, and vision with real-world results.
              </p>
              
              <p className="text-stone-800 font-medium text-xl mt-8">
                If you're looking to work with someone who brings depth, authorship, systems thinking, and lived design experience to the table, you're in the right place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-stone-100 mb-4">
            Ready to Begin?
          </h2>
          <p className="text-stone-300 mb-8">
            Let's explore how we can work together to create sustainable well-being.
          </p>
          <Link
            to="/#contact"
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

export default AboutPage;
