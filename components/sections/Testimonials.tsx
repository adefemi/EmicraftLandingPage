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
    text: "We needed a robust inventory management system that could work offline and sync when connection is available. Emicraft delivered a progressive web app that handles our operations across multiple locations. Stock accuracy improved by 40% and our team adapted to it within days.",
    client: "David Okonkwo",
    project: "Inventory Management System",
    company: "Metro Distributors"
  },
  {
    id: 2,
    text: "Emicraft built our school's digital infrastructure from scratch. They were patient with our staff during training and delivered a system that simplified everything from admissions to report cards. The parent portal has been particularly appreciated. Great value for investment.",
    client: "Sarah Mitchell",
    project: "School Management Platform",
    company: "Greenfield International School"
  },
  {
    id: 3,
    text: "We integrated Paystack, Flutterwave, and Stripe into our e-commerce platform with Emicraft's help. The checkout experience is now seamless, and we've seen a 55% reduction in cart abandonment. Their team understood our business needs and delivered accordingly.",
    client: "Chioma Adeyemi",
    project: "E-commerce Payment Integration",
    company: "AfroStyles Online"
  },
  {
    id: 4,
    text: "As a growing logistics company, we needed real-time tracking and automated customer notifications. Emicraft developed a mobile app with WhatsApp integration that transformed our operations. We've scaled from 50 to 300 daily deliveries while maintaining service quality.",
    client: "Michael Osei",
    project: "Logistics Tracking Platform",
    company: "SwiftMove Delivery"
  },
  {
    id: 5,
    text: "Our manufacturing process had too many manual touchpoints. Emicraft analyzed our workflow and built custom software that automated quality checks and inventory tracking. Production efficiency increased by 35%, and we can now generate compliance reports instantly.",
    client: "Rachel Thompson",
    project: "Manufacturing Process Automation",
    company: "Precision Parts Industries"
  },
  {
    id: 6,
    text: "We needed a booking system that could handle appointment scheduling, payment processing, and automated reminders. Emicraft delivered exactly what we needed at a reasonable price. Our no-show rate dropped significantly, and staff can now focus more on patient care.",
    client: "Dr. Amina Hassan",
    project: "Healthcare Booking System",
    company: "Prime Health Clinic"
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
    <section className="py-20 lg:py-28 xl:py-32 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mb-8">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <LocalBadge className="bg-[#0e9a8d] text-white border-[#0e9a8d]">
                TESTIMONIALS
              </LocalBadge>
            </motion.div>

            
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              className="text-[#535353] text-sm sm:text-base max-w-md"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
            See how organizations across industries trust Emicraft for
            transformative solutions and measurable impact.
            </motion.p>
          </div>

          
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
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Card className="h-[400px] sm:h-[450px] bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-none">
                      <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                        {/* Quote Icon */}
                        <div className="mb-4 sm:mb-6">
                          <div className="w-fit rotate-180">
                            <IconQuoteFilled size={40} className="sm:w-[50px] sm:h-[50px]" color="#0E9A8D" />
                          </div>
                        </div>

                        {/* Testimonial Text */}
                        <div className="flex-grow flex flex-col justify-center">
                          <p className="text-black text-base sm:text-lg leading-relaxed line-clamp-5">
                            {testimonial.text}
                          </p>
                        </div>

                        {/* Client Info */}
                        <div className="pt-2 sm:pt-3 mt-auto">
                          <h4 className="font-bold text-[#0e9a8d] text-base sm:text-lg mb-1">
                            {testimonial.client}
                          </h4>
                          <Separator className=" bg-[#dbdbdb] my-2"/>
                          <p className="text-[#535353] text-xs sm:text-sm mb-1">
                            {testimonial.project}
                          </p>
                          <p className="text-[#535353] text-xs">
                            {testimonial.company}
                          </p>
                        </div>
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
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={current === 1}
              className="w-8 h-8 rounded-full border-[#d8d8d8] hover:border-[#0e9a8d] hover:bg-[#0e9a8d] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
              className="w-8 h-8 rounded-full border-[#d8d8d8] hover:border-[#0e9a8d] hover:bg-[#0e9a8d] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
