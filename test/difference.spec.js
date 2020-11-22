import { expect } from 'chai';
import { describe, it } from 'mocha';

import testData from './resources/difference-data';

import {
    differenceInMilliseconds,
    differenceInSeconds,
    differenceInMinutes,
    differenceInHours,
    differenceInDays,
    differenceInWeeks,
    differenceInMonths,
    differenceInQuarters,
    differenceInYears,

} from '../src/modules/difference';

describe('difference functions', () => {
    describe('#differenceInMilliseconds', () => {
        testData.milliseconds.forEach((data) => {
            const { value, other, expected } = data;

            it(`should return ${expected}ms`, () => {
                const difference = Math.round(differenceInMilliseconds(value, other));
                expect(difference).to.equal(expected);
            });
        });
    });

    describe('#differenceInSeconds', () => {
        testData.seconds.forEach((data) => {
            const { value, other, expected } = data;

            it(`should return ${expected}ms`, () => {
                const difference = Math.round(differenceInSeconds(value, other));
                expect(difference).to.equal(expected);
            });
        });
    });

    describe('#differenceInMinutes', () => {
        testData.minutes.forEach((data) => {
            const { value, other, expected } = data;

            it(`should return ${expected}ms`, () => {
                const difference = Math.round(differenceInMinutes(value, other));
                expect(difference).to.equal(expected);
            });
        });
    });

    describe('#differenceInHours', () => {
        testData.hours.forEach((data) => {
            const { value, other, expected } = data;

            it(`should return ${expected}ms`, () => {
                const difference = Math.round(differenceInHours(value, other));
                expect(difference).to.equal(expected);
            });
        });
    });

    describe('#differenceInDays', () => {
        testData.days.forEach((data) => {
            const { value, other, expected } = data;

            it(`should return ${expected}ms`, () => {
                const difference = Math.round(differenceInDays(value, other));
                expect(difference).to.equal(expected);
            });
        });
    });

    describe('#differenceInWeeks', () => {
        testData.weeks.forEach((data) => {
            const { value, other, expected } = data;

            it(`should return ${expected}ms`, () => {
                const difference = Math.round(differenceInWeeks(value, other));
                expect(difference).to.equal(expected);
            });
        });
    });

    describe('#differenceInMonths', () => {
        testData.months.forEach((data) => {
            const { value, other, expected } = data;

            it(`should return ${expected}ms`, () => {
                const difference = Math.round(differenceInMonths(value, other));
                expect(difference).to.equal(expected);
            });
        });
    });

    describe('#differenceInQuarters', () => {
        testData.quarters.forEach((data) => {
            const { value, other, expected } = data;

            it(`should return ${expected}ms`, () => {
                const difference = Math.round(differenceInQuarters(value, other));
                expect(difference).to.equal(expected);
            });
        });
    });

    describe('#differenceInYears', () => {
        testData.years.forEach((data) => {
            const { value, other, expected } = data;

            it(`should return ${expected}ms`, () => {
                const difference = Math.round(differenceInYears(value, other));
                expect(difference).to.equal(expected);
            });
        });
    });
});
