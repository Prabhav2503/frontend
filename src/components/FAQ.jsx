import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Who is eligible to participate in the programme?",
    answer: "The programme is open to undergraduate students of IIT Delhi across all years (1st, 2nd, 3rd, and 4th year). Whether you are in 1st/2nd year seeking early career and internship guidance, or 3rd/4th year preparing for placements and higher studies, mentors provide tailored insights for every stage."
  },
  {
    question: "When and where will the mentorship sessions take place?",
    answer: "The mentorship fair is scheduled for Sunday, 11th October 2026, hosted in the LHC (Small Cabins) at IIT Delhi, providing an ideal and focused private setting for interactive dialogue."
  },
  {
    question: "What is the format and duration of each session?",
    answer: "The event utilizes a focused 2/3-on-1 discussion format structured across two 3-hour windows (10:00 AM to 1:00 PM and 2:00 PM to 5:00 PM). This allows intimate, personalized guidance with an interaction rate of ~3 students per hour (up to 9 students per alumni)."
  },
  {
    question: "What dimensions of guidance will mentors provide?",
    answer: "The mentorship extends far beyond standard career and placement advice. Mentors offer comprehensive guidance exploring decision-making frameworks, psychology, entrepreneurship, leadership, work-life navigation, and real-life scenarios."
  },
  {
    question: "Can I choose mentors based on my target domain or sector?",
    answer: "Yes! The platform empowers students to select alumni from specific domains or sectors they wish to explore, ensuring that all advice received is actionable and directly relevant to your career aspirations."
  },
  {
    question: "What happens if I am placed on the waitlist?",
    answer: "Waitlisted students will be actively encouraged to form peer groups to share learnings, discuss session insights, and maximize community impact and collaborative peer mentoring."
  },
  {
    question: "Whom should I contact if I have questions?",
    answer: "For any queries, please reach out to our Student Coordinators: Tanisha (81301 90506) or Nandani (80001 33940), or email student.coordinator@alumni.iitd.ac.in."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-28 bg-secondary relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <span className="text-accent font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2.5 sm:mb-3 block">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3 sm:mb-6 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed">
              Find answers to common questions about the mentorship program. If you have any other queries, feel free to reach out to us.
            </p>
          </motion.div>

          <div className="lg:w-2/3">
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="glass-card overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
                    >
                      <span className="font-semibold text-sm sm:text-base md:text-lg text-white/90 pr-4 sm:pr-8">{faq.question}</span>
                      <div className="flex-shrink-0 text-accent">
                        {isActive ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-white/60 text-xs sm:text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
