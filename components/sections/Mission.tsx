'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import TextAnimation from '../common/TextAnimation';

const stats = [
  {
    number: 5,
    suffix: '+',
    label: 'Years of Experience',
    color: '#0e9a8d'
  },
  {
    number: 50,
    suffix: '+',
    label: 'Projects Completed',
    color: '#0e9a8d'
  },
  {
    number: 4,
    suffix: '+',
    label: 'Industries Covered',
    color: '#0e9a8d'
  },
  {
    number: 25,
    suffix: '+',
    label: 'Satisfied Clients',
    color: '#0e9a8d'
  }
];

export default function Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <section className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Mission Statement */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mb-4 sm:mb-6">
            <TextAnimation 
              text="At Emicraft, we turn complex challenges into smart, scalable tech solutions that help businesses innovate, grow, and stay ahead."
              className="max-w-4xl mx-auto text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight"
              wordClassName="inline-block mr-2 opacity-70"
              staggerDelay={0.05}
              duration={0.4}
              once={true}
            />
          </div>
          
          <motion.p 
            className="text-base sm:text-lg text-black max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            From initial concept to launch and ongoing support, we combine technical excellence with business insight to drive measurable growth and efficiency.
          </motion.p>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 + index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mb-3 sm:mb-4">
                <motion.div
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                  style={{ color: stat.color }}
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 + index * 0.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {inView ? (
                    <CountUp
                      end={stat.number}
                      duration={1.5}
                      delay={0.4 + index * 0.05}
                    />
                  ) : (
                    stat.number
                  )}
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{stat.suffix}</span>
                </motion.div>
              </div>
              
              <motion.p 
                className="text-black font-medium text-xs sm:text-sm md:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 + index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
