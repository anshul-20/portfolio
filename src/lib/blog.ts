import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDir = path.join(process.cwd(), 'content', 'blog');

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    content: string;
};

export function getBlogPosts(): BlogPost[] {
    // Ensure directory exists
    if (!fs.existsSync(blogDir)) {
        return [];
    }

    const files = fs.readdirSync(blogDir);

    const posts = files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => {
            const filePath = path.join(blogDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContent);

            return {
                slug: file.replace('.mdx', ''),
                title: data.title || 'Untitled',
                date: data.date || 'No Date',
                excerpt: data.excerpt || '',
                tags: data.tags || [],
                content,
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
    try {
        const filePath = path.join(blogDir, `${slug}.mdx`);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        return {
            slug,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            tags: data.tags || [],
            content,
        };
    } catch (e) {
        return null;
    }
}
