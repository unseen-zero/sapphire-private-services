import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  email: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

