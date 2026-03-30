"use client";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { useState } from "react";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  );

  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  // Show only 3 posts on homepage
  const displayedPosts = filteredPosts.slice(0, 3);

  return (
    <div className="bg-background py-16 text-textMuted relative overflow-hidden" id="blog">
      <div className="absolute inset-0 animated-gradient opacity-5" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
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
          
          <h2 className="text-4xl font-bold text-primary neon-text">
            Blog & Articles
          </h2>
          <p className="text-textMuted mt-2">Latest insights about web development and AI</p>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full ${
              selectedTag === null
                ? "bg-primary text-background"
                : "bg-surface text-textMuted border border-border hover:bg-surface/80"
            }`}
          >
            All Posts
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full ${
                selectedTag === tag
                  ? "bg-primary text-background"
                  : "bg-surface text-textMuted border border-border hover:bg-surface/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
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

        {/* View More Button */}
        <div className="text-center mt-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 sparkle" style={{ animationDelay: '0.5s' }} />
          
          <Link href="/blog">
            <button className="relative px-8 py-4 bg-gradient-to-r from-primary to-primaryHover text-background rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all ai-glow">
              View More Blogs →
            </button>
          </Link>
          
          <p className="text-textMuted mt-4 text-sm">
            {filteredPosts.length > 3 
              ? `See ${filteredPosts.length - 3} more ${filteredPosts.length - 3 === 1 ? 'post' : 'posts'}`
              : 'Check back for more content!'}
          </p>
        </div>
      </div>
    </div>
  );
}