import {
  describe,
  it,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} from 'vitest';
import { User } from '../src/hooks.js';

// describe.concurrent('hooks', () => {
describe.concurrent('hooks', () => {
  let userEmail = '';
  let user = null;

  beforeAll(() => {
    userEmail = 'john@example.com';
    user = new User(userEmail);
    // console.log('beforeAll');
  });

  beforeEach(() => {
    user = new User(userEmail);
    //    console.log('beforeEach');
  });

  afterEach(() => {
    user.clearEmail();

    //   console.log('afterEach');
  });

  afterAll(() => {
    userEmail = '';
    user = null;
    // console.log('afterAll');
  });

  it('should be able to set and get a user', () => {
    expect(user).toHaveProperty('email', userEmail);
  });

  it('should be able to update a user', () => {
    const newEmail = 'jill@example.com';

    user.updateEmail(newEmail);

    expect(user).toHaveProperty('email', newEmail);
  });

  it('should be able to clear a user', () => {
    user.clearEmail();

    expect(user).toHaveProperty('email', '');
  });
});
