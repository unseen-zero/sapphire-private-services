'use client'

import { COMPANY_INFO } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">SPSAutomates<span className="text-sapphire-500">.</span></h3>
            <p className="mb-4 max-w-sm">
              {COMPANY_INFO.tagline}. Delivering modern digital solutions to underserved markets.
            </p>
            <div className="flex space-x-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-sapphire-500 transition-colors cursor-pointer flex items-center justify-center">
                 <span className="text-xs font-bold text-white">LI</span>
               </div>
               <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-sapphire-500 transition-colors cursor-pointer flex items-center justify-center">
                 <span className="text-xs font-bold text-white">FB</span>
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-sapphire-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-sapphire-400 transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-sapphire-400 transition-colors">Why Us</a></li>
              <li><a href="#contact" className="hover:text-sapphire-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sapphire-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sapphire-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-sapphire-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-slate-800 pt-8 pb-6">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-lg">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-slate-300 text-sm font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-lg">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">GDPR</span>
              </div>
              <span className="text-slate-300 text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-lg">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">💳</span>
              </div>
              <span className="text-slate-300 text-sm font-medium">Secure Payments</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-lg">
              <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">24</span>
              </div>
              <span className="text-slate-300 text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} SPSAutomates.com. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-slate-500">Sapphire Private Services Limited, {COMPANY_INFO.address}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
