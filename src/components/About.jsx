import React from 'react';
import { motion } from 'framer-motion';
import { Users, Brain, Target, Compass, Award, Building, UserCheck, Layers } from 'lucide-react';

const objectives = [
  {
    icon: Users,
    title: 'Facilitate Meaningful Connections',
    desc: 'Connect undergraduate students (1st to 4th year) with pedigreed alumni through focused 2/3-on-1 discussion formats.',
  },
  {
    icon: Brain,
    title: 'Provide Holistic Mentorship',
    desc: 'Extend guidance beyond standard careers to explore career roadmaps, intern prep, psychology, decision-making, and entrepreneurship.',
  },
  {
    icon: Target,
    title: 'Enable Domain-Specific Guidance',
    desc: 'Empower students to select alumni based on specific domains or industry sectors for tailored, actionable advice.',
  },
  {
    icon: Compass,
    title: 'Shape Future Trajectories',
    desc: 'Help students approach key milestones and career decisions confidently by learning directly from alumni expertise.',
  },
];

const audiencePillars = [
  {
    icon: UserCheck,
    title: '1st to 4th Year Undergraduates',
    desc: 'Catering to 1st/2nd yr career & intern exploration, 3rd yr pre-placement roadmaps, and 4th yr graduation trajectories.',
  },
  {
    icon: Award,
    title: 'Eminent & Pedigreed Alumni',
    desc: 'Passionate alumni from diverse domains and sectors eager to share experiences, expertise, and real-life cases.',
  },
  {
    icon: Building,
    title: 'LHC Small Cabins Setting',
    desc: 'Sessions hosted in the LHC (Small Cabins) on Sunday, 11th Oct 2026 for distraction-free, focused dialogue.',
  },
  {
    icon: Layers,
    title: 'Waitlisted Peer Groups',
    desc: 'Waitlisted students will be actively encouraged to form peer groups to maximize community impact and collaborative learning.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Event Overview Section */}
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <span className="text-accent font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2.5 sm:mb-3 block">
              Event Concept & Overview
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 sm:mb-6 leading-tight text-white">
              Shaping Milestones.<br />
              <span className="text-accent">Learning From Experience.</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
              The <strong className="text-white">Alumni-Student Mentorship Fair AY 26-27</strong> is designed to connect undergraduate students across all years (1st to 4th year) with IIT Delhi alumni. It facilitates open conversations to help students shape their future, explore early career paths, secure internships, and approach key milestones by learning from the experiences of pedigreed alumni.
            </p>
            <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed">
              Organized by the <strong>Office of Alumni Relations</strong> in collaboration with the <strong>IIT Delhi Endowment Management Foundation</strong>, the event brings together 250–300 students with industry leaders in personalized 2/3-on-1 discussion formats.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="IIT Delhi Mentorship" 
                className="w-full h-[280px] sm:h-[360px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="glass-card p-4 sm:p-6 border border-white/10">
                  <p className="text-white/90 text-xs sm:text-sm md:text-base italic mb-2 sm:mb-3 font-body leading-relaxed">
                    "Alumni Relations IIT Delhi — Your home, forever."
                  </p>
                  <p className="text-accent font-semibold text-xs sm:text-sm">— IIT Delhi Alumni & Endowment Management Foundation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Objectives Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-accent font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2.5 sm:mb-3 block">
              Core Objectives
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-3 sm:mb-4">
              Dedicated to Holistic Student Guidance
            </h3>
            <p className="text-white/60 text-xs sm:text-sm md:text-base px-2">
              An interactive networking event dedicated to fostering career development and meaningful alumni-student relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {objectives.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <div key={idx} className="glass-card p-5 sm:p-7 lg:p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 sm:mb-5 text-accent">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="font-semibold text-lg sm:text-xl text-white mb-2">{obj.title}</h4>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{obj.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Target Audience & Format Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-accent font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2.5 sm:mb-3 block">
              Target Audience & Structure
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-3 sm:mb-4">
              Designed For High-Impact Engagement
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {audiencePillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-card p-5 sm:p-6 rounded-2xl border border-white/5 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3 sm:mb-4 text-accent">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base text-white mb-1.5 sm:mb-2">{item.title}</h4>
                    <p className="text-white/55 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
