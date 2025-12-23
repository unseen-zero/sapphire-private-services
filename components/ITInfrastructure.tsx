import SectionWrapper from './SectionWrapper';
import { Network } from 'lucide-react';

const ITInfrastructure = () => {
  return (
    <SectionWrapper id="it-infrastructure" className="bg-transparent p-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-sapphire-50 rounded-full flex items-center justify-center mx-auto mb-6 text-sapphire-500">
                  <Network size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  IT Infrastructure Projects
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Comprehensive IT solutions for private education sectors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-sapphire-500 rounded-full mr-3 flex-shrink-0"></div>
                    Network Design
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-sapphire-500 rounded-full mr-3 flex-shrink-0"></div>
                    Hardware Procurement
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-sapphire-500 rounded-full mr-3 flex-shrink-0"></div>
                    Secure Systems
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-sapphire-500 rounded-full mr-3 flex-shrink-0"></div>
                    Maintenance
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-sapphire-500 rounded-full mr-3 flex-shrink-0"></div>
                    Server Installs
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-sapphire-500 rounded-full mr-3 flex-shrink-0"></div>
                    System Management
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-sapphire-500 rounded-full mr-3 flex-shrink-0"></div>
                    Application Deployments
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

export default ITInfrastructure;
