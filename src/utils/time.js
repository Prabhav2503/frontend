/**
 * Formats 24-hour time string ("HH:MM") to 12-hour format ("h:mm A")
 */
export const formatTime12Hour = (timeStr) => {
  if (!timeStr) return '';
  const [hoursStr, minutesStr] = timeStr.split(':');
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);
  if (isNaN(hours) || isNaN(minutes)) return timeStr;

  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;
  const displayMin = minutes.toString().padStart(2, '0');
  return `${displayHour}:${displayMin} ${period}`;
};

/**
 * Calculates end time given start time ("HH:MM"), number of slots, and duration per slot in minutes
 */
export const calculateEndTime = (startTime, numberOfSlots, slotDuration) => {
  if (!startTime) return 'N/A';
  const slots = parseInt(numberOfSlots, 10) || 0;
  const duration = parseInt(slotDuration, 10) || 0;
  const totalMinutesToAdd = slots * duration;

  if (totalMinutesToAdd === 0) return formatTime12Hour(startTime) || startTime;

  const [hoursStr, minutesStr] = startTime.split(':');
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  if (isNaN(hours) || isNaN(minutes)) return startTime;

  const totalMinutes = hours * 60 + minutes + totalMinutesToAdd;
  const endHours = Math.floor(totalMinutes / 60) % 24;
  const endMinutes = totalMinutes % 60;

  const end24 = `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
  const end12 = formatTime12Hour(end24);

  return `${end24} (${end12})`;
};

/**
 * Formats minutes into human-readable duration (e.g., 90 -> "1 hr 30 mins")
 */
export const formatDuration = (totalMinutes) => {
  const mins = parseInt(totalMinutes, 10) || 0;
  if (mins < 60) return `${mins} mins`;
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  return remainingMins > 0 ? `${hours} hr ${remainingMins} mins` : `${hours} hr${hours > 1 ? 's' : ''}`;
};
