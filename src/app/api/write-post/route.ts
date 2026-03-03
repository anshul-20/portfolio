import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, excerpt, tags, content, password, customSlug } = body;

        // Hardcoded password validation for this simple CMS
        const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
        if (password !== adminPassword) {
            return NextResponse.json({ error: "Invalid password." }, { status: 401 });
        }

        if (!title || !content) {
            return NextResponse.json({ error: "Title and content are required." }, { status: 400 });
        }

        // Generate slug from title or use custom
        const slug = customSlug ?
            customSlug.toLowerCase().replace(/[^a-z0-9]+/g, '-') :
            title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

        // Format Tags: splitting by comma and trimming
        const formattedTags = tags
            ? tags.split(',').map((t: string) => t.trim()).filter(Boolean)
            : [];

        // Construct MDX Frontmatter
        const mdxContent = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
excerpt: "${(excerpt || '').replace(/"/g, '\\"')}"
tags: ${JSON.stringify(formattedTags)}
---

${content}
`;

        const blogDir = path.join(process.cwd(), 'content', 'blog');

        // Ensure the directory exists
        if (!fs.existsSync(blogDir)) {
            fs.mkdirSync(blogDir, { recursive: true });
        }

        const filePath = path.join(blogDir, `${slug}.mdx`);

        // Write the file
        fs.writeFileSync(filePath, mdxContent, 'utf-8');

        return NextResponse.json({ success: true, slug, message: "Post published successfully!" });

    } catch (error) {
        console.error("Error writing post:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
