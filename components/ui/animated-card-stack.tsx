"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AnimatedCardStackProps {
  cards: {
    id: string;
    image: string;
    title?: string;
    description?: string;
  }[];
  className?: string;
  autoAnimate?: boolean;
  animationDuration?: number;
}

// Figma images from the design
const imgFrame2147227375 =
  "/Users/timmy/Desktop/emicraft-web/public/6c03add9199aac9c66e81f70440561384034419a.png";
const imgFrame2147227376 =
  "/Users/timmy/Desktop/emicraft-web/public/92f38a733891fbce3acc69c8b61115525d9a01cc.png";
const imgFrame2147227377 =
  "/Users/timmy/Desktop/emicraft-web/public/24567aa3241e148f63acc0b09836405be9d6f27e.png";

export default function AnimatedCardStack({
  cards,
  className,
  autoAnimate = true,
  animationDuration = 3000
}: AnimatedCardStackProps) {
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    if (autoAnimate) {
      const interval = setInterval(() => {
        setIsEntered((prev) => !prev);
      }, animationDuration);

      return () => clearInterval(interval);
    }
  }, [autoAnimate, animationDuration]);

  if (cards.length === 0) return null;

  const card1 = cards[0];
  const card2 = cards[1] || cards[0];

  return (
    <div className={cn("relative w-full h-[385px]", className)}>
      <motion.div
        className="absolute inset-0"
        animate={isEntered ? "entered" : "default"}
        variants={{
          default: {
            transition: { duration: 0.8, ease: "easeInOut" }
          },
          entered: {
            transition: { duration: 0.8, ease: "easeInOut" }
          }
        }}
      >
        {/* First Card */}
        <motion.div
          className="absolute h-[280px] w-[250px] pointer-events-none rounded-[8px]"
          variants={{
            default: {
              x: "-50%",
              y: "-50%",
              left: "calc(50% - 0.25px)",
              top: "calc(50% - 1.5px)",
              rotate: 0,
              zIndex: 2
            },
            entered: {
              x: "-50%",
              y: "-50%",
              left: "calc(50% - 91.104px)",
              top: "calc(50% + 47.73px)",
              rotate: 344.318,
              zIndex: 1
            }
          }}
        >
          <div className="relative h-full w-full rounded-[8px] overflow-hidden">
            <Image
              src={card1.image || imgFrame2147227375}
              alt={card1.title || "Card 1"}
              className="absolute inset-0 w-full h-full object-cover"
              fill
            />
            <div
              className="absolute inset-0 bg-repeat bg-size-[1024px_1024px] bg-top-left opacity-15 rounded-[8px]"
              style={{
                backgroundImage: `url('${imgFrame2147227376}')`
              }}
            />
            <div className="absolute border-[#d8d8d8] border-[5px] border-solid inset-[-5px] rounded-[13px] shadow-[0px_2px_4px_2px_rgba(0,0,0,0.03)]" />
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="absolute h-[280px] w-[250px] pointer-events-none rounded-[8px]"
          variants={{
            default: {
              x: "-50%",
              y: "-50%",
              left: "calc(50% + 0.25px)",
              top: "calc(50% - 2.5px)",
              rotate: 0,
              zIndex: 1
            },
            entered: {
              x: "-50%",
              y: "-50%",
              left: "calc(50% + 86.873px)",
              top: "calc(50% + 0.52px)",
              rotate: 18,
              zIndex: 2
            }
          }}
        >
          <div className="relative h-full w-full rounded-[8px] overflow-hidden">
            <Image
              src={card2.image || imgFrame2147227377}
              alt={card2.title || "Card 2"}
              className="absolute inset-0 w-full h-full object-cover"
              fill
            />
            <div
              className="absolute inset-0 bg-repeat bg-size-[1024px_1024px] bg-top-left opacity-15 rounded-[8px]"
              style={{
                backgroundImage: `url('${imgFrame2147227376}')`
              }}
            />
            <div className="absolute border-[#d8d8d8] border-[5px] border-solid inset-[-5px] rounded-[13px] shadow-[0px_2px_4px_2px_rgba(0,0,0,0.03)]" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
