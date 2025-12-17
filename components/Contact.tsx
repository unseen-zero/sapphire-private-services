'use client'

import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { COMPANY_INFO } from '@/lib/constants';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after showing success
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" className="bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden bg-white shadow-2xl">
          
          {/* Contact Info Side */}
          <div className="bg-sapphire-900 p-10 md:p-14 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let&apos;s talk about your project</h2>
              <p className="text-slate-300 mb-10">
                Get a free consultation. Whether you need a simple website or a complex AI automation system, we&apos;re here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-sapphire-800 p-3 rounded-full">
                    <Phone className="text-sapphire-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-slate-300">{COMPANY_INFO.phoneDisplay}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-sapphire-800 p-3 rounded-full">
                    <Mail className="text-sapphire-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-slate-300">{COMPANY_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sapphire-800 p-3 rounded-full">
                    <MapPin className="text-sapphire-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Visit Us</h3>
                    <p className="text-slate-300 max-w-xs text-sm">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <a 
                 href={`https://wa.me/${COMPANY_INFO.phone.replace('+', '')}`}
                 target="_blank"
                 rel="noreferrer"
                 className="inline-flex items-center justify-center w-full py-4 bg-green-600 hover:bg-green-500 rounded-lg font-bold transition-all"
               >
                 Chat on WhatsApp
               </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:p-14 bg-white">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 outline-none transition-all"
                  placeholder="+44 ..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full py-4 bg-sapphire-500 hover:bg-sapphire-600 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {formStatus === 'submitting' ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
              
              {formStatus === 'success' && (
                <p className="text-green-600 text-center font-medium">Message sent successfully! We&apos;ll be in touch.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
