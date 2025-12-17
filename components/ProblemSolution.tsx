import SectionWrapper from './SectionWrapper';
import { XCircle, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <SectionWrapper className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Problem Side */}
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100 relative overflow-hidden">
             <div className="absolute -right-10 -top-10 text-red-100 opacity-20">
               <XCircle size={200} />
             </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <XCircle className="text-red-500" /> The Cost of Inaction
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">•</span>
                <p className="text-slate-600">60% of SMEs miss calls after hours, losing direct revenue.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">•</span>
                <p className="text-slate-600">Outdated websites confuse visitors and fail to convert traffic.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">•</span>
                <p className="text-slate-600">Manual administrative tasks waste valuable team hours every week.</p>
              </li>
            </ul>
          </div>

          {/* Solution Side */}
          <div className="bg-sapphire-900 p-8 rounded-2xl border border-sapphire-800 relative overflow-hidden text-white shadow-xl">
             <div className="absolute -right-10 -bottom-10 text-sapphire-500 opacity-10">
               <CheckCircle size={200} />
             </div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle className="text-sapphire-400" /> The Sapphire Way
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-sapphire-400 font-bold mt-1">✓</span>
                <p className="text-slate-300">AI Bots handle calls 24/7, booking appointments automatically.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sapphire-400 font-bold mt-1">✓</span>
                <p className="text-slate-300">High-speed NextJS websites built to rank and convert visitors.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sapphire-400 font-bold mt-1">✓</span>
                <p className="text-slate-300">Streamlined IT infrastructure that just works.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSolution;
