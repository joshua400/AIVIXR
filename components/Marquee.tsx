'use client'

export default function Marquee() {
    const topItems = [
        'Web Development',
        'Mobile Apps',
        'AI Solutions',
        'Cloud Services',
        'UI/UX Design',
        'Automation',
        'Digital Marketing',
        'Technical Consulting',
    ]

    const bottomItems = [
        'Real-Time Analytics',
        'Custom Software',
        'LMS Solutions',
        'ERP Systems',
        'Web3 Integration',
        'Machine Learning',
        'Data Insights',
        'Scalable Architecture',
    ]

    return (
        <section className="py-8 overflow-hidden border-y border-glass-border">
            {/* Top row - scrolls left */}
            <div className="relative mb-4">
                <div className="flex whitespace-nowrap marquee-left">
                    {[...topItems, ...topItems, ...topItems, ...topItems].map((item, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-3 px-6 py-2 text-sm font-medium text-white/40"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/60" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom row - scrolls right */}
            <div className="relative">
                <div className="flex whitespace-nowrap marquee-right">
                    {[...bottomItems, ...bottomItems, ...bottomItems, ...bottomItems].map((item, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-3 px-6 py-2 text-sm font-medium text-white/40"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple/60" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
