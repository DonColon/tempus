import { toDate } from './basic';

/**
 * Adds milliseconds to the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} milliseconds - the amount of milliseconds to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { addMilliseconds } from 'tempus';
 *
 * // => input: 1605654000000 ms
 * addMilliseconds(new Date(2020, 10, 18), 100);
 * // => output: 1605654000100 ms
 */
export function addMilliseconds(value, milliseconds) {
    const date = toDate(value);
    const timestamp = date.getTime();
    return new Date(timestamp + milliseconds);
}

/**
 * Adds seconds to the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} seconds - the amount of seconds to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { addSeconds } from 'tempus';
 *
 * // => input: 1605654000000 ms
 * addSeconds(new Date(2020, 10, 18), 50);
 * // => output: 1605654050000 ms
 */
export function addSeconds(value, seconds) {
    const milliseconds = seconds * 1000;
    return addMilliseconds(value, milliseconds);
}

/**
 * Adds minutes to the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} minutes - the amount of minutes to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { addMinutes } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * addMinutes(new Date(2020, 10, 18, 15, 30), 50);
 * // => output: 2020-11-18 16:20:00
 */
export function addMinutes(value, minutes) {
    const seconds = minutes * 60;
    return addSeconds(value, seconds);
}

/**
 * Adds hours to the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} hours - the amount of hours to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { addHours } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * addHours(new Date(2020, 10, 18, 15, 30), 3);
 * // => output: 2020-11-18 18:30:00
 */
export function addHours(value, hours) {
    const minutes = hours * 60;
    return addMinutes(value, minutes);
}

/**
 * Adds days to the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} days - the amount of days to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { addDays } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * addDays(new Date(2020, 10, 18, 15, 30), 3);
 * // => output: 2020-11-21 15:30:00
 */
export function addDays(value, days) {
    const date = toDate(value);

    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + days);

    return newDate;
}

/**
 * Adds weeks to the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} weeks - the amount of weeks to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { addWeeks } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * addWeeks(new Date(2020, 10, 18, 15, 30), 1);
 * // => output: 2020-11-25 15:30:00
 */
export function addWeeks(value, weeks) {
    const days = weeks * 7;
    return addDays(value, days);
}

/**
 * Adds months to the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} months - the amount of months to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { addMonths } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * addMonths(new Date(2020, 10, 18, 15, 30), 1);
 * // => output: 2020-12-18 15:30:00
 */
export function addMonths(value, months) {
    const date = toDate(value);

    const newDate = new Date(date.getTime());
    newDate.setMonth(newDate.getMonth() + months);

    return newDate;
}

/**
 * Adds quarters to the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} quarters - the amount of quarters to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { addQuarters } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * addQuarters(new Date(2020, 10, 18, 15, 30), 1);
 * // => output: 2020-02-18 15:30:00
 */
export function addQuarters(value, quarters) {
    const months = quarters * 3;
    return addMonths(value, months);
}

/**
 * Adds years to the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} years - the amount of years to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { addYears } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * addYears(new Date(2020, 10, 18, 15, 30), 2);
 * // => output: 2022-02-18 15:30:00
 *
 */
export function addYears(value, years) {
    const date = toDate(value);

    const newDate = new Date(date.getTime());
    newDate.setFullYear(newDate.getFullYear() + years);

    return newDate;
}
