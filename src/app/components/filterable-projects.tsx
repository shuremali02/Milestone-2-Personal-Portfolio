"use client";
import { useState, useEffect } from "react";
import { project } from "@/data";
import ProjectCard from "./project-card";
import Reveal from "./reveal";

// Extract all unique tags from projects
const allTags = Array.from(
  new Set(project.flatMap((proj) => proj.tags || []))
);

export default function FilterableProjects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState(project);

  // Filter projects based on selected tags and search term
  useEffect(() => {
    let result = project;

    // Filter by tags
    if (selectedTags.length > 0) {
      result = result.filter((proj) =>
        proj.tags?.some((tag) => selectedTags.includes(tag))
      );
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (proj) =>
          proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          proj.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          proj.tags?.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredProjects(result);
  }, [selectedTags, searchTerm]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSearchTerm("");
  };

  return (
    <div className="bg-background py-8 text-textMuted">
      <div className="text-center pt-10 pb-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
          <span className="w-6 h-px bg-gold" /> Portfolio <span className="w-6 h-px bg-gold" />
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-textMain">
          All <span className="text-primary">Projects</span>
        </h1>
      </div>

      {/* Search and Filter Controls */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 bg-surface border border-border rounded-lg text-textMain focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-textMain font-medium mr-2">Filter by:</span>
          <button
            onClick={clearFilters}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              selectedTags.length === 0
                ? "bg-primary text-background shadow-sm shadow-primary/25"
                : "bg-surface text-textMuted border border-border hover:border-primary hover:text-primary"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-primary text-background"
                  : "bg-surface text-textMuted border border-border hover:bg-surface/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-textMuted text-center mb-4">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
          {filteredProjects.map((proj, index) => (
            <Reveal key={index} className="h-full" delay={(index % 3) * 80}>
              <ProjectCard proj={proj} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
          <h3 className="text-xl font-semibold text-textMain mb-2">
            No projects found
          </h3>
          <p className="text-textMuted mb-4">
            Try adjusting your filters or search term
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-2 bg-primary text-background rounded-lg hover:bg-primaryHover transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}