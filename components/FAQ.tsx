'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/hooks/useAnimations'

const faqs = [
    {
        question: 'What makes Avixr Technologies unique?',
        answer: 'Avixr Technologies is a research-driven company that specializes in transforming visionary ideas into top-tier mobile and web solutions. We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business impact.',
    },
    {
        question: 'Can you customize solutions to match our brand?',
        answer: 'Absolutely! Every solution we build is fully customizable and tailored to your specific brand identity, business requirements, and target audience. From design to functionality, everything is built around your unique needs.',
    },
    {
        question: 'Are your solutions optimized for performance and SEO?',
        answer: 'Yes, all our solutions are built with performance and SEO best practices at their core. We ensure fast loading times, clean code architecture, and search engine friendly design to maximize your online visibility.',
    },
    {
        question: 'Do you offer ongoing support after launch?',
        answer: 'Yes, we provide comprehensive post-launch support including maintenance, updates, performance monitoring, and technical assistance. Our dedicated support team ensures your solution continues to perform optimally.',
    },
    {
        question: 'What technologies do you specialize in?',
        answer: 'We specialize in modern web technologies (React, Next.js, Node.js), mobile development (React Native, Flutter), AI/ML solutions, Web3 integration, cloud services, and comprehensive digital marketing tools.',
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue/5 blur-3xl" />

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="section-badge mb-4">FAQ&apos;S SECTION</div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                            Some Common <span className="gradient-text">FAQ&apos;s</span>
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto">
                            Get answers to your questions and learn about our platform
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.08}>
                            <div className="faq-item bg-navy-surface/60">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-white font-semibold pr-4">{faq.question}</span>
                                    <svg
                                        className={`w-5 h-5 text-accent-blue flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`faq-content ${openIndex === index ? 'open' : ''}`}>
                                    <p className="px-6 pb-6 text-white/50 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
