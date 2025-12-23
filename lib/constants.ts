import { Bot, Code, MessageSquare, Network, Globe, Zap, Coins, Clock } from 'lucide-react';
import { CompanyInfo, Service, Testimonial, Feature } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Sapphire Private Services LTD",
  tagline: "Turn missed calls into revenue with automation that works",
  address: "Office 9047, 321-323 High Road, Chadwell Heath, Romford, Essex, RM6 6AX",
  phone: "+447456461535",
  phoneDisplay: "+44 7456 461535",
  email: "office@spsautomates.com"
};

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: "Custom Modern Websites",
    description: "High-performance, SEO-optimized websites built with cutting-edge technology stacks.",
    price: "€500 - €3,000",
    features: ["Custom Design", "SEO Optimized", "Mobile Responsive", "Fast Loading"],
    icon: Code
  },
  {
    id: 'voice-ai',
    title: "AI Voice Answering Bots",
    description: "Never miss a lead again. Our AI answers calls 24/7, books appointments, and qualifies leads with dedicated booking agents.",
    price: "€1,500 setup + €150/mo",
    features: ["24/7 Availability", "Natural Voice", "CRM Integration", "Call Transcripts", "Booking Agents"],
    icon: Bot
  },
  {
    id: 'chatbots',
    title: "WhatsApp & Web Chatbots",
    description: "Automate customer support and sales directly on your website or WhatsApp with integrated booking systems.",
    price: "€800 setup + €150/mo",
    features: ["Instant Replies", "WhatsApp Business", "Lead Capture", "Multilingual", "Booking Integration"],
    icon: MessageSquare
  },
  {
    id: 'infrastructure',
    title: "IT Infrastructure Projects",
    description: "Comprehensive IT solutions for private education sectors.",
    price: "Project-based Quote",
    features: ["Network Design", "Hardware Procurement", "Secure Systems", "Maintenance", "Server Installs", "System Management", "Application Deployments"],
    icon: Network
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Transformed our SME – doubled leads in 3 months. The AI voice bot handles calls we used to miss after hours.",
    author: "Elena Popescu",
    role: "SME Owner",
    location: "Bucharest, Romania"
  },
  {
    id: '2',
    quote: "Sapphire built a robust system for our local office. Fast deployment and excellent ongoing support.",
    author: "Joseph M.",
    role: "Education Administrator",
    location: "Dar es Salaam, Tanzania"
  },
  {
    id: '3',
    quote: "Our real estate inquiries are now answered instantly via WhatsApp. Essential for our international clients.",
    author: "Alejandro Garcia",
    role: "Agency Director",
    location: "Tenerife, Spain"
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Deploy in Days",
    description: "We don't drag projects out. Get your systems live and generating ROI within days, not months.",
    icon: Zap
  },
  {
    title: "Cash-First Results",
    description: "Every solution we build is designed to either save money on labor or generate new revenue immediately.",
    icon: Coins
  },
  {
    title: "Proven Experience",
    description: "Real-world expertise since 2017 helping businesses automate and scale effectively.",
    icon: Clock
  },
  {
    title: "Global Reach",
    description: "Successfully serving happy customers in Romania, Spain, and Tanzania.",
    icon: Globe
  }
];

