
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
    return value.getTime() === other.getTime();
}

export function isSameSecond(value, other) {
    const valueSeconds = value.getSeconds();
    const otherSeconds = other.getSeconds();
    
    return valueSeconds === otherSeconds;
}

export function isSameMinute(value, other) {
    const valueMinutes = value.getMinutes();
    const otherMinutes = other.getMinutes();

    return valueMinutes === otherMinutes;
}

export function isSameHour(value, other) {
    const valueHours = value.getHours();
    const otherHours = other.getHours();

    return valueHours === otherHours;
}

export function isSameDay(value, other) {
    const valueDay = value.getDate();
    const otherDay = other.getDate();

    return valueDay === otherDay;
}

export function isSameWeekday(value, other) {
    const valueWeekday = value.getDay();
    const otherWeekday = other.getDay();

    return valueWeekday === otherWeekday;
}

export function isSameWeek(value, other) {
    const weeks = differenceInWeeks(value, other);
    return weeks === 0;
}

export function isSameMonth(value, other) {
    const valueMonth = value.getMonth();
    const otherMonth = other.getMonth();

    return valueMonth === otherMonth;
}

export function isSameQuarter(value, other) {
    const quarters = differenceInQuarters(value, other);
    return quarters === 0;
}

export function isSameYear(value, other) {
    const valueYear = value.getFullYear();
    const otherYear = other.getFullYear();

    return valueYear === otherYear;
}

export function isCurrentSecond(value) {
    return isSameSecond(value, new Date());
}

export function isCurrentMinute(value) {
    return isSameMinute(value, new Date());
}

export function isCurrentHour(value) {
    return isSameHour(value, new Date());
}

export function isCurrentDay(value) {
    return isSameDay(value, new Date());
}

export function isCurrentWeekday(value) {
    return isSameWeekday(value, new Date());
}

export function isCurrentWeek(value) {
    return isSameWeek(value, new Date());
}

export function isCurrentMonth(value) {
    return isSameMonth(value, new Date());
}

export function isCurrentQuarter(value) {
    return isSameQuarter(value, new Date());
}

export function isCurrentYear(value) {
    return isSameYear(value, new Date());
}


export function isBefore(value, other) {
    return value < other;
}

export function isPast(value) {
    return isBefore(value, new Date());
}

export function isYesterday(value) {
    return isSameDay(value, subtractDays(new Date(), 1));
}

export function isAfter(value, other) {
    return value > other;
}

export function isFuture(value) {
    return isAfter(value, new Date());
}

export function isTomorrow(value) {
    return isSameDay(value, addDays(new Date(), 1));
}

export function isBetween(value, interval) {
    const { start, end } = interval;
    return value >= start && value <= end;
}
