import { Project } from "@/data";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  prop: Project;
}

export default function EnhancedCard({ prop }: CardProps) {
  return (
    <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={prop.img}
          alt={prop.title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {prop.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-primary to-primaryHover text-background text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        {prop.year && (
          <div className="absolute top-3 right-3 bg-surface/80 backdrop-blur-sm text-textMuted text-xs px-2 py-1 rounded-full border border-border">
            {prop.year}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{prop.title}</h3>
        {prop.category && (
          <div className="text-xs text-primary font-medium mb-2">{prop.category}</div>
        )}
        <p className="text-textMuted mb-4 line-clamp-3">{prop.description}</p>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-4">
          {prop.tags?.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            href={prop.route}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primaryHover transition-colors text-sm font-medium"
          >
            Live Demo
          </Link>

          {prop.github && (
            <Link
              href={prop.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-surface text-textMain border border-border rounded-lg hover:bg-surface/80 transition-colors text-sm font-medium"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}