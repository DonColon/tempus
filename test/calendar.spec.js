
import { expect } from 'chai';

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
    isSunday

} from '../src/modules/calendar';


const value = new Date(2020, 10, 18);


describe('calendar functions', () => {

    describe('#getDayOfYear', () => {
        it('should return 323', () => {
            const dayOfYear = getDayOfYear(value);
            expect(dayOfYear).to.equal(323);
        });
    });

    describe('#getWeekOfYear', () => {
        it('should return 47', () => {
            const weekOfYear = getWeekOfYear(value);
            expect(weekOfYear).to.equal(47);
        });
    });

    describe('#getQuarterOfYear', () => {
        it('should return 4', () => {
            const quarterOfYear = getQuarterOfYear(value);
            expect(quarterOfYear).to.equal(4);
        });
    });

    describe('#isDate', () => {
        it('should be true', () => expect(isDate(value)).to.be.true);
    });

    describe('#isLeapYear', () => {
        it('should be true', () => expect(isLeapYear(value)).to.be.true);
    });

    describe('#isLeapYear', () => {
        it('should be true', () => expect(isLeapYear(value)).to.be.true);
    });

    describe('#isMonday', () => {
        it('should be false', () => expect(isMonday(value)).to.be.false);
    });

    describe('#isTuesday', () => {
        it('should be false', () => expect(isTuesday(value)).to.be.false);
    });

    describe('#isWednesday', () => {
        it('should be true', () => expect(isWednesday(value)).to.be.true);
    });

    describe('#isThursday', () => {
        it('should be false', () => expect(isThursday(value)).to.be.false);
    });

    describe('#isFriday', () => {
        it('should be false', () => expect(isFriday(value)).to.be.false);
    });

    describe('#isSaturday', () => {
        it('should be false', () => expect(isSaturday(value)).to.be.false);
    });

    describe('#isSunday', () => {
        it('should be false', () => expect(isSunday(value)).to.be.false);
    });

});

