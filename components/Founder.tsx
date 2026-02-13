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
          <div className="glass-card p-10 md:p-16 bg-white border-black/[0.03] shadow-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Founder Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-calisto-gray shadow-lg">
                  <img
                    src="/founder.png"
                    alt="KV Avinash Sarma - Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2 text-calisto-dark font-tight">
                  KV Avinash Sarma
                </h3>
                <p className="text-xl text-calisto-bright-blue mb-4 font-bold font-manrope uppercase tracking-wider text-sm">
                  Founder & CEO - Avixr Technologies Pvt Ltd
                </p>

                <p className="text-calisto-dark/60 leading-relaxed mb-6 font-manrope font-medium">
                  KV Avinash Sarma brings extensive experience in the software startup industry,
                  with a proven track record of leadership and strategic vision. His expertise lies in
                  delivering high-quality software solutions and building successful technology teams.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    'Experienced in project management & business development',
                    'Strong commitment to innovation and quality',
                    'Managing cross-functional teams for complex delivery',
                    'Passionate about leadership and mentorship',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-calisto-bright-blue flex-shrink-0" />
                      <span className="text-calisto-dark/50 text-sm font-manrope font-medium">{point}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://www.linkedin.com/in/avinashsarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-calisto-bright-blue hover:text-calisto-dark transition-colors text-sm font-bold font-manrope"
                >
                  Connect on LinkedIn
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
