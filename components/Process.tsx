"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
    {
        number: "1",
        title: "Analyze & Define",
        description: "We analyze your requirements to define high-impact digital solutions tailored to your specific business needs.",
        icon: Search,
        color: "blue",
    },
    {
        number: "2",
        title: "Design & Develop",
        description: "Our team crafts custom software solutions tailored to your goals, ensuring high performance and scalability.",
        icon: PenTool,
        color: "purple",
    },
    {
        number: "3",
        title: "Deploy & Support",
        description: "We ensure a smooth rollout and provide continuous support to help your business grow and evolve.",
        icon: Rocket,
        color: "cyan",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 relative overflow-hidden bg-background">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6"
                    >
                        <span className="text-sm font-medium text-primary">Process</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-4"
                    >
                        Our Development Life Cycle
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        A systematic approach to transforming your ideas into powerful digital solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
                    {/* Connector Line (visible on desktop) */}
                    <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-border z-0" />

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
                                <div className="w-[90px] h-[90px] rounded-2xl bg-card border-2 border-border flex items-center justify-center mb-8 group-hover:border-primary/50 transition-colors duration-500 shadow-sm relative">
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                                        {step.number}
                                    </div>
                                    <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
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
