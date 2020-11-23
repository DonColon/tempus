import { toDate } from './basic';

export function addMilliseconds(value, milliseconds) {
    const date = toDate(value);
    const timestamp = date.getTime();
    return new Date(timestamp + milliseconds);
}

export function addSeconds(value, seconds) {
    const milliseconds = seconds * 1000;
    return addMilliseconds(value, milliseconds);
}

export function addMinutes(value, minutes) {
    const seconds = minutes * 60;
    return addSeconds(value, seconds);
}

export function addHours(value, hours) {
    const minutes = hours * 60;
    return addMinutes(value, minutes);
}

export function addDays(value, days) {
    const date = toDate(value);

    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + days);

    return newDate;
}

export function addWeeks(value, weeks) {
    const days = weeks * 7;
    return addDays(value, days);
}

export function addMonths(value, months) {
    const date = toDate(value);

    const newDate = new Date(date.getTime());
    newDate.setMonth(newDate.getMonth() + months);

    return newDate;
}

export function addQuarters(value, quarters) {
    const months = quarters * 3;
    return addMonths(value, months);
}

export function addYears(value, years) {
    const date = toDate(value);

    const newDate = new Date(date.getTime());
    newDate.setFullYear(newDate.getFullYear() + years);

    return newDate;
}
