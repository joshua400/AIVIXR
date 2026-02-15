'use client'

import { motion } from 'framer-motion'

export default function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        >
            <div className="w-[30px] h-[50px] border border-charcoal/30 rounded-full flex justify-center p-2 relative backdrop-blur-sm">
                <motion.div
                    animate={{
                        y: [0, 24, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-1.5 h-1.5 bg-accent-gold rounded-full"
                />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50 font-bold">Scroll</span>
        </motion.div>
    )
}
