"use client";

import Hero from "@/components/common/Hero";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, StarIcon } from "@/components/ui/icons";
import {
  clientAvatars,
  STAR_RATING,
  TRUSTED_CLIENTS_COUNT,
} from "@/lib/constant/hero";
import { motion } from "framer-motion";
import HeroLogo from "../common/HeroLogo";

export default function HomeHero() {
  return (
    <Hero>
      <HeroLogo />
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-between px-4 sm:px-6 lg:px-16">
        {/* Left Content */}
        <div className="flex-1 text-center space-y-4 sm:space-y-6">
          
          {/* Trust Indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Client Avatars */}
            <div className="flex -space-x-3">
              {clientAvatars.map((client) => (
                <Avatar
                  key={client.id}
                  className="w-8 h-8 border-2 border-white shadow-lg"
                >
                  <AvatarImage src={client.image} alt={client.name} />
                  <AvatarFallback className="bg-gradient-to-br from-[#0e9a8d] to-[#028073] text-white font-bold">
                    {client.fallback}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>

            {/* Stars */}
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-1 justify-center sm:justify-start">
                {Array.from({ length: STAR_RATING }).map((_, i) => (
                  <StarIcon key={i} className="text-yellow-400" />
                ))}
              </div>

              <span className="text-[#d8d8d8] text-sm font-medium tracking-[0.13px]">
                Trusted by {TRUSTED_CLIENTS_COUNT}+ clients
              </span>
            </div>
          </motion.div>
          {/* Main Headline */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Scale Your Business With
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e9a8d] to-[#028073]"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
            >
              Innovative Tech Solutions
            </span>
          </motion.h1>
          {/* Sub-headline */}
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-[#d8d8d8] max-w-2xl mx-auto leading-relaxed font-medium tracking-[0.16px] px-4 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            We deliver tailored solutions, streamline operations, and guide your
            digital transformation so you grow faster and smarter.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full shadow-lg cursor-pointer w-full sm:w-auto"
              asChild
            >
              <a href="#work-with-us">
                Start your project
                <ArrowRightIcon />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-[#FFFFFF1A] border-white text-white hover:bg-white hover:text-black px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full cursor-pointer w-full sm:w-auto"
              asChild
            >
              <a href="#services">
                Explore services
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </Hero>
  );
}
