import SectionWrapper from './SectionWrapper';
import { Users, Clock, Award, TrendingUp } from 'lucide-react';

const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Happy Clients",
      description: "Across Europe & Africa"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description: "Always here to help"
    },
    {
      icon: Award,
      number: "7+",
      label: "Years Experience",
      description: "Since 2017"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Client Satisfaction",
      description: "Proven results"
    }
  ];

  return (
    <SectionWrapper className="bg-gradient-to-r from-sapphire-50 to-slate-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-sapphire-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-sapphire-200 transition-colors">
                  <stat.icon className="text-sapphire-600" size={24} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SocialProof;
