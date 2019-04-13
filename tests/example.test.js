/**
 * Npm Import
 */
import { should, expect, assert } from 'chai';

/**
 * Code
 */
should();

const sum = (a, b) => a + b;
const average = list => list.reduce(sum, 0) / list.length;

/**
 * Tests
 */

describe('sum', () => {
  it('should return sum of parameters', () => {
    expect(sum(1, 2)).to.be.equal(3);
    sum(145, 23).should.be.equal(168);
    assert.equal(sum(-10, 10), 0);
  });
});

describe('average', () => {
  it('should return a number', () => {
    average([1, 2, 3]).should.be.a('number');
  });

  it('should return average of parameters', () => {
    assert.equal(average([12, 20]), 16);
    assert.equal(average([4, 8]), 6);
    assert.equal(average([5, 5, 5, 9]), 6);
  });
});
