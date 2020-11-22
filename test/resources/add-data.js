const milliseconds = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 5,
        expected: 65,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 10,
        expected: 70,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 35,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 20,
        expected: 40,
    },
];

const seconds = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 5,
        expected: 50,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 10,
        expected: 55,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 58,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 16,
        expected: 59,
    },
];

const minutes = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 5,
        expected: 35,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 10,
        expected: 40,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 43,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 20,
        expected: 48,
    },
];

const hours = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 5,
        expected: 20,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 10,
        expected: 1,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 3,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 20,
        expected: 8,
    },
];

const days = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 5,
        expected: 23,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 10,
        expected: 28,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 21,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 20,
        expected: 26,
    },
];

const weeks = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 1,
        expected: 48,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 2,
        expected: 49,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 2,
        expected: 51,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 3,
        expected: 52,
    },
];

const months = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 1,
        expected: 12,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 2,
        expected: 1,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 3,
        expected: 3,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 4,
        expected: 4,
    },
];

const quarters = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 5,
        expected: 1,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 10,
        expected: 2,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 3,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 20,
        expected: 4,
    },
];

const years = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 5,
        expected: 2025,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 10,
        expected: 2030,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 2035,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 20,
        expected: 2040,
    },
];

export default {
    milliseconds, seconds, minutes, hours, days, weeks, months, quarters, years,
};
