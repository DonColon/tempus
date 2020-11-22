import { expect } from 'chai';
import { describe, it } from 'mocha';

import testData from './resources/compare-data';

import {
    min,
    max,
    isEqual,
    isSameSecond,
    isSameMinute,
    isSameHour,
    isSameDay,
    isSameWeekday,
    isSameWeek,
    isSameMonth,
    isSameQuarter,
    isSameYear,
    isBefore,
    isAfter,
    isBetween,

} from '../src/modules/compare';

describe('compare functions', () => {
    describe('#min', () => {
        testData.minimums.forEach((data) => {
            const { dates, expected } = data;

            it(`should be ${expected}ms`, () => {
                const minDate = min(dates).getTime();
                expect(minDate).to.equal(expected);
            });
        });
    });

    describe('#max', () => {
        testData.maximums.forEach((data) => {
            const { dates, expected } = data;

            it(`should be ${expected}ms`, () => {
                const maxDate = max(dates).getTime();
                expect(maxDate).to.equal(expected);
            });
        });
    });

    describe('#isEqual', () => {
        testData.equals.forEach((data) => {
            const { value, other, expected } = data;
            it(`should be ${expected}`, () => expect(isEqual(value, other)).to.be[expected]);
        });
    });

    describe('#isSameSecond', () => {
        testData.equals.forEach((data) => {
            const { value, other, expected } = data;
            it(`should be ${expected}`, () => expect(isSameSecond(value, other)).to.be[expected]);
        });
    });

    describe('#isSameMinute', () => {
        testData.equals.forEach((data) => {
            const { value, other, expected } = data;
            it(`should be ${expected}`, () => expect(isSameMinute(value, other)).to.be[expected]);
        });
    });

    describe('#isSameHour', () => {
        testData.equals.forEach((data) => {
            const { value, other, expected } = data;
            it(`should be ${expected}`, () => expect(isSameHour(value, other)).to.be[expected]);
        });
    });

    describe('#isSameDay', () => {
        testData.equals.forEach((data) => {
            const { value, other, expected } = data;
            it(`should be ${expected}`, () => expect(isSameDay(value, other)).to.be[expected]);
        });
    });

    describe('#isSameWeekday', () => {
        testData.equals.forEach((data) => {
            const { value, other, expected } = data;
            it(`should be ${expected}`, () => expect(isSameWeekday(value, other)).to.be[expected]);
        });
    });

    describe('#isSameWeek', () => {
        testData.equals.forEach((data) => {
            const { value, other, expected } = data;
            it(`should be ${expected}`, () => expect(isSameWeek(value, other)).to.be[expected]);
        });
    });

    describe('#isSameMonth', () => {
        testData.equals.forEach((data) => {
            const { value, other, expected } = data;
            it(`should be ${expected}`, () => expect(isSameMonth(value, other)).to.be[expected]);
        });
    });

    describe('#isSameQuarter', () => {
        testData.equals.forEach((data) => {
            const { value, other, expected } = data;
            it(`should be ${expected}`, () => expect(isSameQuarter(value, other)).to.be[expected]);
        });
    });

    describe('#isSameYear', () => {
        testData.equals.forEach((data) => {
            const { value, other, expected } = data;
            it(`should be ${expected}`, () => expect(isSameYear(value, other)).to.be[expected]);
        });
    });

    describe('#isBefore', () => {
        testData.before.forEach((data) => {
            const { value, other, expected } = data;
            it(`should be ${expected}`, () => expect(isBefore(value, other)).to.be[expected]);
        });
    });

    describe('#isAfter', () => {
        testData.after.forEach((data) => {
            const { value, other, expected } = data;
            it(`should be ${expected}`, () => expect(isAfter(value, other)).to.be[expected]);
        });
    });

    describe('#isBetween', () => {
        testData.between.forEach((data) => {
            const { value, interval, expected } = data;
            it(`should be ${expected}`, () => expect(isBetween(value, interval)).to.be[expected]);
        });
    });
});
