"use client";
import { motion } from "framer-motion";

interface TextAnimationProps {
  text: string;
  className?: string;
  wordClassName?: string;
  staggerDelay?: number;
  duration?: number;
  viewportAmount?: number;
  once?: boolean;
}

export default function TextAnimation({
  text,
  className = "lg:text-4xl text-3xl font-bold leading-relaxed",
  wordClassName = "inline-block mr-2 opacity-70",
  staggerDelay = 0.15,
  duration = 0.5,
  viewportAmount = 0.6,
  once = false
}: TextAnimationProps) {
  const words = text.split(" ");

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      transition={{ staggerChildren: staggerDelay }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={wordClassName}
          variants={{
            hidden: { opacity: 0.3, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
}
