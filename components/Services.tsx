import SectionWrapper from './SectionWrapper';
import CustomModernWebsites from './CustomModernWebsites';
import AIVoiceAnswering from './AIVoiceAnswering';
import WhatsAppChatbots from './WhatsAppChatbots';
import ITInfrastructure from './ITInfrastructure';
import DigitalAssetAdvisory from './DigitalAssetAdvisory';

const Services = () => {
  return (
    <SectionWrapper id="services" className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We build practical automation solutions that deliver real ROI for your business. From custom websites and AI-powered bots to expert advisory on digital asset strategies, we're here to save you time and help grow your revenue – one smart system at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CustomModernWebsites />
          <AIVoiceAnswering />
          <WhatsAppChatbots />
          <ITInfrastructure />
          <div className="lg:col-span-2">
            <DigitalAssetAdvisory />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;