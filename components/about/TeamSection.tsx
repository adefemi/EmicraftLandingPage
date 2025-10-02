"use client";

import { motion } from "framer-motion";
import LocalBadge from "@/components/ui/local-badge";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

// Figma images for team members
const imgTeam1 = "/3c6713879c7c0055858b8e091ab4dbc5dd532641.png";
const imgTeam2 = "/6a47fe57d6cdeb60679f7523f14b11efc4eb9ee5.png";
const imgTeam3 = "/d3c739dee14b3868468b1b1674b6dfa234e21ab7.png";
const imgTeam4 = "/9be4dc67f6cb64de447b7149ea74977eaa0783fe.png";
const imgTeam5 = "/9e9b04e3b72a7117a34ef235b179223bbbf1837c.png";
const imgArrowLeft = "/822f77ef3f399d7e3dd8706b707ff968cf387871.svg";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Developer",
    image: imgTeam1
  },
  {
    id: 2,
    name: "John Doe",
    role: "Developer", 
    image: imgTeam2
  },
  {
    id: 3,
    name: "John Doe",
    role: "Developer",
    image: imgTeam3
  },
  {
    id: 4,
    name: "John Doe",
    role: "Developer",
    image: imgTeam4
  },
  {
    id: 5,
    name: "John Doe",
    role: "Developer",
    image: imgTeam5
  }
];

export default function TeamSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="bg-white py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <LocalBadge variant="gradient" size="md" className="mb-2 w-fit">
              Meet the Team
            </LocalBadge>
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              The Minds Behind Emicraft
            </h2>
          </div>
          <p className="text-[#535353] text-lg leading-relaxed max-w-lg">
            Our multidisciplinary team combines technical expertise with business insight to craft solutions that drive real results.
          </p>
        </div>

        {/* Team members carousel */}
        <div className="mb-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={member.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                  <motion.div
                    className="relative h-80 rounded overflow-hidden group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        fill
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#dbdbdb] text-sm">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Navigation arrows - positioned at bottom right */}
        <div className="flex items-center justify-end gap-10">
          <motion.button
            className="w-8 h-8 bg-white border border-[#d8d8d8] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollPrev}
            disabled={current === 1}
          >
            <IconArrowLeft size={20} className="text-black"/>
          </motion.button>
          
          <motion.button
            className="w-8 h-8 bg-white border border-[#d8d8d8] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollNext}
            disabled={current === count}
          >
            <IconArrowRight size={20} className="text-black"/>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
