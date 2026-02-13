'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

const services = [
  {
    icon: '/seo.png',
    title: 'SEO',
    description: 'Keyword optimization, on-page & off-page SEO, technical SEO, and link building.',
  },
  {
    icon: '/ssm.png',
    title: 'SMM',
    description: 'Social media strategies, content creation, audience engagement, and paid campaigns.',
  },
  {
    icon: '/ppc.png',
    title: 'PPC',
    description: 'Google Ads, social media advertising, retargeting, and budget optimization.',
  },
  {
    icon: '/conte.png',
    title: 'Content Marketing',
    description: 'Blogs, website content, videos, and email marketing',
  },
  {
    icon: '/email.png',
    title: 'Email Marketing & Automation',
    description: 'Personalized campaigns, segmentation, drip campaigns, and analytics',
  },
]

const features = [
  {
    title: 'Effortless Integration',
    description: 'Your data is synced in real-time across devices, ensuring you stay connected and informed.',
    icon: '🔗',
  },
  {
    title: 'Secure & Scalable',
    description: 'Enterprise-grade encryption protects your information, while flexible tools adapt to your needs.',
    icon: '🛡️',
  },
  {
    title: 'Actionable Insights',
    description: 'Leverage AI-powered analytics to identify trends, predict outcomes, and optimize your workflow.',
    icon: '📈',
  },
]

export default function DigitalMarketing() {
  return (
    <section id="digital-marketing" className="relative py-24 overflow-hidden bg-white">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-calisto-blue/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Digital Marketing Services */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 bg-calisto-gray border border-black/5 px-4 py-1.5 rounded-full shadow-sm">
              <span className="text-[11px] font-bold tracking-widest uppercase text-calisto-dark/50 font-manrope">Digital Marketing</span>
            </div>
            <h2 className="font-tight text-4xl md:text-6xl font-bold mb-6 text-calisto-dark tracking-tight">
              Boost your <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">brand</span>
            </h2>
            <p className="text-calisto-dark/50 text-lg max-w-3xl mx-auto font-manrope font-medium">
              In today&apos;s digital landscape, a strong online presence is crucial. Our comprehensive solutions help you reach your audience and drive measurable results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="glass-card p-10 h-full group bg-calisto-gray/30 border-black/[0.03] hover:bg-white transition-all duration-300 shadow-none hover:shadow-xl hover:shadow-calisto-bright-blue/5">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={service.icon} alt={service.title} className="w-7 h-7 object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-calisto-dark group-hover:text-calisto-bright-blue transition-colors font-tight">
                  {service.title}
                </h3>
                <p className="text-calisto-dark/50 leading-relaxed text-[15px] font-manrope font-medium">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* AI-Driven Efficiency Section */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 bg-calisto-gray border border-black/5 px-4 py-1.5 rounded-full shadow-sm">
              <span className="text-[11px] font-bold tracking-widest uppercase text-calisto-dark/50 font-manrope">Efficiency</span>
            </div>
            <h2 className="font-tight text-4xl md:text-5xl font-bold mb-6 text-calisto-dark tracking-tight">
              Never miss an <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">opportunity</span>
            </h2>
            <p className="text-calisto-dark/50 text-lg max-w-2xl mx-auto font-manrope font-medium">
              Capture leads, analyze trends, and centralize critical insights to optimize your workflow.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass-card p-10 h-full group bg-white border-black/5 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-calisto-dark font-tight">{feature.title}</h3>
                <p className="text-calisto-dark/50 leading-relaxed text-[15px] font-manrope font-medium">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tags row */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-16">
            {['Smart Analytics', 'Real-Time Collaboration', 'Task Prioritization'].map((tag, i) => (
              <span key={i} className="inline-flex items-center gap-2 bg-calisto-gray border border-black/5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-calisto-dark/40 font-manrope">{tag}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
