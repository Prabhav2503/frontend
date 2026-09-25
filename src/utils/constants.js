export const EVENT_DETAILS = {
  name: 'Alumni-Student Mentorship Programme 2026-27',
  academicYear: 'AY 2026-27',
  date: 'Sunday, 11th October 2026',
  dateIso: '2026-10-11',
  venue: 'LHC (Small Cabins), IIT Delhi',
  officeLocation: 'Endowment Fund Office, IIT Delhi, Hauz Khas, New Delhi – 110016',
  organizers: 'Office of Alumni Relations & IIT Delhi Endowment Management Foundation',
  motto: 'Alumni Relations IIT Delhi — Your home, forever.',
  contacts: [
    { name: 'Tanisha', phone: '+91 81301 90506', rawPhone: '8130190506' },
    { name: 'Nandani', phone: '+91 80001 33940', rawPhone: '8000133940' },
  ],
  email: 'student.coordinator@alumni.iitd.ac.in',
  targetAudience: '1st to 4th Year Undergraduates (Career, Internship & Placement Guidance)',
  expectedAttendees: '250–300 Students',
  format: 'Focused 2/3-on-1 discussion format (up to 9 students per alumni)',
  interactionRate: '4 per hour (15-minute slots)',
  timeWindows: [
    { value: 'morning', label: 'Morning Window (10:00 AM – 01:00 PM)', startTime: '10:00', endTime: '13:00' },
    { value: 'afternoon', label: 'Afternoon Window (02:00 PM – 05:00 PM)', startTime: '14:00', endTime: '17:00' },
    { value: 'both', label: 'Both Windows (10:00 AM – 01:00 PM & 02:00 PM – 05:00 PM)', startTime: '10:00', endTime: '17:00' },
  ],
  links: {
    instagram: 'https://www.instagram.com/iitdelhialumnirelations/',
    linkedin: 'https://www.linkedin.com/company/iitdalumni/posts/?feedView=all',
    website: 'https://alumni.iitd.ac.in/',
  }
};

export const DEPARTMENTS = [
  'Computer Science & Engineering',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Chemical Engineering',
  'Mathematics & Scientific Computing',
  'Physics / Engineering Physics',
  'Textile and Fibre Engineering',
  'Biochemical Engineering & Biotechnology',
  'Materials Science & Engineering',
  'Design',
  'Others'
];

export const STUDENT_YEARS = [
  '1st / 2nd Year (Career & Internship Guidance)',
  '3rd Year (Internship & Career Trajectory)',
  '4th Year (Placement & Higher Studies)'
];

export const HOSTELS = [
  'Nilgiri',
  'Karakoram',
  'Aravali',
  'Jwalamukhi',
  'Kumaon',
  'Vindhyachal',
  'Zanskar',
  'Shivalik',
  'Girnar',
  'Udaigiri',
  'Himadri',
  'Kailash',
  'Dronagiri',
  'Saptagiri',
  'Nalanda',
  'Day Scholar',
  'Others'
];

export const FIXED_SLOT_DURATION = 15; // 15-minute fixed slots

export const MENTOR_WINDOW_OPTIONS = [
  {
    id: 'morning',
    title: 'Morning Window',
    time: '10:00 AM – 01:00 PM',
    rawStart: '10:00',
    rawEnd: '13:00',
    slotsCount: 12,
    durationText: '3 Hours (12 fixed slots × 15 min)',
    icon: 'Sun'
  },
  {
    id: 'afternoon',
    title: 'Afternoon Window',
    time: '02:00 PM – 05:00 PM',
    rawStart: '14:00',
    rawEnd: '17:00',
    slotsCount: 12,
    durationText: '3 Hours (12 fixed slots × 15 min)',
    icon: 'Sunset'
  },
  {
    id: 'both',
    title: 'Both Windows (Full Day)',
    time: '10:00 AM – 01:00 PM & 02:00 PM – 05:00 PM',
    rawStart: '10:00',
    rawEnd: '17:00',
    slotsCount: 24,
    durationText: '6 Hours (24 fixed slots × 15 min)',
    icon: 'Calendar'
  }
];

export const TIME_WINDOW_OPTIONS = [
  { value: '10:00 - 13:00', label: 'Morning Slot (10:00 AM – 01:00 PM)' },
  { value: '14:00 - 17:00', label: 'Afternoon Slot (02:00 PM – 05:00 PM)' },
  { value: '10:00 - 17:00', label: 'Both Slots (10:00 AM – 01:00 PM & 02:00 PM – 05:00 PM)' }
];

