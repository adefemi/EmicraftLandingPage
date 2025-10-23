"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import LocalBadge from "@/components/ui/local-badge";

const services = [
  {
    title: "Strategy & Consulting",
    description:
      "Expert guidance on tech architecture, digital transformation, and product road mapping.",
    icon: "💡",
    features: [
      "Technology Consulting",
      "Digital Transformation",
      "Product Discovery",
      "UI/UX Strategy"
    ]
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies.",
    icon: "🌐",
    features: [
      "Frontend Development",
      "Backend Development",
      "Full-Stack Solutions",
      "CMS Development"
    ]
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    icon: "📱",
    features: [
      "Native iOS Development",
      "Native Android Development",
      "Cross-Platform Apps",
      "App Store Optimization"
    ]
  },
  {
    title: "Desktop Applications",
    description:
      "Powerful desktop applications for Windows, macOS, and Linux platforms.",
    icon: "🖥️",
    features: [
      "Windows Applications",
      "macOS Applications",
      "Cross-Platform Desktop",
      "Enterprise Solutions"
    ]
  },
  {
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure and automated deployment pipelines.",
    icon: "☁️",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "CI/CD Pipelines",
      "Containerization"
    ]
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by artificial intelligence and machine learning.",
    icon: "🧠",
    features: [
      "Chatbots & Virtual Assistants",
      "Recommendation Engines",
      "Predictive Analytics",
      "Computer Vision"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 xl:py-32 bg-[#f5f5f5]">
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
              className="flex items-center gap-4 mb-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-6 h-px bg-black" />
              <LocalBadge variant="outline" className="border-black/10 text-black/60">
                Our Services
              </LocalBadge>
            </motion.div>

            
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-black tracking-[0.35px]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Services We Provide
              </motion.h2>

            <motion.p
              className="text-[#535353] text-base max-w-md font-medium tracking-[0.16px]"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Discover the range of services we offer to help your business
              innovate, scale, and stay ahead.
            </motion.p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-96 [perspective:1000px] group"
            >
              <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out cursor-pointer [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
              >
                {/* Front Card */}
                <div
                  className="absolute inset-0 w-full h-full bg-white shadow-lg [backface-visibility:hidden]"
                >
                  {/* Border accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#0E9A8D]"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#0E9A8D]"></div>

                  <div className="p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-[#0E9A8D] flex items-center justify-center mb-4">
                      <span className="text-2xl text-white">
                        {service.icon}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 flex-1">
                      <h3 className="text-xl font-bold text-black">
                        {service.title}
                      </h3>

                      <p className="text-[#535353] text-sm leading-relaxed font-medium">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3"
                          >
                            <div className="w-4 h-4 rounded-full bg-[#0E9A8D] flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-2.5 h-2.5 text-white"
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
                            <span className="text-[#535353] text-sm font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Card (Flipped) */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0e9a8d] to-[#028073] shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]"
                >
                  <div className="p-6 h-full flex flex-col justify-center items-start text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                      <span className="text-3xl">{service.icon}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                    <p className="text-white text-opacity-95 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 w-full">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3"
                        >
                          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center flex-shrink-0">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
