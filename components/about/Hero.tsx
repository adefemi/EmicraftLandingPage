"use client";

import PillButton from "@/components/ui/pill-button";
import LocalBadge from "@/components/ui/local-badge";
import { motion } from "framer-motion";
import Hero from "@/components/common/Hero";
import Link from "next/link";

export default function AboutHero() {
  return (
    <Hero>
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <LocalBadge variant="outline" size="md" className="mb-6">
            About Us
          </LocalBadge>
          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Turning Complex Challenges
            <br />
            <span className="text-white">Into Smart Tech Solutions</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-lg text-[#d8d8d8] mb-8 max-w-2xl mx-auto leading-relaxed font-medium tracking-[0.16px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            We deliver tailored solutions, streamline operations, and guide your
            digital transformation so you grow faster and smarter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link href="/about#work-with-us" className="cursor-pointer">
              <PillButton size="md">
                Start your project
              </PillButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </Hero>
  );
}
