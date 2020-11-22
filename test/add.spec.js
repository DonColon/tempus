import { expect } from 'chai';
import { describe, it } from 'mocha';

import testData from './resources/add-data';

import {
    addMilliseconds,
    addSeconds,
    addMinutes,
    addHours,
    addDays,
    addWeeks,
    addMonths,
    addQuarters,
    addYears,

} from '../src/modules/add';

import { getWeekOfYear, getQuarterOfYear } from '../src/modules/calendar';

describe('add functions', () => {
    describe('#addMilliseconds', () => {
        testData.milliseconds.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}ms`, () => {
                const newDate = addMilliseconds(date, value);
                const milliseconds = newDate.getMilliseconds();
                expect(milliseconds).to.equal(expected);
            });
        });
    });

    describe('#addSeconds', () => {
        testData.seconds.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}s`, () => {
                const newDate = addSeconds(date, value);
                const seconds = newDate.getSeconds();
                expect(seconds).to.equal(expected);
            });
        });
    });

    describe('#addMinutes', () => {
        testData.minutes.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}min`, () => {
                const newDate = addMinutes(date, value);
                const minutes = newDate.getMinutes();
                expect(minutes).to.equal(expected);
            });
        });
    });

    describe('#addHours', () => {
        testData.hours.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}h`, () => {
                const newDate = addHours(date, value);
                const hours = newDate.getHours();
                expect(hours).to.equal(expected);
            });
        });
    });

    describe('#addDays', () => {
        testData.days.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}d`, () => {
                const newDate = addDays(date, value);
                const day = newDate.getDate();
                expect(day).to.equal(expected);
            });
        });
    });

    describe('#addWeeks', () => {
        testData.weeks.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}w`, () => {
                const newDate = addWeeks(date, value);
                const week = getWeekOfYear(newDate);
                expect(week).to.equal(expected);
            });
        });
    });

    describe('#addMonths', () => {
        testData.months.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}m`, () => {
                const newDate = addMonths(date, value);
                const month = newDate.getMonth() + 1;
                expect(month).to.equal(expected);
            });
        });
    });

    describe('#addQuarters', () => {
        testData.quarters.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return Q${expected}`, () => {
                const newDate = addQuarters(date, value);
                const quarter = getQuarterOfYear(newDate);
                expect(quarter).to.equal(expected);
            });
        });
    });

    describe('#addYears', () => {
        testData.years.forEach((data) => {
            const { date, value, expected } = data;

            it(`should return ${expected}y`, () => {
                const newDate = addYears(date, value);
                const years = newDate.getFullYear();
                expect(years).to.equal(expected);
            });
        });
    });
});
