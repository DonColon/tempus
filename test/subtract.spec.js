import { expect } from 'chai';
import { describe, it } from 'mocha';
import { getWeekOfYear, getQuarterOfYear } from '../src/modules/calendar';

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

const value = new Date(2020, 10, 18, 15, 30, 45, 60);
const lastDayOfMarch = new Date(2020, 2, 31, 15, 30, 45, 60);

describe('subtract functions', () => {
    describe('#subtractMilliseconds', () => {
        it('should return 50ms', () => {
            const date = subtractMilliseconds(value, 10);
            const milliseconds = date.getMilliseconds();
            expect(milliseconds).to.equal(50);
        });
    });

    describe('#subtractSeconds', () => {
        it('should return 40s', () => {
            const date = subtractSeconds(value, 5);
            const seconds = date.getSeconds();
            expect(seconds).to.equal(40);
        });
    });

    describe('#subtractMinutes', () => {
        it('should return 25min', () => {
            const date = subtractMinutes(value, 5);
            const minutes = date.getMinutes();
            expect(minutes).to.equal(25);
        });
    });

    describe('#subtractHours', () => {
        it('should return 10h', () => {
            const date = subtractHours(value, 5);
            const hours = date.getHours();
            expect(hours).to.equal(10);
        });
    });

    describe('#subtractDays', () => {
        it('should return 13d', () => {
            const date = subtractDays(value, 5);
            const day = date.getDate();
            expect(day).to.equal(13);
        });
    });

    describe('#subtractWeeks', () => {
        it('should return 42w', () => {
            const date = subtractWeeks(value, 5);
            const week = getWeekOfYear(date);
            expect(week).to.equal(42);
        });
    });

    describe('#subtractMonths', () => {
        it('should return 6m', () => {
            const date = subtractMonths(value, 5);
            const month = date.getMonth() + 1;
            expect(month).to.equal(6);
        });

        it('should be February 28th', () => {
            const date = subtractMonths(lastDayOfMarch, 1);
            const month = date.getMonth() + 1;
            expect(month).to.equal(2);
        });
    });

    describe('#subtractQuarters', () => {
        it('should return Q3', () => {
            const date = subtractQuarters(value, 5);
            const quarter = getQuarterOfYear(date);
            expect(quarter).to.equal(3);
        });
    });

    describe('#subtractYears', () => {
        it('should return 2015y', () => {
            const date = subtractYears(value, 5);
            const years = date.getFullYear();
            expect(years).to.equal(2015);
        });
    });
});
