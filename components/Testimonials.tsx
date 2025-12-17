import SectionWrapper from './SectionWrapper';
import { TESTIMONIALS } from '@/lib/constants';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <SectionWrapper className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
          <p className="text-slate-600">See how we help businesses grow in Romania, Spain, and Tanzania.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 left-6 text-sapphire-200" size={40} />
              <p className="text-slate-700 relative z-10 mb-6 italic pt-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <h4 className="font-bold text-slate-900">{t.author}</h4>
                <p className="text-sm text-sapphire-600 font-medium">{t.role}</p>
                <p className="text-xs text-slate-400 mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
