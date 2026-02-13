'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-calisto-bright-blue/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-calisto-blue/5 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Badge */}
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 mb-8 bg-white border border-black/5 px-4 py-1.5 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-calisto-bright-blue animate-pulse" />
            <span className="text-[12px] font-bold tracking-widest uppercase text-calisto-dark/60 font-manrope">The Future of AI is here</span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1}>
          <h1 className="font-tight text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-[-0.04em] text-calisto-dark">
            Bring your <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">vision to life</span> with AI
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-calisto-dark/60 mb-12 max-w-2xl mx-auto leading-relaxed font-manrope font-medium">
            Calisto is a modern, clean Framer template built for AI agencies and automation startups. Transform your workflow with our cutting-edge solutions.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
            <a href="#contact" className="btn-primary text-base px-10 py-5">
              Start Your Project
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#services" className="btn-outline border-black/10 text-calisto-dark hover:bg-black/5 text-base px-10 py-5 font-bold font-manrope rounded-full">
              View Our Work
            </a>
          </div>
        </ScrollReveal>

        {/* Hero Mockup/Feature Card */}
        <ScrollReveal delay={0.4}>
          <div className="relative mx-auto mt-16 max-w-6xl">
            <div className="glass-card p-2 md:p-3 overflow-hidden border-black/5 shadow-2xl">
              <div className="rounded-xl overflow-hidden bg-white aspect-[16/9] flex items-center justify-center border border-black/5">
                <div className="absolute inset-0 bg-gradient-to-br from-calisto-blue/10 via-white to-calisto-bright-blue/10" />
                <div className="relative z-10 text-center p-8">
                  <div className="w-20 h-20 bg-calisto-bright-blue rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-calisto-bright-blue/30">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-calisto-dark mb-2">Platform Preview</h3>
                  <p className="text-calisto-dark/50 font-manrope font-medium">Watch how we transform your agency workflow</p>
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-calisto-bright-blue/10 rounded-full blur-2xl animate-float" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-calisto-blue/10 rounded-full blur-2xl animate-float delay-1000" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}