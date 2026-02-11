'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

export default function Founder() {
  return (
    <section id="founder" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="section-badge mb-4">FOUNDER&apos;S NOTE</div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card p-10 md:p-16 glow-border text-center">
            {/* Quote text with animated word reveal */}
            <div className="mb-10">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-white/90">
                <span className="text-accent-light-blue">&ldquo;</span> We{' '}
                <span className="gradient-text">gather</span> your site data. We{' '}
                <span className="gradient-text">know</span> your target audience &amp; how your brand can{' '}
                <span className="gradient-text">standout</span> from crowd. Best part is we also help you with{' '}
                <span className="gradient-text">Solutions</span>{' '}
                <span className="text-accent-light-blue">&rdquo;</span>
              </p>
            </div>

            {/* Founder info */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent-blue/30 shadow-lg">
                <img
                  src="/founder.png"
                  alt="KV Avinash Sarma - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">KV Avinash Sarma</h3>
                <p className="text-accent-light-blue text-sm font-medium">
                  Founder &amp; CEO, Avixr Technologies
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/avinashsarma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:text-accent-blue-hover transition-colors text-sm font-medium"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
