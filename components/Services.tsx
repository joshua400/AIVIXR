'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

const services = [
  {
    icon: '/software.png',
    title: 'Custom AI Chatbots',
    description: 'We build AI-powered chatbots that handle customer inquiries, qualify users, and collect structured data 24/7.',
  },
  {
    icon: '/mobile.png',
    title: 'Content Generation',
    description: 'We use AI to create high-quality content at scale, from blog posts, images and videos, tailored to your brand voice.',
  },
  {
    icon: '/soft.png',
    title: 'Workflow Automation',
    description: 'Identify bottlenecks and map out opportunities to streamline your business operations with intelligent automation.',
  },
  {
    icon: '/la.png',
    title: 'AI-Powered Decision Making',
    description: 'Leverage intelligent automation that understands context, adapts to inputs, and takes smart actions for your team.',
  },
  {
    icon: '/technical.png',
    title: 'Business Consulting',
    description: 'Expert guidance on how to integrate AI into your specific business model for maximum ROI and efficiency.',
  },
  {
    icon: '/lms.png',
    title: 'Task Management',
    description: 'Organize and automate complex workflows with smart task tracking and automated priority assignment.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-white">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-calisto-bright-blue/5 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 bg-calisto-gray border border-black/5 px-4 py-1.5 rounded-full">
              <span className="text-[11px] font-bold tracking-widest uppercase text-calisto-dark/50 font-manrope">Our Expertise</span>
            </div>
            <h2 className="font-tight text-4xl md:text-6xl font-bold mb-6 text-calisto-dark tracking-tight">
              What we <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">offer</span>
            </h2>
            <p className="text-calisto-dark/50 text-lg max-w-2xl mx-auto font-manrope font-medium">
              We deliver innovative and reliable AI-driven solutions across multiple domains
            </p>
          </div>
        </ScrollReveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="glass-card p-10 h-full group bg-calisto-gray/30 border-black/[0.03] hover:bg-white hover:border-calisto-bright-blue/20 transition-all duration-300 shadow-none hover:shadow-xl hover:shadow-calisto-bright-blue/5">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-calisto-dark group-hover:text-calisto-bright-blue transition-colors font-tight">
                  {service.title}
                </h3>
                <p className="text-calisto-dark/50 leading-relaxed text-[15px] font-manrope font-medium">
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
