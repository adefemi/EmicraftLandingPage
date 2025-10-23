"use client";

import Image from "next/image";
import Link from "next/link";

interface FeaturedProjectCardProps {
  project: {
    id: number;
    slug: string;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
    featured: boolean;
  };
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative overflow-hidden rounded-2xl h-[280px] sm:h-[300px] md:h-[350px] block transition-all duration-300 hover:shadow-2xl"
    >
      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80 transition-opacity duration-300 group-hover:opacity-90" />
        </div>

        <div className="flex flex-wrap gap-2 relative z-10">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <div 
              key={index} 
              className="bg-white/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-md"
            >
              <p className="text-xs font-bold text-black">{tech}</p>
            </div>
          ))}
        </div>

        <div className="relative z-10 space-y-1.5 sm:space-y-2">
          <span className="inline-block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
            {project.category}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white transition-transform duration-300 group-hover:translate-x-1">
            {project.title}
          </h3>
          <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
