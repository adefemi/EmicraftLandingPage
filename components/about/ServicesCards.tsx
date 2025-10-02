"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LocalBadge from "@/components/ui/local-badge";
import FlipCard from "@/components/ui/flip-card";

// Figma images for service icons
const imgService1 = "/d42a3aef46f97dfb1ac0bd02fa963d2465390d2c.svg";
const imgService2 = "/15612e00492f391dcf225458ae6e4890511818a3.svg";
const imgService3 = "/360974cc9d12491e905fe81b29a7152088494e10.svg";
const imgService4 = "/4ef66e17bfab21f42dc62eac85b9a04dd53242e1.svg";

const services = [
  {
    id: 1,
    icon: imgService1,
    title: "True Partnership",
    description: "We collaborate closely with your team, keeping communication open and goals aligned.",
    features: [
      // "Regular communication",
      // "Transparent processes", 
      // "Shared goals alignment",
      // "Continuous feedback"
    ]
  },
  {
    id: 2,
    icon: imgService2,
    title: "Clear Strategy",
    description: "Every project starts with a solid plan — from requirements to timelines.",
    features: [
      // "Detailed planning",
      // "Clear timelines",
      // "Defined requirements",
      // "Risk assessment"
    ]
  },
  {
    id: 3,
    icon: imgService3,
    title: "Smart Technology",
    description: "We use cutting-edge tools and best practices to deliver secure, scalable solutions.",
    features: [
      // "Modern frameworks",
      // "Security best practices",
      // "Scalable architecture",
      // "Performance optimization"
    ]
  },
  {
    id: 4,
    icon: imgService4,
    title: "Measurable Results",
    description: "Our focus is on outcomes — solutions that actually drive growth, efficiency, and ROI.",
    features: [
      // "Performance metrics",
      // "ROI tracking",
      // "Growth measurement",
      // "Efficiency improvements"
    ]
  }
];

export default function ServicesCards() {
  return (
    <div className="bg-neutral-100 py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="flex-1 max-w-2xl">
            <LocalBadge variant="gradient" size="md" className="mb-4">
              Who we are
            </LocalBadge>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              What You&apos;ll Get With Emicraft
            </h2>
            <p className="text-[#535353] text-lg leading-relaxed">
              Discover the range of services we offer to help your business innovate, scale, and stay ahead.
            </p>
          </div>
          
          {/* First service card - featured */}
          <div className="flex-1 max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FlipCard
                frontContent={
                  <div className="p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-[#0E9A8D] flex items-center justify-center mb-4">
                      <Image src={services[0].icon} alt="" width={32} height={32} />
                    </div>

                    {/* Content */}
                    <div className="space-y-4 flex-1">
                      <h3 className="text-xl font-bold text-black">
                        {services[0].title}
                      </h3>

                      <p className="text-[#535353] text-sm leading-relaxed font-medium">
                        {services[0].description}
                      </p>
                    </div>
                  </div>
                }
                backContent={
                  <div className="p-6 h-full flex flex-col justify-start items-start text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                      <Image src={services[0].icon} alt="" width={32} height={32} />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{services[0].title}</h3>

                    <p className="text-white text-opacity-90 mb-6">
                      {services[0].description}
                    </p>

                    <div className="space-y-3">
                      {services[0].features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 justify-start"
                        >
                          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                            <svg
                              className="w-2.5 h-2.5 text-[#0E9A8D]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-white text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                }
              />
            </motion.div>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(1).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FlipCard
                frontContent={
                  <div className="p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-[#0E9A8D] flex items-center justify-center mb-4">
                      <Image src={service.icon} alt="" width={32} height={32} />
                    </div>

                    {/* Content */}
                    <div className="space-y-4 flex-1">
                      <h3 className="text-xl font-bold text-black">
                        {service.title}
                      </h3>

                      <p className="text-[#535353] text-sm leading-relaxed font-medium">
                        {service.description}
                      </p>
                    </div>
                  </div>
                }
                backContent={
                  <div className="p-6 h-full flex flex-col justify-start items-start text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                      <Image src={service.icon} alt="" width={32} height={32} />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                    <p className="text-white text-opacity-90 mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 justify-start"
                        >
                          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                            <svg
                              className="w-2.5 h-2.5 text-[#0E9A8D]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-white text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
