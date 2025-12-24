import React, { useState } from 'react';
import { Phone, Mail, Send, Calendar, CheckCircle } from 'lucide-react';
import { siteConfig, images } from '../data/mock';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be connected to backend later
    console.log('Form submitted:', formData);
    setSubmitted(true);
    toast.success('Thank you for reaching out! Dane will contact you soon.');
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    '10X Relationships',
    '10X Business',
    'Landscape Design',
    'Eco Village & Microcultures',
    'Nonprofit Consulting',
    '10X Hotels & Hospitality',
    'Other'
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-stone-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={images.texture1}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="text-emerald-700 text-sm tracking-widest uppercase font-medium">Get in Touch</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-stone-800 mt-4 mb-6">
              Let's Create<br />
              <span className="text-emerald-800">Something Beautiful</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              Whether you're ready to transform your relationships, elevate your business, 
              or design a more sustainable way of living, I'm here to guide your journey.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-10">
              <a
                href={`tel:${siteConfig.phone}`}
                className="group flex items-center gap-4 p-4 bg-white rounded-lg border border-stone-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-sm text-stone-500">Call Directly</p>
                  <p className="text-stone-800 font-medium">{siteConfig.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 p-4 bg-white rounded-lg border border-stone-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-sm text-stone-500">Email</p>
                  <p className="text-stone-800 font-medium">{siteConfig.email}</p>
                </div>
              </a>
            </div>

            {/* Rate Card */}
            <div className="bg-emerald-800 p-6 rounded-xl text-stone-100">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-emerald-300" />
                <span className="text-emerald-200 text-sm uppercase tracking-wide">Consulting Rate</span>
              </div>
              <p className="font-serif text-3xl text-white mb-2">{siteConfig.rate}</p>
              <p className="text-stone-300 text-sm">
                Initial consultations include a discovery call to understand your needs and goals.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-8 lg:p-10 rounded-xl shadow-xl border border-stone-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-serif text-2xl text-stone-800 mb-3">Message Sent!</h3>
                <p className="text-stone-600">Thank you for reaching out. Dane will be in touch soon.</p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl text-stone-800 mb-2">Send a Message</h3>
                <p className="text-stone-500 mb-8">Fill out the form below and I'll get back to you shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-stone-600 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-300 bg-stone-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-stone-600 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-300 bg-stone-50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-stone-600 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-300 bg-stone-50"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm text-stone-600 mb-2">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-300 bg-stone-50 text-stone-700"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-stone-600 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-300 bg-stone-50 resize-none"
                      placeholder="Tell me about your goals and how I can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-emerald-800 text-stone-100 tracking-wide uppercase text-sm hover:bg-emerald-700 transition-all duration-300 rounded-lg"
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
