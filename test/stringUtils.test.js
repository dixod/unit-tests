import { expect } from 'chai';

import { capitalize, isPalindrome, reverseString } from '../utils/stringUtils.js';

describe('stringUtils', () => {
  it('capitalize works', () => {
    expect(capitalize('hello')).to.equal('Hello');
  });

  it('capitalize throws on wrong input', () => {
    expect(() => capitalize(12)).to.throw('Input must be a string');
  });

  it('reverseString works', () => {
    expect(reverseString('hello')).to.equal('olleh');
  });

  it('reverseString throws on wrong input', () => {
    expect(() => reverseString([])).to.throw('Input must be a string');
  });

  it('isPalindrome returns true for palindrome', () => {
    expect(isPalindrome('level')).to.equal(true);
  });

  it('isPalindrome returns false for regular word', () => {
    expect(isPalindrome('hello')).to.equal(false);
  });

  it('isPalindrome throws on wrong input', () => {
    expect(() => isPalindrome(null)).to.throw('Input must be a string');
  });
});
