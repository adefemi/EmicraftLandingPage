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
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Mission Statement */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <TextAnimation 
              text="At Emicraft, we turn complex challenges into smart, scalable tech solutions that help businesses innovate, grow, and stay ahead."
              className="max-w-4xl mx-auto lg:text-3xl text-2xl font-bold text-black leading-tight"
              wordClassName="inline-block mr-2 opacity-70"
              staggerDelay={0.1}
              duration={0.6}
              once={true}
            />
          </div>
          
          <motion.p 
            className="text-lg text-black max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From initial concept to launch and ongoing support, we combine technical excellence with business insight to drive measurable growth and efficiency.
          </motion.p>
        </motion.div>

        {/* Statistics */}
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
                  <span className="text-3xl md:text-4xl lg:text-5xl">{stat.suffix}</span>
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
      </div>
    </section>
  );
}
