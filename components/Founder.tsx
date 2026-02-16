'use client'

import { MotionReveal } from '@/hooks/useAnimations'
import { Linkedin } from 'lucide-react'

export default function Founder() {
  return (
    <section id="founder" className="relative py-32 overflow-hidden bg-sand/20">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block">Leadership</span>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="bg-white p-12 md:p-20 border border-charcoal/5 shadow-2xl shadow-charcoal/5 rounded-[4rem]">
            <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">

              {/* Founder Image - Circular with Merger Gradient Effect */}
              <div className="flex-shrink-0 relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 relative">
                  {/* Circular masking with gradient merger effect */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-accent-gold/20 p-2 shadow-inner">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src="/founder_new.jpeg"
                        alt="KV Avinash Sarma - Founder"
                        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                      />
                      {/* Merger Gradient Overlay - Blending the portrait into the theme */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-white/10 opacity-60 mix-blend-multiply" />
                    </div>
                  </div>

                  {/* Outer Luxury Glow */}
                  <div className="absolute -inset-4 bg-accent-gold/10 rounded-full blur-2xl -z-10 group-hover:bg-accent-gold/15 transition-all duration-700" />
                </div>
              </div>

              {/* Founder Info */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal font-display tracking-tight">
                  KV Avinash Sarma
                </h3>
                <p className="text-sm font-bold font-sans uppercase tracking-[0.3em] text-accent-gold mb-10">
                  Founder & Chief Executive Officer
                </p>

                <p className="text-charcoal/70 leading-relaxed mb-10 font-sans font-light text-xl">
                  KV Avinash Sarma brings extensive experience in the software startup industry,
                  with a proven track record of leadership and strategic vision. His expertise lies in
                  delivering high-quality software solutions and building successful technology teams.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                  {[
                    'Project Leadership & Strategy',
                    'Innovation & Quality Commitment',
                    'Cross-functional Delivery',
                    'Strategic Mentorship',
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-4 justify-center lg:justify-start">
                      <div className="w-1 h-1 rounded-full bg-accent-gold flex-shrink-0" />
                      <span className="text-charcoal/60 text-sm font-sans tracking-wide uppercase font-medium">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
                  <a
                    href="https://www.linkedin.com/in/avinashsarma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-charcoal hover:text-accent-gold transition-all duration-300 text-xs font-bold uppercase tracking-widest border border-charcoal/10 px-8 py-4 rounded-full hover:border-accent-gold group"
                  >
                    LinkedIn Profile
                    <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
