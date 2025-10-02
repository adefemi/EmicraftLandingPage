"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import LocalBadge from "@/components/ui/local-badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { IconQuoteFilled } from "@tabler/icons-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Separator } from "../ui/separator";

const testimonials = [
  {
    id: 1,
    text: "Emicraft transformed our digital presence completely. Their team delivered a mobile app that exceeded our expectations and increased our user engagement by 300%. The attention to detail and technical expertise is unmatched.",
    client: "Sarah Johnson",
    project: "Mobile App Development",
    company: "TechStart Inc."
  },
  {
    id: 2,
    text: "Working with Emicraft was a game-changer for our business. They built a scalable web platform that handles our growing customer base seamlessly. Their AI/ML solutions helped us automate processes and save 40% on operational costs.",
    client: "Michael Chen",
    project: "Web Development & AI/ML",
    company: "DataFlow Solutions"
  },
  {
    id: 3,
    text: "The cloud infrastructure Emicraft designed for us is rock-solid. We've had zero downtime since implementation, and our application performance improved dramatically. Their team's expertise in modern technologies is impressive.",
    client: "Emily Rodriguez",
    project: "Cloud Infrastructure",
    company: "Global Finance Corp"
  },
  {
    id: 4,
    text: "Emicraft's approach to our project was professional and innovative. They delivered a comprehensive solution that integrated seamlessly with our existing systems. The results speak for themselves - 50% increase in efficiency.",
    client: "David Thompson",
    project: "System Integration",
    company: "Manufacturing Plus"
  },
  {
    id: 5,
    text: "Outstanding work! Emicraft developed a custom AI solution that revolutionized our data analysis capabilities. The team's technical knowledge and project management skills made the entire process smooth and efficient.",
    client: "Lisa Wang",
    project: "AI/ML Solutions",
    company: "Analytics Pro"
  },
  {
    id: 6,
    text: "From concept to deployment, Emicraft guided us through every step. Their mobile-first approach and attention to user experience resulted in an app that our customers love. Highly recommend their services.",
    client: "James Wilson",
    project: "Mobile App Development",
    company: "Retail Innovations"
  }
];

export default function Testimonials() {
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
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 lg:mb-0">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <LocalBadge className="bg-[#0e9a8d] text-white border-[#0e9a8d]">
                TESTIMONIALS
              </LocalBadge>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>
          </div>

          <motion.p
            className="text-[#535353] text-base max-w-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            See how organizations across industries trust Emicraft for
            transformative solutions and measurable impact.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mb-8"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-[450px] bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-none">
                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Quote Icon */}
                        <motion.div
                          className="mb-6"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-fit rotate-180">
                            <IconQuoteFilled size={50} color="#0E9A8D" />
                          </div>
                        </motion.div>

                        {/* Testimonial Text */}
                        <motion.div
                          className="flex-grow flex flex-col justify-center"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <p className="text-black text-lg leading-relaxed line-clamp-5">
                            {testimonial.text}
                          </p>
                        </motion.div>

                        {/* Client Info */}
                        <motion.div
                          className="pt-3 mt-auto"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="font-bold text-[#0e9a8d] text-lg mb-1">
                            {testimonial.client}
                          </h4>
                          <Separator className=" bg-[#dbdbdb] my-2"/>
                          <p className="text-[#535353] text-sm mb-1">
                            {testimonial.project}
                          </p>
                          <p className="text-[#535353] text-xs">
                            {testimonial.company}
                          </p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation Controls - positioned at bottom right */}
          <motion.div
            className="flex justify-end gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={current === 1}
              className="w-8 h-8 rounded-full border-[#d8d8d8] hover:border-[#0e9a8d] hover:bg-[#0e9a8d] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={current === count}
              className="w-8 h-8 rounded-full border-[#d8d8d8] hover:border-[#0e9a8d] hover:bg-[#0e9a8d] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
