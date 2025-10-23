"use client";

import LocalBadge from "../ui/local-badge";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { motion } from "framer-motion";

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
  }
];

export default function PortfolioShowcase() {
  return (
    <section className="bg-neutral-100 px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <motion.div 
            className="flex flex-col gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <LocalBadge variant="gradient" size="md" className="w-fit">
              featured
            </LocalBadge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              Featured Projects
            </h2>
          </motion.div>
          <motion.p 
            className="text-[#535353] text-sm sm:text-base lg:text-lg max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A glimpse at the innovative solutions we&apos;ve delivered for clients across industries.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeaturedProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}