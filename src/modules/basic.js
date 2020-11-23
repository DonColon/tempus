export function isDate(value) {
    return value instanceof Date;
}

export function toDate(value) {
    if (isDate(value)) {
        return value;
    } if (typeof value === 'number') {
        return new Date(value);
    }
    return new Date(NaN);
}