// 15-minute slot intervals for Student Google Calendar-style selection
export const STUDENT_CALENDAR_SLOTS = {
  morning: [
    { id: 'm-1', startTime: '10:00', endTime: '10:15', label: '10:00 AM – 10:15 AM', status: 'available', spotsLeft: 8 },
    { id: 'm-2', startTime: '10:15', endTime: '10:30', label: '10:15 AM – 10:30 AM', status: 'available', spotsLeft: 6 },
    { id: 'm-3', startTime: '10:30', endTime: '10:45', label: '10:30 AM – 10:45 AM', status: 'filling_fast', spotsLeft: 3 },
    { id: 'm-4', startTime: '10:45', endTime: '11:00', label: '10:45 AM – 11:00 AM', status: 'available', spotsLeft: 7 },
    { id: 'm-5', startTime: '11:00', endTime: '11:15', label: '11:00 AM – 11:15 AM', status: 'available', spotsLeft: 9 },
    { id: 'm-6', startTime: '11:15', endTime: '11:30', label: '11:15 AM – 11:30 AM', status: 'filling_fast', spotsLeft: 2 },
    { id: 'm-7', startTime: '11:30', endTime: '11:45', label: '11:30 AM – 11:45 AM', status: 'available', spotsLeft: 5 },
    { id: 'm-8', startTime: '11:45', endTime: '12:00', label: '11:45 AM – 12:00 PM', status: 'available', spotsLeft: 8 },
    { id: 'm-9', startTime: '12:00', endTime: '12:15', label: '12:00 PM – 12:15 PM', status: 'available', spotsLeft: 6 },
    { id: 'm-10', startTime: '12:15', endTime: '12:30', label: '12:15 PM – 12:30 PM', status: 'filling_fast', spotsLeft: 4 },
    { id: 'm-11', startTime: '12:30', endTime: '12:45', label: '12:30 PM – 12:45 PM', status: 'available', spotsLeft: 7 },
    { id: 'm-12', startTime: '12:45', endTime: '13:00', label: '12:45 PM – 01:00 PM', status: 'available', spotsLeft: 9 },
  ],
  afternoon: [
    { id: 'a-1', startTime: '14:00', endTime: '14:15', label: '02:00 PM – 02:15 PM', status: 'available', spotsLeft: 9 },
    { id: 'a-2', startTime: '14:15', endTime: '14:30', label: '02:15 PM – 02:30 PM', status: 'available', spotsLeft: 8 },
    { id: 'a-3', startTime: '14:30', endTime: '14:45', label: '02:30 PM – 02:45 PM', status: 'filling_fast', spotsLeft: 3 },
    { id: 'a-4', startTime: '14:45', endTime: '15:00', label: '02:45 PM – 03:00 PM', status: 'available', spotsLeft: 6 },
    { id: 'a-5', startTime: '15:00', endTime: '15:15', label: '03:00 PM – 03:15 PM', status: 'available', spotsLeft: 8 },
    { id: 'a-6', startTime: '15:15', endTime: '15:30', label: '03:15 PM – 03:30 PM', status: 'filling_fast', spotsLeft: 2 },
    { id: 'a-7', startTime: '15:30', endTime: '15:45', label: '03:30 PM – 03:45 PM', status: 'available', spotsLeft: 7 },
    { id: 'a-8', startTime: '15:45', endTime: '16:00', label: '03:45 PM – 04:00 PM', status: 'available', spotsLeft: 9 },
    { id: 'a-9', startTime: '16:00', endTime: '16:15', label: '04:00 PM – 04:15 PM', status: 'available', spotsLeft: 6 },
    { id: 'a-10', startTime: '16:15', endTime: '16:30', label: '04:15 PM – 04:30 PM', status: 'filling_fast', spotsLeft: 3 },
    { id: 'a-11', startTime: '16:30', endTime: '16:45', label: '04:30 PM – 04:45 PM', status: 'available', spotsLeft: 8 },
    { id: 'a-12', startTime: '16:45', endTime: '17:00', label: '04:45 PM – 05:00 PM', status: 'available', spotsLeft: 10 },
  ]
};

export const SLOT_OPTIONS = [1, 2, 3, 4, 5, 6, 9];

export const DURATION_OPTIONS = [
  { value: 15, label: '15 Minutes (4 interactions / hr)' },
  { value: 20, label: '20 Minutes (3 interactions / hr)' },
  { value: 30, label: '30 Minutes (2 interactions / hr)' },
  { value: 45, label: '45 Minutes' },
  { value: 60, label: '60 Minutes (1 Hour)' }
];
