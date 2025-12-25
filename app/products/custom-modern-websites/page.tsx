'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Code, Rocket, Search, Monitor, Cpu, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function WebsiteDevelopmentPage() {
    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden">
            <Navbar alwaysDark={true} />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-blue-100/40 to-transparent blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-cyan-100/40 to-transparent blur-3xl"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
                                    <Code className="w-4 h-4" />
                                    <span>High-Performance Web Solutions</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                                    Custom Modern <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                                        Websites Built for Growth
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                                    We don't just build websites; we build high-performance business assets. SEO-optimized, lightning-fast, and designed to convert visitors into customers.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-lg shadow-blue-200">
                                        Start Your Project
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link href="/#services" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all hover:-translate-y-1">
                                        See All Services
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Core Values / Features */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Cutting-Edge Technology for Unmatched Performance</h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Your website is the digital storefront of your business. We use modern frameworks like Next.js and Tailwind CSS to ensure your site is faster than the competition and scales effortlessly.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Lightning Fast Load Times (Core Web Vitals Optimized)",
                                        "Responsive Design (Mobile, Tablet, Desktop)",
                                        "SEO-First Architecture for Better Rankings",
                                        "Custom CMS Integration for Easy Updates",
                                        "Secure and Scalable Infrastructure"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Rocket, title: "Speed", desc: "Built with performance in mind." },
                                    { icon: Search, title: "SEO", desc: "Optimized for search engines." },
                                    { icon: Monitor, title: "Responsive", desc: "Perfect on every screen size." },
                                    { icon: Shield, title: "Secure", desc: "State-of-the-art security." }
                                ].map((feature, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                                            <feature.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-sm text-slate-600">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Bar */}
                <section className="py-12 bg-slate-50 border-y border-slate-100">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Our Preferred Tech Stack</p>
                        <div className="flex flex-wrap justify-center gap-12 opacity-60">
                            {/* Just simple text labels as placeholders for logos for now */}
                            <span className="text-xl font-bold text-slate-700">Next.js</span>
                            <span className="text-xl font-bold text-slate-700">React</span>
                            <span className="text-xl font-bold text-slate-700">Tailwind CSS</span>
                            <span className="text-xl font-bold text-slate-700">TypeScript</span>
                            <span className="text-xl font-bold text-slate-700">Vercel</span>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-blue-600 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -ml-48 -mb-48"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center text-white">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready for a Website That Converts?</h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Let's build a digital experience that reflects your brand's excellence and drives results.
                        </p>
                        <Link href="/#contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl">
                            Get a Free Quote
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
