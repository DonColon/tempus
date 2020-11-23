import { toDate } from './basic';
import { differenceInDays, differenceInWeeks } from './difference';

export function getDayOfYear(value) {
    const date = toDate(value);
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    return Math.floor(differenceInDays(date, startOfYear)) + 1;
}

export function getWeekOfYear(value) {
    const date = toDate(value);
    const startOfYear = new Date(date.getFullYear(), 0, 1);

    startOfYear.setDate(startOfYear.getDate() + (1 - (startOfYear.getDay() % 7)));
    return Math.floor(differenceInWeeks(date, startOfYear)) + 1;
}

export function getQuarterOfYear(value) {
    const date = toDate(value);
    return Math.floor(date.getMonth() / 3) + 1;
}

export function isLeapYear(value) {
    const date = toDate(value);
    const year = date.getFullYear();
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

export function isMonday(value) {
    const date = toDate(value);
    return date.getDay() === 1;
}

export function isTuesday(value) {
    const date = toDate(value);
    return date.getDay() === 2;
}

export function isWednesday(value) {
    const date = toDate(value);
    return date.getDay() === 3;
}

export function isThursday(value) {
    const date = toDate(value);
    return date.getDay() === 4;
}

export function isFriday(value) {
    const date = toDate(value);
    return date.getDay() === 5;
}

export function isSaturday(value) {
    const date = toDate(value);
    return date.getDay() === 6;
}

export function isSunday(value) {
    const date = toDate(value);
    return date.getDay() === 0;
}
