import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import iitdLogo from '../assets/iitd-logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-2.5 sm:py-3' : 'bg-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official IIT Delhi Logo */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <img
            src={iitdLogo}
            alt="IIT Delhi Official Logo"
            className="h-8 sm:h-10 md:h-11 w-auto object-contain brightness-0 invert"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="hidden xs:block sm:block">
            <div className="font-heading font-bold text-xs sm:text-sm text-white leading-tight tracking-wide">IIT DELHI</div>
            <div className="text-white/50 text-[10px] sm:text-xs leading-tight">Alumni Mentorship <span className="text-accent font-semibold">2026-27</span></div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"/>
            </a>
          ))}
          <Link
            to="/register"
            className="group flex items-center gap-1.5 sm:gap-2 bg-accent hover:bg-red-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(211,47,47,0.3)] hover:shadow-[0_0_35px_rgba(211,47,47,0.7)]"
          >
            Register Now
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white p-1 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass-card mx-3 sm:mx-4 mt-2 p-5 sm:p-6 flex flex-col space-y-3 sm:space-y-4 md:hidden shadow-2xl backdrop-blur-2xl border border-white/10 rounded-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm sm:text-base font-medium text-white/80 hover:text-white transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/register"
            onClick={() => setMobileMenuOpen(false)}
            className="flex justify-center items-center gap-2 bg-accent text-white px-5 py-3 rounded-xl text-sm sm:text-base font-semibold w-full mt-3 shadow-[0_0_20px_rgba(211,47,47,0.4)]"
          >
            Register Now
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
