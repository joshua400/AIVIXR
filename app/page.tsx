import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Marquee from '@/components/Marquee'
import Projects from '@/components/Projects'
import DigitalMarketing from '@/components/DigitalMarketing'
import Testimonials from '@/components/Testimonials'
import Founder from '@/components/Founder'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Avixr Technologies Pvt Ltd',
    url: 'https://www.avixr.in',
    logo: 'https://www.avixr.in/avixr-wings-logo.jpeg',
    description: 'Avixr Technologies Pvt Ltd is a research-driven software company specializing in transforming visionary ideas into top-tier mobile and web solutions.',
    foundingDate: '2022',
    founder: {
      '@type': 'Person',
      name: 'KV Avinash Sarma',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.linkedin.com/company/avixr-private-limited/',
      'https://www.instagram.com/avixr_pvt_ltd/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://www.avixr.in/#contact',
    },
    areaServed: 'Worldwide',
    serviceType: ['Software Development', 'Web Development', 'Mobile App Development', 'Digital Solutions'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen w-full bg-white">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Marquee />
        <Projects />
        <DigitalMarketing />
        <Testimonials />
        <Founder />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
