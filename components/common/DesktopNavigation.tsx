"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { NavLink } from "./NavLink";
import { useEffect, useState } from "react";

export function DesktopNavigation() {
  const { scrollY } = useScroll();
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [windowHeight, setWindowHeight] = useState(1000); // Default fallback

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const topPosition = useTransform(
    scrollY,
    (value) => {
      const progress = Math.min(value / (windowHeight * 0.3), 1);
      return `${35 + progress * 15}%`;
    }
  );

  const backgroundOpacity = useTransform(
    scrollY,
    (value) => {
      const start = windowHeight * 0.25;
      const end = windowHeight * 0.35;
      return Math.min(Math.max((value - start) / (end - start), 0), 1);
    }
  );

  useEffect(() => {
    const checkBackground = () => {
      const currentScrollY = scrollY.get();

      // Calculate current glassmorphism opacity
      const start = windowHeight * 0.25;
      const end = windowHeight * 0.35;
      const glassOpacity = Math.min(Math.max((currentScrollY - start) / (end - start), 0), 1);

      // Keep text white until glassmorphism is at least 60% visible
      if (glassOpacity < 0.6) {
        setIsDarkBackground(true);
        return;
      }

      const navElement = document.querySelector('[data-desktop-nav]');
      if (!navElement) return;
      
      const rect = navElement.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      
      const elementAtPoint = document.elementFromPoint(
        rect.left + rect.width / 2,
        centerY
      );
      
      if (elementAtPoint) {
        let currentElement: HTMLElement | null = elementAtPoint as HTMLElement;
        
        while (currentElement && currentElement !== document.body) {
          const bg = window.getComputedStyle(currentElement).backgroundColor;
          
          if (bg && bg !== 'rgba(0, 0, 0, 0)') {
            const rgb = bg.match(/\d+/g);
            if (rgb) {
              const r = parseInt(rgb[0]);
              const g = parseInt(rgb[1]);
              const b = parseInt(rgb[2]);
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              
              setIsDarkBackground(brightness < 128);
              return;
            }
          }
          
          currentElement = currentElement.parentElement;
        }
      }
    };

    checkBackground();
    
    const unsubscribe = scrollY.on('change', checkBackground);
    window.addEventListener('resize', checkBackground);
    
    return () => {
      unsubscribe();
      window.removeEventListener('resize', checkBackground);
    };
  }, [scrollY, windowHeight]);

  const textColor = isDarkBackground ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";

  return (
    <motion.div
      data-desktop-nav
      className="hidden lg:flex flex-col space-y-6 fixed right-10 translate-y-[-50%] p-6 rounded-2xl backdrop-blur-md z-50"
      style={{ 
        top: topPosition,
        backgroundColor: useTransform(
          backgroundOpacity,
          (value) => `rgba(255, 255, 255, ${value * 0.8})`
        ),
        boxShadow: useTransform(
          backgroundOpacity,
          (value) => `0 8px 32px 0 rgba(0, 0, 0, ${value * 0.15})`
        )
      }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <NavLink
        href="/"
        style={{ color: textColor }}
      >
        Home
      </NavLink>
      <NavLink
        href="/about"
        style={{ color: textColor }}
      >
        About
      </NavLink>
      <NavLink
        href="/portfolio"
        style={{ color: textColor }}
      >
        Portfolio
      </NavLink>
    </motion.div>
  );
}
