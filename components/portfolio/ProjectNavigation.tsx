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
    <div className="flex items-center justify-end gap-4">
      <motion.button
        className="w-8 h-8 bg-white border border-[#d8d8d8] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrevious}
        disabled={!canGoPrevious}
      >
        <IconArrowLeft size={20} className="text-black"/>
      </motion.button>
      
      <motion.button
        className="w-8 h-8 bg-white border border-[#d8d8d8] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        disabled={!canGoNext}
      >
        <IconArrowRight size={20} className="text-black"/>
      </motion.button>
    </div>
  );
}
