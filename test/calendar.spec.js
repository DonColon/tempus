import { expect } from 'chai';
import { describe, it } from 'mocha';

import testData from './resources/calendar-data';

import {
    getDayOfYear,
    getWeekOfYear,
    getQuarterOfYear,
    isDate,
    isLeapYear,
    isMonday,
    isTuesday,
    isWednesday,
    isThursday,
    isFriday,
    isSaturday,
    isSunday,

} from '../src/modules/calendar';

describe('calendar functions', () => {
    describe('#getDayOfYear', () => {
        testData.dayOfYear.forEach((data) => {
            const { value, expected } = data;

            it(`should return ${expected}`, () => {
                const dayOfYear = getDayOfYear(value);
                expect(dayOfYear).to.equal(expected);
            });
        });
    });

    describe('#getWeekOfYear', () => {
        testData.weekOfYear.forEach((data) => {
            const { value, expected } = data;

            it(`should return ${expected}`, () => {
                const weekOfYear = getWeekOfYear(value);
                expect(weekOfYear).to.equal(expected);
            });
        });
    });

    describe('#getQuarterOfYear', () => {
        testData.quarterOfYear.forEach((data) => {
            const { value, expected } = data;

            it(`should return ${expected}`, () => {
                const quarterOfYear = getQuarterOfYear(value);
                expect(quarterOfYear).to.equal(expected);
            });
        });
    });

    describe('#isDate', () => {
        testData.dates.forEach((data) => {
            const { value, expected } = data;
            it(`should be ${expected}`, () => expect(isDate(value)).to.be[expected]);
        });
    });

    describe('#isLeapYear', () => {
        testData.leapYears.forEach((data) => {
            const { value, expected } = data;
            it(`should be ${expected}`, () => expect(isLeapYear(value)).to.be[expected]);
        });
    });

    describe('#isMonday', () => {
        testData.mondays.forEach((data) => {
            const { value, expected } = data;
            it(`should be ${expected}`, () => expect(isMonday(value)).to.be[expected]);
        });
    });

    describe('#isTuesday', () => {
        testData.tuesdays.forEach((data) => {
            const { value, expected } = data;
            it(`should be ${expected}`, () => expect(isTuesday(value)).to.be[expected]);
        });
    });

    describe('#isWednesday', () => {
        testData.wednesdays.forEach((data) => {
            const { value, expected } = data;
            it(`should be ${expected}`, () => expect(isWednesday(value)).to.be[expected]);
        });
    });

    describe('#isThursday', () => {
        testData.thursdays.forEach((data) => {
            const { value, expected } = data;
            it(`should be ${expected}`, () => expect(isThursday(value)).to.be[expected]);
        });
    });

    describe('#isFriday', () => {
        testData.fridays.forEach((data) => {
            const { value, expected } = data;
            it(`should be ${expected}`, () => expect(isFriday(value)).to.be[expected]);
        });
    });

    describe('#isSaturday', () => {
        testData.saturdays.forEach((data) => {
            const { value, expected } = data;
            it(`should be ${expected}`, () => expect(isSaturday(value)).to.be[expected]);
        });
    });

    describe('#isSunday', () => {
        testData.sundays.forEach((data) => {
            const { value, expected } = data;
            it(`should be ${expected}`, () => expect(isSunday(value)).to.be[expected]);
        });
    });
});
