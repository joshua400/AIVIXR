'use client'

export default function Marquee() {
    const topItems = [
        'Web Development',
        'Mobile Apps',
        'AI & Machine Learning',
        'Cloud Solutions',
        'UI/UX Design',
        'Custom Software',
        'Digital Marketing',
        'Technical Consulting',
    ]

    const bottomItems = [
        'Real-Time Insights',
        'LMS & ERP Systems',
        'Automation',
        'Scalable Architecture',
        'Web3 Solutions',
        'Data Analytics',
        'Innovation',
        'Strategic Growth',
    ]

    return (
        <section className="py-20 overflow-hidden border-y border-charcoal/5 bg-luxury-white">
            {/* Top row - scrolls left */}
            <div className="relative mb-8">
                <div className="flex whitespace-nowrap animate-marquee-left">
                    {[...topItems, ...topItems].map((item, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-4 px-12 text-xs font-bold uppercase tracking-[0.2em] font-sans text-charcoal/40 hover:text-charcoal transition-colors cursor-default"
                        >
                            <span className="w-1 h-1 rounded-full bg-accent-gold" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom row - scrolls right (using CSS reverse or duplicate animation if needed, for now just marquee) */}
            <div className="relative">
                <div className="flex whitespace-nowrap animate-marquee-left" style={{ animationDirection: 'reverse' }}>
                    {[...bottomItems, ...bottomItems].map((item, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-4 px-12 text-xs font-bold uppercase tracking-[0.2em] font-sans text-charcoal/40 hover:text-charcoal transition-colors cursor-default"
                        >
                            <span className="w-1 h-1 rounded-full bg-charcoal/20" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
