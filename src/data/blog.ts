export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string; // in minutes
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with Modern Patterns",
    excerpt: "Learn how to structure large React applications using modern architectural patterns and best practices.",
    content: "In this article, we'll explore various patterns for building scalable React applications. We'll cover topics such as state management, component composition, and performance optimization techniques that can help you build robust applications that stand the test of time.",
    date: "2024-01-15",
    author: "Syed Shurem Ali",
    tags: ["React", "JavaScript", "Frontend"],
    readTime: "8 min read"
  },
  {
    id: "2",
    title: "The Future of AI Integration in Web Development",
    excerpt: "Exploring how artificial intelligence is transforming web development workflows and user experiences.",
    content: "Artificial intelligence is rapidly changing how we build and interact with web applications. In this post, we'll look at the current state of AI tools in web development and what the future holds for AI-powered user experiences.",
    date: "2024-01-22",
    author: "Syed Shurem Ali",
    tags: ["AI", "Web Development", "Future"],
    readTime: "6 min read"
  },
  {
    id: "3",
    title: "Optimizing Next.js Applications for Performance",
    excerpt: "Practical tips and techniques for improving the performance of your Next.js applications.",
    content: "Performance is crucial for user experience and SEO. In this article, we'll explore various optimization techniques for Next.js applications, including image optimization, code splitting, and caching strategies.",
    date: "2024-02-05",
    author: "Syed Shurem Ali",
    tags: ["Next.js", "Performance", "Optimization"],
    readTime: "10 min read"
  },
  {
    id: "4",
    title: "Mastering TypeScript for React Development",
    excerpt: "Advanced TypeScript patterns and techniques for building robust React applications.",
    content: "TypeScript brings type safety to JavaScript applications, making them more reliable and maintainable. This post covers advanced TypeScript patterns specifically for React development, including generics, utility types, and type inference.",
    date: "2024-02-18",
    author: "Syed Shurem Ali",
    tags: ["TypeScript", "React", "Frontend"],
    readTime: "12 min read"
  }
];