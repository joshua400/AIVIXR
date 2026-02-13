"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const posts = [
    {
        title: "5 Business Processes You Should Automate Today",
        description: "Discover the key areas where AI can immediately improve your team's efficiency.",
        category: "Automation",
        date: "Feb 10, 2024",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        link: "/blog/5-business-processes-you-should-automate-today",
    },
    {
        title: "How We Automated 80% of a Creative Agency's Workflow",
        description: "A deep dive into our recent success story helping a design team scale faster.",
        category: "Case Study",
        date: "Feb 8, 2024",
        image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=800",
        link: "/blog/how-we-automated-80-of-a-creative-agency-s-workflow",
    },
    {
        title: "Top 10 Tools We Love for Workflow Automation in 2025",
        description: "Our curated list of the best AI tools for modern software development teams.",
        category: "Resources",
        date: "Feb 5, 2024",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        link: "/blog/top-10-tools-we-love-for-workflow-automation-in-2025",
    },
];

export default function Blog() {
    return (
        <section id="blog" className="py-24 bg-background border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6"
                        >
                            <span className="text-sm font-medium text-primary">Blog</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-4"
                        >
                            Latest Insights
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground"
                        >
                            Explore our latest articles and perspectives on AI and automation.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                        >
                            View all posts
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="relative h-[240px] bg-muted overflow-hidden">
                                {/* Placeholder for images */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-md border border-border/50 text-xs font-bold rounded-lg uppercase tracking-wider text-primary">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-tighter">{post.date}</p>
                                <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                                    {post.title}
                                </h3>

                                <div className="mt-auto">
                                    <Link
                                        href={post.link}
                                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground group-hover:gap-3 transition-all duration-300"
                                    >
                                        Read More
                                        <ArrowUpRight className="w-4 h-4 text-primary" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
