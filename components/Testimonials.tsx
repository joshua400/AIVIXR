'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

const testimonials = [
    {
        text: 'Highly intuitive and polished. The team delivered everything we needed and more!',
        rating: 5.0,
        name: 'Ravi Kumar',
        company: 'TechVentures India',
    },
    {
        text: 'Truly incredible work that has saved us countless hours of development time!',
        rating: 5.0,
        name: 'Priya Sharma',
        company: 'StartupGrid',
    },
    {
        text: 'A top-notch solution! It has been transformative for our entire team and workflow.',
        rating: 5.0,
        name: 'Arun Mehta',
        company: 'DigiScale Solutions',
    },
    {
        text: 'Amazing product! It has made our processes seamless and incredibly effective.',
        rating: 5.0,
        name: 'Sneha Patel',
        company: 'InnovateTech',
    },
    {
        text: 'Incredible design and functionality! This has exceeded all our expectations.',
        rating: 5.0,
        name: 'Vikram Reddy',
        company: 'CloudNine Strategy',
    },
]

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-accent-gold' : 'text-white/20'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
            <span className="ml-2 text-sm text-white/60 font-medium">{rating}</span>
        </div>
    )
}

export default function Testimonials() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue/5 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="section-badge mb-4">WALL OF LOVE</div>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Loved by <span className="gradient-text">Thinkers</span>
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto">
                            Here&apos;s what people worldwide are saying about us
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="glass-card p-8 h-full">
                                <p className="text-white/70 leading-relaxed mb-6 italic">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>
                                <StarRating rating={testimonial.rating} />
                                <div className="mt-4 pt-4 border-t border-glass-border">
                                    <p className="text-white font-semibold">{testimonial.name}</p>
                                    <p className="text-white/40 text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Social proof at bottom */}
                <ScrollReveal delay={0.4}>
                    <div className="text-center mt-12">
                        <div className="inline-flex items-center gap-3">
                            <div className="section-badge">
                                Join <span className="text-white font-bold">1,000+</span> other loving customers
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
