import SectionWrapper from './SectionWrapper';

const ClientLogos = () => {
  return (
    <SectionWrapper className="bg-white py-12 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-slate-600 mb-2">Trusted by Industry Leaders</h3>
          <p className="text-slate-500 text-sm">Join the companies that trust us with their digital transformation</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Nokia Logo */}
          <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-sapphire-200 transition-colors">
              <div className="text-slate-700 font-bold text-xl">NOKIA</div>
            </div>
          </div>

          {/* Bosch Logo */}
          <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-sapphire-200 transition-colors">
              <div className="text-slate-700 font-bold text-xl">BOSCH</div>
            </div>
          </div>

          {/* EXL Private Bank Logo */}
          <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-sapphire-200 transition-colors">
              <div className="text-center">
                <div className="text-slate-700 font-bold text-lg">EXL</div>
                <div className="text-slate-600 font-medium text-sm">Private Bank</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-xs text-slate-400">And many more leading organizations worldwide</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ClientLogos;
