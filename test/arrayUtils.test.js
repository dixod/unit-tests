import { expect } from 'chai';

import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils.js';

describe('arrayUtils', () => {
  it('findMax works', () => {
    expect(findMax([1, 10, 3, 7])).to.equal(10);
  });

  it('findMax throws on wrong input', () => {
    expect(() => findMax('123')).to.throw('Input must be an array');
  });

  it('findMin works', () => {
    expect(findMin([1, 10, 3, 7])).to.equal(1);
  });

  it('findMin throws on wrong input', () => {
    expect(() => findMin(null)).to.throw('Input must be an array');
  });

  it('removeDuplicates works', () => {
    expect(removeDuplicates([1, 2, 2, 3, 1, 4])).to.deep.equal([1, 2, 3, 4]);
  });

  it('removeDuplicates works with empty array', () => {
    expect(removeDuplicates([])).to.deep.equal([]);
  });

  it('removeDuplicates throws on wrong input', () => {
    expect(() => removeDuplicates({})).to.throw('Input must be an array');
  });
});
