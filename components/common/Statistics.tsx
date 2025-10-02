"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import React from "react";

const stats = [
  {
    number: 5,
    suffix: "+",
    label: "Years of Experience",
    color: "#0e9a8d"
  },
  {
    number: 50,
    suffix: "+",
    label: "Projects Completed",
    color: "#0e9a8d"
  },
  {
    number: 4,
    suffix: "+",
    label: "Industries Covered",
    color: "#0e9a8d"
  },
  {
    number: 25,
    suffix: "+",
    label: "Satisfied Clients",
    color: "#0e9a8d"
  }
];

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  return (
    <>
      <motion.div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <motion.div
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{ color: stat.color }}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={2}
                    delay={1 + index * 0.1}
                  />
                ) : (
                  stat.number
                )}
                <span className="text-3xl md:text-4xl lg:text-5xl">
                  {stat.suffix}
                </span>
              </motion.div>
            </div>

            <motion.p
              className="text-black font-medium text-sm md:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {stat.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Statistics;
