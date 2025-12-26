import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen py-16 text-textMuted">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-surface border border-border rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-4 mb-6 text-textMuted">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-invert max-w-none text-textMain">
            <p className="text-lg text-textMain mb-6">{post.excerpt}</p>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}