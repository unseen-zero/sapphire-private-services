import SectionWrapper from './SectionWrapper';
import { FEATURES } from '@/lib/constants';

const WhyChooseUs = () => {
  return (
    <SectionWrapper id="why-us" className="bg-sapphire-900 text-white relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Sapphire?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We understand the specific needs of SMEs in Europe and government projects in East Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-sapphire-500 transition-colors group">
              <div className="mb-4 text-sapphire-400 group-hover:text-sapphire-300 transition-colors">
                <feature.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
