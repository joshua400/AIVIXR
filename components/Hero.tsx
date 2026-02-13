'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          src="/hero-background.mp4"
        />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-calisto-bright-blue/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-calisto-blue/5 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Badge */}
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 mb-8 bg-white border border-black/5 px-4 py-1.5 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-calisto-bright-blue animate-pulse" />
            <span className="text-[12px] font-bold tracking-widest uppercase text-calisto-dark/60 font-manrope">Innovate. Transform. Grow.</span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1}>
          <h1 className="font-tight text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-calisto-dark">
            <span className="text-calisto-blue">Simplifying complex ideas into </span> <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">
              powerful, scalable digital solutions.
            </span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-calisto-dark/50 mb-12 max-w-3xl mx-auto leading-relaxed font-manrope font-medium">
            Smart solutions for complex challenges, simplified pathways to your success.
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-calisto-blue text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-calisto-bright-blue transition-all duration-300 shadow-xl shadow-calisto-blue/20"
            >
              Get Started
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center bg-white text-calisto-dark px-8 py-4 rounded-xl text-lg font-bold border border-black/5 hover:border-calisto-blue/30 transition-all duration-300 shadow-sm"
            >
              Explore Services
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}