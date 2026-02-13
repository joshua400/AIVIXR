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
                    className={`w-4 h-4 ${i < rating ? 'text-[#ffcc00]' : 'text-calisto-dark/10'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
            <span className="ml-2 text-xs text-calisto-dark/30 font-bold uppercase tracking-widest">{rating} rating</span>
        </div>
    )
}

export default function Testimonials() {
    return (
        <section className="relative py-24 overflow-hidden bg-calisto-gray/30">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-calisto-bright-blue/5 blur-[120px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 bg-white border border-black/5 px-4 py-1.5 rounded-full shadow-sm">
                            <span className="text-[11px] font-bold tracking-widest uppercase text-calisto-dark/50 font-manrope">Wall of Love</span>
                        </div>
                        <h2 className="font-tight text-4xl md:text-6xl font-bold mb-6 text-calisto-dark tracking-tight">
                            Loved by <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">thinkers</span>
                        </h2>
                        <p className="text-calisto-dark/50 text-lg max-w-2xl mx-auto font-manrope font-medium">
                            Here&apos;s what visionary founders and developers worldwide are saying about us
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} delay={index * 0.05}>
                            <div className="glass-card p-10 h-full bg-white border-black/[0.03] shadow-sm hover:shadow-xl transition-all duration-300">
                                <p className="text-calisto-dark/60 leading-relaxed mb-8 italic text-[16px] font-manrope font-medium">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>
                                <StarRating rating={testimonial.rating} />
                                <div className="mt-6 pt-6 border-t border-black/[0.03]">
                                    <p className="text-calisto-dark font-bold font-tight text-lg">{testimonial.name}</p>
                                    <p className="text-calisto-dark/30 text-xs font-bold uppercase tracking-wider mt-1">{testimonial.company}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Social proof at bottom */}
                <ScrollReveal delay={0.4}>
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center gap-3">
                            <div className="inline-flex items-center gap-2 bg-calisto-dark border border-black/5 px-6 py-2.5 rounded-full shadow-lg">
                                <span className="text-[12px] font-bold tracking-widest uppercase text-white font-manrope">Join 1,000+ satisfied customers</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
