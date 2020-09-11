import { palindromeValidation } from '../../../src/examples/palindrome-validation';

describe('Palindrome Validation', () => {
  it('should return false when value is undefined', () => {
    expect(palindromeValidation(undefined)).toBeFalsy();
  });

  it('should return false when value is null', () => {
    expect(palindromeValidation(null)).toBeFalsy();
  });

  it('should return false when value is an empty string', () => {
    expect(palindromeValidation('')).toBeFalsy();
  });

  it('should return true when string length is 1', () => {
    expect(palindromeValidation('0')).toBeTruthy();
  });

  it('should return true when single string is palindrome', () => {
    expect(palindromeValidation('Civic')).toBeTruthy();
  });

  it('should return false when single string is not a palindrome', () => {
    expect(palindromeValidation('text')).toBeFalsy();
  });

  it('should return true when is a multiple word palindromes', () => {
    expect(palindromeValidation('Eva, can I see bees in a cave?')).toBeTruthy();
  });
});