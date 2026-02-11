'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

const services = [
  {
    icon: '/software.png',
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies',
  },
  {
    icon: '/mobile.png',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
  },
  {
    icon: '/soft.png',
    title: 'Software Development',
    description: 'Custom software solutions tailored to your needs',
  },
  {
    icon: '/la.png',
    title: 'UI/UX & Graphic Designing',
    description: 'Beautiful, user-friendly designs that engage and convert',
  },
  {
    icon: '/technical.png',
    title: 'Technical Consulting',
    description: 'Expert guidance for your technology decisions',
  },
  {
    icon: '/lms.png',
    title: 'LMS & ERP Solutions',
    description: 'Comprehensive learning and enterprise resource planning systems',
  },
  {
    icon: '/auto.png',
    title: 'Automation',
    description: 'Streamline your processes with intelligent automation',
  },
  {
    icon: '/ai.png',
    title: 'AI, ML & Web3',
    description: 'Next-generation technologies for future-ready solutions',
  },
  {
    icon: '/digi.png',
    title: 'Digital Marketing',
    description: 'Data-driven strategies to boost your online presence',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-blue/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4">OUR SERVICES</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Avixr Technologies delivers innovative and reliable IT solutions across multiple domains
            </p>
          </div>
        </ScrollReveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="glass-card p-8 h-full group">
                <div className="mb-5 w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-light-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
