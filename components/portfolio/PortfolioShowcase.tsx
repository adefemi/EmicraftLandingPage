"use client";

import LocalBadge from "../ui/local-badge";
import FeaturedProjectCard from "./FeaturedProjectCard";

// Portfolio projects data
const projects = [
  {
    id: 1,
    slug: "ai-chatbot-solution",
    title: "AI Chatbot Solution",
    description: "Intelligent customer service automation.",
    category: "AI/ML",
    image: "/650c6cbe7bdfb5ea5236be66bb4e407d7d674880.png",
    technologies: ["Python", "TensorFlow", "NLP"],
    featured: true
  },
  {
    id: 2,
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Powerful desktop applications for Windows, macOS, and Linux platforms.",
    category: "Web Development",
    image: "/1aeb7490afdbf3735ba8a23f112d164abcabcef9.png",
    technologies: ["React", "Node.js", "MongoDB"],
    featured: true
  },
  {
    id: 3,
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time business intelligence platform.",
    category: "Data Science",
    image: "/1aeb7490afdbf3735ba8a23f112d164abcabcef9.png",
    technologies: ["Vue.js", "D3.js", "PostgreSQL"],
    featured: true
  },
  // {
  //   id: 4,
  //   slug: "fitness-tracking-app",
  //   title: "Fitness Tracking App",
  //   description: "Cross-platform mobile application",
  //   category: "Mobile Development",
  //   image: "/1aeb7490afdbf3735ba8a23f112d164abcabcef9.png",
  //   technologies: ["React Native", "Firebase"],
  //   featured: true
  // }
];

export default function PortfolioShowcase() {
  return (
    <div className="bg-neutral-100 px-16 py-10">
      <div className="flex items-end justify-between mb-5">
        <div className="flex flex-col gap-2">
          <LocalBadge variant="gradient" size="md" className="w-fit">
            featured
          </LocalBadge>
          <h2 className="text-4xl font-bold text-black">
            Featured Projects
          </h2>
        </div>
        <p className="text-[#535353] text-base max-w-md">
          A glimpse at the innovative solutions we&apos;ve delivered for clients across industries.
        </p>
      </div>
      
      {/* Featured Projects Grid */}
      <div className="flex gap-4">
        {projects.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}