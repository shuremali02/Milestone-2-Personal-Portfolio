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
    url: "https://syed-shurem-ali.vercel.app/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen py-16 text-textMuted relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-5" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center relative mb-8">
          <div className="absolute -top-4 left-1/4 sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute -top-4 right-1/4 sparkle" style={{ animationDelay: '0.5s' }} />
          
          <h1 className="text-4xl font-bold text-primary neon-text">
            All Blog Posts
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-surface border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 card-glow relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 sparkle opacity-0 hover:opacity-100" style={{ animationDelay: '0s' }} />
              
              <div className="relative z-10 p-6">
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