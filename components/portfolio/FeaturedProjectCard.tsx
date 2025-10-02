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
      className="group flex-1 h-[250px] relative overflow-hidden"
    >
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 relative z-10">
          {project.technologies.map((tech, index) => (
            <div key={index} className="bg-white px-3 py-1 rounded-full">
              <p className="text-xs font-bold text-black">{tech}</p>
            </div>
          ))}
        </div>

        {/* Project Info */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
