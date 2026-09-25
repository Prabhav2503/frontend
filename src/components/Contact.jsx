import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { FiInstagram, FiLinkedin, FiGlobe } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-primary relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-accent font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2.5 sm:mb-3 block">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3 sm:mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg">
            Have any queries? We're here to help!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-6 sm:space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1 text-white">Location</h4>
                <p className="text-white/60 leading-relaxed text-xs sm:text-sm">
                  Endowment Fund Office, IIT Delhi<br />
                  Hauz Khas, New Delhi – 110016
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1 text-white">For Queries (Student Coordinators)</h4>
                <p className="text-white/80 leading-relaxed text-xs sm:text-sm">
                  <span className="text-white font-medium">Tanisha:</span> +91 81301 90506<br />
                  <span className="text-white font-medium">Nandani:</span> +91 80001 33940
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1 text-white">Official Email</h4>
                <p className="text-white/70 leading-relaxed text-xs sm:text-sm">
                  <a href="mailto:student.coordinator@alumni.iitd.ac.in" className="hover:text-accent transition-colors break-all">
                    student.coordinator@alumni.iitd.ac.in
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1 text-white">Alumni Relations Portal</h4>
                <p className="text-white/70 leading-relaxed text-xs sm:text-sm">
                  <a href="https://alumni.iitd.ac.in/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors break-all">
                    alumni.iitd.ac.in
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex items-center gap-3 sm:gap-4">
              <a 
                href="https://www.instagram.com/iitdelhialumnirelations/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent transition-colors flex items-center justify-center group" 
                aria-label="Instagram"
                title="IIT Delhi Alumni Relations Instagram"
              >
                <FiInstagram className="w-5 h-5 text-white/70 group-hover:text-white" size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/iitdalumni/posts/?feedView=all" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent transition-colors flex items-center justify-center group" 
                aria-label="LinkedIn"
                title="IIT Delhi Alumni LinkedIn"
              >
                <FiLinkedin className="w-5 h-5 text-white/70 group-hover:text-white" size={18} />
              </a>
              <a 
                href="https://alumni.iitd.ac.in/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent transition-colors flex items-center justify-center group" 
                aria-label="Alumni Website"
                title="IIT Delhi Alumni Relations Website"
              >
                <FiGlobe className="w-5 h-5 text-white/70 group-hover:text-white" size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="glass-card p-2 h-[280px] sm:h-[350px] lg:h-[400px] w-full relative overflow-hidden group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.665516089332!2d77.18125555!3d28.54413165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6b84122d1%3A0xf5b2f29b4e542158!2sIndian%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1689531557022!5m2!1sen!2sin" 
                className="w-full h-full rounded-xl filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
