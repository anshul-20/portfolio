import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = getBlogPostBySlug(params.slug);
    if (!post) {
        return { title: "Post Not Found" };
    }
    return {
        title: `${post.title} | Anshul Pandey Blog`,
        description: post.excerpt,
    };
}

// Custom components for MDX (Optional for styling)
const components = {
    h1: (props: any) => <h1 className="text-4xl font-bold mt-12 mb-6 text-foreground" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-semibold mt-10 mb-4 text-primary-light" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-medium mt-8 mb-4 text-foreground" {...props} />,
    p: (props: any) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground" {...props} />,
    ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground marker:text-primary" {...props} />,
    ol: (props: any) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground marker:text-primary" {...props} />,
    a: (props: any) => <a className="text-primary hover:text-primary-light hover:underline underline-offset-4" {...props} />,
    blockquote: (props: any) => (
        <blockquote className="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground bg-surface p-4 rounded-r-lg" {...props} />
    ),
    code: (props: any) => <code className="relative rounded bg-muted/20 px-[0.3rem] py-[0.2rem] font-mono text-sm text-primary-light font-semibold" {...props} />,
    pre: (props: any) => (
        <pre className="mb-4 mt-6 overflow-x-auto rounded-xl bg-[#0d1117] p-6 border border-border-strong text-sm" {...props} />
    ),
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto px-6 py-32 min-h-screen">
            <div className="max-w-[750px] mx-auto w-full">

                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Journal
                </Link>

                <header className="mb-14">
                    <div className="flex items-center gap-3 text-primary-light font-mono mb-6">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8 leading-[1.1] text-foreground">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-surface border border-border-strong rounded-full text-xs text-muted font-mono uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none w-full">
                    <MDXRemote source={post.content} components={components} />
                </div>

            </div>
        </article>
    );
}
