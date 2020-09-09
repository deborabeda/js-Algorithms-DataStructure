import { decimalToBinary } from '../../../src/examples/decimal-to-binary';

describe('Decimal to Binary', () => {
  it('should return the value 0 in binary', () => {
    expect(decimalToBinary(0)).toEqual('0');
  });

  it('should return the value 1 in binary', () => {
    expect(decimalToBinary(1)).toEqual('1');
  });

  it('should return the value 10 in binary', () => {
    expect(decimalToBinary(10)).toEqual('1010');
  });
});
