"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Starter",
        price: "$375",
        description: "Perfect for small teams looking to automate basic tasks.",
        features: [
            "2 Custom Workflows",
            "Up to 3 Integrations",
            "Real-Time Insights",
            "Email Support",
            "Secure & Reliable",
            "Pause or cancel anytime",
        ],
        cta: "Get started",
        popular: false,
    },
    {
        name: "Growth",
        price: "$900",
        description: "Ideal for growing businesses ready to automate key operations.",
        features: [
            "5–7 Custom Workflows",
            "Up to 8 Integrations",
            "Real-Time Insights",
            "Priority Support",
            "Secure & Reliable",
            "Advanced Analytics",
            "Pause or cancel anytime",
        ],
        cta: "Get started",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "$1500",
        description: "Tailored solutions for companies with complex high-volume needs.",
        features: [
            "Unlimited Workflows",
            "Custom API Integration",
            "Dedicated Support",
            "Real-Time Insights",
            "Secure & Reliable",
            "Onboarding & Training",
            "Custom Terms",
        ],
        cta: "Get started",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6"
                    >
                        <span className="text-sm font-medium text-primary">Pricing</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-4"
                    >
                        Flexible Plans for Every Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Choose the right plan to supercharge your workflow with AI-powered automation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-2xl border ${plan.popular
                                ? "border-primary bg-primary/[0.02] shadow-xl shadow-primary/5"
                                : "border-border bg-card"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                                    MOST POPULAR
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{plan.description}</p>
                            </div>

                            <div className="flex-grow space-y-4 mb-8">
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                    What's included:
                                </p>
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 text-sm">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${plan.popular
                                    ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20"
                                    : "bg-foreground text-background hover:opacity-90"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
