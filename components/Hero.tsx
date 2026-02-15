'use client'

import { ScrollReveal } from '@/hooks/useAnimations'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-luxury-white">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-br from-sand to-accent-gold/10 blur-[100px] opacity-60 animate-float-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-tr from-sand via-white to-transparent blur-[80px] opacity-80 animate-float-slow delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-3 mb-10 px-5 py-2 rounded-full border border-charcoal/5 bg-white/50 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-charcoal/60 font-sans">
              Reimagining Digital
            </span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold mb-8 leading-[0.95] text-charcoal tracking-tighter">
            Digital
            <span className="block text-charcoal/40" style={{ fontStyle: 'italic' }}>Elegance</span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-charcoal/60 mb-12 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            We craft silent, powerful software solutions that transform businesses without the noise.
          </p>
        </ScrollReveal>

        {/* Actions */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="group relative px-8 py-4 bg-charcoal text-white rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-charcoal/10">
              <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide text-sm font-sans">
                Start a Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <a href="#projects" className="group px-8 py-4 text-charcoal font-medium tracking-wide text-sm font-sans hover:text-accent-gold transition-colors">
              View Our Work
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-charcoal/0 via-charcoal to-charcoal/0" />
      </div>
    </section>
  )
}