import React, { useState, useEffect } from 'react';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { 
  GripVertical, 
  User, 
  Building, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  ChevronUp, 
  ChevronDown, 
  Sparkles, 
  XCircle,
  CheckCircle2,
  Info
} from 'lucide-react';
import { MOCK_MENTORS } from '../utils/mockMentors';

const INITIAL_SLOTS = [
  { slotId: 'slot-1', mentorId: '' },
  { slotId: 'slot-2', mentorId: '' },
  { slotId: 'slot-3', mentorId: '' },
  { slotId: 'slot-4', mentorId: '' },
  { slotId: 'slot-5', mentorId: '' },
];

const MentorPreferenceSelector = ({ value = [], onChange }) => {
  const [slots, setSlots] = useState(() => {
    if (value && value.length > 0) {
      return Array.from({ length: 5 }, (_, i) => ({
        slotId: `slot-${i + 1}`,
        mentorId: value[i] || ''
      }));
    }
    return INITIAL_SLOTS;
  });

  const [activeSlotIndex, setActiveSlotIndex] = useState(0);

  // Sync with parent when slots order or mentor selection changes
  useEffect(() => {
    const selectedMentorIds = slots
      .map(s => s.mentorId)
      .filter(id => Boolean(id));
    
    onChange(selectedMentorIds);
  }, [slots, onChange]);

  const handleMentorChange = (slotId, newMentorId) => {
    setSlots(prev => prev.map(s => s.slotId === slotId ? { ...s, mentorId: newMentorId } : s));
    const targetIdx = slots.findIndex(s => s.slotId === slotId);
    if (targetIdx !== -1) {
      setActiveSlotIndex(targetIdx);
    }
  };

  const handleClearSlot = (e, slotId) => {
    e.stopPropagation();
    setSlots(prev => prev.map(s => s.slotId === slotId ? { ...s, mentorId: '' } : s));
  };

  const moveSlot = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= slots.length) return;
    const newSlots = [...slots];
    const [moved] = newSlots.splice(index, 1);
    newSlots.splice(targetIndex, 0, moved);
    setSlots(newSlots);
    setActiveSlotIndex(targetIndex);
  };

  // Get selected mentor IDs in other slots to prevent duplicate selections
  const getSelectedMentorIds = (currentSlotId) => {
    return slots
      .filter(s => s.slotId !== currentSlotId && s.mentorId)
      .map(s => s.mentorId);
  };

  // Currently focused mentor for the right side panel
  const activeSlot = slots[activeSlotIndex] || slots[0];
  const activeMentor = MOCK_MENTORS.find(m => m.id === activeSlot?.mentorId);

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Header instructions */}
      <div className="flex items-center justify-between flex-wrap gap-2 text-xs text-white/70 bg-white/5 p-3 sm:p-3.5 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-accent flex-shrink-0" />
          <span className="text-[11px] sm:text-xs">
            <strong>Drag & reorder</strong> the bars to rank your preferences (1 = highest priority).
          </span>
        </div>
        <span className="text-accent font-semibold text-[11px] sm:text-xs">
          {slots.filter(s => s.mentorId).length} / 5 Mentors Selected
        </span>
      </div>

      {/* Main Split-Box Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 bg-black/40 border border-white/10 rounded-2xl p-3.5 sm:p-5 lg:p-6 shadow-2xl backdrop-blur-md">
        
        {/* Left Half: 5 Draggable Preference Bars (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/50">
            <span>Priority Order</span>
            <span>Assign Mentor</span>
          </div>

          <Reorder.Group 
            axis="y" 
            values={slots} 
            onReorder={setSlots}
            className="space-y-2.5 sm:space-y-3"
          >
            {slots.map((slot, index) => {
              const selectedMentor = MOCK_MENTORS.find(m => m.id === slot.mentorId);
              const isFocused = activeSlotIndex === index;
              const disabledMentorIds = getSelectedMentorIds(slot.slotId);

              return (
                <Reorder.Item
                  key={slot.slotId}
                  value={slot}
                  whileDrag={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.5)" }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setActiveSlotIndex(index)}
                  className={`relative rounded-xl border transition-all duration-200 cursor-pointer select-none overflow-hidden ${
                    isFocused
                      ? 'bg-white/10 border-accent shadow-[0_0_15px_rgba(211,47,47,0.25)]'
                      : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                  }`}
                >
                  <div className="p-2.5 sm:p-3.5 flex items-center gap-2 sm:gap-3">
                    
                    {/* Drag Handle */}
                    <div 
                      className="cursor-grab active:cursor-grabbing text-white/40 hover:text-white transition-colors p-1"
                      title="Drag to reorder preference"
                    >
                      <GripVertical size={20} />
                    </div>

                    {/* Priority Badge */}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors ${
                      index === 0 
                        ? 'bg-accent text-white shadow-[0_0_10px_rgba(211,47,47,0.5)]'
                        : index === 1
                        ? 'bg-white/20 text-white'
                        : 'bg-white/10 text-white/70'
                    }`}>
                      #{index + 1}
                    </div>

                    {/* Selector & Mentor Preview */}
                    <div className="flex-1 min-w-0">
                      <select
                        value={slot.mentorId}
                        onChange={(e) => handleMentorChange(slot.slotId, e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full bg-secondary border border-white/10 rounded-lg py-2 px-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent appearance-none cursor-pointer transition-colors"
                      >
                        <option value="">-- Select Preference #{index + 1} Mentor --</option>
                        {MOCK_MENTORS.map((mentor) => (
                          <option 
                            key={mentor.id} 
                            value={mentor.id}
                            disabled={disabledMentorIds.includes(mentor.id)}
                          >
                            {mentor.name} • {mentor.company} ({mentor.position})
                            {disabledMentorIds.includes(mentor.id) ? ' (Selected in another rank)' : ''}
                          </option>
                        ))}
                      </select>

                      {/* Small metadata bar if mentor chosen */}
                      {selectedMentor && (
                        <div className="mt-1.5 flex items-center gap-2 text-xs text-white/60 truncate">
                          <span className="text-white font-medium truncate">{selectedMentor.name}</span>
                          <span>•</span>
                          <span className="text-accent/90 truncate">{selectedMentor.company}</span>
                          <span>•</span>
                          <span className="truncate">{selectedMentor.position}</span>
                        </div>
                      )}
                    </div>

                    {/* Action buttons (Clear / Move Up / Move Down) */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {slot.mentorId && (
                        <button
                          type="button"
                          onClick={(e) => handleClearSlot(e, slot.slotId)}
                          title="Clear this selection"
                          className="p-1 text-white/40 hover:text-red-400 transition-colors"
                        >
                          <XCircle size={16} />
                        </button>
                      )}
                      
                      <div className="flex flex-col">
                        <button
                          type="button"
                          disabled={index === 0}
                          onClick={(e) => { e.stopPropagation(); moveSlot(index, -1); }}
                          className="p-0.5 text-white/40 hover:text-white disabled:opacity-20 transition-colors"
                          title="Move up"
                        >
                          <ChevronUp size={14} />
                        </button>
                        <button
                          type="button"
                          disabled={index === slots.length - 1}
                          onClick={(e) => { e.stopPropagation(); moveSlot(index, 1); }}
                          className="p-0.5 text-white/40 hover:text-white disabled:opacity-20 transition-colors"
                          title="Move down"
                        >
                          <ChevronDown size={14} />
                        </button>
                      </div>
                    </div>

                  </div>
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
        </div>

        {/* Right Half: Selected Mentor Details Side Panel (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="pb-2 border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-white/50 mb-3 flex items-center justify-between">
            <span>Mentor Details</span>
            <span className="text-accent font-medium">Preference #{activeSlotIndex + 1}</span>
          </div>

          <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-center min-h-[320px]">
            <AnimatePresence mode="wait">
              {activeMentor ? (
                <motion.div
                  key={activeMentor.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  {/* Top profile banner */}
                  <div className="flex items-center gap-3.5">
                    <img 
                      src={activeMentor.avatar} 
                      alt={activeMentor.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-accent/60 shadow-lg flex-shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-base font-bold text-white leading-tight">{activeMentor.name}</h4>
                        <CheckCircle2 size={16} className="text-accent" />
                      </div>
                      <p className="text-xs text-accent font-medium mt-0.5">{activeMentor.position}</p>
                      <p className="text-xs text-white/70 flex items-center gap-1 mt-0.5">
                        <Building size={12} className="text-white/40" /> {activeMentor.company}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-white/10" />

                  {/* Academic & Professional specs */}
                  <div className="grid grid-cols-1 gap-2.5 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-white/50 flex items-center gap-1.5">
                        <GraduationCap size={14} className="text-accent" /> Graduation Year
                      </span>
                      <span className="text-white font-semibold">Class of {activeMentor.graduationYear}</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-white/50 flex items-center gap-1.5">
                        <Layers size={14} className="text-accent" /> Department
                      </span>
                      <span className="text-white font-medium text-right">{activeMentor.department}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-1 font-semibold">
                      Background
                    </span>
                    <p className="text-xs text-white/80 leading-relaxed bg-white/5 p-2.5 rounded-lg border border-white/5">
                      {activeMentor.bio}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-1.5 font-semibold">
                      Areas of Expertise
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeMentor.expertise.map((skill, i) => (
                        <span 
                          key={i}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-accent/15 border border-accent/30 text-white/90"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 px-4 space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 mx-auto flex items-center justify-center text-white/30">
                    <Info size={24} />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white/80">No Mentor Assigned</h5>
                    <p className="text-xs text-white/40 max-w-[220px] mx-auto mt-1">
                      Choose a mentor from the dropdown in Preference #{activeSlotIndex + 1} to inspect their full profile, company, and expertise.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MentorPreferenceSelector;
