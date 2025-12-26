import { blogPosts } from "@/data/blog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Syed Shurem Ali Portfolio",
  description: "Read articles and insights about web development, React, Next.js, TypeScript, and AI from Syed Shurem Ali.",
  openGraph: {
    title: "Blog - Syed Shurem Ali Portfolio",
    description: "Read articles and insights about web development, React, Next.js, TypeScript, and AI from Syed Shurem Ali.",
    type: "website",
    url: "https://your-portfolio-url.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen py-16 text-textMuted">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="flex items-center justify-center p-8 text-4xl font-bold text-primary">
          All Blog Posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-surface border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-textMuted">{post.date}</span>
                  <span className="text-sm text-textMuted">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">{post.title}</h3>

                <p className="text-textMuted mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block px-4 py-2 bg-primary text-background rounded-lg hover:bg-primaryHover transition-colors text-sm font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}