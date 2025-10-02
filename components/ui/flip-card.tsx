"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
  minHeight?: string;
}

export default function FlipCard({
  frontContent,
  backContent,
  className = "",
  minHeight = "h-45"
}: FlipCardProps) {
  return (
    <motion.div
      className={`relative w-full ${minHeight} ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Front Card */}
      <div
        className="absolute inset-0 w-full h-full bg-white shadow group-hover:border-[#0E9A8D] transition-colors duration-300"
        style={{ backfaceVisibility: "hidden" }}
      >
        {/* Border accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#0E9A8D]"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#0E9A8D]"></div>
        
        {frontContent}
      </div>

      {/* Back Card (Flipped) */}
      <div
        className="absolute inset-0 w-full h-full bg-[#0E9A8D]"
        style={{
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden"
        }}
      >
        {backContent}
      </div>
    </motion.div>
  );
}
