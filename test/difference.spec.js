
import { expect } from 'chai';

import {
    differenceInMilliseconds,
    differenceInSeconds,
    differenceInMinutes,
    differenceInHours,
    differenceInDays,
    differenceInWeeks,
    differenceInMonths,
    differenceInQuarters,
    differenceInYears

} from '../src/modules/difference';


const value = new Date(2020, 10, 18, 15, 30, 45, 60);
const other = new Date(2018, 3, 18, 20, 15, 0, 0);


describe('difference functions', () => {

    describe('#differenceInMilliseconds', () => {
        it('should return 81.634.545.060ms', () => {
            const difference = Math.round(differenceInMilliseconds(value, other));
            expect(difference).to.equal(81634545060);
        });
    });

    describe('#differenceInSeconds', () => {
        it('should return 81.648.000s', () => {
            const difference = Math.round(differenceInSeconds(value, other));
            expect(difference).to.equal(81634545);
        });
    });

    describe('#differenceInMinutes', () => {
        it('should return 1.360.800min', () => {
            const difference = Math.round(differenceInMinutes(value, other));
            expect(difference).to.equal(1360576);
        });
    });

    describe('#differenceInHours', () => {
        it('should return 22.680h', () => {
            const difference = Math.round(differenceInHours(value, other));
            expect(difference).to.equal(22676);
        });
    });

    describe('#differenceInDays', () => {
        it('should return 945d', () => {
            const difference = Math.round(differenceInDays(value, other));
            expect(difference).to.equal(945);
        });
    });

    describe('#differenceInWeeks', () => {
        it('should return 135w', () => {
            const difference = Math.round(differenceInWeeks(value, other));
            expect(difference).to.equal(135);
        });
    });

    describe('#differenceInMonths', () => {
        it('should return 31m', () => {
            const difference = Math.round(differenceInMonths(value, other));
            expect(difference).to.equal(31);
        });
    });

    describe('#differenceInQuarters', () => {
        it('should return 10q', () => {
            const difference = Math.round(differenceInQuarters(value, other));
            expect(difference).to.equal(10);
        });
    });

    describe('#differenceInYears', () => {
        it('should return 2y', () => {
            const difference = differenceInYears(value, other);
            expect(difference).to.equal(2);
        });
    });

});

