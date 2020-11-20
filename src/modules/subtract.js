import {
    addMilliseconds,
    addSeconds,
    addMinutes,
    addHours,
    addDays,
    addWeeks,
    addYears,

} from './add';

export function subtractMilliseconds(value, milliseconds) {
    return addMilliseconds(value, -milliseconds);
}

export function subtractSeconds(value, seconds) {
    return addSeconds(value, -seconds);
}

export function subtractMinutes(value, minutes) {
    return addMinutes(value, -minutes);
}

export function subtractHours(value, hours) {
    return addHours(value, -hours);
}

export function subtractDays(value, days) {
    return addDays(value, -days);
}

export function subtractWeeks(value, weeks) {
    return addWeeks(value, -weeks);
}

export function subtractMonths(value, months) {
    const date = new Date(value.getTime());

    date.setMonth(date.getMonth() - months);
    while (date.getMonth() === value.getMonth()) {
        date.setDate(date.getDate() - 1);
    }

    return date;
}

export function subtractQuarters(value, quarters) {
    const months = quarters * 3;
    return subtractMonths(value, months);
}

export function subtractYears(value, years) {
    return addYears(value, -years);
}
