'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

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
]

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-calisto-gray/30">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-calisto-bright-blue/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-calisto-blue/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 bg-white border border-black/5 px-4 py-1.5 rounded-full shadow-sm">
              <span className="text-[11px] font-bold tracking-widest uppercase text-calisto-dark/50 font-manrope">The Company</span>
            </div>
            <h2 className="font-tight text-4xl md:text-6xl font-bold mb-6 text-calisto-dark tracking-tight">
              About <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">Avixr</span>
            </h2>
            <p className="text-calisto-dark/50 text-lg max-w-3xl mx-auto font-manrope font-medium leading-relaxed">
              Avixr Technologies Pvt Ltd is a research-driven software company founded by KV Avinash Sarma.
              We excel in transforming visionary ideas into top-tier mobile and web solutions using
              highly efficient, scalable, and user-centric methods.
            </p>
          </div>
        </ScrollReveal>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-10 bg-white border-black/5 shadow-md h-full">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-calisto-blue/10 rounded-xl flex items-center justify-center">
                  <img src="/vision.png" alt="Vision" className="h-6 w-6 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-calisto-dark font-tight">Our Vision</h3>
              </div>
              <p className="text-calisto-dark/50 leading-relaxed font-manrope font-medium">
                We envision a world where technology empowers businesses to achieve their full potential.
                Our goal is to lead the industry by delivering groundbreaking digital solutions
                that drive innovation, foster growth, and create lasting impact.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-10 bg-white border-black/5 shadow-md h-full">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-calisto-bright-blue/10 rounded-xl flex items-center justify-center">
                  <img src="/mission.png" alt="Mission" className="h-6 w-6 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-calisto-dark font-tight">Our Mission</h3>
              </div>
              <p className="text-calisto-dark/50 leading-relaxed font-manrope font-medium">
                Transform Ideas into Reality — We transform innovative concepts into functional,
                high-quality digital solutions that create meaningful impact. Each project undergoes
                rigorous evaluation and refinement to ensure innovation and quality.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Why Choose Us Grid */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-calisto-dark font-tight">Why Choose Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="glass-card p-8 bg-white/50 border-black/[0.03] hover:border-calisto-blue/20 transition-all duration-300">
                <div className="text-calisto-blue mb-4 font-bold">0{index + 1}</div>
                <h4 className="text-lg font-bold text-calisto-dark mb-2 font-tight">{item.title}</h4>
                <p className="text-calisto-dark/50 text-sm font-manrope font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}