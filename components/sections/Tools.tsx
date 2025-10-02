'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const tools = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/react.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/nodedotjs.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/python.svg' },
  { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/swift.svg' },
  { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/kotlin.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/amazonaws.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/docker.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/typescript.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/nextdotjs.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/mongodb.svg' },
];

export default function Tools() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            We revolutionize client solutions by leveraging the
            <br />
            world&apos;s leading technologies
          </h2>
        </motion.div>

        {/* Scrolling Tools */}
        <div className="relative overflow-hidden">
          {/* First row */}
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            animate={{
              x: [0, -100 * tools.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center gap-3 min-w-fit"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={32}
                    height={32}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                    unoptimized
                  />
                </div>
                <span className="text-gray-700 font-medium text-lg">
                  {tool.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Second row (reverse direction) */}
          {/* <motion.div
            className="flex items-center gap-8 whitespace-nowrap mt-8"
            animate={{
              x: [-100 * tools.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center gap-3 min-w-fit"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={32}
                    height={32}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                    unoptimized
                  />
                </div>
                <span className="text-gray-700 font-medium text-lg">
                  {tool.name}
                </span>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}