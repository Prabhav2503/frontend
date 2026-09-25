import React from 'react';
import { Mail } from 'lucide-react';
import { FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#040C15] border-t border-white/5 pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Logo & Info */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-heading font-bold text-lg text-white flex-shrink-0">
                IITD
              </div>
              <span className="font-heading font-semibold text-lg sm:text-xl tracking-tight text-white">
                Mentorship <span className="text-accent">2026-27</span>
              </span>
            </div>
            <p className="text-accent text-xs sm:text-sm font-medium mb-2">
              "Alumni Relations IIT Delhi — Your home, forever."
            </p>
            <p className="text-white/50 text-xs sm:text-sm max-w-sm leading-relaxed mb-5 sm:mb-6">
              Organized by the Office of Alumni Relations & IIT Delhi Endowment Management Foundation. Facilitating holistic 2/3-on-1 mentorship for 1st to 4th year undergraduates.
            </p>
            <div className="text-xs text-white/60 space-y-1.5">
              <p><span className="text-white font-medium">Date & Venue:</span> Sunday, 11th October 2026 | LHC (Small Cabins)</p>
              <p><span className="text-white font-medium">Queries:</span> Tanisha (81301 90506) | Nandani (80001 33940)</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm">Quick Links</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {['Home', 'About', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-accent transition-colors text-xs sm:text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Portal */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm">Connect With Us</h4>
            <p className="text-white/50 text-xs mb-4 leading-relaxed">
              Endowment Fund Office, IIT Delhi, Hauz Khas, New Delhi – 110016
            </p>
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <a 
                href="https://www.instagram.com/iitdelhialumnirelations/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-accent hover:bg-accent/10 transition-all" 
                aria-label="Instagram"
                title="IIT Delhi Alumni Relations Instagram"
              >
                <FiInstagram size={17} />
              </a>
              <a 
                href="https://www.linkedin.com/company/iitdalumni/posts/?feedView=all" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-accent hover:bg-accent/10 transition-all" 
                aria-label="LinkedIn"
                title="IIT Delhi Alumni LinkedIn"
              >
                <FiLinkedin size={17} />
              </a>
              <a 
                href="https://alumni.iitd.ac.in/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-accent hover:bg-accent/10 transition-all" 
                aria-label="Alumni Portal"
                title="IIT Delhi Alumni Website"
              >
                <FiMail className="hidden" />
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </a>
              {/* <a 
                href="mailto:student.coordinator@alumni.iitd.ac.in" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-accent hover:bg-accent/10 transition-all" 
                aria-label="Email"
                title="Email Student Coordinators"
              >
                <FiMail size={17} />
              </a> */}
            </div>
            <div className="space-y-1">
              <a href="https://alumni.iitd.ac.in/" target="_blank" rel="noreferrer" className="text-xs text-white/70 hover:text-accent transition-colors block">
                Official Portal: <span className="text-accent underline font-medium">alumni.iitd.ac.in</span>
              </a>
              <a href="mailto:student.coordinator@alumni.iitd.ac.in" className="text-xs text-white/50 hover:text-accent transition-colors block break-all">
                student.coordinator@alumni.iitd.ac.in
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-white/40 text-[11px] sm:text-xs">
            © 2026-27 Indian Institute of Technology Delhi. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-[11px] sm:text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
