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
                    className={`w-3 h-3 ${i < rating ? 'text-accent-gold' : 'text-charcoal/10'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

export default function Testimonials() {
    return (
        <section className="relative py-32 overflow-hidden bg-sand/20">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-24">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block mb-6">Testimonials</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-charcoal tracking-tight">
                            Loved by <span className="italic text-charcoal/70">Thinkers</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} delay={index * 0.05}>
                            <div className="p-10 h-full bg-white border border-charcoal/5 hover:border-charcoal/20 transition-all duration-500 hover:shadow-xl hover:shadow-charcoal/5">
                                <StarRating rating={testimonial.rating} />
                                <p className="text-charcoal/80 leading-relaxed my-8 font-sans font-medium text-lg">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>
                                <div className="mt-auto">
                                    <p className="text-charcoal font-bold font-display text-sm">{testimonial.name}</p>
                                    <p className="text-charcoal/40 text-[10px] font-bold uppercase tracking-wider mt-1">{testimonial.company}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
