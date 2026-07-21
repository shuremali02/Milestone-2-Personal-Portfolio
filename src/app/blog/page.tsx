import { blogPosts } from "@/data/blog";
import { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/reveal";

export const metadata: Metadata = {
  title: "Blog - Syed Shurem Ali Portfolio",
  description: "Read articles and insights about web development, React, Next.js, TypeScript, and AI from Syed Shurem Ali.",
  openGraph: {
    title: "Blog - Syed Shurem Ali Portfolio",
    description: "Read articles and insights about web development, React, Next.js, TypeScript, and AI from Syed Shurem Ali.",
    type: "website",
    url: "https://syed-shurem-ali.vercel.app/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen py-16 text-textMuted relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center relative mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <span className="w-6 h-px bg-gold" /> Writing <span className="w-6 h-px bg-gold" />
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-textMain">
            All Blog <span className="text-primary">Posts</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Reveal key={post.id} delay={(index % 3) * 80} className="h-full">
            <div
              className="group h-full bg-surface border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 card-glow relative"
            >
              <div className="relative z-10 p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-textMuted">{post.date}</span>
                  <span className="text-sm text-textMuted">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-textMain mb-3 group-hover:text-primary transition-colors">{post.title}</h3>

                <p className="text-textMuted mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-background rounded-lg hover:bg-primaryHover active:scale-95 transition-all text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}