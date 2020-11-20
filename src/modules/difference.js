function getQuarterOfYear(value) {
    return Math.floor(value.getMonth() / 3) + 1;
}

export function differenceInMilliseconds(value, other) {
    return Math.abs(value.getTime() - other.getTime());
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
    return Math.abs(value.getFullYear() - other.getFullYear());
}

export function differenceInMonths(value, other) {
    const years = differenceInYears(value, other);
    const months = Math.abs(value.getMonth() - other.getMonth());
    return years * 12 + months;
}

export function differenceInQuarters(value, other) {
    const years = differenceInYears(value, other);
    const quarters = Math.abs(getQuarterOfYear(value) - getQuarterOfYear(other));
    return years * 4 + quarters;
}
