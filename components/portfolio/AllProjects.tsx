"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectNavigation from "./ProjectNavigation";
import { allProjects } from "@/lib/constant/all-project";
import LocalBadge from "../ui/local-badge";

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;

  const filteredProjects = allProjects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "web") return project.category === "Web Development";
    if (activeFilter === "mobile")
      return project.category === "Mobile Development";
    if (activeFilter === "ai-ml") return project.category === "AI/ML";
    return true;
  });

  // Paginate filtered projects
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(0); // Reset to first page when filter changes
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <div className="bg-[#090909]  px-16 py-10">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-6 space-y-5">
            <LocalBadge variant="outline" size="md" className="w-fit">
              ALL projects
            </LocalBadge>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Turning Vision Into Reality
              </h2>
              <ProjectFilter
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="contents"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.05
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <ProjectNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoPrevious={currentPage > 0}
          canGoNext={currentPage < totalPages - 1}
        />
      </div>
    </div>
  );
}
