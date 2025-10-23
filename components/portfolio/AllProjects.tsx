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

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(0);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <section id="all-projects" className="bg-[#090909] px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="mb-12 sm:mb-16 space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <LocalBadge variant="outline" size="md" className="w-fit mb-4 sm:mb-6">
              ALL projects
            </LocalBadge>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Turning Vision Into Reality
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-auto"
            >
              <ProjectFilter
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
              />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          <AnimatePresence mode="wait">
            {currentProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${activeFilter}-${currentPage}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <ProjectNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoPrevious={currentPage > 0}
          canGoNext={currentPage < totalPages - 1}
        />
      </div>
    </section>
  );
}
