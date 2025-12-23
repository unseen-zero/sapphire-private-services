import SectionWrapper from './SectionWrapper';
import { MessageSquare } from 'lucide-react';

const WhatsAppChatbots = () => {
  return (
    <SectionWrapper id="whatsapp-chatbots" className="bg-transparent p-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-sapphire-50 rounded-full flex items-center justify-center mx-auto mb-6 text-sapphire-500">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  WhatsApp & Web Chatbots
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Automate customer support and sales directly on your website or WhatsApp with integrated booking systems.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-sapphire-500 rounded-full mr-3 flex-shrink-0"></div>
                    Instant Replies
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-sapphire-500 rounded-full mr-3 flex-shrink-0"></div>
                    WhatsApp Business
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-sapphire-500 rounded-full mr-3 flex-shrink-0"></div>
                    Lead Capture
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-sapphire-500 rounded-full mr-3 flex-shrink-0"></div>
                    Multilingual
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-sapphire-500 rounded-full mr-3 flex-shrink-0"></div>
                    Booking Integration
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-3 bg-sapphire-500 hover:bg-sapphire-400 text-white rounded-lg font-semibold text-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-sapphire-500/30"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhatsAppChatbots;
