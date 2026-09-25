import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Briefcase, ArrowRight } from 'lucide-react';

const RegisterSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary flex flex-col pt-6 sm:pt-10 pb-12 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center justify-center min-h-[75vh]">
        
        <div className="w-full mb-8 sm:mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm sm:text-base">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-14 px-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-3 sm:mb-4 text-white">Join the Programme</h2>
          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Select your role to participate in the Alumni-Student Mentorship Programme 2026-27 on Sunday, 11th October 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 w-full max-w-4xl mx-auto">
          {/* Mentor Option */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => navigate('/register/mentor')}
            className="group relative glass-card p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(211,47,47,0.15)] border border-white/5 hover:border-accent/30 rounded-2xl sm:rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary border border-white/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:border-accent/50 transition-all duration-500">
              <Briefcase className="w-7 h-7 sm:w-9 sm:h-9 text-accent" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2 sm:mb-3">I am an Alumnus / Mentor</h3>
            <p className="text-xs sm:text-sm md:text-base text-white/60 mb-6 sm:mb-8 flex-grow leading-relaxed">
              Share your expertise and real-life experiences with undergraduate students across Morning (10 AM–1 PM) or Afternoon (2 PM–5 PM) windows.
            </p>
            <div className="flex items-center gap-2 text-accent text-sm sm:text-base font-semibold group-hover:text-red-400 transition-colors">
              Register as Mentor <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Student Option */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => navigate('/register/student')}
            className="group relative glass-card p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(211,47,47,0.15)] border border-white/5 hover:border-accent/30 rounded-2xl sm:rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary border border-white/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:border-accent/50 transition-all duration-500">
              <User className="w-7 h-7 sm:w-9 sm:h-9 text-accent" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2 sm:mb-3">I am a Student (1st to 4th Year)</h3>
            <p className="text-xs sm:text-sm md:text-base text-white/60 mb-6 sm:mb-8 flex-grow leading-relaxed">
              Tailored mentorship for 1st/2nd yr career & intern exploration, 3rd yr pre-placement roadmaps, and 4th yr career launch.
            </p>
            <div className="flex items-center gap-2 text-accent text-sm sm:text-base font-semibold group-hover:text-red-400 transition-colors">
              Register as Mentee <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSelection;
