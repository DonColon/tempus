const milliseconds = [
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: 81634545060,
    },
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: 74290509033,
    },
];

const seconds = [
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: 81634545,
    },
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: 74290509,
    },
];

const minutes = [
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: 1360576,
    },
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: 1238175,
    },
];

const hours = [
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: 22676,
    },
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: 20636,
    },
];

const days = [
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: 945,
    },
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: 860,
    },
];

const weeks = [
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: 135,
    },
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: 123,
    },
];

const months = [
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: 31,
    },
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: 28,
    },
];

const quarters = [
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: 10,
    },
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: 9,
    },
];

const years = [
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 3, 18, 20, 15, 0, 0),
        expected: 2,
    },
    {
        value: new Date(2020, 10, 18, 15, 30, 45, 60),
        other: new Date(2018, 6, 12, 20, 15, 36, 27),
        expected: 2,
    },
];

export default {
    milliseconds, seconds, minutes, hours, days, weeks, months, quarters, years,
};
