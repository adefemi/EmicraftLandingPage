"use client";

import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

interface ProjectNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export default function ProjectNavigation({ 
  onPrevious, 
  onNext, 
  canGoPrevious, 
  canGoNext 
}: ProjectNavigationProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <motion.button
        className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/10"
        whileHover={canGoPrevious ? { scale: 1.05 } : {}}
        whileTap={canGoPrevious ? { scale: 0.95 } : {}}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Previous page"
      >
        <IconArrowLeft size={24} className="text-white"/>
      </motion.button>
      
      <motion.button
        className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/10"
        whileHover={canGoNext ? { scale: 1.05 } : {}}
        whileTap={canGoNext ? { scale: 0.95 } : {}}
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next page"
      >
        <IconArrowRight size={24} className="text-white"/>
      </motion.button>
    </div>
  );
}
