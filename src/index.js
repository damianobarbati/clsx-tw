import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes without conflicts.
 *
 * @param {...import('clsx').ClassValue} inputs
 * @returns {string}
 */
const cx = (...inputs) => {
  return twMerge(clsx(inputs));
};

export default cx;
