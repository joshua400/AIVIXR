'use client'

import { motion } from 'framer-motion'

export default function Infracore() {
    return (
        <section className="relative py-32 bg-charcoal text-white overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-accent-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">The Core System</span>
                    <h2 className="font-display text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
                        The InfraCore<span className="text-accent-gold">®</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed mb-16">
                        Our decentralized AI operating system purpose-built for digital development.
                        7 layers of intelligence ensuring every project outperforms.
                    </p>
                </motion.div>

                {/* Visual representation of layers (Abstract) */}
                <div className="flex flex-col items-center gap-4 opacity-50">
                    {[...Array(7)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ width: "20%", opacity: 0 }}
                            whileInView={{ width: `${100 - (i * 10)}%`, opacity: 1 - (i * 0.1) }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            className="h-[1px] bg-white"
                            style={{ maxWidth: '600px' }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
