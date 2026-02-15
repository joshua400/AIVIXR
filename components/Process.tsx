"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Analyze & Define",
        description: "We analyze your requirements to define high-impact digital solutions tailored to your specific business needs.",
        icon: Search,
    },
    {
        number: "02",
        title: "Design & Develop",
        description: "Our team crafts custom software solutions tailored to your goals, ensuring high performance and scalability.",
        icon: PenTool,
    },
    {
        number: "03",
        title: "Deploy & Support",
        description: "We ensure a smooth rollout and provide continuous support to help your business grow and evolve.",
        icon: Rocket,
    },
];

export default function Process() {
    return (
        <section id="process" className="py-32 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block mb-6">How We Work</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-charcoal tracking-tight">
                        Our <span className="italic text-charcoal/70">Development</span> Cycle
                    </h2>
                    <p className="text-lg text-charcoal/60 max-w-2xl mx-auto font-sans font-light">
                        A systematic approach to transforming your ideas into powerful digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
                    {/* Connector Line (visible on desktop) */}
                    <div className="hidden lg:block absolute top-[45px] left-[15%] right-[15%] h-[1px] bg-charcoal/10 z-0" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 rounded-full bg-white border border-charcoal/10 flex items-center justify-center mb-8 group-hover:border-accent-gold transition-colors duration-500 relative z-10">
                                    <span className="absolute -top-2 -right-2 text-[10px] font-bold text-accent-gold bg-white px-2 py-1 rounded-full border border-charcoal/5">
                                        {step.number}
                                    </span>
                                    <Icon className="w-8 h-8 text-charcoal/80 group-hover:text-charcoal transition-colors duration-500" />
                                </div>

                                <h3 className="text-xl font-bold mb-4 font-display text-charcoal">{step.title}</h3>
                                <p className="text-charcoal/60 leading-relaxed font-sans text-sm px-4">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
