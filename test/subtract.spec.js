import { expect } from 'chai';
import { describe, it } from 'mocha';

import testData from './resources/subtract-data';

import {
    subtractMilliseconds,
    subtractSeconds,
    subtractMinutes,
    subtractHours,
    subtractDays,
    subtractWeeks,
    subtractMonths,
    subtractQuarters,
    subtractYears,

} from '../src/modules/subtract';

import { getWeekOfYear, getQuarterOfYear } from '../src/modules/calendar';

describe('subtract functions', () => {
    describe('#subtractMilliseconds', () => {
        testData.milliseconds.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}ms`, () => {
                const newDate = subtractMilliseconds(date, value);
                const milliseconds = newDate.getMilliseconds();
                expect(milliseconds).to.equal(expected);
            });
        });
    });

    describe('#subtractSeconds', () => {
        testData.seconds.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}s`, () => {
                const newDate = subtractSeconds(date, value);
                const seconds = newDate.getSeconds();
                expect(seconds).to.equal(expected);
            });
        });
    });

    describe('#subtractMinutes', () => {
        testData.minutes.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}min`, () => {
                const newDate = subtractMinutes(date, value);
                const minutes = newDate.getMinutes();
                expect(minutes).to.equal(expected);
            });
        });
    });

    describe('#subtractHours', () => {
        testData.hours.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}h`, () => {
                const newDate = subtractHours(date, value);
                const hours = newDate.getHours();
                expect(hours).to.equal(expected);
            });
        });
    });

    describe('#subtractDays', () => {
        testData.days.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}d`, () => {
                const newDate = subtractDays(date, value);
                const day = newDate.getDate();
                expect(day).to.equal(expected);
            });
        });
    });

    describe('#subtractWeeks', () => {
        testData.weeks.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}w`, () => {
                const newDate = subtractWeeks(date, value);
                const week = getWeekOfYear(newDate);
                expect(week).to.equal(expected);
            });
        });
    });

    describe('#subtractMonths', () => {
        testData.months.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}m`, () => {
                const newDate = subtractMonths(date, value);
                const month = newDate.getMonth() + 1;
                expect(month).to.equal(expected);
            });
        });
    });

    describe('#subtractQuarters', () => {
        testData.quarters.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return Q${expected}`, () => {
                const newDate = subtractQuarters(date, value);
                const quarter = getQuarterOfYear(newDate);
                expect(quarter).to.equal(expected);
            });
        });
    });

    describe('#subtractYears', () => {
        testData.years.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}y`, () => {
                const newDate = subtractYears(date, value);
                const years = newDate.getFullYear();
                expect(years).to.equal(expected);
            });
        });
    });
});
