"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Lock, Save, AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

// Dynamic import for the markdown editor to avoid SSR issues
const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");

    // Post State
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [tags, setTags] = useState("");
    const [customSlug, setCustomSlug] = useState("");
    const [content, setContent] = useState("**Hello world!!!**\n\nWrite your blog post here...");

    // UI State
    const [isPublishing, setIsPublishing] = useState(false);
    const [status, setStatus] = useState<{ type: 'error' | 'success' | null, message: string }>({ type: null, message: "" });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password.trim() !== "") {
            setIsAuthenticated(true);
        }
    };

    const handlePublish = async () => {
        if (!title || !content) {
            setStatus({ type: 'error', message: 'Title and content are required!' });
            return;
        }

        setIsPublishing(true);
        setStatus({ type: null, message: "" });

        try {
            const res = await fetch("/api/write-post", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    excerpt,
                    tags,
                    customSlug,
                    content,
                    password
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ type: 'success', message: `Published successfully! Slug: /blog/${data.slug}` });
                // Optional: clear form
                setTitle(""); setExcerpt(""); setTags(""); setCustomSlug(""); setContent("");
            } else {
                if (res.status === 401) {
                    setIsAuthenticated(false); // kick back to login if wrong password
                }
                setStatus({ type: 'error', message: data.error || "Failed to publish." });
            }
        } catch (err) {
            setStatus({ type: 'error', message: "An unexpected error occurred." });
        } finally {
            setIsPublishing(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center py-20 px-6">
                <div className="w-full max-w-md bg-surface border border-border-strong p-8 rounded-3xl shadow-xl text-center">
                    <div className="w-16 h-16 bg-primary/20 text-primary flex items-center justify-center rounded-2xl mx-auto mb-6">
                        <Lock className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">Admin Access</h1>
                    <p className="text-muted-foreground mb-8 text-sm">Enter CMS password to write new posts.</p>

                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <input
                            type="password"
                            placeholder="Password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-background border border-border-strong rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-foreground"
                        />
                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-semibold rounded-xl py-3 hover:bg-primary-dark transition-colors"
                        >
                            Enter Dashboard
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-28 min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Blog CMS</h1>
                    <p className="text-muted-foreground text-sm mt-1">Write and publish directly to your filesystem.</p>
                </div>
                <button
                    onClick={handlePublish}
                    disabled={isPublishing}
                    className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all disabled:opacity-50"
                >
                    <Save className="w-4 h-4" />
                    {isPublishing ? "Publishing..." : "Publish Post"}
                </button>
            </div>

            {status.message && (
                <div className={cn("p-4 rounded-xl mb-8 flex items-center gap-3 border", status.type === 'error' ? "bg-red-500/10 border-red-500/50 text-red-500" : "bg-emerald-500/10 border-emerald-500/50 text-emerald-500")}>
                    {status.type === 'error' ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                    <span className="font-medium text-sm">{status.message}</span>
                </div>
            )}

            <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1 flex flex-col gap-6">
                    {/* Form Settings */}
                    <div className="bg-surface border border-border-strong p-6 rounded-2xl flex flex-col gap-4">
                        <h2 className="font-semibold text-lg border-b border-border-subtle pb-2 mb-2">Post Settings</h2>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm text-muted-foreground font-medium">Post Title <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                value={title} onChange={(e) => setTitle(e.target.value)}
                                placeholder="Next Gen AI Architectures"
                                className="bg-background border border-border-strong rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm text-muted-foreground font-medium">Custom Slug (Optional)</label>
                            <input
                                type="text"
                                value={customSlug} onChange={(e) => setCustomSlug(e.target.value)}
                                placeholder="next-gen-ai"
                                className="bg-background border border-border-strong rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm text-muted-foreground font-medium">Tags (comma separated)</label>
                            <input
                                type="text"
                                value={tags} onChange={(e) => setTags(e.target.value)}
                                placeholder="LLM, Pipeline, Dev"
                                className="bg-background border border-border-strong rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm text-muted-foreground font-medium">Excerpt</label>
                            <textarea
                                value={excerpt} onChange={(e) => setExcerpt(e.target.value)}
                                placeholder="A short summary of the post..."
                                rows={4}
                                className="bg-background border border-border-strong rounded-lg px-3 py-2 text-sm outline-none focus:border-primary resize-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    {/* Markdown Editor */}
                    <div className="h-full min-h-[600px] border border-border-strong rounded-2xl overflow-hidden [&_.w-md-editor]:h-[100%!important] [&_.w-md-editor]:min-h-[600px]">
                        <MDEditor
                            value={content}
                            onChange={(val) => setContent(val || "")}
                            height={600}
                            className="bg-surface shadow-none"
                            preview="live"
                            data-color-mode="dark"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
