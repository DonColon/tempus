import { toDate } from './basic';
import { addDays } from './add';
import { subtractDays } from './subtract';
import { differenceInQuarters, differenceInWeeks } from './difference';

export function min(values) {
    return new Date(Math.min.apply(null, values));
}

export function max(values) {
    return new Date(Math.max.apply(null, values));
}

export function isEqual(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    return valueDate.getTime() === otherDate.getTime();
}

export function isSameSecond(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueSeconds = valueDate.getSeconds();
    const otherSeconds = otherDate.getSeconds();

    return valueSeconds === otherSeconds;
}

export function isSameMinute(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueMinutes = valueDate.getMinutes();
    const otherMinutes = otherDate.getMinutes();

    return valueMinutes === otherMinutes;
}

export function isSameHour(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueHours = valueDate.getHours();
    const otherHours = otherDate.getHours();

    return valueHours === otherHours;
}

export function isSameDay(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueDay = valueDate.getDate();
    const otherDay = otherDate.getDate();

    return valueDay === otherDay;
}

export function isSameWeekday(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueWeekday = valueDate.getDay();
    const otherWeekday = otherDate.getDay();

    return valueWeekday === otherWeekday;
}

export function isSameWeek(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const weeks = differenceInWeeks(valueDate, otherDate);
    return weeks === 0;
}

export function isSameMonth(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueMonth = valueDate.getMonth();
    const otherMonth = otherDate.getMonth();

    return valueMonth === otherMonth;
}

export function isSameQuarter(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const quarters = differenceInQuarters(valueDate, otherDate);
    return quarters === 0;
}

export function isSameYear(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    const valueYear = valueDate.getFullYear();
    const otherYear = otherDate.getFullYear();

    return valueYear === otherYear;
}

export function isCurrentSecond(value) {
    return isSameSecond(value, Date.now());
}

export function isCurrentMinute(value) {
    return isSameMinute(value, Date.now());
}

export function isCurrentHour(value) {
    return isSameHour(value, Date.now());
}

export function isCurrentDay(value) {
    return isSameDay(value, Date.now());
}

export function isCurrentWeekday(value) {
    return isSameWeekday(value, Date.now());
}

export function isCurrentWeek(value) {
    return isSameWeek(value, Date.now());
}

export function isCurrentMonth(value) {
    return isSameMonth(value, Date.now());
}

export function isCurrentQuarter(value) {
    return isSameQuarter(value, Date.now());
}

export function isCurrentYear(value) {
    return isSameYear(value, Date.now());
}

export function isBefore(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    return valueDate < otherDate;
}

export function isPast(value) {
    return isBefore(value, Date.now());
}

export function isYesterday(value) {
    return isSameDay(value, subtractDays(Date.now(), 1));
}

export function isAfter(value, other) {
    const valueDate = toDate(value);
    const otherDate = toDate(other);

    return valueDate > otherDate;
}

export function isFuture(value) {
    return isAfter(value, Date.now());
}

export function isTomorrow(value) {
    return isSameDay(value, addDays(Date.now(), 1));
}

export function isBetween(value, interval) {
    const { start, end } = interval;
    return value >= start && value <= end;
}
