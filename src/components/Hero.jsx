import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Calendar, MapPin, Sparkles, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/85 bg-gradient-to-b from-primary/70 via-primary/60 to-primary z-10" />
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="IIT Delhi Campus"
          className="w-full h-full object-cover opacity-35 scale-105 transform origin-center animate-pulse"
          style={{ animationDuration: '15s' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-28 sm:pt-36 pb-14 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Organization & Motto Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 sm:mb-6 max-w-full">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
            <span className="text-white/80 text-[11px] sm:text-xs md:text-sm font-medium tracking-wide truncate sm:whitespace-normal">
              Office of Alumni Relations & IIT Delhi Endowment Management Foundation
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.15] sm:leading-tight mb-4 sm:mb-6 text-white tracking-tight">
            ALUMNI-STUDENT<br />
            <span className="text-accent">MENTORSHIP</span><br />
            PROGRAMME 2026-27
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            Connecting <span className="text-white font-semibold">1st to 4th year undergraduate students</span> at decisive stages with eminent IIT Delhi alumni for focused <span className="text-white font-semibold">2/3-on-1 mentorship</span>, exploring career exploration, internships, placements, entrepreneurship, and real-life trajectories.
          </p>

          {/* Key Event Badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-8 sm:mb-10 text-xs sm:text-sm text-white/90">
            <div className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
              <span>Sunday, 11th October 2026</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
              <span>LHC (Small Cabins), IIT Delhi</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-accent flex-shrink-0" />
              <span>10 AM–1 PM & 2 PM–5 PM Slots</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/register"
              className="group flex items-center justify-center gap-2 bg-accent hover:bg-red-700 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(211,47,47,0.4)] w-full sm:w-auto text-center"
            >
              Register Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#about"
              className="group flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-300 w-full sm:w-auto text-center"
            >
              Programme Overview
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
