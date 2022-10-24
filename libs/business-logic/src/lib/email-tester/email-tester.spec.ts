import {isEmailAddress} from './email-tester';

describe('isEmailAddress', () => {
  it('true for a valid email address', () => {
    const address = 'shertu.oce@gmail.com';
    expect(isEmailAddress(address)).toBeTruthy();
  });

  it('false for an invalid email address', () => {
    const address = 'shertu';
    expect(isEmailAddress(address)).toBeFalsy();
  });
});
