import { expect } from 'chai';

import {
  filterUsersByAge,
  findUserById,
  isEmailTaken,
  sortUsersByName,
} from '../utils/usersListUtils.js';

describe('usersListUtils', () => {
  const users = [
    { id: 1, name: 'Charlie', age: 30, email: 'charlie@example.com' },
    { id: 2, name: 'Alice', age: 20, email: 'alice@example.com' },
    { id: 3, name: 'Bob', age: 25, email: 'bob@example.com' },
  ];

  it('filterUsersByAge works', () => {
    expect(filterUsersByAge(users, 21, 30)).to.deep.equal([
      { id: 1, name: 'Charlie', age: 30, email: 'charlie@example.com' },
      { id: 3, name: 'Bob', age: 25, email: 'bob@example.com' },
    ]);
  });

  it('filterUsersByAge throws on wrong input', () => {
    expect(() => filterUsersByAge({}, 18, 25)).to.throw('Users must be an array');
  });

  it('sortUsersByName works', () => {
    expect(sortUsersByName(users)).to.deep.equal([
      { id: 2, name: 'Alice', age: 20, email: 'alice@example.com' },
      { id: 3, name: 'Bob', age: 25, email: 'bob@example.com' },
      { id: 1, name: 'Charlie', age: 30, email: 'charlie@example.com' },
    ]);
  });

  it('sortUsersByName throws on wrong input', () => {
    expect(() => sortUsersByName(null)).to.throw('Users must be an array');
  });

  it('findUserById works', () => {
    expect(findUserById(users, 2)).to.deep.equal({
      id: 2,
      name: 'Alice',
      age: 20,
      email: 'alice@example.com',
    });
  });

  it('findUserById returns null if user is missing', () => {
    expect(findUserById(users, 99)).to.equal(null);
  });

  it('findUserById throws on wrong input', () => {
    expect(() => findUserById('users', 1)).to.throw('Users must be an array');
  });

  it('isEmailTaken works', () => {
    expect(isEmailTaken(users, 'alice@example.com')).to.equal(true);
  });

  it('isEmailTaken returns false for free email', () => {
    expect(isEmailTaken(users, 'nobody@example.com')).to.equal(false);
  });

  it('isEmailTaken throws on wrong input', () => {
    expect(() => isEmailTaken(undefined, 'alice@example.com')).to.throw(
      'Users must be an array',
    );
  });
});
