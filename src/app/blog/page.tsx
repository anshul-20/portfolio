import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata = {
    title: "Blog | Anshul Pandey",
    description: "Writings on Generative AI, machine learning and engineering by Anshul Pandey.",
};

export default function BlogIndex() {
    const posts = getBlogPosts();

    return (
        <div className="container mx-auto px-6 py-32 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    <span className="text-gradient">Engineering</span> Journal
                </h1>
                <p className="text-xl text-muted-foreground mb-16">
                    Thoughts, tutorials, and deep dives into building intelligent scalable systems.
                </p>

                {posts.length === 0 ? (
                    <div className="p-8 border border-border-dashed rounded-xl border-border-strong text-center text-muted-foreground">
                        No posts found. Start writing in content/blog!
                    </div>
                ) : (
                    <div className="flex flex-col gap-8">
                        {posts.map((post) => (
                            <article key={post.slug} className="group relative bg-surface border border-border-subtle p-8 rounded-3xl hover:border-border-strong transition-colors">
                                <div className="flex items-center gap-3 text-sm text-primary-light font-mono mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                                </div>

                                <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-muted-foreground mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-muted-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
