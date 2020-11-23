const dayOfYear = [
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
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
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
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
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
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
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
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
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
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
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
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
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
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
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
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
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
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
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
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
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
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
