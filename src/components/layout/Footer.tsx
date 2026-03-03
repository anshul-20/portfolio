import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative border-t border-border-subtle overflow-hidden">
            {/* Background flare */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10 flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Let&apos;s <span className="text-gradient">Connect</span>
                </h2>
                <p className="text-muted-foreground max-w-lg mb-10 text-lg">
                    I&apos;m currently open to discussing new opportunities, full-time roles, or interesting AI projects.
                </p>

                <Link
                    href="mailto:anshulpandey0077@gmail.com"
                    className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center gap-3"
                >
                    Say Hello
                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>

                <div className="flex gap-6 mt-16 mb-8">
                    <Link href="https://github.com/anshul-20" target="_blank" className="p-3 text-muted-foreground hover:text-white hover:bg-surface-hover rounded-full transition-colors">
                        <Github className="w-6 h-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com/in/anshulpandeyyy" target="_blank" className="p-3 text-muted-foreground hover:text-[#0A66C2] hover:bg-surface-hover rounded-full transition-colors">
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="tel:+917466997889" className="p-3 text-muted-foreground hover:text-accent hover:bg-surface-hover rounded-full transition-colors">
                        <Phone className="w-6 h-6" />
                        <span className="sr-only">Phone</span>
                    </Link>
                </div>

                <p className="text-sm text-muted-foreground font-mono">
                    &copy; {new Date().getFullYear()} Anshul Pandey. Crafted with Intelligence.
                </p>
            </div>
        </footer>
    );
}
