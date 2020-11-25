import { toDate } from './basic';

import {
    addMilliseconds,
    addSeconds,
    addMinutes,
    addHours,
    addDays,
    addWeeks,
    addYears,

} from './add';

/**
 * Subtracts milliseconds from the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} milliseconds - the amount of milliseconds to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { subtractMilliseconds } from 'tempus';
 *
 * // => input: 1605654000000 ms
 * subtractMilliseconds(new Date(2020, 10, 18), 100);
 * // => output: 1605653999900 ms
 */
export function subtractMilliseconds(value, milliseconds) {
    return addMilliseconds(value, -milliseconds);
}

/**
 * Subtracts seconds from the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} seconds - the amount of seconds to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { subtractSeconds } from 'tempus';
 *
 * // => input: 1605653950000 ms
 * subtractSeconds(new Date(2020, 10, 18), 50);
 * // => output: 1605654050000 ms
 */
export function subtractSeconds(value, seconds) {
    return addSeconds(value, -seconds);
}

/**
 * Subtracts minutes from the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} minutes - the amount of minutes to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { subtractMinutes } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * subtractMinutes(new Date(2020, 10, 18, 15, 30), 50);
 * // => output: 2020-11-18 14:40:00
 */
export function subtractMinutes(value, minutes) {
    return addMinutes(value, -minutes);
}

/**
 * Subtracts hours from the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} hours - the amount of hours to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { subtractHours } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * subtractHours(new Date(2020, 10, 18, 15, 30), 3);
 * // => output: 2020-11-18 12:30:00
 */
export function subtractHours(value, hours) {
    return addHours(value, -hours);
}

/**
 * Subtracts days from the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} days - the amount of days to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { subtractDays } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * subtractDays(new Date(2020, 10, 18, 15, 30), 3);
 * // => output: 2020-11-15 15:30:00
 */
export function subtractDays(value, days) {
    return addDays(value, -days);
}

/**
 * Subtracts weeks from the date object and returns a new instance, so
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
 * subtractWeeks(new Date(2020, 10, 18, 15, 30), 1);
 * // => output: 2020-11-11 15:30:00
 */
export function subtractWeeks(value, weeks) {
    return addWeeks(value, -weeks);
}

/**
 * Subtracts months from the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} months - the amount of months to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { subtractMonths } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * subtractMonths(new Date(2020, 10, 18, 15, 30), 1);
 * // => output: 2020-10-18 15:30:00
 */
export function subtractMonths(value, months) {
    const date = toDate(value);

    const newDate = new Date(date.getTime());
    newDate.setMonth(newDate.getMonth() - months);

    while (newDate.getMonth() === date.getMonth()) {
        newDate.setDate(newDate.getDate() - 1);
    }

    return newDate;
}

/**
 * Subtracts quarters from the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} quarters - the amount of quarters to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { subtractQuarters } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * subtractQuarters(new Date(2020, 10, 18, 15, 30), 1);
 * // => output: 2020-08-18 15:30:00
 */
export function subtractQuarters(value, quarters) {
    const months = quarters * 3;
    return subtractMonths(value, months);
}

/**
 * Subtracts years from the date object and returns a new instance, so
 * the original object stays unchanged.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {number} years - the amount of years to add
 *
 * @returns {Date} the new calculated date
 *
 * @example
 * import { subtractYears } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * subtractYears(new Date(2020, 10, 18, 15, 30), 2);
 * // => output: 2022-02-18 15:30:00
 *
 */
export function subtractYears(value, years) {
    return addYears(value, -years);
}
