import { fibonacciPosition } from '../../../src/algorithms/fibonacci-position'

describe('Fibonacci', () => {
  it('should return 0 for the first number in sequence', () => {
    expect(fibonacciPosition(1)).toEqual(0)
  })

  it('should return 1 for the second number in sequence', () => {
    expect(fibonacciPosition(2)).toEqual(1)
  })

  it('should return 5 for the sixth number in sequence', () => {
    expect(fibonacciPosition(6)).toEqual(5)
  })
})
