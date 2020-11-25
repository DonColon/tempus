import { toDate } from './basic';
import { addDays } from './add';
import { subtractDays } from './subtract';
import { differenceInQuarters, differenceInWeeks } from './difference';

/**
 * Selects the minimum date in an array of dates.
 * @param {Date} values - an array of date objects
 *
 * @returns {Date} the minimum date object
 *
 * @example
 * import { min } from 'tempus';
 *
 * const dates = [
 *     new Date(2020, 0, 30, 15, 30, 45),
 *     new Date(2020, 5, 25, 15, 30, 45),
 * ];
 *
 * min(dates);
 * // => output: 2020-01-30 15:30:45
 */
export function min(values) {
    return new Date(Math.min.apply(null, values));
}

/**
 * Selects the maximum date in an array of dates.
 * @param {Date} values - an array of date objects
 *
 * @returns {Date} the maximum date object
 *
 * @example
 * import { max } from 'tempus';
 *
 * const dates = [
 *     new Date(2020, 0, 30, 15, 30, 45),
 *     new Date(2020, 5, 25, 15, 30, 45),
 * ];
 *
 * max(dates);
 * // => output: 2020-06-05 15:30:45
 */
export function max(values) {
    return new Date(Math.max.apply(null, values));
}

/**
 * Checks if two date objects are equal.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the dates are equal
 *
 * @example
 * import { isEqual } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30, 45);
 * const other = new Date(2020, 10, 18, 15, 30, 45);
 *
 * isEqual(value, other);
 * // => output: true
 */
export function isEqual(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    return valueDate.getTime() === otherDate.getTime();
}

/**
 * Checks if two date objects have the same amount of seconds.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the dates have the same amount of seconds
 *
 * @example
 * import { isSameSecond } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30, 45);
 * const other = new Date(2020, 10, 18, 15, 30, 45);
 *
 * isSameSecond(value, other);
 * // => output: true
 */
export function isSameSecond(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueSeconds = valueDate.getSeconds();
    const otherSeconds = otherDate.getSeconds();

    return valueSeconds === otherSeconds;
}

/**
 * Checks if two date objects have the same amount of minutes.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the dates have the same amount of minutes
 *
 * @example
 * import { isSameMinute } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30, 45);
 * const other = new Date(2020, 10, 18, 15, 30, 45);
 *
 * isSameMinute(value, other);
 * // => output: true
 */
export function isSameMinute(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueMinutes = valueDate.getMinutes();
    const otherMinutes = otherDate.getMinutes();

    return valueMinutes === otherMinutes;
}

/**
 * Checks if two date objects have the same amount of hours.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the dates have the same amount of hours
 *
 * @example
 * import { isSameHour } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30, 45);
 * const other = new Date(2020, 10, 18, 15, 30, 45);
 *
 * isSameHour(value, other);
 * // => output: true
 */
export function isSameHour(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueHours = valueDate.getHours();
    const otherHours = otherDate.getHours();

    return valueHours === otherHours;
}

/**
 * Checks if two date objects have the same amount of days.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the dates have the same amount of days
 *
 * @example
 * import { isSameDay } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30, 45);
 * const other = new Date(2020, 10, 18, 15, 30, 45);
 *
 * isSameDay(value, other);
 * // => output: true
 */
export function isSameDay(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueDay = valueDate.getDate();
    const otherDay = otherDate.getDate();

    return valueDay === otherDay;
}

/**
 * Checks if two date objects have the same weekday.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the dates have the same amount of weekday
 *
 * @example
 * import { isSameWeekday } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30, 45);
 * const other = new Date(2020, 10, 18, 15, 30, 45);
 *
 * isSameWeekday(value, other);
 * // => output: true
 */
export function isSameWeekday(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueWeekday = valueDate.getDay();
    const otherWeekday = otherDate.getDay();

    return valueWeekday === otherWeekday;
}

/**
 * Checks if two date objects are in the same week.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the dates are in the same week
 *
 * @example
 * import { isSameWeek } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30, 45);
 * const other = new Date(2020, 10, 18, 15, 30, 45);
 *
 * isSameWeek(value, other);
 * // => output: true
 */
export function isSameWeek(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const weeks = differenceInWeeks(valueDate, otherDate);
    return weeks === 0;
}

/**
 * Checks if two date objects are in the same month.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the dates are in the same month
 *
 * @example
 * import { isSameMonth } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30, 45);
 * const other = new Date(2020, 10, 18, 15, 30, 45);
 *
 * isSameMonth(value, other);
 * // => output: true
 */
export function isSameMonth(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueMonth = valueDate.getMonth();
    const otherMonth = otherDate.getMonth();

    return valueMonth === otherMonth;
}

/**
 * Checks if two date objects are in the same quarter.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the dates are in the same quarter
 *
 * @example
 * import { isSameQuarter } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30, 45);
 * const other = new Date(2020, 10, 18, 15, 30, 45);
 *
 * isSameQuarter(value, other);
 * // => output: true
 */
export function isSameQuarter(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const quarters = differenceInQuarters(valueDate, otherDate);
    return quarters === 0;
}

/**
 * Checks if two date objects are in the same year.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the dates are in the same year
 *
 * @example
 * import { isSameYear } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30, 45);
 * const other = new Date(2020, 10, 18, 15, 30, 45);
 *
 * isSameYear(value, other);
 * // => output: true
 */
