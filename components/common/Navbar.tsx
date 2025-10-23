"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { MobileMenuButton } from "./MobileMenuButton";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Constants
  const SCROLL_THRESHOLD = 50;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="py-1 px-4 sm:px-6 lg:px-16 relative z-40">
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-black/20 backdrop-blur-md border border-white/20 rounded-lg shadow-lg'
              : ' py-1'
          }`}
        >
          <div className="flex items-center justify-between p-3 sm:p-4 lg:px-6">
            <Logo variant="desktop" />
            <DesktopNavigation />
            
            {/* Mobile Menu Button - Inline */}
            <div className="lg:hidden">
              <MobileMenuButton
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </nav>
      </header>

      <MobileNavigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
