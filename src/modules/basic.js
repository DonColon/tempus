/**
 * Checks if an object is an instance of Date.
 * @param {*} value - the object to check
 *
 * @returns {boolean} true if the object is a date
 */
export function isDate(value) {
    return value instanceof Date;
}

/**
 * Converts any type to a date object. If the specified value is already a date, it returns just the value.
 * If the value is a number, it will be converted with Date(milliseconds) constuctor. If the value anything else,
 * a invalid date will be returned.
 * @param {*} value - the type to convert to a date
 *
 * @returns {Date} the converted date object
 *
 * @example
 * import { toDate } from 'tempus';
 *
 * // => input: 2020-11-18 15:30:00
 * toDate(new Date(2020, 10, 18, 15, 30));
 * // => output: 2020-11-18 15:30:00
 *
 * // => input: 1605709845060
 * toDate(1605709845060);
 * // => output: 2020-11-18 15:30:00
 *
 * // => input: "Hello World"
 * toDate("Hello World");
 * // => output: Date(NaN) => Invalid date
 */
export function toDate(value) {
    if (isDate(value)) {
        return value;
    }

    if (typeof value === 'number') {
        return new Date(value);
    }

    return new Date(NaN);
}
