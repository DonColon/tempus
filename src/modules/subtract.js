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
    const date = toDate(value);

    const newDate = new Date(date.getTime());
    newDate.setMonth(newDate.getMonth() - months);

    while (newDate.getMonth() === date.getMonth()) {
        newDate.setDate(newDate.getDate() - 1);
    }

    return newDate;
}

export function subtractQuarters(value, quarters) {
    const months = quarters * 3;
    return subtractMonths(value, months);
}

export function subtractYears(value, years) {
    return addYears(value, -years);
}
