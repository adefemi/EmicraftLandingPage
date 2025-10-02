"use client";
import AboutHero from "@/components/about/Hero";
import WhoWeAre from "@/components/about/WhoWeAre";
import ServicesCards from "@/components/about/ServicesCards";
import TeamSection from "@/components/about/TeamSection";
import ApproachSection from "@/components/about/ApproachSection";

export default function About() {
  return (
    <div>
      <AboutHero />
      <WhoWeAre />
      <ServicesCards />
      <TeamSection />
      <ApproachSection />
    </div>
  );
}
