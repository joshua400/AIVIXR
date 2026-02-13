'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

export default function Founder() {
  return (
    <section id="founder" className="relative py-32 overflow-hidden bg-white">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-calisto-bright-blue/5 blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 bg-calisto-gray border border-black/5 px-4 py-1.5 rounded-full">
              <span className="text-[11px] font-bold tracking-widest uppercase text-calisto-dark/50 font-manrope">Founder&apos;s Note</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card p-12 md:p-20 text-center bg-calisto-gray/20 border-black/[0.03] shadow-none">
            {/* Quote text with animated word reveal */}
            <div className="mb-12">
              <p className="font-tight text-3xl md:text-5xl font-bold leading-[1.2] text-calisto-dark tracking-tight">
                <span className="text-calisto-bright-blue">&ldquo;</span> We{' '}
                <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">gather</span> your data. We{' '}
                <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">know</span> your audience &amp; how your brand can{' '}
                <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">stand out</span>. Best part is we also help you with{' '}
                <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">Solutions</span>{' '}
                <span className="text-calisto-bright-blue">&rdquo;</span>
              </p>
            </div>

            {/* Founder info */}
            <div className="flex flex-col items-center gap-5">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/founder.png"
                  alt="KV Avinash Sarma - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-calisto-dark font-tight tracking-tight">KV Avinash Sarma</h3>
                <p className="text-calisto-bright-blue text-sm font-bold uppercase tracking-wider font-manrope mt-1">
                  Founder &amp; CEO, Avixr Technologies
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/avinashsarma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-calisto-dark/60 hover:text-calisto-bright-blue transition-colors text-sm font-bold font-manrope"
              >
                Connect on LinkedIn
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
