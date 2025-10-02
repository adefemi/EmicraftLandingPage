"use client";

import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import ProjectCard from "./ProjectCard";
import ProjectHeroCard from "./ProjectHeroCard";

interface ProjectHeroProps {
  project: {
    title: string;
    category: string;
    description: string;
    heroImage: string;
    technologies: string[];
  };
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="bg-[#f5f5f5] mt-20">
      <div className="px-16 py-8">
        {/* Back to Portfolio */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-4 text-black hover:text-gray-600 transition-colors mb-8"
        >
          <IconArrowLeft size={20} />
          <span className="text-base font-medium">Back to portfolio</span>
        </Link>

        {/* Project Card */}
        <div className="">
          <ProjectHeroCard project={project as any} />
        </div>
      </div>
    </div>
  );
}
