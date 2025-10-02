"use client";

interface ProjectOverviewProps {
  project: {
    title: string;
    description: string;
    category: string;
    features: string[];
  };
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <div className="flex flex-col gap-10">
      {/* Project Title and Category */}
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold text-black">
          {project.title}
        </h1>
        <div className="flex gap-2">
          <div className="bg-white px-3 py-1 rounded-full border border-gray-200">
            <span className="text-sm text-gray-600">{project.category}</span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col gap-16">
        {/* Overview Section */}
        <div className="flex flex-col gap-5">
          <div className="px-4 py-1 border border-[#0095cf] rounded-full w-fit">
            <span className="text-xs font-bold text-[#0095cf] uppercase tracking-wide">
              overview
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold text-black">
              About this project
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}