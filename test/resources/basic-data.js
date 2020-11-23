const objects = [
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        expected: true,
    },
    {
        value: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: true,
    },
    {
        value: 81634545060,
        expected: false,
    },
    {
        value: {},
        expected: false,
    },
];

const timestamps = [
    81634545060,
    1606155444455,
    1606155442455,
];

const dates = [
    new Date(2020, 10, 18, 15, 30, 45, 60),
    new Date(2018, 6, 12, 20, 15, 36, 27),
    new Date(1606155444455),
];

const badTypes = [
    'Hello World',
    NaN,
    true,
    false,
    {},
];

export default {
    objects, timestamps, dates, badTypes,
};
