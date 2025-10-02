"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Card {
  id: string;
  image: string;
  title?: string;
  description?: string;
  overlay?: string;
}

interface AdvancedCardStackProps {
  cards: Card[];
  className?: string;
  inView?: boolean;
  hoverEnabled?: boolean;
  onCardClick?: (card: Card) => void;
}

export default function AdvancedCardStack({
  cards,
  className,
  inView = false,
  hoverEnabled = true,
  onCardClick
}: AdvancedCardStackProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true);
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set timeout to return to normal position after 3 seconds
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, 3000);
    }
  }, [inView, isAnimating]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (cards.length === 0) return null;

  const card1 = cards[0];
  const card2 = cards[1] || cards[0];

  const handleCardClick = (card: Card) => {
    if (isExpanded) {
      setIsExpanded(false);
      setIsAnimating(false);
    } else {
      setIsExpanded(true);
      setIsAnimating(true);
    }
    
    if (onCardClick) {
      onCardClick(card);
    }
  };

  return (
    <div className={cn("relative w-full h-[385px] group", className)}>
      <motion.div
        className="absolute inset-0"
        animate={isAnimating ? "expanded" : "default"}
        variants={{
          default: {
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
          },
          expanded: {
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
          }
        }}
      >
        {/* First Card */}
        <motion.div
          className={cn(
            "absolute h-[280px] w-[250px] rounded-[8px] cursor-pointer",
            hoverEnabled && "hover:scale-105 transition-transform duration-300"
          )}
          variants={{
            default: {
              x: "-50%",
              y: "-50%",
              left: "50%",
              top: "50%",
              rotate: 0,
              zIndex: 2
            },
            expanded: {
              x: "-50%",
              y: "-50%",
              left: "calc(50% - 91px)",
              top: "calc(50% + 48px)",
              rotate: -15.682,
              zIndex: 1
            }
          }}
          whileHover={hoverEnabled ? { scale: 1.05, zIndex: 10 } : {}}
          onHoverStart={() => setHoveredCard(card1.id)}
          onHoverEnd={() => setHoveredCard(null)}
          onClick={() => handleCardClick(card1)}
        >
          <div className="relative h-full w-full rounded-[8px] overflow-hidden group/card">
            <Image
              src={card1.image}
              alt={card1.title || "Card 1"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
              fill
            />
            <div
              className="absolute inset-0 bg-repeat bg-size-[1024px_1024px] bg-top-left opacity-15 rounded-[8px]"
              style={{
                backgroundImage: `url('${card1.overlay}')`
              }}
            />
            <div className="absolute border-[#d8d8d8] border-[5px] border-solid inset-[-5px] rounded-[13px] shadow-[0px_2px_4px_2px_rgba(0,0,0,0.03)]" />

            {/* Card Content Overlay */}
            {(card1.title || card1.description) && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === card1.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {card1.title && (
                  <h3 className="text-white font-bold text-lg mb-2">
                    {card1.title}
                  </h3>
                )}
                {card1.description && (
                  <p className="text-white/90 text-sm">{card1.description}</p>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className={cn(
            "absolute h-[280px] w-[250px] rounded-[8px] cursor-pointer",
            hoverEnabled && "hover:scale-105 transition-transform duration-300"
          )}
          variants={{
            default: {
              x: "-50%",
              y: "-50%",
              left: "50%",
              top: "50%",
              rotate: 0,
              zIndex: 1
            },
            expanded: {
              x: "-50%",
              y: "-50%",
              left: "calc(50% + 87px)",
              top: "calc(50% + 1px)",
              rotate: 18,
              zIndex: 2
            }
          }}
          whileHover={hoverEnabled ? { scale: 1.05, zIndex: 10 } : {}}
          onHoverStart={() => setHoveredCard(card2.id)}
          onHoverEnd={() => setHoveredCard(null)}
          onClick={() => handleCardClick(card2)}
        >
          <div className="relative h-full w-full rounded-[8px] overflow-hidden group/card">
            <Image
              src={card2.image}
              alt={card2.title || "Card 2"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
              fill
            />
            <div
              className="absolute inset-0 bg-repeat bg-size-[1024px_1024px] bg-top-left opacity-15 rounded-[8px]"
              style={{
                backgroundImage: `url('${card2.overlay}')`
              }}
            />
            <div className="absolute border-[#d8d8d8] border-[5px] border-solid inset-[-5px] rounded-[13px] shadow-[0px_2px_4px_2px_rgba(0,0,0,0.03)]" />

            {/* Card Content Overlay */}
            {(card2.title || card2.description) && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === card2.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {card2.title && (
                  <h3 className="text-white font-bold text-lg mb-2">
                    {card2.title}
                  </h3>
                )}
                {card2.description && (
                  <p className="text-white/90 text-sm">{card2.description}</p>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
