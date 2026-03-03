"use client";

import { motion } from "framer-motion";
import { Database, Layout, Server, Sparkles, Terminal } from "lucide-react";

const skills = [
    { name: "Python", category: "Core" },
    { name: "SQL", category: "Core" },
    { name: "Scikit-learn", category: "ML" },
    { name: "TensorFlow", category: "ML" },
    { name: "Hugging Face", category: "GenAI" },
    { name: "LangChain & LangGraph", category: "GenAI" },
    { name: "FAISS & ChromaDB", category: "Vector DB" },
    { name: "GPU Deployment", category: "Infra" },
];

export default function Experience() {
    return (
        <section id="experience" className="section relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-primary flex items-center gap-4">
                        <span className="text-muted-foreground text-xl md:text-2xl font-light">02.</span>
                        <span className="text-foreground">My Experience</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mt-4" />
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8">

                    {/* Bento Box - Skills (Left side) */}
                    <div className="lg:col-span-7 grid grid-cols-2 gap-4">

                        {/* Gen AI Card - Large span */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="col-span-2 bg-gradient-to-br from-surface to-[#16161a] border border-border-strong rounded-3xl p-8 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Sparkles className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                                <Sparkles className="text-secondary-light w-6 h-6" /> What I Do: GenAI & LLMs
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-md relative z-10">
                                I architect intelligent agents and RAG pipelines using LangChain, LangGraph, and optimized local models via quantization.
                            </p>
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {skills.filter(s => s.category === "GenAI" || s.category === "Vector DB").map(skill => (
                                    <span key={skill.name} className="px-4 py-2 bg-secondary/10 text-secondary-light rounded-full text-sm font-medium border border-secondary/20">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Core ML Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="col-span-2 sm:col-span-1 bg-surface border border-border-subtle rounded-3xl p-6 hover:border-border-strong transition-colors"
                        >
                            <Database className="text-primary-light w-8 h-8 mb-4 lg:mb-12" />
                            <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                            <p className="text-sm text-muted-foreground">Scikit-learn, TensorFlow, predictive analytics, and semantic clustering algorithms.</p>
                        </motion.div>

                        {/* Engineering Infra Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="col-span-2 sm:col-span-1 bg-surface border border-border-subtle rounded-3xl p-6 hover:border-border-strong transition-colors"
                        >
                            <Server className="text-accent-light w-8 h-8 mb-4 lg:mb-12" />
                            <h3 className="text-xl font-bold mb-2">Vector DB & Infra</h3>
                            <p className="text-sm text-muted-foreground">Linux deployment, REST APIs, GPU scaling, FAISS, and ChromaDB integration.</p>
                        </motion.div>
                    </div>

                    {/* Timeline - Experience (Right side) */}
                    <div className="lg:col-span-5 relative">
                        <div className="absolute top-0 bottom-0 left-4 w-px bg-border-strong" />

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-12"
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-[11px] top-1.5 w-3 h-3 bg-background border-2 border-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <div className="mb-2">
                                <span className="text-sm font-mono text-primary font-semibold">August 2024 — Present</span>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Jr. Data Scientist</h3>
                            <h4 className="text-lg text-muted-foreground font-medium mb-4">Amar Ujala Web Services</h4>

                            <ul className="space-y-3 text-muted-foreground text-sm">
                                <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-primary">
                                    Designed LLM-powered meta-content pipelines automating news summaries and structured fact extraction.
                                </li>
                                <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-primary">
                                    Built an embedding-based feed gap analysis system clustering competitor RSS feeds via FAISS over massive datasets.
                                </li>
                                <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-primary">
                                    Slashed inference costs utilizing quantized models (4-bit/8-bit), KTransformers, and rigorous GPU batching setups.
                                </li>
                                <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-primary">
                                    Deployed &apos;Chatterbox&apos; Hindi voice cloning pipeline entirely on local GPU infra, securing total data privacy and bypassing commercial APIs.
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
