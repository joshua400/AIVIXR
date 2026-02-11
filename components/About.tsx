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
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-blue/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4">BENEFITS</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Why Choose <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Innovative tools and powerful insights designed to elevate your business
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass-card p-8 h-full group">
                <div className="mb-5 w-14 h-14 rounded-xl bg-accent-purple/10 flex items-center justify-center text-2xl group-hover:bg-accent-purple/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-light-blue transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Company info cards below */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8 glow-border">
              <div className="mb-4 flex items-center gap-3">
                <img src="/vision.png" alt="Vision" className="h-10 w-10 object-contain" />
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white/50 leading-relaxed">
                At Avixr Technologies, we envision a world where technology empowers businesses to
                achieve their full potential. Our goal is to lead the industry by delivering groundbreaking
                digital solutions that drive innovation, foster growth, and create lasting impact.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8 glow-border">
              <div className="mb-4 flex items-center gap-3">
                <img src="/mission.png" alt="Mission" className="h-10 w-10 object-contain" />
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white/50 leading-relaxed">
                Transform Ideas into Reality — We transform innovative concepts into functional, high-quality
                digital solutions that create meaningful impact. Each project undergoes rigorous evaluation
                and refinement, ensuring innovation, quality, and measurable results.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}