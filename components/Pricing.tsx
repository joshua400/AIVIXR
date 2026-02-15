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
            "Onboarding & Training",
            "Custom Terms",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 bg-sand/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block mb-6">Pricing</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-charcoal tracking-tight">
                        Flexible <span className="italic text-charcoal/70">Plans</span>
                    </h2>
                    <p className="text-lg text-charcoal/60 max-w-2xl mx-auto font-sans font-light">
                        Choose the right plan to supercharge your workflow with AI-powered automation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-10 transition-all duration-500 ${plan.popular
                                ? "bg-white shadow-2xl shadow-charcoal/5 scale-105 z-10 border border-charcoal/5"
                                : "bg-transparent border border-charcoal/10 hover:bg-white/50"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-charcoal text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2">
                                    Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold mb-4 font-display text-charcoal">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-bold text-charcoal tracking-tight">{plan.price}</span>
                                    <span className="text-charcoal/40 text-sm">/month</span>
                                </div>
                                <p className="text-sm text-charcoal/60 font-sans leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="flex-grow space-y-4 mb-10">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40 font-sans">
                                    Includes:
                                </p>
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 text-sm">
                                        <div className="mt-1 w-4 h-4 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-2.5 h-2.5 text-charcoal" />
                                        </div>
                                        <span className="text-charcoal/80 font-sans">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#contact"
                                className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center ${plan.popular
                                    ? 'bg-charcoal text-white hover:bg-accent-gold hover:text-charcoal'
                                    : 'bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal hover:bg-charcoal hover:text-white'
                                    }`}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
