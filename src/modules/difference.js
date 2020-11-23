import { toDate } from './basic';

function getQuarterOfYear(value) {
    const date = toDate(value);
    return Math.floor(date.getMonth() / 3) + 1;
}

export function differenceInMilliseconds(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    return Math.abs(valueDate.getTime() - otherDate.getTime());
}

export function differenceInSeconds(value, other) {
    const milliseconds = differenceInMilliseconds(value, other);
    return milliseconds / 1000;
}

export function differenceInMinutes(value, other) {
    const seconds = differenceInSeconds(value, other);
    return seconds / 60;
}

export function differenceInHours(value, other) {
    const minutes = differenceInMinutes(value, other);
    return minutes / 60;
}

export function differenceInDays(value, other) {
    const hours = differenceInHours(value, other);
    return hours / 24;
}

export function differenceInWeeks(value, other) {
    const days = differenceInDays(value, other);
    return days / 7;
}

export function differenceInYears(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    return Math.abs(valueDate.getFullYear() - otherDate.getFullYear());
}

export function differenceInMonths(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const years = differenceInYears(valueDate, otherDate);
    const months = Math.abs(valueDate.getMonth() - otherDate.getMonth());
    return years * 12 + months;
}

export function differenceInQuarters(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const years = differenceInYears(valueDate, otherDate);
    const quarters = Math.abs(getQuarterOfYear(valueDate) - getQuarterOfYear(otherDate));
    return years * 4 + quarters;
}
