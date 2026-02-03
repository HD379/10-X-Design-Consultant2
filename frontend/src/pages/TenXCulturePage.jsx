import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TenXCulturePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load Vimeo player script
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* Title Section */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-emerald-700 text-base tracking-wider uppercase font-medium">
            <span style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>10</span> X Culture
          </span>
          <h1 className="font-sans text-4xl text-stone-800 mt-3">
            Exploring the art of cultural design
          </h1>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="font-sans text-2xl text-stone-800 mb-4">
              On the Theme of Cultural Design
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Discover how cultural design shapes sustainable well-being at every level of human experience.
            </p>
          </div>
          
          {/* Vimeo Video Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe 
                src="https://player.vimeo.com/video/1161175446?h=fcd81a9b79&badge=0&autopause=0&player_id=0&app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                title="On the theme of Cultural Design"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-stone-100 mb-4">
            Ready to Explore Further?
          </h2>
          <p className="text-stone-300 mb-8">
            Learn more about how cultural design can transform your projects and communities.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-stone-100 text-emerald-800 text-sm hover:bg-white transition-all duration-300 rounded-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TenXCulturePage;
