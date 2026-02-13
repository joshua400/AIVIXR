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

        {/* Central Orb Element */}
        <ScrollReveal delay={0.3}>
          <div className="relative flex items-center justify-center py-12">
            <a href="#contact" className="relative group cursor-pointer transition-transform duration-500 hover:scale-105">
              {/* Outer Glows */}
              <div className="absolute inset-[-40px] bg-calisto-bright-blue/20 rounded-full blur-[60px] animate-pulse group-hover:bg-calisto-bright-blue/30 transition-colors" />
              <div className="absolute inset-[-20px] bg-calisto-blue/10 rounded-full blur-[40px] animate-pulse delay-700" />

              {/* Main Orb */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-calisto-bright-blue via-calisto-blue to-calisto-bright-blue flex items-center justify-center overflow-hidden shadow-2xl shadow-calisto-bright-blue/40 border border-white/20">
                {/* Surface Shine */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent" />

                {/* Internal Pulsing Core */}
                <div className="absolute inset-4 rounded-full bg-white/10 blur-md animate-pulse" />

                {/* Text */}
                <span className="relative z-10 text-white font-bold text-lg md:text-xl tracking-wide uppercase">
                  Get Started
                </span>
              </div>

              {/* Orbital Rings - Optional/Decorative from design */}
              <div className="absolute inset-[-30px] border border-calisto-bright-blue/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-[-60px] border border-calisto-bright-blue/5 rounded-full animate-spin-slow [animation-direction:reverse] [animation-duration:40s]" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}