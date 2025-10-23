'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import LocalBadge from '@/components/ui/local-badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Djuix.io (Our flagship product)',
    description: 'The simplest and fastest way to create your API',
    image: '/1aeb7490afdbf3735ba8a23f112d164abcabcef9.png',
    technologies: ['React', 'Django', 'PostgreSQL'],
  },
  // {
  //   title: 'Fitness Tracking App',
  //   description: 'Cross-platform mobile application',
  //   image: '/9e668c6098f6e8129e00b302d3aafacf2f8b4a4d.png',
  //   technologies: ['React Native', 'Firebase'],
  // },
  // {
  //   title: 'AI Chatbot Solution',
  //   description: 'Intelligent customer service automation.',
  //   image: '/650c6cbe7bdfb5ea5236be66bb4e407d7d674880.png',
  //   technologies: ['Python', 'TensorFlow', 'NLP'],
  // },
  // {
  //   title: 'Analytics Dashboard',
  //   description: 'Real-time business intelligence platform.',
  //   image: '/a4afee94c844d4b5768b43de7d40805b3e6b2bf1.png',
  //   technologies: ['Vue.js', 'D3.js', 'PostgreSQL'],
  // },
];

export default function Portfolio() {
  return (
    <section className="py-20 lg:py-28 xl:py-32 bg-[#090909] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-90">
        <div 
          className="w-full h-full bg-repeat bg-[length:1024px_1024px] bg-top-left"
          style={{ backgroundImage: `url('/e999ca04f5078597665ff74b4777ed8d93730be2.png')` }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10">
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
                <LocalBadge className="bg-white text-black border-white">
                OUR PORTFOLIO
              </LocalBadge>
            </motion.div>
            
            
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
            <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Turning Vision Into Reality
              </motion.h2>
            
            <motion.p 
              className="text-[#dbdbdb] text-sm sm:text-base max-w-md"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Innovative solutions and measurable results we&apos;ve delivered for clients across industries.
            </motion.p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {projects.map((project, index) => {
            // Define different column spans for each card
            const getColumnSpan = (index: number) => {
              switch (index) {
                case 0: return "md:col-span-2"; // First card spans 2 columns
                case 1: return "md:col-span-1"; // Second card spans 2 columns  
                case 2: return "md:col-span-1"; // Third card spans 1 column
                case 3: return "md:col-span-2"; // Fourth card spans 3 columns
                default: return "md:col-span-1";
              }
            };

            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`h-[350px] sm:h-[400px] ${getColumnSpan(index)}`}
            >
              <Card className="h-full bg-transparent border-0 overflow-hidden group cursor-pointer">
                <CardContent className="p-0 h-full relative">
                  {/* Project Image */}
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0e9a8d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content - Fixed structure */}
                  <div className="relative z-10 h-full flex flex-col p-4 sm:p-6">
                    {/* Technology Tags - Fixed height */}
                    <div className="flex flex-wrap gap-2 h-8 mb-4">
                      {project.technologies.map((tech) => (
                        <LocalBadge 
                          key={tech}
                          className="bg-white text-black hover:bg-[#0e9a8d] hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </LocalBadge>
                      ))}
                    </div>

                    {/* Spacer to push content down */}
                    <div className="flex-1"></div>

                    {/* Project Info - Fixed at bottom */}
                    <div className="h-20 sm:h-24 flex flex-col justify-end">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-[#0e9a8d] transition-colors duration-300 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-[#d8d8d8] text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="bg-[#FFFFFF1A] border-white text-white hover:bg-white hover:text-black px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 xl:px-14 xl:py-6 rounded-full cursor-pointer"
            asChild
          >
            <Link href="/portfolio">
              View all projects
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
