"use client";

import { IconMenu3 } from "@tabler/icons-react";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isWhiteBackground = pathname.includes("/portfolio/");

  const handleGetStarted = () => {
    const element = document.getElementById("work-with-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-1 lg:px-16">
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-black/20 backdrop-blur-md border border-white/20 rounded-lg shadow-lg "
              : " py-1"
          }`}
        >
          <div className="flex items-center justify-between p-4 lg:px-6">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image src="/logo.svg" alt="EMICRAFT" width={130} height={130} />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`hover:text-[#0e9a8d] transition-colors ${
                  isActive("/")
                    ? "text-[#0e9a8d]"
                    : isWhiteBackground
                    ? "text-gray-800"
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:text-[#0e9a8d] transition-colors ${
                  isActive("/about")
                    ? "text-[#0e9a8d]"
                    : isWhiteBackground
                    ? "text-gray-800"
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className={`hover:text-[#0e9a8d] transition-colors ${
                  isActive("/portfolio")
                    ? "text-[#0e9a8d]"
                    : isWhiteBackground
                    ? "text-gray-800"
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <button
                onClick={() => {
                  handleGetStarted();
                  setIsMenuOpen(false);
                }}
                className={`hover:text-[#0e9a8d] transition-colors ${
                  isActive("/contact")
                    ? "text-[#0e9a8d]"
                    : isWhiteBackground
                    ? "text-gray-800"
                    : "text-white"
                }`}
              >
                Contact
              </button>
            </div>

            {/* Get Started Button - Desktop */}
            <div className="hidden md:block">
              <Button
                onClick={handleGetStarted}
                className="rounded-full bg-[#0e9a8d] hover:bg-[#028073] text-white font-bold text-sm tracking-[0.26px]"
              >
                Get started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-opacity ${
                isWhiteBackground ? "text-gray-800" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <IconMenu3
                  size={24}
                  className={`${
                    isWhiteBackground
                      ? "bg-gray-200 text-gray-800"
                      : "bg-white/20 text-white"
                  } p-[0.5px] rounded`}
                />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
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
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo.svg"
                      alt="EMICRAFT"
                      width={40}
                      height={36}
                    />
                    <div className="text-white">
                      <div className="font-bold text-lg tracking-wider">
                        EMICRAFT
                      </div>
                      <div className="text-sm tracking-widest">
                        TECH SOLUTIONS LIMITED
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div aria-hidden="true" className="border-t border-white/10" />

                <motion.div
                  className="flex flex-col p-6 space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <Link
                      href="/"
                      className={`text-lg text-white hover:text-[#0e9a8d] transition-colors ${
                        isActive("/")
                          ? "text-[#0e9a8d] font-semibold"
                          : "text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Link
                      href="/about"
                      className={`text-lg text-white hover:text-[#0e9a8d] transition-colors ${
                        isActive("/about")
                          ? "text-[#0e9a8d] font-semibold"
                          : "text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <Link
                      href="/portfolio"
                      className={`text-lg text-white hover:text-[#0e9a8d] transition-colors ${
                        isActive("/portfolio")
                          ? "text-[#0e9a8d] font-semibold"
                          : "text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Portfolio
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <button
                      onClick={() => {
                        handleGetStarted();
                        setIsMenuOpen(false);
                      }}
                      className={`text-lg text-white hover:text-[#0e9a8d] transition-colors ${
                        isActive("/contact")
                          ? "text-[#0e9a8d] font-semibold"
                          : "text-white"
                      }`}
                    >
                      Contact
                    </button>
                  </motion.div>

                  {/* Mobile Get Started Button */}
                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                  >
                    <Button
                      onClick={handleGetStarted}
                      className="w-full rounded-full bg-[#0e9a8d] hover:bg-[#028073] text-white font-bold text-sm tracking-[0.26px]"
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
    </>
  );
}
