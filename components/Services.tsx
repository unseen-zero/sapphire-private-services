import SectionWrapper from './SectionWrapper';
import { SERVICES } from '@/lib/constants';
import { Check } from 'lucide-react';

const Services = () => {
  return (
    <SectionWrapper id="services" className="bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Transparent pricing. Professional execution. Solutions designed for ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-slate-100 hover:border-sapphire-200">
              <div className="p-6 flex-grow">
                <div className="w-12 h-12 bg-sapphire-50 rounded-lg flex items-center justify-center mb-6 text-sapphire-500">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-6">{service.description}</p>
                <div className="mb-6">
                  <span className="text-lg font-bold text-sapphire-600 block">{service.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <a
                  href="#contact"
                  className="block w-full text-center py-2.5 rounded-lg border-2 border-sapphire-500 text-sapphire-600 font-semibold hover:bg-sapphire-500 hover:text-white transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
