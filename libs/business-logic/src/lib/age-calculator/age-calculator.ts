import {differenceInCalendarYears} from 'date-fns';

/**
 * Calculates the current age for the specified birth date.
 */
export function calculateAgeFromBirthdate(dateOfBirth: Date): number {
  const now = new Date();
  const age = differenceInCalendarYears(now, dateOfBirth);
  return age;
}
