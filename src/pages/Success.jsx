import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Download, ArrowLeft } from 'lucide-react';

const Success = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[128px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card max-w-md w-full p-10 text-center relative z-10"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(74,222,128,0.2)]"
        >
          <CheckCircle size={40} />
        </motion.div>

        <h2 className="text-3xl font-bold font-heading mb-4">Registration Successful!</h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          Thank you for joining the <span className="text-white font-semibold">Alumni-Student Mentorship Programme 2026-27</span> (Sunday, 11th October 2026 at LHC Small Cabins). Your details have been submitted to the Office of Alumni Relations.
        </p>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white px-6 py-3.5 rounded-xl font-medium transition-colors group">
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            Download Confirmation
          </button>
          
          <Link to="/" className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white/70 hover:text-white px-6 py-3.5 rounded-xl font-medium transition-colors">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Success;
