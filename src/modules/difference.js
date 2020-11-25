import { toDate } from './basic';

function getQuarterOfYear(value) {
    const date = toDate(value);
    return Math.floor(date.getMonth() / 3) + 1;
}

/**
 * Calculates the difference between two date objects in milliseconds
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {number} the difference in milliseconds
 *
 * @example
 * import { differenceInMilliseconds } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30);
 * const other = new Date(2018, 3, 18, 20, 15, 0, 0);
 *
 * differenceInMilliseconds(value, other);
 * // => output: 81634545060ms
 */
export function differenceInMilliseconds(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    return Math.abs(valueDate.getTime() - otherDate.getTime());
}

/**
 * Calculates the difference between two date objects in seconds
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {number} the difference in seconds
 *
 * @example
 * import { differenceInSeconds } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30);
 * const other = new Date(2018, 3, 18, 20, 15, 0, 0);
 *
 * differenceInSeconds(value, other);
 * // => output: 81634545s
 */
export function differenceInSeconds(value, other) {
    const milliseconds = differenceInMilliseconds(value, other);
    return milliseconds / 1000;
}

/**
 * Calculates the difference between two date objects in minutes
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {number} the difference in minutes
 *
 * @example
 * import { differenceInMinutes } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30);
 * const other = new Date(2018, 3, 18, 20, 15, 0, 0);
 *
 * differenceInMinutes(value, other);
 * // => output: 1360576min
 */
export function differenceInMinutes(value, other) {
    const seconds = differenceInSeconds(value, other);
    return seconds / 60;
}

/**
 * Calculates the difference between two date objects in hours
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {number} the difference in hours
 *
 * @example
 * import { differenceInHours } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30);
 * const other = new Date(2018, 3, 18, 20, 15, 0, 0);
 *
 * differenceInHours(value, other);
 * // => output: 22676h
 */
export function differenceInHours(value, other) {
    const minutes = differenceInMinutes(value, other);
    return minutes / 60;
}

/**
 * Calculates the difference between two date objects in days
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {number} the difference in days
 *
 * @example
 * import { differenceInDays } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30);
 * const other = new Date(2018, 3, 18, 20, 15, 0, 0);
 *
 * differenceInDays(value, other);
 * // => output: 945d
 */
export function differenceInDays(value, other) {
    const hours = differenceInHours(value, other);
    return hours / 24;
}

/**
 * Calculates the difference between two date objects in weeks
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {number} the difference in weeks
 *
 * @example
 * import { differenceInWeeks } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30);
 * const other = new Date(2018, 3, 18, 20, 15, 0, 0);
 *
 * differenceInWeeks(value, other);
 * // => output: 135w
 */
export function differenceInWeeks(value, other) {
    const days = differenceInDays(value, other);
    return days / 7;
}

/**
 * Calculates the difference between two date objects in years
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {number} the difference in years
 *
 * @example
 * import { differenceInYears } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30);
 * const other = new Date(2018, 3, 18, 20, 15, 0, 0);
 *
 * differenceInYears(value, other);
 * // => output: 2y
 */
export function differenceInYears(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    return Math.abs(valueDate.getFullYear() - otherDate.getFullYear());
}

/**
 * Calculates the difference between two date objects in months
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {number} the difference in months
 *
 * @example
 * import { differenceInMonths } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30);
 * const other = new Date(2018, 3, 18, 20, 15, 0, 0);
 *
 * differenceInMonths(value, other);
 * // => output: 31m
 */
export function differenceInMonths(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const years = differenceInYears(valueDate, otherDate);
    const months = Math.abs(valueDate.getMonth() - otherDate.getMonth());
    return years * 12 + months;
}

/**
 * Calculates the difference between two date objects in quarters
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {number} the difference in quarters
 *
 * @example
 * import { differenceInQuarters } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30);
 * const other = new Date(2018, 3, 18, 20, 15, 0, 0);
 *
 * differenceInQuarters(value, other);
 * // => output: 10q
 */
export function differenceInQuarters(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const years = differenceInYears(valueDate, otherDate);
    const quarters = Math.abs(getQuarterOfYear(valueDate) - getQuarterOfYear(otherDate));
    return years * 4 + quarters;
}
