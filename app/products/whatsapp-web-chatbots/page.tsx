'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { MessageSquare, Check, ArrowRight, Zap, Globe, Smartphone, Clock, Send } from 'lucide-react'
import Link from 'next/link'

export default function WhatsappWebChatbotsPage() {
    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden">
            <Navbar alwaysDark={true} />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-purple-100/40 to-transparent blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-blue-100/40 to-transparent blur-3xl"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>Intelligent Automation</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                                    Automate Conversations on <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                                        WhatsApp, Telegram & Web
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                                    Engage customers 24/7, qualify leads instantly, and automate bookings without lifting a finger. The future of customer interaction is here.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all hover:-translate-y-1 shadow-lg shadow-purple-200">
                                        Get Started
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link href="/#services" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all hover:-translate-y-1">
                                        View Other Services
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Our Chatbots?</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">More than just automated replies. We build intelligent flows that drive business results.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Clock,
                                    title: "24/7 Availability",
                                    description: "Never miss a lead outside business hours. Our bots work round the clock to engage visitors instantly."
                                },
                                {
                                    icon: Smartphone,
                                    title: "Omnichannel Support",
                                    description: "Meet your customers where they are. Seamless integration with WhatsApp Business API and Telegram."
                                },
                                {
                                    icon: Send,
                                    title: "Telegram Bots",
                                    description: "Leverage the power of Telegram for secure, fast, and automated customer interactions."
                                },
                                {
                                    icon: Globe,
                                    title: "Web Widget",
                                    description: "Custom-branded chat widget for your website that matches your design perfectly."
                                },
                                {
                                    icon: Zap,
                                    title: "Instant Qualification",
                                    description: "Ask the right questions to qualify leads before they reach your sales team."
                                },
                                {
                                    title: "Booking System",
                                    icon: Check, // Using Check as placeholder if Calendar/Booking icon isn't imported, but descriptions says booking.
                                    description: "Directly schedule appointments into your calendar without back-and-forth emails."
                                },
                                {
                                    icon: MessageSquare,
                                    title: "Human Handoff",
                                    description: "Seamlessly transfer complex queries to human agents when personal touch is needed."
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                        <feature.icon className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-slate-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 bg-slate-900 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800 via-slate-900 to-slate-900"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Automate?</h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Join forward-thinking businesses that are scaling their customer support and sales with AI chatbots.</p>
                        <Link href="/#contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all hover:scale-105">
                            Build My Bot
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
