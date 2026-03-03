import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Experience />
      <Projects />

      {/* Blog Teaser Section */}
      <section className="section relative bg-gradient-to-b from-transparent to-surface/50 border-t border-border-subtle mt-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Thoughts & Findings</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
            A collection of deep dives into Generative AI implementations, optimizations, and the nuances of building intelligent systems in production.
          </p>
          <a
            href="/blog"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold outline-none ring-2 ring-primary/50 ring-offset-2 ring-offset-background hover:bg-primary-dark transition-all shadow-lg hover:-translate-y-1"
          >
            Read the Blog
          </a>
        </div>
      </section>
    </div>
  );
}
