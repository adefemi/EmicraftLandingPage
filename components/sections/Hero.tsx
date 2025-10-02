"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Hero from "@/components/common/Hero";

const clientAvatars = [
  {
    id: 1,
    name: "Client 1",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    fallback: "C1"
  },
  {
    id: 2,
    name: "Client 2",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    fallback: "C2"
  },
  {
    id: 3,
    name: "Client 3",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    fallback: "C3"
  },
  {
    id: 4,
    name: "Client 4",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    fallback: "C4"
  }
];

export default function HomeHero() {
  return (
    <Hero>
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Indicators */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <span className="text-[#d8d8d8] text-sm font-medium tracking-[0.13px]">
                Trusted by 25+ clients
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Scale Your Business With
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e9a8d] to-[#028073]">
              Innovative Tech Solutions
            </span>
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
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg"
            >
              Start your project
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-[#FFFFFF1A] border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full"
            >
              Explore services
            </Button>
          </motion.div>
        </div>
      </div>
    </Hero>
  );
}
