'use client'

import { MotionReveal } from '@/hooks/useAnimations'
import { Rocket, Target, Globe, BarChart3, Megaphone, Share2 } from 'lucide-react'

const platforms = [
  {
    title: 'Search Engine Optimization',
    desc: 'Dominating search results through technical precision and semantic content strategies.',
    icon: Rocket
  },
  {
    title: 'Paid Acquisition',
    desc: 'High-intent lead generation across Google Ads and Meta with ROI-focused optimization.',
    icon: Target
  },
  {
    title: 'Content Strategy',
    desc: 'Building authority through value-driven content that resonates with your core audience.',
    icon: Globe
  },
  {
    title: 'Performance Analytics',
    desc: 'Deep-dive data analysis to uncover growth opportunities and refine campaign performance.',
    icon: BarChart3
  },
  {
    title: 'Brand Growth',
    desc: 'Strategic positioning to ensure your brand stands out in a crowded digital landscape.',
    icon: Megaphone
  },
  {
    title: 'Social Engineering',
    desc: 'Leveraging social signals and viral loops to expand your brand reach organically.',
    icon: Share2
  }
]

export default function DigitalMarketing() {
  return (
    <section id="digital-marketing" className="relative py-32 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionReveal>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block mb-6">Digital Ecosystem</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-charcoal tracking-tighter leading-none">
            STRATEGIC <br />
            <span className="text-secondary-blue italic">MARKETING</span>
          </h2>
          <p className="text-charcoal/60 text-lg md:text-xl max-w-2xl mx-auto font-sans font-light mb-20 leading-relaxed">
            From search engines to social platforms, we amplify your brand's digital presence with data-driven strategies.
          </p>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((item, i) => (
            <MotionReveal key={i} delay={i * 0.1}>
              <div className="group p-10 bg-luxury-white border border-charcoal/5 hover:border-charcoal/10 transition-all duration-500 rounded-sm text-left h-full flex flex-col items-start gap-6 hover:shadow-2xl hover:shadow-charcoal/5">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm border border-charcoal/5 group-hover:bg-secondary-blue/10 group-hover:text-secondary-blue transition-colors duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal font-display tracking-tight">{item.title}</h3>
                  <p className="text-charcoal/60 text-sm font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
