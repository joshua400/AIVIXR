'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/hooks/useAnimations'
import { Plus, Minus } from 'lucide-react'

const faqs = [
    {
        question: 'What makes AVIXR Technologies unique?',
        answer: 'AVIXR Technologies is a research-driven company that specializes in transforming visionary ideas into top-tier mobile and web solutions. We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business impact.',
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
        <section className="relative py-32 overflow-hidden bg-white">
            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block mb-6">FAQ</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-charcoal tracking-tight">
                            Common <span className="italic text-charcoal/70">Questions</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.05}>
                            <div className={`group border-b border-charcoal/10 transition-all duration-300 ${openIndex === index ? 'pb-8' : ''}`}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between py-6 text-left"
                                >
                                    <span className={`font-display text-lg font-bold transition-colors ${openIndex === index ? 'text-charcoal' : 'text-charcoal/60 group-hover:text-charcoal'}`}>
                                        {faq.question}
                                    </span>
                                    <div className="ml-4 flex-shrink-0">
                                        {openIndex === index ? (
                                            <Minus className="w-4 h-4 text-charcoal" />
                                        ) : (
                                            <Plus className="w-4 h-4 text-charcoal/40 group-hover:text-charcoal transition-colors" />
                                        )}
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-charcoal/60 leading-relaxed font-sans text-sm pr-12">
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
