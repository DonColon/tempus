import { toDate } from './basic';
import { differenceInDays, differenceInWeeks } from './difference';

/**
 * Calculates the number of days that passed since start of the year.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {number} the number of days
 *
 * @example
 * import { getDayOfYear } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * getDayOfYear(new Date(2020, 10, 18, 15, 30));
 * // => output: 323
 */
export function getDayOfYear(value) {
    const date = toDate(value);
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    return Math.floor(differenceInDays(date, startOfYear)) + 1;
}

/**
 * Calculates the number of weeks that passed since start of the year.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {number} the number of weeks
 *
 * @example
 * import { getWeekOfYear } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * getWeekOfYear(new Date(2020, 10, 18, 15, 30));
 * // => output: 47
 */
export function getWeekOfYear(value) {
    const date = toDate(value);
    const startOfYear = new Date(date.getFullYear(), 0, 1);

    startOfYear.setDate(startOfYear.getDate() + (1 - (startOfYear.getDay() % 7)));
    return Math.floor(differenceInWeeks(date, startOfYear)) + 1;
}

/**
 * Calculates the number of quarters that passed since start of the year.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {number} the number of quarters
 *
 * @example
 * import { getQuarterOfYear } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * getQuarterOfYear(new Date(2020, 10, 18, 15, 30));
 * // => output: 4
 */
export function getQuarterOfYear(value) {
    const date = toDate(value);
    return Math.floor(date.getMonth() / 3) + 1;
}

/**
 * Checks if the specified date is in a leap year.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is in a leap year
 *
 * @example
 * import { isLeapYear } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * isLeapYear(new Date(2020, 10, 18, 15, 30));
 * // => output: true
 */
export function isLeapYear(value) {
    const date = toDate(value);
    const year = date.getFullYear();
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Checks if the specified date is on a monday.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is on a monday
 *
 * @example
 * import { isMonday } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * isMonday(new Date(2020, 10, 18, 15, 30));
 * // => output: false
 */
export function isMonday(value) {
    const date = toDate(value);
    return date.getDay() === 1;
}

/**
 * Checks if the specified date is on a tuesday.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is on a tuesday
 *
 * @example
 * import { isTuesday } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * isTuesday(new Date(2020, 10, 18, 15, 30));
 * // => output: false
 */
export function isTuesday(value) {
    const date = toDate(value);
    return date.getDay() === 2;
}

/**
 * Checks if the specified date is on a wednesday.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is on a wednesday
 *
 * @example
 * import { isWednesday } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * isWednesday(new Date(2020, 10, 18, 15, 30));
 * // => output: false
 */
export function isWednesday(value) {
    const date = toDate(value);
    return date.getDay() === 3;
}

/**
 * Checks if the specified date is on a thursday.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is on a thursday
 *
 * @example
 * import { isThursday } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * isThursday(new Date(2020, 10, 18, 15, 30));
 * // => output: true
 */
export function isThursday(value) {
    const date = toDate(value);
    return date.getDay() === 4;
}

/**
 * Checks if the specified date is on a friday.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is on a friday
 *
 * @example
 * import { isFriday } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * isFriday(new Date(2020, 10, 18, 15, 30));
 * // => output: false
 */
export function isFriday(value) {
    const date = toDate(value);
    return date.getDay() === 5;
}

/**
 * Checks if the specified date is on a saturday.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is on a saturday
 *
 * @example
 * import { isSaturday } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * isSaturday(new Date(2020, 10, 18, 15, 30));
 * // => output: false
 */
export function isSaturday(value) {
    const date = toDate(value);
    return date.getDay() === 6;
}

/**
 * Checks if the specified date is on a sunday.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is on a sunday
 *
 * @example
 * import { isSunday } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * isSunday(new Date(2020, 10, 18, 15, 30));
 * // => output: false
 */
export function isSunday(value) {
    const date = toDate(value);
    return date.getDay() === 0;
}
