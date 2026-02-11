'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-blue/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4">WHAT ARE YOU WAITING FOR</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Grow Now with <span className="gradient-text">Avixr</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Unlock the power of technology to drive smarter decisions and faster growth with our platform.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="mailto:ceo@avixr.in" className="btn-primary text-lg px-10 py-4">
              Get Started Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="tel:+918122643899" className="btn-outline text-lg px-10 py-4">
              Book a Call
            </a>
          </div>
        </ScrollReveal>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8 flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-lg">Phone</p>
                <a href="tel:+918122643899" className="text-white/50 hover:text-accent-light-blue transition-colors">
                  +91 81226 43899
                </a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="glass-card p-8 flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-accent-purple/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-lg">Email</p>
                <a href="mailto:ceo@avixr.in" className="text-white/50 hover:text-accent-light-blue transition-colors">
                  ceo@avixr.in
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
