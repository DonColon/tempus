const minimums = [
    {
        dates: [
            new Date(2020, 0, 30, 15, 30, 45),
            new Date(2020, 5, 25, 15, 30, 45),
        ],
        expected: 1580394645000,
    },
];

const maximums = [
    {
        dates: [
            new Date(2020, 0, 30, 15, 30, 45),
            new Date(2020, 5, 25, 15, 30, 45),
        ],
        expected: 1593091845000,
    },
];

const equals = [
    {
        value: 1605709845000,
        other: 1605709845000,
        expected: true,
    },
    {
        value: 1605709845000,
        other: new Date(2019, 11, 6, 16, 35, 50),
        expected: false,
    },
];

const before = [
    {
        value: 1605709845000,
        other: new Date(2020, 10, 18, 15, 30, 45),
        expected: false,
    },
    {
        value: new Date(2019, 11, 6, 16, 35, 50),
        other: new Date(2020, 10, 18, 15, 30, 45),
        expected: true,
    },
];

const after = [
    {
        value: new Date(2020, 10, 18, 15, 30, 45),
        other: 1605709845000,
        expected: false,
    },
    {
        value: new Date(2020, 10, 18, 15, 30, 45),
        other: new Date(2019, 11, 6, 16, 35, 50),
        expected: true,
    },
];

const between = [
    {
        value: 1605709845000,
        interval: {
            start: new Date(2020, 10, 1),
            end: new Date(2020, 11, 1),
        },
        expected: true,
    },
    {
        value: new Date(2019, 11, 6, 16, 35, 50),
        interval: {
            start: new Date(2020, 10, 1),
            end: new Date(2020, 11, 1),
        },
        expected: false,
    },
];

export default {
    minimums, maximums, equals, before, after, between,
};
