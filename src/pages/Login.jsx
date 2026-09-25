import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col md:flex-row">
      {/* Left side: Illustration */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-secondary items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10 pointer-events-none" />
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Networking and Mentorship" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 max-w-md text-center p-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center font-heading font-bold text-2xl mb-6 shadow-[0_0_30px_rgba(211,47,47,0.5)]">
            IITD
          </div>
          <h2 className="text-4xl font-bold font-heading mb-4 leading-tight">
            Connect. Learn.<br />Succeed.
          </h2>
          <p className="text-white/60 text-lg">
            Alumni Relations IIT Delhi — Your home, forever. Join the network for the Alumni-Student Mentorship Programme 2026-27.
          </p>
        </div>
      </div>

      {/* Right side: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        <Link to="/" className="absolute top-8 left-8 text-white/50 hover:text-white flex items-center gap-2 transition-colors">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md glass-card p-8 sm:p-10"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold font-heading mb-2">Welcome Back</h3>
            <p className="text-white/60 text-sm">Please sign in to your account to continue.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); /* Mock Login */ }}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/90">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-white/40" />
                </div>
                <input 
                  type="email" 
                  placeholder="entry@iitd.ac.in" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/90">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-white/40" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  required
                />
              </div>
              <div className="flex justify-end">
                <a href="#" className="text-xs text-accent hover:text-red-400">Forgot password?</a>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-accent hover:bg-red-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-[0_0_20px_rgba(211,47,47,0.3)] mt-2"
            >
              Log In
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-white/40 text-xs uppercase font-semibold">OR</span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm mb-4">Don't have an account?</p>
            <Link 
              to="/register" 
              className="inline-block w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 rounded-xl transition-colors"
            >
              Create Account
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
