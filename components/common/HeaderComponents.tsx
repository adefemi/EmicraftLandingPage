"use client";

import { useState } from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { MobileMenuButton } from "./MobileMenuButton";

export function HeaderComponents() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <DesktopNavigation />
      
      {/* Mobile Menu Button - Fixed Position */}
      <div className="fixed top-6 right-4 sm:right-6 z-[60] lg:hidden">
        <MobileMenuButton
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNavigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
