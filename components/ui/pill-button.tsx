"use client";

import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface PillButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export default function PillButton({
  children,
  onClick,
  href,
  className,
  variant = "default",
  size = "md",
  disabled = false,
}: PillButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    default: "bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
  };
  
  const sizes = {
    sm: "px-2 py-2 text-sm gap-2",
    md: "px-3 py-2 text-base gap-3",
    lg: "px-4 py-3 text-lg gap-4"
  };
  
  const iconSizes = {
    sm: "w-6 h-6 p-1",
    md: "w-8 h-8 p-1.5",
    lg: "w-10 h-10 p-2"
  };

  const buttonContent = (
    <>
      <span>{children}</span>
      <motion.span 
        className={cn(
          "bg-black rounded-full flex items-center justify-center",
          iconSizes[size]
        )}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <IconArrowRight className="text-white" size={size === "sm" ? 16 : size === "md" ? 18 : 20} />
      </motion.span>
    </>
  );

  const buttonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {buttonContent}
    </motion.button>
  );
}
