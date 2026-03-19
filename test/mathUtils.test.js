import { expect } from 'chai';

import { add, divide, multiply, subtract } from '../utils/mathUtils.js';

describe('mathUtils', () => {
  it('add works', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('subtract works', () => {
    expect(subtract(10, 4)).to.equal(6);
  });

  it('multiply works', () => {
    expect(multiply(4, 5)).to.equal(20);
  });

  it('divide works', () => {
    expect(divide(20, 4)).to.equal(5);
  });

  it('divide throws on zero', () => {
    expect(() => divide(10, 0)).to.throw('Cannot divide by zero');
  });
});