export function isSameYear(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueYear = valueDate.getFullYear();
    const otherYear = otherDate.getFullYear();

    return valueYear === otherYear;
}

/**
 * Checks if the specified date has the same amount of seconds as the current date.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date has the same amount of seconds
 *
 * @example
 * import { isCurrentSecond } from 'tempus';
 *
 * isCurrentSecond(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isCurrentSecond(value) {
    return isSameSecond(value, Date.now());
}

/**
 * Checks if the specified date has the same amount of minutes as the current date.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date has the same amount of minutes
 *
 * @example
 * import { isCurrentMinute } from 'tempus';
 *
 * isCurrentMinute(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isCurrentMinute(value) {
    return isSameMinute(value, Date.now());
}

/**
 * Checks if the specified date has the same amount of hours as the current date.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date has the same amount of hours
 *
 * @example
 * import { isCurrentHour } from 'tempus';
 *
 * isCurrentHour(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isCurrentHour(value) {
    return isSameHour(value, Date.now());
}

/**
 * Checks if the specified date has the same amount of days as the current date.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date has the same amount of days
 *
 * @example
 * import { isCurrentDay } from 'tempus';
 *
 * isCurrentDay(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isCurrentDay(value) {
    return isSameDay(value, Date.now());
}

/**
 * Checks if the specified date has the same weekday as the current date.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date has the same weekday
 *
 * @example
 * import { isCurrentWeekday } from 'tempus';
 *
 * isCurrentWeekday(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isCurrentWeekday(value) {
    return isSameWeekday(value, Date.now());
}

/**
 * Checks if the specified date is in same week as the current date.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is in same week
 *
 * @example
 * import { isCurrentWeek } from 'tempus';
 *
 * isCurrentWeek(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isCurrentWeek(value) {
    return isSameWeek(value, Date.now());
}

/**
 * Checks if the specified date is in same month as the current date.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is in same month
 *
 * @example
 * import { isCurrentMonth } from 'tempus';
 *
 * isCurrentMonth(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isCurrentMonth(value) {
    return isSameMonth(value, Date.now());
}

/**
 * Checks if the specified date is in same quarter as the current date.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is in same quarter
 *
 * @example
 * import { isCurrentQuarter } from 'tempus';
 *
 * isCurrentQuarter(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isCurrentQuarter(value) {
    return isSameQuarter(value, Date.now());
}

/**
 * Checks if the specified date is in same year as the current date.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is in same year
 *
 * @example
 * import { isCurrentYear } from 'tempus';
 *
 * isCurrentYear(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isCurrentYear(value) {
    return isSameYear(value, Date.now());
}

/**
 * Checks if the first date object is before the second date object.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the first date is before second date
 *
 * @example
 * import { isBefore } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30, 45);
 * const other = new Date(2019, 11, 6, 16, 35, 50);
 *
 * isBefore(value, other);
 * // => output: false
 */
export function isBefore(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    return valueDate < otherDate;
}

/**
 * Checks if the specified date is in the past.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is in the past
 *
 * @example
 * import { isPast } from 'tempus';
 *
 * isPast(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isPast(value) {
    return isBefore(value, Date.now());
}

/**
 * Checks if the specified date is yesterday.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is yesterday
 *
 * @example
 * import { isYesterday } from 'tempus';
 *
 * isYesterday(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isYesterday(value) {
    return isSameDay(value, subtractDays(Date.now(), 1));
}

/**
 * Checks if the first date object is after the second date object.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Date | number} other - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the first date is after second date
 *
 * @example
 * import { isAfter } from 'tempus';
 *
 * const value = new Date(2020, 10, 18, 15, 30, 45);
 * const other = new Date(2019, 11, 6, 16, 35, 50);
 *
 * isAfter(value, other);
 * // => output: true
 */
export function isAfter(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    return valueDate > otherDate;
}

/**
 * Checks if the specified date is in the future.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is in the future
 *
 * @example
 * import { isFuture } from 'tempus';
 *
 * isFuture(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isFuture(value) {
    return isAfter(value, Date.now());
}

/**
 * Checks if the specified date is tomorrow.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 *
 * @returns {boolean} true if the date is tomorrow
 *
 * @example
 * import { isTomorrow } from 'tempus';
 *
 * isTomorrow(new Date(2020, 10, 18, 15, 30, 45));
 */
export function isTomorrow(value) {
    return isSameDay(value, addDays(Date.now(), 1));
}

/**
 * An interval
 * @typedef {Object} Interval
 * @property {Date} start - the start of the interval
 * @property {Date} end - the end of the interval
 */

/**
 * Checks if the specified date is in the interval.
 * @param {Date | number} value - a date object or a timestamp in milliseconds
 * @param {Interval} interval - the {@link Interval} to ckeck
 *
 * @returns {boolean} true if the date is in the interval
 *
 * @example
 * import { isBetween } from 'tempus';
 *
 * isBetween(new Date(2020, 10, 18, 15, 30, 45), {
 *     start: new Date(2020, 10, 1),
 *     end: new Date(2020, 11, 1)
 * });
 * // => output: true
 */
export function isBetween(value, interval) {
    const { start, end } = interval;
    return value >= start && value <= end;
}
