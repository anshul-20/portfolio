"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Local Hindi Voice Cloning",
        category: "Voice AI / Synthesis",
        description: "An end-to-end pipeline integrating text preprocessing, phoneme alignment, and inference for high-quality Hindi speech. Handled KV caching and token streaming to optimize latency on long audio.",
        tech: ["Chatterbox", "Open-source TTS", "GPU Quantization", "Python"],
        color: "from-blue-500/20 to-purple-500/20",
        borderGlow: "rgba(59, 130, 246, 0.4)",
        github: "#",
        live: "#"
    },
    {
        title: "Feed Gap Analysis Engine",
        category: "Data Pipeline / Clustering",
        description: "Automated RSS ingestion analyzing multi-source news streams. Generates dense embeddings matched via FAISS to power a coverage scoring framework that identifies under-reported topics structurally.",
        tech: ["FAISS", "Embeddings", "Clustering", "Automated Batching"],
        color: "from-emerald-500/20 to-teal-500/20",
        borderGlow: "rgba(16, 185, 129, 0.4)",
        github: "#",
        live: "#"
    }
];

// Spotlight Card wrapper
function SpotlightCard({ children, className, glowColor }: { children: React.ReactNode, className?: string, glowColor: string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => { setIsFocused(true); setOpacity(1); };
    const handleBlur = () => { setIsFocused(false); setOpacity(0); };
    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative overflow-hidden rounded-3xl border border-border-subtle bg-surface transition-colors hover:border-border-strong group",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10 rounded-3xl"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
                }}
            />
            <div className="relative z-20 h-full">{children}</div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="section relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-primary flex items-center gap-4">
                        <span className="text-muted-foreground text-xl md:text-2xl font-light">03.</span>
                        <span className="text-foreground">Featured Builds</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mt-4" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                            className="h-full"
                        >
                            <SpotlightCard glowColor={project.borderGlow} className="h-full flex flex-col justify-between p-8 sm:p-10">
                                <div>
                                    <div className="w-full h-48 mb-8 rounded-2xl bg-gradient-to-tr overflow-hidden relative border border-white/5 flex items-center justify-center">
                                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", project.color)} />
                                        {/* Abstract Data Representation based on category */}
                                        {idx === 0 ? (
                                            <div className="flex gap-2 items-center h-20 relative z-10 w-1/2 justify-center">
                                                {[40, 80, 50, 90, 60, 30].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{ height: [`${h}%`, "20%", `${h}%`] }}
                                                        transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                                                        className="w-3 rounded-full bg-blue-400/80"
                                                    />
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-emerald-500/30 absolute shadow-[0_0_30px_rgba(16,185,129,0.5)]" />
                                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="w-32 h-32 absolute border border-emerald-500/20 rounded-full flex items-center justify-between pointer-events-none">
                                                    <div className="w-4 h-4 bg-emerald-400 rounded-full" />
                                                    <div className="w-6 h-6 bg-teal-400 rounded-full" />
                                                </motion.div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="font-mono text-sm text-primary mb-2 font-medium">{project.category}</p>
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary-light transition-colors">{project.title}</h3>
                                        </div>
                                        <div className="flex gap-3">
                                            <Link href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                                                <Github className="w-6 h-6" />
                                            </Link>
                                            <Link href={project.live} className="text-muted-foreground hover:text-white transition-colors">
                                                <ArrowUpRight className="w-6 h-6" />
                                            </Link>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground mb-8 text-base/relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <ul className="flex flex-wrap gap-3 font-mono text-xs">
                                    {project.tech.map((t) => (
                                        <li key={t} className="text-muted-foreground bg-white/5 px-3 py-1 rounded-md border border-white/5">
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
