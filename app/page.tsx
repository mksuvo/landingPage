import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Hero />
      <Services />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}


{/* This is a comment */}