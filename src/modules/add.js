
export function addMilliseconds(value, milliseconds) {
    const timestamp = value.getTime();
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
    const date = new Date(value.getTime());
    date.setDate(date.getDate() + days);

    return date;
}

export function addWeeks(value, weeks) {
    const days = weeks * 7;
    return addDays(value, days);
}

export function addMonths(value, months) {
    const date = new Date(value.getTime());
    date.setMonth(date.getMonth() + months);

    return date;
}

export function addQuarters(value, quarters) {
    const months = quarters * 3;
    return addMonths(value, months);
}

export function addYears(value, years) {
    const date = new Date(value.getTime());
    date.setFullYear(date.getFullYear() + years);

    return date;
}
