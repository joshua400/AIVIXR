'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Central gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent-blue/20 via-accent-purple/10 to-transparent blur-3xl" />
        {/* Top-right accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-purple/10 blur-3xl" />
        {/* Bottom-left accent */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-blue/10 blur-3xl" />
      </div>

      {/* 3D Orbital Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 perspective-container">
        {/* Central orb */}
        <div className="hero-orb mx-auto animate-pulse-glow" />

        {/* Orbital rings */}
        <div className="hero-orb-ring w-[350px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '20s' }} />
        <div className="hero-orb-ring w-[450px] h-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
        <div className="hero-orb-ring w-[550px] h-[550px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '40s' }} />

        {/* Floating orbital icons */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[
            { icon: '🌐', delay: '0s', radius: 175, duration: '18s' },
            { icon: '📱', delay: '2s', radius: 225, duration: '22s' },
            { icon: '⚡', delay: '4s', radius: 175, duration: '25s' },
            { icon: '🤖', delay: '6s', radius: 275, duration: '20s' },
            { icon: '🎨', delay: '1s', radius: 225, duration: '28s' },
            { icon: '📊', delay: '3s', radius: 275, duration: '24s' },
          ].map((item, i) => (
            <div
              key={i}
              className="absolute animate-orbit"
              style={{
                '--orbit-radius': `${item.radius}px`,
                '--orbit-duration': item.duration,
                animationDuration: item.duration,
                animationDelay: item.delay,
              } as React.CSSProperties}
            >
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl shadow-lg">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Social proof badge */}
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="section-badge">
              <span className="flex items-center gap-1">
                Join <span className="text-white font-bold">15,725+</span> satisfied clients
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Main heading */}
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">The best platform to </span>
            <span className="gradient-text">grow your business</span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed">
            The most powerful tools to boost sales, hire the best people, and access exclusive market insights. Transforming visionary ideas into top-tier digital solutions.
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary text-lg px-10 py-4">
              Get Started Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#services" className="btn-outline text-lg px-10 py-4">
              Explore Services
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-darkest to-transparent" />
    </section>
  )
}