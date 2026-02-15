'use client'

import { ScrollReveal } from '@/hooks/useAnimations'
import { Globe, Linkedin, Instagram } from 'lucide-react'

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
    description: 'Your data is synced in real-time across devices, ensuring you stay connected.',
    icon: '🔗',
  },
  {
    title: 'Secure & Scalable',
    description: 'Enterprise-grade encryption protects your information, while flexible tools adapt.',
    icon: '🛡️',
  },
  {
    title: 'Actionable Insights',
    description: 'Leverage AI-powered analytics to identify trends, predict outcomes, and optimize.',
    icon: '📈',
  },
]

export default function DigitalMarketing() {
  return (
    <section id="digital-marketing" className="relative py-32 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Digital Marketing Services */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block mb-6">Digital Growth</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-charcoal tracking-tight">
              Boost your <span className="italic text-charcoal/70">brand</span>
            </h2>
            <p className="text-charcoal/60 text-lg max-w-3xl mx-auto font-sans font-light">
              In today&apos;s digital landscape, a strong online presence is crucial. Our comprehensive solutions help you reach your audience.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="group p-10 h-full bg-sand/10 border border-transparent hover:border-charcoal/10 transition-all duration-500">
                <div className="mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                  <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-lg font-bold mb-4 text-charcoal font-display">
                  {service.title}
                </h3>
                <p className="text-charcoal/60 leading-relaxed text-sm font-sans">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* AI-Driven Efficiency Section */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl font-bold mb-6 text-charcoal tracking-tight">
              Driven by <span className="italic text-charcoal/70">Intelligence</span>
            </h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto font-sans font-light">
              Capture leads, analyze trends, and centralize critical insights to optimize your workflow.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="p-10 h-full border-l border-charcoal/10 hover:border-accent-gold transition-colors duration-500">
                <div className="text-4xl mb-6 grayscale">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-charcoal font-display">{feature.title}</h3>
                <p className="text-charcoal/60 leading-relaxed text-sm font-sans">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Platforms */}
        <div className="mt-20 border-t border-charcoal/5 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Google Ads',
                icon: <Globe className="w-8 h-8 text-charcoal" />,
                url: 'https://share.google/DtNk1wkdKMF0j1ZrO'
              },
              {
                name: 'LinkedIn',
                icon: <Linkedin className="w-8 h-8 text-charcoal" />,
                url: 'https://www.linkedin.com/company/avixr-private-limited/'
              },
              {
                name: 'Instagram',
                icon: <Instagram className="w-8 h-8 text-charcoal" />,
                url: 'https://www.instagram.com/avixr_pvt_ltd/'
              },
            ].map((platform, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-8 group hover:bg-sand/10 transition-colors rounded-sm"
                >
                  <div className="mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    {platform.icon}
                  </div>
                  <h4 className="text-sm font-bold text-charcoal uppercase tracking-widest">{platform.name}</h4>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
