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
        <section className="py-12 overflow-hidden border-y border-black/[0.03] bg-white">
            {/* Top row - scrolls left */}
            <div className="relative mb-6">
                <div className="flex whitespace-nowrap marquee-left">
                    {[...topItems, ...topItems, ...topItems, ...topItems].map((item, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-3 px-8 py-2 text-sm font-bold uppercase tracking-widest font-manrope text-calisto-dark/30 hover:text-calisto-bright-blue transition-colors cursor-default"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-calisto-bright-blue/50" />
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
                            className="inline-flex items-center gap-3 px-8 py-2 text-sm font-bold uppercase tracking-widest font-manrope text-calisto-dark/30 hover:text-calisto-blue transition-colors cursor-default"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-calisto-blue/50" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
