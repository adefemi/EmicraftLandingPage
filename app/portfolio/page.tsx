"use client";
import AllProjects from "@/components/portfolio/AllProjects";
import PortfolioHero from "@/components/portfolio/Hero";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";

export default function Portfolio() {
  return (
    <div className="w-full">
      <PortfolioHero />
      <PortfolioShowcase />
      <AllProjects />
    </div>
  );
}
