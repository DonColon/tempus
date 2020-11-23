import { expect } from 'chai';
import { describe, it } from 'mocha';

import testData from './resources/basic-data';

import {
    isDate,
    toDate,

} from '../src/modules/basic';

describe('basic functions', () => {
    describe('#isDate', () => {
        testData.objects.forEach((data) => {
            const { value, expected } = data;
            it(`should be ${expected}`, () => expect(isDate(value)).to.be[expected]);
        });
    });

    describe('#toDate', () => {
        testData.timestamps.forEach((data) => {
            it(`date.getTime() should return ${data}`, () => {
                const date = toDate(data);
                expect(date.getTime()).to.equal(data);
            });
        });

        testData.dates.forEach((data) => {
            it(`date should be equal ${data}`, () => {
                const date = toDate(data);
                expect(date).to.equal(data);
            });
        });

        testData.badTypes.forEach((data) => {
            const date = toDate(data);
            it(`${data} should be converted to NaN`, () => expect(date.getTime()).to.be.NaN);
        });
    });
});
