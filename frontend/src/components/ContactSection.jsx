import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/mock';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dream: '',
    valuable: '',
    links: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    toast.success('Message sent! Dane will contact you soon.');
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', dream: '', valuable: '', links: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div>
            <span className="text-emerald-700 text-base tracking-wider uppercase font-medium">Contact</span>
            <h2 className="font-sans text-4xl text-stone-800 mt-3 mb-6">
              Let's Create Something Beautiful
            </h2>
            <p className="text-stone-600 mb-8">
              Ready to transform your life, relationships, or business? Reach out to begin your journey.
            </p>

            {/* Rate */}
            <div className="bg-emerald-800 p-5 rounded-xl text-white">
              <p className="text-emerald-200 text-sm uppercase tracking-wide mb-1">Consulting Rate</p>
              <p className="font-sans text-2xl">{siteConfig.rate} or flat rate projects</p>
            </div>

            {/* Question */}
            <div className="mt-8 p-6 bg-white rounded-xl border border-stone-200">
              <p className="text-stone-700 font-medium mb-3">Is your primary motivation for this project creating sustainable well-being?</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="motivation" value="yes" className="w-4 h-4 text-emerald-600" />
                  <span className="text-stone-600">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="motivation" value="no" className="w-4 h-4 text-emerald-600" />
                  <span className="text-stone-600">No</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-sans text-xl text-stone-800 mb-2">Message Sent!</h3>
                <p className="text-stone-600 text-sm">Dane will be in touch soon.</p>
              </div>
            ) : (
              <>
                <h3 className="font-sans text-xl text-stone-800 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-stone-600 mb-1.5">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-stone-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-stone-600 mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-stone-50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-stone-600 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-stone-50"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-stone-600 mb-1.5">Describe a little bit about your dream? *</label>
                    <textarea
                      name="dream"
                      value={formData.dream}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-stone-50 resize-none"
                      placeholder="Share your vision..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-stone-600 mb-1.5">What would make this relationship the most valuable for you?</label>
                    <textarea
                      name="valuable"
                      value={formData.valuable}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-stone-50 resize-none"
                      placeholder="What outcomes would be most meaningful?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-stone-600 mb-1.5">Links to anything you would like to share</label>
                    <input
                      type="text"
                      name="links"
                      value={formData.links}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-stone-50"
                      placeholder="https://..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-800 text-white text-sm hover:bg-emerald-700 transition-all duration-300 rounded-lg"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
