import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Users, Clock, Compass } from 'lucide-react';

const stats = [
  { icon: GraduationCap, label: 'Expected Student Attendees', value: '250–300' },
  { icon: Users, label: 'Max Students / Alumni', value: 'Up to 9' },
  { icon: Clock, label: 'Interaction Rate (2/3-on-1)', value: '3 / Hour' },
  { icon: Compass, label: '2 x 3-Hour Windows', value: '10-1 & 2-5' },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="relative z-30 -mt-8 sm:-mt-12 lg:-mt-14 container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-card p-4 sm:p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-white/[0.02] lg:bg-transparent lg:p-0"
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-2 sm:mb-3 opacity-90" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold number-font mb-1 text-white">{stat.value}</h3>
              <p className="text-[11px] sm:text-xs md:text-sm text-white/65 font-medium leading-snug">{stat.label}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Stats;
