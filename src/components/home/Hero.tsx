"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, Sparkles, Download, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Particle animation background
const Particles = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" style={{ animationDuration: '4s' }} />
        </div>
    );
};

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            <Particles />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                        className="flex flex-col gap-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm w-fit shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Available for new opportunities</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                            Hi, I&apos;m <br className="hidden md:block" />
                            <span className="text-gradient">Anshul Pandey.</span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-medium text-foreground/90 mt-2 mb-2">
                            Data Scientist & AI Engineer
                        </h2>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-light leading-relaxed">
                            I build intelligent systems, specializing in applied Generative AI, RAG pipelines, and hyper-scalable LLM architectures for production.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6">
                            <a
                                href="/Anshul_Pandey_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold outline-none ring-2 ring-primary/50 ring-offset-2 ring-offset-background hover:bg-primary-dark transition-all shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:-translate-y-1"
                            >
                                <Download className="w-4 h-4" />
                                Resume
                            </a>

                            <Link
                                href="mailto:anshulpandey0077@gmail.com"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface hover:bg-surface-hover border border-border-strong rounded-full text-foreground font-medium transition-all hover:border-text-muted outline-none focus-visible:ring-2 ring-border-strong hover:-translate-y-1"
                            >
                                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                                Mail
                            </Link>

                            <Link
                                href="https://wa.me/917466997889"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-full font-medium transition-all outline-none focus-visible:ring-2 ring-[#25D366] hover:-translate-y-1"
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Visuals (Personal Profile) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                        className="relative min-h-[400px] lg:h-[500px] flex justify-center items-center mt-12 lg:mt-0"
                    >
                        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                            {/* Background glow */}
                            <div className="absolute inset-x-10 inset-y-10 rounded-full bg-primary/20 blur-[80px]" />

                            {/* Animated Profile Image */}
                            <motion.div
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 flex flex-col items-center justify-center"
                            >
                                {/* Core Image Container */}
                                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-surface shadow-[0_0_40px_rgba(59,130,246,0.2)] group">

                                    {/* Inner glowing ring that spins */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-accent animate-[spin_4s_linear_infinite] opacity-60 group-hover:opacity-100 transition-opacity" />

                                    <div className="absolute inset-1 rounded-full bg-surface overflow-hidden border border-border-subtle z-10 flex items-center justify-center">
                                        {/* User Image - Tell them to place profile.png here */}
                                        <img
                                            src="/profile.png"
                                            alt="Anshul Pandey"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => {
                                                // Fallback icon if image is not uploaded yet
                                                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%233B82F6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
                                                e.currentTarget.className = "w-1/2 h-1/2 opacity-50 transition-transform duration-700 group-hover:scale-110";
                                            }}
                                        />
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="mt-8 bg-surface/80 backdrop-blur-md px-6 py-2 rounded-full border border-border-strong shadow-lg"
                                >
                                    <span className="text-sm font-mono text-primary-light font-medium">@anshul-20</span>
                                </motion.div>
                            </motion.div>

                            {/* Floating Element 1 - Python */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 left-0 bg-surface/80 backdrop-blur-md border border-border-strong px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4"
                            >
                                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold">Inference</div>
                                    <div className="text-xs text-muted-foreground font-mono">10x Speed</div>
                                </div>
                            </motion.div>

                            {/* Floating Element 2 - Brain/GenAI */}
                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 right-0 bg-surface/80 backdrop-blur-md border border-border-strong px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4"
                            >
                                <div className="p-3 bg-secondary/20 text-secondary-light rounded-xl">
                                    <BrainCircuit className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold">RAG Pipeline</div>
                                    <div className="text-xs text-accent font-mono">Synced</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
