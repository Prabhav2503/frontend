import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const YearPicker = ({ value, onChange, error, placeholder = "Select Graduation Year" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const [decadeStart, setDecadeStart] = useState(() => {
    const initYear = parseInt(value, 10) || currentYear;
    return Math.floor(initYear / 12) * 12;
  });

  const pickerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const years = Array.from({ length: 12 }, (_, i) => decadeStart + i).filter(y => y <= currentYear + 1);

  const handleYearSelect = (year) => {
    onChange(year.toString());
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={pickerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-white/5 border rounded-xl py-3 px-4 text-left transition-all ${
          error ? 'border-red-500' : 'border-white/10 hover:border-white/20'
        } ${value ? 'text-white' : 'text-white/40'}`}
      >
        <span>{value ? `${value}` : placeholder}</span>
        <Calendar size={18} className="text-white/50" />
      </button>

      {isOpen && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-secondary border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
            <button
              type="button"
              onClick={() => setDecadeStart(prev => prev - 12)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm font-semibold text-white/90">
              {decadeStart} – {decadeStart + 11}
            </span>
            <button
              type="button"
              onClick={() => setDecadeStart(prev => prev + 12)}
              disabled={decadeStart + 12 > currentYear + 1}
              className="p-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Years Grid */}
          <div className="grid grid-cols-3 gap-2">
            {years.map((year) => {
              const isSelected = value === year.toString();
              const isCurrent = year === currentYear;
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => handleYearSelect(year)}
                  className={`py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-accent text-white shadow-[0_0_12px_rgba(211,47,47,0.5)]'
                      : isCurrent
                      ? 'bg-white/10 text-white font-bold border border-accent/40 hover:bg-white/20'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {year}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default YearPicker;
