
import { expect } from 'chai';

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
    isBetween

} from '../src/modules/compare';


const dates = [
    // 1580394645000 ms
    new Date(2020, 0, 30, 15, 30, 45),

    // 1593091845000 ms
    new Date(2020, 5, 25, 15, 30, 45)
];

const interval = {
    start: new Date(2020, 10, 1),
    end: new Date(2020, 11, 1)
};

// 1605709845000 ms
const value = new Date(2020, 10, 18, 15, 30, 45);
const equalValue = new Date(2020, 10, 18, 15, 30, 45);

// 1607265045000 ms
const other = new Date(2019, 11, 6, 16, 35, 50);


describe('compare functions', () => {

    describe('#min', () => {
        it('should be 1580394645000 ms', () => {
            const minDate = min(dates).getTime();
            expect(minDate).to.equal(1580394645000);
        });
    });

    describe('#max', () => {
        it('should be 1593091845000 ms', () => {
            const minDate = max(dates).getTime();
            expect(minDate).to.equal(1593091845000);
        });
    });

    describe('#isEqual', () => {
        it('should be true', () => expect(isEqual(value, equalValue)).to.be.true);
        it('should be false', () => expect(isEqual(value, other)).to.be.false);
    });

    describe('#isSameSecond', () => {
        it('should be true', () => expect(isSameSecond(value, equalValue)).to.be.true);
        it('should be false', () => expect(isSameSecond(value, other)).to.be.false);
    });

    describe('#isSameMinute', () => {
        it('should be true', () => expect(isSameMinute(value, equalValue)).to.be.true);
        it('should be false', () => expect(isSameMinute(value, other)).to.be.false);
    });

    describe('#isSameHour', () => {
        it('should be true', () => expect(isSameHour(value, equalValue)).to.be.true);
        it('should be false', () => expect(isSameHour(value, other)).to.be.false);
    });

    describe('#isSameDay', () => {
        it('should be true', () => expect(isSameDay(value, equalValue)).to.be.true);
        it('should be false', () => expect(isSameDay(value, other)).to.be.false);
    });

    describe('#isSameWeekday', () => {
        it('should be true', () => expect(isSameWeekday(value, equalValue)).to.be.true);
        it('should be false', () => expect(isSameWeekday(value, other)).to.be.false);
    });

    describe('#isSameWeek', () => {
        it('should be true', () => expect(isSameWeek(value, equalValue)).to.be.true);
        it('should be false', () => expect(isSameWeek(value, other)).to.be.false);
    });

    describe('#isSameMonth', () => {
        it('should be true', () => expect(isSameMonth(value, equalValue)).to.be.true);
        it('should be false', () => expect(isSameMonth(value, other)).to.be.false);
    });

    describe('#isSameQuarter', () => {
        it('should be true', () => expect(isSameQuarter(value, equalValue)).to.be.true);
        it('should be false', () => expect(isSameQuarter(value, other)).to.be.false);
    });

    describe('#isSameYear', () => {
        it('should be true', () => expect(isSameYear(value, equalValue)).to.be.true);
        it('should be false', () => expect(isSameYear(value, other)).to.be.false);
    });

    describe('#isBefore', () => {
        it('should be true', () => expect(isBefore(other, value)).to.be.true);
        it('should be false', () => expect(isBefore(value, equalValue)).to.be.false);
    });

    describe('#isAfter', () => {
        it('should be true', () => expect(isAfter(value, other)).to.be.true);
        it('should be false', () => expect(isAfter(value, equalValue)).to.be.false);
    });

    describe('#isBetween', () => {
        it('should be true', () => expect(isBetween(value, interval)).to.be.true);
        it('should be false', () => expect(isBetween(other, interval)).to.be.false);
    });

});