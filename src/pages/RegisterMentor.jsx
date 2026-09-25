import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Loader2, Clock, Sun, Sunset, Calendar, Sparkles } from 'lucide-react';
import { DEPARTMENTS, SLOT_OPTIONS, DURATION_OPTIONS, MENTOR_WINDOW_OPTIONS } from '../utils/constants';
import { calculateEndTime, formatTime12Hour, formatDuration } from '../utils/time';
import YearPicker from '../components/YearPicker';

const steps = [
  { id: 1, name: 'Personal Info' },
  { id: 2, name: 'Professional Info' },
  { id: 3, name: 'Preferences' },
  { id: 4, name: 'Review' },
];

const RegisterMentor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, watch, trigger, control, setValue, formState: { errors } } = useForm({
    defaultValues: {
      time_window: 'morning'
    }
  });
  const navigate = useNavigate();

  const formData = watch();
  const selectedWindow = MENTOR_WINDOW_OPTIONS.find(w => w.id === (formData.time_window || 'morning')) || MENTOR_WINDOW_OPTIONS[0];

  const handleNext = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    let fieldsToValidate = [];
    if (currentStep === 1) fieldsToValidate = ['name', 'mobile', 'email'];
    if (currentStep === 2) fieldsToValidate = ['graduation_year', 'department', 'profession', 'company'];
    if (currentStep === 3) fieldsToValidate = ['time_window'];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 4) {
      handleNext(e);
    } else {
      handleSubmit(onSubmit)(e);
    }
  };

  const handlePrev = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Mock API Call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Real API Call placeholder:
      // await fetch('http://localhost:5000/api/register/mentor', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...data,
      //     calculated_end_time: calculateEndTime(data.preferred_time, data.number_of_slots, data.slot_duration)
      //   })
      // });

      navigate('/success');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculatedEndTime = calculateEndTime(
    formData.preferred_time,
    formData.number_of_slots,
    formData.slot_duration
  );

  const totalMinutes = (parseInt(formData.number_of_slots, 10) || 0) * (parseInt(formData.slot_duration, 10) || 0);

  return (
    <div className="min-h-screen bg-primary flex flex-col pt-6 sm:pt-10 pb-12 sm:pb-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-3xl">
        
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6 sm:mb-10 text-sm sm:text-base">
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2 text-white">Mentor Registration</h2>
          <p className="text-white/60 text-xs sm:text-sm">Alumni-Student Mentorship Programme 2026-27 • Sunday, 11th October 2026</p>
        </div>

        {/* Stepper */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/10 -z-10" />
            <div 
              className="absolute left-0 top-1/2 h-0.5 bg-accent -z-10 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors duration-300 ${
                  currentStep >= step.id 
                    ? 'bg-accent text-white shadow-[0_0_15px_rgba(211,47,47,0.5)]' 
                    : 'bg-secondary text-white/40 border border-white/10'
                }`}>
                  {currentStep > step.id ? <Check size={16} /> : step.id}
                </div>
                <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider hidden sm:block ${
                  currentStep >= step.id ? 'text-white' : 'text-white/40'
                }`}>
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="glass-card p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl">
          <form onSubmit={handleFormSubmit}>
            
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5 sm:space-y-6"
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs sm:text-sm font-medium text-white/90">Full Name</label>
                      <input 
                        {...register("name", { required: "Full name is required" })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="Dr. Jane Smith"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/90">Mobile Number</label>
                      <input 
                        type="tel"
                        {...register("mobile", { 
                          required: "Mobile number is required",
                          pattern: {
                            value: /^[0-9+\s-]{10,15}$/,
                            message: "Please enter a valid mobile number"
                          }
                        })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="+91 98765 43210"
                      />
                      {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/90">Email Address</label>
                      <input 
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="mentor@alumni.iitd.ac.in"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold mb-6">Academic & Professional Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/90">Graduation Year</label>
                      <Controller
                        name="graduation_year"
                        control={control}
                        rules={{ required: "Graduation year is required" }}
                        render={({ field }) => (
                          <YearPicker
                            value={field.value}
                            onChange={field.onChange}
                            error={!!errors.graduation_year}
                            placeholder="Select Year (e.g. 2018)"
                          />
                        )}
                      />
                      {errors.graduation_year && <p className="text-red-400 text-xs mt-1">{errors.graduation_year.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/90">Department</label>
                      <select 
                        {...register("department", { required: "Department is required" })}
                        className="w-full bg-secondary border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none"
                      >
                        <option value="">Select Department</option>
                        {DEPARTMENTS.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                      {errors.department && <p className="text-red-400 text-xs mt-1">{errors.department.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/90">Profession</label>
                      <input 
                        {...register("profession", { required: "Profession is required" })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="e.g. Senior Software Architect"
                      />
                      {errors.profession && <p className="text-red-400 text-xs mt-1">{errors.profession.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/90">Company Name</label>
                      <input 
                        {...register("company", { required: "Company name is required" })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="e.g. Google / Microsoft"
                      />
                      {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Session Preferences & Available Window</h3>
                    <p className="text-white/60 text-xs sm:text-sm">
                      Please select your available session window for Sunday, 11th October 2026. Mentorship takes place in LHC Small Cabins across fixed 15-minute slots.
                    </p>
                  </div>

                  {/* Window Cards Selection */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-white/90 block">Select Slot Window</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {MENTOR_WINDOW_OPTIONS.map((win) => {
                        const isSelected = (formData.time_window || 'morning') === win.id;
                        return (
                          <div
                            key={win.id}
                            onClick={() => setValue("time_window", win.id)}
                            className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between select-none ${
                              isSelected
                                ? 'bg-accent/15 border-accent shadow-[0_0_20px_rgba(211,47,47,0.3)] ring-1 ring-accent'
                                : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/[0.08]'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                                isSelected ? 'bg-accent text-white' : 'bg-white/10 text-white/60'
                              }`}>
                                {win.id === 'morning' && <Sun size={18} />}
                                {win.id === 'afternoon' && <Sunset size={18} />}
                                {win.id === 'both' && <Calendar size={18} />}
                              </div>
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                isSelected ? 'border-accent bg-accent text-white' : 'border-white/20'
                              }`}>
                                {isSelected && <Check size={12} />}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-bold text-white mb-1">{win.title}</h4>
                              <p className="text-xs text-accent font-semibold">{win.time}</p>
                              <p className="text-[11px] text-white/50 mt-1">{win.durationText}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {errors.time_window && <p className="text-red-400 text-xs mt-1">{errors.time_window.message}</p>}
                  </div>

                  {/* Real-time schedule preview badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-between flex-wrap gap-3 mt-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/20 rounded-lg text-accent">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-white/60">Selected Mentorship Window</p>
                        <p className="text-sm font-semibold text-white">
                          {selectedWindow?.title || 'Morning Window'} ({selectedWindow?.time || '10:00 AM – 01:00 PM'})
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 font-medium">
                        Fixed: 15-Min Slots • {selectedWindow?.slotsCount || 12} Total Slots
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Review Information</h3>
                    <button 
                      type="button" 
                      onClick={() => setCurrentStep(1)}
                      className="text-accent text-sm hover:underline cursor-pointer"
                    >
                      Edit All
                    </button>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
                    {/* Personal */}
                    <div>
                      <h4 className="text-white/50 text-xs uppercase tracking-wider mb-3 font-semibold">Personal Information</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Full Name</span>
                          <span className="text-white/90 font-medium">{formData.name || '-'}</span>
                        </div>
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Mobile Number</span>
                          <span className="text-white/90 font-medium">{formData.mobile || '-'}</span>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="text-white/40 text-xs block mb-1">Email Address</span>
                          <span className="text-white/90 font-medium">{formData.email || '-'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Academic & Professional */}
                    <div>
                      <h4 className="text-white/50 text-xs uppercase tracking-wider mb-3 font-semibold">Academic & Professional</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Graduation Year</span>
                          <span className="text-white/90 font-medium">{formData.graduation_year || '-'}</span>
                        </div>
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Department</span>
                          <span className="text-white/90 font-medium">{formData.department || '-'}</span>
                        </div>
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Profession</span>
                          <span className="text-white/90 font-medium">{formData.profession || '-'}</span>
                        </div>
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Company Name</span>
                          <span className="text-white/90 font-medium">{formData.company || '-'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Preferences & Slot Window */}
                    <div>
                      <h4 className="text-white/50 text-xs uppercase tracking-wider mb-3 font-semibold">Session Preferences & Slots</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Slot Window</span>
                          <span className="text-white/90 font-medium">
                            {selectedWindow?.title || 'Morning Window'}
                          </span>
                        </div>
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Time Window</span>
                          <span className="text-white/90 font-medium text-accent">{selectedWindow?.time}</span>
                        </div>
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Slot Structure</span>
                          <span className="text-white/90 font-medium">{selectedWindow?.slotsCount || 12} Slots (15 min each)</span>
                        </div>
                      </div>

                      {/* Highlighted End Time & Total Window Card */}
                      <div className="mt-5 p-4 rounded-xl bg-accent/15 border border-accent/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-accent font-semibold block mb-0.5">
                            Venue & Date
                          </span>
                          <span className="text-base font-bold text-white">
                            Sunday, 11th Oct 2026 • LHC Small Cabins
                          </span>
                        </div>
                        <div className="sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-white/10">
                          <span className="text-xs text-white/50 block">Expected Impact</span>
                          <span className="text-sm font-semibold text-white/90">
                            ~{(selectedWindow?.slotsCount || 12) * 2}–{(selectedWindow?.slotsCount || 12) * 3} Students Mentored
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-10 flex items-center justify-between pt-6 border-t border-white/10">
              <button
                key="btn-back"
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 1 || isSubmitting}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors cursor-pointer ${
                  currentStep === 1 
                    ? 'text-white/20 cursor-not-allowed' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <ArrowLeft size={18} /> Back
              </button>
              
              {currentStep < 4 ? (
                <button
                  key="btn-next"
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(211,47,47,0.3)] cursor-pointer"
                >
                  Next <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  key="btn-submit"
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(211,47,47,0.3)] disabled:opacity-70 disabled:cursor-wait cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Confirm & Register <Check size={18} />
                    </>
                  )}
                </button>
              )}
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default RegisterMentor;
