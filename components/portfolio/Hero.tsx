"use client";

import PillButton from "@/components/ui/pill-button";
import LocalBadge from "@/components/ui/local-badge";
import { motion } from "framer-motion";
import Hero from "@/components/common/Hero";

export default function PortfolioHero() {
  const scrollToProjects = () => {
    const element = document.getElementById("all-projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Hero>
      <div className="flex-1 flex items-center justify-center px-4 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LocalBadge variant="outline" size="md" className="mb-8">
              Portfolio
            </LocalBadge>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Work That Delivers
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e9a8d] to-[#028073]">
              Real Results
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#d8d8d8] mb-10 max-w-2xl mx-auto leading-relaxed font-medium tracking-[0.16px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore the solutions we&apos;ve created for clients across industries — from custom platforms to full-scale digital transformations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <PillButton size="md" onClick={scrollToProjects}>
              Explore projects
            </PillButton>
          </motion.div>
        </div>
      </div>
    </Hero>
  );
}
