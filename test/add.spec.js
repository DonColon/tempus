import { expect } from 'chai';
import { describe, it } from 'mocha';
import { getWeekOfYear, getQuarterOfYear } from '../src/modules/calendar';

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

const value = new Date(2020, 10, 18, 15, 30, 45, 60);

describe('add functions', () => {
    describe('#addMilliseconds', () => {
        it('should return 70ms', () => {
            const date = addMilliseconds(value, 10);
            const milliseconds = date.getMilliseconds();
            expect(milliseconds).to.equal(70);
        });
    });

    describe('#addSeconds', () => {
        it('should return 50s', () => {
            const date = addSeconds(value, 5);
            const seconds = date.getSeconds();
            expect(seconds).to.equal(50);
        });
    });

    describe('#addMinutes', () => {
        it('should return 35min', () => {
            const date = addMinutes(value, 5);
            const minutes = date.getMinutes();
            expect(minutes).to.equal(35);
        });
    });

    describe('#addHours', () => {
        it('should return 20h', () => {
            const date = addHours(value, 5);
            const hours = date.getHours();
            expect(hours).to.equal(20);
        });
    });

    describe('#addDays', () => {
        it('should return 23d', () => {
            const date = addDays(value, 5);
            const day = date.getDate();
            expect(day).to.equal(23);
        });
    });

    describe('#addWeeks', () => {
        it('should return 52w', () => {
            const date = addWeeks(value, 5);
            const week = getWeekOfYear(date);
            expect(week).to.equal(52);
        });
    });

    describe('#addMonths', () => {
        it('should return 4m', () => {
            const date = addMonths(value, 5);
            const month = date.getMonth() + 1;
            expect(month).to.equal(4);
        });
    });

    describe('#addQuarters', () => {
        it('should return Q1', () => {
            const date = addQuarters(value, 5);
            const quarter = getQuarterOfYear(date);
            expect(quarter).to.equal(1);
        });
    });

    describe('#addYears', () => {
        it('should return 2025y', () => {
            const date = addYears(value, 5);
            const years = date.getFullYear();
            expect(years).to.equal(2025);
        });
    });
});
