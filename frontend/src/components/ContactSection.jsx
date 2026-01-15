import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/mock';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    motivation: '',
    dream: '',
    valuable: '',
    links: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, formData);
      setSubmitted(true);
      toast.success('Message sent! Dane will contact you soon.');
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', motivation: '', dream: '', valuable: '', links: '' });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

            {/* Lotus Image */}
            <div className="mt-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_42191151-847d-4955-92c3-b2ce1488d8fa/artifacts/9zd9aces_Lotus.png"
                alt="Lotus - Sacred Geometry"
                className="w-full rounded-xl"
              />
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
                    <label className="block text-sm text-stone-600 mb-2">Is your primary motivation for this project creating sustainable well-being? *</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="motivation" 
                          value="yes" 
                          checked={formData.motivation === 'yes'}
                          onChange={handleChange}
                          required
                          className="w-4 h-4 text-emerald-600 border-stone-300 focus:ring-emerald-500" 
                        />
                        <span className="text-stone-700">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="motivation" 
                          value="no"
                          checked={formData.motivation === 'no'}
                          onChange={handleChange}
                          className="w-4 h-4 text-emerald-600 border-stone-300 focus:ring-emerald-500" 
                        />
                        <span className="text-stone-700">No</span>
                      </label>
                    </div>
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
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-800 text-white text-sm hover:bg-emerald-700 transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
