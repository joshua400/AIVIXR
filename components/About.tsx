'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

const benefits = [
  {
    icon: '💰',
    title: 'Instant Savings',
    description: 'Get immediate savings on every project, powered by efficient processes to optimize your budget.',
  },
  {
    icon: '📊',
    title: 'Real-Time Insights',
    description: 'Make smarter decisions with live data and actionable insights, delivered in real-time to stay ahead.',
  },
  {
    icon: '🔧',
    title: 'Flexible Solutions',
    description: 'Solutions that adapt to your business needs, offering unparalleled scalability and cost-effectiveness.',
  },
  {
    icon: '🔒',
    title: 'Secure Development',
    description: 'Prioritize safety with cutting-edge encryption and robust security features for every project.',
  },
  {
    icon: '🤖',
    title: 'Adaptive Systems',
    description: 'Leverage AI-driven systems that evolve with your business, ensuring efficiency at every step.',
  },
  {
    icon: '🎯',
    title: 'Dedicated Support',
    description: 'Access expert assistance 24/7 to ensure you\'re never alone on your growth journey.',
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
              <span className="text-[11px] font-bold tracking-widest uppercase text-calisto-dark/50 font-manrope">The Benefits</span>
            </div>
            <h2 className="font-tight text-4xl md:text-6xl font-bold mb-6 text-calisto-dark tracking-tight">
              Why choose <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">us?</span>
            </h2>
            <p className="text-calisto-dark/50 text-lg max-w-2xl mx-auto font-manrope font-medium">
              Innovative tools and powerful insights designed to elevate your business and streamline your growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="glass-card p-10 h-full group bg-white border-black/[0.03] hover:border-calisto-bright-blue/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-calisto-bright-blue/5">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-calisto-gray flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-calisto-dark group-hover:text-calisto-bright-blue transition-colors font-tight">
                  {benefit.title}
                </h3>
                <p className="text-calisto-dark/50 leading-relaxed text-[15px] font-manrope font-medium">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Company info cards below */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-10 bg-white border-black/5 shadow-md">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-calisto-blue/10 rounded-xl flex items-center justify-center">
                  <img src="/vision.png" alt="Vision" className="h-6 w-6 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-calisto-dark font-tight">Our Vision</h3>
              </div>
              <p className="text-calisto-dark/50 leading-relaxed font-manrope font-medium">
                At Avixr Technologies, we envision a world where technology empowers businesses to
                achieve their full potential. Our goal is to lead the industry by delivering groundbreaking
                digital solutions that drive innovation and foster growth.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-10 bg-white border-black/5 shadow-md">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-calisto-bright-blue/10 rounded-xl flex items-center justify-center">
                  <img src="/mission.png" alt="Mission" className="h-6 w-6 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-calisto-dark font-tight">Our Mission</h3>
              </div>
              <p className="text-calisto-dark/50 leading-relaxed font-manrope font-medium">
                Transform Ideas into Reality — We transform innovative concepts into functional, high-quality
                digital solutions that create meaningful impact. Each project undergoes rigorous evaluation
                and refinement, ensuring measurable results.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}