const dayOfYear = [
    {
        value: 1605709845060,
        expected: 323,
    },
    {
        value: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: 193,
    },
    {
        value: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: 108,
    },
    {
        value: new Date(2018, 6, 19, 20, 15, 36, 27),
        expected: 200,
    },
];

const weekOfYear = [
    {
        value: 1605709845060,
        expected: 47,
    },
    {
        value: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: 28,
    },
    {
        value: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: 16,
    },
    {
        value: new Date(2018, 6, 19, 20, 15, 36, 27),
        expected: 29,
    },
];

const quarterOfYear = [
    {
        value: 1605709845060,
        expected: 4,
    },
    {
        value: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: 3,
    },
    {
        value: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: 2,
    },
    {
        value: new Date(2018, 6, 19, 20, 15, 36, 27),
        expected: 3,
    },
];

const leapYears = [
    {
        value: 1605709845060,
        expected: true,
    },
    {
        value: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: false,
    },
    {
        value: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: false,
    },
    {
        value: new Date(2018, 6, 19, 20, 15, 36, 27),
        expected: false,
    },
];

const mondays = [
    {
        value: 1605709845060,
        expected: false,
    },
    {
        value: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: false,
    },
    {
        value: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: false,
    },
    {
        value: new Date(2018, 6, 19, 20, 15, 36, 27),
        expected: false,
    },
];

const tuesdays = [
    {
        value: 1605709845060,
        expected: false,
    },
    {
        value: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: false,
    },
    {
        value: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: false,
    },
    {
        value: new Date(2018, 6, 19, 20, 15, 36, 27),
        expected: false,
    },
];

const wednesdays = [
    {
        value: 1605709845060,
        expected: true,
    },
    {
        value: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: false,
    },
    {
        value: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: true,
    },
    {
        value: new Date(2018, 6, 19, 20, 15, 36, 27),
        expected: false,
    },
];

const thursdays = [
    {
        value: 1605709845060,
        expected: false,
    },
    {
        value: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: true,
    },
    {
        value: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: false,
    },
    {
        value: new Date(2018, 6, 19, 20, 15, 36, 27),
        expected: true,
    },
];

const fridays = [
    {
        value: 1605709845060,
        expected: false,
    },
    {
        value: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: false,
    },
    {
        value: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: false,
    },
    {
        value: new Date(2018, 6, 19, 20, 15, 36, 27),
        expected: false,
    },
];

const saturdays = [
    {
        value: 1605709845060,
        expected: false,
    },
    {
        value: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: false,
    },
    {
        value: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: false,
    },
    {
        value: new Date(2018, 6, 19, 20, 15, 36, 27),
        expected: false,
    },
];

const sundays = [
    {
        value: 1605709845060,
        expected: false,
    },
    {
        value: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: false,
    },
    {
        value: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: false,
    },
    {
        value: new Date(2018, 6, 19, 20, 15, 36, 27),
        expected: false,
    },
];

export default {
    dayOfYear, weekOfYear, quarterOfYear, leapYears, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays, sundays,
};
