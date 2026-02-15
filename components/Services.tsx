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
    <section id="services" className="relative py-32 overflow-hidden bg-sand/20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-24 max-w-3xl">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block mb-6">Our Expertise</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-charcoal tracking-tight leading-tight">
              We offer a comprehensive suite of <span className="italic text-charcoal/70">digital services</span>.
            </h2>
          </div>
        </ScrollReveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="group border-t border-charcoal/10 pt-8 hover:border-charcoal/30 transition-colors duration-500">
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-3 text-charcoal font-display tracking-tight">
                  {service.title}
                </h3>
                <p className="text-charcoal/50 leading-relaxed text-sm font-sans">
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
