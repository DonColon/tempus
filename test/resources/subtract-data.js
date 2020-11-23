const milliseconds = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 5,
        expected: 55,
    },
    {
        date: 1605709845060,
        value: 10,
        expected: 50,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 5,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 20,
        expected: 0,
    },
];

const seconds = [
    {
        date: 1605709845060,
        value: 5,
        expected: 40,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 10,
        expected: 35,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 28,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 16,
        expected: 27,
    },
];

const minutes = [
    {
        date: 1605709845060,
        value: 5,
        expected: 25,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 10,
        expected: 20,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 13,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 20,
        expected: 8,
    },
];

const hours = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 5,
        expected: 10,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 10,
        expected: 5,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 21,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 20,
        expected: 16,
    },
];

const days = [
    {
        date: 1605709845060,
        value: 5,
        expected: 13,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 10,
        expected: 8,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 21,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 20,
        expected: 16,
    },
];

const weeks = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 1,
        expected: 46,
    },
    {
        date: 1605709845060,
        value: 2,
        expected: 45,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 2,
        expected: 47,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 3,
        expected: 46,
    },
];

const months = [
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 1,
        expected: 10,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 2,
        expected: 9,
    },
    {
        date: new Date(2020, 2, 31, 15, 30, 45, 60),
        value: 1,
        expected: 2,
    },
    {
        date: new Date(2020, 2, 31, 15, 30, 45, 60),
        value: 2,
        expected: 1,
    },
];

const quarters = [
    {
        date: 1605709845060,
        value: 5,
        expected: 3,
    },
    {
        date: new Date(2020, 10, 18, 15, 30, 45, 60),
        value: 10,
        expected: 2,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 1,
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
        expected: 2015,
    },
    {
        date: 1605709845060,
        value: 10,
        expected: 2010,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 15,
        expected: 2005,
    },
    {
        date: new Date(2020, 11, 6, 12, 28, 43, 20),
        value: 20,
        expected: 2000,
    },
];

export default {
    milliseconds, seconds, minutes, hours, days, weeks, months, quarters, years,
};
