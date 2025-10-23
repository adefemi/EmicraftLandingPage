"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: number;
    slug: string;
    title?: string;
    description?: string;
    category: string;
    image: string;
    technologies: string[];
    featured: boolean;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block relative overflow-hidden rounded-2xl min-h-[350px] sm:min-h-[400px] transition-all duration-300 hover:shadow-2xl hover:shadow-white/5"
    >
      <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title || "Emicraft Consulting a Development Agency"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/90 transition-all duration-300 group-hover:from-black/50 group-hover:to-black/95" />
        </div>

        <div className="flex flex-wrap gap-2 relative z-10">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <div 
              key={index} 
              className="bg-white/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm transition-all duration-300 group-hover:bg-white group-hover:scale-105 group-hover:shadow-md"
            >
              <p className="text-xs font-bold text-black uppercase tracking-wide">{tech}</p>
            </div>
          ))}
        </div>

        <div className="relative z-10 space-y-2 sm:space-y-3">
          <span className="inline-block text-xs font-semibold text-white/80 uppercase tracking-widest">
            {project.category}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white transition-all duration-300 group-hover:translate-x-1">
            {project.title}
          </h3>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-2 transition-opacity duration-300 group-hover:text-white">
            {project.description}
          </p>
          
          <div className="pt-2 flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-sm">View Project</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
