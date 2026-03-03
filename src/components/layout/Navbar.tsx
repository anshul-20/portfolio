"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "/blog" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300 flex items-center",
                scrolled ? "bg-glass border-b border-border-subtle" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-bold text-xl tracking-tight hidden sm:block">
                        {/* Logo removed per request */}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="#contact"
                        className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white/5 border border-border-strong hover:bg-primary/20 hover:text-primary-light transition-all outline-none focus-visible:ring-2 ring-primary"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 w-full bg-surface border-b border-border-subtle shadow-2xl p-6 md:hidden flex flex-col gap-6"
                    >
                        <ul className="flex flex-col gap-4">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-lg font-medium text-foreground block w-full"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-6 py-3 text-center rounded-lg font-semibold bg-primary text-white"
                        >
                            Let&apos;s Talk
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
