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
    <section id="digital-marketing" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Digital Marketing Services */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4">DIGITAL MARKETING</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Boost Your <span className="gradient-text">Brand</span>
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              In today&apos;s digital landscape, a strong online presence is crucial. Our comprehensive solutions help you reach your audience and drive measurable results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="glass-card p-8 h-full group">
                <div className="mb-5 w-14 h-14 rounded-xl bg-accent-purple/10 flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors">
                  <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-light-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* AI-Driven Efficiency Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4">AI-DRIVEN EFFICIENCY</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Never Miss an <span className="gradient-text">Opportunity</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Capture leads, analyze trends, and centralize critical insights
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass-card p-8 h-full group glow-border">
                <div className="text-4xl mb-5">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tags row */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            {['Smart Analytics', 'Real-Time Collaboration', 'Task Prioritization'].map((tag, i) => (
              <span key={i} className="section-badge text-xs">{tag}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
