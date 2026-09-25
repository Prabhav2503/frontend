import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Sun, 
  Sunset, 
  CheckCircle2, 
  Users, 
  Sparkles, 
  Info,
  ShieldCheck
} from 'lucide-react';
import { STUDENT_CALENDAR_SLOTS } from '../utils/constants';

const CalendarSlotPicker = ({ value, onChange, error }) => {
  // Current active window tab: 'morning' (10-1) or 'afternoon' (2-5)
  const [activeWindow, setActiveWindow] = useState(() => {
    if (value && value.window) return value.window;
    if (typeof value === 'string' && (value.startsWith('14') || value.includes('02:') || value.includes('PM'))) {
      return 'afternoon';
    }
    return 'morning';
  });

  const slots = STUDENT_CALENDAR_SLOTS[activeWindow] || [];

  const handleSelectSlot = (slot) => {
    const slotPayload = {
      window: activeWindow,
      slotId: slot.id,
      label: slot.label,
      startTime: slot.startTime,
      endTime: slot.endTime,
    };
    onChange(slotPayload);
  };

  const selectedSlotId = value?.slotId || (typeof value === 'string' ? value : '');
  const selectedLabel = value?.label || (typeof value === 'string' ? value : '');

  return (
    <div className="space-y-4">
      {/* Window Switcher Tabs (10 AM - 1 PM vs 2 PM - 5 PM) */}
      <div className="grid grid-cols-2 gap-3 p-1.5 bg-black/40 border border-white/10 rounded-2xl">
        <button
          type="button"
          onClick={() => setActiveWindow('morning')}
          className={`flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
            activeWindow === 'morning'
              ? 'bg-accent text-white shadow-[0_0_20px_rgba(211,47,47,0.4)] font-semibold'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <Sun size={16} className={activeWindow === 'morning' ? 'text-white' : 'text-amber-400'} />
          <div className="text-left leading-tight">
            <span className="block font-semibold">Morning Slot</span>
            <span className="text-[10px] sm:text-[11px] opacity-80">10:00 AM – 01:00 PM</span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveWindow('afternoon')}
          className={`flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
            activeWindow === 'afternoon'
              ? 'bg-accent text-white shadow-[0_0_20px_rgba(211,47,47,0.4)] font-semibold'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <Sunset size={16} className={activeWindow === 'afternoon' ? 'text-white' : 'text-orange-400'} />
          <div className="text-left leading-tight">
            <span className="block font-semibold">Afternoon Slot</span>
            <span className="text-[10px] sm:text-[11px] opacity-80">02:00 PM – 05:00 PM</span>
          </div>
        </button>
      </div>

      {/* 15-Minute Interactive Slots Calendar Grid */}
      <div className="bg-black/30 border border-white/10 rounded-2xl p-3.5 sm:p-5 backdrop-blur-md">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs text-white/50 font-medium">
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-accent" /> Available 15-Min Slots ({slots.length} Windows)
          </span>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Open
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Filling Fast
            </span>
          </div>
        </div>

        <motion.div 
          key={activeWindow}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3"
        >
          {slots.map((slot) => {
            const isSelected = selectedSlotId === slot.id || selectedLabel === slot.label || value?.startTime === slot.startTime;
            const isFillingFast = slot.status === 'filling_fast';

            return (
              <motion.button
                key={slot.id}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectSlot(slot)}
                className={`relative p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer select-none flex flex-col justify-between min-h-[70px] ${
                  isSelected
                    ? 'bg-accent/20 border-accent shadow-[0_0_18px_rgba(211,47,47,0.35)] ring-1 ring-accent'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-white/90'}`}>
                    {slot.startTime}
                  </span>
                  {isSelected ? (
                    <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                  ) : isFillingFast ? (
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)] flex-shrink-0" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-emerald-400/80 flex-shrink-0" />
                  )}
                </div>

                <div className="text-[10px] sm:text-[11px] text-white/50 truncate font-mono">
                  {slot.label.split(' – ')[0]} → {slot.label.split(' – ')[1]}
                </div>

                <div className="mt-1 flex items-center justify-between text-[10px]">
                  <span className={`font-medium ${
                    isSelected ? 'text-accent' : isFillingFast ? 'text-amber-400/90' : 'text-emerald-400/80'
                  }`}>
                    {isFillingFast ? '🔥 Filling Fast' : '● Available'}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Selected Slot Summary Badge */}
      <AnimatePresence>
        {value && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-3.5 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-between flex-wrap gap-2"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                <Clock size={16} />
              </div>
              <div>
                <span className="text-[11px] text-white/50 block">Your Reserved Slot</span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {value.label || (typeof value === 'string' ? value : 'Selected Slot')}
                </span>
              </div>
            </div>

            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent text-white shadow-sm">
              15-Min One-on-One / Small Group
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <p className="text-red-400 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default CalendarSlotPicker;
