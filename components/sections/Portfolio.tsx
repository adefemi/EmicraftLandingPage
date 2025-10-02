'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import LocalBadge from '@/components/ui/local-badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Powerful desktop applications for Windows, macOS, and Linux platforms.',
    image: '/1aeb7490afdbf3735ba8a23f112d164abcabcef9.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Fitness Tracking App',
    description: 'Cross-platform mobile application',
    image: '/9e668c6098f6e8129e00b302d3aafacf2f8b4a4d.png',
    technologies: ['React Native', 'Firebase'],
  },
  {
    title: 'AI Chatbot Solution',
    description: 'Intelligent customer service automation.',
    image: '/650c6cbe7bdfb5ea5236be66bb4e407d7d674880.png',
    technologies: ['Python', 'TensorFlow', 'NLP'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time business intelligence platform.',
    image: '/a4afee94c844d4b5768b43de7d40805b3e6b2bf1.png',
    technologies: ['Vue.js', 'D3.js', 'PostgreSQL'],
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-[#090909] relative overflow-hidden">
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
                <LocalBadge className="bg-white text-black border-white">
                OUR PORTFOLIO
              </LocalBadge>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Turning Vision Into Reality
            </motion.h2>
          </div>
          
          <motion.p 
            className="text-[#dbdbdb] text-base max-w-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Innovative solutions and measurable results we&apos;ve delivered for clients across industries.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`h-[400px] ${getColumnSpan(index)}`}
            >
              <Card className="h-full bg-transparent border-0 overflow-hidden group cursor-pointer">
                <CardContent className="p-0 h-full relative">
                  {/* Project Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  </div>

                  {/* Content - Fixed structure */}
                  <div className="relative z-10 h-full flex flex-col p-6">
                    {/* Technology Tags - Fixed height */}
                    <motion.div 
                      className="flex flex-wrap gap-2 h-8 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <LocalBadge className="bg-white text-black hover:bg-[#0e9a8d] hover:text-white transition-colors duration-300">
                            {tech}
                          </LocalBadge>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Spacer to push content down */}
                    <div className="flex-1"></div>

                    {/* Project Info - Fixed at bottom */}
                    <motion.div
                      className="h-24 flex flex-col justify-end"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0e9a8d] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-[#d8d8d8] text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-[#0e9a8d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.02 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            className="bg-white text-black border-white hover:bg-[#0e9a8d] hover:text-white hover:border-[#0e9a8d] transition-all duration-300"
          >
            View all projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
