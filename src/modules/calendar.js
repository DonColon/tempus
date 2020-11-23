import { differenceInDays, differenceInWeeks } from './difference';

export function getDayOfYear(value) {
    const date = new Date(value.getFullYear(), 0, 1);
    return Math.floor(differenceInDays(value, date)) + 1;
}

export function getWeekOfYear(value) {
    const startOfYear = new Date(value.getFullYear(), 0, 1);
    startOfYear.setDate(startOfYear.getDate() + (1 - (startOfYear.getDay() % 7)));
    return Math.floor(differenceInWeeks(value, startOfYear)) + 1;
}

export function getQuarterOfYear(value) {
    return Math.floor(value.getMonth() / 3) + 1;
}

export function isLeapYear(value) {
    const year = value.getFullYear();
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

export function isMonday(value) {
    return value.getDay() === 1;
}

export function isTuesday(value) {
    return value.getDay() === 2;
}

export function isWednesday(value) {
    return value.getDay() === 3;
}

export function isThursday(value) {
    return value.getDay() === 4;
}

export function isFriday(value) {
    return value.getDay() === 5;
}

export function isSaturday(value) {
    return value.getDay() === 6;
}

export function isSunday(value) {
    return value.getDay() === 0;
}
