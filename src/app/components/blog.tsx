"use client";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { useState } from "react";
import Reveal from "./reveal";

export default function Blog() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  );

  // Filter posts based on selected tags (multi-select)
  const filteredPosts = selectedTags.length === 0
    ? blogPosts
    : blogPosts.filter((post) => 
        selectedTags.some((tag) => post.tags.includes(tag))
      );

  // Show only 3 posts on homepage
  const displayedPosts = filteredPosts.slice(0, 3);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  return (
    <div className="bg-background py-16 text-textMuted relative overflow-hidden" id="blog">

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center relative mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <span className="w-6 h-px bg-gold" /> Writing <span className="w-6 h-px bg-gold" />
          </span>
          <h2
            className="font-black uppercase leading-none tracking-tight text-textMain"
            style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
          >
            Blog &amp; <span className="text-primary">Articles</span>
          </h2>
          <p className="text-textMuted mt-2">Notes on building for web, mobile, and AI</p>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedTags([])}
            className={`px-4 py-2 rounded-md ${
              selectedTags.length === 0
                ? "bg-primary text-background"
                : "bg-surface text-textMuted border border-border hover:bg-surface/80"
            }`}
          >
            All Posts
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-md ${
                selectedTags.includes(tag)
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
          {displayedPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 80} className="h-full">
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

        {/* View More Button */}
        <div className="text-center mt-12 relative">
          
          <Link href="/blog">
            <button className="relative px-8 py-4 bg-primary text-background rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all">
              View More Blogs →
            </button>
          </Link>
          
          <p className="text-textMuted mt-4 text-sm">
            {filteredPosts.length > 3 
              ? `See ${filteredPosts.length - 3} more ${filteredPosts.length - 3 === 1 ? 'post' : 'posts'}`
              : 'Check back for more content!'}
          </p>
        </div>

        {/* Clear Filters Button */}
        {selectedTags.length > 1 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setSelectedTags([])}
              className="px-4 py-2 text-sm text-textMuted hover:text-primary transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}