'use client'

import { Eye, Target } from 'lucide-react'
import { MotionReveal } from '@/hooks/useAnimations'

const whyChooseUs = [
  {
    title: 'Cutting-Edge Tech',
    description: 'Expertise in modern frameworks and scalable architectures.',
  },
  {
    title: 'Customized Solutions',
    description: 'Tailored specifically to your unique business requirements.',
  },
  {
    title: 'Quality Delivery',
    description: 'On-time delivery with uncompromised attention to detail.',
  },
  {
    title: 'End-to-End Support',
    description: 'From initial ideation to long-term post-launch maintenance.',
  },
  {
    title: 'Fast Delivery',
    description: 'Swift turnaround times without compromising on excellence.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <MotionReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 border border-charcoal/10 px-4 py-1.5 rounded-full">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/60 font-sans">The Company</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-charcoal tracking-tight">
              About <span className="italic text-charcoal/80">AVIXR</span>
            </h2>
            <div className="text-charcoal/60 text-lg max-w-3xl mx-auto font-sans font-light leading-relaxed space-y-4">
              <p>
                <span className="font-bold text-charcoal">AVIXR Technologies Pvt Ltd</span> is a research-driven SaaS and deep-tech company focused on building next-generation brain intelligence systems powered by advanced AI, simulation models, and quantum-inspired algorithms.
              </p>
              <p>
                The company develops scalable software platforms that transform complex decision-making into data-driven foresight.
              </p>
              <p>
                AVIXR specializes in secure intelligence SaaS solutions. Its core innovation is <span className="font-bold text-charcoal">Top of Digital Horizons</span>, a quantum-inspired Business Simulation Intelligence platform designed to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base">
                <li>Simulate future outcomes</li>
                <li>Predict risks</li>
                <li>Guide smarter decisions</li>
              </ul>
              <div className="pt-2 text-sm uppercase tracking-widest font-bold text-charcoal/40">
                For: Startups • Enterprises • Investors • Data Scientists • Governments
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <MotionReveal delay={0.1}>
            <div className="glass-card p-12 h-full bg-sand/30 border-transparent hover:border-charcoal/5">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-charcoal/5">
                  <Eye className="h-5 w-5 text-charcoal" />
                </div>
                <h3 className="text-xl font-bold text-charcoal font-display">Our Vision</h3>
              </div>
              <p className="text-charcoal/60 leading-relaxed font-sans text-sm">
                To make quantum intelligence universally accessible — enabling users to access quantum technology directly through their mobile phones and laptops.
                Avixr Intelligence brings advanced Q-bit algorithms to every user, democratizing access to quantum-powered intelligence.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <div className="glass-card p-12 h-full bg-sand/30 border-transparent hover:border-charcoal/5">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-charcoal/5">
                  <Target className="h-5 w-5 text-charcoal" />
                </div>
                <h3 className="text-xl font-bold text-charcoal font-display">Our Mission</h3>
              </div>
              <p className="text-charcoal/60 leading-relaxed font-sans text-sm">
                To become the world’s first <span className="font-bold text-charcoal">QAAS (Quantum-as-a-Service) company</span>, powered by the Avixr Intelligence Brain that continuously simulates business futures, reduces uncertainty, and empowers Data Scientist job roles.
              </p>
            </div>
          </MotionReveal>
        </div>

        {/* Why Choose Us Grid */}
        <MotionReveal delay={0.3}>
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-charcoal font-display">Why Choose Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="p-8 border-l border-charcoal/10 hover:border-accent-gold transition-colors duration-500">
                <div className="text-accent-gold mb-6 font-display font-bold text-xl">0{index + 1}</div>
                <h4 className="text-base font-bold text-charcoal mb-3 font-sans tracking-wide">{item.title}</h4>
                <p className="text-charcoal/50 text-sm font-sans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}