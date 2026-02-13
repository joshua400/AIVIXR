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
            <div className="inline-flex items-center gap-2 mb-4 bg-calisto-gray border border-black/5 px-4 py-1.5 rounded-full shadow-sm">
              <span className="text-[11px] font-bold tracking-widest uppercase text-calisto-dark/50 font-manrope">Get In Touch</span>
            </div>
            <h2 className="font-tight text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-calisto-dark tracking-tight">
              Grow Now with <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">Avixr</span>
            </h2>
            <p className="text-calisto-dark/50 text-lg max-w-2xl mx-auto font-manrope font-medium">
              Unlock the power of technology to drive smarter decisions and faster growth with our platform.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a href="mailto:ceo@avixr.in" className="btn-primary text-lg px-12 py-5 shadow-xl shadow-calisto-bright-blue/10">
              Get Started Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="tel:+918122643899" className="inline-flex items-center justify-center px-12 py-5 border-2 border-calisto-dark text-calisto-dark font-bold rounded-2xl hover:bg-calisto-dark hover:text-white transition-all duration-300 text-lg">
              Book a Call
            </a>
          </div>
        </ScrollReveal>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-10 flex items-center gap-6 bg-calisto-gray/30 border-black/[0.03] shadow-none">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 border border-black/5 shadow-sm">
                <svg className="w-8 h-8 text-calisto-bright-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-calisto-dark font-bold text-xl font-tight">Phone</p>
                <a href="tel:+918122643899" className="text-calisto-dark/50 hover:text-calisto-bright-blue transition-colors font-manrope font-medium">
                  +91 81226 43899
                </a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="glass-card p-10 flex items-center gap-6 bg-calisto-gray/30 border-black/[0.03] shadow-none">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 border border-black/5 shadow-sm">
                <svg className="w-8 h-8 text-calisto-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-calisto-dark font-bold text-xl font-tight">Email</p>
                <a href="mailto:ceo@avixr.in" className="text-calisto-dark/50 hover:text-calisto-bright-blue transition-colors font-manrope font-medium">
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
