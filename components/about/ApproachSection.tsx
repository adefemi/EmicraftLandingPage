"use client";

import { motion } from "framer-motion";
import LocalBadge from "@/components/ui/local-badge";

// Figma background image
const imgOurApproach = "/Users/timmy/Desktop/emicraft-web/public/e999ca04f5078597665ff74b4777ed8d93730be2.png";

const approachSteps = [
  {
    id: 1,
    title: "Discover",
    description: "We dive into your goals and challenges to uncover insights, clarify objectives, and map out opportunities.",
    isActive: true
  },
  {
    id: 2,
    title: "Plan",
    description: "We turn insights into a clear roadmap — defining strategy, timelines, and technology choices to keep everyone aligned.",
    isActive: false
  },
  {
    id: 3,
    title: "Build",
    description: "We develop, test, and refine your solution using modern tools and agile methods to ensure quality and speed.",
    isActive: false
  },
  {
    id: 4,
    title: "Launch",
    description: "We deploy with confidence, support your rollout, and continue optimising so your solution delivers lasting results.",
    isActive: false
  }
];

export default function ApproachSection() {
  return (
    <div className="relative py-20 px-4 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#090909]" />
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: `url('${imgOurApproach}')`,
            backgroundRepeat: 'repeat',
            backgroundSize: '1024px 1024px',
            backgroundPosition: 'top left'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <LocalBadge variant="outline" size="md" className="mb-6">
            our approach
          </LocalBadge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center">
            Turning Vision Into Reality
          </h2>
        </motion.div>

        {/* Process steps */}
        <div className="space-y-12">
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Animated border divider */}
              {index < approachSteps.length - 1 && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#535353]"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.3 + 0.6,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ originX: 0 }}
                />
              )}
              {/* Step title */}
              <div className="lg:w-1/3">
                <motion.h3 
                  className="text-5xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.3 + 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {step.title}
                </motion.h3>
              </div>
              
              {/* Step description */}
              <div className="lg:w-2/3">
                <motion.p 
                  className="text-[#dbdbdb] text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.3 + 0.4,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
