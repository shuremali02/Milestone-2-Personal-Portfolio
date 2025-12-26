"use client";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { useState } from "react";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  );

  // Filter posts based on selected tag
  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <div className="bg-background py-16 text-textMuted" id="blog">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="flex items-center justify-center p-8 text-4xl font-bold text-primary">
          Blog & Articles
        </h2>

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
          {filteredPosts.map((post) => (
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