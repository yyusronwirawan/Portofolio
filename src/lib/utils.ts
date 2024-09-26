import { type ClassValue, clsx } from 'clsx';
import {
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInYears,
  format,
  subHours,
  subYears,
} from 'date-fns';
import { twMerge } from 'tailwind-merge';

/**
 * @param inputs ClassValue[]
 * @returns string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * slice an array to 3 sections
 * ex: [1,2,3,4,5,6] -> [[1,2], [3,4], [5,6]]
 * @param items T[]
 * @returns T[][]
 */
export function sliceToThreeArrays<T>(items: T[]) {
  const itemsLength = items.length;
  const [a, b] = [Math.ceil(itemsLength / 3), Math.ceil(2 * itemsLength / 3)];

  return [
    items.slice(0, a),
    items.slice(a, b),
    items.slice(b, itemsLength),
  ];
}

/**
 * count months and years differences since now
 * @param from Date
 * @param to Date
 * @returns string
 */
export function getDiffMonths(from: Date, to: Date) {
  const diffYears = differenceInYears(to, from);
  const diffMonths = differenceInMonths(subYears(to, diffYears), from);

  const yearsResult = diffYears < 1 ? '' :
    diffYears > 1
      ? `${diffYears} Years, `
      : `${diffYears} Year, `;
  const monthsResult = diffMonths < 1 ? '' :
    diffMonths > 1
      ? `${diffMonths} Months`
      : `${diffMonths} Month`;

  return yearsResult + monthsResult;
}

/**
 * format date since today, else display dd/MM/yyyy, HH:mm
 * @param date
 * @returns string
 */
export function formatTimeSince(date: Date) {
  const diffHours = differenceInHours(new Date(), date);
  const diffMinutes = differenceInMinutes(new Date(), subHours(date, diffHours));

  if (diffHours === 0) {
    if (diffMinutes < 1) return 'Just now';
    return `${diffMinutes} minutes ago`;
  }

  if (diffHours < 24) {
    if (diffHours === 1) return 'An hour ago';
    return `${diffHours} hours ago`;
  }

  return format(date, 'dd/MM/yyyy, HH:mm');
};
