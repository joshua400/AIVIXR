'use client'

import { ScrollReveal } from '@/hooks/useAnimations'
import { Linkedin } from 'lucide-react'

export default function Founder() {
  return (
    <section id="founder" className="relative py-32 overflow-hidden bg-sand/20">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block">Leadership</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-white p-12 md:p-20 border border-charcoal/5 shadow-2xl shadow-charcoal/5">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
              {/* Founder Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src="/founder.png"
                    alt="KV Avinash Sarma - Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-3 text-charcoal font-display">
                  KV Avinash Sarma
                </h3>
                <p className="text-xs font-bold font-sans uppercase tracking-widest text-accent-gold mb-8">
                  Founder & CEO
                </p>

                <p className="text-charcoal/70 leading-relaxed mb-8 font-sans font-light text-lg">
                  KV Avinash Sarma brings extensive experience in the software startup industry,
                  with a proven track record of leadership and strategic vision. His expertise lies in
                  delivering high-quality software solutions and building successful technology teams.
                </p>

                <div className="grid grid-cols-1 gap-3 mb-10">
                  {[
                    'Experienced in project management & business development',
                    'Strong commitment to innovation and quality',
                    'Managing cross-functional teams for complex delivery',
                    'Passionate about leadership and mentorship',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3 justify-center md:justify-start">
                      <div className="mt-2 w-1 h-1 rounded-full bg-charcoal flex-shrink-0" />
                      <span className="text-charcoal/60 text-sm font-sans">{point}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://www.linkedin.com/in/avinashsarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-charcoal hover:text-accent-gold transition-colors text-xs font-bold uppercase tracking-widest border-b border-charcoal/20 pb-1 hover:border-accent-gold"
                >
                  Connect on LinkedIn <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
