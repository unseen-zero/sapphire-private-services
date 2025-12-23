import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import ProblemSolution from '@/components/ProblemSolution'
import ServicesOverview from '@/components/ServicesOverview'
import ClientLogos from '@/components/ClientLogos'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <SocialProof />
        <ProblemSolution />
        <ClientLogos />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

