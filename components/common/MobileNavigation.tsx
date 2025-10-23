'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { useEffect } from 'react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Menu Content */}
          <div className="relative h-fit flex">
            <motion.div
              className="bg-[#090909] rounded-b-3xl shadow-sm w-full flex flex-col overflow-hidden"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4
              }}
            >
              <div className="flex items-center justify-between p-5">
                <Logo variant="desktop" />
              </div>

              <motion.div
                className="flex flex-col p-6 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <NavLink
                  href="/"
                  className="text-lg font-semibold"
                  onClick={onClose}
                  motionProps={{
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.3, duration: 0.3 }
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  href="/about"
                  className="text-lg font-semibold"
                  onClick={onClose}
                  motionProps={{
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.4, duration: 0.3 }
                  }}
                >
                  About
                </NavLink>
                <NavLink
                  href="/portfolio"
                  className="text-lg font-semibold"
                  onClick={onClose}
                  motionProps={{
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.5, duration: 0.3 }
                  }}
                >
                  Portfolio
                </NavLink>

                {/* Mobile Get Started Button */}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <Button 
                    className="w-full rounded-full bg-[#0e9a8d] hover:bg-[#028073] text-white font-bold text-sm tracking-[0.26px] cursor-pointer"
                    onClick={() => {
                      onClose();
                      const element = document.getElementById('work-with-us');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    Get started
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
