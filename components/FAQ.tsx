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
        <section className="relative py-32 overflow-hidden bg-calisto-gray/30">
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-calisto-bright-blue/5 blur-[120px]" />

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 bg-white border border-black/5 px-4 py-1.5 rounded-full shadow-sm">
                            <span className="text-[11px] font-bold tracking-widest uppercase text-calisto-dark/50 font-manrope">Questions & Answers</span>
                        </div>
                        <h2 className="font-tight text-4xl md:text-5xl font-bold mb-6 text-calisto-dark tracking-tight">
                            Common <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">FAQs</span>
                        </h2>
                        <p className="text-calisto-dark/50 text-lg max-w-2xl mx-auto font-manrope font-medium">
                            Get answers to your questions and learn about our innovative solutions
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.05}>
                            <div className={`faq-item bg-white border-black/[0.03] transition-all duration-300 ${openIndex === index ? 'shadow-lg border-calisto-bright-blue/10' : 'shadow-sm'}`}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-7 text-left"
                                >
                                    <span className="text-calisto-dark font-bold text-lg font-tight tracking-tight">{faq.question}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-calisto-dark text-white rotate-180' : 'bg-calisto-gray text-calisto-dark'}`}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                <div className={`faq-content ${openIndex === index ? 'open' : ''}`}>
                                    <p className="px-7 pb-7 text-calisto-dark/50 border-t border-black/[0.03] pt-5 leading-relaxed font-manrope font-medium">
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
