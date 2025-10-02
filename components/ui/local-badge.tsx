"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LocalBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
  className?: string;
  animate?: boolean;
}   

export default function LocalBadge({
  children,
  variant = "default",
  size = "md",
  textTransform = "uppercase",
  className,
  animate = true,
}: LocalBadgeProps) {
  const baseClasses = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 focus:outline-none";
  
  const variants = {
    default: "bg-white text-black  border-[1.5px] border-white",
    outline: "bg-transparent text-white border-[1.5px] border-white",
    gradient: "bg-transparent border-[1.5px] border-[#0095CF] text-gradient from-[#0095CF] to-[#0E9A8D]"
  };
  
  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2 text-base"
  };
  
  const textTransforms = {
    uppercase: "uppercase",
    lowercase: "lowercase", 
    capitalize: "capitalize",
    none: "normal-case"
  };

  const badgeClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    textTransforms[textTransform],
    className
  );

  if (animate) {
    return (
      <motion.div
        className={badgeClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={badgeClasses}>
      {children}
    </div>
  );
}