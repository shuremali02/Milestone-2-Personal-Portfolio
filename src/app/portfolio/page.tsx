"use client";
import { useState } from "react";
import Card from "../components/cards";
import { project } from "@/data";

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? project : project.slice(0, 6);

  return (
    <div className="bg-background py-8 text-textMuted">
      <h1 className="flex items-center justify-center p-8 pt-8 text-5xl font-bold tracking-widest underline text-primary decoration-primaryHover hover:animate-pulse">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        {visibleProjects.map((projects, index) => (
          <Card key={index} prop={projects} />
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-full  underline decoration-primaryHover bg-surface border border-primary text-textMuted hover:bg-primary hover:text-textMain hover:scale-105 transition duration-300"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
}
