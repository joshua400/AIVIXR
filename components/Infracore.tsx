'use client'

import { motion } from 'framer-motion'

export default function Infracore() {
    return (
        <section className="relative py-32 bg-white text-charcoal overflow-hidden z-20">
            {/* Abstract Background - Technical Grid/Light */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-accent-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Proprietary Engine</span>
                    <h2 className="font-display text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-charcoal">
                        AVIXR Intelligence<span className="text-accent-gold">.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-charcoal max-w-3xl mx-auto font-normal leading-relaxed mb-16">
                        The core methodology behind every solution. We integrate advanced AI with robust engineering principles to ensure your digital infrastructure is scalable, secure, and future-proof.
                    </p>
                </motion.div>

                {/* Visual representation of layers (Technical/Clean) */}
                <div className="flex flex-col items-center gap-2">
                    {[...Array(7)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ width: "20%", opacity: 0 }}
                            whileInView={{ width: `${100 - (i * 10)}%`, opacity: 1 }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            className="h-[2px] bg-charcoal"
                            style={{ maxWidth: '800px' }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
