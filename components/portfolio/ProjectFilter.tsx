"use client";

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ai-ml", label: "AI/ML" }
];

export default function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-start lg:justify-end">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
            activeFilter === filter.id
              ? "bg-white text-black shadow-lg scale-105"
              : "bg-white/10 text-white hover:bg-white/20 hover:scale-105"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
