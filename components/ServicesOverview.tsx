'use client'

import SectionWrapper from './SectionWrapper';
import Link from 'next/link';
import { Code, Bot, MessageSquare, Network, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesOverview = () => {
  const services = [
    {
      id: 'web',
      title: "Custom Modern Websites",
      description: "High-performance, SEO-optimized websites built with cutting-edge technology stacks.",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      features: ["Custom Design", "SEO Optimized", "Mobile Responsive"],
      delay: 0.1,
      link: '/products/custom-modern-websites'
    },
    {
      id: 'voice-ai',
      title: "AI Voice Answering Bots",
      description: "Never miss a lead again. Our AI answers calls 24/7, books appointments, and qualifies leads with dedicated booking agents.",
      icon: Bot,
      gradient: "from-emerald-500 to-teal-500",
      features: ["24/7 Availability", "Natural Voice", "Booking Agents"],
      delay: 0.2,
      isComingSoon: true
    },
    {
      id: 'chatbots',
      title: "WhatsApp, Telegram & Web Chatbots",
      description: "Automate customer support and sales directly on your website, WhatsApp, or Telegram with integrated booking systems.",
      icon: MessageSquare,
      gradient: "from-purple-500 to-indigo-500",
      features: ["Instant Replies", "WhatsApp Business", "Booking Integration"],
      delay: 0.3,
      link: '/products/whatsapp-web-chatbots'
    },
    {
      id: 'infrastructure',
      title: "IT Infrastructure Projects",
      description: "Comprehensive IT solutions for private education sectors.",
      icon: Network,
      gradient: "from-orange-500 to-red-500",
      features: ["Server Installs", "System Management", "Application Deployments"],
      delay: 0.4,
      isComingSoon: true
    }
  ];

  return (
    <SectionWrapper id="services" className="bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sapphire-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-sapphire-600" />
            <span className="text-sm font-medium text-sapphire-700">Our Services</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Complete Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sapphire-600 to-purple-600">
              Transformation Solutions
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We build practical automation solutions that deliver real ROI for your business. From custom websites and AI-powered bots to comprehensive IT infrastructure, we're here to save you time and help grow your revenue – one smart system at a time.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Link
                href={service.isComingSoon ? '#services' : (service.link || '#contact')}
                className={`block h-full ${service.isComingSoon ? 'cursor-default pointer-events-none' : ''}`}
                onClick={(e) => service.isComingSoon && e.preventDefault()}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 p-6 md:p-8 h-full">

                  {/* Background gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>


                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl scale-150 transition-opacity duration-500`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors text-xl md:text-2xl">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full group-hover:bg-slate-200 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${service.isComingSoon ? 'text-amber-600 bg-amber-50 px-3 py-1 rounded-full' : 'text-slate-500'}`}>
                        {service.isComingSoon ? 'Coming soon' : 'Learn more'}
                      </span>
                      {!service.isComingSoon && (
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                          <ArrowRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hover effect lines */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sapphire-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Get started with a free consultation and discover how our automation solutions can revolutionize your operations.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesOverview;
