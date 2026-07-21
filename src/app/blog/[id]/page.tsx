import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { FaArrowLeft, FaRegCalendar, FaRegClock, FaRegUser } from "react-icons/fa";

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const post = blogPosts.find(p => p.id === params.id);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id);
  if (!post) notFound();

  return (
    <div className="bg-background min-h-screen py-16 text-textMuted">
      <article className="max-w-3xl mx-auto px-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-primary transition-colors mb-8"
        >
          <FaArrowLeft className="text-xs" /> Back to blog
        </Link>

        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
          <span className="w-6 h-px bg-gold" /> Article
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-textMain leading-tight mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-textMuted mb-5">
          <span className="flex items-center gap-1.5"><FaRegUser className="text-primary" /> {post.author}</span>
          <span className="flex items-center gap-1.5"><FaRegCalendar className="text-primary" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><FaRegClock className="text-primary" /> {post.readTime}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 shadow-lg">
          <p className="text-lg text-textMain font-medium leading-relaxed mb-6 pb-6 border-b border-border">
            {post.excerpt}
          </p>
          <div className="text-textMain leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-textMuted mb-4">Enjoyed the read? Let&apos;s build something together.</p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all">
              Get in Touch
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
}
