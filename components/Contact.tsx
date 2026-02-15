'use client'

import { ScrollReveal } from '@/hooks/useAnimations'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block mb-6">Contact Us</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-charcoal tracking-tight">
              Ready to <span className="italic text-charcoal/70">Scale</span>?
            </h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto font-sans font-light leading-relaxed">
              Unlock the power of technology to drive smarter decisions and faster growth with our platform.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
            <a href="mailto:ceo@avixr.in" className="group flex items-center justify-center gap-3 px-10 py-5 bg-charcoal text-white text-sm font-bold tracking-widest uppercase hover:bg-accent-gold hover:text-charcoal transition-all duration-300">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="tel:+918122643899" className="flex items-center justify-center px-10 py-5 border border-charcoal/20 text-charcoal text-sm font-bold tracking-widest uppercase hover:border-charcoal transition-all duration-300">
              Book a Call
            </a>
          </div>
        </ScrollReveal>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.2}>
            <div className="p-10 flex items-center gap-8 border border-charcoal/5 bg-sand/10 hover:bg-white hover:shadow-xl hover:shadow-charcoal/5 transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center border border-charcoal/10 rounded-full">
                <Phone className="w-5 h-5 text-charcoal" />
              </div>
              <div>
                <p className="text-charcoal font-bold text-xs uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+918122643899" className="text-charcoal/60 hover:text-charcoal transition-colors font-sans text-lg">
                  +91 81226 43899
                </a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="p-10 flex items-center gap-8 border border-charcoal/5 bg-sand/10 hover:bg-white hover:shadow-xl hover:shadow-charcoal/5 transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center border border-charcoal/10 rounded-full">
                <Mail className="w-5 h-5 text-charcoal" />
              </div>
              <div>
                <p className="text-charcoal font-bold text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:ceo@avixr.in" className="text-charcoal/60 hover:text-charcoal transition-colors font-sans text-lg">
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
