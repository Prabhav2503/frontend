import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Loader2, Sparkles, Building, GraduationCap, Clock } from 'lucide-react';
import { DEPARTMENTS, STUDENT_YEARS, HOSTELS } from '../utils/constants';
import { formatTime12Hour } from '../utils/time';
import { MOCK_MENTORS } from '../utils/mockMentors';
import MentorPreferenceSelector from '../components/MentorPreferenceSelector';
import CalendarSlotPicker from '../components/CalendarSlotPicker';

const steps = [
  { id: 1, name: 'Personal Info' },
  { id: 2, name: 'Academic Info' },
  { id: 3, name: 'Preferences' },
  { id: 4, name: 'Review' },
];

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, watch, trigger, control, formState: { errors } } = useForm({
    defaultValues: {
      selected_slot: {
        window: 'morning',
        slotId: 'm-1',
        label: '10:00 AM – 10:15 AM',
        startTime: '10:00',
        endTime: '10:15'
      },
      mentor_preferences: []
    }
  });
  const navigate = useNavigate();

  const formData = watch();

  const handleNext = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    let fieldsToValidate = [];
    if (currentStep === 1) fieldsToValidate = ['name', 'kerberos', 'mobile', 'email'];
    if (currentStep === 2) fieldsToValidate = ['year', 'department', 'hostel'];
    if (currentStep === 3) fieldsToValidate = ['selected_slot', 'mentor_preferences'];

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
      console.log('Submitting Student Registration:', {
        ...data,
        preferred_time: data.selected_slot?.startTime || '10:00',
        selected_slot_window: data.selected_slot?.window || 'morning',
        selected_slot_label: data.selected_slot?.label,
        mentor_preference_order: data.mentor_preferences // Array of selected mentor IDs in priority order
      });

      // Mock API Call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Real API Call placeholder
      // await fetch('http://localhost:5000/api/register/student', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });

      navigate('/success');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const orderedMentors = (formData.mentor_preferences || [])
    .map(id => MOCK_MENTORS.find(m => m.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-primary flex flex-col pt-6 sm:pt-10 pb-12 sm:pb-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6 sm:mb-10 text-sm sm:text-base">
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2 text-white">Mentee Registration</h2>
          <p className="text-white/60 text-xs sm:text-sm">Alumni-Student Mentorship Programme 2026-27 • Sunday, 11th October 2026 (LHC Small Cabins)</p>
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
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-medium text-white/90">Full Name</label>
                      <input 
                        {...register("name", { required: "Full name is required" })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/90">Kerberos ID</label>
                      <input 
                        {...register("kerberos", { required: "Kerberos ID is required" })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="e.g. cs1220000"
                      />
                      {errors.kerberos && <p className="text-red-400 text-xs mt-1">{errors.kerberos.message}</p>}
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
                        placeholder="entry@iitd.ac.in"
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
                  <h3 className="text-xl font-semibold mb-6">Academic Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/90">Current Year</label>
                      <select 
                        {...register("year", { required: "Current year is required" })}
                        className="w-full bg-secondary border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none"
                      >
                        <option value="">Select Year</option>
                        {STUDENT_YEARS.map((yr) => (
                          <option key={yr} value={yr}>{yr}</option>
                        ))}
                      </select>
                      {errors.year && <p className="text-red-400 text-xs mt-1">{errors.year.message}</p>}
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

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-white/90">Hostel</label>
                      <select 
                        {...register("hostel", { required: "Hostel is required" })}
                        className="w-full bg-secondary border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none"
                      >
                        <option value="">Select Hostel</option>
                        {HOSTELS.map((hostel) => (
                          <option key={hostel} value={hostel}>{hostel}</option>
                        ))}
                      </select>
                      {errors.hostel && <p className="text-red-400 text-xs mt-1">{errors.hostel.message}</p>}
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
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Slot Selection & Mentor Ranking</h3>
                    <p className="text-white/60 text-sm">
                      Choose your preferred 15-minute slot on Google Calendar format and rank up to 5 mentors in order of priority.
                    </p>
                  </div>
                  
                  {/* Google Calendar Style Slot Selection */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white flex items-center gap-2">
                      <Clock size={16} className="text-accent" /> Choose Mentorship Slot (15-Min Windows)
                    </label>

                    <Controller
                      name="selected_slot"
                      control={control}
                      rules={{ 
                        required: "Please select an available slot" 
                      }}
                      render={({ field, fieldState }) => (
                        <CalendarSlotPicker
                          value={field.value}
                          onChange={field.onChange}
                          error={fieldState.error?.message}
                        />
                      )}
                    />
                  </div>

                  {/* Mentor Preference Priority Ordering Component */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-semibold text-white flex items-center gap-2">
                        <Sparkles size={16} className="text-accent" /> Mentor Priority Ranking (Top 5)
                      </label>
                      <span className="text-xs text-white/40">Drag bars to adjust priority</span>
                    </div>

                    <Controller
                      name="mentor_preferences"
                      control={control}
                      rules={{ 
                        validate: (val) => (val && val.length > 0) || "Please select at least 1 mentor preference" 
                      }}
                      render={({ field }) => (
                        <MentorPreferenceSelector
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                    {errors.mentor_preferences && (
                      <p className="text-red-400 text-xs mt-1">{errors.mentor_preferences.message}</p>
                    )}
                  </div>
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
                          <span className="text-white/40 text-xs block mb-1">Kerberos ID</span>
                          <span className="text-white/90 font-medium">{formData.kerberos || '-'}</span>
                        </div>
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Mobile Number</span>
                          <span className="text-white/90 font-medium">{formData.mobile || '-'}</span>
                        </div>
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Email Address</span>
                          <span className="text-white/90 font-medium">{formData.email || '-'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Academic */}
                    <div>
                      <h4 className="text-white/50 text-xs uppercase tracking-wider mb-3 font-semibold">Academic Information</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Current Year & Track</span>
                          <span className="text-white/90 font-medium">{formData.year || '-'}</span>
                        </div>
                        <div>
                          <span className="text-white/40 text-xs block mb-1">Department</span>
                          <span className="text-white/90 font-medium">{formData.department || '-'}</span>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="text-white/40 text-xs block mb-1">Hostel</span>
                          <span className="text-white/90 font-medium">{formData.hostel || '-'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Schedule */}
                    <div>
                      <h4 className="text-white/50 text-xs uppercase tracking-wider mb-3 font-semibold">Reserved Mentorship Slot</h4>
                      <div className="p-3.5 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-lg bg-accent/20 text-accent">
                            <Clock size={18} />
                          </div>
                          <div>
                            <span className="text-white/50 text-xs block">Date & LHC Time Slot</span>
                            <span className="text-white font-bold text-sm sm:text-base">
                              {formData.selected_slot?.label || (typeof formData.selected_slot === 'string' ? formData.selected_slot : '10:00 AM – 10:15 AM')}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/90 font-medium">
                          Sunday, 11th Oct 2026
                        </span>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Ranked Mentor Preferences */}
                    <div>
                      <h4 className="text-white/50 text-xs uppercase tracking-wider mb-3 font-semibold">
                        Ranked Mentor Preferences ({orderedMentors.length})
                      </h4>
                      {orderedMentors.length > 0 ? (
                        <div className="space-y-2.5">
                          {orderedMentors.map((mentor, idx) => (
                            <div 
                              key={mentor.id}
                              className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between flex-wrap gap-2"
                            >
                              <div className="flex items-center gap-3">
                                <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${
                                  idx === 0 ? 'bg-accent text-white' : 'bg-white/10 text-white/70'
                                }`}>
                                  #{idx + 1}
                                </span>
                                <div>
                                  <span className="text-sm font-semibold text-white">{mentor.name}</span>
                                  <span className="text-xs text-white/50 block">
                                    {mentor.position} at <strong className="text-white/80">{mentor.company}</strong>
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs text-white/50 flex items-center gap-3">
                                <span>Class of {mentor.graduationYear}</span>
                                <span>•</span>
                                <span>{mentor.department}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-white/40 italic">No mentor preferences ranked.</p>
                      )}
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

export default Register;
